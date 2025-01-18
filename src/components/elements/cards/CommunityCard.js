import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CommunityCard = ({info}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.username}>@{info.user}</Text>
          <View style={styles.flag}>{info.flag}</View>
        </View>
        <Text style={styles.joinedText}>Joined today</Text>
      </View>
      <Text style={styles.scholarshipCount}>
        {info.student.length} Scholarship{info.student.length > 1 ? 's' : ''}
      </Text>
      {info.student.map((stud, i) => (
        <View key={i} style={styles.studentInfo}>
          <Image source={stud.img} style={styles.studentImage} />
          <View>
            <Text style={styles.studentName}>{stud.name}</Text>
            <Text style={styles.studentSchool}>{stud.school}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  flag: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  joinedText: {
    fontSize: 10,
    color: '#A0A0A0',
  },
  scholarshipCount: {
    fontSize: 12,
    backgroundColor: '#1dc4681a',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#1dc468',
    maxWidth:'35%',
    marginBottom: 10,
  },
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  studentImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  studentName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  studentSchool: {
    fontSize: 12,
    color: '#A0A0A0',
  },
});

export default CommunityCard;
