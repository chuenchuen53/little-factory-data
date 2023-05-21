import type { CardIdentity } from "./typing";

export class CardIdentities {
  public static equals(a: CardIdentity, b: CardIdentity): boolean {
    return a.cardType === b.cardType && a.typeId === b.typeId;
  }
}
