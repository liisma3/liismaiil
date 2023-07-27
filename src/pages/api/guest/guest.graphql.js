export const GuestDefs = `
#scalar type
scalar DateTime
type Guest {
  token: String
  flagAvatar: String
  organisation: String
  instagram: String
  messages:[MessageType]
  events:[EventType]
  conversationFeed:[ConversationFeedType]
  cha3bi:Int
  tablets:[String]
  cards:[String]
  tabletsValid:[String]
  cardsValid:[String]
  walletId:String
  productsPromoted:[String]
  bookings:[BookingType]
   continent:String
  followers:FollowersTypeData
  rewards: [String]
  updatedAt: DateTime
  createdAt: DateTime
}
type FollowersTypeData {
  token:String
    walletId:String,
    continent:String
  }
}
type GuestByTokenOutput {
  success:Boolean
  token:String
  flag:String
}
type GuestByTokenOutput {
  success:Boolean
  token:String
  flag:String
}
type RemoveGuestOutput {
  success:Boolean
  
}
input GuestByTokenInput {
  token:String
  email:String
}
input AddGuestInput {
  token: String
  password: String
  flagAvatar: String
  organisation: String
}
input UpdateGuestInput {
  token:String
  password: String
  flagAvatar: String
  organisation: String
}
type Query {
    guests: [Guest!]
    guestByTokenAws(input:GuestByTokenInput):Guest 
    }

type Mutation {
  addGuest(input:AddGuestInput):Guest
  updateGuest(input:UpdateGuestInput):Guest
  removeGuest(token:String):RemoveGuestOutput 
  sendMessageGuest(input:SendMessageViewerInput):Guest
  }
`;
