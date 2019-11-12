import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserPicture from '../userPicture/UserPicture';

const Message = ({text, mySMS}) => {
  const user1 =
    'http://work-1c.ru/wp-content/uploads/2018/03/512x512-1-300x300.png';
  const user2 =
    'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1';
  return (
    <View style={[styles.container, mySMS ? styles.rightSide : {}]}>
      <UserPicture uri={mySMS ? user2 : user1} />
      <View
        style={[
          mySMS ? styles.myMessageRectangle : styles.partnerMessageRectangle,
        ]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'flex-end',
  },

  partnerMessageRectangle: {
    marginVertical: 10,
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#edfb60',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  myMessageRectangle: {
    marginVertical: 10,
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#feff99',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  text: {
    fontWeight: 'bold',
    color: 'black',
  },

  rightSide: {
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
  },
});

export default Message;
