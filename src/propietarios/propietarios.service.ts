import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PropietariosService {
  private propietarios = [
    { id: 1, nombre: 'Luciano Peralta', telefono: '123456', direccion: 'Calle Falsa 123' },
  ];

  findAll() {
    return this.propietarios;
  }

  findOne(id: number) {
    const propietario = this.propietarios.find((p) => p.id === id);
    if (!propietario) throw new NotFoundException('Propietario no encontrado');
    return propietario;
  }

  create(data) {
    const nuevo = { id: Date.now(), ...data };
    this.propietarios.push(nuevo);
    return nuevo;
  }

  update(id: number, data) {
    const index = this.propietarios.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('Propietario no encontrado');
    this.propietarios[index] = { ...this.propietarios[index], ...data };
    return this.propietarios[index];
  }

  remove(id: number) {
    const index = this.propietarios.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('Propietario no encontrado');
    this.propietarios.splice(index, 1);
    return { message: 'Propietario eliminado' };
  }
}
