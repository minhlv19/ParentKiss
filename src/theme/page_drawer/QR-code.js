import React, {Component} from 'react';
import {Logo} from '../components/header';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class QRCode extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Image
                    source={require('../../asset/images/back.png')}
                    style={{width:20,height:20,marginLeft:10}}
                />
            </TouchableOpacity>,
                headerTitle: <Logo/>,
                headerBackTitle: "Settings",
                headerLayoutPreset: "center"
        };
    };

    render() {
        return (
            <View style={{flex: 1, margin:25}}>
                <LinearGradient colors={['#3366CC', '#3399CC', '#66FFFF']} style={styles.linearGradient}>
                    <View>
                        <Image source={require('../../asset/images/anhnen.png')}
                               style={{width:100, height:100,borderRadius: 64}}/>
                    </View>
                    <Text style={styles.buttonText}>this is Feedback</Text>
                    <Text style={{color: '#fff',fontSize: 16 }}>this is Feedback</Text>
                    <View>
                        <Image source={require('../../asset/images/anhnen.png')}
                               style={{width:180, height:180,marginTop: 15}}/>
                    </View>
                </LinearGradient>
                <TouchableOpacity style={{flex: 1,flexDirection:'row', }}>
                    <View style={{width:'25%'}}></View>
                    <View style={{backgroundColor: '#00FFFF' ,padding: 10 ,height:40, borderRadius: 5,alignItems:'center',width:'50%'}}>
                        <Text style={{color: '#fff',}}>DOWNLOAD</Text>
                    </View>


                </TouchableOpacity>
            </View>
        );
    }
}

export default QRCode;
const styles = StyleSheet.create({
    linearGradient: {
        flex: 7,
        padding:10,
        marginTop:10,
        marginBottom:25,
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 15,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})
