import { Batch, useBatch } from "@/context/BatchsContext";
import { formatCurrency } from "@/util/currency";
import Image from "next/image";
import { RefObject } from "react";
import Button from "../ui/button";
import styles from "./index.module.scss";

type Props = {
    spot: RefObject<HTMLDivElement>
}

export default function SecureYourSpot({spot}: Props) {

    const { batchs } = useBatch()

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long'
        });
    };

    const isDateInRange = (startedAt: string, endedAt: string) => {
        const now = new Date();
        const startDate = new Date(startedAt);
        const endDate = new Date(endedAt);
        return now >= startDate && now <= endDate;
    };

    const isDateUpcoming = (startedAt: string) => {
        const now = new Date();
        const startDate = new Date(startedAt);
        return now < startDate;
    };

    const cardListItems = [
        "Dia 21/02 das 18h as 22h",
        "Dia 22/02 das 08h as 18h",
        "Adquira o ingresso até o dia 21/02 com desconto de R$649.00 por R$600.00 a vista no cartão ou pix.",
        "Curso Presencial em Belém - Pará.",
        "1 noite de networking.",
        "1 dia inteiro de imersão com coffee break.",
        "Empreendedorismo Jurídico.",
        "Instagram para advogados.",
        "Produção de Vídeos com o Celular.",
        "Vídeos que Vendem sua Advocacia.",
        "Automação e Inteligência Artificial.",
        "Cesupa Av. Alcindo Cacela 980. Belém, Pa"
    ]

    return (
        <section ref={spot} className={styles.content}>
            <div className={`container`}>

                <h2 className="text-center">Garanta já sua vaga</h2>
                
                <ul className={styles.cards_list}>
                    {batchs?.map((item: Batch, index: number) => {
                        const isActive = isDateInRange(item.startedAt, item.endedAt);
                        const isUpcoming = isDateUpcoming(item.startedAt);

                        return (
                            <li 
                                className={`${styles.card} ${!isActive ? styles.card_disabled : ''}`} 
                                key={index}
                            >
                                <div className={styles.card_container}>
                                    <div className={styles.title_container}>
                                        <small>Lote 0{item.batch} {(!isUpcoming && !isActive) && ' - esgotado'}</small>

                                        {isActive ? (
                                            <h3 className={styles.title}>Até dia {formatDate(item.endedAt)}</h3>
                                        ) : (
                                            <>
                                                {isUpcoming ? (
                                                    <h3 className={styles.title}>Inicia em {formatDate(item.startedAt)}</h3>
                                                ) : (
                                                    <h3 className={styles.title}>{formatDate(item.endedAt)}</h3>
                                                    
                                                )}
                                            </>
                                        )}

                                    </div>

                                    <div className={styles.price_container}>
                                        {/* <small className={styles.old_price}>de {formatCurrency(item.oldPrice)}</small> */}
                                        <span className={styles.promotion_price}>
                                            {/*<small>por</small> */}{formatCurrency(item.promotionPrice)}
                                        </span>
                                        {isActive && <span className={styles.installment}>ou 10x {formatCurrency(item.promotionPrice / 10)}</span>}
                                        
                                    </div>

                                </div>
                                {isActive ? (
                                    <ul className={styles.card_list_items}>
                                        {cardListItems.map((item, index) => (
                                            <li key={index}>
                                                <Image
                                                className={styles.icon}
                                                    width={16}
                                                    height={11}
                                                    src="/check-icon.svg"
                                                    alt="Ícone de check"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                                
                                <div className={styles.btn_container}>
                                    {isActive ? (
                                        <Button className={styles.btn} target="_blank" url={item.url}>
                                            {isActive ? 'Comprar com desconto' : 'Promoção encerrada'}
                                        </Button>
                                    ) : (
                                        <>
                                            {isUpcoming ? (
                                                <Button className={styles.btn}>Em breve</Button>
                                            ) : (
                                                <Button className={styles.btn}>Esgotado</Button>
                                            )}
                                        </>
                                    )}
                                </div>

                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    )
}
