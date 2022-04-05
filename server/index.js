const app = require('express')();
const rutas = require('./controlador/rutas');

const PORT = process.env.PORT || 4000;

//Middleware SQL
const mysql = require('mysql');
const myConnection = require("express-myconnection");
const dpOptions = {
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'leyes'
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