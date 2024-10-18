'use client'

import { useEffect } from "react";
import Button from "../ui/button";
import styles from "./index.module.scss";
import ProgressBar from "./progressBar";

export default function Intro() {

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

            const sections = document.querySelectorAll('section')
            const navLi = document.querySelectorAll('.nav-bar ul li')

            window.addEventListener('scroll', () => {
                let current = ''
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop
                    if (window.pageYOffset >= sectionTop - 290) {
                        current = `${section.getAttribute('id')}`
                    }
                })

                navLi.forEach((li) => {
                    li.classList.remove('active')
                    li.classList.remove('theme-color')
                    if (li.classList.contains(current)) {
                        li.classList.add('active')
                        li.classList.add('theme-color')
                    }
                })

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
                    <Button>Garanta sua vaga agora</Button>
                </div>

                <div className="progress-container">
                    <div className={`${styles.progress_container} progress-content`}>
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
