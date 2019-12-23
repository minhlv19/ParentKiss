import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Alert, Button, StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {Logo, MenuButton} from '../components/header';
import hide from '../../asset/images/hide.png';
import show from '../../asset/images/show.png';

class Payments extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()}/>,
            headerTitle: <Logo/>,
            headerBackTitle: 'Home',
            headerLayoutPreset: 'center',

        };
    };

    constructor() {
        super();
        this.state = {
            show: true,
            uri: require('../../asset/images/hide.png'),
        };

    }

    renderImageShow = () => {

        this.setState({
            uri: require('../../asset/images/show.png'),
        });
    };
    renderImageHide = () => {

        this.setState({
            uri: require('../../asset/images/hide.png'),
        });
    };
    ShowHideComponent = () => {
        if (this.state.show == true) {
            this.setState({show: false},
                this.renderImageShow);
        } else {
            this.setState({show: true},
                this.renderImageHide);
        }
    };

    render() {
        return (
            <View>

                <View>
                    <View style={styles.hideshow}>
                        <TouchableOpacity onPress={this.ShowHideComponent}>
                            <Image source={
                                this.state.uri
                            }
                                   style={{
                                       width: 30,
                                       height: 30,
                                   }}

                            />
                        </TouchableOpacity>

                        <View>
                            <View style={styles.text1}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Program wise Fee</Text>
                                <Text>Child's current programs'fee structure and applied discounts are displayed
                                    here</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{alignItems: 'center',marginTop: 10}}>
                        {this.state.show ? (
                            <View style={styles.show}>
                                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',margin:10}}>Kindergarten</Text>
                                <Text style={{color:'#fff',margin:10}}>Program Fee : 0 VND/Year</Text>
                            </View>
                        ) : null}
                    </View>
                </View>

            </View>
        );
    }
}

export default Payments;
const styles = StyleSheet.create({
    hideshow: {
        flexDirection: 'row',
        marginTop: 6,
        marginLeft: 10,
    },
    text1: {
        marginLeft: 6,
    },
    show: {
        backgroundColor: '#ff73d3',
        borderRadius: 10,
        width: '90%',


    },
});
