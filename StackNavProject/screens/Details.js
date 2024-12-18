import React from "react";
import { View,Text,Button,StyleSheet } from "react-native";

const Details=({navigation})=>{
    return(
        <View>
            <Text>Welcome to details screen</Text>
            <Button title='go to the other page' onPress={()=>NavigationPreloadManager.navigate('Home')}></Button>
        </View>
    )
}

export default Details;