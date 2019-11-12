import React, {useState} from 'react';
import {ScrollView, TextInput, View, Text, StyleSheet} from 'react-native';
import uuidv4 from 'uuidv4';
import Message from './Message';

const Chat = () => {
  const myID = 1;
  const parnerID = 2;
  const [message, setmessage] = useState(() => [
    {id: uuidv4(), text: 'Hi! my name is User1', senderID: 2},
    {id: uuidv4(), text: 'My name is User2', senderID: 1},
  ]);

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const changeMessage1 = text1 => setText1(text1);
  const changeMessage2 = text2 => setText2(text2);

  const addMessage1 = () => {
    if (text1.length > 0) {
      setmessage([
        ...message,
        {
          id: uuidv4(),
          text: text1,
          senderID: myID,
        },
      ]);
    }
    setText1('');
  };
  const addMessage2 = () => {
    if (text2.length > 0) {
      setmessage([
        ...message,
        {
          id: uuidv4(),
          text: text2,
          senderID: parnerID,
        },
      ]);
    }
    setText2('');
  };

  return (
    <>
      <View style={styles.header}>
        <Text>ChatApp</Text>
      </View>
      <ScrollView style={styles.container}>
        {message.map(({text, id, senderID}) => (
          <Message key={id} text={text} mySMS={senderID === myID} />
        ))}
      </ScrollView>
      <View style={styles.mainInput}>
        <TextInput
          style={styles.textInput}
          placeholder="User1"
          value={text2}
          onChangeText={changeMessage2}
          onSubmitEditing={addMessage2}
        />
        <TextInput
          style={styles.textInput}
          placeholder="User2"
          value={text1}
          onChangeText={changeMessage1}
          onSubmitEditing={addMessage1}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: '#FFCF54',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#F1F2F2',
    padding: 10,
  },
  mainInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFCF54',
  },
  textInput: {
    width: '45%',
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 20,
    backgroundColor: '#F1F2F2',
  },
});

export default Chat;
