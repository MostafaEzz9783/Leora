import { buildModelScenarios } from "@/data/arqaModelCalculations";

// Source: data-source/Financial Study - Leora.xlsx. Only visible workbook
// sheets may feed this module. See scripts/validateLeoraSources.mjs.
const feePipeline = [
  { key: "otaFee", labelKey: "otaFee", rate: 0.15 },
  { key: "madinumShare", labelKey: "madinumShare", rate: 0.17 },
];

const occupancyOptions = [50, 60, 70, 80, 90];

const strPricing = [
  { unit: "1bd", type: "oneBedroom", worst: 10890, base: 12188.86364, best: 13470 },
  { unit: "2bd", type: "twoBedroom", worst: 14490, base: 17571.17647, best: 20670 },
  { unit: "3bd", type: "threeBedroom", worst: 21210, base: 23229.375, best: 25260 },
];

const ltrPricing = [
  { unit: "1bd", type: "oneBedroom", worst: 4200, base: 4500, best: 4900 },
  { unit: "2bd", type: "twoBedroom", worst: 6730, base: 7762.916667, best: 8796 },
  { unit: "3bd", type: "threeBedroom", worst: 8617, base: 9791.666667, best: 10500 },
];

function makeOption(labelKey, roomPricing, revenueAt100ByScenario) {
  return {
    key: labelKey,
    labelKey,
    roomCount: 86,
    occupancyOptions,
    feePipeline,
    roomPricing,
    revenueAt100ByScenario,
    scenarios: buildModelScenarios({ unitCount: 86, occupancyOptions, feePipeline, revenueAt100ByScenario }),
  };
}

export const leoraProject = {
  id: "leora",
  name: { ar: "ليورا", en: "Leora" },
  location: { ar: "مباني الياسمين، الرياض", en: "Al Yasmin Buildings, Riyadh" },
  locationSubtext: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
  options: {
    str: makeOption("str", strPricing, { worst: 12862800, base: 14849410.55, best: 16831080 }),
    ltr: makeOption("ltr", ltrPricing, { worst: 5373852, base: 5969995, best: 6614208 }),
    hybrid: makeOption("hybrid", [], { worst: 7870168, base: 8929800.183, best: 10019832 }),
  },
};

export default leoraProject;
