import mongoose from 'mongoose';
// const {ObjectId} = mongoose.Schema.Types
const Schema = mongoose.Schema;

const paymentModel = new Schema({
full_name: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
amount: {
    type: Number,
    required: true,
},
reference: {
    type: String,
    required: true
},
paidBy: {
    type: String,
  },
paidProject: {
    type: Schema.Types.ObjectId,
    ref: "Project"
  }
},
{
  timestamps: true
});
  
export default mongoose.model('Payment', paymentModel)