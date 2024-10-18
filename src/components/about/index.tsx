import Button from "../ui/button"
import styles from "./index.module.scss"

export default function About() {

    return (
        <section className={styles.about}>
            <div className={`container ${styles.container}`}>

                <div className={styles.content}>
                    <h2>Sobre o Professor</h2>
                    
                    <p>O evento é organizado pelo Professor Renato Saraiva, referência em educação jurídica no Brasil, que agora lidera o Grave Direito para ajudar advogados a conquistarem seu espaço no mundo digital.</p>
                    <p>Garanta já sua vaga e aprenda a dominar a produção de vídeos para transformar sua advocacia!</p>
                    <Button className={styles.btn}>Garanta sua vaga agora</Button>
                </div>

            </div>
        </section>
    )
}
