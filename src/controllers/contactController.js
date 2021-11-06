import Contact from '../models/contactModel'

export const getContacts = (req, res) => {
    Contact.find()
    .then((contacts) => {
        res.status(200).json({
            message: 'all contact messages',
            contacts,
        })
    })
    .catch(err => {
        res.json(err)
    })
}

export const postContact = (req, res) => {
console.log(req.body)

    const {
        senderName, senderEmail, subject, message, phoneNumber,
    } = req.body

    const newContact = new Contact({
        senderName,
        senderEmail,
        subject,
        message,
        phoneNumber,
    })
    
    newContact.save().then((contact) => {
        return res.status(200).json({
            message: 'Submission is succesfful',
            contact
        })
    }).catch((err) => {
        res.status(400).json(err)
    })
}