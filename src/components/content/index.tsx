import styles from "./index.module.scss"

export default function Content() {

    const items = [
        {
            title: '✅ Empreendedorismo Jurídico',
            description: 'Aprenda a se destacar na web e nas redes sociais, posicionando sua advocacia de forma estratégica.',
            icon: '/bar-chart.svg',
            altIcon: 'ícone de gráfico em barra'
        },
        {
            title: '✅ Instagram para Advogados',
            description: 'Domine as estratégias para aumentar seu alcance e transformar seguidores em clientes de alto valor.',
            icon: '/smartphone.svg',
            altIcon: 'ícone de smartphone'
        },
        {
            title: '✅ Conteúdo que gera resultados',
            description: 'Descubra como criar conteúdos que atraem, engajam e convertem seu público em potenciais clientes.',
            icon: '/youtube.svg',
            altIcon: 'ícone do player do youtube'
        },
        {
            title: '✅ Produção de Vídeos com o Celular',
            description: 'Técnicas simples e práticas para gravar vídeos profissionais com o que você já tem em mãos.',
            icon: '/instagram.svg',
            altIcon: 'ícone do instagram'
        },
        {
            title: '✅ Vídeos que Vendem sua Advocacia',
            description: 'Aprenda a criar vídeos que geram autoridade e vendem seus serviços de forma sutil e eficaz.',
            icon: '/zap.svg',
            altIcon: 'ícone de raio'
        },
        {
            title: '✅ Automação e Inteligência Artificial',
            description: 'Use ferramentas para automatizar sua produção de conteúdo e ganhar mais tempo no seu dia a dia.',
            icon: '/zap.svg',
            altIcon: 'ícone de raio'
        },
    ]

    return (
        <section className={styles.content}>
            <div className={`container`}>

                <h2 className="text-center">O que você vai aprender</h2>
                
                <ul className={styles.cards_list}>
                    {items.map((item, index) => (
                        <li className={styles.card} key={index}>
                            {/* <Image width={24} height={24} src={item.icon} alt={item.altIcon} /> */}
                            <h3 className={styles.card_title}>{item.title}</h3>
                            <p className={styles.card_description}>{item.description}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}
