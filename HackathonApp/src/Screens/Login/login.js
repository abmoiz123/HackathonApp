import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    Item,
    Label,
    Input

} from 'native-base'
// import { connect } from 'react-redux'
// import { googlelogin } from '../../Store/Action/Action'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            userlogid: '',
            userlogpass: '',
            userlogid2: 'Abdulmoiz328@gmail.com',
            userlogpass2: 'moiz@1234'
        }
    }
    // handleevent = () => {
    //   let userlogid = this.state.userlogid
    //   let userlogpass = this.state.userlogpass
    //   let userlogid2 = this.state.userlogid2
    //   let userlogpass2 = this.state.userlogpass2

    //   if (userlogid !== '' && userlogpass !== '') {
    //     if (userlogid === userlogid2 && userlogpass === userlogpass2) {
    //       alert('welcome')
    //     }
    //     else {
    //       alert('You Have Entered Incorrect Username or Password')
    //     }
    //   }
    //   else if (userlogid !== '' && userlogpass === '') {
    //     alert('Enter Your Password')
    //   }
    //   else if (userlogid === '' && userlogpass !== '') {
    //     alert('Enter Your Username')
    //   }
    //   else {
    //     alert('Enter Your Username or Password.')
    //   }
    //   this.setState({
    //     userlogid: '',
    //     userlogpass: ''
    //   })
    // }

    loginHandle = (userName, password) => {
        let userlogid = this.state.userlogid
        let userlogpass = this.state.userlogpass
        userName = this.state.userlogid2
        password = this.state.userlogpass2

        if (userlogid.length == 0 || userlogpass.length == 0) {
            alert('Wrong Input! \n\nUsername or password field cannot be empty.')
            return;
        }
        else if (userlogid === userName || userlogpass === password) {
            this.props.navigation.navigate('DrawerNavigation')
            this.setState({
                userlogid: '',
                userlogpass: ''
            })
        }
        else {
            alert('Invalid User! \n\nUsername or password is incorrect.')
        }
        // const foundUser = Users.filter(item => {
        //   return userName == item.username && password == item.password;
        // });

        // if (data.username.length == 0 || data.password.length == 0) {
        //   Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        //     { text: 'Okay' }
        //   ]);
        //   return;
        // }

        // if (foundUser.length == 0) {
        //   Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        //     { text: 'Okay' }
        //   ]);
        //   return;
        // }
        // signIn(foundUser);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.appname}>
                    Campus Recruitment System
                </Text>
                <View style={styles.loginform}>
                    <Item style={styles.logininput} floatingLabel>
                        <Label>Username</Label>
                        <Input
                            ref={(el) => { this.userlogid = el; }}
                            onChangeText={(userlogid) => this.setState({ userlogid })}
                            value={this.state.userlogid}
                        />
                    </Item>
                    <Item style={styles.logininput} floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            ref={(el) => { this.userlogpass = el; }}
                            onChangeText={(userlogpass) => this.setState({ userlogpass })}
                            value={this.state.userlogpass}
                        />
                    </Item>
                </View>
                <TouchableOpacity
                    style={styles.Loginbtn}
                    onPress={() => this.loginHandle()}
                    // onPress={() => this.props.googlelogin()}
                    // onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.logintext}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.signupoption}>
                    <Text style={styles.signupoptiontext}>Not a member yet ? </Text>
                    <Text style={styles.signupoptiontext2} onPress={() => this.props.navigation.navigate('Signup')}>SignUp now</Text>
                </View>
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
        width: 100,
        height: 200,
        resizeMode: 'contain',
        padding: 0,
        margin: 0
    },
    appname: {
        color: 'orange',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 0,
        padding: 0,
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
        fontSize: 30,
        fontWeight: 'bold'
    },
    loginform: {
        width: '100%',
        marginTop: 20,
        marginBottom: 30
    },
    logininput: {
        marginBottom: 20
    },
    signupoption: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
    },
    signupoptiontext: {
        flex: 1,
        textAlign: 'right',
        fontSize: 15
    },
    signupoptiontext2: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'orange'
    }
});

// const mapStateToProps = (state) => ({
//   users: state.users
// })
// const mapDispatchToProps = (dispatch) => ({
//   googlelogin: () => dispatch(googlelogin()),
// })

// export default connect(null, mapDispatchToProps)(Login);
export default Login;