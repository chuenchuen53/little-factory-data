import { z } from "zod";

const cardIdentitySchema = z.object({
  cardType: z.number().min(0).max(3),
  typeId: z.number().min(1)
});

const resourceRecordSchema = z.object({
  cardIdentity: cardIdentitySchema,
  name: z.string(),
  value: z.number().min(1),
  cost: z.array(z.array(cardIdentitySchema)),
  capital: z.array(cardIdentitySchema)
});

const resourceJsonSchema = z.array(resourceRecordSchema);

const buildingRecord = z.object({
  cardIdentity: cardIdentitySchema,
  name: z.string(),
  value: z.number(),
  cost: z.array(z.array(cardIdentitySchema)),
  isStartingBuilding: z.boolean(),
  isExtension: z.boolean(),
  points: z.number(),
  effectCost: z.array(z.array(cardIdentitySchema)),
  effectCapital: z.array(cardIdentitySchema),
  effectProduct: z.nullable(cardIdentitySchema),
  effectPoints: z.nullable(z.number().min(1)),
  specialEffect: z.nullable(z.string())
});

const buildingJsonSchema = z.array(buildingRecord);

const careQuantityRecordSchema = z.object({
  cardIdentity: cardIdentitySchema,
  twoPlayers: z.number().min(1),
  threePlayers: z.number().min(1),
  fourPlayers: z.number().min(1)
});

const cardQuantityJsonSchema = z.array(careQuantityRecordSchema);

export function checkSchema(
  basicResource: unknown[],
  levelOneResource: unknown[],
  levelTwoResource: unknown[],
  building: unknown[],
  cardQuantity: unknown[]
): void {
  try {
    console.log("[INFO] Checking basicResource");
    resourceJsonSchema.parse(basicResource);

    console.log("[INFO] Checking levelOneResource");
    resourceJsonSchema.parse(levelOneResource);

    console.log("[INFO] Checking levelTwoResource");
    resourceJsonSchema.parse(levelTwoResource);

    console.log("[INFO] Checking building");
    buildingJsonSchema.parse(building);

    console.log("[INFO] Checking cardQuantity");
    cardQuantityJsonSchema.parse(cardQuantity);

    console.log("[INFO] All checks passed");
  } catch (e) {
    console.log("[ERROR] Check failed");
    throw new Error((e as Error).message);
  }
}
