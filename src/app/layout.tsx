import type { Metadata } from "next";

import "@/styles/reset.css";
import "@/styles/styles.scss";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Inter } from "next/font/google";
const inter = Inter({ weight: ["300", "400", "500", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Workshop Imersivo",
    description: "Um evento premium e transformador, organizado pelo renomado Professor Renato Saraiva, que te ensinará a produzir conteúdo em vídeo para atrair uma audiência qualificada e construir autoridade no mercado jurídico."
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${inter.className}`}>
                {children}
            </body>
        </html>
    )
}
