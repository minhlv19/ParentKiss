import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, Alert, StyleSheet} from 'react-native';
import {Logo, MenuButton} from '../components/header';
import {BottomSheet} from 'react-native-btr';
import {ScrollView} from 'react-navigation';
import ImagePicker from "react-native-image-picker";

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
        this.state = {
            textValue: '0',
            visible: false,
            avatarSource: null,
        };
    };

    GetValueFunction = (TextValueItem) => {
        var valu = TextValueItem.length.toString();
        this.setState({textValue: valu})
    };
    SelectImage = async () => {
        ImagePicker.showImagePicker({noData: true, mediaType: 'photo'}, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({
                    avatarSource: response.uri,
                });
            }
            this.setState({visible: !this.state.visible});
        });
    }
    GetBottomNavigationView = () => {
        this.setState({visible: !this.state.visible});
        this.setState({visible: !this.state.visible});
    };

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                    <View style={styles.View_row}>
                        <Image style={styles.Img_row}
                               source={require('../../asset/images/school.png')}/>
                        <Text style={styles.text_row}>Name</Text>
                    </View>
                    <View>
                        <Text>
                            Chọn loại ghi chú *
                        </Text>

                        <View style={styles.ViewImg}>
                            <View style={styles.ViewIconImg}>
                                <Image source={require('../../asset/images/Food.png')}
                                       style={styles.Icon_Img}/>
                                <Text>Food</Text>
                            </View>
                            <View style={styles.ViewIconImg}>
                                <Image source={require('../../asset/images/Food.png')}
                                       style={styles.Icon_Img}/>
                                <Text>Food</Text>
                            </View>
                            <View style={styles.ViewIconImg}>
                                <Image source={require('../../asset/images/Food.png')}
                                       style={styles.Icon_Img}/>
                                <Text>Food</Text>
                            </View>
                            <View style={styles.ViewIconImg}>
                                <Image source={require('../../asset/images/Food.png')}
                                       style={styles.Icon_Img}/>
                                <Text>Food</Text>
                            </View>
                            <View style={styles.ViewIconImg}>
                                <Image source={require('../../asset/images/Food.png')}
                                       style={styles.Icon_Img}/>
                                <Text>Food</Text>
                            </View>
                        </View>
                        <View>
                            <Text>Chọn chương trình*</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.KinderTouchableOpacity}>
                                <Text style={{margin: 4}}>Kindergarten</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <TextInput
                                style={styles.text_input}
                                maxLength={800}
                                numberOfLines={4}
                                multiline={true}
                                editable={true}
                                placeholder="Enter detail here*"
                                autoCorrect={true}
                                autoFocus={true}
                                onChangeText={TextValueItem => this.GetValueFunction(TextValueItem)}
                            />
                            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                                <Text>{this.state.textValue}/800</Text>
                                <TouchableOpacity style={{alignItems: 'center', marginTop: 5}}
                                                  onPress={() => this.GetBottomNavigationView()}>
                                    <Image style={{width: 30, height: 30}}
                                           source={require('../../asset/images/File.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.view_SEND}>
                            <View style={{width: '25%'}}></View>
                            <TouchableOpacity style={styles.view_SEND}>
                                <Text style={{color: '#fff'}}>SEND</Text>
                            </TouchableOpacity>

                        </View>
                        <View>{this.state.avatarSource && <Image source={{uri: this.state.avatarSource}} style={{
                            width: 80,
                            height: 120,
                            resizeMode: 'contain'
                        }}/>}
                        </View>
                    </View>
                    <BottomSheet
                        visible={this.state.visible}
                        onBackButtonPress={this.GetBottomNavigationView}
                        onBackdropPress={this.GetBottomNavigationView}>
                        <View style={styles.bottomNavigationView}>
                            <View
                                style={styles.view_Navigation}>
                                <Text style={{textAlign: 'center', padding: 20, fontSize: 20}}>
                                    Select File
                                </Text>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <TouchableOpacity
                                        onPress={this.SelectImage}
                                        style={styles.bottomNavigationTouchableOpacity}>
                                        <Image style={{width: 30, height: 30,}}
                                               source={require('../../asset/images/home.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={this.SelectImage}
                                        style={styles.bottomNavigationTouchableOpacity}>
                                        <Image style={{width: 30, height: 30,}}
                                               source={require('../../asset/images/home.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={this.SelectImage}
                                        style={styles.bottomNavigationTouchableOpacity}>
                                        <Image style={{width: 30, height: 30,}}
                                               source={require('../../asset/images/home.png')}/>
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
    View_row: {
        flexDirection: 'row',
        // backgroundColor: '#EEEEEE',
        height: 40,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    Img_row: {
        marginLeft: 5,
        height: 30,
        width: 30,
        padding: 5
    },
    text_row: {
        flex: 1,
        textAlign: 'center',
        padding: 3,
        color: '#2cbf8b',
        fontSize: 18,
    },
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomNavigationTouchableOpacity: {
        width: 60,
        height: 60,
        margin: 10,
        borderRadius: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ViewImg: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 4,
        marginRight: 4
    },
    ViewIconImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Icon_Img: {
        height: 50,
        width: 50,
        marginBottom: 6
    },
    KinderTouchableOpacity: {
        borderWidth: 1,
        alignSelf: 'flex-start',
        borderRadius: 5,
        marginLeft: '16%',
        marginTop: 10,
    },
    text_input: {
        flex: 7,
        borderColor: 'gray',
        borderWidth: 1,
        maxHeight: 80,
        textAlignVertical: 'top',
        borderRadius: 10,
        backgroundColor: '#E5E5E5'
    },
    view_SEND: {
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
    },
    TouchableOpacity_SEND: {
        backgroundColor: '#31AECA',
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    view_Navigation: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
});
