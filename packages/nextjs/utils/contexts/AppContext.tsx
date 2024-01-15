import { createContext, useContext, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
type AppContextDataProps = {};

const AppContext = createContext<AppContextDataProps | null>(null);

export const useAppContext = (): AppContextDataProps => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a contextProvider");
  }
  return context;
};

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const value: AppContextDataProps = {};

  return !isMounted ? null : <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
