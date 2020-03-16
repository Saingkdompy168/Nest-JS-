import { IsString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsInt()
  @IsNotEmpty()
  readonly qty: number;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}
