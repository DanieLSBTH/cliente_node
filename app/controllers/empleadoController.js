const Empleado = require('../models/empleadoModel');

exports.getAllEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.getAllEmpleados();
    res.json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.getEmpleadoById = async (req, res) => {
  const { id } = req.params;

  try {
    const empleado = await Empleado.getEmpleadoById(id);
    if (!empleado) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.json(empleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.createEmpleado = async (req, res) => {
  const { nombre, apellido, direccion, telefono, puesto, salario, horario } = req.body;

  if (!nombre || !apellido || !direccion || !telefono || !puesto || !salario || !horario) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    await Empleado.createEmpleado({ nombre, apellido, direccion, telefono, puesto, salario, horario });
    res.status(201).json({ message: 'Empleado agregado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.updateEmpleado = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, direccion, telefono, puesto, salario, horario } = req.body;

  if (!nombre || !apellido || !direccion || !telefono || !puesto || !salario || !horario) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const existingEmpleado = await Empleado.getEmpleadoById(id);
    if (!existingEmpleado) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    await Empleado.updateEmpleado(id, { nombre, apellido, direccion, telefono, puesto, salario, horario });
    res.json({ message: 'Empleado actualizado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.deleteEmpleado = async (req, res) => {
  const { id } = req.params;

  try {
    const existingEmpleado = await Empleado.getEmpleadoById(id);
    if (!existingEmpleado) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    await Empleado.deleteEmpleado(id);
    res.json({ message: 'Empleado eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
