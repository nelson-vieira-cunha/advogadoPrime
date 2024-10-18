import styles from "./index.module.scss"

export default function SecureYourSpot() {

    const items = [
        {
            title: 'Empreendedorismo Jurídico',
            description: 'Como se destacar na web e redes sociais com o seu conteúdo',
            icon: ''
        },
        {
            title: 'Produção de vídeos com o celular',
            description: 'Técnicas práticas e avançadas para criar vídeos profissionais que conectam, informam e atraem clientes potenciais. Não importa se você é iniciante; vamos te mostrar como criar vídeos impactantes com o que você já tem em mãos.',
            icon: ''
        },
        {
            title: 'Conteúdo que gera resultados',
            description: 'Descubra como produzir vídeos que vendem sua advocacia de forma sutil e efetiva, gerando engajamento e conversão nas redes sociais.',
            icon: ''
        },
        {
            title: 'Instagram para advogados',
            description: 'Estratégias para se destacar no Instagram, aumentando seu alcance e interação com um público que valoriza seus serviços. Aprenda a transformar seguidores em clientes de alto valor.',
            icon: ''
        },
        {
            title: 'Automação e inteligência artificial',
            description: 'Ferramentas e técnicas para automatizar sua produção de conteúdo em vídeo, otimizando seu tempo e mantendo uma presença ativa e relevante nas redes.',
            icon: ''
        },
    ]

    return (
        <section className={styles.content}>
            <div className={`container`}>

                <h2 className="text-center">O que você vai aprender</h2>
                
                <ul className={styles.cards_list}>
                    {items.map((item, index) => (
                        <li className={styles.card} key={index}>
                            <h3 className={styles.card_title}>{item.title}</h3>
                            <p className={styles.card_description}>{item.description}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}
