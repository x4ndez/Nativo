import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Button, Pressable, View, SafeAreaView, Image, FlatList} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProjectItem from '../components/ProjectItem';

const DashboardScreen = ({route, navigation}) => {

  const [projects, setProjects] = useState([]);

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

        React.useEffect(() => {
          if(!projects) return;
          // console.log(projects)
        }, [projects]);

        getRepoData();

  return (<>

    <View style={styles.mainWrapper}>

        <Button
        title='Go to Home'
        onPress={() => navigation.navigate('Home')}
        />

    {projects.length > 0
    ? (<>

<FlatList
    data={projects}
    renderItem={({item}) => <ProjectItem props={item} />}
    />

    </>)
    : (<>
        <Text>Loading...</Text>
        </>)}

    {/* <ProjectItem /> */}

    </View>

    </>);

};
const styles = StyleSheet.create({
  mainWrapper: {
    padding: 15,
    height: '100%',
    backgroundColor: 'white'
  },
});

export default DashboardScreen;