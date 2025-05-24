// src/context/ThemeContext.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type ThemeContextType = {
  isSpidermanMode: boolean;
  toggleSpidermanMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isSpidermanMode, setIsSpidermanMode] = useState(false);

  const toggleSpidermanMode = () => {
    setIsSpidermanMode(prev => !prev);
    
    // Cambiar la clase del body para aplicar los estilos globales
    if (!isSpidermanMode) {
      document.body.classList.add('spiderman-theme');
    } else {
      document.body.classList.remove('spiderman-theme');
    }
  };

  return (
    <ThemeContext.Provider value={{ isSpidermanMode, toggleSpidermanMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
