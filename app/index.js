import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WhereToAndFilterScreen from './whereToAndFilter';

// Create a stack navigator
const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Navigate to the WhereToAndFilter screen
    navigation.navigate('WhereToAndFilter');
  };

  const handleSignUp = () => {
    // Code to handle sign up button press
    alert('Sign Up button pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buddie-Up</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Login" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer independent ={true}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="WhereToAndFilter" component={WhereToAndFilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'green',
    fontWeight: 'bold',
  },
});
