import Header from '@/components/Main/Header'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout
