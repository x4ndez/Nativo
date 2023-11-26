import React, {useState} from 'react';
import {Alert, Linking, TouchableOpacity, Modal, StyleSheet, Text, Button, Pressable, View, SafeAreaView, Image, FlatList} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const ProjectItem = ({navigation, props}) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (<>

    {/* <FlatList> */}

    <Modal
    animationType='fade'
    transparent={false}
    visible={modalVisible}
    // presentationStyle='fullScreen'
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

    <TouchableOpacity
    style={styles.wrapper}
    onPress={() => setModalVisible(true)}
    >

<View style={styles.imgWrapper}>
<Image
      source={{
        uri: `${props.imgLink}`
      }}
      style={styles.img}
      />
      </View>
      
      <View style={styles.title}>
      <Text>{props.name}</Text>
      </View>

    </TouchableOpacity>

    {/* </FlatList> */}

    </>);

};
const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
    height: '40',
    backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'

  },
  img: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  imgWrapper: {
    width: '30%',
  },
  title: {
    height: '100%',
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // modalContainer: {
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'red'
  // }
});

export default ProjectItem;