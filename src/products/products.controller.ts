import { TransformInterceptor } from './../common/interceptors/transform.interceptor';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CreatProductDTO } from './dto/create-product.dto';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Post()
  async create(@Body() product: CreatProductDTO): Promise<Product[]> {
    return this.productsService.create(product);
  }

  @Get()
  async findAll(@Param() param): Promise<Product[]> {
    return this.productsService.findAll();
  }
  @Get(':id')
  async findOne(@Param() param): Promise<Product> {
    return this.productsService.findOne(param.id);
  }

  @Delete(':id')
  async delete(@Param() param): Promise<Product[]> {
    return this.productsService.delete(param.id);
    // throw new HttpException('Something went wrong...!', HttpStatus.BAD_REQUEST);
  }
}
