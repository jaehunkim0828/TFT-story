import Link from 'next/link';
import { Url } from 'url';
import style from '../styles/atoms.module.scss';

export default function Button({text, href}: { text: string, href: string }) {
    return (
        <Link href={href?? '/'}>
            <a className={style.btnMain}>{text}</a>
        </Link>
    )
}