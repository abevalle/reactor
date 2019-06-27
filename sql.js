const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'abe',
    host: 'localhost',
    database: 'ciris',
    password: 'popeysnotkfc',
    port: 5432
});

console.log(ics)

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })