import { useEffect, useState } from "react"

import style from '../styles/cardInfo.module.scss';

export default function CardAugmented({ augmented }: { augmented: string }) {
    const [augmenteds, setAugmenteds] = useState<any>({ 'lv1': [], 'lv2': [], 'lv3': []})

    useEffect(() => {
        const sugObj: any = {};
        augmented.split(' > ').map((level: string, i: number) => {
            sugObj[`lv${i + 1}`] = level.split(' , ');
        })
        setAugmenteds(sugObj);
        console.log(augmenteds);
    }, [augmented])

    return (
        <div>
            <div>증간체 추천</div>
            <div className={ style.sugmentedInfo }>
                <div>실버 증강체: </div>
                <div className={ style.sugmenteds }>
                    {
                        augmenteds['lv1']?.map((sug: string, i: number) => {
                            console.log(sug);
                            return <div key={i}>{sug}</div>
                        })
                    }
                </div>
            </div>
            <div className={ style.sugmentedInfo }>
                <div>골드 증강체: </div>
                <div className={ style.sugmenteds }>
                    {
                        augmenteds['lv2']?.map((sug: string, i: number) => {
                            console.log(sug);
                            return <div key={i}>{sug}</div>
                        })
                    }
                </div>
            </div>
            <div className={ style.sugmentedInfo }>
                <div>플레티넘 증강체: </div>
                <div className={ style.sugmenteds }>
                    {
                        augmenteds['lv3']?.map((sug: string, i: number) => {
                            console.log(sug);
                            return <div key={i}>{sug}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}