import { useAppStore } from '@/store';
import { useEffect } from 'react';

export default function Index() {
  const firstName = useAppStore.use.firstName();
  const lastName = useAppStore.use.lastName();
  const updateFirstName = useAppStore.use.updateFirstName();
  const updateLastName = useAppStore.use.updateLastName();

  useEffect(() => {
    if (!firstName) updateFirstName('John');
    if (!lastName) updateLastName('Smith');
  }, [firstName, lastName]);

  return (
    <div data-testid="home">
      Hello {firstName} {lastName}!
    </div>
  );
}
