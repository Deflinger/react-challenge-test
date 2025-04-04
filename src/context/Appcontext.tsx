import { createContext, useContext, useState, ReactNode } from "react";

interface AppContext {
  value: number | null;
  setValue: (value: number | null) => void;
}


const AppContext = createContext<AppContext | undefined>(undefined);


export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};