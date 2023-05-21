export enum CardType {
  BASIC_RESOURCE = 0,
  LEVEL_ONE_RESOURCE = 1,
  LEVEL_TWO_RESOURCE = 2,
  BUILDING = 3
}

export interface CardIdentity {
  cardType: CardType;
  typeId: number;
}

export interface ResourceCard {
  cardIdentity: CardIdentity;
  name: string;
  value: number;
  cost: CardIdentity[][];
  capital: CardIdentity[];
}

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

export interface CardQuantity {
  cardIdentity: CardIdentity;
  twoPlayers: number;
  threePlayers: number;
  fourPlayers: number;
}
