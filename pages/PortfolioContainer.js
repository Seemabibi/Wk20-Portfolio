import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MyBlog from './pages/MyProjects';
import ContactMe from './pages/ContactMe';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'MyProjects') {
      return <MyBlog />;
    }
    return <ContactMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {}
      {renderPage()}
    </div>
  );
}