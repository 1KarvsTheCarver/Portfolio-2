import { createContext, useContext, useState } from 'react';

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <NavigationContext.Provider value={{ introComplete, setIntroComplete, activeLocation, setActiveLocation }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}
