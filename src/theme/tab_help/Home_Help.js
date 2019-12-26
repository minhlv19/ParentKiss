import React, {Component} from 'react';
import {Logo} from '../components/header';
import {Text, View, TouchableOpacity, Image, Switch, FlatList} from 'react-native';
const itemcao = [
    {id: 1, name: 'Others'},
    {id: 2, name: 'Fee Payments'},
    {id: 3, name: 'Transport'},
    {id: 4, name: 'name 4'},
    {id: 5, name: 'name 5'}
];
class HomeHelp extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', marginLeft: 15, marginRight: 15}}>
                <FlatList data={itemcao} renderItem={({item}) =>
                    <View style={{borderBottomWidth: 1, flex: 1, flexDirection: 'row'}}>
                        <View style={{flex:9}}>
                            <Text style={{fontSize: 18, paddingTop:8, paddingBottom:8}}>{item.name}</Text>
                        </View>
                        <View style={{flex:1, alignItems:'flex-end'}}>
                            <Image style={{width: 20, height: 20,marginTop: 10}} source={require('../../asset/images/next.png')}/>
                        </View>
                    </View>
                }/>
            </View>
        );
    }
}
export default HomeHelp;
