import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Logo, MenuButton} from '../components/header';
import {Colors} from "react-native/Libraries/NewAppScreen";

class Calendar extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()}/>,
            headerTitle: <Logo/>,
            headerBackTitle: "Home",
            headerLayoutPreset: "center"
        };
    };

    render() {
        return (
            <View style={{flex: 1 }}>
                <View style={{flexDirection: 'row', justifyContent: 'center',}}>
                    <TouchableOpacity>
                        <View style={styles.ButtontouchableOpacity}>
                            <Text style={styles.buttontext_a}>A</Text>
                            <Text
                                style={styles.buttontext_b}>All</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.ButtontouchableOpacity}>
                            <Text style={styles.buttontext_a}>E</Text>
                            <Text
                                style={styles.buttontext_b}>Events</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.ButtontouchableOpacity}>
                            <Text style={styles.buttontext_a}>H</Text>
                            <Text
                                style={styles.buttontext_b}>Holidays</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>SDFGHJK</Text>
                </View>
            </View>
        );
    }
}

export default Calendar;

const styles = StyleSheet.create({
    ButtontouchableOpacity: {
        width: 60,
        height: 60,
        backgroundColor: '#C0C0C0',
        margin: 10,
        padding: 5,
        borderRadius: 10,
    },
    buttontext_a:{
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: '#000'
    },
    buttontext_b:{
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 13,
        color: '#000'
    }
})
