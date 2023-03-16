import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';


export type BookDocument = Book & Document;

@Schema ({timestamps: true})
export class Book {

  @Prop({required:true})
  title: string;

  @Prop({required:true})
  authorName: string;

  @Prop({required:true,})
  publicationYear: number;

  @Prop({required:true, unique:true})
  isbn: string;

  @Prop({required:true,})
  numOfPages: number;
}

export const BookSchema: MongooseSchema<BookDocument> =
  SchemaFactory.createForClass(Book);

export const BookSchemaDefinition = {
  name: Book.name,
  schema: BookSchema,
};
