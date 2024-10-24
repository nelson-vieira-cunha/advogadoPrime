import ScrollTo from "@/util/scrollTo.util"
import Image from "next/image"
import { RefObject } from "react"
import Button from "../ui/button"
import styles from "./index.module.scss"

type Props = {
    spot: RefObject<HTMLDivElement>
}

export default function Record({
    spot,
}: Props) {

    return (
        <section className={styles.record}>
            <div className={`${styles.container}`}>

                <div className={styles.content}>
                    <h2>{`"Juntos com nossos alunos, construindo o futuro da advocacia Prime"`}<br />
                    Aqui formamos profissionais prontos para liderar e se destacar no mercado jurídico!</h2>
                    <Button className={styles.btn} onClick={() => ScrollTo(spot)}>Garanta sua vaga agora</Button>
                </div>

                <div 
                    className={styles.video}
                >
                    <Image 
                        className={styles.cover}
                        width={556}
                        height={315}
                        src="/img-record.jpg"
                        alt="Imagem da equipe reunida."
                    />
                </div>

            </div>
        </section>
    )
}
