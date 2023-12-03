import React, {useState, useRef, useEffect} from 'react';
import {Alert, FlatList, ScrollView, Animated, Modal, StyleSheet, Text, Button, Pressable, View, SafeAreaView, Image} from 'react-native';
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

        <View style={styles.avatarWrapper}>
          <Image
            source={require('../assets/avatar.jpg')}
            style={styles.avatar}
          />
          </View>
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

          {skills.map((item) => 
            (<Text style={styles.skill}>{item}</Text>)
          )}

        </View>

    </View>

    <ScrollView style={styles.descWrapper}><Text style={styles.p}>
      
    My name is Alex, I am 29 years old and I currently live in Melbourne, Australia. I am motivated, enjoy a challenge, and learning new technologies. I have a proven work history of troubleshooting issues within the IoT space.
</Text><Text style={styles.p}>
I recently completed a Full Stack Developer bootcamp through Monash University/edX. In this period I had to present two projects as a group which gave me perspective of the experience of working within a team of programmers. I believe we had a good system; enforcing Git workflow and having regular meetings to discuss our individual progress and the project as a whole. Prior, my experience of working within a team was through construction as an electrician, but in time and experience, I became a leader. I believe having good communication within a team and a high moral, creates higher quality work. I actively try to know my peers; how they enjoy working, learn their strengths, their weaknesses, and try to form a good rapport.
</Text><Text style={styles.p}>
I frequently work with clients, where my interpersonal skills and presentation are important. I always display a friendly and approachable nature which assists in communicating with clients to understand their needs are met. Explaining complex concepts in a manner that anyone can understand is a skill, and often a challenge, which is where I believe I excel.

Working as a service technician, my day-to-day duties heavily required me to work independently within a team. I am frequently scheduled to complete multiple jobs in a day, often requiring myself to assess, diagnose and fix issues within the allocated time-frame; including making required documentation and reports to be communicated with the service manager. I have to think independently, often reading manufacturer documentation to solve issues which is how I have started to think of programming, reading documentation set out by the manufacturer to solve an issue.

Troubleshooting is the bread and butter of my current work; and what I feel is my greatest strength. I believe it to be the result of enjoying a challenge, the rush of solving a complicated issue, and past experiences; which involved a lot of failing, but not giving up until succeeding. Over time, I created more efficient methods of troubleshooting which has built my skills to what they are today.

I have demonstrated experience in React, Handlebars, GraphQL, REST, MongoDB, MySQL and other technologies seen below.

      </Text></ScrollView>

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
    flexWrap: 'wrap',
  }
});

export default HomeScreen;