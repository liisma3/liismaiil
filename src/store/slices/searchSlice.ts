import { PayloadAction, createSlice } from '@reduxjs/toolkit';
type SearchGuestType = {
  login: string,
  status: string,
  token:string,
  flag:string
  }
 type SearchViewerType = {
  login: string,
  status: string,
  } 
type SearchStateType = {
  city:string,
  cities:string[],
  state:string,
  states:string[],
  country:string,
  countries:string[],
  continent:string,
  continents:string[],
  viewers: SearchViewerType[] | null,
  guests: SearchGuestType[] | null,  
}
const initialSearchState :SearchStateType= {
  city:'',
  cities:[''],
  continent:'',
  continents:[''],
  country:'',
  countries:[''],
  state:'',
  states:[''],
  guests:[{flag:'',login:'',status:'',token:''}],
  viewers:[{login:'',status:''}],

  };
const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    setCity(state, action: PayloadAction<{ city: string }>) {
      state.city = action.payload.city
    },
    setCountry(state, action: PayloadAction<{ country: string }>) {
      state.country = action.payload.country
    },
    setContinent(state, action: PayloadAction<{ continent: string }>) {
      state.continent = action.payload.continent
      },
    setState(state, action: PayloadAction<{ state: string }>) {
      state.state = action.payload.state
    },
    setCities(state, action: PayloadAction<{ cities: string[] }>) {
    console.log({cities:action.payload.cities})
      state.cities = action.payload.cities
    },
    setCountries(state, action: PayloadAction<{ countries: string[] }>) {
    console.log({countries:action.payload.countries})
      state.countries = action.payload.countries
    },
    setContinents(state, action: PayloadAction<{ continents: string[] }>) {
      state.continents = action.payload.continents
    },
    setStates(state, action: PayloadAction<{ states: string[] }>) {
      state.states = action.payload.states
          },
    setGuests(state, action: PayloadAction<{ guests: SearchGuestType[] }>) {
      state.guests = action.payload.guests
          },
    setViewers(state, action: PayloadAction<{ viewers: SearchViewerType[] }>) {
      state.viewers = action.payload.viewers
          },
      }})
      export const searchActions  = searchSlice.actions
      export default searchSlice.reducer
