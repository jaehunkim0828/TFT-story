import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import style from '../styles/traitCount.module.scss';
import Trait from './Trait';
import { RootState } from '../store/reducers';

type Traits = {
    name: string,
    count: number
}


export default function TraitCount({ deckInfo, setDeckInfo }: any) {
    const initialTraits = [{ 'name': '고물상', 'count': 0 }];

    const [traits, setTraits] = useState(initialTraits);

    const { member } = useSelector((state: RootState) => state.numberOfChampReducer);
    const { trait } = useSelector((state: RootState) => state.traitReducer);

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
        console.log(traits);
    }, [member]);

    useEffect(() => {
        insertDectInfo(traits);
        console.log('test');
    }, [traits]);

    // useEffect(() => {
    //     setTraits(initialTraits);
    // }, [deckInfo])

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