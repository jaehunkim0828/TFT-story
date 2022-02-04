import Item from "./Item";
import style from '../styles/item.module.scss';


export default function Items({items}: any) {

    return (
        <div className={style.items}>
            {items.map((item: any, i: number) => {
                return(<Item key={i} item={item}/>)
            })}
        </div>
    )
}