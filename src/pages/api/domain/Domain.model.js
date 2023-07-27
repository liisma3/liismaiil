import mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
const Schema = mongoose.Schema;
//const geocoder = require('@/lib/nodeGeoCoder')

const domainSchema = Schema(
  {
    /**
  title:String

  viewers: [Viewer]
  image:String
  city:String
  country:String
  zip:String
 
  rewards: [String]
  */
    title: {
      type: String,
      trim: true,
      required: [true, "You must give a login "],
    },
    viewers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Viewer",
        required: false,
      },
    ],
    
      image: {
        public_id: String,
        url: String,
      },
   
    city: {
      type: String,
      trim: true,
    },
    country : String,
 
    zip: String,
    
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Card",
        required: false,
      },
    ],
    tablets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tablet",
        required: false,
      },
    ],
  },
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    timestamps: true,
  }
);


export default mongoose.models
  ? mongoose.models.Domain || mongoose.model('Domain', domainSchema)
  : mongoose.model('Domain', domainSchema);
