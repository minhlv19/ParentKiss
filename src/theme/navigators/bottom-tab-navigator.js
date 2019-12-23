import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
    HomeNavigator,
    CalendarNavigator,
    NoticeBroardNavigator,
    PaymentsNavigator,
    WriteSchoolNavigator,
} from './screen-stack-navigator';
import {Image} from 'react-native';

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel: 'Home',
            },
        },
        Notice: {
            screen: NoticeBroardNavigator,
            navigationOptions: {
                tabBarLabel: 'Notice Broard',
            },
        },
        Calendar: {
            screen: CalendarNavigator,
            navigationOptions: {
                tabBarLabel: 'Calendar',
            },
        },
        WriteSchool: {
            screen: WriteSchoolNavigator,
            navigationOptions: {
                tabBarLabel: 'Write to School',
            },
        },


        Payment: {
            screen: PaymentsNavigator,
            navigationOptions: {
                tabBarLabel: 'Payments',
            },
        },


    },
    {
        defaultNavigationOptions: ({navigation}) => ({

            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/images/home_click.png')
                                    : require('../../asset/images/home.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                } else if (routeName === 'WriteSchool') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/images/write_click.png')
                                    : require('../../asset/images/write.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                } else if (routeName === 'Notice') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/images/noticeboard_click.png')
                                    : require('../../asset/images/noticeboard.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                } else if (routeName === 'Calendar') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/images/calendar_click.png')
                                    : require('../../asset/images/calendar.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                } else if (routeName === 'Payment') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/images/payment_click.png')
                                    : require('../../asset/images/payments.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                }


            }
        }),
        tabBarOptions: {
            activeTintColor: '#42f44b',
            inactiveTintColor: 'gray',
        },
    },
);
export default BottomTabNavigator;
