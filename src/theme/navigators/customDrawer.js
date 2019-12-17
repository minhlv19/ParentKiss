import React, {Component} from 'react';
import {Image, View} from 'react-native';

class CustomDrawer extends Component {
    render() {
        return (

            <View style={styles.sideMenuContainer}>

                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg' }}
                       style={styles.sideMenuProfileIcon} />

                <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />

                <View style={{width: '100%'}}>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

                        <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg' }}
                               style={styles.sideMenuIcon} />

                        <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('First') }} > First Activity </Text>

                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

                        <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg' }}
                               style={styles.sideMenuIcon} />

                        <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Second') }} > Second Activity </Text>

                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

                        <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg' }}
                               style={styles.sideMenuIcon} />

                        <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Third') }} > Third Activity </Text>

                    </View>


                </View>

                <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15}} />


            </View>
        );
    }
}

export default CustomDrawer;
