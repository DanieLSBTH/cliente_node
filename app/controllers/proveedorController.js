const Proveedor = require('../models/proveedorModel');

exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.getAllProveedores();
    res.json(proveedores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.getProveedorById = async (req, res) => {
  const { id } = req.params;

  try {
    const proveedor = await Proveedor.getProveedorById(id);
    if (!proveedor) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json(proveedor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.createProveedor = async (req, res) => {
  const { nombre, direccion, telefono, nit } = req.body;

  if (!nombre || !direccion || !telefono || !nit) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    await Proveedor.createProveedor({ nombre, direccion, telefono, nit });
    res.status(201).json({ message: 'Proveedor agregado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.updateProveedor = async (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, telefono, nit } = req.body;

  if (!nombre || !direccion || !telefono || !nit) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const existingProveedor = await Proveedor.getProveedorById(id);
    if (!existingProveedor) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }

    await Proveedor.updateProveedor(id, { nombre, direccion, telefono, nit });
    res.json({ message: 'Proveedor actualizado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.deleteProveedor = async (req, res) => {
  const { id } = req.params;

  try {
    const existingProveedor = await Proveedor.getProveedorById(id);
    if (!existingProveedor) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }

    await Proveedor.deleteProveedor(id);
    res.json({ message: 'Proveedor eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
