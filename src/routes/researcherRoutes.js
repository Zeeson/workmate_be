import express from 'express'
const router = express.Router()
 
import { 
    getResearchers, postResearcher, showResearcher
} from '../controllers/researcherController'

router.get('/', getResearchers)
router.post('/',  postResearcher)
router.get('/:id', showResearcher)

export default router;