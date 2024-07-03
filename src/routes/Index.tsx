import { useEffect } from 'react';

import { useAppStore } from '@/store';

export default function Index() {
  const { firstName, lastName, updateFirstName, updateLastName } =
    useAppStore();

  useEffect(() => {
    if (!firstName) updateFirstName('John');
    if (!lastName) updateLastName('Smith');
  }, [firstName, lastName, updateFirstName, updateLastName]);

  return (
    <div data-testid="home">
      Hello {firstName} {lastName}!
    </div>
  );
}
