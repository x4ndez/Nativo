import {useState, useEffect} from 'react';
import {Alert, Linking, Modal, StyleSheet, Text, Button, Image} from 'react-native';

const ProjectModal = ({props, modalVisible, setModalVisible}) => {

  return (<>

    <Modal
    animationType='fade'
    transparent={false}
    visible={modalVisible}
    >

<Button
title='X'
onPress={() => setModalVisible(false)}
/>

    <Text>{props.name}</Text>
    
    <Image
      source={{
        uri: `${props.imgLink}`
      }}
      style={styles.img}
      />

      <Text>{props.description}</Text>

      <Button
      title='Deployed Application'
      onPress={ async () => {
        const supported = await Linking.canOpenURL(props.homePage);
        if(supported) await Linking.openURL(props.homePage)
        else Alert.alert('A deployed application is not provided.')
      }}
      />
      <Button
      title='GitHub Repository'
      onPress={ async () => {
        const supported = await Linking.canOpenURL(props.repoUrl);
        if(supported) await Linking.openURL(props.repoUrl)
        else Alert.alert('A GitHub Repository is not provided.')
      }}
      />

    </Modal>

    </>);

};
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
});

export default ProjectModal;