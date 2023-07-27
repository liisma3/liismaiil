import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//const geocoder = require('@/lib/nodeGeoCoder')

const messageSchema = Schema(
  {
  
    title: {
      type: String,
      trim: true,
      required: [true, 'You must give a title '],
    },
    titleSlug: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
      required: [true, 'You must give a content'],
     },
    sender:{
        type: Schema.Types.ObjectId,
        ref: 'Viewer',
        required: false,
    },
    receiver: {
      type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: false,
    },
    read: Boolean,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    
  },
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    timestamps: true,
  }
);
/* profilSchema.index({email:1},{unique: true})
 */

messageSchema.methods.promote = function () {

  /**
   * @TODO 
   * 
   */
};
// reset Password


export default mongoose.models
  ? mongoose.models.Message || mongoose.model('Message', messageSchema)
  : mongoose.model('Message', messageSchema);
