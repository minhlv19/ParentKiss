import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
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
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground style={{flex: 1}}
                             source={{uri: 'https://i.pinimg.com/736x/01/34/fb/0134fb3cf95575a66a10397aa0f24c46.jpg'}}>
                <View style={styles.rowView}>
                    <View style={{flex: 3}}>
                        {/*<Text>SDFGHJK</Text>*/}
                    </View>
                    <TouchableOpacity style={styles.buttonTouchableOpacity}
                    onPress={()=>this.props.navigation.navigate('DetailWriteScreen')}>
                        <View style={styles.buttonTouchableOpacityView}>
                            <Text style={styles.styletext}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
