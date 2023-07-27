import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const bookingSchema = new Schema(
  {
    viewer: {
      type: Schema.Types.ObjectId,
      ref: 'Viewer',
      required: false,
    },
 
    bookingStartDate: {
      type: Date,
      required: [true, 'DateIn is required'],
    },
    bookingEndDate: {
      type: Date,
      required: [true, 'DateOut is required'],
    },
    amountPaid: Number,
    paymentInfo: {
      id: String,
      status: String
    },
    paidDate: Date,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
  }
);
/* bookingSchema.plugin(timeZone) */

export default mongoose.models
  ? mongoose.models.Booking || mongoose.model('Booking', bookingSchema)
  : mongoose.model('Booking', bookingSchema);
