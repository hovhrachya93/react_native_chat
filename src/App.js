import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Chat from './components/messages/Chat';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.flex1}>
        <Chat />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});

export default App;
