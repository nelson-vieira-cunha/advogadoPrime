import Button from "../ui/button";
import styles from "./index.module.scss";

export default function Questions() {

    return (
        <section className={`${styles.content} container`}>
                <h2>
                    Consulte sobre valores especiais para <br />
                    casais, duplas e grupos.
                </h2>

                <h2 className={styles.title}>Ficou com alguma dúvida?</h2>
                <p>Envie uma mensagem para nós no WhatsApp</p>
                <Button url="#" className={styles.btn}>Enviar mensagem</Button>
        </section>
    )
}
