import {  Injectable,  } from "@nestjs/common";
import { Book, } from "./books.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateBookDto } from "./dto/createbook.dto";

@Injectable()
export class BooksService{
  constructor(
    @InjectModel(Book.name)
    private readonly bookModel: Model<Book>,
  ) {}

  async getBooks() {
    const books = await this.bookModel.find().sort({ numOfPages: 1 }).exec();
    return books;
  }


  async deleteBookByISBN(isbn: string): Promise<void> {
    const book = await this.bookModel.findOne({ isbn }).exec();
    if (!book) {
      throw new Error(`Book with ISBN ${isbn} not found`);
    }
    await this.bookModel.deleteOne({ isbn }).exec();
  }



  async createBook(payload: CreateBookDto) {
    const existingBook = await this.bookModel.findOne({ isbn: payload.isbn }).exec();
    if (existingBook) {
      throw new Error('Book with the given ISBN already exists.');
    }
    const book = new this.bookModel(payload);
    await book.save();
    return book;
  }


}



