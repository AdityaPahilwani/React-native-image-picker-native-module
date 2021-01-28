/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Pressable,Image} from 'react-native';
import CalendarModule from './calendar';
import ImagePickerModule from './ImagePickerModule';
const App = () => {
  const onPress = async () => {
    // CalendarModule.createCalendarEvent('Party', 'My House', (eventId) => {
    //   console.log(`Created a new event with id ${eventId}`);
    // });

    try {
      const result = await ImagePickerModule.pickImage();
      setImage(result);
    } catch (e) {
      console.log(e)
    }
  };

  const [image, setImage] = useState();
  const [error, setError] = useState();
  return (
    <SafeAreaView style={{flex: 1}}>
      {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      <View style={styles.container}>
        {image && <Image source={{uri:image}} style={styles.image}/>}
        <Text>{error}</Text>
        <Pressable style={styles.button} onPress={onPress}>
          <Text>Pick Image</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ace6f6',
    elevation: 4,
    borderRadius: 10,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  image:{
    width:'100%',
    height:400,
    borderRadius:20,
    resizeMode:'cover',
    overflow:'hidden'
  }
});

export default App;
