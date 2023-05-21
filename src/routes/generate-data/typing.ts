import type { ResourceCard } from "../../game/typing/ResourceCard";
import type { BuildingCard } from "../../game/typing/BuildingCard";
import type { CardQuantity } from "../../game/typing/CardQuantity";

export interface GenerateDataRequestBody {
  basicResource: ResourceCard[];
  levelOneResource: ResourceCard[];
  levelTwoResource: ResourceCard[];
  building: BuildingCard[];
  cardQuantity: CardQuantity[];
}
