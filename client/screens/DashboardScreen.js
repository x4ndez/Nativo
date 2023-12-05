import React, {useState, useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Button, Pressable, View, SafeAreaView, Image, FlatList, ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProjectItem from '../components/ProjectItem';
import FeaturedItem from '../components/FeaturedItem';

const DashboardScreen = ({route, navigation}) => {

  const [projects, setProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);

  async function getRepoData() {

      if (projects.length === 0) {

          const response = await fetch("https://api.github.com/users/x4ndez/repos", {

              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              },

          });

          const responseData = await response.json();

          const promiseArray = responseData.map(async (data) => {
              const projectData = {
                  name: data.name,
                  description: data.description,
                  repoUrl: data.html_url,
                  homePage: data.homepage,
                  imgLink: "",
              }

              if ((await fetch(`https://raw.githubusercontent.com/x4ndez/${data.name}/main/assets/screenshot.png`)).status === 200) {
                  projectData.imgLink = `https://raw.githubusercontent.com/x4ndez/${data.name}/main/assets/screenshot.png`;
              }
              else if ((await fetch(`https://raw.githubusercontent.com/x4ndez/${data.name}/main/assets/screenshot.gif`)).status === 200) {
                  projectData.imgLink = `https://raw.githubusercontent.com/x4ndez/${data.name}/main/assets/screenshot.gif`;
              } else {
                  projectData.imgLink = `https://github.com/x4ndez/xandinho/blob/main/client/src/assets/img/noimage.png?raw=true`;
              }

              return projectData;
          });

          const array = await Promise.all(promiseArray);
          setProjects(array);

        }}

        useEffect(() => {
          if(!projects) return;
          // console.log(projects)
        }, [projects]);

        getRepoData();

  return (<>

    <SafeAreaView style={styles.safeAreaView}>

    {projects.length > 0
    ? (<>

<View style={styles.featuredContainer}>

<Text
style={styles.featuredSectionHeading}
>Featured</Text>

<FlatList
showsHorizontalScrollIndicator={false}
contentContainerStyle={styles.featuredWrapper}
horizontal
data={projects}
renderItem={({item}) =>
item.name === 'Quale'
|| item.name === 'xandinho'
|| item.name === 'Nativo'
|| item.name === 'blogueiro'
? <FeaturedItem props={item} />
: null}
/>

</View>

<View style={styles.mainWrapper}>

        <Text
        style={styles.sectionHeading}
        >Portfolio</Text>

<FlatList
    data={projects}
    renderItem={({item}) => 
    <ProjectItem
    props={item}
    />}
    />

</View>

    </>)
    : (<>
        <Text>Loading...</Text>
        </>)}

    </SafeAreaView>

    </>);

};
const styles = StyleSheet.create({
    safeAreaView: {
        width: '100%',
        height: '100%',
    },
  mainWrapper: {
    padding: 15,
    backgroundColor: 'white'
  },
  featuredContainer: {
    padding: 15,
    backgroundColor: '#F2F3F4'
  },
  featuredWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  featuredSectionHeading: {
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  sectionHeading: {
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 10,
  }
});

export default DashboardScreen;