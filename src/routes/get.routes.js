import { Router } from 'express'

const routerGet = Router()

routerGet.get('/flights')
routerGet.get('/passengers/travels')  

export default routerGet