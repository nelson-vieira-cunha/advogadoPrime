import Button from "../ui/button";
import styles from "./index.module.scss";

export default function Questions() {

    return (
        <section className={`${styles.content} container`}>
                <h2 className={styles.title}>Contato para mais informações</h2>
                <p>
                    Consulte sobre valores especiais para <br />
                    casais, duplas e grupos.
                </p>

                <h3>Ficou com alguma dúvida?</h3>
                <p>Envie uma mensagem para nós no WhatsApp</p>
                <Button url="#" className={styles.btn}>Enviar mensagem</Button>
        </section>
    )
}
