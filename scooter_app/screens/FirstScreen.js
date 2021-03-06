import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity, SafeAreaView, StatusBar, Platform } from 'react-native';




function FirstScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <View style={styles.container}>
    <StatusBar hidden />
       <View style={styles.logo}>
       <Image source={require("../assets/logo.png")}/>
      </View>
      <View style={styles.title}>
        <Text style={styles.title_text}>Your scooter in one app</Text>
      </View>
      <View>
       <Image source={require("../assets/illustration.png")}/>
      </View>
      <View style={styles.text}>
        <Text style={styles.text_content}>
          Everything you need to know about your scooter is available here in your app
        </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Second')}}>
          <Image style={styles.getStarted} source={require("../assets/getStarted.png")}/>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#55418E',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
logo:{
    top: -50,
  },
  title_text:{
    textAlign: 'center',
    bottom: 35,
    fontSize: 25,
    color: '#ffffff',
  },
  title:{
    width: 200,
  },
  text_content:{
    textAlign: 'center',
    bottom: 20,
    fontSize: 17.5,
    color: '#ffffff',
    lineHeight: 30,
  },
  text:{
    top: 50,
    width: 280,
  },
  getStarted:{
    top: -20,
    left: 250,
  }
    })
  export default FirstScreen;