import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, Alert,StyleSheet} from 'react-native';
import {Logo, MenuButton} from '../components/header';
import  {BottomSheet} from 'react-native-btr';
import {ScrollView} from 'react-navigation';

class DetailWriteScreen extends Component {
    static navigationOptions = ({navigation}) => {
        const showAlert=()=>{
            Alert.alert('',
                `Any unsaved data will be lost`,
                [
                    {text: 'NO'},
                    {text: 'YES',onPress: () => navigation.goBack(null) },
                ]
            );
        }
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
    GetBottomNavigationView = () => {
        this.setState({ visible: !this.state.visible });
    };

    constructor(props) {
        super(props);
        this.state = {
            textValue: '0',
            visible: false,
        };
    }

    GetValueFunction = (TextValueItem) => {
        var valu = TextValueItem.length.toString();
        this.setState({textValue: valu})
    }


    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
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
                        <View style={{flexDirection: 'row', marginTop:10}}>
                            <TextInput
                                style={{
                                    flex: 7,
                                    borderColor: 'gray', borderWidth: 1, maxHeight: 80,
                                    textAlignVertical: 'top',
                                    borderRadius: 10, backgroundColor: '#E5E5E5'
                                }}
                                maxLength={800}
                                numberOfLines={4}
                                multiline={true}
                                editable={true}
                                placeholder="Enter detail here*"
                                autoCorrect={true}
                                autoFocus={true}
                                onChangeText={
                                    TextValueItem => this.GetValueFunction(TextValueItem)

                                }
                            />
                            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                                <Text>{this.state.textValue}/800</Text>
                                <TouchableOpacity style={{alignItems: 'center', marginTop: 5}} onPress={()=>this.GetBottomNavigationView()}>
                                    <Image style={{width: 30, height: 30}}
                                           source={require('../../asset/images/File.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            marginTop: 20,
                            padding: 10,
                            flexDirection: 'row',
                        }}>
                            <View style={{width: '25%'}}></View>
                            <TouchableOpacity  style={{
                                backgroundColor: '#31AECA',
                                width: '50%',
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius:10,
                            }}>
                                <Text style={{color:'#fff'}}>SEND</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <BottomSheet
                        visible={this.state.visible}
                        onBackButtonPress={this.GetBottomNavigationView}
                        onBackdropPress={this.GetBottomNavigationView}
                    >
                        <View style={styles.bottomNavigationView}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}>
                                <Text style={{ textAlign: 'center', padding: 20, fontSize: 20 }}>
                                    Select File
                                </Text>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        onPress={()=>this.GetBottomNavigationView()}
                                        style={styles.bottomNavigationTouchableOpacity}>
                                        <Image style={{width:30, height:30,}} source={require('../../asset/images/home.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={()=>this.GetBottomNavigationView()}
                                        style={styles.bottomNavigationTouchableOpacity}>
                                        <Image style={{width:30, height:30,}} source={require('../../asset/images/home.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={()=>this.GetBottomNavigationView()}
                                        style={styles.bottomNavigationTouchableOpacity}>
                                        <Image style={{width:30, height:30,}} source={require('../../asset/images/home.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </BottomSheet>
                </View>
            </ScrollView>

        );
    }
}

export default DetailWriteScreen;
const styles = StyleSheet.create({
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomNavigationTouchableOpacity:{
        width:60,
        height:60,
        margin:10,
        borderRadius:50,
        borderWidth:1, alignItems:'center',justifyContent:'center'
    }
});
