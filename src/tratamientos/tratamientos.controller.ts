import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TratamientosService } from './tratamientos.service';

@Controller('tratamientos')
export class TratamientosController {
  constructor(private readonly tratamientosService: TratamientosService) {}

  @Get()
  findAll() {
    return this.tratamientosService.findAll();
  }

  @Get('/mascota/:id')
  findByMascota(@Param('id') id: string) {
    return this.tratamientosService.findByMascota(Number(id));
  }

  @Post()
  create(@Body() body) {
    return this.tratamientosService.create(body);
  }
}
