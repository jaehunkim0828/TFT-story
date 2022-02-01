import { useState } from 'react';
import Select, { components } from 'react-select';
import { multiValueAsValue } from 'react-select/dist/declarations/src/utils';

import style from '../styles/makeCard.module.scss';

const Menu = (props: any) => {

    const optionLength = props.getValue().length || 0;
    return (
        <components.Menu {...props}>
            {optionLength < 4 ? (
                props.children
            ) : (
            <div>최대 {4}개 까지입니다.</div>
      )}

        </components.Menu>
    )
}

export default function SemiDeck({champions, setDeckInfo, deckInfo}: any) {
    const [isover, setIsover] = useState({
        lv3: false,
        lv4: false,
        lv5: false,
        lv6: false,
        lv7: false,
    });

    return (
        <div className={style.semideck}>
            <Select 
                closeMenuOnSelect={false}
                isMulti
                options={isover.lv3 ? [] : champions}
                onChange={(e) => {
                    if (e.length > 2) {
                        setIsover({
                            ...isover,
                            lv3: true
                        })
                        return;
                    }
                    setIsover({
                        ...isover,
                        lv3: false
                    })
                    setDeckInfo({
                        ...deckInfo,
                        lv3: e
                    })
                }}
                className={style.seleck}
                placeholder='lv3 챔피언 추천'
            />
            <Select 
                // components={{ Menu }}
                closeMenuOnSelect={false}
                isMulti
                options={isover.lv4 ? [] : champions}
                onChange={(e) => {
                    if (e.length > 3) {
                        setIsover({
                            ...isover,
                            lv4: true
                        })
                        return;
                    }
                    setIsover({
                        ...isover,
                        lv4: false
                    })
                    setDeckInfo({
                        ...deckInfo,
                        lv4: e
                    })
                }}
                className={style.seleck}
                placeholder='lv4 챔피언 추천'
            />
            <Select 
                closeMenuOnSelect={false}
                isMulti
                options={isover.lv5 ? [] : champions}
                onChange={(e) => {
                    if (e.length > 4) {
                        setIsover({
                            ...isover,
                            lv5: true
                        })
                        return;
                    }
                    setIsover({
                        ...isover,
                        lv5: false
                    })
                    setDeckInfo({
                        ...deckInfo,
                        lv5: e
                    })
                }}
                className={style.seleck}
                placeholder='lv5 챔피언 추천'
            />
            <Select 
                closeMenuOnSelect={false}
                isMulti
                options={isover.lv6 ? [] : champions}
                onChange={(e) => {
                    if (e.length > 5) {
                        setIsover({
                            ...isover,
                            lv6: true
                        })
                        return;
                    }
                    setIsover({
                        ...isover,
                        lv6: false
                    })
                    setDeckInfo({
                        ...deckInfo,
                        lv6: e
                    })
                }}
                className={style.seleck}
                placeholder='lv6 챔피언 추천'
            />
            <Select 
                closeMenuOnSelect={false}
                isMulti
                options={isover.lv7 ? [] : champions}
                onChange={(e) => {
                    if (e.length > 6) {
                        setIsover({
                            ...isover,
                            lv7: true
                        })
                        return;
                    }
                    setIsover({
                        ...isover,
                        lv7: false
                    })
                    setDeckInfo({
                        ...deckInfo,
                        lv7: e
                    })
                }}
                className={style.seleck}
                placeholder='lv7 챔피언 추천'
            />
        </div>
    )
}