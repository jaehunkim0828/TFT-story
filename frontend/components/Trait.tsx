import axios from 'axios';
import { useEffect, useState } from 'react';
import httpImage, { http } from '../server';
import style from '../styles/traitCount.module.scss';

export default function Trait({trait, setBackColor, backColor}: {trait: { name: string, count: number }, setBackColor: any, backColor: any}) {
    const [desc, setDesc] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [color, setColor] = useState<any>({
        backgroundImage: '',
        backgroundColor: '',
        border: ' 1px solid black'
    });
    

    const getTraitInfo = async () => {
        const info = await axios.get(http + `/trait/${trait.name}`);
        setDesc(info.data.count);
        setImage(info.data.image);
    }

    const backgroundNum = () => {
        const range = desc.split(' , ');
        const result = range.map((i: string, id: number) => {
            const { count } = trait;
            if (id === range.length - 1) {
                if (count >= Number(i)) {
                    return id;
                }
            }
            if (count >= Number(i) && count < (Number(range[id + 1]))) {
                return id;
            }
            return -1;
        })
        return result.filter(id => id !== -1)[0]?? -1;
    }

    const traitStyle = (num: number) => {
        const traitRange = desc.split(' , ');

        if (traitRange.length === 1) {
            if (num === 0) {
                setBackColor((prev: any) => {
                    return {
                        ...prev,
                        [trait.name]:'/images/color/gold.svg'
                    }
                });
                return { border: '1px solid black', backgroundColor: '#c1c1c1', backgroundImage: `url('${httpImage('/images/color/gold.svg')}`};
            }
        }
        if (traitRange.length === 3 && trait.name !== '범죄도시') {
            if (num === 0) {
                setBackColor((prev: any) => {
                    return {
                        ...prev,
                        [trait.name]:'/images/color/bronze.svg'
                    }
                });
                return { border: '1px solid black', backgroundColor: '#c1c1c1', backgroundImage: `url('${httpImage('/images/color/bronze.svg')}`};
            }
            if (num === 1) {
                setBackColor((prev: any) => {
                    return {
                        ...prev,
                        [trait.name]:'/images/color/gold.svg'
                    }
                });
                return { border: '1px solid black', backgroundColor: '#c1c1c1', backgroundImage: `url('${httpImage('/images/color/gold.svg')}`};
            }
            if (num === 2) {
                setBackColor((prev: any) => {
                    return {
                        ...prev,
                        [trait.name]:'/images/color/platinum.svg'
                    }
                });
                return { border: '1px solid black', backgroundColor: '#c1c1c1', backgroundImage: `url('${httpImage('/images/color/platinum.svg')}`};
            }
        }
        if (num === 0) {
            setBackColor((prev: any) => {
                return {
                    ...prev,
                    [trait.name]:'/images/color/bronze.svg'
                }
            });
            return { border: '1px solid black', backgroundColor: '#c1c1c1', backgroundImage: `url('${httpImage('/images/color/bronze.svg')}`};
        }
        if (num === 1) {
            setBackColor((prev: any) => {
                return {
                    ...prev,
                    [trait.name]:'/images/color/silver.svg'
                }
            });
            return { border: '1px solid black', backgroundColor: '#c1c1c1', backgroundImage: `url('${httpImage('/images/color/silver.svg')}`};
        }
        if (num === 2) {
            setBackColor((prev: any) => {
                return {
                    ...prev,
                    [trait.name]:'/images/color/gold.svg'
                }
            });
            return { border: '1px solid black', backgroundColor: '#c1c1c1', backgroundImage: `url('${httpImage('/images/color/gold.svg')}`};
        }
        if (num === 3) {
            setBackColor((prev: any) => {
                return {
                    ...prev,
                    [trait.name]:'/images/color/platinum.svg'
                }
            });
            return { border: '1px solid black', backgroundColor: '#c1c1c1', backgroundImage: `url('${httpImage('/images/color/platinum.svg')}`};
        }
        return { border: '1px dashed grey' };
    }

    useEffect(() => {
        getTraitInfo();
    }, [trait])

    useEffect(() => {
        setColor((prev: any) => {
            return {
                ...traitStyle(backgroundNum())
            };
        });
    }, [trait, desc])

    return (
        <div className={style.trait} style={{ backgroundColor: color.backgroundColor, border: color.border}}>
            <div className={style.main}>
                <div>
                    <div className={style.traitback} style={{backgroundImage: color.backgroundImage}}>
                        <img src={http + image} alt='none'/>
                    </div>
                    <div>{trait.name}</div>
                </div>
                <div>{trait.count}</div>
            </div>
            <div className={style.sub}>{desc}</div>
        </div>
    )
}