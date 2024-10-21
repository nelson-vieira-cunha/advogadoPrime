'use client'

import { useBatch } from '@/context/BatchsContext'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'

type ProgressBar = {
    className?: string
    actualProgress?: number
    maxProgress?: number
    batch?: number | undefined
}

export default function ProgressBar({
    className,
    actualProgress,
    maxProgress
}: Partial<ProgressBar>) {

    const { batchs } = useBatch()

    const calculateProgress = () => {
        if (actualProgress && maxProgress) {
            let percent = (actualProgress / maxProgress) * 100
            if (percent > 100) {
                percent = 100
            }
            return percent.toFixed(0)
        }
        return actualProgress
    }

    const getCurrentBatch = () => {
        const currentDate = new Date();
        
        return batchs.find(batch => {
          const startDate = new Date(batch.startedAt);
          const endDate = new Date(batch.endedAt);
          return currentDate >= startDate && currentDate <= endDate;
        }) || batchs[0]; // Retorna o primeiro lote caso nenhuma data corresponda
      };

      const [currentBatch, setCurrentBatch] = useState(getCurrentBatch());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBatch(getCurrentBatch());
    }, 1000 * 60 * 60); // Verifica a cada hora

    return () => clearInterval(interval);
  }, []);

    return (
        <div className={`${styles.progress_container} ${className}`}>
            <div className={styles.progress_header}>
                <span>
                {currentBatch.batch} lote até dia {new Date(currentBatch.endedAt).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}
                </span>
                <span>{calculateProgress()}% das vagas preenchidas</span>
            </div>

            <div className={`${styles.progress_bar} progress-bar`}>
                <span className={`${styles.progress} progress`}>
                    <style jsx>{`
                        .progress {
                            width: ${calculateProgress()}%;
                        }
                    `}</style>
                </span>
            </div>
        </div>
    )
}
