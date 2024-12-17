// src/contexts/JuiceContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { Juice, JuiceContextType } from '../types';

export const JuiceContext = createContext<JuiceContextType>({
  juices: [],
  tambahJuice: () => {},
  editJuice: () => {},
  hapusJuice: () => {}
});

export const JuiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [juices, setJuices] = useState<Juice[]>([]);

  const tambahJuice = (juice: Juice) => {
    setJuices(prev => [
      ...prev, 
      { ...juice, id: prev.length + 1 }
    ]);
  };

  const editJuice = (updatedJuice: Juice) => {
    setJuices(prev => 
      prev.map(juice => 
        juice.id === updatedJuice.id ? updatedJuice : juice
      )
    );
  };

  const hapusJuice = (id: number) => {
    setJuices(prev => prev.filter(juice => juice.id !== id));
  };

  return (
    <JuiceContext.Provider value={{ juices, tambahJuice, editJuice, hapusJuice }}>
      {children}
    </JuiceContext.Provider>
  );
};