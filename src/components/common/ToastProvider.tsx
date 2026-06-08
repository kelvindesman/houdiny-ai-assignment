'use client';
import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { ComingSoonToast } from './ComingSoonToast';

interface ToastContextValue {
  showComingSoon: () => void;
}

const ToastContext = createContext<ToastContextValue>({ showComingSoon: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showComingSoon = useCallback(() => {
    setVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showComingSoon }}>
      {children}
      <ComingSoonToast visible={visible} />
    </ToastContext.Provider>
  );
}
