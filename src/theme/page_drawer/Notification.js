import React, {Component} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Logo} from '../components/header';
import Select from 'react-select';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
class Notification extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <TouchableOpacity  onPress={() => navigation.goBack(null)} >
                <Image
                    source={require('../../asset/images/back.png')}
                    style={{width:40,height:40,marginLeft:10}}
                />
            </TouchableOpacity>,
            headerTitle: <Logo />,
            headerBackTitle: "Settings",
            headerLayoutPreset: "center"
        };
    };
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;
        return (
           <View>
               <View contentContainerStyle={{
                  flex:1,
                  alignItems:'center',
                  justifyContent:'center'
               }}>
                   <Select
                       value={selectedOption}
                       onChange={this.handleChange}
                       options={options}
                   />
               </View>
           </View>
        );
    }
}

export default Notification;
