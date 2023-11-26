import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Button, Pressable, View, SafeAreaView, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  return (<>

        <Button
        title='Go to Dashboard'
        onPress={() => navigation.navigate('Dashboard', {
            feedback: 'lol',
        })}
        />

    <Text>Home Screen</Text>

    </>);

};
const styles = StyleSheet.create({
  container: {

  },
});

export default HomeScreen;