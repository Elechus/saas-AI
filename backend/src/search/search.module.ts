import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { DocumentEntity, DocumentSchema } from './schemas/document.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { 
        name: DocumentEntity.name, 
        schema: DocumentSchema,
        collection: 'documents'
      }
    ])
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {} 