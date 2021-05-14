import { StatusBar } from 'expo-status-bar';
//import React, { Component } from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CounterApp from './Counter';

/*class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  onPressCountButton = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Count is {this.state.count}</Text>
        <Button onPress={this.onPressCountButton}
          title="Increase Count"
          color="#841584">
          <Text>Click</Text>
        </Button>
        <StatusBar style="auto" />
      </View>
    );
  }
}*/

const Stack = createStackNavigator();

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  onPressCountButton = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Count" component={CountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>This is {route.params.name}'s profile</Text>
      <Button
        title="Go to Counter"
        onPress={() =>
          navigation.navigate('Count', { name: 'Jane' })
        }
      />
    </View>
  );
};
const CountScreen = ({ navigation, route }) => {
  return (
    <CounterApp />
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default App;