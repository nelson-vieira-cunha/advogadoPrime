import ScrollTo from "@/util/scrollTo.util"
import Image from "next/image"
import { RefObject } from "react"
import Button from "../ui/button"
import PlayIcon from "../ui/play-circle"
import styles from "./index.module.scss"

type Props = {
    setYouTubeId: (id: string) => void
    setOpen: (value: boolean) => void
    spot: RefObject<HTMLDivElement>
}

export default function Record({
    spot,
    setYouTubeId,
    setOpen
}: Props) {

    return (
        <section className={styles.record}>
            <div className={`${styles.container}`}>

                <div className={styles.content}>
                    <h2>Grave Direito: <br />Transforme Sua Advocacia <br />e Conquiste o Mundo Digital!</h2>
                    <Button className={styles.btn} onClick={() => ScrollTo(spot)}>Garanta sua vaga agora</Button>
                </div>

                <div 
                    className={styles.video}
                    onClick={() => {
                        setYouTubeId('KC3OLb0ofME')
                        setOpen(true)
                    }}
                >
                    <PlayIcon className={styles.play} />
                    <Image 
                        className={styles.cover}
                        width={556}
                        height={315}
                        src="/video-cover-record.jpg"
                        alt="Vídeo explicativo sobre a gravação de conteúdo digital"
                    />
                </div>

            </div>
        </section>
    )
}
