import style from '../styles/atoms.module.scss';

export default function makeComponent() {
    return (
        <div style={{ margin: '4rem', display: 'flex', justifyContent: 'center'}}>
            <a className={style.btnMain}>메인 화면으로 이동하기</a>
        </div>
    )
}