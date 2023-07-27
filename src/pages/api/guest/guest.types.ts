import { BookingTypeData } from '@/api/booking/booking.types'
export type MessageTypeData = {
  date: string;
  profileId: string;
  product: string;
  subject: string;
  content: string;
  emailCollaborator: string;
}
/** sender: String
  feed:String
  messages: [MessageType]
} */
export type FeedTypeData = {
  sender: string;
  product: string;
  messages: [MessageTypeData
  ]
}

export type GuestTypeData = {
  _id?: string;
  token: string;
  flagAvatar: string,
  organisation: string
  instagram: string;
  messages: [MessageTypeData];
  events: [EventType];
  conversationFeed: [FeedTypeData]
  cha3bi?: number;
  tablets: [string]
  cards: [string]
  tabletsValid: [string]
  cardsValid: [string]
  walletId?: string;
  productsPromoted?: string[];
  bookings?: [BookingTypeData];
  addressGeo: string;
  continent?: string;
  rewards?: [string];
  followers?: [FollowerTypeData]
  updatedAt?: string;
  createdAt?: string;
};

export type AddGuestInputTypeData = {
  token: string;
  password: string;
  flagAvatar: string;
  organisation: string;
}
export type UpdateGuestInputTypeData = {
  token: string;
  password?: string;
  flagAvatar?: string;
  organisation?: string;
  instagram?: string;
  cha3bi?: number;
  tablets?: [string];
  cards?: [string];
  tabletsValid?: [string];
  cardsValid?: [string];
  walletId?: string;
  productsPromoted?: string[];
  bookings?: [BookingTypeData];
  addressGeo?: string;
}
export type EventType = {
  id: string;
  title: string;
  content: string;
  allDay: boolean;
  start: string;
  end: string;
  status: string;
  contact: string;
}
export type FollowerTypeData = {
  [n: string]: {
    walletId: string;
    continent: string;
  }
}
export type GuestByTokenInput = {
  token: string
  email: string
}

export enum GuestTypeLevel {
  SOBH,
  DOHR,
  ASR,
  MAGH,
  ICHA
}
