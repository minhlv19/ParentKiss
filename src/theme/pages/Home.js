import React, {Component} from 'react';
import {View, Text, Picker, StyleSheet, ScrollView, Image,RefreshControl, ImageBackground} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {MenuButton} from '../components/header';
import {Logo} from '../components/header';

const datamatey = [
    {id: 1, name: 'aaa'},
    {id: 2, name: 'bbbb'},
];

class Home extends Component {
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
        this.itemModal_Activities = [
            {id: 1, name: 'All Activities'},
            {id: 2, name: "bb 1"},
        ];
        this.itemModal_Yeal = [
            {id: 1, name: 'aa 2'},
            {id: 2, name: "bb 2"},
        ];
        this.state = {
            date: '',
        };


    };


    componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year

        that.setState({
            //Setting the value of the date time
            date:
                date + '/' + month + '/' + year,
        });
    }

    render() {

        return (
            <ImageBackground style={{flex: 1}}
                             source={{uri: 'https://i.pinimg.com/564x/69/51/a7/6951a7e36f0490adaebe26ee5af09e7c.jpg'}}>
                {/*<ScrollView*/}
                {/*    contentContainerStyle={styles.scrollView}*/}
                {/*    refreshControl={*/}
                {/*        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />*/}
                {/*    }*/}
                {/*>*/}
                    <View style={{flex: 1,}}>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#EEEEEE',
                            height: 36,
                            margin: 10,
                            borderRadius: 10,

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
                        <View style={{flexDirection: 'row'}}>
                            <ModalDropdown
                                options={this.itemModal_Activities.map((item, key) => <Text>{item.name} </Text>)}
                                defaultValue={'All Activities'}
                                style={styles.textpicek}
                                dropdownStyle={styles.downText}
                                dropdownTextStyle={styles.dropdownTextStyle_K}
                                textStyle={styles.textStyle_K}
                            />
                            <ModalDropdown
                                options={this.itemModal_Yeal.map((item, key) => <Text>{item.name} </Text>)}
                                defaultValue={'This Yeal'}
                                style={styles.textpicek}
                                dropdownStyle={styles.downText}
                                dropdownTextStyle={styles.dropdownTextStyle_K}
                                textStyle={styles.textStyle_K}
                            />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '30%'}}></View>
                            <View style={styles.viewYeal}>
                                <Text style={styles.textYeal}>{this.state.date}</Text>
                            </View>
                            <View style={{width: '30%'}}></View>
                        </View>
                        <View style={styles.viewNoi}>
                            <View style={{flex: 1}}>
                                <Image style={styles.viewImg}
                                       source={require('../../asset/images/nat.png')}/>
                            </View>
                            <View style={styles.viewNoiDung}>
                                <View>
                                    <Text style={{fontSize: 16}}>Tieu de We are going to use</Text>
                                    <Text style={{fontSize: 14, color: '#222222'}}>will help you to know more about the
                                        wayas you can
                                        make a React Native project. We are going to use react-native init to make our
                                        React
                                        Native App. Assuming that you have node installed, you can use npm to install
                                        the</Text>
                                </View>
                                <View style={styles.viewname}>
                                    <Text style={styles.textGio}>9:30 AM</Text>
                                    <Text style={styles.textName}>Minh</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                {/*</ScrollView>*/}
            </ImageBackground>
        );
    }
}

export default Home;
const styles = StyleSheet.create({
    textpicek: {

        width: '46%',
        borderWidth: 0.2,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginLeft: 10,
        textAlign: 'center',
        backgroundColor: '#EEEEEE',

    },
    downText: {
        width: '46%',
        height: 250,
        borderWidth: 2,
    },
    dropdownTextStyle_K: {
        marginLeft: 10,
        fontSize: 13,
    },
    textStyle_K: {
        marginLeft: 20,
        fontSize: 13,
    },
    viewYeal: {
        width: '40%',
        height: 30,
        borderRadius: 20,
        backgroundColor: '#2cbf8b',
        padding: 5,
        marginTop: 10,
    },
    textYeal: {
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },
    viewNoi: {
        marginTop: 5,
        marginLeft: 15,
        flexDirection: 'row'
    },
    viewImg: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    viewNoiDung: {
        marginLeft: 6,
        flex: 5,
        marginRight: 15
    },
    viewname: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginTop: 2
    },
    textName: {
        flex: 1,
        fontSize: 11,
        color: '#222222',
        textAlign: 'right'
    },
    textGio: {
        flex: 1,
        fontSize: 11,
        color: '#222222',
    }

})
