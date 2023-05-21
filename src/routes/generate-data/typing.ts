import type { BuildingCard, CardQuantity, ResourceCard } from "../../game/typing";

export interface GenerateDataRequestBody {
  basicResource: ResourceCard[];
  levelOneResource: ResourceCard[];
  levelTwoResource: ResourceCard[];
  building: BuildingCard[];
  cardQuantity: CardQuantity[];
}
