import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import Calendar from '../pages/Calendar';
import Home from '../pages/Home';
import NoticeBroard from '../pages/NoticeBroard';
import Payments from '../pages/Payments';
import WriteSchool from '../pages/WriteSchool';
import Feedback from '../page_drawer/Feedback';
import Notification from '../page_drawer/Notification';

export const CalendarNavigator = createStackNavigator({
    Calendar: { screen: Calendar }
});
export const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
});
export const NoticeBroardNavigator = createStackNavigator({
    NoticeBroard: { screen: NoticeBroard }
});
export const PaymentsNavigator = createStackNavigator({
    Payments: { screen: Payments }
});
export const WriteSchoolNavigator = createStackNavigator({
    WriteSchool: { screen: WriteSchool }
});
export const FeedbackNavigator = createStackNavigator({
    Feedback: { screen: Feedback }
});
export const NotificationNavigator = createStackNavigator({
    Notification: { screen: Notification }
});
