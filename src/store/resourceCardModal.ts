import { writable } from "svelte/store";
import { cardDataStore } from "./cardData";
import type { CardIdentity, ResourceCard } from "../game/typing";

interface ResourceCardModalStore {
  data: ResourceCard | null;
}

function customStore() {
  const { subscribe, set, update } = writable<ResourceCardModalStore>({
    data: null
  });

  const openModal = (data: ResourceCard) => {
    const clone: ResourceCard = JSON.parse(JSON.stringify(data));
    set({ data: clone });
  };

  const closeModal = () => {
    set({ data: null });
  };

  const confirmChange = (data: ResourceCard) => {
    cardDataStore.updateResourceCard(data);
    closeModal();
  };

  const updateCost = (index: number, optCost: CardIdentity[]) => {
    update((x) => ({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- only can call if data is not null
      data: { ...x.data!, cost: x.data!.cost.map((x, i) => (i === index ? optCost : x)) }
    }));
  };

  const addOptCost = () => {
    update((x) => ({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- only can call if data is not null
      data: { ...x.data!, cost: [...x.data!.cost, []] }
    }));
  };

  const removeOptCost = (index: number) => {
    update((x) => ({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- only can call if data is not null
      data: { ...x.data!, cost: x.data!.cost.filter((_, i) => i !== index) }
    }));
  };
  const updateCapital = (capital: CardIdentity[]) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    update((x) => ({ data: { ...x.data!, capital } }));
  };

  return {
    subscribe,
    openModal,
    closeModal,
    confirmChange,
    updateCost,
    addOptCost,
    removeOptCost,
    updateCapital
  };
}

export const resourceCardModalStore = customStore();
