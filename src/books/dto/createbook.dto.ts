import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { LargeNumberLike } from 'crypto';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  authorName: string;

  @IsNotEmpty()
  @IsNumber()
  publicationYear: number;

  @IsNotEmpty()
  @IsString()
  isbn: string;

  @IsNotEmpty()
  @IsNumber()
  numOfPages: number;
}
