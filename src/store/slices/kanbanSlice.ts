// third-party
import { Action, AnyAction, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RequireOnly} from '@/store/store'
import { KanbanStage, KanbanStateProps,KanbanComment  } from '@/api/kanban/kanban.types';
import {TabletTypeData } from '@/api/tablet/tablet.types';

import {nanoid} from 'nanoid'
type DraftKanbanStage = RequireOnly <KanbanStage,'id'| 'title'>
const initialState: KanbanStateProps = {
  stages: [],
  selectedTablet:'',
  selectedStage:'',
  selectedStory:'',
  author: 'kazdhicham@gmail.com',
  title: '',
  description: '',
  video: [''],
  videoLink: [''],
  pdf: [''],
 };
 interface RejectedAction extends Action {
  error: Error
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

 const createStage =(draftStage:DraftKanbanStage) :KanbanStage => {
  return {
    id :nanoid(), 
    ...draftStage
  }
 }
 
const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    
    // ADD COLUMN
    addStage(state: KanbanStateProps, action: PayloadAction<{ stage: KanbanStage }>) {
      console.log({ state:current(state),stage : action.payload.stage })
      const newStage = createStage(action.payload.stage)
          state.stages.unshift(newStage)
      },
      deleteStage(state, action: PayloadAction<{ id: string }>) {
       const index = state.stages.findIndex(stg => stg.id === action.payload.id)
        state.stages.splice(index,1)
      },
    setSelectedStage(state: KanbanStateProps, action: PayloadAction<{ stageId: string }>) {

      // if (state?.stages && state?.stages?.length > 0 && state.stages[0]['id'] === -1) {
      if(state.selectedStage ==='' || state.selectedStage !== action.payload.stageId ){
        state.selectedStage = action.payload.stageId
      }else{
        state.selectedStage = ''
      }
    },
    editStage(state: KanbanStateProps, action: PayloadAction<{ 
      stageId: number, title:string }>) {
      
      // if (state?.stages && state?.stages?.length > 0 && state.stages[0]['id'] === -1) {
      state.stages[action.payload.stageId].title = action.payload.title

        /*   } else if (state?.stages && state?.stages?.length > 0 && state.stages[0]['id'] !== -1) {
    
            state.stages = [...state?.stages, { ...action.payload.stage }]
          } */
    },
    addStory(state: KanbanStateProps, action: PayloadAction<{
      stageId: string, id:string,title:string}>) {
      const stageIndex = current(state).stages.findIndex((stg:KanbanStage) => stg.id === action.payload.stageId)
      console.log({state:current(state),id:action.payload.id, title:action.payload.title}) 
      if(typeof stageIndex !== 'undefined' && typeof current(state).stages[stageIndex] !== 'undefined') {
      console.log({state:current(state),stageIndex,stage:current(state).stages[stageIndex] }) 
        if( typeof current(state).stages[stageIndex].stories  === 'undefined'){
          state.stages[stageIndex].stories = [{id:action.payload.id, title:action.payload.title}]   
        }else {
        state.stages[stageIndex].stories = [...current(state).stages[stageIndex].stories!,{id:action.payload.id, title:action.payload.title}]
        }
      }    
    },
  addTablet(state: KanbanStateProps,
           action: PayloadAction<{ stageId:string, 
            storyId:string,tablet:TabletTypeData}>) {
     const stageIndex = state.stages.findIndex(stg  => stg.id=== action.payload.stageId)
      const storyIndex  = state.stages[stageIndex].stories?.findIndex(stor  => stor.id=== action.payload.storyId) 
              state?.stages[stageIndex]?.stories[storyIndex]?.kanbanTablets?.unshift(action.payload.tablet)
    
    },
    // DELETE STAGE
  
    //DELETE STORY
    deleteStory(state, action: PayloadAction<{ stageId: string, storyId:string }>) {
      const stageIndex = state.stages.findIndex(stg => stg.id=== action.payload.stageId)
      const storyIndex = state.stages[stageIndex].stories?.findIndex(str => str.id=== action.payload.storyId)
      state.stages[stageIndex].stories?.splice(storyIndex!,1)      
    },
    // SELECT ITEM
    selectTablet(state, action: PayloadAction<{ stageId:number, storyId: number, tabletId: number }>) {
      state.selectedTablet = state.stages[action.payload.stageId].stories[action.payload.storyId].kanbanTablets[tabletId];
    },

    // ADD ITEM COMMENT
    addTabletComment(state, action: PayloadAction<{ id: number, story: number, stage: number, comment: KanbanComment }>) {
      if (state?.stages[action.payload.stage]['id'] !== -1) {
        if (state?.stages[action.payload.stage]['stories'][action.payload.story]['id'] !== -1) {
          if (state?.stages[action.payload.stage]['stories'][action.payload.story]['kanbanTablets'][0]['id'] === -1) {
            console.log(state?.stages[action.payload.stage]['stories'])
            return state
            /* 
            if (state?.stages[action.payload.stage]['stories'][action.payload.story]['kanbanTablets'][action.payload.id]['comments'][0]['id'] === -1) {
          state?.stages[action.payload.stage]['stories'][action.payload.story]['kanbanTablets'][action?.payload?.id]['comments']= [action.payload.comment]
            } else {
              state?.stages[action.payload.stage]['stories'][action.payload.story]['kanbanTablets'][action.payload.id]['comments'] =
                [...state?.stages[action.payload.stage]['stories'][action.payload.story]['kanbanTablets'][action.payload.id].comments, action.payload.comment]
            } */
          }

        }
      }
    },

    // DELETE ITEM
    deleteTablet(state, action: PayloadAction<{ id: number, story: number, stage: number }>) {
      if (state?.stages[action.payload.stage]['id'] !== -1) {
        if (state?.stages[action.payload.stage]['stories'][action.payload.story]['id'] !== -1) {
          state['stages'][0]['stories'][0]['kanbanTablets'][0] = initialState.stages[0].stories[0].kanbanTablets[0]
        }
      }
    },
    // ADD Tablet
    addKanbanTablet(state, action: PayloadAction<{ stage: number, story: number, tablet: KanbanTablet }>) {
      if (state?.stages[action.payload.stage]['id'] !== -1) {
        if (state?.stages[action.payload.stage]['stories'][action.payload.story]['id'] !== -1) {
          state?.stages[action.payload.stage]['stories'][action.payload.story]['kanbanTablets'].push(action.payload.tablet)
        }
      }

    },
  },

});

// Reducer
export const kanbanActions = kanbanSlice.actions
export default kanbanSlice.reducer;
   