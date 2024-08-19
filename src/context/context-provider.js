'use client';

// Context Provider
import { Provider as ContextProvider } from '@/context';

export default function BaseProvider({ children }) {
  return <ContextProvider>{children}</ContextProvider>;
}
