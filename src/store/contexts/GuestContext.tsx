import React, { createContext, useReducer } from 'react';
import {
  SET_GUEST, UPDATE_GUEST,
  SIGN_OUT_GUEST, ADD_FOLLOWER
} from '@/store/constants'
import { verifyToken } from '@/api/util'
import _ from 'lodash'
import { GuestTypeData } from '@/api/guest/guest.types';

const initialGuest = {
  token: null,
  password: null,
  flagAvatar: '',
  organisation: '',
  instagram: '',
  messages: [{
    date: '',
    sender: '',
    product: '',
    token: '',
    rec: '',
    content: '',
  }],
  events: [
    {
      id: '',
      title: '',
      content: '',
      allDay: false,
      start: '',
      end: '',
      status: '',
      contact: '',
    },
  ],
  conversationFeed: [
    {
      sender: '',
      product: '',
      rep: '',
      messages: [
        {
          date: '',
          rec: '',
          content: '',
        },
      ],
    },
  ],
  cha3bi: -1,
  tablets: [''],
  cards: [''],
  cardsValid: [''],
  tabletsValid: [''],
  waletId: '',
  productsPromoted: [''],
  bookings: [
    {
      id: '',
      bookingStartDate: '',
      bookingEndDate: '',
    },
  ],
  addressGeo: '',
  continent: '',
  followers: {
    '': {
      walletId: '',
      continent: '',

    }
  },

}
const initialState = {
  state: initialGuest,
  setGuest: (arg: any) => { arg ? arg : null },
  updateGuest: (arg: any) => { arg ? arg : null },
  addFollower: (arg: any) => { arg ? arg : null },
  signOutGuest: () => { },
};

const guestReducer = (state = initialGuest, action: any) => {
  switch (action.type) {

    case SET_GUEST:
      return { ...state, id: action.payload.guest }
    case UPDATE_GUEST:
      return { ...state, ...action.payload.guest }

    case ADD_FOLLOWER:
      if (state.followers[`${action.payload.follower['id']}`]) {
        return { ...state, followers: _.omit(action.payload.followers, `${action.payload.follower['token']}`) }
      }
      else {
        return {
          ...state, followers: {
            ...state.followers, [`${action.payload.follower['token']}`]: {
              walletId: action.payload.follower['walletId'],
              continent: action.payload.follower['continent']
            }
          }
        }
      }
    case SIGN_OUT_GUEST:
      return { ...initialGuest }

    default: {
      return state
    }
  }
}

export const guestContext = createContext(initialState);
export function GuestProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(guestReducer, initialState.state)

  const setGuest = (guest: GuestTypeData) => {
    dispatch({
      type: SET_GUEST, payload: { guest }
    })
  }
  const updateGuest = (guest: GuestTypeData) => {
    dispatch({
      type: UPDATE_GUEST, payload: { guest }
    })
  }

  const addFollower = (follower) => {
    dispatch({
      type: ADD_FOLLOWER, payload: { follower }
    })
  }
  function signOutGuest() {
    dispatch({ type: SIGN_OUT_GUEST });
  }

  return <guestContext.Provider value={{
    state, setGuest, updateGuest, addFollower, signOutGuest,
  }}>
    {children}
  </guestContext.Provider>;
}

