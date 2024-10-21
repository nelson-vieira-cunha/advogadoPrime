import styles from "./index.module.scss";

export default function StudentsOpinion() {

    
    const students = [
        {
            id: 1,
            title: 'Reny Oliveira como elevei meus Conhecimentos e Estratégias Digitais na Imersão Grave Direito',
            url: 'https://www.youtube.com/embed/vgQVFrJkFM4?si=_RiYemWHj4UlRoQG'
        },
        {
            id: 2,
            title: 'Minha Experiência Transformadora na Imersão Grave Direito Advogado Paulo Augusto',
            url: 'https://www.youtube.com/embed/I0htLfkoAdQ?si=k67RiFOSSK8zpCr0'
        },
        {
            id: 3,
            title: 'A Importância da Produção de Conteúdo para o Advogado Moderno segundo Advogado Fábio Schnorr',
            url: 'https://www.youtube.com/embed/QeNqEkA53T0?si=ENoi7U7agpryQuta'
        },
        {
            id: 4,
            title: 'Advogado Fábio Raimundo de Assis, tem sua Produção de Conteúdo Transformada na Imersão Grave Direito',
            url: 'https://www.youtube.com/embed/Rq-DrAOCgt8?si=9HYLl5heffk8uA9k'
        },
        {
            id: 5,
            title: 'Transformação na Imersão Grave Direito: Do Zero nas Redes ao Sucesso no Instagram.',
            url: 'https://www.youtube.com/embed/tfnBK5ExFz4?si=ATe0oRZI_n3fgxMy'
        }
    ]

    return (
        <section className={styles.content}>
            <div className={`container`}>

                <h2 className="text-center">Veja a opinião dos alunos</h2>

                {students.map((item, index) => (
                    <div 
                        key={index}
                        className={styles.video}
                    >
                        <iframe 
                            width="560" 
                            height="315" 
                            src={item.url}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        />
                    </div> 
                ))}

            </div>
        </section>
    )
}
