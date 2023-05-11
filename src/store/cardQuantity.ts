import { writable } from "svelte/store";
import { CardIdentity } from "./CardIdentity";
import {
  basicResourceQuantity,
  levelOneResourceQuantity,
  levelTwoResourceQuantity,
  buildingQuantity
} from "./data";
import type { CardQuantity } from "./typing/CardQuantity";

export type CardQuantityStore = CardQuantity[];

function customStore() {
  const allData = [
    ...basicResourceQuantity,
    ...levelOneResourceQuantity,
    ...levelTwoResourceQuantity,
    ...buildingQuantity
  ];
  const initData: CardQuantityStore = [];

  allData.forEach((x) => {
    const cardQuantity: CardQuantity = {
      cardIdentity: CardIdentity.get(x.cardIdentity.cardType, x.cardIdentity.typeId),
      twoPlayers: x.twoPlayers,
      threePlayers: x.threePlayers,
      fourPlayers: x.fourPlayers
    };
    initData.push(cardQuantity);
  });

  const { subscribe, set, update } = writable<CardQuantityStore>(initData);

  return {
    subscribe
  };
}

export const cardQuantityStore = customStore();
