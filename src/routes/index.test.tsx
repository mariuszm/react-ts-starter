import { render, screen } from '@testing-library/react';

import { useAppStore } from '@/store';

import Index from './Index';

describe('Index Component', () => {
  const store = useAppStore.getState();

  beforeEach(() => {
    store.firstName = '';
    store.lastName = '';
  });

  it('should display the default names "John" and "Smith" when `firstName` and `lastName` are not set in the store', () => {
    render(<Index />);
    expect(screen.getByTestId('home').textContent).toBe('Hello John Smith!');
  });

  it('should display the names from the store when `firstName` and `lastName` are set', async () => {
    store.firstName = 'Jane';
    store.lastName = 'Doe';

    render(<Index />);
    expect(screen.getByTestId('home').textContent).toBe('Hello Jane Doe!');
  });

  it('should call `updateFirstName` and `updateLastName` when `firstName` and `lastName` are not set in the store', () => {
    const spyUpdateFirstName = vi.spyOn(store, 'updateFirstName');
    const spyUpdateLastName = vi.spyOn(store, 'updateLastName');
    render(<Index />);
    expect(spyUpdateFirstName).toHaveBeenCalledWith('John');
    expect(spyUpdateLastName).toHaveBeenCalledWith('Smith');
    vi.clearAllMocks();
  });
});
