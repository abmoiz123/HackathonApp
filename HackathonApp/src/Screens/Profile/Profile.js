import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Foundation';
import Icon3 from 'react-native-vector-icons/Fontisto';
// import auth from '@react-native-firebase/auth';

function Profile() {


    // check = () => {
    //     let user = auth().currentUser;
    //     if (user) {
    //         console.log('User email: ', user.email);
    //         console.log('User email: ', user.displayName);
    //     }
    //     else {
    //         alert('soortt')
    //     }
    // }
    // let user = auth().currentUser;
    const user = {
        email: 'Abdulmoiz328@gmail.com',
        fname: 'Abdul',
        sname: 'moiz',
        phoneno: '0320-1262000',
        gender: 'male',
        Department: 'cicil',
        age: '18',
        Qualification: 'matric',
        Skills: 'react'
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.profilenamebox}>
                <View style={styles.userIcon}>
                    <Icon
                        name="account-outline"
                        color='orange'
                        size={180}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'orange', margin: 5 }}>{user.fname} {user.sname}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'orange', margin: 5 }}>{user.email}</Text>
                </View>

            </View>
            <View style={styles.userdetailscontainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 30, color: 'white' }}>Account Info</Text>
                </View>
                <View>
                    <ScrollView style={styles.userdetailsbox}>
                        <View style={styles.userDetail}>
                            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="account-outline" color='white' size={50} />
                            </View>
                            <View>
                                <Text style={styles.userDetail2}>Name</Text>
                                <Text style={styles.userDetail3}>{user.fname} {user.sname}</Text>
                            </View>
                        </View>
                        <View style={styles.userDetail}>
                            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="account-outline" color='white' size={50} />
                            </View>
                            <View>
                                <Text style={styles.userDetail2}>Gender</Text>
                                <Text style={styles.userDetail3}>{user.gender}</Text>
                            </View>
                        </View>
                        <View style={styles.userDetail}>
                            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="home-map-marker" color='white' size={50} />
                            </View>
                            <View>
                                <Text style={styles.userDetail2}>Department</Text>
                                <Text style={styles.userDetail3}>{user.Department}</Text>
                            </View>
                        </View>
                        <View style={styles.userDetail}>
                            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="account-outline" color='white' size={50} />
                            </View>
                            <View>
                                <Text style={styles.userDetail2}>Age</Text>
                                <Text style={styles.userDetail3}>{user.age}</Text>
                            </View>
                        </View>
                        <View style={styles.userDetail}>
                            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="account-outline" color='white' size={50} />
                            </View>
                            <View>
                                <Text style={styles.userDetail2}>Qualification</Text>
                                <Text style={styles.userDetail3}>{user.Qualification}</Text>
                            </View>
                        </View>
                        <View style={styles.userDetail}>
                            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="account-outline" color='white' size={50} />
                            </View>
                            <View>
                                <Text style={styles.userDetail2}>Skills</Text>
                                <Text style={styles.userDetail3}>{user.Skills}</Text>
                            </View>
                        </View>
                        <View style={styles.userDetail}>
                            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon2 name="telephone" color='white' size={50} />
                            </View>
                            <View>
                                <Text style={styles.userDetail2}>Mobile No</Text>
                                <Text style={styles.userDetail3}>{user.phoneno}</Text>
                            </View>
                        </View>
                        <View style={styles.userDetail}>
                            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="email" color='white' size={50} />
                            </View>
                            <View>
                                <Text style={styles.userDetail2}>Email</Text>
                                <Text style={styles.userDetail3}>{user.email}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profilenamebox: {
        backgroundColor: 'white',
        padding: 10
        // height: 250
    },
    userIcon: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userdetailscontainer: {
        flex: 1,
        backgroundColor: 'orange',
        color: 'white',
        paddingBottom: 100
    },
    userdetailsbox: {
        paddingLeft: 15,
        paddingRight: 15
    },
    userDetail: {
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 3,
        marginTop: 5,
        marginBottom: 5,
    },
    userDetail2: {
        marginLeft: 15,
        // alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    userDetail3: {
        marginLeft: 15,
        // alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default Profile
