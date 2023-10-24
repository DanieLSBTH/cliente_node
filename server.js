const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes = require('./app/routes/clientRoutes'); // Rutas de clientes
const proveedorRoutes = require('./app/routes/proveedorRoutes'); // Rutas de proveedores
const empleadoRoutes = require('./app/routes/empleadoRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', clientRoutes); // Rutas de clientes en /api/clients
app.use('/api', proveedorRoutes); // Rutas de proveedores en /api/proveedores
app.use('/api', empleadoRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
