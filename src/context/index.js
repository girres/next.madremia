'use client';

import { createContext } from 'react';

// TOASTIFY
import { Toaster } from 'react-hot-toast';

export const Context = createContext({});

export const Provider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      {children}
      <Toaster />
    </Context.Provider>
  );
};
