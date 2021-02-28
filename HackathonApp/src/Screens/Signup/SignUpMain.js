import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

class SignUpMain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.appname}>
                    Campus Recruitment System
                </Text>
                <TouchableOpacity
                    style={styles.Loginbtn}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.logintext}>COMPANY SIGNUP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Loginbtn}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.logintext}>STUDENTS SIGNUP</Text>
                </TouchableOpacity>
            </View >
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingBottom: 100,
        paddingLeft: 15,
        paddingRight: 15,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    appname: {
        color: 'orange',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 0,
        padding: 0,
        marginBottom: 30,
        textShadowOffset: { width: -1, height: 1 },
        textShadowColor: 'grey',
        textShadowRadius: 10
    },
    Loginbtn: {
        backgroundColor: 'orange',
        alignItems: "center",
        padding: 10,
        margin: 10,
        width: '100%',
        borderRadius: 50,
        shadowColor: 'black',
        shadowOffset: { height: 1, width: -1 },
        shadowRadius: 15,
        elevation: 6,
    },
    logintext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
});
export default SignUpMain;