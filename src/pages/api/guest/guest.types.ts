import { BookingTypeData } from '@/api/booking/booking.types'
export type MessageTypeData = {
  date: string;
  collaboratorId: string;
  product: string;
  subject: string;
  content: string;
  collaboratorEmail: string;
}
export type FeedTypeData = {
  sender: string;

  messages: [{
    date:string,
    rec:string,
    content:string}
  ]
}

export type GuestTypeData = {
  _id?: string;
  token: string;
  flag: string,
  organisation: string
  
  messages: [MessageTypeData];
  events: [EventType];
  conversationFeed: [FeedTypeData]
  cha3bi?: number;
  tablets: [string]
  cards: [string]
  cardsValid: [string]
  tabletsValid: [string]
 
  
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
  token:string,
  cha3bi:string,
  continent:string,
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
