const mysql = require('mysql')

const conn = mysql.createPool({
    connectionLimit: 100,
        host: "127.0.0.1",
        user: "root",
        database: "blogs",
        debug: false
})

module.exports = conn