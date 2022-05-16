import React, { useEffect, useState }  from "react";
import { Dimensions, StyleSheet, Text, View , Image,} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location' ;



function MapScreen(props) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState({
        latitude: 56.843747,
        longitude: 60.653813,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
    })
    useEffect(()=> {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted'){
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
            setLocation(location);
        })();
    },[]);
    let text = errorMsg ? errorMsg : location ? JSON.stringify(location) : 'Waiting..';
    useEffect(()=>{
        if (location !== null) {
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0122,
                longitudeDelta: 0.0121,
            });
        }

    }, [location]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar_image} source={require("../assets/profile.png")}/>
                <Text style={styles.avatar_text}>Daniel Balungu</Text>
                <Text style={styles.app_text}>Welcome back!</Text>
                <Image style={styles.dots_image} source={require("../assets/dots.png")}/>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Scooter Location</Text>
                <MapView style={styles.map} region={region}/>
                <Text style={styles.Tmap}>{text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      top: 20
    },
    header:{
        top:-50,
    },
    avatar_image:{
        top: 50,
        left: -100,
    },
    avatar_text:{
        fontSize: 17,
        left:-50,
        top: 10,
        fontWeight: 'bold'
    },
    app_text:{
        fontSize: 14,
        color:'black',
        left:-50,
        top: 10,
    },
    dots_image:{
        right: -200,
        top: -28,
    },
    body:{
        top: -25,
        width:330,
        height:550,
        borderColor:'#acacac',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,

    },
    title:{
        fontSize:15,
        color:'#55418E',
        top: 15,
        left: 15,

    },
    map:{
        flex: 1,
        top: 25,
        width: Dimensions.get('window').width,
        width: 300,
        left: 15,
        height: Dimensions.get('window').height,
    },
    Tmap:{
        fontSize: 10,
        height:100,
        width:300,
        left: 15,
        top: 35,

    },
})
export default MapScreen;