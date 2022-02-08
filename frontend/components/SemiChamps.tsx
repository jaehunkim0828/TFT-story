import { useEffect, useState } from "react"

import style from '../styles/cardInfo.module.scss';
import httpImage from '../server';

export default function SemiChamps({champions, level, name}: { champions: any, level: string, name: string }) {
    const [currentImages, setImages] = useState<string[]>([]);

    useEffect(() => {
        const champsData = level.split(' ').map((id) => {
            return champions.filter((champ: any) => champ.id.toString() === id)
        })
        const images = champsData.map((champ: any) => {
            if (champ[0]) return champ[0]['images'];
        });

        setImages(images);

    }, [champions, level])
    return (
        <div className={style.levelContainer}>
            <div>{name}</div>
            <div>
                {
                    currentImages.map((image: string, i : number) => {
                        // eslint-disable-next-line @next/next/no-img-element
                        return <img className={style.levelImage} key={i} src={httpImage(image)} alt="image"/>
                    })
                }
            </div>
        </div>
    )
}