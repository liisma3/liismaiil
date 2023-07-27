import mongoose from "mongoose";
import timeZone from "mongoose-timezone";
const Schema = mongoose.Schema;
export const GuestSchema = Schema(
  {
    token: {
      type: String,
      trim: true,
      required: [true, "You must give a token "],
    },

    flagAvatar: String,
    organisation: String,
    instagram: String,
    messages: [
      {
        date: String,
        profileId: String,
        product: String,
        subject: String,
        content: String,
        emailCollaborator: String,
      },
    ],
    events: [
      {
        title: String,
        content: String,
        allDay: Boolean,
        start: String,
        end: String,
        status: String,
        contact: String,
      },
    ],
    conversationFeed: [
      {
        sender: String,
        product: String,
        rep: String,
        messages: [
          {
            date: String,
            rec: String,
            content: String,
          },
        ],
      },
    ],
    cha3bi: {
      type: Number,
      default: 10,
    },
    tablets: [String],
    cards: [String],
    cardsValid: [String],
    tabletsValid: [String],
    waletId: String,
    productsPromoted: [String],
    followers: [
      {
        token: String,
        walletId: String,
        continent: String,
      },
    ],

    bookings: [
      {
        id: String,
        bookingStartDate: Date,
        bookingEndDate: Date,
      },
    ],
    addressGeo: String,
    continent: String,
    rewards: [String],
  },
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    timestamps: true,
  }
);

guestSchema.plugin(timeZone);
export default mongoose.models
  ? mongoose.models.Guest || mongoose.model("Guest", guestSchema)
  : mongoose.model("Guest", guestSchema);
