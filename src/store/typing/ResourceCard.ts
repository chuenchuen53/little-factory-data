import type { CardIdentity } from "../CardIdentity";

export interface ResourceCard {
  cardIdentity: CardIdentity;
  name: string;
  value: number;
  cost: CardIdentity[][];
  capital: CardIdentity[];
}
