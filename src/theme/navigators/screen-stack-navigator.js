import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import Calendar from '../pages/Calendar';
import Home from '../pages/Home';
import NoticeBroard from '../pages/NoticeBroard';
import Payments from '../pages/Payments';
import WriteSchool from '../pages/WriteSchool';
import Feedback from '../page_drawer/Feedback';
import Notification from '../page_drawer/Notification';
import ChangePassword from '../page_drawer/Change-password';
import Help from '../page_drawer/Help';
import Logout from '../page_drawer/Logout';
import QRCode from '../page_drawer/QR-code';
import RateTheApp from '../page_drawer/Rate-the-app';
import ReferVclass from '../page_drawer/Refer-vclass';
import RefreshAccount from '../page_drawer/Refresh-Account';
import RouteTracker from '../page_drawer/Route-Tracker';
import TestNotification from '../page_drawer/Test-Notification';

import AllFragment from "../fragment/All_fragment";
import EventsFragment from "../fragment/Events_fragment";
import HolidaysFragment from "../fragment/Holidays_fragment";

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
export const ChangePasswordNavigator = createStackNavigator({
    ChangePassword: { screen: ChangePassword }
});
export const HelpNavigator = createStackNavigator({
    Help: { screen: Help }
});
export const LogoutNavigator = createStackNavigator({
    Logout: { screen: Logout }
});
export const QRCodeNavigator = createStackNavigator({
    QRCode: { screen: QRCode }
});
export const RateTheAppNavigator = createStackNavigator({
    RateTheApp: { screen: RateTheApp }
});
export const ReferVclassNavigator = createStackNavigator({
    ReferVclass: { screen: ReferVclass }
});
export const RefreshAccountNavigator = createStackNavigator({
    RefreshAccount: { screen: RefreshAccount }
});
export const RouteTrackerNavigator = createStackNavigator({
    RouteTracker: { screen: RouteTracker}
});
export const TestNotificationNavigator = createStackNavigator({
    TestNotification: { screen: TestNotification }
});
export const NotificationNavigator = createStackNavigator({
    Notification: { screen: Notification }
});

//Fregment
export const AllFragmentNavigator = createStackNavigator({
    AllFragment: { screen: AllFragment }
});
export const EventsFragmentNavigator = createStackNavigator({
    EventsFragment: { screen: EventsFragment }
});
export const HolidaysFragmentNavigator = createStackNavigator({
    HolidaysFragment: { screen: HolidaysFragment }
});

