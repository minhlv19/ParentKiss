import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {HomeNavigator,CalendarNavigator,NoticeBroardNavigator,PaymentsNavigator,WriteSchoolNavigator} from './screen-stack-navigator';
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
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'WriteSchool') {
                    iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Notice') {
                    iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Calendar') {
                    iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Payment') {
                    iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
                }

                return <IconComponent name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#42f44b',
            inactiveTintColor: 'gray',
        },
    },
);
export default BottomTabNavigator;
