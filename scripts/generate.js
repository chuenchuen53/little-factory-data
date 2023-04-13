const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..", "public", "data");

const outputDir = path.join(__dirname, "..", "output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const type0 = JSON.parse(fs.readFileSync(path.join(rootDir, "type0.json"), "utf8"));
const type1 = JSON.parse(fs.readFileSync(path.join(rootDir, "type1.json"), "utf8"));
const type2 = JSON.parse(fs.readFileSync(path.join(rootDir, "type2.json"), "utf8"));
const type3 = JSON.parse(fs.readFileSync(path.join(rootDir, "type3.json"), "utf8"));

function generateResource(data, filename) {
  const obj = data.records.map((x) => ({
    cardType: x.cardType,
    typeId: x.typeId,
    name: x.name,
    value: x.value,
    cost: x.cost.map((y) => y.map((z) => ({ cardType: z[0], typeId: z[1] }))),
    capital: x.capital.map((y) => y.map((z) => ({ cardType: z[0], typeId: z[1] }))),
  }));

  fs.writeFileSync(path.join(outputDir, filename), JSON.stringify(obj, null, 2));
}

function generateBuilding(data, filename) {
  const obj = data.records.map((x) => ({
    cardType: x.cardType,
    typeId: x.typeId,
    name: x.name,
    value: x.value,
    cost: x.cost.map((y) => y.map((z) => ({ cardType: z[0], typeId: z[1] }))),
    isStartingBuilding: x.isStartingBuilding,
    isExtension: x.isExtension,
    points: x.points,
    effectCost: x.effectCost.map((y) => y.map((z) => ({ cardType: z[0], typeId: z[1] }))),
    effectCapital: x.effectCapital.map((y) => y.map((z) => ({ cardType: z[0], typeId: z[1] }))),
    effectProduct: x.effectProduct ? { cardType: x.effectProduct[0], typeId: x.effectProduct[1] } : [],
    effectPoints: x.effectPoints,
  }));

  fs.writeFileSync(path.join(outputDir, filename), JSON.stringify(obj, null, 2));
}

console.log("[INFO] Generating resources...");
generateResource(type0, "type0.json");
generateResource(type1, "type1.json");
generateResource(type2, "type2.json");
generateBuilding(type3, "type3.json");
console.log("[INFO] Done.");
