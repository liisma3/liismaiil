import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import viewerReducer, { ViewerStateType } from '@/store/slices/viewerSlice'
import tabletReducer, { TabletStateType } from '@/store/slices/tabletSlice'
import lessonReducer, { LessonStateType } from '@/store/slices/lessonSlice'
import coursReducer, { CoursStateType } from '@/store/slices/coursSlice'
import searchReducer from '@/store/slices/searchSlice'
import kanbanReducer from '@/store/slices/kanbanSlice'
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import  logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const rootReducer = combineReducers({
  viewer: viewerReducer,
  tablet: tabletReducer,
  lesson: lessonReducer,
  cours: coursReducer,
  kanban: kanbanReducer,
  search: searchReducer,
})
const persistedRootReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedRootReducer,
  //enhancers: [composedEnhancers],
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, 
          PERSIST, PURGE,REGISTER],logger
      },
    }),
})
export const persistor = persistStore(store)
export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export type RequireOnly<T, P extends keyof T> = Pick<T, P > & Partial<Omit<T,P>>