import ScrollTo from "@/util/scrollTo.util"
import { RefObject } from "react"
import Button from "../ui/button"
import styles from "./index.module.scss"

type Props = {
    spot: RefObject<HTMLDivElement>
}

export default function About({spot}: Props) {

    return (
        <section className={styles.about}>
            <div className={`container ${styles.container}`}>

                <div className={styles.content}>
                    <h2>Sobre os Idealizadores</h2>
                    
                    <p>O evento é organizado pelo Professor Renato Saraiva, referência em educação jurídica no Brasil, e conta com a visão estratégica de Jeff daCruz, especialista em audiovisual e responsável por transformar a maneira como advogados se posicionam no mundo digital. Além disso, diversos grandes nomes do conteúdo jurídico participarão para compartilhar suas melhores estratégias e experiências.</p>
                    <Button className={styles.btn} onClick={() => ScrollTo(spot)}>Garanta sua vaga agora</Button>
                </div>

            </div>
        </section>
    )
}
