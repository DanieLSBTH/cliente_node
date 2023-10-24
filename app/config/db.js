const { Pool } = require('pg');

const pool = new Pool({
  user: 'umg_antigua_user',
  host: 'dpg-ckrfeqm2eoec73ffjql0-a.oregon-postgres.render.com',
  database: 'umg_antigua',
  password: 'U6mQANExZDR0XSp5fsB5LG7m14Ldz2o6',
  port: 5432,
});

module.exports = pool;