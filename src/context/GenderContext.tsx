import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GenderContextType {
  gender: string | null;
  setGender: (gender: string) => void;
}

const GenderContext = createContext<GenderContextType | undefined>(undefined);

export const GenderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gender, setGender] = useState<string | null>(null);

  return (
    <GenderContext.Provider value={{ gender, setGender }}>
      {children}
    </GenderContext.Provider>
  );
};

export const useGender = (): GenderContextType => {
  const context = useContext(GenderContext);
  if (!context) {
    throw new Error('useGender must be used within a GenderProvider');
  }
  return context;
};