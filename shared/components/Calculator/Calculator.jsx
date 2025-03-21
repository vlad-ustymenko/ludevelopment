"use client";
import React, { useState, useEffect } from "react";
import styles from "./Calculator.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "../Slider/Slider";
import DropDown from "../DropDown/DropDown";

const Calculator = () => {
  const [type, setType] = useState("Житлова");
  const [wals, setWals] = useState("Цегла");
  const [rate, setRate] = useState(0);
  const [rateError, setRateError] = useState("");
  const [foundation, setFoundation] = useState("Плита");
  const [roofing, setRoofing] = useState("Скатна");
  const [facade, setFacade] = useState("Пінопласт");
  const [buildingWidth, setBuildingWidth] = useState(1);
  const [buildingLength, setBuildingLength] = useState(1);
  const [floorHeight, setFloorHeight] = useState(2);
  const [floorsCount, setFloorsCount] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    fetch("/api/getDollarRate")
      .then((res) => {
        if (!res.ok) {
          if (res.status === 500) {
            throw new Error(
              "Помилка отримання, оновіть сторінку через 10 секунд"
            );
          }
        }
        return res.json();
      })
      .then((data) => {
        setRate(data.rate);
        setRateError("");
      })
      .catch((error) => {
        setRateError(error.message);
      });
  }, []);

  useEffect(() => {
    const buildTypeData = buildType[type];
    const walsTypeData = walsType[wals];
    const foundationTypeData = foundationType[foundation];
    const roofingTypeData = roofingType[roofing];
    const facadeTypeData = facadeType[facade];
    const buildingArea = buildingWidth * buildingLength * floorsCount;

    const firstParam =
      (buildingWidth + buildingLength) *
      2 *
      floorHeight *
      floorsCount *
      walsTypeData;
    const secondParam = roofingTypeData * buildingArea;
    const threeParam =
      (buildingWidth + buildingLength) *
      floorHeight *
      floorsCount *
      facadeTypeData;

    const fourthParam = foundationTypeData * buildingArea;
    const result =
      ((firstParam + secondParam + threeParam + fourthParam) * buildTypeData) /
      rate;

    setResult(Math.floor(result));
  }, [
    rate,
    type,
    wals,
    foundation,
    roofing,
    facade,
    buildingLength,
    buildingWidth,
    floorHeight,
    floorsCount,
  ]);

  // console.log(buildingWidth);

  const buildType = {
    Житлова: 1,
    Комерційна: 1.3,
    "Не житлова": 0.8,
    Промислова: 0.6,
    Складська: 0.5,
  };

  const walsType = {
    Цегла: 3900,
    Газоблок: 2100,
    Крамоблок: 3200,
    Бетон: 2600,
    "Цементно-піщаний блок": 1900,
  };

  const foundationType = {
    Стрічка: 4000,
    Плита: 6000,
  };

  const roofingType = {
    Скатна: 2800,
    Плоска: 3500,
  };

  const facadeType = {
    Пінопласт: 2000,
    Мінвата: 3000,
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
    <section className={styles.container} id="prices">
      <SectionTitle title="Ціни" number="03" lineColor="var(--accent)" />

      <div className={styles.calculatorWrapper}>
        <div className={styles.calculatorTitle}>
          Розрахунок вартості споруди
        </div>
        <div className={styles.dropDownsWrapper}>
          <div className={styles.bigDropDownsWrapper}>
            <DropDown
              list={typeList}
              title="Тип споруди"
              selectTitle={type}
              onChange={setType}
              big
            />
            <DropDown
              list={walsList}
              title="Стіни"
              selectTitle={wals}
              onChange={setWals}
              big
            />
          </div>
          <div className={styles.smallDropDownsWrapper}>
            <DropDown
              list={foundationList}
              title="Фундамент"
              selectTitle={foundation}
              onChange={setFoundation}
              small
            />
            <DropDown
              list={roofingList}
              title="Покрівля"
              selectTitle={roofing}
              onChange={setRoofing}
              small
            />
            <DropDown
              list={facadeList}
              title="Фасад"
              selectTitle={facade}
              onChange={setFacade}
              small
            />
          </div>
        </div>
        <div className={styles.slidersWrapper}>
          <div>
            <h3 className={styles.sliderTitle}>
              Ширина будівлі: {buildingWidth} м.
            </h3>
            <Slider
              step={1}
              value={buildingWidth}
              minValue={1}
              maxValue={100}
              setValue={setBuildingWidth}
              ariaLabel="Ширина будівлі"
            />
          </div>
          <div>
            <h3 className={styles.sliderTitle}>
              Довжина будівлі: {buildingLength} м.
            </h3>
            <Slider
              step={1}
              value={buildingLength}
              minValue={1}
              maxValue={100}
              setValue={setBuildingLength}
              ariaLabel="Довжина будівлі"
            />
          </div>
          <div>
            <h3 className={styles.sliderTitle}>
              Висота поверху: {floorHeight} м.
            </h3>
            <Slider
              step={0.1}
              value={floorHeight}
              minValue={2}
              maxValue={5}
              setValue={setFloorHeight}
              ariaLabel="Висота поверху"
            />
          </div>
          <div>
            <h3 className={styles.sliderTitle}>
              Кількість поверхів: {floorsCount}
            </h3>
            <Slider
              step={1}
              value={floorsCount}
              minValue={1}
              maxValue={9}
              setValue={setFloorsCount}
              ariaLabel="Кількість поверхів"
            />
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.rateContentWrapper}>
            {rateError === "" ? (
              <div className={styles.rate}>
                Курс $: {rate ? rate.toFixed(2) : "Завантаження..."}
                {rate ? " грн" : ""}
              </div>
            ) : (
              <div className={styles.rate}>
                Курс $: <span>{rateError}</span>
              </div>
            )}
            <div className={styles.rateText}>
              Деякі параметри не враховуються в розрахунку.<br></br> Для
              отримання точних даних рекомендуємо звернутися за консультацією.
            </div>
          </div>
          {rateError === "" ? (
            <div className={styles.result}>
              {result.toLocaleString("uk-UA")} $
            </div>
          ) : (
            <div className={styles.result}>0 $</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
