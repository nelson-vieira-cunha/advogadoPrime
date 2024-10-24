import Player from "../ui/player";
import styles from "./index.module.scss";

export default function StudentsOpinion() {
    
    const students = [
        {
            id: 1,
            title: 'Reny Oliveira como elevei meus Conhecimentos e Estratégias Digitais na Imersão Grave Direito',
            youTubeId: 'vgQVFrJkFM4'
        },
        {
            id: 2,
            title: 'Minha Experiência Transformadora na Imersão Grave Direito Advogado Paulo Augusto',
            youTubeId: 'I0htLfkoAdQ'
        },
        {
            id: 3,
            title: 'A Importância da Produção de Conteúdo para o Advogado Moderno segundo Advogado Fábio Schnorr',
            youTubeId: 'QeNqEkA53T0'
        },
        {
            id: 4,
            title: 'Advogado Fábio Raimundo de Assis, tem sua Produção de Conteúdo Transformada na Imersão Grave Direito',
            youTubeId: 'Rq-DrAOCgt8'
        },
        {
            id: 5,
            title: 'Transformação na Imersão Grave Direito: Do Zero nas Redes ao Sucesso no Instagram.',
            youTubeId: 'tfnBK5ExFz4'
        }
    ]

    return (
        <section className={styles.content}>
            <div className={`container`}>
                <h2 className="text-center">Veja a opinião dos alunos</h2>

                {students.map((item, index) => (
                    <div key={index}>
                        <Player youtubeItem={item} />
                    </div>
                    
                ))}

            </div>
        </section>
    )
}
