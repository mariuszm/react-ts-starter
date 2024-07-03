import { create } from 'zustand';
import { createSelectors } from './_createSelectors';

type Store = {
  firstName: string | null;
  lastName: string | null;
};

type Actions = {
  updateFirstName: (firstName: Store['firstName']) => void;
  updateLastName: (lastName: Store['lastName']) => void;
  reset: () => void;
};

const initialState: Store = {
  firstName: null,
  lastName: null,
};

const useAppStoreBase = create<Store & Actions>(set => ({
  ...initialState,
  updateFirstName(firstName) {
    set(() => ({ firstName }));
  },
  updateLastName(lastName) {
    set(() => ({ lastName }));
  },
  reset() {
    set(initialState);
  },
}));

export const useAppStore = createSelectors(useAppStoreBase);
