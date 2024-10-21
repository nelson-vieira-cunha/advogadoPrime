'use client'

import { createContext, ReactNode, useContext } from 'react';

type BatchContextType = {
    batchs: Batch[];
}

export type Batch = {
    batch: number
    startedAt: string,
    endedAt: string,
    oldPrice: number,
    promotionPrice: number,
    url: string,
}

const BatchContext = createContext<BatchContextType | undefined>(undefined);

export const BatchProvider = ({ children }: { children: ReactNode }) => {
  
  const batchs = [
    {
        batch: 1,
        startedAt: '2024-10-10 00:00:00',
        endedAt: '2024-10-25 00:00:00',
        oldPrice: 600,
        promotionPrice: 600,
        url: 'https://www.cers.com.br/curso/curso-trt-se-analista-judiciario',
    },
    {
        batch: 2,
        startedAt: '2024-10-26 00:00:00',
        endedAt: '2024-11-01 00:00:00',
        oldPrice: 680,
        promotionPrice: 680,
        url: 'https://www.cers.com.br/curso/curso-trt-se-analista-judiciario',
    },
    {
        batch: 3,
        startedAt: '2024-11-01 00:00:00',
        endedAt: '2024-11-05 00:00:00',
        oldPrice: 800,
        promotionPrice: 800,
        url: 'https://www.cers.com.br/curso/curso-trt-se-analista-judiciario',
    },
  ]

  return (
    <BatchContext.Provider value={{ batchs }}>
      {children}
    </BatchContext.Provider>
  );
};


export const useBatch = () => {
  const context = useContext(BatchContext);
  if (!context) {
    throw new Error("useBatch must be used within a BatchProvider");
  }
  return context;
};