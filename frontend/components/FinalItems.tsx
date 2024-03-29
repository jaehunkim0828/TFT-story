import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/reducers";

export default function FinalItems({ deckInfo, setDeckInfo }: any) {
  const { member } = useSelector(
    (state: RootState) => state.numberOfChampReducer
  );

  const getChampions = () => {
    deckInfo.final.map(async (champ: string) => {
      const id = champ.split(" ")[1];
      const champData = await axios.get(`http://3.36.60.81:8080/${id}`);
    });
  };

  useEffect(() => {
    getChampions();
  }, [member]);

  return (
    <div>
      {deckInfo.final.map((champ: string, i: number) => {
        <div key={i}></div>;
      })}
    </div>
  );
}
