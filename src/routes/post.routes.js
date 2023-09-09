import { Router } from 'express'

const routerPost = Router()

routerPost.post('/passengers')
routerPost.post('/cities')  
routerPost.post('/flights') 
routerPost.post('/travels') 

export default routerPost