'use client';

import { createContext } from 'react';

// Commerce
import { useCommerce } from '@/context/useCommerce';

// TOASTIFY
import { Toaster } from 'react-hot-toast';

export const Context = createContext({});

export const Provider = ({ children }) => {
  return (
    <Context.Provider
      value={{
        Commerce: useCommerce(),
      }}
    >
      {children}
      <Toaster />
    </Context.Provider>
  );
};
