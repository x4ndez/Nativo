import {useState, useEffect} from 'react';
import {TouchableOpacity, Modal, StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavModal = (props) => {

  const navigation = useNavigation();

  return (<>

<Modal
      animationType='fade'
      transparent={true}
      visible={props.modalVisible}
      >
        <TouchableWithoutFeedback onPress={() => props.setModalVisible(false)}>

        <View
        style={styles.modalContainer}
        >

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

        </TouchableWithoutFeedback>
        
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
  menuImg: {
    width: 25,
    height: 25,
  },
  modalContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)',
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