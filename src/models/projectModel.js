import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectModel  = new Schema({
    title: {
      type: String, required: true
    },
    type: {
      type: String, enum:["Assignment/Essay", "Research project", "Data Analyses", "Technical/Article writing", "Programming", "Others"]
    },  
    content: {
      type: String 
    },
    pages: {
      type: String
    },
    phoneNumber: {
      type: Number
    },
    email: {
      type: String
    },
    submissionDate: {
      type: Date, default: Date.now
    },
    file:{
        type:String,
        // default:"https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1605744370/user1_fp1fwm.png"
       }, 
    userId: {
         type: String,
       }
  },
  {
    timestamps: true
})

  
export default mongoose.model('Project', projectModel)