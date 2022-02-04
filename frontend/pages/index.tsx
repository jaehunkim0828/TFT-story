import { useRouter } from "next/router";

import Button from "../components/Button";
import style from '../styles/home.module.scss';

function Home() {
    const router = useRouter();

    return (
        <div className={style.home}>
            <div className={style.homeLogo}>TFT Story</div>
            <div>
                <Button 
                    text={'메인 화면으로 이동'}
                    onClick={() => router.push('/main')}
                />
            </div>
        </div>
    )
}

export default Home;