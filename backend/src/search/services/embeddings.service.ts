import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import axios from 'axios';

@Injectable()
export class EmbeddingsService {
  private readonly logger = new Logger(EmbeddingsService.name);
  private readonly openai: OpenAI;
  private readonly bedrock: BedrockRuntimeClient;
  private readonly ollamaEndpoint: string;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });

    this.bedrock = new BedrockRuntimeClient({
      region: this.configService.get<string>('AWS_REGION'),
    });

    this.ollamaEndpoint = this.configService.get('OLLAMA_ENDPOINT') || 'http://localhost:11434';
  }

  async getEmbeddings(text: string, model: string = 'aws-titan'): Promise<number[]> {
    try {
      switch (model) {
        case 'openai':
          throw new Error('OpenAI embeddings not supported - dimension mismatch');
        case 'aws-titan':
          return await this.getAWSEmbeddings(text);
        case 'deepseek':
          throw new Error('Deepseek embeddings not supported - dimension mismatch');
        default:
          return await this.getAWSEmbeddings(text); // Default to AWS Titan
      }
    } catch (error) {
      this.logger.error(`Error getting embeddings with ${model}:`, error);
      throw error;
    }
  }

  private async getOllamaEmbeddings(text: string, modelName: string): Promise<number[]> {
    try {
      const response = await axios.post(`${this.ollamaEndpoint}/api/embeddings`, {
        model: modelName,
        prompt: text,
      });

      return response.data.embedding;
    } catch (error) {
      this.logger.error('Ollama embeddings error:', error);
      throw error;
    }
  }

  private async getOpenAIEmbeddings(text: string): Promise<number[]> {
    const response = await this.openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
    });
    return response.data[0].embedding;
  }

  private async getAWSEmbeddings(text: string): Promise<number[]> {
    const command = new InvokeModelCommand({
      modelId: 'amazon.titan-embed-text-v2:0',
      contentType: 'application/json',
      body: JSON.stringify({
        inputText: text
      }),
    });

    const response = await this.bedrock.send(command);
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    this.logger.log(`Embedding dimensions: ${responseBody.embedding.length}`);
    return responseBody.embedding;
  }
} 