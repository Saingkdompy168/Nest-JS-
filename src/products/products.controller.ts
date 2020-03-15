import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreatProductDTO } from './dto/create-product.dto';
import { promises } from 'dns';

@Controller('products')
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
  }
}
