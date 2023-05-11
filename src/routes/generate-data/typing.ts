import type { ResourceCard } from "../../store/typing/ResourceCard";
import type { BuildingCard } from "../../store/typing/BuildingCard";
import type { CardQuantity } from "../../store/typing/CardQuantity";

export interface GenerateDataRequestBody {
  basicResource: ResourceCard[];
  levelOneResource: ResourceCard[];
  levelTwoResource: ResourceCard[];
  building: BuildingCard[];
  cardQuantity: CardQuantity[];
}
