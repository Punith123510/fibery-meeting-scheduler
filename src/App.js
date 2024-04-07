import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FiberyDemo from './components/FiberyDemo';
//import Calendar from './components/Calendar';
//import HomePage from './components/HomePagr';
import Pricing from './components/Pricing';
import './App.css'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col py-10">
    <Header />
      <main className="flex-grow container mx-auto ">
        <div >
          
        <Pricing />
        
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;