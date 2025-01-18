import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import PlayBtn from '../assets/icons/play-btn.svg';

const ScholarshipApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    // setIsModalOpen(!isModalOpen);
    console.log('Modal clicked');
  };

  // Disable/enable scrolling based on modal state
  useEffect(() => {
    if (isModalOpen) {
    }
  }, [isModalOpen]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Embark on a scholarship journey</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/ay_video_poster.jpg')}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.playButton}
            onPress={handleModalToggle}>
            <PlayBtn width={24} height={20} />
          </TouchableOpacity>
        </View>
        <Text style={styles.videoDesc}>
          Here's a 100-second video that takes you to a village of Bangladesh
          and shows how your scholarship impacts a day in the life of a student
          who needs it.
        </Text>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={handleModalToggle}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleModalToggle}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            <Video
              source={require('../assets/videos/ay_explainer.mp4')}
              style={styles.video}
              controls
              resizeMode="contain"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingVertical: 20,
  },
  contentContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: 16 / 9,
    overflow: 'hidden',
    // borderRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
    borderRadius: 50,
  },
  videoDesc: {
    fontSize: 14,
    marginVertical: 10,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  textContainer: {
    display: 'flex',
    gap: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    maxWidth: 600,
    height: 400,
    backgroundColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 20,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#000',
  },
  video: {
    flex: 1,
  },
});

export default ScholarshipApp;
