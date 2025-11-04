import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TratamientosService {
  private tratamientos = [
    { id: 1, mascotaId: 1, descripcion: 'Vacuna antirrábica', fecha: '2025-11-03' },
  ];

  findAll() {
    return this.tratamientos;
  }

  findByMascota(mascotaId: number) {
    return this.tratamientos.filter((t) => t.mascotaId === mascotaId);
  }

  create(data) {
    const nuevo = { id: Date.now(), ...data };
    this.tratamientos.push(nuevo);
    return nuevo;
  }

  update(id: number, data) {
    const index = this.tratamientos.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException('Tratamiento no encontrado');
    this.tratamientos[index] = { ...this.tratamientos[index], ...data };
    return this.tratamientos[index];
  }

  remove(id: number) {
    const index = this.tratamientos.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException('Tratamiento no encontrado');
    this.tratamientos.splice(index, 1);
    return { message: 'Tratamiento eliminado' };
  }
}
