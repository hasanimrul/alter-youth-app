import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const HeroForm = () => {
  const [scholarships, setScholarships] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const screenWidth = Dimensions.get('window').width;

  const incrementScholarships = () => {
    setScholarships((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const decrementScholarships = () => {
    setScholarships((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <View style={[styles.container, { width: screenWidth - 40 }]}>
      <Text style={styles.title}>
        Join the <Text style={styles.highlight}>#alteryouthrevolution</Text>
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Your email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Your number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <View style={styles.scholarshipContainer}>
          <Text style={styles.label}>Number of Scholarships</Text>
          <View style={styles.counterRow}>
            <View style={styles.counterControls}>
              <TouchableOpacity
                onPress={decrementScholarships}
                disabled={scholarships === 1}
                style={[
                  styles.counterButton,
                  scholarships === 1 && styles.disabledButton,
                ]}
              >
                <Text style={styles.counterText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{scholarships}</Text>
              <TouchableOpacity
                onPress={incrementScholarships}
                disabled={scholarships === 3}
                style={[
                  styles.counterButton,
                  scholarships === 3 && styles.disabledButton,
                ]}
              >
                <Text style={styles.counterText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.costContainer}>
              <Text style={styles.costText}>
                BDT {(1650 * scholarships).toFixed(2)}
              </Text>
              <Text style={styles.costSubText}>/month</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>START NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  highlight: {
    color: '#1dc468',
  },
  form: {
    gap: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  scholarshipContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counterControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: '#1dc468',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  counterText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  counterValue: {
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: '#eee',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  costContainer: {
    alignItems: 'center',
  },
  costText: {
    fontSize: 18,
    fontWeight: '600',
  },
  costSubText: {
    fontSize: 12,
    fontWeight: '400',
  },
  submitButton: {
    backgroundColor: '#1dc468',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HeroForm;
