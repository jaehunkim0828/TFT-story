import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import DeckInfo from "../components/DeckInfo";
import FinalDeck from "../components/FinalDeck";
import style from "../styles/makeCard.module.scss";
import { countUpDeckMake } from "../store/actions/saveDeck";
import { RootState } from "../store/reducers";
import { countReset } from "../store/actions/traitAct";
import { DeckInfoType } from "../type";
import { http } from "../server";

export default function MakeCard() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.saveDeckReducer);

  const [champions, setChampion] = useState<object[]>([]);
  const [augmented, setaugmented] = useState<object[]>([]);
  const [items, setItems] = useState<object[]>([]);
  const [traits, setTraits] = useState<object[]>([]);
  const [backColor, setBackColor] = useState({});

  const countingMember = (lv: any): number[] => {
    return lv.map((obj: { label: string; value: number }) => {
      if (obj.value === 132 || obj.value === 97 || obj.value === 116) return 2;
      return 1;
    });
  };

  const makeCardVaildate = (deck: DeckInfoType) => {
    if (
      !deck.lv3.length ||
      countingMember(deck.lv3).reduce((a, c) => a + c) < 3
    ) {
      window.alert("레벨 3에서 챔피언 3명을 선택해주세요.");
      return false;
    }
    if (
      !deck.lv4.length ||
      countingMember(deck.lv4).reduce((a, c) => a + c) < 4
    ) {
      window.alert("레벨 4에서 챔피언 4명을 선택해주세요.");
      return false;
    }
    if (
      !deck.lv5.length ||
      countingMember(deck.lv5).reduce((a, c) => a + c) < 5
    ) {
      window.alert("레벨 5에서 챔피언 5명을 선택해주세요.");
      return false;
    }
    if (
      !deck.lv6.length ||
      countingMember(deck.lv6).reduce((a, c) => a + c) < 6
    ) {
      window.alert("레벨 6에서 챔피언 6명을 선택해주세요.");
      return false;
    }
    if (
      !deck.lv7.length ||
      countingMember(deck.lv7).reduce((a, c) => a + c) < 7
    ) {
      window.alert("레벨 7에서 챔피언 7명을 선택해주세요.");
      return false;
    }
    if (Object.keys(deck.final).length === 0) {
      window.alert("최종덱에 챔피언을 넣어주세요");
      return false;
    }

    return true;
  };

  const initialDeckInfo = {
    title: "",
    description: "",
    augmented: {
      level1: [],
      level2: [],
      level3: [],
    },
    main: "",
    lv3: [],
    lv4: [],
    lv5: [],
    lv6: [],
    lv7: [],
    images: "",
    final: {},
    items: {},
    password: "",
    traits: {},
  };

  const [deckInfo, setDeckInfo] = useState(initialDeckInfo);

  const getAll = async () => {
    await axios.get("http://3.36.60.81:8080/champion").then((champs: any) => {
      setChampion(champs.data);
    });
  };
  const getaugmented = async () => {
    const sugmente = await axios.get("http://3.36.60.81:8080/augmented");
    setaugmented(sugmente.data);
  };

  const getItem = async () => {
    const items = await axios.get("http://3.36.60.81:8080/item");
    setItems(items.data);
  };

  const getTrait = async () => {
    const traits = await axios.get(http + "/trait");
    setTraits(traits.data);
  };

  const save = async () => {
    try {
      const password = window.prompt(
        "덱 비밀번호를 입력해주세요. 4자리",
        "1234"
      );
      if (password && password.length === 4) {
        deckInfo.password = password;
        if (deckInfo.title.length > 10) {
          window.alert("덱 이름은 10자 이내로 지어 주세요.");
          return;
        }
        if (makeCardVaildate(deckInfo)) {
          const cardId = await axios.post(
            "http://3.36.60.81:8080/card",
            deckInfo
          );
          await axios.post(`http://3.36.60.81:8080/card/trait/${cardId.data}`, {
            backColor: backColor,
          });
          dispatch(countUpDeckMake());
          router.push("/main");
        }
        return;
      }
      return;
    } catch (error: any) {
      window.alert(error);
    }
  };

  useEffect(() => {
    getAll();
    getaugmented();
    getItem();
    getTrait();
  }, []);

  useEffect(() => {
    setDeckInfo(initialDeckInfo);
    dispatch(countReset());
  }, [count]);

  return (
    <div className={style.container}>
      <DeckInfo
        champions={champions}
        augmented={augmented}
        deckInfo={deckInfo}
        setDeckInfo={setDeckInfo}
      />
      <FinalDeck
        backColor={backColor}
        setBackColor={setBackColor}
        champions={champions}
        deckInfo={deckInfo}
        setDeckInfo={setDeckInfo}
        items={items}
        traits={traits}
      />
      <Button text={"저장하기"} onClick={save} />
    </div>
  );
}
