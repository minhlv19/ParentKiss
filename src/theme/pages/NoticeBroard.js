import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, ImageBackground,Button} from 'react-native';
import {Logo, MenuButton} from '../components/header';
// import  ImagePicker from "react-native-image-picker";


class NoticeBroard extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()}/>,
            headerTitle: <Logo/>,
            headerBackTitle: "Home",
            headerLayoutPreset: "center",

        };
    };
    // SelectImage=async()=>{
    //     ImagePicker.showImagePicker({noData:true, mediaType:'photo'}, (response) => {
    //         console.log('Response = ', response);
    //
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         } else {
    //             this.setState({
    //                 avatarSource: response.uri,
    //             });
    //         }
    //     });
    // };

    render() {
        return (
            <ImageBackground style={styles.container}
                             source={{uri: 'https://i.pinimg.com/736x/42/ea/2c/42ea2ce9bb786ff08098982b40809bec.jpg'}}>
                <Text style={styles.textWelcom}>Welcom to Kriyo App !</Text>
                <Text style={styles.textNotices}>Notices are yet to be added by the school !</Text>
                {/*{*/}
                {/*    this.state.avatarSource && <Image style={{width:200, height: 200, resizeMode:'contain'}}/>*/}
                {/*}*/}
                {/*<Button title='Select Image' onPress={this.SelectImage}/>*/}
            </ImageBackground>
        );
    }
}

export default NoticeBroard;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    textWelcom: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        color: '#fff'
    },
    textNotices: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
        marginTop: 20,
    }
})
