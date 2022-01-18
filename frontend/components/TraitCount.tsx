import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import style from '../styles/traitCount.module.scss';
import Trait from './Trait';
import { RootState } from '../store/reducers';
export default function TraitCount() {
    const [traits, setTraits] = useState([{ count: 0, name: '고물상' }]);

    const { trait } = useSelector((state: RootState) => state.traitReducer);

    useEffect(() => {
        console.log('test');
    }, [])

    return (
        <div className={style.container}>
            {traits.map(trait => {
                if (trait.count > 0) {
                    return <Trait trait={trait}/>
                }
            })}
        </div>
    )
}