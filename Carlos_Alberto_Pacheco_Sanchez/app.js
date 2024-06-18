import express from "express"
import mongoose from "mongoose"

import path from "node:path"
import { fileURLToPath } from 'node:url'

import { productRoutes } from "./routes/products.js"
import { reportRoutes } from "./routes/reports.js"


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = 3000

app.use(express.json());
const mongoURI = "mongodb://localhost:27017/dbProducts"

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB successful conection'))
    .catch(err => console.log(err))


app.use('/api/products', productRoutes)
app.use('/api/report', reportRoutes)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))