
import _ from 'lodash'
import {
  TabletGridsTypeData,
  TabletStatus,
  TabletTemplateTypeData,
  IAyah,
  WordSelectedType,
} from '@/api/tablet/tablet.types';

import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import slug from 'slug';
export type TabletTypeData = {
  id: string,
  title: string,
  souraNb: string,
  souraName: string,
  description: string,
  group: number,
  arabName: string,
  ayahs: TabletAyahType[],
  createdAt: string,
  updatedAt: string,
}
export type TemplateType = {
  id: string,
  title: string,
  souraNb: string,
  souraName: string,
  description: string,
  group: number,
  arabName: string,
  ayahs: TabletAyahType[],
  createdAt: string,
  updatedAt: string,
}
type TabletAyahType = {
  accordionIndex?:number,
  index?:number,
  number: number,
  text: string,
  numberInSurah: number,
  juz: number,
  souraName: string,
  slice?: string
}

type TabletFrontType = {
  id: string,
  title: string,
  souraNb: number,
  souraName: string,
  description: string,
  group: number,
  arabName: string,
  ayahs: TabletAyahType[],
  createdAt: string,
  updatedAt: string,
  tabletWords: TabletWordComment[]
}

export type TabletWordComment = {
  word: string, ayah: number, comment?: string,
  index: number, soura?: string, lang?: string
}
export type TabletSliceType = {
  text: string,
   numberInSurah: number, 
   number: number, 
   juz: number,
    souraName: string,
    slice?:string

}
export type TabletSouraType = {
  souraName: string, souraArabName: string,
  ayahs: TabletAyahType[], _id: number
}
export type AyahAccordionType = {
  accordionIndex?: number,
  index?: number,
  text: string,
  numberInSurah: number,
  number: number,
  juz: number,
  souraName: string,
  slice?: string
}
type TabletAyahAccordionType = {
  souraNb: number,
  arabName: string,
  souraName: string,
  ayahs: [AyahAccordionType[]]
}
type TabletSectionType = {
  title: string,
  names: {
    souraName: string,
    souraNb: number
  }
}
type TabletType = {
  souraNb: number,
  souraArabName: string,
  souraName: string,
  ayahs: AyahAccordionType[]
}
export type TabletStateType = {
  templateForTablet: TabletTemplateTypeData,
  template: TabletTemplateTypeData,
  tabletTemplates: TabletTemplateTypeData[],
  ayahsAccordion: TabletAyahAccordionType,
  ayahForTabletWords: TabletAyahType,
  contextShuffel:TabletAyahType[][],
  groupContext:number[],
  tabletGrids: TabletGridsTypeData[],
  tablet: TabletType,
  wordToComment: TabletWordComment,
  wordComments: TabletWordComment[],
  tabletWords: TabletWordComment[],
  openTabletTemplates: boolean,
  openTabletWordsDialog: boolean,
  selectedTemplate: TabletTemplateTypeData,
  selectedAyah: TabletAyahType,
  openedTemplates: TabletTemplateTypeData[],
  tabletsFront: TabletFrontType[],
  tablets: TabletFrontType[],
  ayahSlices: TabletSliceType[],
  wordArray: WordSelectedType,
  ayahCards: TabletAyahType[],
  openTabletDialog: boolean,
  openCardsDialog: boolean,
  openCreateTabletDialog: boolean,
  openEditTabletDialog: boolean,
  openAccordion: boolean,
  tags: [string],
  souraName: string,
  arabName: string,
  souraNmb: number,
  selfTablets: TabletFrontType[],
  soura: TabletSouraType,
  sectionSourasNames: TabletSectionType[],
  section: {
    title: string,
    names: {
      souraName: string,
      souraNb: number
    }
  },
  cards: TabletAyahAccordionType[],
  openTablet: boolean,
  souras: TabletSouraType[],
  ayahForWords: TabletAyahType
  cardsAccordion: {
    soura: string,
    ayahs: TabletAyahType[]
  },
  image: { url: string, public_id: string },
  createdAt: string,
  tabletStatus: TabletStatus,
  columns: [{
    id: string,
    itemIds: [string], title: string
  }],
  columnsOrder: string[],
  openWordsDialog: boolean,
}


export const initialTabletState: TabletStateType = {
  templateForTablet: {
    souraNb: -1, souraName: '',
    description: '', group: -1,
    arabName: '',
    ayahs: [
      {
        text: '', numberInSurah: -1,
        number: -1,
        juz: -1,
        souraName: '', slice: '',
      }
    ],
    createdAt: ''},
    template: {
      souraNb: -1,
      arabName: '',
      souraName: '',
      description: '',
      ayahs: [
        {
          text: '', numberInSurah: -1,
          number: -1,
          juz: -1,
          souraName: '', slice: '',
        }
      ],
      createdAt: ''},
    tabletGrids: [{
title: '', description: '', grid: -1,
    souraNb: '', souraName: '',
    arabName: '', ayahs: [
      [{
        text: '', numberInSurah: -1,
        number: -1,
        juz: -1,
        souraName: '', slice: '',
      }]
    ],

    wordComments: [{ word: '', ayah: -1, comment: '', soura: '', lang: '', index: -1 }],
  }],
  contextShuffel:[[
    {
      text: '', numberInSurah: -1,
      number: -1,
      juz: -1,
      souraName: '', slice: '',
    }
  ]],
  groupContext:[-1],
  tabletTemplates:[],
  ayahForTabletWords:     {
    text: '', numberInSurah: -1,
    number: -1,
    juz: -1,
    souraName: '', slice: '',
  },
  section: {
    title: '',
    names: {
      souraName: '',
      souraNb: -1
    }
  },

  wordToComment: { word: '', ayah: -1, comment: '', soura: '', lang: '', index: -1 },
  openTablet: false,
  openTabletWordsDialog:false,
  wordComments: [{ word: '', ayah: -1, comment: '', index: -1, soura: '', lang: '' }],
  
  openTabletTemplates: false,
  selectedTemplate: {
    souraNb: -1, souraName: '',
    description: '', group: -1,
    arabName: '',
    ayahs: [
      {
        text: '', numberInSurah: -1,
        number: -1,
        juz: -1,
        souraName: '', slice: '',
      }
    ],
    createdAt: '',

  },
  selectedAyah: {
    text: '', numberInSurah: -1,
    number: -1,
    juz: -1,
    souraName: '', slice: ''
  },
  openedTemplates: [{
    id: '', title: '',
    souraNb: -1, souraName: '',
    description: '', group: -1,
    arabName: '',
    ayahs: [
      {
        text: '', numberInSurah: -1,
        number: -1,
        juz: -1,
        souraName: '', slice: '',
      }
    ],
    createdAt: '',
    
  }],
  tabletsFront: [{
    id: '', title: '', souraNb: -1, souraName: '',
    description: '', group: -1,
    arabName: '',
    ayahs: [
      {
        text: '', numberInSurah: -1,
        number: -1,
        juz: -1,
        souraName: '', slice: '',
      }
    ],
    createdAt: '',
    updatedAt: '', tabletWords: [{ ayah: -1, index: -1, comment: '', lang: '', souraName: '', word: '' }]

  }],
  ayahSlices: [{
    text: '', numberInSurah: -1, number: -1, juz: -1,
    souraName: ''
  }],
  wordArray: {
    index: -1,
    word: '',
    ayah: -1
  },
    openTabletDialog: false,
  openCardsDialog: false,
  openCreateTabletDialog: false,
  openEditTabletDialog: false,
  openAccordion: false,
  tags: [''],
  souraName: '',
  arabName: '',
  souraNmb: -1,
  selfTablets: [{
    id: '', title: '', arabName: '', souraName: '', souraNb: -1, description: '', ayahs: [
      {
        text: '', numberInSurah: -1, number: -1, juz: -1, souraName: '', slice: 'p'
      }
    ], createdAt: '', group: -1, updatedAt: '',
    tabletWords: [{ ayah: -1, index: -1, comment: '', lang: '', souraName: '', word: '' }]
  }],
  soura: {
    souraName: '', souraArabName: '', ayahs: [{
      text: '', numberInSurah: -1, number: -1, juz: -1, soura: '', slice: 'p'
    }], _id: -1
  },
  sectionSourasNames: [{
    title: '',
    names: {
      souraName: '',
      souraNb: -1
    }
  }],
  souras: [{
    souraName: '', souraArabName: '', ayahs: [{
      text: '', numberInSurah: -1, number: -1, juz: -1, soura: '', slice: 'p'
    }], _id: -1
 }],
  ayahsAccordion: {
    souraNb: -1,
    arabName: '',
    souraName: '',
    ayahs: [[{
      text: '', numberInSurah: -1, number: -1, juz: -1, souraName: '', 
    }]]
  },
  tablet: {
    souraNb: -1,
    souraArabName: '',
    souraName: '',
    ayahs: [{
      text: '', numberInSurah: -1, number: -1, juz: -1, souraName: '', slice: 'p'
    }]
  },
  cards: [{
    souraNb: -1,
    arabName: '',
    souraName: '',
    ayahs: [[{
      text: '', numberInSurah: -1, number: -1, juz: -1, souraName: '', slice: 'p'
    }]]
  }],
  ayahForWords: {
    index:-1,  accordionIndex:-1,
    text: '', numberInSurah: -1,
    number: -1,
    juz: -1,
    soura: '', slice: '',
  },

  cardsAccordion: {
    soura: '', ayahs: [{
      text: '', numberInSurah: -1,
      number: -1,
      juz: -1,
      soura: '', slice: '',
    }]
  },
  cardSlices: [{ soura: null, numberInSurah: 0, slices: [] }],
  image: { url: '', public_id: '' },
  createdAt: '',
  tabletStatus: TabletStatus.SOBH,
  columns: [{ id: '', itemIds: [''], title: '' }],
  columnsOrder: [''],

  openWordsDialog: false,

}
const tabletSlice = createSlice({
  name: 'tablet',
  initialState: initialTabletState,
  reducers: {
    setSouras(state, action: PayloadAction<{ souras: TabletSouraType[] }>) {
      state.souras = action.payload.souras
    },
    setOpenAccordion(state, action: PayloadAction<{ openAccordion: boolean }>) {
      // state.openAccordion = action.payload.openAccordion
      return { ...state, openAccordion: action.payload.openAccordion }
    },

    closeOpenAccordTabCreate(state, action: PayloadAction<{ open: boolean }>) {
      return {...state, openAccordion:action.payload.open,
        openTabletDialog:action.payload.open,
        openCreateTabletDialog:action.payload.open,
        openWordsDialog:action.payload.open,
        souraName:initialTabletState.souraName,
        section:initialTabletState.section
      }
    

    },

    setOpenTabletTemplates(state, action: PayloadAction<{ open: boolean }>) {
      state.openTabletTemplates = action.payload.open
    },
    setOpenTabletWordsDialog(state, action: PayloadAction<{ open: boolean }>) {
      state.openTabletWordsDialog = action.payload.open
    },
    setTabletTemplates(state, action: PayloadAction<{ tablets: TabletTemplateTypeData[] }>) {
              state.tabletTemplates =   action.payload.tablets
            },
    selectTemplate(state, action: PayloadAction<{ template: TabletTemplateTypeData }>) {
      console.log({ template: action.payload.template })
      if (state?.selectedTemplate && typeof state?.selectedTemplate !== 'undefined'
        && state.selectedTemplate['souraName'] === action.payload.template['souraName']) {

        state.selectedTemplate = initialTabletState.selectedTemplate
      } else {
        state.selectedTemplate = action.payload.template
      }
    },
    clearSelectedTemplate(state) {
    if (state?.selectedTemplate && typeof state?.selectedTemplate !== 'undefined'
        && state.selectedTemplate['souraName'] !== '') {
        state.selectedTemplate = initialTabletState.selectedTemplate
      }

    },
    selectAyahFromAccordion(state, action: PayloadAction<{ ayah: TabletAyahType }>) {
      console.log({ ayah: action.payload.ayah })
      if (state?.selectedAyah && typeof state?.selectedAyah !== 'undefined'
        && state.selectedAyah['numberInSurah'] === action.payload.ayah['numberInSurah']) {

        state.selectedAyah = initialTabletState.selectedAyah
      } else {
        state.selectedAyah = action.payload.ayah
      }
    },

    setTemplateForTablet(state, action: PayloadAction<{ template: TabletTemplateTypeData }>) {

      if (state?.templateForTablet && state?.templateForTablet &&
        state?.templateForTablet['souraName'] === '') {
        state.templateForTablet = action.payload.template
      } else state.templateForTablet = initialTabletState.templateForTablet
    },

    setTemplate(state, action: PayloadAction<{ template: TabletTemplateTypeData }>) {
      console.log({payload:action.payload.template,current : current(state)})
      if (current(state)?.templateForTablet?.souraName === ''&& current(state)?.templateForTablet.ayahs[0].text === '') {
        console.log({current : current(state), payload:action.payload.template})
        state.templateForTablet = action.payload.template
      } else if(current(state)?.templateForTablet.souraName === action.payload.template.souraName 
      && current(state)?.templateForTablet?.souraNb === action.payload.template.souraNb) {
        for(const aya of action?.payload?.template?.ayahs) {
          console.log({current : current(state), payload:action.payload.template})
            state.templateForTablet.ayahs = [...current(state).templateForTablet.ayahs,aya]
        }
      }else {
          console.log({currentTemplateForTablet:current(state)?.templateForTablet,
             current : current(state), 
             payload:action.payload.template})
          return state
        }
    },
    removeAccordionFromTemplate(state, action: PayloadAction<{ ayat: TabletAyahType[], souraName:string, souraNb:number}>) {
      console.log({payload:action.payload.ayat})
      if (current(state)?.templateForTablet?.souraName === action.payload.souraName) {
          for(const aya of action?.payload?.ayat) {
          
            state.templateForTablet.ayahs.filter((registredAy:TabletAyahType) => {
              return (registredAy.numberInSurah !== aya.numberInSurah && registredAy.number !== aya.number 
                && registredAy.text !== aya.text ) 
            }) }
        }else {
          console.log({currentTemplateForTablet:current(state)?.templateForTablet,
             current : current(state), 
             payload:action.payload.ayat})
          return state
        }
    },
    
    resetTemplate(state) {
      console.log({current : current(state)})
      if (current(state)?.templateForTablet?.souraName !== ''&& 
      current(state)?.templateForTablet.ayahs[0].text !== '') {
        console.log({current : current(state)})
        state.templateForTablet = initialTabletState.templateForTablet
        state.template = initialTabletState.template
        state.tablet = initialTabletState.tablet
      } else{ 
          return state
        }
    },
    setTablet(state, action: PayloadAction<{ tablet: TabletType }>) {
      state.tablet = action.payload.tablet

    },
    setContextShuffel(state, action: PayloadAction<{ shuffel: TabletAyahType[][] }>) {
      state.contextShuffel = action.payload.shuffel
      },

      setGroupContext(state, action: PayloadAction<{ group: number[] }>) {
        state.groupContext = action.payload.group
        },

      clearContextShuffel(state) {
        state.contextShuffel = initialTabletState.contextShuffel
        },
  
    setOpenedTemplate(state, action: PayloadAction<{ template: TabletTemplateTypeData }>) {
      if (state?.openedTemplates && state?.openedTemplates.length > 0
        && state?.openedTemplates[0]['id'] === '') {
        state.openedTemplates = [action.payload.template]

      } else if (state?.openedTemplates && state.openedTemplates[0]['id'] !== '') {
        const templateSelected = _.find(state.openedTemplates, template => template === action.payload.template)
        if (templateSelected) {
          state.openedTemplates = [..._.filter(state.openedTemplates, (template) => template !== action.payload.template)]
        }
      } else {
        state.openedTemplates = [...state.openedTemplates, action.payload.template]
      }
    },


    setTabletGrids(state, action: PayloadAction<{ tabletGrids: TabletGridType[] }>) {
      state.tabletGrids = action.payload.tabletGrids

    },

    deleteWordsAndComments(state, action: PayloadAction<{ wordToDelete: TabletWordComment }>) {
      state.wordComments = _.filter(state.wordComments, (elem) => {
        return (elem.index !== action.payload.wordToDelete.index)
      })
    },
    setTabletsFront(state, action: PayloadAction<{ tabletsFront: TabletFrontType[] }>) {
      state.tabletsFront = action.payload.tabletsFront
    },
    setOpenTablet(state, action: PayloadAction<{ open: boolean }>) {
      state.openTablet = action.payload.open
    },
    addToTablets(state, action: PayloadAction<{ tablet: TabletFrontType }>) {
      if (state?.tablets && state?.tablets.length > 0 && state?.tablets[0].id === '' && state.tablets[0]['title'] === '') {
        state.tablets = [action.payload.tablet]

      } else {
        state.tablets = [...state.tablets, action.payload.tablet]
      }
    },
    setSelfTablets(state, action: PayloadAction<{ selfTablets: TabletFrontType[] }>) {
      console.log(state?.selfTablets)
      if (state?.selfTablets && state?.selfTablets.length > 0 && state?.selfTablets[0]['title'] === '' &&
        state.selfTablets[0]['souraNb'] === -1) {
        console.log({ stateSelf: state.selfTablets, payload: action.payload.selfTablets })
        state.selfTablets = action.payload.selfTablets
      }
      else if (state?.selfTablets && state?.selfTablets.length > 0) {
        console.log({ stateSelf: state.selfTablets, payload: action.payload.selfTablets })
        state.selfTablets = [...state.selfTablets, ...action.payload.selfTablets]

      }
    },


    setSectionSourasNames(state, action: PayloadAction<{
      sectionSourasNames: [{
        title: string,
        names: {
          souraName: string,
          souraNb: number
        }
      }]
    }>) {
      state.sectionSourasNames = action.payload.sectionSourasNames
    },
    setAyahsAccordion(state, action: PayloadAction<{ ayahsAccordion: TabletAyahAccordionType }>) {
      if (action.payload.ayahsAccordion.souraName === state.souraName && action.payload.ayahsAccordion.souraNb !== state?.ayahsAccordion?.souraNb) {
         state.ayahsAccordion = action.payload.ayahsAccordion 
      }
    },

    addAyahSlices(state, action: PayloadAction<{ayahSlicesArg:TabletSliceType[] }>) {
      console.log({stateAy:action.payload.ayahSlicesArg, length:current(state)?.ayahSlices?.length,
      ayahSlices:current(state)?.ayahSlices})
       
      if (current(state)?.ayahSlices?.length === 1  ) {
         state.ayahSlices=action.payload.ayahSlicesArg 
      }else return state  
    },
    addUpSlice(state, action: PayloadAction<{ayahSlicesArg:TabletSliceType[] }>) {
      console.log({stateAy:action.payload.ayahSlicesArg, length:current(state)?.ayahSlices?.length,
      ayahSlices:current(state)?.ayahSlices})
             
      if (current(state)?.ayahSlices?.length === 1  ) {
         state.ayahSlices=action.payload.ayahSlicesArg 
      }else return state  
    },
    setWordArray(state, action: PayloadAction<{wordArg:WordSelectedType }>) {
      console.log({wordArg:action.payload.wordArg, 
        })
             
      if (current(state)?.wordArray['index'] !== -1  ) {
         state.wordArray=action.payload.wordArg 
      }else return state  
    },
    sliceWord(state, action: PayloadAction<{wordArg:WordSelectedType }>) {
      console.log({wordArg:action.payload.wordArg, 
        })
             
      if (current(state)?.wordArray['index'] !== -1  ) {
         state.wordArray=action.payload.wordArg 
      }else return state  
    },
    addSlicesToAyahsAccordion(state) {
      if (current(state).ayahSlices[0]?.souraName === current(state).souraName && 
      current(state).ayahSlices[0].souraName === current(state).ayahsAccordion.souraName 
      && typeof current(state).ayahForWords?.accordionIndex !== 'undefined') {
        if(current(state).ayahSlices[0]?.slice==='s'  && current(state)?.ayahForWords?.index! <25  ){
          console.log({currentState:current(state)})
    
          state.ayahsAccordion?.ayahs[current(state).ayahForWords?.accordionIndex!].
          splice(current(state).ayahForWords.index!, 1,current(state).ayahSlices[0])
          state.ayahsAccordion?.ayahs[current(state).ayahForWords?.accordionIndex!].
          splice(current(state).ayahForWords.index!+1,1,{...current(state).ayahsAccordion?.
            ayahs[current(state).ayahForWords?.accordionIndex!][current(state).ayahForWords.index!+1],
              text: `${current(state).ayahSlices[1].text} ${current(state).ayahsAccordion?.ayahs[
                current(state).ayahForWords?.accordionIndex!][current(state).ayahForWords.index! +1].text}`} 
          )
        }else if(current(state)?.ayahForWords?.index! ==25) {
      state.ayahsAccordion?.ayahs[current(state).ayahForWords?.accordionIndex!].concat(current(state).ayahSlices[0]).concat(current(state).ayahSlices[0]) 
        
       } 
      }else return    
    },
    setAyahForWords(state, action: PayloadAction<{ ayah: IAyah, 
      index:number, accordionIndex: number }>) {
      console.log({ ayah: action.payload.ayah })
      state.ayahForWords = {...action.payload.ayah,index:action.payload.index,accordionIndex:action.payload.accordionIndex}
    },
    setAyahForTabletWords(state, action: PayloadAction<{ ayah: TabletAyahType}>) {
  
      state.ayahForTabletWords = action.payload.ayah
    },
    clearAyahForWords(state) {
      state.ayahForWords = { number: -1, text: '', numberInSurah: -1, juz: -1, slice: 'p', soura: '' }
    },

    clearAyahSlices(state) {
      try {
        state.ayahSlices =initialTabletState.ayahSlices
      } catch (error) {
        return 
      }
    },
    setSoura(state, action: PayloadAction<{ soura: TabletSouraType }>) {
      state.soura = action.payload.soura
    },
    setSouraName(state, action: PayloadAction<{ souraName: string }>) {
      state.souraName = action.payload.souraName
    },
    setArabName(state, action: PayloadAction<{ arabName: string }>) {
      state.arabName = action.payload.arabName
    },
    setSouraNb(state, action: PayloadAction<{ souraNmb: number }>) {
      state.souraNmb = action.payload.souraNmb
    },
    setCards(state, action: PayloadAction<{ cards: TabletAyahAccordionType[] }>) {
      state.cards = action.payload.cards
    },
    setSection(state, action: PayloadAction<{ section: TabletSectionType }>) {
      state.section = action.payload.section
    },

    resetAyahsAccordion(state, action:PayloadAction<{}>) {
      console.log({ slices: state.ayahSlices })
      console.log({ ayahForWords: state.ayahForWords })
      return{...state, ayahsAccordion:initialTabletState.ayahsAccordion,
         souraName:initialTabletState.souraName,
        section:initialTabletState.section}
   },

    clearAll(state) {
      state = initialTabletState
    },

    removeTablet(state, action: PayloadAction<{ titleSlug: string }>) {
      const tabs = state.tablets.filter((tablet: TabletFrontType) => slug(tablet.title) !== action.payload.titleSlug)
      state.tablets = tabs
    },
    addAyatCard(state, action: PayloadAction<{ ayahCards: TabletAyahType[] }>) {
      state.ayahCards = state.ayahCards.concat(action.payload.ayahCards)
    },
    addWords(state, action: PayloadAction<{ wordComments: TabletWordComment[] }>) {
      if (state.wordComments[0].word === '' && state.wordComments[0].index === -1) {
        state.wordComments = action.payload.wordComments
      } else {

        state.wordComments = state.wordComments.concat(action.payload.wordComments)
      }
    },
    setWordComments(state, action: PayloadAction<{ wordComment: TabletWordComment }>) {
      if (state.wordComments[0].word === '' && state.wordComments[0].ayah === -1) {
        state.wordComments = [action.payload.wordComment]
      } else {
        const wordsWithoutDoublons = _.filter(state.wordComments, function (el) {
          return (el.word !== action.payload.wordComment['word'] && el.ayah !== action.payload.wordComment['ayah'] &&
            el.index !== action.payload.wordComment['index'] && el.lang !== action.payload.wordComment['lang'])
        })
        state.wordComments = [...wordsWithoutDoublons, action.payload.wordComment]

      }
    },
    removeWords(state, action: PayloadAction<{ words: TabletWordComment[] }>) {
      const newWords = state.wordComments.filter((word: TabletWordComment) => {
        for (const delWord of action.payload.words) {
          if (delWord.word === word.word) return true
          else return false
        }
      })
      state.wordComments = newWords
    },

    removeSlice(state, action: PayloadAction<{ indexIntra: number, nbInSurah: number }>) {
      const ayats = state.ayahsAccordion.ayahs[action.payload.indexIntra].filter((ayah: AyahAccordionType) => {
        ayah['numberInSurah'] !== action.payload.nbInSurah
      })
      state.ayahsAccordion.ayahs[action.payload.indexIntra] = ayats
    },
    clearWords(state) {
      state.wordComments = initialTabletState.wordComments
    },

    setOpenWordCommentDialog(state, action: PayloadAction<{ wordToComment: TabletWordComment }>) {
      state.wordToComment = action.payload.wordToComment
    },

    setOpenWordsDialog(state, action: PayloadAction<{ open: boolean }>) {
      state.openWordsDialog = action.payload.open
    },

    setOpenTabletDialog(state, action: PayloadAction<{ open: boolean }>) {
      state.openTabletDialog = action.payload.open
    },

    setOpenCardsDialog(state, action: PayloadAction<{ open: boolean }>) {
      state.openCardsDialog = action.payload.open
    },
    setOpenCreateTabletDialog(state, action: PayloadAction<{ open: boolean }>) {
      state.openCreateTabletDialog = action.payload.open
    },
    setOpenEditTabletDialog(state, action: PayloadAction<{ open: boolean }>) {
      state.openEditTabletDialog = action.payload.open
    },
    updateColumnsOrder(state, action: PayloadAction<{ columnsOrder: string[] }>) {
      state.columnsOrder = action.payload.columnsOrder
    },
    updateColumns(state, action: PayloadAction<{
      columns: [{
        id: string,
        itemIds: [string],
        title: string
      }]
    }>) {
      state.columns = action.payload.columns
    }

  }
})
export const tabletActions = tabletSlice.actions
export default tabletSlice.reducer
