import style from '../styles/atoms.module.scss';

export default function Button({text, onClick}: { text: string, onClick?: () => void}) {
    return ( 
            <button 
                className={style.btnMain}
                onClick={onClick}
            >
                {text}
            </button>
    )
}