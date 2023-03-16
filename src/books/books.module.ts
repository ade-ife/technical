import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { MongooseModule } from "@nestjs/mongoose";
import { BookSchemaDefinition } from "./books.schema";

@Module({
  imports: [MongooseModule.forFeature([BookSchemaDefinition])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
