import React, {Component} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
            <View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.textpicek}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }
                        >
                            <Picker.Item label="" value=""/>
                            <Picker.Item label="Java" value="java1122"/>
                            <Picker.Item label="Android 1" value="java12"/>
                        </Picker>
                    </View>
                    <View style={styles.textpicek}>
                        <Picker
                            style={{flex: 1}}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue1, itemIndex) =>
                                this.setState({language: itemValue1})
                            }>
                            <Picker.Item label="Java 1" value="java1"/>
                            <Picker.Item label="JavaScript 2" value="js1"/>
                        </Picker>
                    </View>
                </View>

                {/*<Text>SDFGHJK</Text>*/}
            </View>
        );
    }
}

export default Home;
const styles = StyleSheet.create({
    textpicek: {
        flex: 1, margin: 10, backgroundColor: '#CFCFCF', width: 100, height: 40
    },
})
