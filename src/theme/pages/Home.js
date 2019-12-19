import React, {Component} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {MenuButton} from '../components/header';
import {Logo} from '../components/header';

const SELECT_ACTIVITY=[
    'All Activities',
    'Check-In-Out',
    'Diary' ,
    'Food' ,
    'Health' ,
    'Photo' ,
    'Potty' ,
    'Star' ,
    'Sleep' ,
    'Video' ,
    'Fee'
];
class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
            headerTitle: <Logo />,
            headerBackTitle: "Home",
            headerLayoutPreset: "center",

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
               <ModalDropdown
                   style={styles.textpicek}
                   options={SELECT_ACTIVITY}

                   defaultValue={'All Activities'}
                   dropdownStyle={styles.downText}
               >

               </ModalDropdown>

                {/*<Text>SDFGHJK</Text>*/}
            </View>
        );
    }
}

export default Home;
const styles = StyleSheet.create({
    textpicek: {
width: '40%',
        borderWidth:0.2,
        borderRadius:5,
        height: 40,
        justifyContent:'center',
        marginLeft:10,
        textAlign:'center'


    },
    downText:{
        width: '40%',
        height: 250,
        borderWidth: 2,
        left:0
    }
})
