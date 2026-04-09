import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoaderContextType {
  isLoaderComplete: boolean;
  markLoaderComplete: () => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  const markLoaderComplete = () => {
    // Add a small delay to ensure loader exit animation completes
    setTimeout(() => {
      setIsLoaderComplete(true);
    }, 800); // Match the loader exit animation duration
  };

  return (
    <LoaderContext.Provider value={{ isLoaderComplete, markLoaderComplete }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoaderComplete() {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error('useLoaderComplete must be used within a LoaderProvider');
  }
  return context;
}
