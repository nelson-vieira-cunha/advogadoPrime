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
        startedAt: '2025-02-22 00:00:00',
        endedAt: '2025-03-08 23:59:00',
        oldPrice: 480,
        promotionPrice: 480,
        url: 'https://conteudolegal.disce.com.br/pay/destravando-sua-advocacia-como-se-tornar-um-advogado-prime',
    },
    {
        batch: 2,
        startedAt: '2025-03-09 00:00:00',
        endedAt: '2025-03-15 23:59:00',
        oldPrice: 480,
        promotionPrice: 480,
        url: 'https://conteudolegal.disce.com.br/pay/destravando-sua-advocacia-como-se-tornar-um-advogado-prime',
    },
    {
        batch: 3,
        startedAt: '2025-03-16 00:00:00',
        endedAt: '2025-03-21 00:00:00',
        oldPrice: 620,
        promotionPrice: 620,
        url: 'https://conteudolegal.disce.com.br/pay/destravando-sua-advocacia-como-se-tornar-um-advogado-prime',
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