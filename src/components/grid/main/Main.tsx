import './main.scss';

import type { ReactNode } from 'react';

type TMain = {
  children: ReactNode;
};

export default function Main({ children }: TMain) {
  return (
    <main className="bg-grid-main" data-tag-label="<main>">
      {children}
    </main>
  );
}
