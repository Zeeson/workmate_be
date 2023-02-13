import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const freelancerModel = new Schema({
    firstName: {
        type: String, 
        require:[true, "firstname is required"]
    },
    lastName: {
        type: String, 
        require:[true, "lastname is required"]
    },
    email: {
        type: String,
        require: [true, "email is required"]
    },
    password: {
        type: String,
        require: [true, "password is required"]
    },
    role: {
        type: String,
        enum: ['admin', 'client', 'freelancer'],
        default: 'freelancer'
    }
})


export default mongoose.model('freelancer', freelancerModel)