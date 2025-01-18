import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const CommunityImpact = () => {
  const scrollViewRef = useRef(null);

  const communityImages = [
    require('../assets/images/community_1.jpg'),
    require('../assets/images/community_2.jpg'),
    require('../assets/images/community_3.jpg'),
    require('../assets/images/community_4.jpg'),
    require('../assets/images/community_5.jpg'),
    require('../assets/images/community_6.jpg'),
    require('../assets/images/community_7.jpg'),
    require('../assets/images/community_8.jpg'),
    require('../assets/images/community_9.jpg'),
    require('../assets/images/community_10.jpg'),
    require('../assets/images/community_11.jpg'),
    require('../assets/images/community_12.jpg'),
    require('../assets/images/community_13.jpg'),
    require('../assets/images/community_14.jpg'),
    require('../assets/images/community_15.jpg'),
    require('../assets/images/community_16.jpg'),
    require('../assets/images/community_17.jpg'),
    require('../assets/images/community_18.jpg'),
  ];

  const infiniteImages = [...communityImages, ...communityImages];
  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const contentWidth = event.nativeEvent.contentSize.width;

    // Reset scroll position when reaching the end or the beginning
    if (contentOffsetX >= contentWidth - width) {
      scrollViewRef.current.scrollTo({x: 0, animated: false});
    } else if (contentOffsetX <= 0) {
      scrollViewRef.current.scrollTo({x: contentWidth / 2, animated: false});
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Text style={styles.title}>Community Impact</Text>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        onScroll={handleScroll}
        scrollEventThrottle={20} // Controls how often the `onScroll` event is triggered
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
        pagingEnabled>
        {infiniteImages.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </ScrollView>
      <Text style={styles.description}>
        Every scholarship begins with shipping a mobile phone to the parent of
        the student. Then they create their own mobile bank account using that
        phone, to start receiving their child's scholarships directly, every
        month.
      </Text>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#fff',
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    paddingHorizontal: 10,
  },
  slide: {
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
});

export default CommunityImpact;
