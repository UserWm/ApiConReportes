const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const rutaProductos = require('./rutas/productos')
const dotenv = require('dotenv')
const path = require('path')
const puppeteer = require('puppeteer')


dotenv.config()
const app = express()
const port = 3000
app.use(bodyParser.json())
const mongoURI = process.env.CONNECTION_URI

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(mongoURI)
.then(()=> console.log('MongoDB conectado'))
.catch(err => console.log(err))

app.use('/api/producto', rutaProductos)

app.listen(port, () => console.log(`App running on port ${port}!`))