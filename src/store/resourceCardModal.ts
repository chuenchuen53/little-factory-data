import { writable } from "svelte/store";
import { cardDataStore } from "./cardData";
import type { ResourceCard } from "./typing/ResourceCard";
import { CardIdentity } from "./CardIdentity";

interface ResourceCardModalStore {
  open: boolean;
  data: ResourceCard | null;
}

function customStore() {
  const { subscribe, set, update } = writable<ResourceCardModalStore>({
    open: false,
    data: null
  });

  const openModal = (data: ResourceCard) => {
    const clone: ResourceCard = JSON.parse(JSON.stringify(data));
    clone.cardIdentity = CardIdentity.get(clone.cardIdentity.cardType, clone.cardIdentity.typeId);
    clone.cost = clone.cost.map((optCost) =>
      optCost.map((x) => CardIdentity.get(x.cardType, x.typeId))
    );
    clone.capital = clone.capital.map((x) => CardIdentity.get(x.cardType, x.typeId));

    update((x) => ({ ...x, open: true, data: clone }));
  };

  const closeModal = () => {
    set({ open: false, data: null });
  };

  const confirmChange = (data: ResourceCard) => {
    cardDataStore.updateResourceCard(data);
    closeModal();
  };

  const updateCost = (index: number, optCost: CardIdentity[]) => {
    update((x) => ({
      ...x,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      data: { ...x.data!, cost: x.data!.cost.map((x, i) => (i === index ? optCost : x)) }
    }));
  };

  const updateCapital = (capital: CardIdentity[]) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    update((x) => ({ ...x, data: { ...x.data!, capital } }));
  };

  return {
    subscribe,
    openModal,
    closeModal,
    confirmChange,
    updateCost,
    updateCapital
  };
}

export const resourceCardModalStore = customStore();
