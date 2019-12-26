import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import HomeHelp from "./Home_Help";
import VideoHelp from "./Video_Help";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import {Image, TouchableOpacity} from "react-native";
import {Logo} from "../components/header";

const Helpstack = createMaterialTopTabNavigator(
    {
        Home: {screen: HomeHelp},
        Video: {screen: VideoHelp},
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: {
                backgroundColor: '#633689',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
            },
        },
    }
);
const Tabhelp = createStackNavigator({
    Tabhelp: {
        screen: Helpstack,
        navigationOptions: {
            header: null
        }
    }
});
export default createAppContainer(Tabhelp);
