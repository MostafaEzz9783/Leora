import { buildModelScenarios } from "@/data/arqaModelCalculations";

// Source: data-source/Financial Study - RAM.xlsx
// Per the user request, this module uses only the two visible workbook sheets:
// "LTR Financial Study" and "LTR Study Summary". Hidden sheets such as
// "STR Study Worksheet", "1BR Comps", "2BR Comps", and "2BR" are intentionally
// excluded from every dashboard value below.
const feePipeline = [
  { key: "vat", labelKey: "vat", rate: 0.15 },
  { key: "otaFee", labelKey: "otaFee", rate: 0.15 },
  { key: "madinumShare", labelKey: "madinumShare", rate: 0.23 },
];

const occupancyOptions = [60, 70, 80, 90];

// "LTR Financial Study" sheet, H7:J11 (Best/Base/Worst monthly prices), with
// unit type and unit number from K:L. Totals reconcile to row 13.
const roomPricing = [
  { unit: 1, type: "oneBedroom", worst: 7050, base: 8711, best: 10740 },
  { unit: 2, type: "oneBedroom", worst: 7050, base: 8711, best: 10740 },
  { unit: 3, type: "oneBedroom", worst: 7050, base: 8711, best: 10740 },
  { unit: 4, type: "twoBedroom", worst: 9390, base: 11118, best: 13230 },
  { unit: 5, type: "twoBedroom", worst: 9390, base: 11118, best: 13230 },
];

// "LTR Study Summary" sheet, F11/L11/P11.
const revenueAt100ByScenario = { worst: 479160, base: 580419, best: 704160 };

function buildOption() {
  return {
    key: "option1",
    labelKey: "ramStudy",
    roomCount: roomPricing.length,
    occupancyOptions,
    feePipeline,
    roomPricing,
    revenueAt100ByScenario,
    scenarios: buildModelScenarios({
      unitCount: roomPricing.length,
      occupancyOptions,
      feePipeline,
      revenueAt100ByScenario,
    }),
  };
}

export const ramProject = {
  id: "ram",
  name: { ar: "RAM", en: "RAM" },
  location: { ar: "Riyadh", en: "Riyadh" },
  locationSubtext: { ar: "Saudi Arabia", en: "Saudi Arabia" },
  options: {
    option1: buildOption(),
  },
};

export default ramProject;
