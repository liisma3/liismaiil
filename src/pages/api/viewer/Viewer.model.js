import mongoose from "mongoose";
import timeZone from "mongoose-timezone";

const Schema = mongoose.Schema;

//const geocoder = require('@/lib/nodeGeoCoder')

export const viewerSchema = Schema(
  {
    login: {
      type: String,
      trim: true,
      required: [true, "You must give a login "],
    },

    email: {
      type: String,
      trim: true,
      required: [true, "You must give an email address "],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "You must give a password"],
      minlength: [4, "you must give at least 4 characters password length"],
    },
    stripe_account_id: {
      type: String,
      trim: true,
    },

    stripe_seller: {
      type: String,
      trim: true,
    },
    stripe_link: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      required: false,
    },
    bio: String,
    emailListing: [{ email: String, date: String }],
    avatar: {
      public_id: String,
      url: String,
    },
    flagAvatar: String,
    cardBack: {
      type: Number,
      default: 1,
    },
    organisation: {
      type: String,
      trim: true,
      required: false,
    },
    status: String,
    website: {
      type: String,
      trim: true,
      required: false,
    },
    instagram: String,
    liisCategories: [
      {
        title: String,
        description: String,
        price: Number,
      },
    ],
    orders: [
      {
        products: [
          {
            title: String,
            price: Number,
            promo: Number,
            quantity: Number,
          },
        ],
        quantity: Number,
        profileId: String,
        total: Number,
        delivery: {
          startDate: String,
          endDate: String,
        },
      },
    ],
    messages: [
      {
        date: String,
        profileId: String,
        product: String,
        subject: String,
        content: String,
      },
    ],
    events: [
      {
        id: String,
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
        feed: String,
        messages: [
          {
            date: String,
            sender: String,
            product: String,
            token: String,
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
    walletId: String,
    productsPromoted: [String],
    discountProducts: [
      {
        title: String,
        stock: Number,
      },
    ],
    bookings: [
      {
        bookingStartDate: Date,
        bookingEndDate: Date,
      },
    ],
    selections: [String],
    products: [String],
    sales: Number,
    collaboratorpass: [
      {
        pass: String,
        flag: String,
      },
    ],
    organisatorpass: [
      {
        pass: String,
        flag: String,
      },
    ],
    liispass: [
      {
        pass: String,
        flag: String,
      },
    ],
    hundreddiscountspass: [
      {
        pass: String,
        flag: String,
      },
    ],
    guestpass: [
      {
        pass: String,
        flag: String,
        cha3bi: Number,
        cards: [String],
        tablets: [String],
      },
    ],

    guestProfiles: [
      {
        token: String,
        title: String,
        emailProfile: String,
        profileId: String,
        flag: String,
        startDate: String,
        status: String,
      },
    ],
    discountProfiles: [
      {
        token: String,
        title: String,
        emailProfile: String,
        profileId: String,
        price: Number,
        flag: String,
        startDate: String,
        status: String,
      },
    ],
    liismanagerProfiles: [
      {
        token: String,
        title: String,
        emailProfile: String,
        profileId: String,
        price: Number,
        flag: String,
        startDate: String,
        status: String,
      },
    ],
    collaboratorProfiles: [
      {
        token: String,
        title: String,
        emailProfile: String,
        profileId: String,
        price: Number,
        flag: String,
        startDate: String,
        status: String,
      },
    ],
    organisatorProfiles: [
      {
        token: String,
        title: String,
        emailProfile: String,
        profileId: String,
        price: Number,
        flag: String,
        startDate: String,
        status: String,
      },
    ],

    coords: {
      long: Number,
      lat: Number,
    },
    addressGeo: String,
    continent: String,
    state: String,
    rewards: [String],
  },
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    timestamps: true,
  }
);

viewerSchema.plugin(timeZone);
export default mongoose.models
  ? mongoose.models.Viewer || mongoose.model("Viewer", viewerSchema)
  : mongoose.model("Viewer", viewerSchema);
