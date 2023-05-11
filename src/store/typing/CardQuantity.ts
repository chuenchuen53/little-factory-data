import type { CardIdentity } from "../CardIdentity";

export interface CardQuantity {
  cardIdentity: CardIdentity;
  twoPlayers: number;
  threePlayers: number;
  fourPlayers: number;
}
