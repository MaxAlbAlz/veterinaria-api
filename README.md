# 🏥 API REST - Clínica Veterinaria

Proyecto desarrollado con **NestJS** como parte del trabajo final de la materia **EDI**.  
El objetivo es implementar un sistema REST que permita administrar la información de una clínica veterinaria.

---

##  Objetivos

El sistema permite:

- Registrar y consultar **mascotas** y sus **propietarios**.  
- Agendar y administrar **turnos veterinarios**.  
- Registrar **diagnósticos, vacunas y tratamientos**.  
- Consultar el **historial médico** de cada mascota.  
- Consultar la lista de **clientes con chequeo anual o vacuna próxima**.

---

##  Tecnologías utilizadas

- **Node.js** + **NestJS**
- **TypeScript**
- **JSON** como formato de respuesta

---

##  Endpoints principales

###  Mascotas
| Método | Endpoint | Descripción |
|:--|:--|:--|
| GET | `/mascotas` | Devuelve todas las mascotas registradas |
| GET | `/mascotas/:id` | Devuelve una mascota específica |
| POST | `/mascotas` | Crea una nueva mascota |
| PUT | `/mascotas/:id` | Actualiza datos de una mascota |
| DELETE | `/mascotas/:id` | Elimina una mascota |

###  Propietarios
| Método | Endpoint | Descripción |
|:--|:--|:--|
| GET | `/propietarios` | Lista todos los propietarios |
| GET | `/propietarios/:id` | Devuelve un propietario |
| POST | `/propietarios` | Crea un nuevo propietario |
| PUT | `/propietarios/:id` | Modifica datos del propietario |
| DELETE | `/propietarios/:id` | Elimina un propietario |

###  Turnos
| Método | Endpoint | Descripción |
|:--|:--|:--|
| GET | `/turnos` | Devuelve todos los turnos |
| GET | `/turnos/:id` | Consulta un turno |
| POST | `/turnos` | Crea un nuevo turno (no permite fechas pasadas) |
| PUT | `/turnos/:id` | Modifica un turno existente |
| DELETE | `/turnos/:id` | Elimina un turno |

###  Tratamientos
| Método | Endpoint | Descripción |
|:--|:--|:--|
| GET | `/tratamientos` | Lista todos los tratamientos registrados |
| GET | `/tratamientos/:id` | Muestra detalles de un tratamiento |
| POST | `/tratamientos` | Registra un nuevo tratamiento o vacuna |
| PUT | `/tratamientos/:id` | Actualiza un tratamiento |
| DELETE | `/tratamientos/:id` | Elimina un tratamiento |

---

##  Validaciones implementadas

- No se permite crear **turnos con fecha pasada**.  
- No se permite registrar **mascotas sin dueño**.  
- Respuestas en formato **JSON** con mensajes de error claros (`404`, `400`, etc.).

---

##  Autor

**Maximiliano Alberto Alzù**  
Estudiante de la carrera de Programación  
Trabajo final de la materia **EDI (Entornos de Desarrollo e Integración)**  
Año 2025

---

##  Ejecución

```bash
npm install
npm run start:dev
