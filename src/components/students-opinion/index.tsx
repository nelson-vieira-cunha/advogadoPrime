import Image from "next/image";
import Slider from 'react-slick';
import PlayIcon from "../ui/play-circle";
import styles from "./index.module.scss";

type CustomArrowProps = {
    key?: string;
    "data-role"?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler;
    currentSlide?: number;
    slideCount?: number;
  }

type Props = {
    setYouTubeId: (id: string) => void
    setOpen: (value: boolean) => void
}

export default function StudentsOpinion({
    setYouTubeId,
    setOpen
}: Props) {

    
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
    
    const NextArrow = (props: CustomArrowProps) => {
        const { onClick } = props;
        return (
            <div
                className={`${styles.btn} ${styles.btn_next}`}
                onClick={onClick}
            >
                <Image width={32} height={32} src="/arrow-right.svg" alt="" />
            </div>
        );
      };
      
      const PrevArrow = (props: CustomArrowProps) => {
        const { onClick } = props;
        return (
            <div
                className={`${styles.btn} ${styles.btn_prev}`}
                onClick={onClick}
            >
                <Image width={32} height={32} src="/arrow-left.svg" alt="" />
            </div>
        );
      };
      
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: false,
            },
            },
            {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            },
            {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                autoplay: true
            },
            },
        ],
    };

    return (
        <section className={styles.content}>
            <div className={`container`}>

                <h2 className="text-center">Veja a opinião dos alunos</h2>

                <Slider {...settings}>
                    {students.map((item, index) => (
                        <div key={index}>
                            <div 
                                className={styles.card}
                                onClick={() => {
                                    setYouTubeId(item.youTubeId)
                                    setOpen(true)
                                }}
                            >
                                <PlayIcon className={styles.play} />
                                <Image
                                    className={styles.video_cover}
                                    width={384}
                                    height={216}
                                    src={`http://i.ytimg.com/vi/${item.youTubeId}/maxresdefault.jpg`}
                                    alt={item.title}
                                />
                            </div>
                        </div>  
                    ))}
                </Slider>

            </div>
        </section>
    )
}
