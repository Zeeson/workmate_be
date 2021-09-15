import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectModel  = new Schema({
    title: {type: String, required: true},
    type: {type: String, enum:["assignment", "research project", "technical writing", "programming"]},  
    pages: {type: String},
    submissionDate: {type: String},
    subject: {type: String},
    content: {type: String, required: true },
    date: {type: Date, default: Date.now},
    attachment:{
        type:String,
        default:"https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1605744370/user1_fp1fwm.png"
       }
  },
  {timestamps: true
})

  
export default mongoose.model('project', projectModel )