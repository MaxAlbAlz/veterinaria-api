import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';

@Injectable()
export class TurnosService {
  private turnos = [
    { id: 1, fecha: '2025-11-10', hora: '10:00', mascotaId: 1, motivo: 'Vacunación', estado: 'pendiente' },
  ];

  findAll() {
    return this.turnos;
  }

  findOne(id: number) {
    const turno = this.turnos.find((t) => t.id === id);
    if (!turno) throw new NotFoundException('Turno no encontrado');
    return turno;
  }

  create(data) {
    const hoy = new Date();
    const fechaTurno = new Date(data.fecha);

    if (fechaTurno < hoy) {
      throw new BadRequestException('No se puede agendar un turno en una fecha pasada');
    }

    const nuevo = { id: Date.now(), estado: 'pendiente', ...data };
    this.turnos.push(nuevo);
    return nuevo;
  }

  update(id: number, data) {
    const index = this.turnos.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException('Turno no encontrado');
    this.turnos[index] = { ...this.turnos[index], ...data };
    return this.turnos[index];
  }

  remove(id: number) {
    const index = this.turnos.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException('Turno no encontrado');
    this.turnos.splice(index, 1);
    return { message: 'Turno cancelado' };
  }
}
