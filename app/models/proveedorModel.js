const db = require('../config/db');

class Proveedor {
  static async getAllProveedores() {
    const query = 'SELECT * FROM proveedores';
    const { rows } = await db.query(query);
    return rows;
  }

  static async getProveedorById(id) {
    const query = 'SELECT * FROM proveedores WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }

  static async createProveedor({ nombre, direccion, telefono, nit }) {
    const query = 'INSERT INTO proveedores (nombre, direccion, telefono, nit) VALUES ($1, $2, $3, $4)';
    await db.query(query, [nombre, direccion, telefono, nit]);
  }

  static async updateProveedor(id, { nombre, direccion, telefono, nit }) {
    const query = 'UPDATE proveedores SET nombre = $2, direccion = $3, telefono = $4, nit = $5 WHERE id = $1';
    await db.query(query, [id, nombre, direccion, telefono, nit]);
  }

  static async deleteProveedor(id) {
    const query = 'DELETE FROM proveedores WHERE id = $1';
    await db.query(query, [id]);
  }
}

module.exports = Proveedor;
