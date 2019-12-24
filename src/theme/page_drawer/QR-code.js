import React, {Component} from 'react';
import {Logo} from '../components/header';
import {Text, View, TouchableOpacity, Image,ImageBackground} from 'react-native';

class QRCode extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Image
                    source={require('../../asset/images/back.png')}
                    style={{width: 40, height: 40, marginLeft: 10}}
                />
            </TouchableOpacity>,
            headerTitle: <Logo/>,
            headerBackTitle: "Settings",
            headerLayoutPreset: "center"
        };
    };

    render() {
        return (
            <View style={{flex:1, margin:20}}>
                <ImageBackground source={require('../../asset/images/backcolor.png')}
                                 style={{width:'90%',height:'80%',borderRadius:50,}}>
                {/*    <View>*/}
                {/*        <Image source={require('../../asset/images/backcolor.png')}*/}
                {/*               style={{borderRadius:10}}/>*/}
                {/*    </View>*/}
                    <Text style={{fontSize:20, padding:10}}>this is Feedback</Text>
                    <Text style={{fontSize:16}}>this is Feedback</Text>
                    {/*<View>*/}
                    {/*    <Image source={require('../../asset/images/anhnen.png')}*/}
                    {/*           style={{borderRadius:6}}/>*/}
                    {/*</View>*/}
                </ImageBackground>
            </View>
        );
    }
}

export default QRCode;
