import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contactModel  = new Schema({
    name: {type: String, required: true},
  
    email: {type: String, required: true},
  
    subject: {type: String},
  
    message: {type: String, required: true },
    
    date: {type: Date, default: Date.now}
  });

  
  export default mongoose.model('contact', contactModel )