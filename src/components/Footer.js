import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';

const facebookIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
`;

const instagramIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
`;

const Footer = () => {
  return (
    <View contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Learn About AlterYouth</Text>
        <View style={styles.linksSection}>
          <View>
            <Text style={styles.link} onPress={() => Linking.openURL('/')}>Home</Text>
            <Text style={styles.link} onPress={() => Linking.openURL('/')}>About us</Text>
            <Text style={styles.link} onPress={() => Linking.openURL('/')}>How it works</Text>
            <Text style={styles.link} onPress={() => Linking.openURL('/')}>Scholarship policy</Text>
            <Text style={styles.link} onPress={() => Linking.openURL('/')}>Get the app</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <Text style={styles.subtitle}>Towards a literate Bangladesh</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/alteryouth')}>
            <SvgXml xml={facebookIcon} width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/alteryouthapp/#')}>
            <SvgXml xml={instagramIcon} width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 AlterYouth Limited</Text>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>Terms of Service</Text>
            <Text style={styles.footerDot}>.</Text>
            <Text style={styles.footerLink}>Privacy Policy</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  content: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 15,
    paddingVertical:20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  linksSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  link: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  separator: {
    height: 2,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  footer: {
    flexDirection: 'column',
    gap: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#777',
  },
  footerLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 12,
    color: '#1dc468',
    marginHorizontal: 5,
  },
  footerDot: {
    fontSize: 12,
    color: '#777',
  },
});

export default Footer;
