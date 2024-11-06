'use client'

import ScrollTo from "@/util/scrollTo.util";
import { RefObject, useEffect } from "react";
import Button from "../ui/button";
import Player from "../ui/player";
import styles from "./index.module.scss";
import ProgressBar from "./progressBar";

type Props = {
    spot: RefObject<HTMLDivElement>
}

export default function Intro({
    spot
}: Props) {

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
        // <section className={styles.intro}>
        //     <div className={`container`}>

        //         <div className={styles.video_container}>
        //             <Image
        //                 className={styles.video_img}
        //                 width={556}
        //                 height={402}
        //                 src="/header_landpage.jpg"
        //                 alt="Imagem da equipe reunida."
        //             />

        //             <div 
        //                 className={styles.video}
        //                 onClick={() => {
        //                     setYouTubeId('KC3OLb0ofME')
        //                     setOpen(true)
        //                 }}
        //             >
        //                 <PlayIcon className={styles.play} />
        //                 <Image
        //                     className={styles.cover}
        //                     width={556}
        //                     height={315}
        //                     src="/video-cover-record.jpg"
        //                     alt="Imagem da equipe reunida."
        //                 />
        //             </div>

        //         </div>


        //         <div className={styles.content}>
        //             <div>
        //                 <h1>
        //                     <span>Workshop imersivo presencial:</span> <br />
        //                     Destravando sua Advocacia<br />
        //                     Como se Tornar um Advogado Prime,<br /> Caruaru-PE
        //                 </h1>
        //                 <p className={styles.description}>Participe do evento que vai destravar sua advocacia e acelerar seu sucesso!<br />
        //                 Com o Professor Renato Saraiva e seus convidados, você vai aprender as estratégias<br />
        //                 comprovadas para dominar o mercado jurídico, se posicionar como autoridade nas redes sociais<br />
        //                 e se destacar como um Advogado Prime – respeitado, valorizado e reconhecido.</p>
        //                 <Button className={styles.btn} onClick={() => ScrollTo(spot)}>Garanta sua vaga agora</Button>
        //             </div>

        //             <div className={`${styles.progress_container} progress-container`}>
        //                 <div className={`${styles.progress_content} progress-content`}>
        //                     <ProgressBar
        //                         className={styles.progress_bar}
        //                         actualProgress={52 + 20}
        //                         maxProgress={100}
        //                         batch={1}
        //                     />
        //                 </div>
        //             </div>

        //         </div>

        //     </div>
        // </section>
        <>
            <section className={styles.intro}>
                <div className={`container ${styles.container}`}>

                    <div className={styles.content}>
                        <div className={styles.center}>
                            <h1>
                                <span>Workshop imersivo presencial:</span><br />
                                Destravando sua Advocacia<br />
                                Como se Tornar um Advogado Prime,<br /> Caruaru-PE
                            </h1>
                            <p className={styles.description}>
                            O evento que vai destravar sua advocacia e acelerar seu sucesso no digital!
                            </p>
                            <Button onClick={() => ScrollTo(spot)}>Garanta sua vaga agora</Button>
                        </div>


                        <div className={`${styles.progress_container} progress-container`}>
                            <div className={`${styles.progress_content} progress-content`}>
                                <ProgressBar
                                    className={styles.progress_bar}
                                    actualProgress={52 + 20}
                                    maxProgress={100}
                                    batch={1}
                                />
                            </div>
                        </div>


                    </div>

                </div>
            </section>

            <section>
                <div className={`container`}>

                    <div className={styles.video_container}>

                        <Player youtubeItem={{
                            id: 1,
                            title: 'Grave Direito: Transforme Sua Advocacia e Conquiste o Mundo Digital!',
                            youTubeId: '0h5Cbz180T8',
                            // cover: '/video-cover-record.jpg'
                        }} />

                    </div>
                    </div>
            </section>
        </>



    )
}
