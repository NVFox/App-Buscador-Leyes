const controlador = {};

controlador.consultarArticulos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM articulos, titulos, leyes", (err, results) => {
            err ? console.log(err) : res.json(results)
        })
    })
}

controlador.consultarLeyes = (req, res) => {
    const { leyId } = req.params;

    req.getConnection((err, conn) => {
        conn.query(`SELECT * FROM parrafos, articulos, titulos, leyes WHERE leyId = ?`, [leyId], (err, results) => {
            if (err) {
                console.log(err);
            } else if (results.length > 0) {
                res.json(results);
            } else {
                conn.query(`SELECT * FROM articulos, titulos, leyes WHERE leyId = ?`, [leyId], (err, finalResults) => {
                    err ? console.log(err) : res.json(finalResults)
                })
            }
        })
    })
}

module.exports = controlador;