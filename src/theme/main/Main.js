import React, {Component} from 'react';
import { StyleSheet, View, Text, StatusBar, Platform,TouchableOpacity,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../pages/Home';
import WriteSchoolScreen from '../pages/WriteSchool';
import Calendar from '../pages/Calendar';
import NoticeBroard from '../pages/NoticeBroard';
import Payments from '../pages/Payments';



const PaymentStack = createStackNavigator(
    {
        NoticeBroard:{
            screen:Payments,
        }
    },
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:'#42f44b',
                textAlign:'center'
            },
            //headerLeft: <Main navigationProps={navigation} />,
            headerTintColor:'#ffffff',
            title:'Payments',

        }
    }
);

const NoticeStack = createStackNavigator(
    {
        NoticeBroard:{
            screen:NoticeBroard,
        }
    },
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:'#42f44b',
                textAlign:'center'
            },
            headerTintColor:'#ffffff',
            title:'Notice Broard',

        }
    }
)
const CalendarStack= createStackNavigator(
    {
        Calendar: {
            screen: Calendar,
        }
    },{
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:'#42f44b',
                textAlign:'center'
            },
            headerTintColor:'#ffffff',
            title:'Calendar',

        }
    }
);


const HomeStack = createStackNavigator(
    {
        Home:{
            screen:HomeScreen,

        }
    },
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:'#42f44b'
            },
            headerTintColor:'#ffffff',
            title:'Home',

        }
    }
);
const WriteSchoolStack = createStackNavigator(
    {
        WriteSchool:{
            screen:WriteSchoolScreen
        }
    },
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:'#42f44b'
            },
            headerTintColor:'#ffffff',
            title:'Write to School'
        }
    }

);
const Bottom = createBottomTabNavigator(
    {
        Home: { screen: HomeStack ,
        navigationOptions:{
            tabBarLabel: "Home"
        }},
        Notice: { screen: NoticeStack ,
            navigationOptions:{
                tabBarLabel: "Notice Broard"
            }},
        Calendar: { screen: CalendarStack ,
            navigationOptions:{
                tabBarLabel: "Calendar"
            }},
        WriteSchool: { screen: WriteSchoolStack,
            navigationOptions:{
                tabBarLabel: "Write to School"
            } },


        Payment: { screen: PaymentStack ,
            navigationOptions:{
                tabBarLabel: "Payments"
            }},


    },
    {
    defaultNavigationOptions: ({ navigation }) => ({

        tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'WriteSchool') {
            iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Notice') {
            iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Calendar') {
            iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Payment') {
            iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
}),
        tabBarOptions:{
        activeTintColor:'#42f44b',
            inactiveTintColor:'gray'
        }
}


);
const Main = createStackNavigator({
    Bottom:{screen:Bottom,
    navigationOptions:{
        header:null,
    }}
});

export default createAppContainer(Main) ;
