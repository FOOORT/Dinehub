import Footer from '@/components/Main/Footer'
import Header from '@/components/Main/Header'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout
