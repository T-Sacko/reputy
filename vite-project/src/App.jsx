import React from 'react';
import './App.css'; // Import your CSS file
import Navbar from './components/navbar'; // Import your Navbar component
import Phones from './components/phones'; // Import your Phones component
import Text from './components/text'; // Import your Text component
import Mobile from './components/mobile';

function App() {
  return (
    <>
    <div className="desktop">
      <Navbar /> 
      <main>
      <Phones /> 
      <Text /> 
      </main>
    </div>
    <Mobile />
    </>
  );
}

export default App;
