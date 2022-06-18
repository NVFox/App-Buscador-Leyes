require("dotenv").config()

const app = require('express')();
const rutas = require('./controlador/rutas');

const PORT = process.env.PORT || 4000;

//Middleware SQL
const mysql = require('mysql');
const myConnection = require("express-myconnection");
const dpOptions = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS || '',
        port: 3306,
        database: process.env.DB_NAME
    }
app.use(myConnection(mysql, dpOptions, 'pool'))

//Middleware CORS
const cors = require("cors");
app.use(cors({
    origin: "*"
}))

app.use('/', rutas)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})