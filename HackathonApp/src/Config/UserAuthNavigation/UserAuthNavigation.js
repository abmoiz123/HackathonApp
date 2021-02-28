import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../Screens/Login/login';
// import SignUpMain from '../../Screens/Signup/SignUpMain'
import Signup from '../../Screens/Signup/Signup';
import Signup2 from '../../Screens/Signup/Signup2';



const Stack = createStackNavigator();

function UserAuthNavigation() {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
            />
            <Stack.Screen
                name="Signup2"
                component={Signup2}
            />
        </Stack.Navigator>
    )
}

export default UserAuthNavigation;