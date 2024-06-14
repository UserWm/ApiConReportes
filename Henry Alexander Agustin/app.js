const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Path = require('path')

const app = express()
const port = 3000

app.use(bodyParser.json())
const mongoUrl = 'mongodb://localhost:27017/DBProductos'

app.use('/uploads', express.static(Path.join(__dirname, 'uploads')))
app.use(express.static(Path.join(__dirname, 'public')))

mongoose.connect(mongoUrl)
.then(()=> console.log('MongoDb conectado'))
.catch(err => console.log(err))

const rutaProductos = require('./rutas/productos')
app.use('/api/producto', rutaProductos)

app.listen(port, () => console.log(`Servidor listo en el puerto: ${port}!`))
