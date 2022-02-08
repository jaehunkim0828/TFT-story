import axios from "axios";
import { useEffect, useState } from "react"

import { http } from '../server';

export default function SemiTraits({ traits }: { traits: string }) {
    const [traitsData, setTraits] = useState<any[]>([]);

    useEffect(() => {
        traits.split(' > ').map( async(trait: string) => {
            const traitArr = trait.split(' ');
            const image = await axios.get(http + `/trait/${traitArr[0]}`);
            console.log(image.data.id);
        } )
    }, [])
    return (
        <div></div>
    )
}