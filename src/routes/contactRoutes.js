import express from 'express'
const router = express.Router()
 
import { 
    getContacts, postContact,
} from '../controllers/contactController'

router.get('/', getContacts)
router.post('/',  postContact)

export default router;