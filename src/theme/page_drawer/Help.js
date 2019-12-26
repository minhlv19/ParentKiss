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

class Help extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Image
                    source={require('../../asset/images/back.png')}
                    style={{width: 40, height: 40, marginLeft: 10}}
                />
            </TouchableOpacity>,
            headerTitle: <Logo/>,
            headerBackTitle: "Settings",
            headerLayoutPreset: "center"
        };
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', marginLeft: 15, marginRight: 15}}>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity style={{
                        padding: 5,
                        backgroundColor: '#0000FF',
                        borderRadius: 20,
                        width: 60,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{color: '#fff'}}>B</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        padding: 5,
                        backgroundColor: '#00FFFF',
                        borderRadius: 20,
                        width: 60,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{color: '#fff'}}>A</Text>
                    </TouchableOpacity>
                </View>

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

export default Help;
