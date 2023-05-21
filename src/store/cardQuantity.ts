import { writable } from "svelte/store";
import { CardIdentities } from "../game/CardIdentities";
import { basicResourceQuantity, levelOneResourceQuantity, levelTwoResourceQuantity, buildingQuantity } from "./data";
import type { CardIdentity, CardQuantity } from "../game/typing";

export type CardQuantityStore = CardQuantity[];

function customStore() {
  const initData = [...basicResourceQuantity, ...levelOneResourceQuantity, ...levelTwoResourceQuantity, ...buildingQuantity];
  const { subscribe, update } = writable<CardQuantityStore>(initData);

  const updateCardQuantity = (updated: Partial<CardQuantity> & { cardIdentity: CardIdentity }) => {
    update((state) => {
      const index = state.findIndex((x) => CardIdentities.equals(x.cardIdentity, updated.cardIdentity));
      if (index === -1) throw new Error("CardIdentity not found in cardQuantityStore");
      state[index] = {
        ...state[index],
        ...updated
      };
      return state;
    });
  };

  return {
    subscribe,
    updateCardQuantity
  };
}

export const cardQuantityStore = customStore();
