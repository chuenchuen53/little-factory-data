import type { CardIdentity } from "../CardIdentity";

export interface BuildingCard {
  cardIdentity: CardIdentity;
  name: string;
  value: number;
  cost: CardIdentity[][];
  isStartingBuilding: boolean;
  isExtension: boolean;
  points: number;
  effectCost: CardIdentity[][];
  effectCapital: CardIdentity[];
  effectProduct: CardIdentity | null;
  effectPoints: number | null;
  specialEffect: string | null;
}
