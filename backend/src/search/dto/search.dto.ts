import { IsOptional, IsString, IsNumber, IsDate, Min, Max, IsObject, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';

export enum SortOption {
  RELEVANCE = 'relevance',
  SENTENCE_DATE_ASC = 'sentence_date_asc',
  SENTENCE_DATE_DESC = 'sentence_date_desc',
  UPDATED_AT_ASC = 'updated_at_asc',
  UPDATED_AT_DESC = 'updated_at_desc',
  EXPEDIENT_ASC = 'expedient_asc',
  EXPEDIENT_DESC = 'expedient_desc'
}

export class SearchDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  internal_id?: string;

  @IsOptional()
  @IsString()
  file_name?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  expedient?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  postulant?: string;

  @IsOptional()
  @IsString()
  gazzette?: string;

  @IsOptional()
  @IsString()
  expedient_type?: string;

  @IsOptional()
  @IsString()
  court?: string;

  @IsOptional()
  @IsString()
  antecedent_type?: string;

  @IsOptional()
  @IsString()
  claimed_type?: string;

  @IsOptional()
  @IsString()
  sentence_meaning?: string;

  @IsOptional()
  @IsString()
  sentence_date?: string;

  @IsOptional()
  @IsString()
  challenged_authority?: string;

  @IsObject()
  query: {
    text?: string;
    [key: string]: any;
  };

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsObject()
  customQuery?: Record<string, any>;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => parseInt(value) || 1)
  page: number = 1;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  @Transform(({ value }) => parseInt(value) || 20)
  pageSize: number = 20;

  @IsOptional()
  @IsEnum(SortOption)
  sort: SortOption = SortOption.RELEVANCE;
} 