import { useState } from "react"
import { Modal } from "../components/Modal"

export default function MakeComponent() {
    const [ishover, setIshover] = useState<boolean>(false);

    return (
        <div style={{ margin: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div
                onMouseOver={() => {
                    setIshover(true);
                    console.log(ishover);
                }}
                onMouseLeave={() => {
                    setIshover(false);
                }}
                style={{ position: 'relative'}}
            >
                <div>Test</div>
                {ishover && <Modal name={'마법공학 총검'} com1={'/images/combination/대검.png'} com2={'/images/combination/쓸데없이큰지팡이.png'} desc={'스킬로 입힌 마법 및 고정 피해량의 33%만큼 체력 회복. 체력이 가장 낮은 아군의 체력도 같은 수치만큼 회복.'}/>}
            </div>
        </div>
    )
}