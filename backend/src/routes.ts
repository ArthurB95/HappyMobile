//MVC
// M = MODEL
// V = VIEWS
// C = CONTROLLERS

import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './Config/upload'
import OrphanagesController from './Controllers/OrphanagesController'


const routes = Router()
const upload = multer(uploadConfig)

// PADRÕES CONTROLLER: INDEX, SHOW, CREATE, UPDATE, DELETE

routes.get('/orphanages', OrphanagesController.index) 

routes.get('/orphanages/:id', OrphanagesController.show)

routes.post('/orphanages', upload.array('images') , OrphanagesController.create) 

export default routes