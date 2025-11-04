import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascotasModule } from './mascotas/mascotas.module';

import { TratamientosModule } from './tratamientos/tratamientos.module';
import { TurnosModule } from './turnos/turnos.module';
import { PropietariosController } from './propietarios/propietarios.controller';
import { PropietariosService } from './propietarios/propietarios.service';

@Module({
  imports: [MascotasModule, TurnosModule, TratamientosModule],
  controllers: [AppController, PropietariosController],
  providers: [AppService, PropietariosService],
})
export class AppModule {}
