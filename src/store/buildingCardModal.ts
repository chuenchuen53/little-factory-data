import { writable } from "svelte/store";
import { cardDataStore } from "./cardData";
import type { BuildingCard, CardIdentity } from "../game/typing";

interface BuildingCardModalStore {
  data: BuildingCard | null;
}

function customStore() {
  const { subscribe, set, update } = writable<BuildingCardModalStore>({
    data: null
  });

  const openModal = (data: BuildingCard) => {
    const clone: BuildingCard = JSON.parse(JSON.stringify(data));
    set({ data: clone });
  };

  const closeModal = () => {
    set({ data: null });
  };

  const confirmChange = (data: BuildingCard) => {
    cardDataStore.updateBuildingCard(data);
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

  const updateEffectCost = (index: number, optCost: CardIdentity[]) => {
    update((x) => ({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- only can call if data is not null
      data: { ...x.data!, effectCost: x.data!.effectCost.map((x, i) => (i === index ? optCost : x)) }
    }));
  };

  const addOptEffectCost = () => {
    update((x) => ({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- only can call if data is not null
      data: { ...x.data!, effectCost: [...x.data!.effectCost, []] }
    }));
  };

  const removeOptEffectCost = (index: number) => {
    update((x) => ({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- only can call if data is not null
      data: { ...x.data!, effectCost: x.data!.effectCost.filter((_, i) => i !== index) }
    }));
  };

  const updateEffectCapital = (effectCapital: CardIdentity[]) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    update((x) => ({ data: { ...x.data!, effectCapital } }));
  };

  const updateEffectPoints = (effectPoints: number) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    update((x) => ({ data: { ...x.data!, effectPoints: effectPoints <= 0 ? null : effectPoints } }));
  };

  const updateProduct = (product: CardIdentity | null) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    update((x) => ({ data: { ...x.data!, effectProduct: product } }));
  };

  return {
    subscribe,
    openModal,
    closeModal,
    confirmChange,
    updateCost,
    addOptCost,
    removeOptCost,
    updateEffectCost,
    addOptEffectCost,
    removeOptEffectCost,
    updateEffectCapital,
    updateEffectPoints,
    updateProduct
  };
}

export const buildingCardModalStore = customStore();
