import ErrorPage from './ErrorPage/ErrorPage';
import About from './About';
import Index from './Index';
import Root from './Root';

export const routesConfig = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
];
