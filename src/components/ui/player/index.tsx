import Image from 'next/image';
import { useState } from 'react';
import PlayIcon from '../play-circle';
import styles from "./index.module.scss";

type PlayIcon = {
    className: string
    youtubeItem: YouTubeItem
}

type YouTubeItem = {
    id: number,
    title: string | undefined,
    youTubeId: string
}

export default function Player({
    youtubeItem,
}: Partial<PlayIcon>) {

    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <>
            {!isPlaying ? (
                <div 
                    className={styles.card}
                    onClick={() => handlePlay()}
                >
                    <PlayIcon className={styles.play} />
                    <Image
                        className={styles.video_cover}
                        width={384}
                        height={216}
                        src={`http://i.ytimg.com/vi/${youtubeItem?.youTubeId}/maxresdefault.jpg`}
                        alt={youtubeItem?.title || "Video thumbnail"}
                    />
                </div>
            ) : (
                <div className={styles.card_video}>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${youtubeItem?.youTubeId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </>
    )
}
