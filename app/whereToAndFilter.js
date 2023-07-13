import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
const WhereToAndFilterScreen = ({ navigation }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedMajors, setSelectedMajors] = useState([]);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);

  const handleSearch = () => {
    // Navigate to the Directions screen
    navigation.navigate('Directions');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Where To</Text>
          <Text style={styles.buttonIcon}>🔍</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.selectContainer}>
        <Text style={styles.selectLabel}>Languages:</Text>
        <Picker
          selectedValue={selectedLanguages}
          onValueChange={(itemValue) => setSelectedLanguages(itemValue)}
          mode="multiple"
          prompt="Select Languages"
        >
          <Picker.Item label="Select All" value="all" />
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Spanish" value="spanish" />
          <Picker.Item label="Chinese" value="chinese" />
          <Picker.Item label="Japanese" value="japanese" />
          <Picker.Item label="Korean" value="korean" />
          <Picker.Item label="Indian" value="indian" />
          <Picker.Item label="Arabic" value="arabic" />
        </Picker>
      </ScrollView>
      <ScrollView style={styles.selectContainer}>
        <Text style={styles.selectLabel}>Majors:</Text>
        <Picker
          selectedValue={selectedMajors}
          onValueChange={(itemValue) => setSelectedMajors(itemValue)}
          mode="multiple"
          prompt="Select Majors"
        >
          <Picker.Item label="Select All" value="all" />
          <Picker.Item label="Computer Liberal Arts and Science" value="computer" />
          <Picker.Item label="Engineer" value="engineer" />
          <Picker.Item label="Science" value="science" />
          <Picker.Item label="Math" value="math" />
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Art" value="art" />
          <Picker.Item label="Business" value="business" />
          <Picker.Item label="Education" value="education" />
          <Picker.Item label="Nursing" value="nursing" />
          <Picker.Item label="Pharmacy" value="pharmacy" />
          <Picker.Item label="Public Health" value="public_health" />
          <Picker.Item label="Urban Planning and Public Affairs" value="urban_planning" />
        </Picker>
      </ScrollView>
      <ScrollView style={styles.selectContainer}>
        <Text style={styles.selectLabel}>Age:</Text>
        <Picker
          selectedValue={selectedAges}
          onValueChange={(itemValue) => setSelectedAges(itemValue)}
          mode="multiple"
          prompt="Select Age"
        >
          <Picker.Item label="Select All" value="all" />
          <Picker.Item label="18-25" value="18-25" />
          <Picker.Item label="26-35" value="26-35" />
          <Picker.Item label="36-45" value="36-45" />
          <Picker.Item label="46 and above" value="46+" />
        </Picker>
      </ScrollView>
      <ScrollView style={styles.selectContainer}>
        <Text style={styles.selectLabel}>Gender:</Text>
        <Picker
          selectedValue={selectedGenders}
          onValueChange={(itemValue) => setSelectedGenders(itemValue)}
          mode="multiple"
          prompt="Select Gender"
        >
          <Picker.Item label="Select All" value="all" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </ScrollView>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton} onPress={() => {}}>
          <Text style={styles.tabText}>Home</Text>
          {/* Add home icon */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.tabText}>Profile</Text>
          {/* Add profile icon */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  searchButton: {
    flexDirection: 'row',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonIcon: {
    fontSize: 20,
    color: 'white',
  },
  selectContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default WhereToAndFilterScreen;
