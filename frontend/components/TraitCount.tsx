import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/reducers';
import style from '../styles/traitCount.module.scss';
import Trait from './Trait';

type Traits = {
    name: string,
    count: number
}


export default function TraitCount({ deckInfo, setDeckInfo }: any) {
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

    useEffect(() => {
        setTraits(traitToArray(trait));
    }, [member]);

    useEffect(() => {
        insertDectInfo(traits);
    }, [traits]);

    useEffect(() => {
        setTraits(initialTraits);
    }, [count])

    return (
        <div className={style.container}>
            {traits.map((trait, i) => {
                if (trait.count > 0) {
                    return <Trait key={i} trait={trait}/>
                }
            })}
        </div>
    )
}