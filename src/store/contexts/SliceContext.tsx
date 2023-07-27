import { createContext, useReducer } from 'react'
import {
  SET_OPEN_MENU
} from "@/store/constants";

const initialState = {
  isLoading: false,
  error: null,
  pageIndex: 0,
  openmenu: false,

};
const initialContext = {
  state: initialState,
  setOpenMenu: (open: boolean) => { open ? open : !open },

}
const sliceReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
  switch (type) {
    case SET_OPEN_MENU:
      return {
        ...state,
        openmenu: payload.open,
      };
    default:
      return state;
  }
};


export const SliceContext = createContext(initialContext);

export const SliceProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(sliceReducer, initialState)

  const setOpenMenu = (open: boolean) => {
    dispatch({ type: SET_OPEN_MENU, payload: { open } })
  }
  return (
    <SliceContext.Provider value={{
      state, setOpenMenu
    }}> {children}</SliceContext.Provider>
  )

}
