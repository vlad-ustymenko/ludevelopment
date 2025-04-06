"use client";
import React, { useState } from "react";
import styles from "./Calculator.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "../Slider/Slider";
import DropDown from "../DropDown/DropDown";
import useDollarRate from "@/hooks/useDollarRate";
import useBuildingCost from "@/hooks/useBuildingCost";
import { useTranslations } from "next-intl";

const Calculator = () => {
  const t = useTranslations("Calculator");
  const tOption = useTranslations("Calculator.options");

  const [type, setType] = useState("residential");
  const [wals, setWals] = useState("brick");
  const [foundation, setFoundation] = useState("slab");
  const [roofing, setRoofing] = useState("gable");
  const [facade, setFacade] = useState("foam");
  const [buildingWidth, setBuildingWidth] = useState(1);
  const [buildingLength, setBuildingLength] = useState(1);
  const [floorHeight, setFloorHeight] = useState(2);
  const [floorsCount, setFloorsCount] = useState(1);
  const { rate, rateError } = useDollarRate();

  const buildType = {
    residential: 1,
    commercial: 1.3,
    nonResidential: 0.8,
    industrial: 0.6,
    warehouse: 0.5,
  };

  const walsType = {
    brick: 3900,
    gasBlock: 2100,
    keramBlock: 3200,
    concrete: 2600,
    sandCement: 1900,
  };

  const foundationType = {
    strip: 4000,
    slab: 6000,
  };

  const roofingType = {
    gable: 2800,
    flat: 3500,
  };

  const facadeType = {
    foam: 2000,
    mineralWool: 3000,
  };

  const buildTypeList = Object.keys(buildType).map((key) => ({
    label: tOption(key),
    value: key,
  }));

  const walsList = Object.keys(walsType).map((key) => ({
    label: tOption(key),
    value: key,
  }));

  const foundationList = Object.keys(foundationType).map((key) => ({
    label: tOption(key),
    value: key,
  }));

  const roofingList = Object.keys(roofingType).map((key) => ({
    label: tOption(key),
    value: key,
  }));

  const facadeList = Object.keys(facadeType).map((key) => ({
    label: tOption(key),
    value: key,
  }));

  const cost = useBuildingCost({
    type,
    wals,
    foundation,
    roofing,
    facade,
    buildingWidth,
    buildingLength,
    floorHeight,
    floorsCount,
    rate,
    typesData: { buildType, walsType, foundationType, roofingType, facadeType },
  });

  return (
    <section className={styles.container} id="prices">
      <SectionTitle title={t("title")} number="03" />

      <div className={styles.calculatorWrapper}>
        <div className={styles.calculatorTitle}>{t("calculatorTitle")}</div>
        <div className={styles.dropDownsWrapper}>
          <div className={styles.bigDropDownsWrapper}>
            <DropDown
              list={buildTypeList}
              title={t("type")}
              selectTitle={tOption(type)}
              onChange={setType}
              big
            />
            <DropDown
              list={walsList}
              title={t("walls")}
              selectTitle={tOption(wals)}
              onChange={setWals}
              big
            />
          </div>
          <div className={styles.smallDropDownsWrapper}>
            <DropDown
              list={foundationList}
              title={t("foundation")}
              selectTitle={tOption(foundation)}
              onChange={setFoundation}
              small
            />
            <DropDown
              list={roofingList}
              title={t("roof")}
              selectTitle={tOption(roofing)}
              onChange={setRoofing}
              small
            />
            <DropDown
              list={facadeList}
              title={t("facade")}
              selectTitle={tOption(facade)}
              onChange={setFacade}
              small
            />
          </div>
        </div>
        <div className={styles.slidersWrapper}>
          <div>
            <h3 className={styles.sliderTitle}>
              {t("buildingWidth", { value: buildingWidth })}
            </h3>
            <Slider
              step={1}
              value={buildingWidth}
              minValue={1}
              maxValue={100}
              setValue={setBuildingWidth}
              ariaLabel={t("buildingWidth", { value: buildingWidth })}
            />
          </div>
          <div>
            <h3 className={styles.sliderTitle}>
              {t("buildingLength", { value: buildingLength })}
            </h3>
            <Slider
              step={1}
              value={buildingLength}
              minValue={1}
              maxValue={100}
              setValue={setBuildingLength}
              ariaLabel={t("buildingLength", { value: buildingLength })}
            />
          </div>
          <div>
            <h3 className={styles.sliderTitle}>
              {t("floorHeight", { value: floorHeight })}
            </h3>
            <Slider
              step={0.1}
              value={floorHeight}
              minValue={2}
              maxValue={5}
              setValue={setFloorHeight}
              ariaLabel={t("floorHeight", { value: floorHeight })}
            />
          </div>
          <div>
            <h3 className={styles.sliderTitle}>
              {t("floorCount")}: {floorsCount}
            </h3>
            <Slider
              step={1}
              value={floorsCount}
              minValue={1}
              maxValue={9}
              setValue={setFloorsCount}
              ariaLabel={t("floorCount")}
            />
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.rateContentWrapper}>
            {rateError === "" ? (
              <div className={styles.rate}>
                {t("rateLabel")}
                {rate
                  ? `${rate.toFixed(2)} ${t("currency")}`
                  : `${t("loading")}`}
              </div>
            ) : (
              <div className={styles.rate}>
                {t("rateLabel")} <span>{rateError}</span>
              </div>
            )}
            <div className={styles.rateText}>
              {t("rateNote")
                .split("\n")
                .map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
            </div>
          </div>
          {rateError === "" ? (
            <div className={styles.cost}>
              {t("cost", { value: cost.toLocaleString("uk-UA") })}
            </div>
          ) : (
            <div className={styles.cost}>{t("emptyCost")}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
