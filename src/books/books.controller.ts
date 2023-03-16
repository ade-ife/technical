import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/createbook.dto';

@Controller('books')
export class BooksController {
  constructor(
    @Inject(BooksService) private readonly bookService: BooksService,
  ) {}


  //To get Books
  @Get('')
  async getBooks() {
    try {
      const response = await this.bookService.getBooks();
      return { message: 'Books fetched successfully', response };
    } catch (error) {
      throw new HttpException('Failed to get Books', HttpStatus.BAD_REQUEST);
    }
  }

  //To create a book
  @Post('')
  async createBook(@Body() payload: CreateBookDto) {
    try {
      const response = await this.bookService.createBook(payload);
      return { message: 'Book created successfully', response };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  //To delete a book by isbn
  @Delete('/:isbn')
  async deleteBookByISBN(@Param('isbn') isbn: string) {
    try {
      await this.bookService.deleteBookByISBN(isbn);
      return { message: 'Book deleted successfully' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }


}
