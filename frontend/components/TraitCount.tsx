import { useState } from 'react';
import style from '../styles/traitCount.module.scss';
import { jsonTraits } from '../traitsData';
import Trait from './Trait';

export default function TraitCount() {
    const [traits, setTraits] = useState(jsonTraits);

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