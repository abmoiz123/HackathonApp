import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerContent from './DrawerContent';
import MainHomeStudents from '../../Screens/Students/Students';
import Companies from '../../Screens/Companies/Companies';
import Profile from '../../Screens/Profile/Profile'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: 25, height: 25, marginLeft: 15 }} onPress={() => toggleDrawer()}>
                <MaterialCommunityIcons name="menu" style={{ fontSize: 25, color: 'white' }} />
                {/* <Text>hello</Text> */}
            </TouchableOpacity>
        </View>
    );
}

function firstScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="MainHomeStudents">
            <Stack.Screen
                name="MainHomeStudents"
                component={MainHomeStudents}
                options={{
                    title: 'Campus Recruitment System',
                    headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
                    headerStyle: {
                        backgroundColor: 'orange',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Campus Recruitment System',
                    headerStyle: {
                        backgroundColor: 'orange',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                name="Companies"
                component={Companies}
                options={{
                    title: 'Campus Recruitment System',
                    headerStyle: {
                        backgroundColor: 'orange',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
}

function DrawerNavigation() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="MainHome" component={firstScreenStack} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;