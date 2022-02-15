import { useEffect, useState } from "react"

import style from '../styles/cardInfo.module.scss';

type Augmenteds = { 'lv1': string[], 'lv2': string[], 'lv3': string[], };

export default function CardAugmented({ augmented }: { augmented: string }) {
    const [augmenteds, setAugmenteds] = useState<Augmenteds>({ 'lv1': [], 'lv2': [], 'lv3': []})

    useEffect(() => {
        const sugObj: Augmenteds | any = {};
        augmented.split(' > ').map((level: string, i: number) => {
            sugObj[`lv${i + 1}`] = level.split(' , ');
        })
        setAugmenteds(sugObj);
    }, [augmented])

    return (
        <div>
            <div className={ style.sugmentedInfo }>
                <div style={{ color: '#9b9b9b', width: '4rem'}}>실버</div>
                <div className={ style.sugmenteds }>
                    {
                        augmenteds['lv1']?.map((sug: string, i: number) => {
                            return <div key={i} className={style.sugmented}>{sug}</div>
                        })
                    }
                </div>
            </div>
            <div className={ style.sugmentedInfo }>
                <div style={{ color: '#EEC373', width: '4rem'}}>골드</div>
                <div className={ style.sugmenteds }>
                    {
                        augmenteds['lv2']?.map((sug: string, i: number) => {
                            return <div key={i} className={style.sugmented}>{sug}</div>
                        })
                    }
                </div>
            </div>
            <div className={ style.sugmentedInfo }>
                <div style={{ color: '#35D0BA', width: '4rem'}}>플레티넘</div>
                <div className={ style.sugmenteds }>
                    {
                        augmenteds['lv3']?.map((sug: string, i: number) => {
                            return <div key={i} className={style.sugmented}>{sug}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}