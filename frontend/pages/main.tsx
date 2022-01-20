import Link from "next/link";
import CardList from "../components/CardList";

import style from '../styles/main.module.scss';

export default function Main() {
    return (
        // <Link href={'/makeCard'} ><a>덱 만들기</a></Link>
        <div className={style.container}>
            <div className={style.mainNav}>
                <div>카드 리스트</div>
                <Link href={'/makeCard'}><a className={style.makeCard}>카드 만들기</a></Link>
            </div>
            <hr />
            <CardList />
        </div>
    )
}