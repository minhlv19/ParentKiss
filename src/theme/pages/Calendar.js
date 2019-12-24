import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import {Logo, MenuButton} from '../components/header';
import AllFragment from "../fragment/All_fragment";
import Eventsfragment from "../fragment/Events_fragment";
import Holidaysfragment from "../fragment/Holidays_fragment";

class Calendar extends Component {

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
        this.state = {val: 1};
    }

    renderElement() {
        if (this.state.val === 1) {
            return <AllFragment/>;
        } else if (this.state.val === 2) {
            return <Eventsfragment/>;
        } else {
            return <Holidaysfragment/>;
        }
    }

    render() {
        return (
            <ImageBackground style={{flex: 1}}
                             source={{uri: 'https://i.pinimg.com/originals/85/91/8b/85918b516b8ac6e26c3cfcf8432ed357.jpg'}}>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center',}}>
                        <TouchableOpacity onPress={() => this.setState({val: 1})}>
                            <View style={styles.ButtontouchableOpacity} bac>
                                <Text style={styles.buttontext_a}>A</Text>
                                <Text
                                    style={styles.buttontext_b}>All</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({val: 2})}>
                            <View style={styles.ButtontouchableOpacity}>
                                <Text style={styles.buttontext_a}>E</Text>
                                <Text
                                    style={styles.buttontext_b}>Events</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({val: 3})}>
                            <View style={styles.ButtontouchableOpacity}>
                                <Text style={styles.buttontext_a}>H</Text>
                                <Text
                                    style={styles.buttontext_b}>Holidays</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {this.renderElement()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default Calendar;

const styles = StyleSheet.create({
    ButtontouchableOpacity: {
        width: 70,
        height: 60,
        backgroundColor: '#C0C0C0',
        margin: 10,
        padding: 5,
        borderRadius: 10,
    },
    buttontext_a: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: '#000'
    },
    buttontext_b: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 13,
        color: '#000'
    }
})
