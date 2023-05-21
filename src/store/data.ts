import type { ResourceCard, BuildingCard, CardQuantity } from "../game/typing";

export const basicResource: ResourceCard[] = [
  {
    cardIdentity: { cardType: 0, typeId: 1 },
    name: "clay",
    value: 1,
    cost: [],
    capital: []
  },
  {
    cardIdentity: { cardType: 0, typeId: 2 },
    name: "cotton",
    value: 1,
    cost: [],
    capital: []
  },
  {
    cardIdentity: { cardType: 0, typeId: 3 },
    name: "stone",
    value: 1,
    cost: [],
    capital: []
  },
  {
    cardIdentity: { cardType: 0, typeId: 4 },
    name: "wheat",
    value: 1,
    cost: [],
    capital: []
  },
  {
    cardIdentity: { cardType: 0, typeId: 5 },
    name: "wood",
    value: 1,
    cost: [],
    capital: []
  }
];

export const levelOneResource: ResourceCard[] = [
  {
    cardIdentity: { cardType: 1, typeId: 1 },
    name: "brick",
    value: 3,
    cost: [[{ cardType: 0, typeId: 1 }]],
    capital: []
  },
  {
    cardIdentity: { cardType: 1, typeId: 2 },
    name: "cattle",
    value: 5,
    cost: [
      [
        { cardType: 0, typeId: 4 },
        { cardType: 0, typeId: 1 }
      ]
    ],
    capital: []
  },
  {
    cardIdentity: { cardType: 1, typeId: 3 },
    name: "charcoal",
    value: 3,
    cost: [[{ cardType: 0, typeId: 5 }]],
    capital: []
  },
  {
    cardIdentity: { cardType: 1, typeId: 4 },
    name: "cut stone",
    value: 3,
    cost: [[{ cardType: 0, typeId: 3 }]],
    capital: []
  },
  {
    cardIdentity: { cardType: 1, typeId: 5 },
    name: "fish",
    value: 5,
    cost: [[{ cardType: 0, typeId: 3 }]],
    capital: [{ cardType: 2, typeId: 4 }]
  },
  {
    cardIdentity: { cardType: 1, typeId: 6 },
    name: "flour",
    value: 3,
    cost: [[{ cardType: 0, typeId: 4 }]],
    capital: []
  },
  {
    cardIdentity: { cardType: 1, typeId: 7 },
    name: "sheep",
    value: 5,
    cost: [
      [
        { cardType: 0, typeId: 5 },
        { cardType: 0, typeId: 4 }
      ]
    ],
    capital: []
  },
  {
    cardIdentity: { cardType: 1, typeId: 8 },
    name: "thread",
    value: 3,
    cost: [[{ cardType: 0, typeId: 2 }]],
    capital: [{ cardType: 1, typeId: 7 }]
  },
  {
    cardIdentity: { cardType: 1, typeId: 9 },
    name: "timber",
    value: 5,
    cost: [
      [
        { cardType: 0, typeId: 5 },
        { cardType: 0, typeId: 5 }
      ]
    ],
    capital: []
  }
];

export const levelTwoResource: ResourceCard[] = [
  {
    cardIdentity: { cardType: 2, typeId: 1 },
    name: "barrel",
    value: 8,
    cost: [[{ cardType: 1, typeId: 9 }]],
    capital: []
  },
  {
    cardIdentity: { cardType: 2, typeId: 2 },
    name: "bread",
    value: 11,
    cost: [
      [
        { cardType: 1, typeId: 3 },
        { cardType: 1, typeId: 6 }
      ]
    ],
    capital: []
  },
  {
    cardIdentity: { cardType: 2, typeId: 3 },
    name: "cloth",
    value: 6,
    cost: [[{ cardType: 1, typeId: 8 }]],
    capital: []
  },
  {
    cardIdentity: { cardType: 2, typeId: 4 },
    name: "fishing rod",
    value: 8,
    cost: [
      [
        { cardType: 1, typeId: 8 },
        { cardType: 0, typeId: 5 }
      ]
    ],
    capital: []
  },
  {
    cardIdentity: { cardType: 2, typeId: 5 },
    name: "iron",
    value: 8,
    cost: [
      [
        { cardType: 1, typeId: 3 },
        { cardType: 0, typeId: 3 }
      ]
    ],
    capital: []
  },
  {
    cardIdentity: { cardType: 2, typeId: 6 },
    name: "leather",
    value: 8,
    cost: [[{ cardType: 1, typeId: 2 }]],
    capital: []
  },
  {
    cardIdentity: { cardType: 2, typeId: 7 },
    name: "meat",
    value: 8,
    cost: [[{ cardType: 1, typeId: 7 }], [{ cardType: 1, typeId: 2 }]],
    capital: []
  },
  {
    cardIdentity: { cardType: 2, typeId: 8 },
    name: "milk",
    value: 4,
    cost: [],
    capital: [{ cardType: 1, typeId: 2 }]
  },
  {
    cardIdentity: { cardType: 2, typeId: 9 },
    name: "stone wall",
    value: 8,
    cost: [
      [
        { cardType: 1, typeId: 4 },
        { cardType: 0, typeId: 1 }
      ]
    ],
    capital: []
  }
];

export const building: BuildingCard[] = [
  {
    cardIdentity: { cardType: 3, typeId: 1 },
    name: "brick factory",
    value: 6,
    cost: [[{ cardType: 1, typeId: 3 }]],
    isStartingBuilding: true,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 0, typeId: 1 }]],
    effectCapital: [],
    effectProduct: { cardType: 1, typeId: 1 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 2 },
    name: "charcoal hut",
    value: 6,
    cost: [[{ cardType: 1, typeId: 4 }]],
    isStartingBuilding: true,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 0, typeId: 5 }]],
    effectCapital: [],
    effectProduct: { cardType: 1, typeId: 3 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 3 },
    name: "quarry",
    value: 6,
    cost: [[{ cardType: 1, typeId: 1 }]],
    isStartingBuilding: true,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 0, typeId: 3 }]],
    effectCapital: [],
    effectProduct: { cardType: 1, typeId: 4 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 4 },
    name: "spinning mill",
    value: 8,
    cost: [[{ cardType: 1, typeId: 9 }]],
    isStartingBuilding: true,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 0, typeId: 2 }]],
    effectCapital: [{ cardType: 1, typeId: 7 }],
    effectProduct: { cardType: 1, typeId: 8 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 5 },
    name: "water mill",
    value: 6,
    cost: [[{ cardType: 1, typeId: 1 }]],
    isStartingBuilding: true,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 0, typeId: 4 }]],
    effectCapital: [],
    effectProduct: { cardType: 1, typeId: 6 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 6 },
    name: "abattoir",
    value: 6,
    cost: [[{ cardType: 1, typeId: 3 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 1, typeId: 7 }], [{ cardType: 1, typeId: 2 }]],
    effectCapital: [],
    effectProduct: { cardType: 2, typeId: 7 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 7 },
    name: "accessory shop",
    value: 10,
    cost: [[{ cardType: 2, typeId: 3 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 2, typeId: 6 }], [{ cardType: 2, typeId: 5 }]],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 2,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 8 },
    name: "bakery",
    value: 11,
    cost: [
      [
        { cardType: 1, typeId: 1 },
        { cardType: 1, typeId: 4 }
      ]
    ],
    isStartingBuilding: false,
    isExtension: false,
    points: 2,
    effectCost: [[{ cardType: 2, typeId: 2 }]],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 2,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 9 },
    name: "bar",
    value: 11,
    cost: [
      [
        { cardType: 1, typeId: 1 },
        { cardType: 1, typeId: 3 }
      ]
    ],
    isStartingBuilding: false,
    isExtension: false,
    points: 2,
    effectCost: [
      [
        { cardType: 2, typeId: 1 },
        { cardType: 0, typeId: 4 }
      ]
    ],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 2,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 10 },
    name: "barrel factory",
    value: 6,
    cost: [[{ cardType: 1, typeId: 4 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 1, typeId: 9 }]],
    effectCapital: [],
    effectProduct: { cardType: 2, typeId: 1 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 11 },
    name: "bread factory",
    value: 6,
    cost: [[{ cardType: 1, typeId: 1 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [
      [
        { cardType: 1, typeId: 3 },
        { cardType: 1, typeId: 6 }
      ]
    ],
    effectCapital: [],
    effectProduct: { cardType: 2, typeId: 2 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 12 },
    name: "butcher",
    value: 12,
    cost: [[{ cardType: 2, typeId: 5 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 2,
    effectCost: [[{ cardType: 2, typeId: 7 }]],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 2,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 13 },
    name: "castle",
    value: 30,
    cost: [
      [
        { cardType: 2, typeId: 5 },
        { cardType: 2, typeId: 9 },
        { cardType: 1, typeId: 9 }
      ]
    ],
    isStartingBuilding: false,
    isExtension: false,
    points: 5,
    effectCost: [],
    effectCapital: [],
    effectProduct: null,
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 14 },
    name: "cattle ranch",
    value: 8,
    cost: [[{ cardType: 1, typeId: 9 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [
      [
        { cardType: 0, typeId: 4 },
        { cardType: 0, typeId: 1 }
      ]
    ],
    effectCapital: [],
    effectProduct: { cardType: 1, typeId: 2 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 15 },
    name: "cheese factory",
    value: 12,
    cost: [[{ cardType: 2, typeId: 9 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 2,
    effectCost: [
      [
        { cardType: 2, typeId: 1 },
        { cardType: 2, typeId: 8 }
      ]
    ],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 3,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 16 },
    name: "dairy",
    value: 6,
    cost: [[{ cardType: 1, typeId: 4 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [],
    effectCapital: [{ cardType: 1, typeId: 2 }],
    effectProduct: { cardType: 2, typeId: 8 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 17 },
    name: "fish shop",
    value: 8,
    cost: [[{ cardType: 1, typeId: 9 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 1, typeId: 5 }]],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 1,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 18 },
    name: "fishing pond",
    value: 8,
    cost: [[{ cardType: 1, typeId: 9 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 0, typeId: 3 }]],
    effectCapital: [{ cardType: 2, typeId: 4 }],
    effectProduct: { cardType: 1, typeId: 5 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 19 },
    name: "ironworks",
    value: 6,
    cost: [[{ cardType: 1, typeId: 1 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [
      [
        { cardType: 1, typeId: 3 },
        { cardType: 0, typeId: 3 }
      ]
    ],
    effectCapital: [],
    effectProduct: { cardType: 2, typeId: 5 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 20 },
    name: "mansion",
    value: 18,
    cost: [
      [
        { cardType: 1, typeId: 9 },
        { cardType: 1, typeId: 1 },
        { cardType: 1, typeId: 4 }
      ]
    ],
    isStartingBuilding: false,
    isExtension: false,
    points: 3,
    effectCost: [],
    effectCapital: [],
    effectProduct: null,
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 21 },
    name: "market",
    value: 8,
    cost: [[{ cardType: 1, typeId: 5 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [],
    effectCapital: [],
    effectProduct: null,
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 22 },
    name: "masonry",
    value: 6,
    cost: [[{ cardType: 1, typeId: 6 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [
      [
        { cardType: 1, typeId: 4 },
        { cardType: 0, typeId: 1 }
      ]
    ],
    effectCapital: [],
    effectProduct: { cardType: 2, typeId: 9 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 23 },
    name: "milk shop",
    value: 6,
    cost: [[{ cardType: 1, typeId: 1 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 2, typeId: 8 }]],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 1,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 24 },
    name: "restaurant",
    value: 12,
    cost: [[{ cardType: 2, typeId: 9 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 2,
    effectCost: [
      [
        { cardType: 2, typeId: 2 },
        { cardType: 2, typeId: 8 }
      ]
    ],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 4,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 25 },
    name: "sawmill",
    value: 6,
    cost: [[{ cardType: 1, typeId: 4 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [
      [
        { cardType: 0, typeId: 5 },
        { cardType: 0, typeId: 5 }
      ]
    ],
    effectCapital: [],
    effectProduct: { cardType: 1, typeId: 9 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 26 },
    name: "sheep ranch",
    value: 6,
    cost: [[{ cardType: 1, typeId: 1 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [
      [
        { cardType: 0, typeId: 5 },
        { cardType: 0, typeId: 4 }
      ]
    ],
    effectCapital: [],
    effectProduct: { cardType: 1, typeId: 7 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 27 },
    name: "shoe store",
    value: 12,
    cost: [[{ cardType: 2, typeId: 5 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 2,
    effectCost: [
      [
        { cardType: 2, typeId: 6 },
        { cardType: 1, typeId: 8 }
      ]
    ],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 3,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 28 },
    name: "tailor",
    value: 12,
    cost: [[{ cardType: 2, typeId: 9 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 2,
    effectCost: [
      [
        { cardType: 2, typeId: 3 },
        { cardType: 1, typeId: 8 }
      ]
    ],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 2,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 29 },
    name: "tannery",
    value: 6,
    cost: [[{ cardType: 1, typeId: 4 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 1, typeId: 2 }]],
    effectCapital: [],
    effectProduct: { cardType: 2, typeId: 6 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 30 },
    name: "textile factory",
    value: 8,
    cost: [[{ cardType: 1, typeId: 9 }]],
    isStartingBuilding: false,
    isExtension: false,
    points: 1,
    effectCost: [[{ cardType: 1, typeId: 8 }]],
    effectCapital: [],
    effectProduct: { cardType: 2, typeId: 3 },
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 31 },
    name: "building firm",
    value: 12,
    cost: [[{ cardType: 2, typeId: 5 }]],
    isStartingBuilding: false,
    isExtension: true,
    points: 2,
    effectCost: [],
    effectCapital: [],
    effectProduct: null,
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 32 },
    name: "building supply store",
    value: 8,
    cost: [[{ cardType: 1, typeId: 9 }]],
    isStartingBuilding: false,
    isExtension: true,
    points: 1,
    effectCost: [
      [
        { cardType: 1, typeId: 1 },
        { cardType: 2, typeId: 9 }
      ]
    ],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 3,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 33 },
    name: "furniture shop",
    value: 8,
    cost: [[{ cardType: 1, typeId: 2 }]],
    isStartingBuilding: false,
    isExtension: true,
    points: 1,
    effectCost: [
      [
        { cardType: 1, typeId: 9 },
        { cardType: 2, typeId: 3 }
      ]
    ],
    effectCapital: [],
    effectProduct: null,
    effectPoints: 3,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 34 },
    name: "general store",
    value: 12,
    cost: [[{ cardType: 2, typeId: 4 }]],
    isStartingBuilding: false,
    isExtension: true,
    points: 2,
    effectCost: [],
    effectCapital: [],
    effectProduct: null,
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 35 },
    name: "old wood factory",
    value: 6,
    cost: [[{ cardType: 1, typeId: 1 }]],
    isStartingBuilding: false,
    isExtension: true,
    points: 1,
    effectCost: [[{ cardType: 2, typeId: 1 }]],
    effectCapital: [],
    effectProduct: { cardType: 1, typeId: 9 },
    effectPoints: 1,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 36 },
    name: "trading post",
    value: 6,
    cost: [[{ cardType: 1, typeId: 8 }]],
    isStartingBuilding: false,
    isExtension: true,
    points: 1,
    effectCost: [],
    effectCapital: [],
    effectProduct: null,
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 37 },
    name: "wheat farm",
    value: 6,
    cost: [[{ cardType: 1, typeId: 3 }]],
    isStartingBuilding: false,
    isExtension: true,
    points: 1,
    effectCost: [],
    effectCapital: [],
    effectProduct: null,
    effectPoints: null,
    specialEffect: null
  },
  {
    cardIdentity: { cardType: 3, typeId: 38 },
    name: "wholesaler",
    value: 6,
    cost: [[{ cardType: 1, typeId: 6 }]],
    isStartingBuilding: false,
    isExtension: true,
    points: 1,
    effectCost: [],
    effectCapital: [],
    effectProduct: null,
    effectPoints: null,
    specialEffect: null
  }
];

export const basicResourceQuantity: CardQuantity[] = [
  {
    cardIdentity: {
      cardType: 0,
      typeId: 1
    },
    twoPlayers: 2,
    threePlayers: 3,
    fourPlayers: 3
  },
  {
    cardIdentity: {
      cardType: 0,
      typeId: 2
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 2
  },
  {
    cardIdentity: {
      cardType: 0,
      typeId: 3
    },
    twoPlayers: 2,
    threePlayers: 3,
    fourPlayers: 3
  },
  {
    cardIdentity: {
      cardType: 0,
      typeId: 4
    },
    twoPlayers: 2,
    threePlayers: 3,
    fourPlayers: 3
  },
  {
    cardIdentity: {
      cardType: 0,
      typeId: 5
    },
    twoPlayers: 3,
    threePlayers: 4,
    fourPlayers: 5
  }
];

export const levelOneResourceQuantity: CardQuantity[] = [
  {
    cardIdentity: {
      cardType: 1,
      typeId: 1
    },
    twoPlayers: 3,
    threePlayers: 3,
    fourPlayers: 3
  },
  {
    cardIdentity: {
      cardType: 1,
      typeId: 2
    },
    twoPlayers: 2,
    threePlayers: 2,
    fourPlayers: 2
  },
  {
    cardIdentity: {
      cardType: 1,
      typeId: 3
    },
    twoPlayers: 3,
    threePlayers: 3,
    fourPlayers: 3
  },
  {
    cardIdentity: {
      cardType: 1,
      typeId: 4
    },
    twoPlayers: 2,
    threePlayers: 2,
    fourPlayers: 2
  },
  {
    cardIdentity: {
      cardType: 1,
      typeId: 5
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 1,
      typeId: 6
    },
    twoPlayers: 2,
    threePlayers: 2,
    fourPlayers: 2
  },
  {
    cardIdentity: {
      cardType: 1,
      typeId: 7
    },
    twoPlayers: 2,
    threePlayers: 2,
    fourPlayers: 2
  },
  {
    cardIdentity: {
      cardType: 1,
      typeId: 8
    },
    twoPlayers: 2,
    threePlayers: 2,
    fourPlayers: 2
  },
  {
    cardIdentity: {
      cardType: 1,
      typeId: 9
    },
    twoPlayers: 2,
    threePlayers: 2,
    fourPlayers: 2
  }
];

export const levelTwoResourceQuantity: CardQuantity[] = [
  {
    cardIdentity: {
      cardType: 2,
      typeId: 1
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 2,
      typeId: 2
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 2,
      typeId: 3
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 2,
      typeId: 4
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 2,
      typeId: 5
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 2,
      typeId: 6
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 2,
      typeId: 7
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 2,
      typeId: 8
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 2,
      typeId: 9
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  }
];

export const buildingQuantity: CardQuantity[] = [
  {
    cardIdentity: {
      cardType: 3,
      typeId: 1
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 2
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 3
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 4
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 5
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 6
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 7
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 8
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 9
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 10
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 11
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 12
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 13
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 14
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 15
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 16
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 17
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 18
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 19
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 20
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 21
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 22
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 23
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 24
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 25
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 26
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 27
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 28
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 29
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 30
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 31
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 32
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 33
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 34
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 35
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 36
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 37
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  },
  {
    cardIdentity: {
      cardType: 3,
      typeId: 38
    },
    twoPlayers: 1,
    threePlayers: 1,
    fourPlayers: 1
  }
];
