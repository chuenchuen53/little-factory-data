import { CardType } from "./CardType";

export class CardIdentity {
  private static instances: Record<CardType, CardIdentity[]> = {
    [CardType.BASIC_RESOURCE]: [],
    [CardType.LEVEL_ONE_RESOURCE]: [],
    [CardType.LEVEL_TWO_RESOURCE]: [],
    [CardType.BUILDING]: []
  };

  public readonly cardType: CardType;
  public readonly typeId: number;

  private constructor(CardType: CardType, typeId: number) {
    this.cardType = CardType;
    this.typeId = typeId;
  }

  static create(cardType: CardType, typeId: number): CardIdentity {
    return (CardIdentity.instances[cardType][typeId] ??= new CardIdentity(cardType, typeId));
  }

  static get(cardType: CardType, typeId: number): CardIdentity {
    return CardIdentity.instances[cardType][typeId];
  }
}
