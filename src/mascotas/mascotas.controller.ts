import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MascotasService } from './mascotas.service';

@Controller('mascotas')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}

  @Get()
  findAll() {
    return this.mascotasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mascotasService.findOne(Number(id));
  }

  @Post()
  create(@Body() body) {
    return this.mascotasService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.mascotasService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mascotasService.remove(Number(id));
  }
}
