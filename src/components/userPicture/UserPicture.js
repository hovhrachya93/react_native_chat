import React from 'react';
import {Image, StyleSheet} from 'react-native';

const UserPicture = ({uri}) => {
  return <Image source={{uri}} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#FFCF54',
  },
});

export default UserPicture;
