import React from 'react';

import useFetch from './hooks/useFetch';

import Header from './components/header/Header';
import Content from './components/content/Content';

import './CurriculumApp.css';

function CurriculumApp() {

  return (
    <div className="App">
      <div>
      <Header />
      <Content />
      </div>
    </div>
  );
}

export default CurriculumApp;
