import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import SemiChamps from "../components/SemiChamps";
import CardAugmented from "../components/CardAugmented";
import SemiTraits from "../components/SemiTraits";
import style from "../styles/cardInfo.module.scss";
import DropDown from "../components/DropDown";
import httpImage, { http } from "../server";
import Table from "../components/Table";

export default function CardInfo() {
  const router = useRouter();

  const initialCardInfo = {
    augmented: "",
    champions: "",
    items: "",
    level3: "",
    level4: "",
    level5: "",
    level6: "",
    level7: "",
    traits: "",
  };

  const initialThumbInfo = {
    name: "",
    trait: "",
    image: "",
    description: "",
  };

  const [cardInfo, setInfo] = useState(initialCardInfo);
  const [thumbInfo, setThumbInfo] = useState(initialThumbInfo);
  const [champions, setChampions] = useState<object[]>([]);
  const [traitBack, setTraitBack] = useState<any[]>([]);

  const getIdDeckInfo = async () => {
    const data: any[] = [];
    const cardIds = localStorage.getItem("cardId");
    if (!cardIds) return router.push("/main");
    const { card, thumb } = JSON.parse(cardIds);
    const championsData = await axios.get(`https://3.34.197.199:8080/champion`);
    const cardData = await axios.get(`https://3.34.197.199:8080/card/${card}`);
    const thumbData = await axios.get(
      `https://3.34.197.199:8080/card/thumb/${thumb}`
    );
    const backColor = await axios.get(
      `https://3.34.197.199:8080/card/trait/${card}`
    );
    setTraitBack(backColor.data);
    setChampions(championsData.data);
    setInfo(cardData.data[0]);
    setThumbInfo(thumbData.data[0]);
  };

  useEffect(() => {
    getIdDeckInfo();
  }, []);

  return (
    <div className={style.container}>
      <div
        className={style.backgroundImg}
        style={{ backgroundImage: `url(${httpImage(thumbInfo.image)})` }}
      />
      <div className={style.main}>
        <div className={style.name}>{thumbInfo.name}</div>
        <DropDown text={"소개"}>
          <div>{thumbInfo.description}</div>
        </DropDown>
        <DropDown text={"증강체 추천"}>
          <CardAugmented augmented={cardInfo.augmented} />
        </DropDown>
        <DropDown text={"빌드"}>
          <SemiChamps
            champions={champions}
            level={cardInfo.level3}
            name={"레벨 3"}
          />
          <SemiChamps
            champions={champions}
            level={cardInfo.level4}
            name={"레벨 4"}
          />
          <SemiChamps
            champions={champions}
            level={cardInfo.level5}
            name={"레벨 5"}
          />
          <SemiChamps
            champions={champions}
            level={cardInfo.level6}
            name={"레벨 6"}
          />
          <SemiChamps
            champions={champions}
            level={cardInfo.level7}
            name={"레벨 7"}
          />
        </DropDown>
        <SemiTraits traits={cardInfo.traits} traitBack={traitBack}/>
        <Table final={cardInfo.champions} items={cardInfo.items} />
      </div>
    </div>
  );
}
