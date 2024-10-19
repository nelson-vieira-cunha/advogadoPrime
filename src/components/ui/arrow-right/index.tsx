import Image from 'next/image'

type ArrowRightIcon = {
    className: string
}

export default function ArrowRightIcon({
    className
}: Partial<ArrowRightIcon>) {

    return (
        <Image
            className={className}
            width={24}
            height={24}
            src="/arrow-right-btn.svg"
            alt='ícone de seta apontando para direita'
        />
    )
}
