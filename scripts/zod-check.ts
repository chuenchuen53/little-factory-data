import path from "path";
import fs from "fs";
import { z } from "zod";

const rootDir = path.join(__dirname, "../public/data");

const resourceRecordSchema = z.object({
  cardType: z.number().min(0).max(3),
  typeId: z.number().min(1),
  name: z.string(),
  value: z.number().min(1),
  cost: z.array(z.array(z.tuple([z.number(), z.number()]))),
  capital: z.array(z.array(z.tuple([z.number(), z.number()]))),
  twoPlayers: z.number().min(1),
  threePlayers: z.number().min(1),
  fourPlayers: z.number().min(1),
});

const resourceJsonSchema = z.object({
  records: z.array(resourceRecordSchema),
});

const buildingRecord = z.object({
  cardType: z.number().min(0).max(3),
  typeId: z.number().min(1),
  name: z.string(),
  value: z.number(),
  cost: z.array(z.array(z.tuple([z.number(), z.number()]))),
  twoPlayers: z.number().min(1).max(1),
  threePlayers: z.number().min(1).max(1),
  fourPlayers: z.number().min(1).max(1),
  isStartingBuilding: z.boolean(),
  isExtension: z.boolean(),
  points: z.number(),
  effectCost: z.array(z.array(z.tuple([z.number(), z.number()]))),
  effectCapital: z.array(z.array(z.tuple([z.number(), z.number()]))),
  effectProduct: z.tuple([z.number(), z.number()]).optional(),
  effectPoints: z.number().min(1).optional(),
  specialEffect: z.string().optional(),
});

const buildingJsonSchema = z.object({
  records: z.array(buildingRecord),
});

const type0 = JSON.parse(fs.readFileSync(path.join(rootDir, "type0.json"), "utf8"));
const type1 = JSON.parse(fs.readFileSync(path.join(rootDir, "type1.json"), "utf8"));
const type2 = JSON.parse(fs.readFileSync(path.join(rootDir, "type2.json"), "utf8"));
const type3 = JSON.parse(fs.readFileSync(path.join(rootDir, "type3.json"), "utf8"));

try {
  console.log("[INFO] Checking type0.json");
  resourceJsonSchema.parse(type0);

  console.log("[INFO] Checking type1.json");
  resourceJsonSchema.parse(type1);

  console.log("[INFO] Checking type2.json");
  resourceJsonSchema.parse(type2);

  console.log("[INFO] Checking type3.json");
  buildingJsonSchema.parse(type3);

  console.log("[INFO] All checks passed");
} catch (e) {
  console.log("[ERROR] Check failed");
  throw new Error(e);
}
