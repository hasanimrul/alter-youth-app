import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import NavBar from './src/components/header/Navbar';
import HeroBanner from './src/components/HeroBanner';
import UberScholarship from './src/components/UberScholarship';
import ScholarshipCommunity from './src/components/ScholarshipCommunity';
import Footer from './src/components/Footer';
import CommunityImpact from './src/components/CommunityImpact';
import ScholarshipEligibility from './src/components/ScholarshipEligibility';

function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView>
        <HeroBanner />
        <UberScholarship />
        <ScholarshipCommunity />
        <CommunityImpact />
        <ScholarshipEligibility />
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
