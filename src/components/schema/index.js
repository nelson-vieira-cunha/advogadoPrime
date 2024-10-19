import Head from 'next/head';

const Schema = ({ title, description, type }) => {
    const urlBase = 'https://www.cers.com.br';
    const siteTitle = 'Workshop Imersivo';

    const org = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteTitle,
        logo: {
            '@type': 'ImageObject',
            // url: `${urlBase}/logo-2021/logo-white-horizontal.svg`,
            width: 125,
            height: 51
        },
        sameAs: [
            // Adicione links para suas redes sociais aqui
        ]
    };

    const schema = {
        '@context': 'https://schema.org',
        '@type': type,
        name: title,
        description: description,
        headline: title,
        sourceOrganization: org,
        url: urlBase,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': urlBase
        }
    };

    return (
        <Head>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
            />
        </Head>
    );
};

export default Schema;
