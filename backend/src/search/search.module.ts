import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { OpenSearchService } from './services/opensearch.service';
import { EmbeddingsService } from './services/embeddings.service';
import { DocumentEntity, DocumentSchema } from './schemas/document.schema';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: DocumentEntity.name, schema: DocumentSchema },
    ]),
  ],
  controllers: [SearchController],
  providers: [SearchService, OpenSearchService, EmbeddingsService],
})
export class SearchModule {} 