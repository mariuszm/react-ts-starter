import { renderHook, waitFor } from '@testing-library/react';

import { useAppStore } from '.';

describe('useAppStore', () => {
  it('updateFirstName updates firstName', async () => {
    const { result } = renderHook(() => useAppStore());
    await waitFor(() => result.current.updateFirstName('John'));
    expect(result.current.firstName).toBe('John');
  });

  it('reset resets store', async () => {
    const { result } = renderHook(() => useAppStore());
    await waitFor(() => result.current.updateFirstName('John'));
    await waitFor(() => result.current.updateLastName('Doe'));
    await waitFor(() => result.current.reset());
    expect(result.current.firstName).toBe(null);
    expect(result.current.lastName).toBe(null);
  });

  it('updateLastName updates lastName', async () => {
    const { result } = renderHook(() => useAppStore());
    await waitFor(() => result.current.updateLastName('Doe'));
    expect(result.current.lastName).toBe('Doe');
  });
});
