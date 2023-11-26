import React, {useState} from 'react';
import {Alert, TouchableOpacity, Modal, StyleSheet, Text, Button, Pressable, View, SafeAreaView, Image, FlatList} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const ProjectItem = ({navigation, props}) => {

  return (<>

    {/* <FlatList> */}

    <TouchableOpacity
    style={styles.wrapper}
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
  }
});

export default ProjectItem;