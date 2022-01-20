import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import style from '../styles/traitCount.module.scss';
import Trait from './Trait';
import { RootState } from '../store/reducers';
export default function TraitCount() {
    const [traits, setTraits] = useState([{ 'name': '고물상', 'count': 0 }]);

    const { member } = useSelector((state: RootState) => state.numberOfChampReducer);
    const { trait } = useSelector((state: RootState) => state.traitReducer);

    const traitToArray = (trait: { [key in string]: number }) => {
        const keys = Object.keys(trait);
        const values = Object.values(trait);
        return keys.map((name, i) => { 
            return {'name': name, 'count':  values[i]};
        });
    }

    useEffect(() => {
        setTraits(traitToArray(trait));
    }, [member]);

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