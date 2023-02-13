import express from 'express'
const router = express.Router()

import { 
    paymentForm, getPaymentDetails, receiptPage 
} from '../controllers/paymentController'


router.post('/pay', paymentForm); 
router.get('/callback', getPaymentDetails); 
router.get('/receipt/:id', receiptPage); 

export default router;