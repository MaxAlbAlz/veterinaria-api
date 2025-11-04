import { Module } from '@nestjs/common';
import { MascotasModule } from './mascotas/mascotas.module';
import { PropietariosModule } from './propietarios/propietarios.module';
import { TurnosModule } from './turnos/turnos.module';
import { TratamientosModule } from './tratamientos/tratamientos.module';

@Module({
  imports: [MascotasModule, PropietariosModule, TurnosModule, TratamientosModule],
})
export class AppModule {}
