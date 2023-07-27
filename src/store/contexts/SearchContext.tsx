import React, { useEffect } from 'react';

const initialState = {
  result: [],
  setTerm: (term: string) => {
    console.log({ term });
  },
};
const SearchContext = React.createContext(initialState);

type SearchProviderProps = {
  children: React.ReactNode;
};

function SearchProvider({ children }: SearchProviderProps) {
  const [term, setTerm] = React.useState('');
  const [result, setResult] = React.useState<any>([]);


  return <SearchContext.Provider value={{ setTerm, result }}>{children}</SearchContext.Provider>;
}

export { SearchProvider, SearchContext };
