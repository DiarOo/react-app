import React from "react";
import { View,Text,Button,StyleSheet } from "react-native";

const Home=({navigation})=>{
    return(
        <View>
            <Text>Welcome to details screen</Text>
            <Button title='go to the other page' onPress={()=>NavigationPreloadManager.navigate('Details')}></Button>
        </View>
    )
}

export default Home;