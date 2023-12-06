import {useState, useEffect} from 'react';
import {Alert, View, Linking, Modal, StyleSheet, Text, Button, Image, TouchableOpacity} from 'react-native';

const ProjectModal = ({props, modalVisible, setModalVisible}) => {

  return (<>

    <Modal
    animationType='fade'
    transparent={true}
    visible={modalVisible}
    >

<View
        style={styles.modalContainer}
        >

<TouchableOpacity
style={styles.dismissModal}
        onPress={() => setModalVisible(false)}
        ><Text style={styles.dismissText}>X</Text></TouchableOpacity>

    <Text style={styles.title}>{props.name}</Text>
    
    <Image
      source={{
        uri: `${props.imgLink}`
      }}
      style={styles.img}
      />

      <Text style={styles.description}>{props.description}</Text>

      <View
      style={styles.buttonWrapper}>

      <TouchableOpacity
      style={styles.button}
      onPress={ async () => {
        const supported = await Linking.canOpenURL(props.homePage);
        if(supported) await Linking.openURL(props.homePage)
        else Alert.alert('A deployed application is not provided.')
      }}
      >
        <Text>Deployed Application</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress={ async () => {
        const supported = await Linking.canOpenURL(props.repoUrl);
        if(supported) await Linking.openURL(props.repoUrl)
        else Alert.alert('A GitHub Repository is not provided.')
      }}
      >
        <Text>GitHub Repository</Text>
      </TouchableOpacity>

</View>

</View>

    </Modal>

    </>);

};
const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 50,
  },
  modalContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dismissModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 50,
  },
  dismissText: {
    fontSize: 30,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#E5E7E9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginLeft: 30,
    marginRight: 30,
  }
});

export default ProjectModal;