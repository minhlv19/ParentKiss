import React, {Component} from 'react';
import {View, Text, Picker, TouchableOpacity} from 'react-native';
import {Logo, MenuButton} from "../components/header";

class Home extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()}/>,
            headerTitle: <Logo/>,
            headerBackTitle: "Home",
            headerLayoutPreset: "center"
        };
    };

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 3}}>
                    <View style={{flex: 1, flexDirection: 'row',}}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue2, itemIndex) =>
                                this.setState({language: itemValue2})
                            }>
                            <Picker.Item label="Java2" value="java2"/>
                            <Picker.Item label="JavaScript1" value="js1"/>
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
}

export default Home;
