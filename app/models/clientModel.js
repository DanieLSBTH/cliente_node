const db = require('../config/db');

class Client {
  static async getAllClients() {
    const query = 'SELECT * FROM clients';
    const { rows } = await db.query(query);
    return rows;
  }

  static async getClientById(id) {
    const query = 'SELECT * FROM clients WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }

  static async createClient({ nombre, apellido, razonsocial, direccion, nit, estado }) {
    const query = 'INSERT INTO clients (nombre, apellido, razonsocial, direccion, nit, estado) VALUES ($1, $2, $3, $4, $5, $6)';
    await db.query(query, [nombre, apellido, razonsocial, direccion, nit, estado]);
  }

  static async updateClient(id, { nombre, apellido, razonsocial, direccion, nit, estado }) {
    const query = 'UPDATE clients SET nombre = $2, apellido = $3, razonsocial = $4, direccion = $5, nit = $6, estado = $7 WHERE id = $1';
    await db.query(query, [id, nombre, apellido, razonsocial, direccion, nit, estado]);
  }

  static async deleteClient(id) {
    const query = 'DELETE FROM clients WHERE id = $1';
    await db.query(query, [id]);
  }
}

module.exports = Client;
