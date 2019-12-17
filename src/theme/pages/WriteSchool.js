import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Logo, MenuButton} from '../components/header';

class WriteSchool extends Component {
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
            <View style={styles.rowView}>
                <View style={{flex: 3}}>
                    <Text>SDFGHJK</Text>
                </View>
                <TouchableOpacity style={styles.buttonTouchableOpacity}>
                    <View style={styles.buttonTouchableOpacityView}>
                        <Text style={styles.styletext}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default WriteSchool;
const styles = StyleSheet.create({
    rowView: {
        flex: 1, flexDirection: 'row'
    },
    buttonTouchableOpacity: {
        flex: 1, flexDirection: 'column-reverse'
    },
    buttonTouchableOpacityView: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',
        margin: 10,
        padding: 10,
        borderRadius: 400,
    },
    styletext: {
        alignItems: 'center', textAlign: 'center', fontSize: 20, color: '#fff'
    }
})
