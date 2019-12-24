import React, {Component} from 'react';
import {Logo} from '../components/header';
import {Text, View, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';

class ChangePassword extends Component {
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
            <View style={{flex: 1, margin: 20}}>
                <Text style={styles.textstyle}>Old Password </Text>
                <TextInput style={styles.textinputstyle}
                           placeholder={'password'}/>
                <Text style={styles.textstyle}>New Password</Text>
                <TextInput style={styles.textinputstyle}
                           placeholder={'re password'}/>
                <Text style={styles.textstyle}>Confirm New Passwoord </Text>
                <TextInput style={styles.textinputstyle}
                           placeholder={'Why Password ?'}/>
                <View style={styles.viewbutton}>
                    <View style={{width: '25%'}}></View>
                    <TouchableOpacity style={styles.textbutton}>
                        <Text style={{textAlign: 'center', fontSize: 20,color:'#fff'}}> SUBMIT </Text>
                    </TouchableOpacity>
                    <View style={{width: '25%'}}></View>
                </View>

            </View>
        );
    }
}

export default ChangePassword;
const styles = StyleSheet.create({
    textstyle: {
        fontSize: 16,
        margin: 2,
        color:'#00FFFF',
    },
    textinputstyle: {
        height: 40,
        paddingLeft: 5,
        borderWidth: 1,
        fontSize: 16,
        borderColor: '#606070',
    },
    viewbutton:{
        flex: 1,
        marginTop: 20,
        flexDirection: 'row'
    },
    textbutton:{
        width: '50%', height: 40,
        borderRadius: 6,
        backgroundColor: '#00FFFF',
        padding: 5,
    }
})
