const controlador = {};

controlador.consultarArticulos = (req, res) => {
    req.getConnection((err, conn) => {
        err ? console.log(err)
        : conn.query("SELECT * FROM articulos a INNER JOIN titulos t ON a.tit_artId = t.titId INNER JOIN leyes l ON t.tit_leyId = l.leyId", (artErr, results) => {
            artErr ? console.log(artErr) : res.json(results)
        })
    })
}

controlador.consultarLeyes = (req, res) => {
    const { leyId } = req.params;

    req.getConnection((err, conn) => {
        err ? console.log(err)
        : conn.query(`SELECT * FROM parrafos p INNER JOIN articulos a ON p.art_parId = a.artId INNER JOIN titulos t ON a.tit_artId = t.titId INNER JOIN leyes l ON t.tit_leyId = l.leyId WHERE leyId = ?`, [leyId], (parErr, results) => {
            if (parErr) {
                console.log(parErr);
            } else if (results.length > 0) {
                const arrFiltrado = [...new Set(results.map(item => item.artId))];
                conn.query(arrFiltrado.reduce((qr, _item, i, arr) => i == arr.length - 1 ? qr + "?" : qr + "?, ", "SELECT * FROM articulos a INNER JOIN titulos t ON a.tit_artId = t.titId INNER JOIN leyes l ON t.tit_leyId = l.leyId WHERE artId NOT IN (") + ") AND leyId = ? ORDER BY artNombre ASC", [...arrFiltrado, leyId], (finalErr, finalResults) => {
                    if (finalErr) {
                        console.log(err)
                    } else {
                        res.json([...finalResults, ...results].sort((a, b) => a.artNombre.localeCompare(b.artNombre)))
                    } 
                })
            } else {
                conn.query(`SELECT * FROM articulos a INNER JOIN titulos t ON a.tit_artId = t.titId INNER JOIN leyes l ON t.tit_leyId = l.leyId WHERE leyId = ? ORDER BY artNombre ASC`, [leyId], (artErr, finalResults) => {
                    artErr ? console.log(artErr) : res.json(finalResults)
                })
            }
        })
    })
}

module.exports = controlador;