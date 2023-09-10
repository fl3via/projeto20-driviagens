import { Router } from 'express'
import { passengers } from '../controllers/tudo.controllers.js'
import { validateSchemas } from '../middlewares/validate.middleware.js'
import { passengersSchemas } from '../schemas/validateSchemas.js'
import {cities} from '../controllers/tudo.controllers.js'
import { citiesSchemas } from '../schemas/validateSchemas.js'


const routerPost = Router()

routerPost.post('/passengers', validateSchemas(passengersSchemas), passengers)
routerPost.post('/cities',  validateSchemas(citiesSchemas), cities)  
routerPost.post('/flights') 
routerPost.post('/travels') 

export default routerPost