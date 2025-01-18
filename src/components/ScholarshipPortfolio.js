import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ScholarshipPortfolio = () => {
  const cardInfo = [
    {
      img: require('../assets/images/headteacher.jpg'),
      title: 'Are you a teacher? Get your students listed on the platform.',
      linkText: 'Download the school app',
      footerText: 'Only for Government Primary Schools in Bangladesh',
    },
    {
      img: require('../assets/images/person.jpg'),
      title: 'you can be anywhere in the world.',
      linkText: 'See all scholarships',
      footerText: '',
    },
    {
      img: require('../assets/images/applicant.jpg'),
      title: 'while students get closer to their dreams',
      linkText: 'See all graduates',
      footerText: '',
    },
  ];

  return (
    <View style={styles.container}>
      {cardInfo.map((info, i) => (
        <PortfolioCard info={info} key={i} index={i} />
      ))}
    </View>
  );
};

const PortfolioCard = ({info, index}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log('Navigate')}>
      <ImageBackground
        source={info.img}
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <View style={styles.content}>
          <View>
            <Text
              style={[
                styles.title,
                index === 1 && styles.titleSmall,
                index === 2 && styles.titleMedium,
              ]}>
              {info.title}
            </Text>
            <Text style={styles.linkText}>
              {info.linkText}
              <Text style={styles.arrow}> →</Text>
            </Text>
          </View>
          {info.footerText ? (
            <Text style={styles.footerText}>{info.footerText}</Text>
          ) : null}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 15,
  },
  card: {
    height: 450,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageStyle: {
    borderRadius: 15,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    maxWidth: '70%',
  },
  titleSmall: {
    maxWidth: '50%',
  },
  titleMedium: {
    maxWidth: '60%',
  },
  linkText: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  arrow: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ScholarshipPortfolio;
