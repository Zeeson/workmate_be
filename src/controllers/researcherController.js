import Researcher from '../models/researcherModel'
import asyncHandler from "express-async-handler"
import {sendEmail} from "../middelwares/courierEmail"

export const getResearchers = (req, res) => {
    Researcher.find()
    .then((researchers) => {
        res.status(200).json({
            message: 'all researchers',
            researchers,
        })
    })
    .catch(err => {
        res.json(err)
    })
}

export const postResearcher = async (req, res, next) => {
console.log(req.body)

try {
    const {
        firstName, lastName, senderEmail, phone, qualification, experience, resume, interest, linkedln
    } = req.body
    
    const newResearcher = new Researcher({
        firstName,
        lastName,
        senderEmail,
        phone,
        qualification,
        experience,
        resume,
        interest,
        linkedln
    })
    await newResearcher.save().then((researcher) => {
        return res.status(200).json({
            message: 'Thanks! We successfully recieved your application.',
            researcher
        })
        
    })
   await sendEmail(firstName, senderEmail, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.status({ message: 'Email sent!!!' });
        }
    });
  
  } catch (error) {
    return next(error)
  }

    

    
    
    // await newResearcher.save().then((researcher) => {
    //     return res.status(200).json({
    //         message: 'Thanks! We successfully recieved your application.',
    //         researcher
    //     })
    // }).catch((err) => {
    //     res.status(400).json(err)
    // })
  

}
  
export const showResearcher = (req, res, next) => {
    Researcher.findById(req.params.id).then(researcher =>{
        res.status(200).json(researcher)
    }).catch(err => {
        res.status(400).json(err)
    })
}