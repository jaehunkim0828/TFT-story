import axios from "axios";
import { useEffect, useState } from "react"
import { useRouter } from "next/router";

import { RootState } from '../store/reducers';

export default function CardInfo() {
    const router = useRouter();

    const initialCardInfo = {
        argumented: '',
        champions: '',
        items: '',
        level3: '',
        level4: '',
        level5: '',
        level6: '',
        level7: '',
        traits: '',
    }

    const initialThumbInfo = {
        name: '',
        trait: '',
        image: '',
        description: '',
    }

    const [cardInfo, setInfo] = useState(initialCardInfo);
    const [thumbInfo, setThumbInfo] = useState(initialThumbInfo);

    const getIdDeckInfo = async () => {
        const cardIds = localStorage.getItem('cardId');
        if (!cardIds) return router.push('/main');
        const { card, thumb } = JSON.parse(cardIds);
        const cardData = await axios.get(`http://localhost:8080/card/${card}`);
        const thumbData = await axios.get(`http://localhost:8080/card/thumb/${thumb}`);
        setInfo(cardData.data[0]);
        setThumbInfo(thumbData.data[0]);
    }

    useEffect(() => {
        getIdDeckInfo();
    }, [])
    
    return (
        <div>
            <div>{thumbInfo.name}</div>
            <div>{cardInfo.traits}</div>
        </div>
    )
}