import Link from "next/link"

import style from '../styles/navBar.module.scss';

export default function NavBar() {
    return (
        <div className={style.nav}>
            <div className={style.logo}>
                <Link href='/'><a className={style.mainLogo}>TFT Story</a></Link>
                <span className={style.subLogo}>원하는 덱을 만들어보세요.</span>
            </div>
        </div>
    )
}