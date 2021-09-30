import express from 'express'
const router = express.Router()
import { checkJwt } from '../middelwares/oAuth'
import jwtAuthz from 'express-jwt-authz'

const checkScopes = jwtAuthz(["read:projects", "create:projects"], {
      customScopeKey: "permissions",
    //   checkAllScopes: true
}); 
 
import { 
    getProjects, getUserProjects, postProject, showProject, editProject, updateProject, deleteProject
} from '../controllers/projectController'

router.get('/', checkJwt, getProjects)
router.get('/user', checkJwt, getUserProjects)
router.post('/', checkJwt, postProject)
router.get('/:id', showProject)
router.get('/:id', editProject)
router.put('/:id', updateProject)
router.delete('/delete/:id', deleteProject)

export default router;