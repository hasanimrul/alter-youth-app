import React from 'react';
import {ScrollView} from 'react-native';

import NavBar from './components/header/Navbar';
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <ScrollView>
      <NavBar />
      <HeroBanner />
    </ScrollView>
  );
}


export default App;
