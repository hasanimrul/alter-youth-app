import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const SchoolModal = ({school, onClose}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (school) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [school]);

  if (!school) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <Modal
      transparent
      visible={isVisible}
      animationType="slide"
      onRequestClose={handleClose}>
      <Pressable style={styles.backdrop} onPress={handleClose}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeButtonText}>&times;</Text>
          </TouchableOpacity>
          <Image source={school.img} style={styles.schoolImage} />
          <View style={styles.content}>
            <Text style={styles.schoolName}>{school.name}</Text>
            <Text style={styles.applicants}>{school.applicants}</Text>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>{school.location}</Text>
            </View>
            <Text style={styles.details}>{school.details}</Text>
            <View style={styles.divider} />
            <View style={styles.teacherInfo}>
              <Image source={school.teacher.img} style={styles.teacherImage} />
              <View>
                <Text style={styles.teacherName}>{school.teacher.name}</Text>
                <Text style={styles.teacherPost}>{school.teacher.post}</Text>
              </View>
            </View>
            <View style={styles.teacherQuoteContainer}>
              <Text style={styles.teacherQuote}>"{school.teacher.quote}"</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 15,
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
  schoolName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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
    color: '#1dc468',
  },
});

export default SchoolModal;
