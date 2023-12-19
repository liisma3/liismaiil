import { PROFILE_STATUS, PROFILE_STATUS_ENUM, PROFILE_STATUS_TYPE, } from '@/api/viewer/viewer.types'
import {  ProductStatusEnum } from '@/api/product/product.types'
import {  SelectionTypeData } from '@/api/selection/selection.types'

import { EventTypeData } from '@/api/viewer/viewer.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
type SubscribeEnrollmentType = { title: string, collaborator: string, price: number, status?: string, startDate: Date }
export type FrontConnexion = {
  token: string;
  flag: string;
}
export type SelectionCollaboratorType = {
  uid: string,
  login: string,
  loginSlug: string,
  email: string,
  organisation: string,
  website: string,
  phone: string,
  instagram: string,
  status: PROFILE_STATUS_ENUM,
  avatar: { public_id: string, url: string },
  coords: {
    lat: number,
    long: number,
  },
  addressGeo: string,
  bio: string,
  organisatorProfiles: FrontConnexion[],
  collaboratorProfiles: FrontConnexion[],
  lismaiilProfiles: FrontConnexion[],
  guestProfiles: FrontConnexion[],
  discountProfiles: FrontConnexion[],
  liismaiilProfiles: FrontConnexion[],
  liismanagerProfiles: FrontConnexion[],
  libraryProfiles: FrontConnexion[],
  deliveryProfiles: FrontConnexion[],
  events?: EventTypeData[],
}

type SelectionLandingCollaboratorsType = {
  login: string,
  loginSlug: string,
  email: string,
  phone: string,
  instagram: string,
  website: string,

  organisation: string,
  avatar: { url: string, public_id: string },
  country: string,
}

type SelectionCollaboratorProducts = {
  title: string, titleSlug: string,
  description: string, price: number,
  offerPrice: number,
  author: string, image: { url: string },
  productStatus: ProductStatusEnum,
  selection: string,
  stock: number,
  promo: number,
  rate: number,
  quantity: number,
  createdAt: string
}

export type SelectionStateType = {
  title: string,
  titleSlug: string,
  description: string,
  image: { url: string, public_id: string },
  author: string,
  products: string[],
  promote: string[],
  collaborators: SelectionCollaboratorType[],
  pageIndex: number,
  selected: string[],
  selections: SelectionTypeData[],
  selfSelections: SelectionTypeData[],
  landingCollaborator: SelectionLandingCollaboratorsType,
  collaboratorProducts: SelectionCollaboratorProducts[],
}
const initialSelectionState: SelectionStateType = {
  title: '',
  titleSlug: '',
  description: '',
  image: { url: '', public_id: '' },
  author: '',
  products: [''],
  promote: [''],
  collaborators: [{
    collaboratorProfiles: [{
      token: '',
      flag: ''
    }],
    deliveryProfiles: [{
      token: '',
      flag: ''
    }],
    discountProfiles: [{
      token: '',
      flag: ''
    }], guestProfiles: [{
      token: '',
      flag: ''
    }], liismaiilProfiles: [{
      token: '',
      flag: ''
    }],
    liismanagerProfiles: [{
      token: '',
      flag: ''
    }], organisatorProfiles: [{
      token: '',
      flag: ''
    }], lismaiilProfiles: [{
      token: '',
      flag: ''
    }], libraryProfiles: [{
      token: '',
      flag: ''
    }],
    login: '',
    uid: '',
    loginSlug: '',
    email: '',
    phone: '',
    instagram: '',
    website: '',
    status: PROFILE_STATUS.LIIS,
    organisation: '',
    avatar: { public_id: '', url: '' },
    coords: {
      lat: 0,
      long: 0,
    },
    addressGeo: '',
    bio: '',
  }],
  pageIndex: 0,
  selected: [''],
  selections: [{
    title: '',
    titleSlug: '',
    promote: [''],
    author: '',
    products: [''],
    description: '',
    image: { url: '', public_id: '' },
    createdAt: ''
  }],
  selfSelections: [{
    title: '',
    titleSlug: '',
    promote: [''],
    products: [''],
    description: '',
    author: '',
    image: { url: '', public_id: '' },
    createdAt: ''
  }],

  landingCollaborator: {
    login: '',
    loginSlug: '',
    email: '',
    phone: '',
    instagram: '',
    website: '',

    organisation: '',
    avatar: { url: '', public_id: '' },
    country: 'FR',
  },
  collaboratorProducts: [{
    title: '', titleSlug: '',
    description: '', price: 0,
    offerPrice: 0,
    author: '', image: { url: '' },
    productStatus: ProductStatusEnum.FRONT,
    selection: '',
    stock: 100,
    promo: 0,
    rate: 5,
    quantity: 0,
    createdAt: ''
  }],
};

const selectionSlice = createSlice({
  name: 'selection',
  initialState: initialSelectionState,
  reducers: {

    setSelections(state, action: PayloadAction<{
      selections: SelectionSelectionsType[]
    }>) {
      console.log({ selections: action.payload.selections })
      state.selections = action.payload.selections
    },
    setCollaborators(state, action: PayloadAction<{ collaborators: SelectionCollaboratorType[] }>) {
      state.collaborators = action.payload.collaborators
    },
    setLandingCollaborators(state, action: PayloadAction<{ collaborator: SelectionLandingCollaboratorsType }>) {

      state.landingCollaborator = action.payload.collaborator
    },

    setColaboratorProducts(state, action: PayloadAction<{ products: [SelectionCollaboratorProducts] }>) {
      state.collaboratorProducts = action.payload.products
    },
    setSelection(state, action: PayloadAction<{ titleSlug: string }>) {
      state.titleSlug = action.payload.titleSlug
    },
    setSelected(state, action: PayloadAction<{ selected: [string] }>) {
      state.selected = action.payload.selected
    },
    setSelfSelections(state, action: PayloadAction<{ selections: SelectionSelectionsType[] }>) {
      state.selfSelections = action.payload.selections
    },
    removeSelfSelection (state, action: PayloadAction<{ checked: { image_id: string, slug: string } }>) {
      state.selfSelections = [...state.selfSelections.filter(sel => sel.titleSlug !== action.payload.checked.slug )]
    },
    addSelfSelection(state, action: PayloadAction<{ selection: SelectionSelectionsType }>) {
      state.selfSelections = state.selfSelections.concat(action.payload.selection)
    },
    setPageIndex(state, action) {
      state.pageIndex = action.payload.index
    }
  }
})
export const selectionActions = selectionSlice.actions
export default selectionSlice.reducer