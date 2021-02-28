import React from 'react';
import {
    NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserAuthNavigation from '../Config/UserAuthNavigation/UserAuthNavigation'
import DrawerNavigation from './DrawerNavigations/DrawerNavigation'



function uservalid() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserAuthNavigation"
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="UserAuthNavigation"
                    component={UserAuthNavigation}
                />
                <Stack.Screen
                    name="DrawerNavigation"
                    component={DrawerNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default uservalid;