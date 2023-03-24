const express = require('express');
const app = express();
const modelProductos = require('./models').Productos;

app.listen(3000, () => { console.log('http://localhost:3000') });

app.get('/productos', (req, res) => {
  modelProductos.findAll()
    .then(productos => {
      res.json({
        productos
      })
    })
})