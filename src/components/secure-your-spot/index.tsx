import { formatCurrency } from "@/util/currency";
import { RefObject } from "react";
import Button from "../ui/button";
import styles from "./index.module.scss";

type Props = {
    spot: RefObject<HTMLDivElement>
}


export default function SecureYourSpot({spot}: Props) {

    const items = [
        {
            batch: 1,
            startedAt: '2024-10-10 00:00:00',
            endedAt: '2024-10-25 00:00:00',
            oldPrice: 600,
            promotionPrice: 600,
            url: 'https://www.cers.com.br/curso/curso-trt-se-analista-judiciario',
        },
        {
            batch: 2,
            startedAt: '2024-10-26 00:00:00',
            endedAt: '2024-11-01 00:00:00',
            oldPrice: 680,
            promotionPrice: 680,
            url: 'https://www.cers.com.br/curso/curso-trt-se-analista-judiciario',
        },
        {
            batch: 3,
            startedAt: '2024-11-01 00:00:00',
            endedAt: '2024-11-05 00:00:00',
            oldPrice: 800,
            promotionPrice: 800,
            url: 'https://www.cers.com.br/curso/curso-trt-se-analista-judiciario',
        },
    ]

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

    return (
        <section ref={spot} className={styles.content}>
            <div className={`container`}>

                <h2 className="text-center">Garanta já sua vaga</h2>
                
                <ul className={styles.cards_list}>
                    {items.map((item, index) => {
                        const isActive = isDateInRange(item.startedAt, item.endedAt);
                        const isUpcoming = isDateUpcoming(item.startedAt);

                        return (
                            <li 
                                className={`${styles.card} ${!isActive ? styles.card_disabled : ''}`} 
                                key={index}
                            >
                                <div className={styles.card_container}>
                                    <div className={styles.title_container}>
                                        <small>Lote 0{item.batch}</small>

                                        {isActive ? (
                                            <h3 className={styles.title}>Até dia {formatDate(item.endedAt)}</h3>
                                        ) : (
                                            <>
                                                {isUpcoming ? (
                                                    <h3 className={styles.title}>Inicia em {formatDate(item.startedAt)}</h3>
                                                ) : (
                                                    <h3 className={styles.title}>Esgotado</h3>
                                                )}
                                            </>
                                        )}

                                    </div>

                                    <div className={styles.price_container}>
                                        <small className={styles.old_price}>de {formatCurrency(item.oldPrice)}</small>
                                        <span className={styles.promotion_price}>
                                            <small>por</small> {formatCurrency(item.promotionPrice)}
                                        </span>
                                        <span className={styles.installment}>em até 12x R$ 75,00</span>
                                    </div>
                                </div>

                                {isActive ? (
                                    <Button target="_blank" url={item.url}>
                                        {isActive ? 'Compre com desconto' : 'Promoção encerrada'}
                                    </Button>
                                ) : (
                                    <>
                                        {isUpcoming ? (
                                            <Button>Em breve</Button>
                                        ) : (
                                            <Button>Esgotado</Button>
                                        )}
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    )
}
