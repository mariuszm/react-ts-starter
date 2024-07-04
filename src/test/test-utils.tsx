import { useAppStore } from '@/store';
import { cleanup } from '@testing-library/react';

const initialStoreState = useAppStore.getState();

beforeEach(() => {
  useAppStore.setState(initialStoreState, true);
});

afterEach(() => {
  cleanup();
});
