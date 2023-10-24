const Client = require('../models/clientModel');

exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.getAllClients();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.getClientById = async (req, res) => {
  const { id } = req.params;

  try {
    const client = await Client.getClientById(id);
    if (!client) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.createClient = async (req, res) => {
  const { nombre, apellido, razonsocial, direccion, nit, estado } = req.body;

  if (!nombre || !apellido || !razonsocial || !direccion || !nit || !estado) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    await Client.createClient({ nombre, apellido, razonsocial, direccion, nit, estado });
    res.status(201).json({ message: 'Cliente agregado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.updateClient = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, razonsocial, direccion, nit, estado } = req.body;

  if (!nombre || !apellido || !razonsocial || !direccion || !nit || !estado) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const existingClient = await Client.getClientById(id);
    if (!existingClient) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    await Client.updateClient(id, { nombre, apellido, razonsocial, direccion, nit, estado });
    res.json({ message: 'Cliente actualizado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.deleteClient = async (req, res) => {
  const { id } = req.params;

  try {
    const existingClient = await Client.getClientById(id);
    if (!existingClient) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    await Client.deleteClient(id);
    res.json({ message: 'Cliente eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
