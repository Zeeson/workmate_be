import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const researcherModel  = new Schema({
  fullName: {
      type: String, required: true
    },
    senderEmail: {
      type: String, required: true
    },
    qualification: {
      type: String, enum:["Qualification", "Secondary", "Diploma", "College-Degree", "Masters", "PhD"]
    },
    experience: {
        type: String, enum:["Experience", "Entry-Level", "Intermediate", "Advanced"]
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