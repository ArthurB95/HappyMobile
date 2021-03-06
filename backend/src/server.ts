// Rota = conjunto
// Recurso = usuário

// Metodos HTTP = GET, POST, PUT, DELETE
// Parametros

// GET = Buscar informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletar uma informação

// QUERY: http://localhost:3333/users?search=diego
// ROUTE PARAMS: http://localhost:3333/users/1 (IDENTIFICAR UM RECURSO)
// BODY: http://localgost:3333/users/1 (IDENTIFICAR UM RECURSO)

import express from 'express'
import path from 'path'
import cors from 'cors'

import 'express-async-errors'

import './Database/connection'

import routes from './routes'

import errorHandler from './Errors/handler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333)

