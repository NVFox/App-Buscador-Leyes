const controlador = {};

controlador.consultarArticulos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM articulos, titulos, leyes", (err, results) => {
            err ? console.log(err) : res.json(results)
        })
    })
}

module.exports = controlador;