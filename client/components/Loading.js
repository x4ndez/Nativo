import {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

const Loading = (props) => {

  return (<>

    <View
    style={styles.container}
    >

      <Image
      source={require('../assets/icons/loading.png')}
      style={styles.img}
      />
      <Text>Loading...</Text>

    </View>

    </>);

};
const styles = StyleSheet.create({
container: {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
width: '100%',
height: '100%',
},
img: {
  width: 100,
  height: 100,
  margin: 20,
}
});

export default Loading;