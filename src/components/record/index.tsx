import Button from "../ui/button"
import styles from "./index.module.scss"

export default function Record() {

    return (
        <section className={styles.record}>
            <div className={`${styles.container}`}>

                <div className={styles.content}>
                    <h2>Grave Direito: <br />Transforme Sua Advocacia <br />e Conquiste o Mundo Digital!</h2>
                    <Button className={styles.btn}>Garanta sua vaga agora</Button>
                </div>

            </div>
        </section>
    )
}
