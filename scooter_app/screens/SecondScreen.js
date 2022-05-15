
import React, {useState }from 'react';
import { StyleSheet, Text, View , Image, SafeAreaView, SliderBase} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function SecondScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar_image} source={require("../assets/profile.png")}/>
                <Text style={styles.avatar_text}>Daniel Balungu</Text>
                <Text style={styles.app_text}>Welcome back!</Text>
                <Image style={styles.dots_image} source={require("../assets/dots.png")}/>
            </View>
            <View style={styles.your}>
                <Image style={styles.updated_image} source={require("../assets/updated.png")}/> 
                <Image style={styles.close_image} source={require("../assets/close.png")}/>
                <Text style={styles.your_TEXT}>We updated your scooter</Text>
                <Text style={styles.your_text}>Everything your scooter needed we did it for you. </Text>
            </View>
            <View style={styles.location}>
                <Text style={styles.location_TEXT}>Daniel's Scooter</Text>
                <Text style={styles.location_text}>Location</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Map')}}>
                    <Image style={styles.maps_image} source={require("../assets/maps.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.info}>
                <View style={styles.distance}>
                    <Text style={styles.info_TEXT}>Total distance</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Map')}}>
                        <Image style={styles.info_image} source={require("../assets/map.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.info_text}>17.8 KM</Text>
                </View>
                <View style={styles.battery}>
                    <Text style={styles.info_TEXT}>Total battery</Text>
                    <Image style={styles.info_image} source={require("../assets/charging.png")}/>
                    <Text style={styles.info_text}>100%</Text>
                </View>
                <View style={styles.Speed}>
                    <Text style={styles.info_TEXT}>Average Speed</Text>
                    <Image style={styles.info_image} source={require("../assets/zapon.png")}/>
                    <Text style={styles.info_text}>45 Km/h</Text>
                </View>
                <View style={styles.Updated}>
                    <Text style={styles.info_TEXT}>Ride Updated</Text>
                    <Image style={styles.info_image} source={require("../assets/share.png")}/>
                    <Text style={styles.info_text}>1 day ago</Text>
                </View>

            </View>

        </View>
    );
}
  
const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    header:{
        top:70,
    },
    your:{
        top:60,
    },
    avatar_image:{
        top: 50,
        left: -100,
    },
    avatar_text:{
        fontSize: 17,
        left:-50,
        top: 10,
    },
    app_text:{
        fontSize: 14,
        color:'#d3d3d3',
        left:-50,
        top: 10,
    },
    dots_image:{
        right: -200,
        top: -28,
    },
    updated_image:{
        top: 15,
        resizeMode: 'contain',
    },
    close_image:{
        top: -230,
        right: -290,
    },
    your_TEXT:{
        fontSize: 17,
        color:'#fff',
        top: -210,
        left: 50,

    },
    your_text:{
        width: 220,
        fontSize: 14,
        color:'#fff',
        top: -190,
        left:48,
        lineHeight: 25,
    },
    location:{
        width:300,
        height:100,
        backgroundColor:'#FFA500',
        borderRadius: 20,
        
    },
    location_TEXT:{
        fontSize: 17,
        color:'#fff',
        top:25,
        left:20,

    },
    location_text:{
        fontSize: 14,
        color:'#fff',
        top: 30,
        left:20,
    },
    maps_image:{
        top: -18,
        left:230,
    },
    info:{
        width:300,
        top:30,
    },
    distance:{
        width: 140,
        height:100,
        borderColor:'#acacac',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
    },
    battery:{
        width: 140,
        height:100,
        borderColor:'#acacac',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        left:160,
        top:-100,
    },
    Speed:{
        width: 140,
        height:100,
        borderColor:'#acacac',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        top: -80,
    },
    Updated:{
        width: 140,
        height:100,
        borderColor:'#acacac',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        left:160,
        top:-180,
    }, 
    info_image:{
        top: 25,
        left:10,

    },
    info_TEXT:{
        top: 15,
        left:10,
        fontSize:14,
        color:'#55418E',

    },
    info_text:{
        top: 30,
        left:10,
        fontSize:14,
        color:'#FFA500',

    },
})
export default SecondScreen;