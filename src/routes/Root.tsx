import { Outlet } from 'react-router-dom';

import Aside from '@/components/grid/Aside';
import Footer from '@/components/grid/Footer';
import Header from '@/components/grid/Header';
import Main from '@/components/grid/main/Main';
import Navigation from '@/components/grid/navigation/Navigation';

export default function Root() {
  return (
    <div className="grid">
      <Header />
      <Navigation />
      <Aside variant="left" />
      <Main>
        <Outlet />
      </Main>
      <Aside variant="right" />
      <Footer />
    </div>
  );
}
