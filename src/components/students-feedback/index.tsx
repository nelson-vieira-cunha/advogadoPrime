import Image from "next/image";
import styles from "./index.module.scss";

export default function StudentsFeedback() {
    
    const feedbacks = [
        {
            alt: 'Reny Oliveira como elevei meus Conhecimentos e Estratégias Digitais na Imersão Grave Direito',
            url: '/feedback-1.jpg'
        },
        {
            alt: 'Minha Experiência Transformadora na Imersão Grave Direito Advogado Paulo Augusto',
            url: '/feedback-2.jpg'
        },
        {
            alt: 'A Importância da Produção de Conteúdo para o Advogado Moderno segundo Advogado Fábio Schnorr',
            url: '/feedback-3.jpg'
        },
        {
            alt: 'Advogado Fábio Raimundo de Assis, tem sua Produção de Conteúdo Transformada na Imersão Grave Direito',
            url: '/feedback-4.jpg'
        },
    ]

    return (
        <section className={styles.content}>
            <div className={`container`}>
                <div className={styles.feedback_list}>
                    {feedbacks.map((item, index) => (
                        <div className={styles.feedback_item} key={index}>
                            <Image 
                                width={590}
                                height={248}
                                src={item.url}
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
