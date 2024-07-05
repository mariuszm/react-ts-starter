import { create } from 'zustand';

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

export const useAppStore = create<Store & Actions>(set => ({
  ...initialState,
  updateFirstName: firstName => set(() => ({ firstName })),
  updateLastName: lastName => set(() => ({ lastName })),
  reset: () => set(() => initialState),
}));
