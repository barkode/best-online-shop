import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { ScrollToTopButton } from 'components/ScrollToTopButton/ScrollToTopButton';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};
