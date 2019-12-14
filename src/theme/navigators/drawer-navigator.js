import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import BottomTabNavigator from './bottom-tab-navigator';
import {FeedbackNavigator, NotificationNavigator} from './screen-stack-navigator';

const DrawerNavigator = createDrawerNavigator({
    Home: BottomTabNavigator,
    Feedback: FeedbackNavigator,
    Notification: NotificationNavigator,
});
const Drawer = createAppContainer(DrawerNavigator);
export default Drawer;
