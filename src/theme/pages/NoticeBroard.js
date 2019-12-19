import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ImageBackground} from 'react-native';
import {Logo, MenuButton} from '../components/header';

class NoticeBroard extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()}/>,
            headerTitle: <Logo/>,
            headerBackTitle: "Home",
            headerLayoutPreset: "center",

        };
    };

    render() {
        return (
            <ImageBackground style={styles.container}
                             source={{uri: 'https://i.pinimg.com/736x/42/ea/2c/42ea2ce9bb786ff08098982b40809bec.jpg'}}>
                <Text style={styles.textWelcom}>Welcom to Kriyo App !</Text>
                <Text style={styles.textNotices}>Notices are yet to be added by the school !</Text>
            </ImageBackground>
        );
    }
}

export default NoticeBroard;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    textWelcom: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        color: '#fff'
    },
    textNotices: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
        marginTop: 20,
    }
})