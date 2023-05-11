import { writable } from "svelte/store";
import { CardIdentity } from "./CardIdentity";
import { Card } from "./Card";
import { basicResource, levelOneResource, levelTwoResource, building } from "./data";
import { CardType } from "./CardType";
import type { ResourceCard } from "./typing/ResourceCard";
import type { BuildingCard } from "./typing/BuildingCard";

interface CardDataStore {
  [CardType.BASIC_RESOURCE]: ResourceCard[];
  [CardType.LEVEL_ONE_RESOURCE]: ResourceCard[];
  [CardType.LEVEL_TWO_RESOURCE]: ResourceCard[];
  [CardType.BUILDING]: BuildingCard[];
}

function customStore() {
  const allData = [...basicResource, ...levelOneResource, ...levelTwoResource];
  allData.forEach((item) => {
    const cardIdentity = CardIdentity.create(item.cardType, item.typeId);
    Card.create(cardIdentity, item.name, item.value);
  });

  const initData: CardDataStore = {
    [CardType.BASIC_RESOURCE]: [],
    [CardType.LEVEL_ONE_RESOURCE]: [],
    [CardType.LEVEL_TWO_RESOURCE]: [],
    [CardType.BUILDING]: []
  };

  allData.forEach((x) => {
    const cardIdentity = CardIdentity.get(x.cardType, x.typeId);
    const cost = x.cost.map((optCost) =>
      optCost.map((x) => CardIdentity.get(x.cardType, x.typeId))
    );
    const capital = x.capital.map((x) => CardIdentity.get(x.cardType, x.typeId));

    const item: ResourceCard = {
      cardIdentity,
      name: x.name,
      value: x.value,
      cost,
      capital
    };

    const cardType = item.cardIdentity.cardType;
    if (cardType === CardType.BUILDING) {
      throw new Error("Wrong card type in raw data");
    } else {
      initData[cardType].push(item);
    }
  });

  building.forEach((item) => {
    const cardIdentity = CardIdentity.create(item.cardType, item.typeId);
    Card.create(cardIdentity, item.name, item.value);
  });

  building.forEach((x) => {
    const cardIdentity = CardIdentity.get(x.cardType, x.typeId);
    const cost = x.cost.map((optCost) =>
      optCost.map((x) => CardIdentity.get(x.cardType, x.typeId))
    );
    const effectCost = x.effectCost.map((optCost) =>
      optCost.map((x) => CardIdentity.get(x.cardType, x.typeId))
    );
    const effectCapital = x.effectCapital.map((x) => CardIdentity.get(x.cardType, x.typeId));
    const effectProduct =
      x.effectProduct === null
        ? null
        : CardIdentity.get(x.effectProduct.cardType, x.effectProduct.typeId);
    const effectPoints = x.effectPoints ? x.effectPoints : null;
    const specialEffect = x.specialEffect ? x.specialEffect : null;

    const item: BuildingCard = {
      cardIdentity,
      name: x.name,
      value: x.value,
      cost,
      isStartingBuilding: x.isStartingBuilding,
      isExtension: x.isExtension,
      points: x.points,
      effectCost,
      effectCapital,
      effectProduct,
      effectPoints,
      specialEffect
    };

    const cardType = item.cardIdentity.cardType;
    if (cardType !== CardType.BUILDING) {
      throw new Error("Wrong card type in raw data");
    } else {
      initData[cardType].push(item);
    }
  });

  const { subscribe, set, update } = writable<CardDataStore>(initData);

  return {
    subscribe
  };
}

export const cardDataStore = customStore();
