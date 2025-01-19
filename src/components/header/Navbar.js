import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Logo from '../../assets/icons/blue-logo.svg';
import HamburgerMenu from '../../assets/icons/blue-hamburger.svg';
import Close from '../../assets/icons/close.svg';
import Sidebar from './Sidebar';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Render Sidebar */}
      <Sidebar isOpen={isMenuOpen} toggle={toggleMenu} />
      <View style={styles.header}>
        <View style={styles.container}>
          {isMenuOpen ? (
            <TouchableOpacity onPress={toggleMenu}>
              <Close width={40} height={40} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={toggleMenu}>
              <HamburgerMenu width={30} height={30} />
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Logo width={200} height={40} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default NavBar;
