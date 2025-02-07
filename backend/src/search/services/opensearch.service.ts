import { Injectable, Logger } from '@nestjs/common';
import { Client } from '@opensearch-project/opensearch';
import { ConfigService } from '@nestjs/config';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { AwsSigv4Signer } from '@opensearch-project/opensearch/aws';

@Injectable()
export class OpenSearchService {
  private readonly client: Client;
  private readonly logger = new Logger(OpenSearchService.name);

  constructor(private configService: ConfigService) {
    const node = this.configService.getOrThrow<string>('OPENSEARCH_NODE');
    const region = this.configService.getOrThrow<string>('AWS_REGION');

    this.client = new Client({
      ...AwsSigv4Signer({
        region: region,
        service: 'aoss',
        getCredentials: async () => {
          const credentials = await defaultProvider()();
          return credentials;
        }
      }),
      node: node,
    });
  }

  async search(index: string, vector: number[], size: number = 10) {
    try {
      const response = await this.client.search({
        index: 'bedrock-knowledge-base-default-index',
        body: {
          size,
          query: {
            knn: {
              "bedrock-knowledge-base-default-vector": {
                vector: vector,
                k: size
              }
            }
          },
          _source: [
            "AMAZON_BEDROCK_TEXT",
            "x-amz-bedrock-kb-source-uri",
            "x-amz-bedrock-kb-document-page-number"
          ]
        }
      });

      return response.body.hits.hits;
    } catch (error) {
      this.logger.error('OpenSearch search error:', error);
      throw error;
    }
  }

  async listIndices() {
    try {
      const response = await this.client.cat.indices({ format: 'json' });
      this.logger.log('Available indices:', response.body);
      return response.body;
    } catch (error) {
      this.logger.error('Error listing indices:', error);
      throw error;
    }
  }

  async getMapping(index: string) {
    try {
      const response = await this.client.indices.getMapping({
        index: 'bedrock-knowledge-base-default-index'
      });
      this.logger.log('Index mapping:', response.body);
      return response.body;
    } catch (error) {
      this.logger.error('Error getting mapping:', error);
      throw error;
    }
  }
} 