const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "ztGOvjPiwbGRipLonMACljFoQuozEcLH",
    host: "postgres.railway.internal",
    database: "railway",
    port: 5432
});

module.exports = pool;