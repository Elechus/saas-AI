import { IsOptional, IsString, IsNumber, IsDate, Min, Max, IsObject } from 'class-validator';
import { Transform } from 'class-transformer';

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

  @IsOptional()
  @IsObject()
  query?: Record<string, string>;

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
} 