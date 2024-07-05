import './error-page.scss';

import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

function errorMessage(error: unknown): string {
  switch (true) {
    case isRouteErrorResponse(error): {
      return `${error.status} ${error.statusText}`;
    }
    case error instanceof Error: {
      return error.message;
    }
    case typeof error === 'string': {
      return error;
    }
    default: {
      console.error(error);
      return 'Unknown error';
    }
  }
}

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container error-page-wrapper">
      <h1>Oops!</h1>
      <p>
        Sorry, an unexpected error has occurred.
        <br />
        Go back to <Link to="/">Home</Link>.
      </p>
      <p>
        <i data-testid="error-message">{errorMessage(error)}</i>
      </p>
    </div>
  );
}
