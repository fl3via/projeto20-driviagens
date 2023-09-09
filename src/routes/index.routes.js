import { Router } from 'express'
import routerPost from './post.routes.js'
import routerGet from './get.routes.js'


const router = Router()

router.use(routerPost)
router.use(routerGet)

export default router
