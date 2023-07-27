import React, { useEffect } from 'react';

const initialState = {
  show: false,
  toggleMenu: () => { },
};
const InterfaceContext = React.createContext(initialState);

type InterfaceProviderProps = {
  children: React.ReactNode;
};

function InterfaceProvider({ children }: InterfaceProviderProps) {
  const [show, setShowMenu] = React.useState(false);

  function toggleMenu() {
    console.log({ show })
    setShowMenu((show) => !show)
  }

  useEffect(() => {
    console.log({ show })
  }, [show])


  return <InterfaceContext.Provider value={{ toggleMenu, show }}>{children}</InterfaceContext.Provider>;
}

export { InterfaceProvider, InterfaceContext };
