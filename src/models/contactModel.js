import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contactModel  = new Schema({
  senderName: {
      type: String, required: true
    },
    senderEmail: {
      type: String, 
      required: true, 
      unique: true
    },
    subject: {
      type: String, enum:["Assignment/Essay", "Research project", "Data Analyses", "Technical/Article writing", "Programming", "Others"]
    },
    message: {
      type: String, required: true 
    },
    phoneNumber: {
      type: Number
    },
    date: {
      type: Date, default: Date.now
    }
  });
  
  export default mongoose.model('contact', contactModel )