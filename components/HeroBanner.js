import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import HeroForm from './elements/form/HeroForm';



const HeroBanner = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../assets/images/hero_home_phone.jpg')}
        style={[styles.heroImage, {width: screenWidth}]}
      />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heroTitle}>Start your{'\n'}scholarship</Text>
          <Text style={styles.heroSubtitle}>
            Directly for students in Government Primary Schools throughout
            Bangladesh
          </Text>
        </View>
        <HeroForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  heroImage: {
    height: 450,
    resizeMode: 'cover',
  },
  contentContainer: {
    marginTop: -200,
    paddingHorizontal: 20,
  },
  textContainer: {
    marginHorizontal: 20,
    gap: 10,
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  heroSubtitle: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 25,
  },
  formContainer: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
  },
  formText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 16,
  },
});

export default HeroBanner;
