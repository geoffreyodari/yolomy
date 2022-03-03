
import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import '../styles/App.css';

function App() {
  return (
    <React.Fragment>
      <div className='container-fluid'>
        <Header />
        <AboutUs />
      </div>
    </React.Fragment>
  );
}

export default App;
