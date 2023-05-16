import type { CardIdentity } from "./CardIdentity";

export class Card {
  private static instances: Map<CardIdentity, Card> = new Map();

  public readonly cardIdentity: CardIdentity;
  public readonly name: string;
  public readonly value: number;

  public static create(cardIdentity: CardIdentity, name: string, value: number): Card {
    const card = new Card(cardIdentity, name, value);
    Card.instances.set(cardIdentity, card);
    return card;
  }

  public static get(cardIdentity: CardIdentity): Card {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return Card.instances.get(cardIdentity)!;
  }

  public static getName(cardIdentity: CardIdentity): string {
    return Card.get(cardIdentity).name;
  }

  private constructor(cardIdentity: CardIdentity, name: string, value: number) {
    this.cardIdentity = cardIdentity;
    this.name = name;
    this.value = value;
  }
}
