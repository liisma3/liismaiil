
import { AddKanbanTabletType } from '@/api/kanban/kanban.types';

import { ConnexionCardProps, EventTypeData, PROFILE_STATUS, PROFILE_STATUS_TYPE } from '@/api/viewer/viewer.types'
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { CardTypeData } from '@/api/card/card.types'
type ViewerCollaboratorProfileType = {
  token: string, emailProfile: string, title: string, profileId: string,
  flag: string, startDate: string, endDate: string, status:PROFILE_STATUS_TYPE}
type ViewerOrderType = {
  products: [
    {
      title: string,
      price: -1,
      promo: -1,
      quantity: -1
    }
  ],
  quantity: -1,
  profileId: string,
  total: -1,
  delivery: {
    startDate: string,
    endDate: ''
  }
}
export type CoordsType = { long: number, lat: number }
type ViewerLami1aViewerType = {
  _id: string,
  login: string,
  email: string,
  organisation: string,
  stripe_account_id?: string,
  stripe_status?: string,
  phone: string,
  bio: string,
  avatar: {
    public_id: string,
    url: string,
  },
  flagAvatar?: ViewerFlagAvatarType,
  cardBack?: number,
  status: PROFILE_STATUS_TYPE, //PROFILE_STATUS.ADMIN,
  website?: string,
  instagram?: string,
  telegram?: string,
  isAdmin: false,
  cha3bi: number,
  walletId: string,
  token: null,
  coords: CoordsType,
  addressGeo?: string,
  continent?: string,
  orders?: [ViewerOrderType],
  discountProducts?: [{ title: string, stock: number, price: number }],
  selections?: [string],
  products?: [string],
  sales?: number,
  selectedDate?: string,
  newEvent?: EventTypeData,
  events?: EventTypeData[],
  uid: string,

}
type ViewerCollaboratorType = {
  _id: string,
  login: string,
  email: string,
  organisation: string,
  stripe_account_id?: string,
  stripe_status?: string,
  phone: string,

  bio: string,
  avatar: {
    public_id: string,
    url: string,
  },
 
  coords: CoordsType,
  addressGeo: string,
 
  flagAvatar?: ViewerFlagAvatarType,
  
  status: PROFILE_STATUS_TYPE, //PROFILE_STATUS.ADMIN,
  website: string,
  instagram?: string,
  telegram?: string,
  isAdmin: false,
  cha3bi?: number,
  walletId?: string,
  token?: null,
  continent?: string,
  orders?: [ViewerOrderType],
  discountProducts?: [{ title: string, stock: number, price: number }],
  selections?: [string],
  products?: [string],
  sales?: number,
 
  uid?: string,
  newEvent?: EventType,
  events?: EventType[],
}
type ViewerLiismaiilViewerType = {

  uid: string,
  city: string,
  state: string,
  country: string,
  contact: string,

  cards: {
    [arg: string]: CardTypeData
  },

  tablets: {
    [arg: string]: KanbanTablet

  },
  rewards: [string],

  newEvent: EventType,
  events: EventType[],
}

type EventType = {
  id: string,
  title: string,
  content: string,
  startDate: string,
  endDate: string,
  status: string,
  contact: string,
}
type ViewerBookingType = {
  bookingStartDate: string,
  bookingEndDate: string,
}
export type ViewerMessageType = {
  token: string,
  rec: string,
  product: string,
  sender: string,
  content: string,
  date: string
}
type ViewerConversationType = {
  product: '',
  sender: '',
  messages: [{
    content: '',
    date: '',
    rec: '',
  }]
}

type ViewerFlagAvatarType = { flag: string, avatar: string }
export type ViewerStateType = {
  lami1aViewer: ViewerLami1aViewerType,
  liismaiilViewer: ViewerLiismaiilViewerType,
  collaborators: ViewerCollaboratorType[],
  organisators: ViewerCollaboratorType[],
  frontCollaborator: ViewerCollaboratorType,
  guestProfiles: ConnexionCardProps[],
  liismaiilProfiles: ConnexionCardProps[],
  liismanagerProfiles: ConnexionCardProps[],
  organisatorProfiles: ConnexionCardProps[],
  collaboratorProfiles: ConnexionCardProps[],
  deliveryProfiles: ConnexionCardProps[],
  discountProfiles: ConnexionCardProps[],
  libraryProfiles: ConnexionCardProps[],
  selectedEvent: EventTypeData,

  cardBack: string,
  profilesFound: ViewerCollaboratorProfileType[],
  productsPromoted: string[],
  bookings: [ViewerBookingType],
  messages: [ViewerMessageType],
  conversationFeed: ViewerConversationType[],
  conversation: ViewerConversationType,
}

export const initialViewerState: ViewerStateType = {
  lami1aViewer: {
    _id: '', //'O6cKgXEsuPNAuzCMTGeblWW9sWI3',
    login: '', // 'hichamkaz',//
    email: '', //'kazdhicham@gmail.com',//'',//
    organisation: '', //'hichamkaz',//'',//
    stripe_account_id: '',
    stripe_status: '',
    phone: '', //'0699307222',
    bio: '',
    avatar: {
      public_id: '',
      url: '', //'https://res.cloudinary.com/liismaiil/image/upload/v1684173819/lami1a/viewer/1684173818811.jpg'
    },
    flagAvatar: { flag: '', avatar: '' },
    cardBack: 1,
    status: PROFILE_STATUS['LIIS'], //PROFILE_STATUS.ADMIN,
    website: '',
    instagram: '',
    telegram: '',
    isAdmin: false,
    cha3bi: 0,
    walletId: '',
    token: null,
    coords: { long: 0, lat: 0 },
    addressGeo: '',
    continent: '',
    orders: [
      {
        products: [
          {
            title: '',
            price: -1,
            promo: -1,
            quantity: -1
          }
        ],
        quantity: -1,
        profileId: '',
        total: -1,
        delivery: {
          startDate: '',
          endDate: ''
        }
      }
    ],
    discountProducts: [{ title: '', stock: 0, price: 0 }],
    selections: [''],
    products: [''],
    sales: 0,
    newEvent: {
      id: '',
      title: '',
      content: '',
      startDate: '',
      endDate: '',
      status: 'COLL',
      contact: '',
    },
    events: [{
      id: '',
      title: '',
      content: '',
      startDate: '',
      endDate: '',
      status: 'GUEST',
      contact: '',
    }],
    selectedDate: '',
    uid: ''
  },
  liismaiilViewer: {
    _id: '',
    login: '',
    email: '',
    phone: '',
    status: PROFILE_STATUS.LIIS,
    uid: '',
    city: '',
    state: '',
    country: '',
    contact: '',
    instagram: '',
    website: '',
    avatar: '',
    coords: {
      lat: '',
      long: '',
    },
    addressGeo: '',
    bio: '',
    cards: [''],
    rewards: ['String'],
    newEvent: {
      id: '',
      title: '',
      content: '',
      startDate: '',
      endDate: '',
      status: '',
      contact: '',
    },
    events: [{
      id: '',
      title: '',
      content: '',
      startDate: '',
      endDate: '',
      status: '',
      contact: '',
    }],
    selectedDate: ''
  },
  guestProfiles: [{
    token: '', profileEmail: '', title: '', profileId: '', price: -1,
    flag: '', startDate: '', endDate: '', status: PROFILE_STATUS.GUEST
  }],
  liismaiilProfiles: [{
    token: '', profileEmail: '', title: '', profileId: '', price: -1,
    flag: '', startDate: '', endDate: '', status: PROFILE_STATUS.LIISIL
  }],
  liismanagerProfiles: [{
    token: '', profileEmail: '', title: '', profileId: '', price: -1,
    flag: '', startDate: '', endDate: '', status: PROFILE_STATUS.LIIS
  }],
  discountProfiles: [{
    token: '', profileEmail: '', title: '', profileId: '', price: -1,
    flag: '', startDate: '', endDate: '', status: PROFILE_STATUS.DISCOUNT
  }],
  organisatorProfiles: [{
    token: '', profileEmail: '', title: '', profileId: '', price: -1,
    flag: '', startDate: '', endDate: '', status: PROFILE_STATUS.ORGA
  }],
  collaboratorProfiles: [{
    token: '', profileEmail: '', title: '', profileId: '', price: -1,
    flag: '', startDate: '', endDate: '', status: PROFILE_STATUS.COLL
  }],
  deliveryProfiles: [{
    token: '', profileEmail: '', title: '', profileId: '', price: -1,
    flag: '', startDate: '', endDate: '', status: PROFILE_STATUS.DELIVER
  }],
  libraryProfiles: [{
    token: '', profileEmail: '', title: '', profileId: '', price: -1,
    flag: '', startDate: '', endDate: '', status: PROFILE_STATUS.LIBRARY
  }],

  collaborators: [{
    _id: '',
    uid: '',
    login: '',
    email: '',
    organisation:'',
    phone: '',
    instagram: '',
    website: '',
    bio: '',
    avatar: {
      public_id: '',
      url: '',
  },
  status:PROFILE_STATUS.COLL,
  isAdmin:false,
    coords: {
      lat: 0,
      long: 0,
    },
    addressGeo: '',
  
  }],
  organisators:  [{
    _id: '',
    uid: '',
    login: '',
    email: '',
    organisation:'',
    phone: '',
    instagram: '',
    website: '',
    bio: '',
    avatar: {
      public_id: '',
      url: '',
  },
  status:PROFILE_STATUS.COLL,
  isAdmin:false,
    coords: {
      lat: 0,
      long: 0,
    },
    addressGeo: '',
  
  }],
  frontCollaborator: {
    _id: '',
    login: '',
    email: '',
    phone: '',
    instagram: '',
    website: '',
    avatar: {
      public_id: '',
      url: ''
    },
    coords: {
      lat: 0,
      long: 0
    },
    addressGeo: '',
    bio: '',
    organisation: '',
    stripe_account_id: '',
    stripe_status: '',
    flagAvatar: {
      flag: '',
      avatar: ''
    },
    
    status: 'ORGA',
    telegram: '',
    isAdmin: false,
    cha3bi: 0,
    walletId: '',
    token: null,
    continent: '',
 /*    orders: [],
    discountProducts: [],
    selections: [],
    products: [], */
    sales: 0,
    
    uid: '',
    newEvent: {
      id: '',
      title: '',
      content: '',
      startDate: '',
      endDate: '',
      status: '',
      contact: ''
    },
    events: []
  },

  selectedEvent: {
    id: '',
    title: '',
    content: '',
    startDate: '',
    endDate: '',
    status: 'COLL',
    contact: '',
  },
  profilesFound: [{
    token: '', emailProfile: '', title: '', profileId: '',
    flag: '', startDate: '', endDate: '', status: PROFILE_STATUS.ORGA
  }],
  productsPromoted: [''],
  bookings: [{
    bookingStartDate: '',
    bookingEndDate: '',
  }],

  messages: [{
    token: '',
    rec: '',
    product: '',
    sender: '',
    content: '',
    date: ''
  }],

  conversationFeed: [{
    product: '',
    sender: '',
    messages: [{
      content: '',
      date: '',
      rec: '',
    }]
  }],
  cardBack: '',
  conversation: {
    product: '',
    sender: '',
    messages: [{
      content: '',
      date: '',
      rec: '',
    }]
  },
}

const viewerSlice = createSlice({
  name: 'viewer',
  initialState: initialViewerState,
  reducers: {
    setViewer(state, action: PayloadAction<{ viewer: ViewerLami1aViewerType }>) {

      state.lami1aViewer = action.payload.viewer
    },
    setLiismaiilViewer(state, action: PayloadAction<{ viewer: ViewerLiismaiilViewerType }>) {
      state.liismaiilViewer = action.payload.viewer
    },
    setFlagAvatar(state, action: PayloadAction<{ flagAvatar: ViewerFlagAvatarType }>) {
      state.lami1aViewer.flagAvatar = action.payload.flagAvatar

    },
    setStripeStatus(state, action: PayloadAction<{ stripe_status: string }>) {
      state.lami1aViewer.stripe_status = action.payload.stripe_status
    },
    setFrontColaborator(state, action: PayloadAction<{ collaborator: ViewerCollaboratorType }>) {
      state.frontCollaborator = action.payload.collaborator
    },
    setCollaborators(state, action: PayloadAction<{ collaborators: [ViewerCollaboratorType] }>) {
      state.collaborators = action.payload.collaborators
    },
    setOrganisators(state, action: PayloadAction<{ organisators: [ViewerCollaboratorType] }>) {
      state.organisators = action.payload.organisators
    },
    setGuestProfiles(state, action: PayloadAction<{ guests: ConnexionCardProps[] }>) {
      state.guestProfiles = action.payload.guests
    },

    setDiscountProfiles(state, action: PayloadAction<{ discounts: ConnexionCardProps[] }>) {
      state.discountProfiles = action.payload.discounts
    },
    setLiismaiilProfiles(state, action: PayloadAction<{ liismaiils: ConnexionCardProps[] }>) {
      state.liismaiilProfiles = action.payload.liismaiils
    },
    setLiismanagerProfiles(state, action: PayloadAction<{ liismanagers: ConnexionCardProps[] }>) {
      state.liismanagerProfiles = action.payload.liismanagers
    },
    setCollaboratorProfiles(state, action: PayloadAction<{ collaborators: ConnexionCardProps[] }>) {
      state.collaboratorProfiles = action.payload.collaborators
    },
    resetCollaboratorProfiles(state) {
      state.collaboratorProfiles = initialViewerState.collaboratorProfiles
    },

    setOrganisatorProfiles(state, action: PayloadAction<{ organisators: ConnexionCardProps[] }>) {
      state.organisatorProfiles = action.payload.organisators
    },
    setDeliverProfiles(state, action: PayloadAction<{ delivers: ConnexionCardProps[] }>) {
      state.deliveryProfiles = action.payload.delivers
    },
    setMessages(state, action: PayloadAction<{ messages: [ViewerMessageType] }>) {
      state.messages = action.payload.messages
    },
    setConversation(state, action: PayloadAction<{ conversation: ViewerConversationType }>) {
      state.conversation = action.payload.conversation
    },
    searchProfile(state, action: PayloadAction<{ token: string }>) {
      const profileFound = []
      if (state.discountProfiles.length > 0 && state.discountProfiles[0]['token'] !== '') {
        const discountFound = state.discountProfiles.filter(disc => disc['token'] === action.payload.token)
        profileFound.push(discountFound[0])
      } if (state.collaboratorProfiles.length > 0 && state.collaboratorProfiles[0]['token'] !== '') {
        const collaboratorFound = state.collaboratorProfiles.filter(disc => disc['token'] === action.payload.token)
        profileFound.push(collaboratorFound[0])
      } if (state.liismanagerProfiles.length > 0 && state.liismanagerProfiles[0]['token'] !== '') {
        const liisFound = state.liismanagerProfiles.filter(disc => disc['token'] === action.payload.token)
        profileFound.push(liisFound[0])
      } if (state.organisatorProfiles.length > 0 && state.organisatorProfiles[0]['token'] !== '') {
        const organisatorFound = state.liismanagerProfiles.filter(disc => disc['token'] === action.payload.token)
        profileFound.push(organisatorFound[0])
      }
      state.profilesFound = [...profileFound]
    },
    addToConversation(state, action: PayloadAction<{ conversation: ViewerConversationType }>) {
      console.log(state.conversationFeed)
      console.log(action.payload.conversation)
      if (state.conversationFeed.length === 1
        && state.conversationFeed[0]['sender'] === '') {
        state.conversationFeed = [{
          sender:
            action.payload.conversation['sender'],
          product: action.payload.conversation['product'],
          messages: action.payload.conversation['messages']
        }]
      } else {

        const product_sender_same = state.conversationFeed.filter(conv => {
          return conv.product === action.payload.conversation['product'] &&
            conv.sender === action.payload.conversation['sender']
        })
        const product_sender_different = state.conversationFeed.filter(conv => {
          return conv.product !== action.payload.conversation['product'] && conv.sender !== action.payload.conversation['sender']
        })

        console.log({ product_sender_different })
        console.log({ product_sender_same })
        if (product_sender_same.length > 0 && product_sender_different.length > 0) {
          state.conversationFeed = [...product_sender_different, {
            sender: action.payload.conversation['sender'],
            product: action.payload.conversation['product'],
            messages: [...product_sender_same[0]['messages'],
            ...action.payload.conversation['messages']]
          }]
        } else {
          console.log({
            sender: action.payload.conversation['sender'],
            product: action.payload.conversation['product'],

            messages: [...product_sender_same[0]['messages'],
            ...action.payload.conversation['messages']]
          })
          state.conversationFeed = [{
            sender: action.payload.conversation['sender'],
            product: action.payload.conversation['product'],

            messages: [...product_sender_same[0]['messages'],
            ...action.payload.conversation['messages']]
          }]
        }
      }

    },
    deleteConversation(state, action: PayloadAction<{ conversation: ViewerConversationType }>) {
      console.log(state.conversationFeed)
      if (state.conversationFeed.length === 1 && state.conversationFeed[0]['sender'] === '') {
        return state
      } else if (Array.isArray(state.conversationFeed) &&
        state.conversationFeed[0]['sender']
        !== '' && state.conversationFeed[0]['product'] !== '') {

        const newConversationFeeed = state.conversationFeed.filter(conv => {
          return conv.product !== action.payload.conversation['product']
            && conv.sender !== action.payload.conversation['sender']
        })
        state.conversationFeed = [...newConversationFeeed]
      }
    },
    setCardBack(state, action: PayloadAction<{ cardBack: string }>) {
      state.cardBack = action.payload.cardBack
    },
    addEvent(state, action: PayloadAction<{ event: EventTypeData }>) {
//console.log({event})
      if (state.lami1aViewer.events && state.lami1aViewer.events.length > 0 && state?.lami1aViewer.events[0].id === '') {
        state.lami1aViewer.events = [action.payload.event]
        state.lami1aViewer.newEvent = action.payload.event
      } else {
        const allEvents = [...state.lami1aViewer.events, action.payload.event]
        state.lami1aViewer.events = allEvents
        state.lami1aViewer.newEvent = action.payload.event
      
      }
    },

    removeEvent(state, action: PayloadAction<{ id: string }>) {
      if(typeof (state.lami1aViewer.events) !== 'undefined'){
      state.lami1aViewer.events = state?.lami1aViewer?.events.filter(ev => ev.id !== action.payload.id)
    }else return state
    },
    cancelEvents(state) {
      state.lami1aViewer.events = [{
        id: '',
        title: '',
        content: '',
        startDate: '',
        endDate: '',
        status: '',
        contact: '',
      }]
    },

    setEvents(state, action: PayloadAction<{ events: EventType[] }>) {
      state.lami1aViewer.events = action.payload.events
    },
    setSelectedEvent(state, action: PayloadAction<{ selectedEvent: EventType }>) {
      state.selectedEvent = action.payload.selectedEvent
    },
    setSelectedDate(state, action: PayloadAction<{ selectedDate: string }>) {
      state.lami1aViewer.selectedDate = action.payload.selectedDate
    },
    setViewerNull(state) {
      
      state.lami1aViewer = initialViewerState.lami1aViewer
      console.log({lami1aViewer: current(state).lami1aViewer})
    },
    setCoords(state, action: PayloadAction<{ coords: CoordsType }>) {
      state.lami1aViewer.coords = action.payload.coords
    },
    setAddressGeo(state, action: PayloadAction<{ addressGeo: string }>) {
      state.lami1aViewer.addressGeo = action.payload.addressGeo
    }
  }
})

export const viewerActions = viewerSlice.actions
export default viewerSlice.reducer
