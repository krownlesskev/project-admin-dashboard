import React from 'react';
import './Content.styles.scss';
import Header from './header/Header';
import Main from './main/Main';

const Content = () => {
  return (
    <div className='content-container'>
      <Header />
      <Main />
    </div>
  );
};

export default Content;