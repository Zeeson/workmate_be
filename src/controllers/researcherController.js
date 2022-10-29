import Researcher from '../models/researcherModel'

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

export const postResearcher = (req, res) => {
console.log(req.body)

    const {
        fullName, senderEmail, phone, qualification, experience, resume, interest, linkedln
    } = req.body

    const newResearcher = new Researcher({
        fullName,
        senderEmail,
        phone,
        qualification,
        experience,
        resume,
        interest,
        linkedln
    })
    
    newResearcher.save().then((researcher) => {
        return res.status(200).json({
            message: 'Thanks! We successfully recieved your application.',
            researcher
        })
    }).catch((err) => {
        res.status(400).json(err)
    })
}


export const showResearcher = (req, res, next) => {
    Researcher.findById(req.params.id).then(researcher =>{
        res.status(200).json(researcher)
    }).catch(err => {
        res.status(400).json(err)
    })
}