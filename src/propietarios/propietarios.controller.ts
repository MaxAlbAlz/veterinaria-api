import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PropietariosService } from './propietarios.service';

@Controller('propietarios')
export class PropietariosController {
  constructor(private readonly propietariosService: PropietariosService) {}

  @Get()
  findAll() {
    return this.propietariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propietariosService.findOne(Number(id));
  }

  @Post()
  create(@Body() body) {
    return this.propietariosService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.propietariosService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propietariosService.remove(Number(id));
  }
}
