import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
// import Sidebar from '../mobileMenu/Sidebar';
import Logo from '../../assets/icons/blue-logo.svg';
import HamburgerMenu from '../../assets/icons/blue-hamburger.svg';

const NavBar = ({toggle, isOpen}) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log('Logo Pressed')}>
          <HamburgerMenu width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggle}>
          <Logo width={200} height={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute', // Ensures fixed positioning at the top
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    backgroundColor: 'white', // Adjust as needed
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android shadow
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default NavBar;