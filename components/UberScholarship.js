import React from 'react';
import AppStore from '../assets/icons/appstore_small.svg';
import PlayStore from '../assets/icons/playstore_small.svg';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const UberScholarship = () => {
  const scholarshipsReports = [
    {
      img: require('../assets/images/app_scholarship.jpg'),
      title: 'Transfer Directly',
      desc: "Your scholarship is transferred directly to your student's family on their mobile bank account.",
    },
    {
      img: require('../assets/images/app_school.png'),
      title: 'Get school reports',
      desc: "View attendance data and report cards from your student's school, until completion of Class 5.",
    },
    {
      img: require('../assets/images/app_graduation.png'),
      title: 'Ensure a literate citizen',
      desc: 'Your scholarship continues until completion of class 5, when your student achieves literacy.',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>The Uber for Scholarships</Text>
          <Text style={styles.subtitle}>
            A platform connecting the world with financially struggling students
            in Government Primary Schools of Bangladesh
          </Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <AppStore width={150} height={50} />
            </TouchableOpacity>
            <TouchableOpacity>
              <PlayStore width={150} height={50} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          {scholarshipsReports.map((report, i) => (
            <View style={styles.card} key={i}>
              <Image source={report.img} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{report.title}</Text>
              <Text style={styles.cardDesc}>{report.desc}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666666',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'start',
    gap: 20,
    paddingVertical: 20,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
  },
  cardImage: {
    width: 200,
    height: 400,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666666',
    maxWidth: 250,
    lineHeight:25,
  },
});

export default UberScholarship;
