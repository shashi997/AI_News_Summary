// src/contexts/SummarizedNewsContext.js
import { createContext, useContext, useState } from 'react';

const SummarizedNewsContext = createContext();

export const SummarizedNewsProvider = ({ children }) => {
  const [summaries, setSummaries] = useState([]);

  return (
    <SummarizedNewsContext.Provider value={{ summaries, setSummaries }}>
      {children}
    </SummarizedNewsContext.Provider>
  );
};

export const useSummarizedNews = () => {
  const context = useContext(SummarizedNewsContext);
  if (context === undefined) {
    throw new Error('useSummarizedNews must be used within a SummarizedNewsProvider');
  }
  return context;
};

