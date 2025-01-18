import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  Pressable,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const GovtPrimarySchools = () => {
  const scrollViewRef = useRef(null);
  const schools = [
    {
      img: require('../assets/images/school1.jpeg'),
      name: 'Agla Government Primary School',
      location: 'Kayetpara, Bangladesh',
      applicants: '6 Scholarship Applicants',
      details:
        'Established in 1992 in Kayetpara, Bangladesh. It now hosts 32 Students taught by 3 Teachers.',
      teacher: {
        name: 'Moshiur Rahman',
        img: require('../assets/images/ht1.jpeg'),
        post: 'Class Teacher',
        quote: 'There is no alternate way to success other than education',
      },
    },
    {
      img: require('../assets/images/school2.jpeg'),
      name: 'Kanchan Government Primary School',
      location: 'Kanchan, Bangladesh',
      applicants: '10 Scholarship Applicants',
      details:
        'Established in 2001 in Kanchan, Bangladesh. It now hosts 41 Students taught by 5 Teachers.',
      teacher: {
        name: 'Shilpi Begum',
        img: require('../assets/images/ht2.jpeg'),
        post: 'Class Teacher',
        quote:
          'Be a wonderful role model because you will be the window through which many children will see their future',
      },
    },
    {
      img: require('../assets/images/school3.jpeg'),
      name: 'Daudpur Government Primary School',
      location: 'Daudpur, Bangladesh',
      applicants: '9 Scholarship Applicants',
      details:
        'Established in 1996 in Daudpur, Bangladesh. It now hosts 28 Students taught by 3 Teachers.',
      teacher: {
        name: 'Nusrat Parvin',
        img: require('../assets/images/ht3.jpeg'),
        post: 'Class Teacher',
        quote:
          'Live as if you were to die tomorrow. Learn as if you were to live forever.',
      },
    },
    {
      img: require('../assets/images/school4.jpeg'),
      name: 'Kendua Government Primary School',
      location: 'Golakandail, Bangladesh',
      applicants: '13 Scholarship Applicants',
      details:
        'Established in 1988 in Golakandail, Bangladesh. It now hosts 54 Students taught by 6 Teachers.',
      teacher: {
        name: 'Ataur Alam',
        img: require('../assets/images/ht4.jpeg'),
        post: 'Class Teacher',
        quote: 'Education is the best weapon you can use to change the world',
      },
    },
    {
      img: require('../assets/images/school5.jpeg'),
      name: 'Bhulta Government Primary School',
      location: 'Bhulta, Bangladesh',
      applicants: '12 Scholarship Applicants',
      details:
        'Established in 1985 in Bhulta, Bangladesh. It now hosts 45 Students taught by 3 Teachers.',
      teacher: {
        name: 'Tanjiba Jerin',
        img: require('../assets/images/ht5.jpeg'),
        post: 'Class Teacher',
        quote: 'The pen is mightier than the sword',
      },
    },
    {
      img: require('../assets/images/school6.jpeg'),
      name: 'Deboi Government Primary School',
      location: 'Rupganj, Bangladesh',
      applicants: '11 Scholarship Applicants',
      details:
        'Established in 1992 in Rupganj, Bangladesh. It now hosts 24 Students taught by 2 Teachers.',
      teacher: {
        name: 'Dipa Das',
        img: require('../assets/images/ht6.jpeg'),
        post: 'Class Teacher',
        quote:
          "A teacher's influence never stops, it goes on till the day you die",
      },
    },
    {
      img: require('../assets/images/school7.jpeg'),
      name: 'Birabo Government Primary School',
      location: 'Bholabo, Bangladesh',
      applicants: '9 Scholarship Applicants',
      details:
        'Established in 1992 in Bholabo, Bangladesh. It now hosts 18 Students taught by 2 Teachers.',
      teacher: {
        name: 'Pori Bhanu Akhter',
        img: require('../assets/images/ht7.jpeg'),
        post: 'Class Teacher',
        quote:
          'A good education can change anyone. A good teacher can change everything.',
      },
    },
  ];

  const [selectedSchool, setSelectedSchool] = useState(null);

  const openModal = school => {
    setSelectedSchool(school);
  };

  const closeModal = () => {
    setSelectedSchool(null);
  };
  const infiniteSchools = [...schools, ...schools];
  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;

    // Reset scroll position when reaching the end or the beginning
    if (contentOffsetX >= contentWidth - screenWidth) {
      scrollViewRef.current.scrollTo({x: 0, animated: false});
    } else if (contentOffsetX <= 0) {
      scrollViewRef.current.scrollTo({x: contentWidth / 2, animated: false});
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Students from Government {'\n'} Primary Schools Nationwide
      </Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        snapToAlignment="center"
        decelerationRate="fast"
        pagingEnabled>
        {infiniteSchools.map((school, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => openModal(school)}>
            <Image
              source={school.img}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.schoolName}>{school.name}</Text>
            <Text style={styles.location}>{school.location}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal */}
      {selectedSchool && (
        <Modal
          transparent
          visible={!!selectedSchool}
          animationType="slide"
          onRequestClose={closeModal}>
          <Pressable style={styles.backdrop} onPress={closeModal}>
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>&times;</Text>
              </TouchableOpacity>
              <Image source={selectedSchool.img} style={styles.schoolImage} />
              <View style={styles.content}>
                <Text style={styles.schoolName}>{selectedSchool.name}</Text>
                <Text style={styles.applicants}>
                  {selectedSchool.applicants}
                </Text>
                <View style={styles.locationContainer}>
                  <Text style={styles.locationText}>
                    {selectedSchool.location}
                  </Text>
                </View>
                <Text style={styles.details}>{selectedSchool.details}</Text>
                <View style={styles.divider} />
                <View style={styles.teacherInfo}>
                  <Image
                    source={selectedSchool.teacher.img}
                    style={styles.teacherImage}
                  />
                  <View>
                    <Text style={styles.teacherName}>
                      {selectedSchool.teacher.name}
                    </Text>
                    <Text style={styles.teacherPost}>
                      {selectedSchool.teacher.post}
                    </Text>
                  </View>
                </View>
                <View style={styles.teacherQuoteContainer}>
                  <Text style={styles.teacherQuote}>
                    "{selectedSchool.teacher.quote}"
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingVertical: 20,
  },
  scrollContainer: {
    // paddingHorizontal: 10,
    alignItems: 'center',
  },
  card: {
    width: screenWidth * 0.9,
    marginHorizontal: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  location: {
    fontSize: 14,
    color: '#555',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'black',
  },
  schoolImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 15,
  },
  applicants: {
    fontSize: 14,
    color: 'white',
    backgroundColor: '#1dc468',
    paddingHorizontal: 5,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 14,
    color: '#1dc468',
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  teacherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  teacherImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  teacherPost: {
    fontSize: 14,
    color: '#666',
  },
  teacherQuoteContainer: {
    marginTop: 10,
  },
  teacherQuote: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default GovtPrimarySchools;
