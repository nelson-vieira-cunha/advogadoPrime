import { useBatch } from '@/context/BatchsContext'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'

type ProgressBar = {
    className?: string
}

export default function ProgressBar({ className }: Partial<ProgressBar>) {
    const INITIAL_PROGRESS = 15;
    const FINAL_PROGRESS = 100;
    const START_DATE = new Date('2024-11-01');
    const END_DATE = new Date('2024-12-30');

    const { batchs } = useBatch();
    const [progress, setProgress] = useState(INITIAL_PROGRESS);

    // Calcula o número total de dias entre as datas de início e fim
    const totalDays = Math.ceil((END_DATE.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24));
    const dailyIncrement = (FINAL_PROGRESS - INITIAL_PROGRESS) / totalDays;

    useEffect(() => {
        const today = new Date();
        if (today >= START_DATE && today <= END_DATE) {
            const daysElapsed = Math.floor((today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24));
            setProgress(INITIAL_PROGRESS + dailyIncrement * daysElapsed);
        } else if (today > END_DATE) {
            setProgress(FINAL_PROGRESS);
        }
    }, [dailyIncrement]);

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
                <span>{Math.min(Math.floor(progress), FINAL_PROGRESS)}% das vagas preenchidas</span>
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
    );
}
