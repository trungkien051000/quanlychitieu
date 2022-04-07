import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '@screens/index';

import { routes } from '@utils/constants';

const RootApp = createStackNavigator();
const RouteApp: IRouteAppComponent<IRouteAppComponentProps> = ({ startScreen }) => (
    <RootApp.Navigator initialRouteName={startScreen}>
        <RootApp.Screen name={routes.CLIENT.HOME} component={Home} options={{ headerShown: false }} />
    </RootApp.Navigator>
);

export default RouteApp;
