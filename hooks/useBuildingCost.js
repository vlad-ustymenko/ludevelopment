import { useMemo } from "react";

const useBuildingCost = ({
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
  typesData,
}) => {
  const buildTypeData = useMemo(() => typesData.buildType[type], [type]);
  const walsTypeData = useMemo(() => typesData.walsType[wals], [wals]);
  const foundationTypeData = useMemo(
    () => typesData.foundationType[foundation],
    [foundation]
  );
  const roofingTypeData = useMemo(
    () => typesData.roofingType[roofing],
    [roofing]
  );
  const facadeTypeData = useMemo(() => typesData.facadeType[facade], [facade]);

  const buildingArea = useMemo(
    () => buildingWidth * buildingLength * floorsCount,
    [buildingWidth, buildingLength, floorsCount]
  );

  const result = useMemo(() => {
    const firstParam =
      (buildingWidth + buildingLength) *
      2 *
      floorHeight *
      floorsCount *
      walsTypeData;
    const secondParam = roofingTypeData * buildingArea;
    const thirdParam =
      (buildingWidth + buildingLength) *
      floorHeight *
      floorsCount *
      facadeTypeData;
    const fourthParam = foundationTypeData * buildingArea;

    return Math.floor(
      ((firstParam + secondParam + thirdParam + fourthParam) * buildTypeData) /
        rate
    );
  }, [
    rate,
    type,
    wals,
    foundation,
    roofing,
    facade,
    buildingWidth,
    buildingLength,
    floorHeight,
    floorsCount,
  ]);

  return result;
};

export default useBuildingCost;
