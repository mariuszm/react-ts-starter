import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { routesConfig } from '@/routes/_config';

test('App routing is working properly', async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ['/'],
    initialIndex: 1,
  });

  const { getByTestId } = render(<RouterProvider router={router} />);

  expect(getByTestId('grid')).toBeInTheDocument();
  expect(getByTestId('home')).toBeInTheDocument();

  fireEvent.click(getByTestId('link-about'));

  await waitFor(() => getByTestId('about'));

  expect(getByTestId('about')).toBeInTheDocument();
});
