import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Lucho', especie: 'Perro', raza: 'Bóxer', edad: 6, duenioId: 1 },
  ];

  findAll() {
    return this.mascotas;
  }

  findOne(id: number) {
    const mascota = this.mascotas.find((m) => m.id === id);
    if (!mascota) throw new NotFoundException('Mascota no encontrada');
    return mascota;
  }

  create(mascota) {
    const nueva = { id: Date.now(), ...mascota };
    this.mascotas.push(nueva);
    return nueva;
  }

  update(id: number, datos) {
    const index = this.mascotas.findIndex((m) => m.id === id);
    if (index === -1) throw new NotFoundException('Mascota no encontrada');
    this.mascotas[index] = { ...this.mascotas[index], ...datos };
    return this.mascotas[index];
  }

  remove(id: number) {
    const index = this.mascotas.findIndex((m) => m.id === id);
    if (index === -1) throw new NotFoundException('Mascota no encontrada');
    this.mascotas.splice(index, 1);
    return { message: 'Mascota eliminada' };
  }
}
