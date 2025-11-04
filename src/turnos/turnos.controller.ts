import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TurnosService } from './turnos.service';

@Controller('turnos')
export class TurnosController {
  constructor(private readonly turnosService: TurnosService) {}

  @Get()
  findAll() {
    return this.turnosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turnosService.findOne(Number(id));
  }

  @Post()
  create(@Body() body) {
    return this.turnosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.turnosService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turnosService.remove(Number(id));
  }
}
