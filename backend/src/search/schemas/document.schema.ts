import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class DocumentEntity extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true, unique: true })
  internal_id: string;

  @Prop({ required: true })
  file_name: string;

  @Prop({ required: true, type: [String] })
  file_paths: string[];

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  expedient: string;

  @Prop({ required: true })
  type: string;

  @Prop()
  description?: string;

  @Prop()
  postulant?: string;

  @Prop()
  gazzette?: string;

  @Prop()
  expedient_type?: string;

  @Prop()
  court?: string;

  @Prop()
  antecedent_type?: string;

  @Prop()
  claimed_type?: string;

  @Prop()
  sentence_meaning?: string;

  @Prop()
  sentence_date?: Date;

  @Prop()
  challenged_authority?: string;

  @Prop()
  s3_file_paths?: string[];
}

export const DocumentSchema = SchemaFactory.createForClass(DocumentEntity); 