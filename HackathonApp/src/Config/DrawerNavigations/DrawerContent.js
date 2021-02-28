import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
// import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function DrawerContent(props) {
    // logout = () => {
    //     auth()
    //         .signOut()
    //         .then(() => alert('SignOut Done'));
    // }
    const paperTheme = useTheme();
    return (
        <View style={{ flex: 1, }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    {/* <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', }}>
                            <Avatar.Image
                                source={require('../../Images/blood.jpg')}
                                size={70}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column', flex: 1 }}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>Abdulmoiz328@gmail.com</Caption>
                            </View>
                        </View>

                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Title style={styles.Quote}>Donate Blood, Save Lives</Title>
                        </View>
                    </View> */}

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('MainHome') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Companies"
                            onPress={() => { props.navigation.navigate('Companies') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About Us"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { props.navigation.navigate('Login') }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        padding: 20,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
        color: 'white'
    },
    caption: {
        // width: '100%',
        fontSize: 14,
        lineHeight: 15,
        color: 'white',
    },
    Quote: {
        marginTop: 10,
        color: 'white',
        fontSize: 18,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default DrawerContent;