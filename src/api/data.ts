import type { TStore } from './types';

export const STORES: TStore[] = [
  {
    id: 'store-001',
    name: 'The Travel Store',
    distance: 12,
    inventory: [
      { id: 'item-001', name: 'Running shoes', price: 12.0 },
      { id: 'item-002', name: 'Used car', price: 12300.0 },
      { id: 'item-003', name: 'Fairfax 1 ST', price: 599.0 },
      { id: 'item-0034', name: 'coke', price: 599.0 },
    ],
  },
  {
    id: 'store-002',
    name: 'Food Library',
    distance: 4,
    inventory: [
      { id: 'item-004', name: 'Burger', price: 8.0 },
      { id: 'item-005', name: 'Pickles', price: 6.0 },
      { id: 'item-006', name: 'Monster (ultra sunrise)', price: 24.0 },
      { id: 'item-007', name: 'Ultra-vegan powdered protein mix', price: 77.0 },
      { id: 'item-0034', name: 'coke', price: 599.0 },
    ],
  },
  {
    id: 'store-003',
    name: 'Hammergirl',
    distance: 7,
    inventory: [
      {
        id: 'item-009',
        name: 'WeiB Schwarz Booster: Project SEKAI Colorful Stage! feat. Hatsune Miku (Full Box)',
        price: 77.99,
      },
      {
        id: 'item-011',
        name: 'Pokemon Plush: Mofugutto Eevee Friends: Vaporeon & Glaceon',
        price: 37.99,
      },
      { id: 'item-012', name: 'Tamagotchi Originals: Caramel Nuts', price: 19.99 },
      {
        id: 'item-013',
        name: 'Dragon Ball Super Figure: Super Saiyan 3 Goku vs Majin Buu Final Dragon Stars',
        price: 49.99,
      },
    ],
  },
];
