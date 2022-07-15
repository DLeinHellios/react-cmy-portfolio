import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';



function App() {
  const [state, setState] = useState(0)

  function setPage(page) {
    setState(page);
  }

  return (
    <div className={`Body-${state}`}>
      <Header />
      <Navbar page={state} setPage={setPage} />
      <Content page={state} />
      <Footer />
    </div>
  );
}

export default App;
