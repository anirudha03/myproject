// const mysql = require("mysql2");
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "busform",
//     port: 3308
// });

// con.connect((err)=>{
//     if(err) throw err;
//     console.log("connection created....");
// });

// module.exports.con= con;

// const mysql = require("mysql2");

// const con = mysql.createConnection({
//     host: "sql.freedb.tech",
//     user: "freedb_anirudh03",
//     password: "RuhH4Jns6HdSG&k",
//     database: "freedb_bhaaratbus",
//     waitForConnections: true,
//     connectionLimit: 100,
//     queueLimit: 0,
// });

// con.connect((err) => {
//     if (err) throw err;
//     console.log("Connection created....");
// });

// module.exports.con = con;
const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
    host: "sql.freedb.tech",
    user: "freedb_anirudh03",
    password: "RuhH4Jns6HdSG&k",
    database: "freedb_bhaaratbus",
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0,
});

// Handle errors
pool.on('error', (err) => {
    console.error('MySQL Pool Error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        // If the connection is lost, attempt to re-establish it
        console.log('Attempting to re-establish the MySQL connection...');
        pool.end(); // End the old pool
        const newPool = mysql.createPool({ ...pool.config }); // Create a new pool
        module.exports.pool = newPool; // Export the new pool
    }
});

console.log("Connection pool created....");

module.exports.pool = pool;
