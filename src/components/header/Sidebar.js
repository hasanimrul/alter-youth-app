import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Home from '../../assets/icons/home.svg';
import How from '../../assets/icons/how.svg';
import About from '../../assets/icons/about.svg';
import Collaborate from '../../assets/icons/collaborate.svg';
import Policy from '../../assets/icons/policy.svg';
import Touch from '../../assets/icons/touch.svg';
import App from '../../assets/icons/get-app.svg';
import Login from '../../assets/icons/login.svg';
const Sidebar = ({isOpen, toggle}) => {
  const sidebarStyle = {
    opacity: isOpen ? 1 : 0,
    left: isOpen ? 0 : -250, // Adjust width accordingly
  };

  const handleBackdropClick = e => {
    if (e.target?.id === 'sidebar-backdrop') {
      toggle();
    }
  };

  return (
    <View
      style={[
        styles.backdrop,
        sidebarStyle,
        {display: isOpen ? 'block' : 'none'}, // Hide when not open
      ]}
      onStartShouldSetResponder={handleBackdropClick}
      id="sidebar-backdrop">
      <View style={styles.sidebar}>
        <ScrollView contentContainerStyle={styles.menuList}>
          <View style={[styles.menuItem, styles.menuItemHome]}>
            <Home width={25} height={25} />
            <Text style={[styles.menuText, styles.menuTextHome]}>Home</Text>
          </View>
          <View style={styles.menuItem}>
            <How width={25} height={25} />
            <Text style={styles.menuText}>How</Text>
          </View>
          <View style={styles.menuItem}>
            <About width={25} height={25} />
            <Text style={styles.menuText}>About</Text>
          </View>
          <View style={styles.menuItem}>
            <Collaborate width={25} height={25} />
            <Text style={styles.menuText}>Collaborate</Text>
          </View>
          <View style={styles.menuItem}>
            <Policy width={25} height={25} />
            <Text style={styles.menuText}>Policy</Text>
          </View>
          <View style={styles.menuItem}>
            <App width={25} height={25} />
            <Text style={styles.menuText}>App</Text>
          </View>
          <View style={styles.menuItem}>
            <Login width={25} height={25} />
            <Text style={styles.menuText}>Login</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 20,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 51,
    paddingTop: 24,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  closeText: {
    fontSize: 24,
    color: '#1dc468',
  },
  menuList: {
    paddingTop: 60,
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,

    marginBottom: 10,
  },
  menuItemHome: {
    backgroundColor: '#1dc46825',
  },
  menuTextHome: {
    color: '#1dc468',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Sidebar;
