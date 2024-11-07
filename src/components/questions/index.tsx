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
                <Button url="https://api.whatsapp.com/send?l=pt_br&amp;phone=558192243052&amp;text=Ol%C3%A1,%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Workshop%20imersivo%20presencial" className={styles.btn}>Enviar mensagem</Button>
        </section>
    )
}
