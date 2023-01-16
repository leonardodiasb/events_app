import React from 'react';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
