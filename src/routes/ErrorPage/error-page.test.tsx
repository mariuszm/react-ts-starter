import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { routesConfig } from '../_config';

const error = new Error('Test error message');
vi.mock('react-router-dom', async importOriginal => {
  const mod: object = await importOriginal();
  return {
    ...mod,
    useRouteError: vi.fn(() => error),
  };
});

describe('ErrorPage', () => {
  it('should render the correct error message based on the error type', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/loremipsum'],
      initialIndex: 1,
    });

    const { getByTestId } = render(<RouterProvider router={router} />);

    expect(getByTestId('error-message')).toBeInTheDocument();
    expect(screen.getByTestId('error-message').textContent).toBe(error.message);
  });
});
