import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Navbar from '@components/layouts/Navbar';
import { Home, Category } from '@screens/index';

import { routes } from '@utils/constants';
import { useTrans } from '@utils/hooks';

const Tab = createBottomTabNavigator();
const RouteApp: IRouteAppComponent<IRouteAppComponentProps> = ({ startScreen }) => {
    return (
        <Tab.Navigator initialRouteName={startScreen}>
            <Tab.Screen name={routes.CLIENT.HOME} component={Home} />
            <Tab.Screen name={routes.CLIENT.CATEGORY} component={Category} />
        </Tab.Navigator>
    );
};
export default RouteApp;
