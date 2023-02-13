import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const researcherModel  = new Schema({
    firstName: {
      type: String, required: true
    },
    lastName: {
      type: String, required: true
    },
    senderEmail: {
      type: String, 
      required: true, 
      unique: true
    },
    qualification: {
      type: String, enum:["Qualification", "Secondary", "Diploma/NCE", "College Degree", "Masters", "PhD"]
    },
    experience: {
        type: String, enum:["Experience", "Entry Level", "Intermediate", "Advanced"]
      },   
    phone: {
      type: String
    },
    resume: {
        type: String
    },
    interest: [String],
    linkedln:{
      type: String
    },      
    date: {
      type: Date, default: Date.now
    }
  });
  
  export default mongoose.model('researcher', researcherModel )