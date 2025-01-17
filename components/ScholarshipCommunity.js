import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CommunityCard from './elements/cards/CommunityCard';
import AuFlag from '../assets/icons/au.svg';
import USFlag from '../assets/icons/us.svg';

const ScholarshipCommunity = () => {
  const community = [
    {
      user: 'habib2588',
      flag: <AuFlag />,
      student: [
        {
          img: require('../assets/images/stu1.webp'),
          name: 'Sajid Hasan, Class 4',
          school: 'Jalashi Government Primary School',
        },
        {
          img: require('../assets/images/stu1.webp'),
          name: 'Sajid Hasan, Class 4',
          school: 'Jalashi Government Primary School',
        },
      ],
    },
    {
      user: 'shihab2728',
      flag: <USFlag />,
      student: [
        {
          img: require('../assets/images/stu1.webp'),
          name: 'Sajid Hasan, Class 4',
          school: 'Jalashi Government Primary School',
        },
      ],
    },
    {
      user: 'habib2588',
      flag: <AuFlag />,
      student: [
        {
          img: require('../assets/images/stu1.webp'),
          name: 'Sajid Hasan, Class 4',
          school: 'Jalashi Government Primary School',
        },
      ],
    },
    {
      user: 'shihab2728',
      flag: <USFlag />,
      student: [
        {
          img: require('../assets/images/stu1.webp'),
          name: 'Sajid Hasan, Class 4',
          school: 'Jalashi Government Primary School',
        },
        {
          img: require('../assets/images/stu1.webp'),
          name: 'Sajid Hasan, Class 4',
          school: 'Jalashi Government Primary School',
        },
        {
          img: require('../assets/images/stu1.webp'),
          name: 'Sajid Hasan, Class 4',
          school: 'Jalashi Government Primary School',
        },
      ],
    },
    {
      user: 'habib2588',
      flag: <AuFlag />,
      student: [
        {
          img: require('../assets/images/stu1.webp'),
          name: 'Sajid Hasan, Class 4',
          school: 'Jalashi Government Primary School',
        },
      ],
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tagline}>#alteryouthrevolution</Text>
        <Text style={styles.title}>The Scholarship Community</Text>
        <Text style={styles.description}>
          Despite public primary schools being free of cost in Bangladesh, many
          students still drop out of school to work and earn in order to support
          their families. Your scholarship helps a child attend school and
          support their families at the same time.
        </Text>
      </View>
      <View style={styles.cardContainer}>
        {community.map((info, index) => (
          <CommunityCard info={info} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tagline: {
    fontSize: 18,
    color: '#1dc468',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    lineHeight: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
});

export default ScholarshipCommunity;
