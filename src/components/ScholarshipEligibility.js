import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import DisabledFather from '../assets/icons/DisabledFather.svg';
import SingleMother from '../assets/icons/SingleMother.svg';
import Orphan from '../assets/icons/Orphan.svg';

const ScholarshipEligibility = () => {
  const eligibilityOptions = [
    {
      icon: <DisabledFather />,
      title: 'Disabled Father',
      desc: "Student's father is physically unable to work",
    },
    {
      icon: <SingleMother />,
      title: 'Single Mother',
      desc: "Student's father is deceased or has abandoned the family",
    },
    {
      icon: <Orphan />,
      title: 'Orphan',
      desc: 'Both parents are deceased or have abandoned the child',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Scholarship Eligibility</Text>
        <Text style={styles.subHeader}>
          Only students who are currently enrolled in Government Primary Schools
          and fall under any of the following criteria are eligible to apply for
          scholarships
        </Text>
      </View>

      <View style={styles.cardsContainer}>
        {eligibilityOptions.map((option, index) => (
          <EligibilityCard option={option} key={index} />
        ))}
      </View>
      <View style={styles.separator} />
    </ScrollView>
  );
};

const EligibilityCard = ({option}) => {
  return (
    <View style={styles.card}>
      <View>{option.icon}</View>
      <View>
        <Text style={styles.cardTitle}>{option.title}</Text>
        <Text style={styles.cardDesc}>{option.desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 14,
    lineHeight: 20,
  },
  cardsContainer: {
    flexDirection: 'column',
    gap: 20,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    marginHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDesc: {
    maxWidth: '95%',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
});

export default ScholarshipEligibility;
