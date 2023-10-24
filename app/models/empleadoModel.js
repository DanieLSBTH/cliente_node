const db = require('../config/db');

class Empleado {
  static async getAllEmpleados() {
    const query = 'SELECT * FROM empleados';
    const { rows } = await db.query(query);
    return rows;
  }

  static async getEmpleadoById(id) {
    const query = 'SELECT * FROM empleados WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }

  static async createEmpleado({ nombre, apellido, direccion, telefono, puesto, salario, horario }) {
    const query = 'INSERT INTO empleados (nombre, apellido, direccion, telefono, puesto, salario, horario) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    await db.query(query, [nombre, apellido, direccion, telefono, puesto, salario, horario]);
  }

  static async updateEmpleado(id, { nombre, apellido, direccion, telefono, puesto, salario, horario }) {
    const query = 'UPDATE empleados SET nombre = $2, apellido = $3, direccion = $4, telefono = $5, puesto = $6, salario = $7, horario = $8 WHERE id = $1';
    await db.query(query, [id, nombre, apellido, direccion, telefono, puesto, salario, horario]);
  }

  static async deleteEmpleado(id) {
    const query = 'DELETE FROM empleados WHERE id = $1';
    await db.query(query, [id]);
  }
}

module.exports = Empleado;
