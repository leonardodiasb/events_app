import React from 'react';
import {Footer} from '../Footer/footer';
import {Header} from '../Header/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
