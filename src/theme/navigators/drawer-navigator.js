import React from 'react';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer,} from 'react-navigation';
import BottomTabNavigator from './bottom-tab-navigator';
import {
    FeedbackNavigator,
    NotificationNavigator,
    ChangePasswordNavigator,
    HelpNavigator,
    LogoutNavigator,
    QRCodeNavigator,
    RateTheAppNavigator,
    ReferVclassNavigator,
    RefreshAccountNavigator,
    RouteTrackerNavigator,
    TestNotificationNavigator,
} from './screen-stack-navigator';
import {Text, View, SafeAreaView, ScrollView, Image, StatusBar} from 'react-native';

const CustomDrawer = (props) => (
    <SafeAreaView style={{flex: 1}}>

        <View style={{height: 200, backgroundColor: 'white', borderBottomWidth: 0.2}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../../asset/images/logo.png')}
                       style={{width: 120, height: 120, borderRadius: 60}}/>
                <View style={{justifyContent: 'center'}}>
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#86fa82'}}>Thanh Minh</Text>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#86fa82'}}>0389588631</Text>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginLeft: 15}}>
                <Image style={{height: 25, width: 25}} source={require('../../asset/images/bell.png')}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#86fa82',marginLeft:10}}>K3 PRO</Text>
            </View>
            <View style={{flex: 1, marginLeft: 15,flexDirection: 'row'}}>
                <Image style={{height: 25, width: 25}} source={require('../../asset/images/house.png')}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#86fa82',marginLeft:10}}>Notification History</Text>
            </View>
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>

);
const DrawerNavigator = createDrawerNavigator({

    Home: BottomTabNavigator,
    'Làm mới tài khoản': RefreshAccountNavigator,
    'Tuyến xe bus': RouteTrackerNavigator,
    'QR Code': QRCodeNavigator,
    'Cài đặt thông báo': NotificationNavigator,
    'Kiểm tra thông báo': TestNotificationNavigator,
    'Hỗ trợ': HelpNavigator,
    'Đánh giá app': RateTheAppNavigator,
    'Phản hồi': FeedbackNavigator,
    'Giới thiệu Kids now': ReferVclassNavigator,
    'Đổi mật khẩu': ChangePasswordNavigator,
    'Thoát': LogoutNavigator,
}, {
    contentComponent: CustomDrawer,

});
const Drawer = createAppContainer(DrawerNavigator);
export default Drawer;
