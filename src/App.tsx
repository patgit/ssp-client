import React from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Background from './components/Background/Background';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Background />
      <Footer />
    </div>
  );
}

export default App;
