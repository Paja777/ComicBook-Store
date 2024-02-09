import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

interface ScrollContextValue {
  scrollToShop: boolean;
  setScrollToShop: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: ScrollContextValue = {
  scrollToShop: false,
  setScrollToShop: () => {}
};

const ScrollContext = createContext<ScrollContextValue>(defaultValue);

export const useScrollContext = (): ScrollContextValue => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children } : PropsWithChildren<{}>)  => {
  const [scrollToShop, setScrollToShop] = useState<boolean>(false);

  return (
    <ScrollContext.Provider value={{ scrollToShop, setScrollToShop }}>
      {children}
    </ScrollContext.Provider>
  );
};
