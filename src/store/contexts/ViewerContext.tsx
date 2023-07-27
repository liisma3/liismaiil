import React, { createContext, useReducer } from 'react';
import {
  SET_VIEWER, SET_VIEWER_AUTH, UPDATE_VIEWER,
  SET_VIEWER_NULL, SET_VIEWER_ADDRESS, ADD_FOLLOWER
} from '@/store/constants'
import { verifyToken } from '@/api/util'
const initialViewerAuth = {
  id: null,
  login: null,
  email: null,
}
const initialViewer = {
  id: null,
  login: '',
  email: '',
  password: null,
  phone: '',
  bio: '',
  cards: [''],
  carts: [{
    titleSlug: '',
    quantity: 0
  }],
  tablets: [],
  cardsValid: [],
  tabletsValid: [],
  role: ['VIEWER'],
  level: 'SOBH',
  liism: 0,
  walletId: '',
  token: null,
  productsPromoted: [''],
  bookings: [{
    bookingStartDate: '',
    bookingEndDate: '',
  }],
  address: {
    name: '',
    destination: '',
    building: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    contact: '',
    isdefault: false
  },
  continent: '',
  followers: [''],
  refreshTokenExpiration: null,
}
const initialState = {
  state: {
    viewer: initialViewer,
    viewerAuth: initialViewerAuth
  },
  setViewerAuth: (arg: any) => { arg ? arg : null },
  setViewer: (arg: any) => { arg ? arg : null },

  addFollower: (arg: any) => { arg ? arg : null },
  setViewerAddress: (arg: any) => { arg ? arg : null },
  getViewerFromToken: (arg: string) => { arg ? arg : null },
  signOutViewer: () => { },
};

const viewerReducer = (state = { viewer: initialViewer, viewerAuth: initialViewerAuth }, action: any) => {
  switch (action.type) {
    case SET_VIEWER_AUTH: {
      return { ...state, viewerAuth: { ...action.payload.viewer } }
    }
    case SET_VIEWER:
      return { ...state, viewer: { ...action.payload.viewer } }

    case UPDATE_VIEWER:
      return { ...state, ...action.payload.viewer }
    case ADD_FOLLOWER:
      return { ...state, viewer: { ...state.viewer, followers: [...state.viewer.followers, ...action.payload.followers] } }
    case SET_VIEWER_ADDRESS:
      return {
        ...state,
        viewer: {
          ...state.viewer,
          address: action.payload.address
        }
      }
    case SET_VIEWER_NULL:
      return { ...state, viewer: { ...initialViewer }, viewerAuth: { ...initialViewerAuth } }

    default: {
      return state
    }
  }
}

export const viewerContext = createContext(initialState);
export function ViewerProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(viewerReducer, initialState.state)

  const setViewerAuth = (viewer: { id: string, email: string, token: string }) => {
    dispatch({
      type: SET_VIEWER_AUTH, payload: { viewer }
    })
  }
  const setViewer = (viewer: any) => {
    console.log({ viewer })
    dispatch({
      type: SET_VIEWER, payload: { viewer }
    })
  }
  const setViewerAddress = (address: any) => {
    console.log({ address })
    dispatch({
      type: SET_VIEWER_ADDRESS, payload: { address }
    })
  }
  const addFollower = (follower: any) => {
    dispatch({
      type: ADD_FOLLOWER, payload: { follower }
    })
  }
  function signOutViewer() {
    dispatch({ type: SET_VIEWER_NULL });
  }
  function getViewerFromToken(token: string) {
    try {
      const storedViewer = verifyToken(token)
      return storedViewer
    } catch (error: any) {
      throw new Error(error)
    }
  }
  return <viewerContext.Provider value={{
    state, setViewer, addFollower,
    setViewerAddress, setViewerAuth, signOutViewer, getViewerFromToken
  }}>{children}</viewerContext.Provider>;
}

