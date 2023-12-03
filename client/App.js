import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Button, Text, Pressable, View, SafeAreaView, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import Header from './components/Header';

const Stack = createNativeStackNavigator();

const App = () => {

  const handlePress = () => console.log('view clicked');

  return (<>

    <NavigationContainer>

      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerTitle: (props) => <Header {...props} />,
        headerRight: () => (
          <Button
          title='INFO'
          onPress={() => alert('lol u see dat?')}
          />
        )
      }}
      >
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>

    </NavigationContainer>

    </>);

};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;