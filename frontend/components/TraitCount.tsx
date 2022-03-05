import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/reducers';
import style from '../styles/traitCount.module.scss';
import Trait from './Trait';

type Traits = {
    name: string,
    count: number
}


export default function TraitCount({ setBackColor, backColor, deckInfo, setDeckInfo }: any) {
    const initialTraits = [{ 'name': '고물상', 'count': 0 }];

    const [traits, setTraits] = useState(initialTraits);

    const { member } = useSelector((state: RootState) => state.numberOfChampReducer);
    const { trait } = useSelector((state: RootState) => state.traitReducer);
    const { count } = useSelector((state: RootState) => state.saveDeckReducer);
    const traitToArray = (trait: { [key in string]: number }) => {
    
        const keys = Object.keys(trait);
        const values = Object.values(trait);
        return keys.map((name, i) => { 
            return {'name': name, 'count':  values[i]};
        }).sort((a: { count: number }, b: { count: number }) => {
            if (a.count > b.count) {
                return -1;
              }
              if (a.count < b.count) {
                return 1;
              }
              return 0;
        });
    }

    const insertDectInfo = (tr: Traits[]) => {
        const result: { [key in string]: number } = {};
        tr.filter(({count, name}: Traits) => {
            if (count > 0) result[name] = count;
        })
        setDeckInfo({
            ...deckInfo,
            traits: result
        })
    }

    //finaldeck에 추가할때마다 변함
    useEffect(() => {
        setTraits(traitToArray(trait));
    }, [member]);

    useEffect(() => {
        insertDectInfo(traits);
        const traitList = traits.map((trait) => {
            if (trait.count === 1) return trait.name;
            return;
        }).filter((name: string | undefined) => name);
        setBackColor((prev: any) => {
            const obj: { [key in string]: string } = {};
            traitList.map((trait: string | undefined) => {
                obj[trait?? 'none'] = '/images/color/dark.svg';
            });
            return {
                ...prev,
                ...obj
            };
        });
    }, [traits]);

    //나갔다 들어올때마다 초기화
    useEffect(() => {
        setTraits(initialTraits);
    }, [count])

    return (
        <div className={style.container}>
            {traits.map((trait, i) => {
                if (trait.count > 0) {
                    return <Trait key={i} trait={trait} setBackColor={setBackColor} backColor={backColor}/>
                }
            })}
        </div>
    )
}