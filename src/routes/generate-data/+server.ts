import fs from "fs";
import path from "path";
import type { ResourceCard } from "../../store/typing/ResourceCard";
import type { BuildingCard } from "../../store/typing/BuildingCard";
import type { CardQuantity } from "../../store/typing/CardQuantity";
import type { RequestEvent } from "@sveltejs/kit";
import type { GenerateDataRequestBody } from "./typing";

const outputDir = path.resolve("generated-data");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function generateFile(data: (ResourceCard | BuildingCard | CardQuantity)[], filename: string) {
  fs.writeFileSync(path.join(outputDir, filename), JSON.stringify(data, null, 2));
}

export async function POST(event: RequestEvent) {
  const req = event.request;
  const {
    basicResource,
    levelOneResource,
    levelTwoResource,
    building,
    cardQuantity
  }: GenerateDataRequestBody = await req.json();
  generateFile(basicResource, "basicResource.json");
  generateFile(levelOneResource, "levelOneResource.json");
  generateFile(levelTwoResource, "levelTwoResource.json");
  generateFile(building, "building.json");
  generateFile(cardQuantity, "cardQuantity.json");
  return new Response(null, { status: 204 });
}
