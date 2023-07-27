import React, { createContext, useReducer } from 'react';
import {
  ADD_TABLET, REMOVE_TABLET, SET_WORDS, ADD_CARD_SLICES, SET_TABLET_WORDS,
  VALID_TABLET, MOUNT_TABLETS, ACTIVATE, SET_SOURAS, SET_AYAHS, SET_SOURA, SET_SOURA_NAME, SET_TIWAL,
  SET_MIIN, SET_MATHANI, SET_MOFASAL, SET_TABLET, SET_CARDS, UPDATE_COLUMNS_ORDER, REMOVE_WORDS, CLEAR_TABLET_WORDS,
  UPDATE_COLUMN_ITEM_ORDER, DELETE_ITEM, SET_NMB_TABLET, SET_TAB, SET_CARDS_ACCORDION, ADD_AYAT_CARDS
} from './../constants';

import {
  TabletStatus,
  TabletTypeData, TabletColumn

} from '@/api/tablet/tablet.types';
import { AnyObject } from 'yup/lib/types';
const initialTablets = {
  _id: '',
  title: '',
  titleSlug: '',
  description: '',
  tablet: { soura: '', ayahs: [], description: '' },
  nmbTablet: 10,
  tab: 0,
  tags: [''],
  souraName: '',
  soura: { souraName: '', souraArabName: '', ayahs: [], id: 0 },
  souras: [],
  ayahs: [],
  ayatCards: [],
  numbAyahSliced: [],
  cardsAccordion: { soura: '', ayahs: [] },
  cardSlices: [{ soura: null, numberInSurah: 0, slices: [] }],
  tiwal: [],
  miin: [],
  mathani: [],
  mofasal: [],
  words: [{ word: null, number: 0, numberInSurah: 0, souraName: '' }],
  tabletWords: [{ word: null, number: 0, numberInSurah: 0, souraName: '' }],
  image: { url: '', public_id: '' },
  createdAt: '',
  cards: new Map(),
  tabletStatus: TabletStatus.SOBH,
  level: 1,
  liism: 0,
  bookings: [''],
  colls: [''],
  viewers: [''],
  columns: [{ id: '', itemIds: [''], title: '' }],
  columnsOrder: [''],
  comments: [],
  selectedCard: false,
  userStory: '',
  items: [],
  selectedItem: false


}

const initialState = {
  state: initialTablets,

  addTablet: (args: any) => {
    args ? args : false
  },
  addAyatCards: (args: any) => {
    args ? args : false
  },
  setTablet: (args: any) => {
    args ? args : false
  },
  setCards: (args: any) => {
    args ? args : false
  },
  addCardSlices: (args: any) => {
    args ? args : false

  },
  setCardsAccordion: (args: any) => {
    args ? args : false
  },
  setSouras: (args: any) => {
    args ? args : false
  },
  setAyahs: (args: any) => {
    args ? args : false
  },
  setSoura: (args: any) => {
    args ? args : false
  },
  setSouraName: (args: any) => {
    args ? args : false
  },
  setTiwal: (args: any) => {
    args ? args : false

  },
  setMiin: (args: any) => {
    args ? args : false

  },
  setMathani: (args: any) => {
    args ? args : false

  },
  setMofasal: (args: any) => {
    args ? args : false

  },
  validTablet: (args: any) => {
    args ? args : false
  },
  mountTablets: (args: any) => {
    args ? args : false
  },
  removeTablet: (args: any) => {
    args ? args : false
  },
  addNewColumn: (args: any) => {
    console.log(args);
  },
  setWords: (words: any) => {
    words ? words : null
  },
  removeWords: () => {
  },
  clearTabletWords: () => {
  },
  setTabletWords: (words: any) => {
    words ? words : null
  },
  editColumn: (args: any) => {
    console.log(args);
  },
  setNmbTablet: (nmb: number) => {
    nmb ? nmb : false
  },
  setTab: (tab: number) => {
    tab ? tab : false
  },
  activate: (titleSlug: string) => {
    console.log(titleSlug);
  },
  updateColumnItemOrder: (columns: any) => {
    columns ? columns : false
  },
  updateColumnOrder: (columns: string[]) => {
    columns ? columns : false
  },
  deleteItem: (item: string) => {
    item ? item : false
  },
};

//const viewerInitialState = { login: '', level: '', biography: '' }
const tabletReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TABLET:
      return { ...state, title: action.payload.title, soura: action.payload.soura, description: action.payload.description, cardSlices: action.payload.cardSlices, words: action.payload.words };
    case ACTIVATE:
      return { ...state, isActive: [...state.isActive, action.payload] };
    case SET_TABLET:
      return { ...state, tablet: action.payload.tablet };
    case SET_SOURAS:
      return { ...state, souras: action.payload.souras };
    case SET_AYAHS:
      return { ...state, ayahs: action.payload.ayahs };
    case SET_SOURA:
      return { ...state, soura: action.payload.soura };
    case SET_SOURA_NAME:
      return { ...state, souraName: action.payload.souraName };
    case SET_CARDS:
      return { ...state, cards: action.payload.cards };
    case SET_CARDS_ACCORDION:
      return { ...state, cardsAccordion: action.payload.cardsAccordion };
    case ADD_CARD_SLICES: {
      if (state.cardSlices.length === 1 && state.cardSlices.soura === null) {
        return { ...state, cardSlices: [action.payload.cardSlices] };
      }
      return { ...state, cardSlices: [...state.cardSlices, action.payload.cardSlices] };
    }

    case REMOVE_TABLET: {
      const tabs = state.talets.filter((tablet: TabletTypeData) => tablet.titleSlug !== action.payload.titleSlug)
      return { ...state, tablets: tabs };
    }
    case SET_NMB_TABLET:
      return { ...state, nmbTablet: action.payload.nmbTablet };
    case SET_TAB:
      return { ...state, tab: action.payload.tab };
    case ADD_AYAT_CARDS:
      return { ...state, ayatCards: [...state.ayatCards, action.payload.ayatCards] };
    case SET_WORDS:
      return { ...state, words: !state.words ? [...action.payload.words] : [...state.words, ...action.payload.words] };
    case SET_TABLET_WORDS:
      return { ...state, tabletWords: state.tabletWords ? [...state.tabletWords, ...action.payload.tabletWords] : [...action.payload.tabletWords] };
    case REMOVE_WORDS:
      return { ...state, tabletWords: null, words: null };
    case CLEAR_TABLET_WORDS:
      return { ...state, tabletWords: null, };
    case SET_TIWAL:
      return { ...state, tiwal: action.payload.tiwal };
    case SET_MIIN:
      return { ...state, miin: action.payload.miin };
    case SET_MATHANI:
      return { ...state, mathani: action.payload.mathani };
    case SET_MOFASAL:
      return { ...state, mofasal: action.payload.mofasal };
    case UPDATE_COLUMNS_ORDER:
      return { ...state, columnsOrder: action.payload.columnsOrder };
    case UPDATE_COLUMN_ITEM_ORDER:
      return { ...state, columns: action.payload.columns };
    case DELETE_ITEM:
      return { ...state, items: state.items.filter((item: any) => item.id !== action.payload.id) };

    default:
      return state
  }
}
export const TabletContext = createContext(initialState);
export function TabletProvider({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useReducer(tabletReducer, initialTablets);
  //const router = useRouter();

  //const [loading, setLoading] = useState(false);
  function validTablet(titleSlug: string) {
    dispatch({
      type: VALID_TABLET,
      payload: { titleSlug }
    })
  }
  function removeTablet(titleSlug: string) {
    dispatch({
      type: REMOVE_TABLET,
      payload: { titleSlug }
    })
  }
  function setTablet(tablet: string) {
    console.log({ tablet })
    dispatch({
      type: SET_TABLET,
      payload: { tablet }
    })
  }
  function addCardSlices(cardSlices: string) {
    console.log({ cardSlices })
    dispatch({
      type: ADD_CARD_SLICES,
      payload: { cardSlices }
    })
  }
  function setNmbTablet(nmbTablet: number) {
    console.log({ nmbTablet })
    dispatch({
      type: SET_NMB_TABLET,
      payload: { nmbTablet }
    })
  }
  function setTab(tab: number) {
    console.log({ tab })
    dispatch({
      type: SET_TAB,
      payload: { tab }
    })
  }
  function setCards(cards: string) {
    dispatch({
      type: SET_CARDS,
      payload: { cards }
    })
  }
  function setWords(words: string) {
    dispatch({
      type: SET_WORDS,
      payload: { words }
    })
  }
  function setTabletWords(tabletWords: string) {
    dispatch({
      type: SET_TABLET_WORDS,
      payload: { tabletWords }
    })
  }
  function removeWords() {
    dispatch({
      type: REMOVE_WORDS,
      payload: {}
    })
  }
  function clearTabletWords() {
    dispatch({
      type: CLEAR_TABLET_WORDS,
      payload: {}
    })
  }
  function addAyatCards(ayatCards: string) {
    dispatch({
      type: ADD_AYAT_CARDS,
      payload: { ayatCards }
    })
  }
  function setCardsAccordion(cardsAccordion: string) {
    dispatch({
      type: SET_CARDS_ACCORDION,
      payload: { cardsAccordion }
    })
  }
  function setSouras(souras: any) {
    dispatch({
      type: SET_SOURAS,
      payload: { souras }
    })
  }
  function setSoura(soura: AnyObject) {
    dispatch({
      type: SET_SOURA,
      payload: { soura }
    })
  }

  function setSouraName(souraName: string) {
    dispatch({
      type: SET_SOURA_NAME,
      payload: { souraName }
    })
  }
  function setTiwal(tiwal: any) {
    dispatch({
      type: SET_TIWAL,
      payload: { tiwal }
    })
  }
  function setMiin(miin: any) {
    dispatch({
      type: SET_MIIN,
      payload: { miin }
    })
  }
  function setMathani(matahni: any) {
    dispatch({
      type: SET_MATHANI,
      payload: { matahni }
    })
  }
  function setMofasal(mofasal: any) {
    dispatch({
      type: SET_MOFASAL,
      payload: { mofasal }
    })
  }
  function setAyahs(ayahs: any) {
    dispatch({
      type: SET_AYAHS,
      payload: { ayahs }
    })
  }


  function addNewColumn(titleSlug: string) {
    dispatch({
      type: REMOVE_TABLET,
      payload: { titleSlug }
    })
  }
  function editColumn(titleSlug: string) {
    dispatch({
      type: REMOVE_TABLET,
      payload: { titleSlug }
    })
  }
  function addTablet({ title, description, soura }: { title: string, description: string, soura: string }) {
    dispatch({
      type: ADD_TABLET,
      payload: { title, description, soura }
    })
  }
  function mountTablets(tablets: TabletTypeData[]) {
    dispatch({
      type: MOUNT_TABLETS,
      payload: { tablets }
    })
  }

  function activate(titleSlug: string) {
    dispatch({
      type: ACTIVATE,
      payload: { titleSlug }
    })
  }
  function updateColumnOrder(columnsOrder: string[]) {
    dispatch({
      type: UPDATE_COLUMNS_ORDER,
      payload: { columnsOrder }
    })
  }
  function updateColumnItemOrder(columns: TabletColumn[]) {
    dispatch({
      type: UPDATE_COLUMN_ITEM_ORDER,
      payload: { columns }
    })
  } function deleteItem(id: string) {
    dispatch({
      type: DELETE_ITEM,
      payload: { id }
    })
  }

  return <TabletContext.Provider value={{
    state, activate, mountTablets, updateColumnItemOrder, deleteItem, setSoura, setSouraName,
    setNmbTablet, setTab, setWords, addAyatCards, addCardSlices, setTabletWords, removeWords, clearTabletWords,
    setTablet, setCards, setCardsAccordion, removeTablet, addNewColumn, updateColumnOrder,
    editColumn, validTablet, addTablet, setSouras, setAyahs, setTiwal, setMiin, setMathani, setMofasal
  }}>{children}</TabletContext.Provider>;
}
