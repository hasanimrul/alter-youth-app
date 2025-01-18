import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import GoogleSvg from '../assets/icons/Google.svg';

const Association = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.boxedContent}>
        {/* Title */}
        <Text style={styles.title}>In Association With</Text>

        {/* Grid Section */}
        <View style={styles.grid}>
          {/* First Item */}
          <View style={styles.item}>
            <Image
              source={require('../assets/images/undp.jpg')}
              style={styles.imageSmall}
              resizeMode="contain"
            />
            <Text style={styles.itemText}>
              "Asia Pacific {'\n'} SDG Enterprise Award"
            </Text>
          </View>

          <View style={styles.dividerHorizontal} />

          {/* Second Item */}
          <View style={styles.item}>
            <Image
              source={require('../assets/images/expo.png')}
              style={styles.imageSmall}
              resizeMode="contain"
            />
          </View>
          <View style={styles.dividerHorizontal} />
          {/* Third Item */}
          <View style={styles.google}>
            <GoogleSvg width={150} height={50} />
            <Text style={styles.itemText}>
              Winner of Google Business Group Stories
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 20,
    // paddingHorizontal: 20,
  },
  boxedContent: {
    // paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  imageSmall: {
    width: '33%',
    height: undefined,
    aspectRatio: 1, // Adjust aspect ratio for images
  },
  imageLarge: {
    width: '50%',
    height: undefined,
    aspectRatio: 1, // Adjust aspect ratio for larger images
  },
  itemText: {
    fontSize: 12,
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  google: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dividerHorizontal: {
    height: 1,
    width: '90%',
    backgroundColor: '#d1d5db',
    marginVertical: 20,
  },
});

export default Association;
