'use client'

// CSS
import styles from './index.module.scss'

/*
    progressType    : [ interval, percent ]
    headerProgress  : boolean para mostrar ou não a barra de progresso
    headerTitle     : Título que deve aparecer na barra de progresso
    actualProgress  : valor atual do progresso
    maxProgress     : valor total do progresso
*/
type ProgressBar = {
    className?: string
    actualProgress?: number
    maxProgress?: number
    batch?: number | undefined
}

export default function ProgressBar({
    className,
    batch,
    actualProgress,
    maxProgress
}: Partial<ProgressBar>) {

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

    const getDate = (batch: number | undefined) => {
        switch (batch) {
        case 1:
            return '25 de outubro'
        case 2:
            return '26 de outubro'
        case 3:
            return '01 de novembro'
        default:
            break
        }
    }

    return (
        <div className={`${styles.progress_container} ${className}`}>
            <div className={styles.progress_header}>
                <span>
                    {batch} lote até dia {getDate(batch)}
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
