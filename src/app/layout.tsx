import type { Metadata } from "next";

import "@/styles/reset.css";
import "@/styles/styles.scss";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { BatchProvider } from "@/context/BatchsContext";
import { Inter, Rubik } from "next/font/google";

const inter = Inter({ weight: ["300", "400", "500", "700"], subsets: ["latin"] })
const rubik = Rubik({weight: ["300", "400", "500", "700"], subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
    title: "Advogado Prime",
    description: "Participe do evento que vai destravar sua advocacia e acelerar seu sucesso! Com o Professor Renato Saraiva e seus convidados, você vai aprender as estratégias comprovadas para dominar o mercado jurídico, se posicionar como autoridade nas redes sociais e se destacar como um Advogado Prime – respeitado, valorizado e reconhecido."
}

const urlBase = 'https://www.exemplo.com.br';
const siteTitle = 'Advogado Prime';
const description = 'Participe do evento que vai destravar sua advocacia e acelerar seu sucesso! Com o Professor Renato Saraiva e seus convidados, você vai aprender as estratégias comprovadas para dominar o mercado jurídico, se posicionar como autoridade nas redes sociais e se destacar como um Advogado Prime – respeitado, valorizado e reconhecido.';
const headline = 'Workshop Imersivo: Destravando sua Advocacia, Como se Tornar um Advogado Prime';

const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteTitle,
    // logo: {
    //     '@type': 'ImageObject',
    //     name: `${siteTitle} Logo`,
    //     url: `${urlBase}/logo.svg`,
    //     width: 125,
    //     height: 51
    // },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: siteTitle,
    description: description,
    headline: headline,
    sourceOrganization: org,
    url: urlBase,
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': urlBase
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <BatchProvider>
            <html lang="pt-BR">
                <head>
                    <script
                    key="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                    />
                </head>
                <body className={`${rubik.variable} ${inter.className}`}>
                    {children}
                </body>
            </html>
        </BatchProvider>
    )
}
