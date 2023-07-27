export const viewerDefs = `
#scalar type
scalar DateTime
type Viewer {
  _id: ID!
  login: String
  loginSlug: String
  email: String
  password: String
  stripe_account_id:String
  stripe_seller:String
  stripe_link:String
  hasWallet:Boolean
  phone:String
  bio: String
  avatar:AvatarType
  flagAvatar: String
  cardBack:Int
  organisation: String
  status: String
  emailListing: [RegistredListing]
  website: String
  instagram: String
  telegram: String
  orders:[OrderType]
  messages:[MessageType]
  events:[EventType]
  conversationFeed:[ConversationFeedType]
 cha3bi:Int
 productsPromoted:[String]
 discountProducts:[DiscountProductType]
  bookings:[BookingType]
  selections:[String]
  products:[Product]
  sales:Int
  collaboratorpass:[StudType]
  organisatorpass:[StudType]

  guestpass:[GuestType]
  guestProfiles:[ConnexionProfileType]
  discountProfiles:[ConnexionProfileType]
  liismanagerProfiles:[ConnexionProfileType]
  collaboratorProfiles:[ConnexionProfileType]
  organisatorProfiles:[ConnexionProfileType]
  coords:CoordsType
  addressGeo:String
  continent:String
  rewards: [String]
  updatedAt: DateTime
  createdAt: DateTime
}
 type RegistredListing {
  email: String
  date: String
 }
type ConversationFeedType {
  sender: String
  feed:String
  messages: [MessageType]
}
  type GuestType {
    pass: String
    flag: String
    cha3bi:Int
    cards: [String]
    tablets :[String]
  }
type EventType {
  title: String
  content: String
    allDay: Boolean
    start: String
    end: String
    status: String
    contact: String
  
}

type DiscountProductType {
    title:String
    stock:Int
    price:Int
  }
type AvatarType {
  public_id: String!
  url: String!
}

type StudType {
  flag: String
  pass:String
  }

type DeliveryType {
  startDate: String
  endDate:String
  }
type ConnexionProfileType {
    title: String
    token: String
    profileEmail: String
    profileId: String
    flag: String
    price:Int
    startDate:String
    status:String
   }

type CoordsType {
  lat:Float
  long:Float
}
input CoordsTypeInput {
  lat:Float
  long:Float
}
type OrderType {
      products: [ProductOrderType]
      quantity: Int
      profile: String
      total:Int
      delivery:DeliveryType
}
type ProductOrderType {
        title:String
        price:Int
        promo:Int
        quantity:Int
}

type BookingType  {
  bookingStartDate: String
  bookingEndDate: String
}


type Address {
    name: String
    destination: String
    building: String
    street: String
    city: String
    state: String
    country: String
    contact:String
    zip: String
    isdefault:Boolean
}

input AddViewerInput {
  login:String
  email:String
  phone:String

  status:String
  uid:String
    name: String
    destination: String
    building: String
    street: String
    city: String
    state: String
    country: String
    zip:String
    contact: String
    isdefault:Boolean
}

type ViewerOutput {
  _id:String
  login:String
  email:String
  phone:String
status: String
 address:Address
 isAdmin:Boolean
 
} 

type UpdateViewerStatusOutput {
  
status:String,
success: Boolean
 }   
input UpdateViewerInput {
  email:String  
  login:String
  bio:String
  instagram:String
  website:String
  phone:String
  status:String
  organisation: String
  avatar:AvatarTypeInput

}
input UpdateViewerStatusInput {
  email:String  
  status:String
 
}
input AvatarTypeInput {
  public_id: String!
  url: String!
}
input UpdateViewerAddressInput {
    email:String
    coords:CoordsTypeInput
    addressGeo:String
 }
input ConnectPayoutInput {
    email: String
    id: String
}
type ConnectPayoutOutput {
    link: String
}
input SendMessageViewerInput {
    date:String  
    sender: String
    token: String
    product:String
    rec:String
    content: String
  }
 
  input AddConversationFeedInput {
    email:String
    sender: String
    product:String
    rec:String
    content: String
    date:String  
  }
  input DeleteConversationFeedInput {
    sender: String
    email: String
    product:String
    rec: String
    }

 
type EnrollmentType {
  title:String
  description:String
  price:Int
  image : AvatarType
  max : Int
  promo : Int
  enrollmentStatus:[String]
  startDate:String
  endDate:String
 } 
type EnrollmentOutput {
  success: [EnrollmentType]
}
type SuccessBoolean {
  success: Boolean
}
type SuccessBoolean {
  success: Boolean
}
type qrCodeOutput {
  qrCodeUrl: String
} 

input SetFlagAvatarInput {
  id: String
  name: String
}
input PassFlagInput {
  id: String
  email: String
}
input EnrollmentInput {
  id: String
  title: String
  description:String
  price:Int
  image:AvatarTypeInput
  enrollmentStatus: [String]
  max: Int
  startDate:String
  endDate:String
}
input PayAffiliateInput {
  title: String
  token: String
  affiliate: String
  emailCollaborator:String
  profileId: String
  flag: String
  price: Int
  startDate: String
  status: String
}
type AddAffiliateOutput {
  success:Boolean
  token: String
  affiliate: String
  emailCollaborator:String
  profileId: String
  flag: String
  price: Int
  startDate: String
  status: String
}
input UpdateEnrollmentInput {
  id: String
  title: String
  description:String
  price:Int
  image:AvatarTypeInput
  enrollmentStatus: [String]
  max: Int
  startDate:String
  endDate:String
}

input RemoveEnrollmentInput {
  id: String
  title: [String]
}
input EventTypeInput {
   id: String
    title: String
    content: String
    start: String
    end: String
    status: String
    contact: String
}
input RegisterEventInput {
   email: String
  events: [EventTypeInput]
  }

input GetDiscountInput {
  affiliator: String
  discountToken: String
}
input CardBackInput {
  id:String
  card:Int
}
input AffiliateRequestInput {
  email:String
  id:String
}

input AddAffiliateInput {
      emailCollaborator:String
      title:String
      emailProfile:String
      profileId:String
      status:String
}
type MessageType {
    date:String  
    profileId: String
    product:String
    subject: String!
    content: String
    emailCollaborator:String
 }
 input SendMessageInput {
    profileId: String
    product:String
    emailCollaborator:String
    subject: String
    content: String
  }
  type SendMessageOutput {
    success: Boolean
    }
  
type Mutation {
    sendMessageViewer(input:SendMessageInput):SendMessageOutput
    addConversationFeed(input:AddConversationFeedInput):Viewer
    deleteConversationFeed(input:DeleteConversationFeedInput):Viewer
    removeToken(token: String): Boolean 
   registerEvent(input:RegisterEventInput): Viewer
  }
 
  
  type Query {
    viewer(email:String): Viewer
    viewerById(id:String): Viewer
    viewers: [Viewer!]
    getQrCode(url:String): qrCodeOutput
   }
 
`;
