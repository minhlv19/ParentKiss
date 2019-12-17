import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Logo, MenuButton} from '../components/header';

class NoticeBroard extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
            headerTitle: <Logo />,
            headerBackTitle: "Home",
            headerLayoutPreset: "center",

        };
    };
    render() {
        return (
            <View>
                <Text>SDFGHJK</Text>
            </View>
        );
    }
}

export default NoticeBroard;
