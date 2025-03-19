"use client";
import React, { useState, useEffect } from "react";
import styles from "./Calculator.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "../Slider/Slider";
import DropDown from "../DropDown/DropDown";

const Calculator = () => {
  const [step, setStep] = useState(0);
  const [type, setType] = useState("Житлова");
  const [wals, setWals] = useState("Цегла");
  const [rate, setRate] = useState(0);
  const [foundation, setFoundation] = useState("Стрічка");
  const [roofing, setRoofing] = useState("Скатна");
  const [facade, setFacade] = useState("Пінопласт");
  const [value, setValue] = useState(0);
  const [buildingWidth, setBuildingWidth] = useState(1);
  const [buildingLength, setBuildingLength] = useState(1);
  const [floorHeight, setFloorHeight] = useState(1);
  const [floorsCount, setFloorsCount] = useState(1);
  const [posada, setPosada] = useState("Оберіть опцію");
  const [rank, setRank] = useState("Оберіть опцію");
  const [lengthService, setLengthService] = useState("Оберіть опцію");
  const [result, setResult] = useState(0);
  const [frontDay, setfrontDay] = useState(0);

  useEffect(() => {
    fetch("/api/getDollarRate")
      .then((res) => res.json())
      .then((data) => setRate(data.rate))
      .catch((error) => console.error("Помилка отримання курсу:", error));
  }, []);

  const buildtype = {
    Житлова: 1,
    Комерційна: 1.3,
    "Не житлова": 0.8,
    Промислова: 0.6,
    Складська: 0.5,
  };

  const roofingList = ["Скатна", "Плоска"];
  const foundationList = ["Плита", "Стрічка"];
  const facadeList = ["Пінопласт", "Мінвата"];

  const walsList = [
    "Цегла",
    "Газоблок",
    "Крамоблок",
    "Бетон",
    "Цементно-піщаний блок",
  ];

  const typeList = [
    "Житлова",
    "Комерційна",
    "Не житлова",
    "Промислова",
    "Складська",
  ];
  return (
    <div className={styles.container} id="prices">
      <SectionTitle title="Ціни" number="04" lineColor="var(--accent)" />
      <div>Калькулятор</div>
      <div className={styles.calculatorWrapper}>
        <div className={styles.bigDropDownsWrapper}>
          <DropDown
            list={typeList}
            title="Тип споруди"
            selectTitle={type}
            onChange={setType}
          />
          <DropDown
            list={walsList}
            title="Стіни"
            selectTitle={wals}
            onChange={setWals}
          />
        </div>
        <div className={styles.smallDropDownsWrapper}>
          <DropDown
            list={foundationList}
            title="Фундамент"
            selectTitle={foundation}
            onChange={setFoundation}
          />
          <DropDown
            list={roofingList}
            title="Покрівля"
            selectTitle={roofing}
            onChange={setRoofing}
          />
          <DropDown
            list={facadeList}
            title="Фасад"
            selectTitle={facade}
            onChange={setFacade}
          />
        </div>
        <Slider
          step={1}
          value={buildingWidth}
          minValue={1}
          maxValue={100}
          setValue={setBuildingWidth}
          ariaLabel="Ширина будівлі"
        />
        <div>Ширина будівлі: {buildingWidth}</div>
        <Slider
          step={1}
          value={buildingLength}
          minValue={1}
          maxValue={100}
          setValue={setBuildingLength}
          ariaLabel="Довжина будівлі"
        />
        <div>Довжина будівлі: {buildingLength}</div>
        <Slider
          step={0.1}
          value={floorHeight}
          minValue={2}
          maxValue={5}
          setValue={setFloorHeight}
          ariaLabel="Висота поверху"
        />
        <div>Висота поверху: {floorHeight}</div>
        <Slider
          step={1}
          value={floorsCount}
          minValue={1}
          maxValue={9}
          setValue={setFloorsCount}
          ariaLabel="Кількість поверхів"
        />
        <div>Кількість поверхів: {floorsCount}</div>
        <div>Курс USD: {rate ? rate.toFixed(2) : "Завантаження..."}</div>
      </div>
    </div>
  );
};

export default Calculator;
