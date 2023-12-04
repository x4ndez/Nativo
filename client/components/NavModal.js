import React, {useState} from 'react';
import {Alert, TouchableOpacity, Modal, StyleSheet, Text, Button, Pressable, View, SafeAreaView, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const NavModal = (props) => {

  const navigation = useNavigation();

  return (<>

<Modal
      animationType='fade'
      transparent={true}
      visible={props.modalVisible}
      >
        <View
        style={styles.modalContainer}
        >

<TouchableOpacity
style={styles.dismissModal}
        onPress={() => props.setModalVisible(false)}
        ><Text>X</Text></TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          props.setModalVisible(false);
          navigation.navigate('Home')}
        }
        >
          <Text style={styles.modalLink}>home</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => {
            props.setModalVisible(false);
            navigation.navigate('Dashboard')}
          }
          >
          <Text style={styles.modalLink}>portfolio</Text>
          </TouchableOpacity>

        </View>
        
      </Modal>

          <TouchableOpacity
          onPress={() => props.setModalVisible(true)}
          >
            <Image
            style={styles.menuImg}
            source={require('../assets/icons/menu.png')}
            />
          </TouchableOpacity>

    </>);

};
const styles = StyleSheet.create({
  container: {

  },
  menuImg: {
    width: 25,
    height: 25,
  },
  modalContainer: {
    opacity: 0.9,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 80,
    paddingRight: 50,
  },
  dismissModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 50,
  },
  modalLink: {
    color: 'black',
    fontSize: 50,
    marginTop: 30,
  }
});

export default NavModal;