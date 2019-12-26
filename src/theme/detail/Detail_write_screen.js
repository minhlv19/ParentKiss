import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Logo, MenuButton} from '../components/header';
import {ScrollView} from 'react-navigation';
class DetailWriteScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <TouchableOpacity  onPress={() => navigation.goBack(null)} >
                <Image
                    source={require('../../asset/images/back.png')}
                    style={{width:20,height:20,marginLeft:10}}
                />
            </TouchableOpacity>,
            headerTitle: <Logo />,
            headerBackTitle: "Settings",
            headerLayoutPreset: "center"
        };
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>

            <View style={{flex:1}}>
                <View style={{
                    flexDirection: 'row',
                    // backgroundColor: '#EEEEEE',
                    height: 40,
                    margin: 10,
                    borderRadius: 10,

                    alignItems:'center'

                }}>
                    <Image style={{marginLeft: 5, height: 30, width: 30,padding: 5}}
                           source={require('../../asset/images/school.png')}/>
                    <Text style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: 3,
                        color: '#2cbf8b',
                        fontSize: 18
                    }}>Name</Text>
                </View>
                <View>
                    <Text>
                        Chọn loại ghi chú *
                    </Text>

                </View>
                <View>
                    <View>

                    </View>
                </View>



                </View>
            </ScrollView>

        );
    }
}

export default DetailWriteScreen;
