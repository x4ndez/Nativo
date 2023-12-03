import React, {useState, useRef, useEffect} from 'react';
import {Linking, Alert, TouchableOpacity, FlatList, ScrollView, Animated, Modal, StyleSheet, Text, Button, Pressable, View, SafeAreaView, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  const skills = [
    'React', 'React Native',
    'MongoDB', 'MySQL', 'REST',
    'GraphQL', 'Express.js',
    'Node.js', 'Git Flow', 'JWT/Sessions',
    'Javascript', 'HTML', 'CSS', 
  ]

  const gitHubURL = 'https://github.com/x4ndez';
  const linkedInURL = 'https://www.linkedin.com/in/alexandernanfro/';

  return (<>

        {/* <Button
        title='Go to Dashboard'
        onPress={() => navigation.navigate('Dashboard', {
            feedback: 'lol',
        })}
        /> */}

<SafeAreaView style={styles.safeAreaView}>

    <ScrollView>

        <View style={styles.header}>

    <View style={styles.headerContainer}>

        <TouchableOpacity style={styles.avatarWrapper}>
          <Image
            source={require('../assets/avatar.jpg')}
            style={styles.avatar}
          />
          </TouchableOpacity>
        <View style={styles.infoWrapper}>
          <Text style={styles.name}>Alexander Nanfro</Text>
          <View style={styles.flexRow}>
          <Text style={styles.infoItem}>Full Stack Dev</Text>
          <Image
          source={require('../assets/icons/suitcase.png')}
          style={styles.icon}
          />
          </View>
          <View style={styles.flexRow}>
          <Text style={styles.infoItem}>Melbourne, Australia</Text>
          <Image
          source={require('../assets/icons/gps.png')}
          style={styles.icon}
          />
          </View>
          </View>

    </View>

    <ScrollView
    contentContainerStyle={styles.descContainer}
    horizontal
    showsHorizontalScrollIndicator={false}
    >

        <View style={styles.desc1}>
          <Image
          source={require('../assets/icons/phone-call.png')}
          style={styles.icon}
          />
          <Text>Phone</Text>
        </View>
        <View style={styles.desc1}>
        <Image
          source={require('../assets/icons/email.png')}
          style={styles.icon}
          />
          <Text>Email</Text>
        </View>
        <View style={styles.desc1}>
        <Image
          source={require('../assets/icons/web.png')}
          style={styles.icon}
          />
          <Text>LinkedIn</Text>
        </View>
        <View style={styles.desc1}>
        <Image
          source={require('../assets/icons/web.png')}
          style={styles.icon}
          />
          <Text>GitHub</Text>
        </View>

    </ScrollView>

        {/* <FlatList horizontal></FlatList> */}

        <View style={styles.skillWrapper}>

          {skills.map((item, i) => 
            (<TouchableOpacity key={i}>
                <Text style={styles.skill}>{item}</Text>
                </TouchableOpacity>)
          )}

        </View>

    </View>

    <ScrollView style={styles.descWrapper}></ScrollView>

    <View style={styles.linkBoxWrapper}>

    <TouchableOpacity
          style={styles.linkBox}
          onPress={ async () => {
            const supported = await Linking.canOpenURL(gitHubURL);
            if(supported) await Linking.openURL(gitHubURL)
            else Alert.alert('Cannot open URL.')
          }}
          >
          <Image
          source={require('../assets/GitHub_Logo.png')}
          style={styles.linkLogo}
          />
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.linkBox}
          onPress={ async () => {
            const supported = await Linking.canOpenURL(linkedInURL);
            if(supported) await Linking.openURL(linkedInURL)
            else Alert.alert('Cannot open URL.')
          }}
          >
          <Image
          source={require('../assets/LI-Logo.png')}
          style={styles.linkLogo}
          />
          </TouchableOpacity>

    </View>

    </ScrollView>

    </SafeAreaView>

    </>);

};
const styles = StyleSheet.create({
  header: {
    padding: 10,
  },
  safeAreaView: {
    backgroundColor: 'slategrey',
    width: '100%',
    height: '100%'
  },
  descContainer: {
    // backgroundColor: 'green',
    display: 'flex',
    height: 50,
    margin: 0,
    padding: 0,
  },
  desc1: {
    backgroundColor: 'white',
    width: 200,
    borderRadius: 10,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarWrapper: {
    width: '30%',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  infoWrapper: {
    padding: 10,
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'flex-end',
  },
  headerContainer: {
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',

  },
  name: {
    fontWeight: 'bold',
    fontSize: 25
  },
  infoItem: {
    marginRight: 10,
  },
  descWrapper: {
    width: '100%',
    // height: 200,
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  skill: {
    padding: 6,
    backgroundColor: 'darkslategrey',
    marginTop: 10,
    marginRight: 3,
    borderRadius: 10,
    color: 'white',
    fontSize: 12,
  },
  skillWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  p: {
    marginBottom: 10,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  linkBoxWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  linkBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  linkLogo: {
    resizeMode: 'contain',
    width: '70%'
  }
});

export default HomeScreen;