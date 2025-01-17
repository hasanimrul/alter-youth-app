import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import NavBar from './components/header/Navbar';
import HeroBanner from './components/HeroBanner';
import UberScholarship from './components/UberScholarship';
import ScholarshipCommunity from './components/ScholarshipCommunity';
import Footer from './components/elements/Footer';

function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView>
        <HeroBanner />
        <UberScholarship />
        <ScholarshipCommunity />
      <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
