import Image from 'next/image'

type PlayIcon = {
    className: string
}

export default function PlayIcon({
    className
}: Partial<PlayIcon>) {

    return (
        <Image
            className={className}
            width={56}
            height={56}
            src="/play-circle.svg"
            alt='ícone de player de vídeo'
        />
    )
}
