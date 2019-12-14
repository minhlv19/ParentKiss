import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Logo, MenuButton} from '../components/header';

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
            headerTitle: <Logo />,
            headerBackTitle: "Home",
            headerLayoutPreset: "center"
        };
    };
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <Text>SDFGHJK</Text>
            </View>
        );
    }
}

export default Home;
