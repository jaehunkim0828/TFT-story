import Link from "next/link";
import CardList from "../components/CardList";
import { useDispatch, useSelector } from "react-redux";

import style from '../styles/main.module.scss';
import { countUpDeckMake } from '../store/actions/saveDeck';


export default function Main() {
    const dispatch = useDispatch();

    const goDeckMake = () => {
        dispatch(countUpDeckMake());
    }

    return (
        <div className={style.container}>
            <div className={style.mainNav}>
                <div>카드 리스트</div>
                <Link href={'/makeCard'}><a onClick={goDeckMake} className={style.makeCard}>카드 만들기</a></Link>
            </div>
            <hr />
            <CardList />
        </div>
    )
}