import { derived, writable, type Readable } from "svelte/store";
import { CardIdentities } from "../game/CardIdentities";
import { basicResource, levelOneResource, levelTwoResource, building } from "./data";
import { CardType, type BuildingCard, type ResourceCard, type CardIdentity } from "../game/typing";

interface CardDataStore {
  [CardType.BASIC_RESOURCE]: ResourceCard[];
  [CardType.LEVEL_ONE_RESOURCE]: ResourceCard[];
  [CardType.LEVEL_TWO_RESOURCE]: ResourceCard[];
  [CardType.BUILDING]: BuildingCard[];
}

function customStore() {
  const initData: CardDataStore = {
    [CardType.BASIC_RESOURCE]: [],
    [CardType.LEVEL_ONE_RESOURCE]: [],
    [CardType.LEVEL_TWO_RESOURCE]: [],
    [CardType.BUILDING]: []
  };

  [...basicResource, ...levelOneResource, ...levelTwoResource].forEach((item) => {
    const cardType = item.cardIdentity.cardType;
    if (cardType === CardType.BUILDING) {
      throw new Error("Wrong card type in raw data");
    } else {
      initData[cardType].push(item);
    }
  });

  building.forEach((item) => {
    const cardType = item.cardIdentity.cardType;
    if (cardType !== CardType.BUILDING) {
      throw new Error("Wrong card type in raw data");
    } else {
      initData[cardType].push(item);
    }
  });

  const store = writable<CardDataStore>(initData);
  const { subscribe, update } = store;

  const updateResourceCard = (card: ResourceCard) => {
    update((x) => {
      const cardType = card.cardIdentity.cardType;
      const index = x[cardType].findIndex((y) => CardIdentities.equals(y.cardIdentity, card.cardIdentity));
      x[cardType][index] = card;

      return x;
    });
  };

  const getName: Readable<(x: CardIdentity) => string> = derived(store, ($store) => (cardIdentity: CardIdentity) => {
    const cardType = cardIdentity.cardType;
    const arr: { cardIdentity: CardIdentity; name: string }[] = $store[cardType];
    return arr.find((x) => CardIdentities.equals(x.cardIdentity, cardIdentity))?.name ?? "unknown";
  });

  const getAllResourceCards: Readable<ResourceCard[]> = derived(store, ($store) => {
    return [...$store[CardType.BASIC_RESOURCE], ...$store[CardType.LEVEL_ONE_RESOURCE], ...$store[CardType.LEVEL_TWO_RESOURCE]];
  });

  return {
    subscribe,
    updateResourceCard,
    getName,
    getAllResourceCards
  };
}

export const cardDataStore = customStore();
