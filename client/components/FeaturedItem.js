import {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import ProjectModal from './ProjectModal';

const FeaturedItem = ({props}) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (<>

<ProjectModal
    props={props}
    modalVisible={modalVisible}
    setModalVisible={setModalVisible}
    />

    <TouchableOpacity
    onPress={() => setModalVisible(true)}
    >

<View>
<Image
      source={{
        uri: `${props.imgLink}`
      }}
      style={styles.img}
      />
</View>
    </TouchableOpacity>

    </>);

};
const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
});

export default FeaturedItem;