
import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import Footer from './Footer.js'
import ProductList from './ProductList';
import '../styles/app.css';

function App() {
  return (
    <React.Fragment>
      <div className='container-fluid'>
        <Header />
        <AboutUs />
        <Footer />
        <ProductList />
      </div>
    </React.Fragment>
  );
}

export default App;
