import { CardType } from "./typing";

export function cardTypeTranslator(cardType: CardType): string {
  switch (cardType) {
    case CardType.BASIC_RESOURCE:
      return "Basic Resource";
    case CardType.LEVEL_ONE_RESOURCE:
      return "Level One Resource";
    case CardType.LEVEL_TWO_RESOURCE:
      return "Level Two Resource";
    case CardType.BUILDING:
      return "Building";
  }
}
