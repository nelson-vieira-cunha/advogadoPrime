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
    // actualProgress,
    // maxProgress
}: Partial<ProgressBar>) {

  const INITIAL_PROGRESS = 15

    const { batchs } = useBatch()
    const [totalVagas, setTotalVagas] = useState(50);
    const [vagasPreenchidas, setVagasPreenchidas] = useState(0);
    const [progress, setProgress] = useState(INITIAL_PROGRESS);
  
//   const fetchTotalVagas = async () => {
//     try {
//       const response = await fetch('/api/vagas');
//       const data = await response.json();
//       setTotalVagas(data.totalVagas);
//     } catch (error) {
//       console.error('Erro ao buscar total de vagas:', error);
//     }
//   };

  // Calcula o progresso baseado nas vagas preenchidas
  const calculateProgress = (preenchidas: number) => {
    const initialProgress = INITIAL_PROGRESS;
    const maxProgress = 100;

    if (totalVagas > 0) {
        return Math.floor(initialProgress + ((preenchidas / totalVagas) * (maxProgress - initialProgress)));
    }

    return maxProgress;
  };

//   useEffect(() => {
//     fetchTotalVagas(); // Busca total de vagas ao montar o componente
//   }, []);

  useEffect(() => {
    setProgress(calculateProgress(vagasPreenchidas)); // Atualiza o progresso quando vagasPreenchidas ou totalVagas muda
  }, [vagasPreenchidas, totalVagas]);

    const getCurrentBatch = () => {
        const currentDate = new Date();
        
        return batchs.find(batch => {
          const startDate = new Date(batch.startedAt);
          const endDate = new Date(batch.endedAt);
          return currentDate >= startDate && currentDate <= endDate;
        }) || batchs[0];
      };

      const [currentBatch, setCurrentBatch] = useState(getCurrentBatch());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBatch(getCurrentBatch());
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

    return (
        <div className={`${styles.progress_container} ${className}`}>
            <div className={styles.progress_header}>
                <span>
                {currentBatch.batch} lote até dia {new Date(currentBatch.endedAt).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}
                </span>
                <span>{progress}% das vagas preenchidas</span>
            </div>

            <div className={`${styles.progress_bar} progress-bar`}>
                <span className={`${styles.progress} progress`}>
                    <style jsx>{`
                        .progress {
                            width: ${progress}%;
                        }
                    `}</style>
                </span>
            </div>
        </div>
    )
}
