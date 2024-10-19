'use client'

import ScrollTo from "@/util/scrollTo.util";
import { RefObject, useEffect } from "react";
import Button from "../ui/button";
import styles from "./index.module.scss";
import ProgressBar from "./progressBar";

type Props = {
    spot: RefObject<HTMLDivElement>
}

export default function Intro({spot}: Props) {

    useEffect(() => {
        setTimeout(() => {
            const fixedNavBar = document.querySelector('.progress-container') as HTMLElement | null
            const contentNav = document.querySelector('.progress-content')

            document.addEventListener('scroll', () => {
                const scrolled = document?.scrollingElement?.scrollTop
                if (scrolled && fixedNavBar) {
                    if (scrolled > fixedNavBar?.offsetTop) {
                        contentNav?.classList.add(styles['fixed'])
                    } else {
                        contentNav?.classList.remove(styles['fixed'])
                    }
                }
            })
        }, 1000)

    }, [])

    return (
        <section className={styles.intro}>
            <div className={`container`}>
            
            <div className={styles.content}>
                <div>
                    <h1>
                        Workshop Imersivo: <br />
                        Destravando sua Advocacia, <br />
                        Como se Tornar um Advogado Prime
                    </h1>
                    <p className={styles.description}>Um evento premium e transformador, organizado pelo renomado Professor Renato Saraiva, que te ensinará a produzir conteúdo em vídeo para atrair uma audiência qualificada e construir autoridade no mercado jurídico.</p>
                    <Button onClick={() => ScrollTo(spot)}>Garanta sua vaga agora</Button>
                </div>

                <div className={`${styles.progress_container} progress-container`}>
                    <div className={`${styles.progress_content} progress-content`}>
                        <ProgressBar
                            className={styles.progress_bar}
                            actualProgress={20}
                            maxProgress={100}
                            batch={1}
                        />
                    </div>
                </div>

            </div>

            </div>
        </section>
    )
}
