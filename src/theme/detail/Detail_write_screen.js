import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {Logo, MenuButton} from '../components/header';
import {ScrollView} from 'react-navigation';

class DetailWriteScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Image
                    source={require('../../asset/images/back.png')}
                    style={{width: 20, height: 20, marginLeft: 10}}
                />
            </TouchableOpacity>,
            headerTitle: <Logo/>,
            headerBackTitle: 'Settings',
            headerLayoutPreset: 'center',
        };
    };

    constructor(props) {
        super(props);
        this.state = {text: 'Useless Placeholder'};
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1}}>
                    <View style={{
                        flexDirection: 'row',
                        // backgroundColor: '#EEEEEE',
                        height: 40,
                        margin: 10,
                        borderRadius: 10,

                        alignItems: 'center',

                    }}>
                        <Image style={{marginLeft: 5, height: 30, width: 30, padding: 5}}
                               source={require('../../asset/images/school.png')}/>
                        <Text style={{
                            flex: 1,
                            textAlign: 'center',
                            padding: 3,
                            color: '#2cbf8b',
                            fontSize: 18,
                        }}>Name</Text>
                    </View>
                    <View>
                        <Text>
                            Chọn loại ghi chú *
                        </Text>

                        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 4, marginRight: 4}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('../../asset/images/Food.png')}
                                       style={{height: 50, width: 50, marginBottom: 6}}/>
                                <Text>Food</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('../../asset/images/Food.png')}
                                       style={{height: 50, width: 50, marginBottom: 6}}/>
                                <Text>Food</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('../../asset/images/Food.png')}
                                       style={{height: 50, width: 50, marginBottom: 6}}/>
                                <Text>Food</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('../../asset/images/Food.png')}
                                       style={{height: 50, width: 50, marginBottom: 6}}/>
                                <Text>Food</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('../../asset/images/Food.png')}
                                       style={{height: 50, width: 50, marginBottom: 6}}/>
                                <Text>Food</Text>
                            </View>
                        </View>
                        <View>
                            <Text>
                                Chọn chương trình*
                            </Text>

                        </View>
                        <View>
                            <TouchableOpacity style={{
                                borderWidth: 1,
                                alignSelf: 'flex-start',
                                borderRadius: 5,
                                marginLeft: '16%',
                                marginTop: 10,
                            }}>
                                <Text style={{margin: 4}}>Kindergarten</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput
                                style={{
                                    borderColor: 'gray', borderWidth: 1, maxHeight: 80,
                                    textAlignVertical: 'top',
                                }}
                                maxLength={800}
                                numberOfLines={4}

                                editable={true}
                                placeholder="Enter detail here*"
                                autoCorrect={true}
                                autoFocus={true}


                            />
                        </View>
                        <Text>sfdghjm</Text>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

export default DetailWriteScreen;
