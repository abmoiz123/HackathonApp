import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux'
// import { googlelogin, logout } from '../../Store/Action/Action'
// import auth from '@react-native-firebase/auth';
import { forcheck } from '../Store/Action/Action'
import database from '@react-native-firebase/database';

class Forcheck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }

    savedata = () => {
        let email = this.state.email
        database().ref('/').child('users').push(email)
    }
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

    render() {
        console.log(this.props.users)
        return (
            <View style={styles.container}>
                {/* <View style={{ borderWidth: 2, borderColor: "grey", width: "80%" }}>
                    <TextInput value={this.state.email} onChangeText={(text) => this.setState({email: text})} />
                    <Button onPress={() => this.savedata()} title="save data" />
                </View> */}
                <TouchableOpacity
                    style={styles.Loginbtn}
                    onPress={() => this.props.forcheck()}
                >
                    <Text style={styles.logintext}>LogIn</Text>
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
    bloodicon: {
        width: 150,
        height: 250,
        resizeMode: 'contain',
        // borderWidth: 10,
        // borderColor: 'black'
    },
    appname: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
        margin: 20,
        textShadowOffset: { width: -1, height: 1 },
        textShadowColor: 'grey',
        textShadowRadius: 10
    },
    Loginbtn: {
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: 'center',
        // padding: 10,
        height: 50,
        margin: 10,
        marginTop: 20,
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
        fontWeight: 'bold',
        marginRight: 20
    },
    signuptext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 20
    },
});

const mapStateToProps = (state) => ({
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    // googlelogin: (props) => dispatch(googlelogin(props)),
    forcheck: () => dispatch(forcheck()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Forcheck);