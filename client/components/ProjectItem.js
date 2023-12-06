import {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import ProjectModal from './ProjectModal';

const ProjectItem = ({props}) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (<>

    <ProjectModal
    props={props}
    modalVisible={modalVisible}
    setModalVisible={setModalVisible}
    />

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

    </>);

};
const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
    height: '40',
    backgroundColor: '#D4E6F1',
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
});

export default ProjectItem;