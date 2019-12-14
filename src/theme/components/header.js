import React from 'react'
import {Image, TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import {View} from "react-native";
const deviceWidth = Dimensions.get("window").width;
export class Logo extends React.Component{
    render(){
        return(
            <View style={{flex:0.8}}>
                <Image
                    source={require('../../asset/images/logo.png')}
                    resizeMode = "contain"
                    style = {{width: 140,
                        marginTop: 15,alignSelf:'center'}}
                />
            </View>
        )
    }
}
export class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress = {this.props.onPress} ><Image
            source={require('../../asset/images/drawer.png')}
            style={{width:50,height:50}}
            /></TouchableOpacity>
        );
    }
}
