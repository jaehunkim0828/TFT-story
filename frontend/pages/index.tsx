import Link from "next/link";
import Button from "../components/Button";

import style from '../styles/home.module.scss';

function Home() {

    return (
        <div className={style.home}>
            <div className={style.homeLogo}>TFT Story</div>
            <div>
                <Button text={'메인 화면으로 이동'} href={'/main'}/>
            </div>
        </div>
    )
}

export default Home;