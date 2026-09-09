import path from "node:path";
import { fileURLToPath } from "node:url";
import XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workbookPath = path.join(__dirname, "..", "data-source", "Financial Study - Leora.xlsx");
const workbook = XLSX.readFile(workbookPath);

const importedSheets = new Map([
  ["STR-1BR-Master-Data", "STR"], ["STR-2BR-Master-Data", "STR"], ["STR-3BR-Master-Data", "STR"],
  ["STR-Regular Financial Study", "STR"], ["STR-Regular Study Summary", "STR"],
  ["Ltr-1BR-Master-Data", "LTR"], ["LTR-2BR-Master-Data", "LTR"], ["LTR-3BR-Master-Data", "LTR"],
  ["LTR-Regular Financial Study", "LTR"], ["LTR Regular Study Summary", "LTR"],
  ["Hybrid Projection", "Hybrid"], ["Hybrid Model Study Summary", "Hybrid"],
]);

let valid = true;
for (const name of workbook.SheetNames) {
  const hiddenState = workbook.Workbook?.Sheets?.find((sheet) => sheet.name === name)?.Hidden ?? 0;
  const state = hiddenState === 0 ? "Visible" : hiddenState === 2 ? "Very Hidden" : "Hidden";
  const model = importedSheets.get(name);
  const imported = state === "Visible" && Boolean(model);
  console.log(`${name}\nState: ${state}\nImported: ${imported ? "Yes" : "No"}\nModel: ${model ?? "Excluded"}\n`);
  if (state !== "Visible" && model) valid = false;
}

if (!valid) {
  throw new Error("A configured Leora source sheet is hidden. Update the dashboard source mapping before release.");
}
