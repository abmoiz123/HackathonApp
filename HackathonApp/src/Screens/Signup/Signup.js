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
import { RadioButton } from 'react-native-paper';


import { register1 } from '../../Store/Action/Action'
import { connect } from 'react-redux'


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmail: '',
            usersignpass: '',
            usersignpassconf: '',
            userStatus: 'Student',
        }
    }
    handleevent = () => {
        let userStatus = this.state.userStatus
        let userEmail = this.state.userEmail;
        let usersignpass = this.state.usersignpass;
        let usersignpassconf = this.state.usersignpassconf;
        if (userEmail !== '' && usersignpass !== '' && usersignpassconf !== '') {
            let term = { newUserEmail: userEmail, newUserPass: usersignpassconf, userStatus: userStatus };
            this.props.register1(term, this.props)
            this.props.navigation.navigate('Signup2')
        }
        else {
            alert('Enter Your Username or Password.') 
        }
        this.setState({
            userEmail: '',
            usersignpass: '',
            usersignpassconf: ''
        })
        // this.props.navigation.navigate('Signup2')
        // getuser = () => {
        //     database().ref('/').child('users').on('child_added', (data) => {
        //         console.log(data.val())
        //     })
        // }
    }
    render() {
        // let authuser = this.props.users.term
        // authuser.map((authuser)=>{
        //     console.log("users===>", authuser.newUserEmail)
        //     console.log("users===>", authuser.newUserPass)
        // })
        return (
            <View style={styles.container}>
                <Text style={styles.appname}>
                    Campus Recruitment System
                </Text>
                <Text style={styles.userStatusHeading}>Sign Up For?</Text>
                <View style={styles.userStatus}>
                    <RadioButton
                        value="Student"
                        status={this.state.userStatus === 'Student' ? 'checked' : 'unchecked'}
                        onPress={() => this.setState({ userStatus: 'Student' }, () => { console.log(this.state.userStatus) })}
                    />
                    <Text style={styles.userStatusText}>Student</Text>
                    <RadioButton
                        value="Company"
                        status={this.state.userStatus === 'Company' ? 'checked' : 'unchecked'}
                        onPress={() => this.setState({ userStatus: 'Company' }, () => { console.log(this.state.userStatus) })}
                    />
                    <Text style={styles.userStatusText}>Company</Text>
                </View>

                <View style={styles.loginform}>
                    <Item style={styles.logininput} floatingLabel>
                        <Label>Email</Label>
                        <Input
                            ref={(el) => { this.userEmail = el; }}
                            onChangeText={(userEmail) => this.setState({ userEmail })}
                            value={this.state.userEmail}
                        />
                    </Item>
                    <Item style={styles.logininput} floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            ref={(el) => { this.usersignpass = el; }}
                            onChangeText={(usersignpass) => this.setState({ usersignpass })}
                            value={this.state.usersignpass}
                        />
                    </Item>
                    <Item style={styles.logininput} floatingLabel>
                        <Label>Repeat Password</Label>
                        <Input
                            secureTextEntry={true}
                            ref={(el) => { this.usersignpassconf = el; }}
                            onChangeText={(usersignpassconf) => this.setState({ usersignpassconf })}
                            value={this.state.usersignpassconf}
                        />
                    </Item>
                </View>
                <TouchableOpacity
                    style={styles.Loginbtn}
                    // onPress={() => this.props.navigation.navigate('Signup2')}
                    onPress={() => this.handleevent()}
                // onPress={() => this.getuser()}
                >
                    <Text style={styles.logintext}>Next</Text>
                </TouchableOpacity>
                <View style={styles.signupoption}>
                    <Text style={styles.signupoptiontext}>Already a member ? </Text>
                    <Text style={styles.signupoptiontext2} onPress={() => this.props.navigation.navigate('Login')} >Login here</Text>
                </View>
            </View >
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
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
        margin: 20,
        padding: 0,
        textShadowOffset: { width: -1, height: 1 },
        textShadowColor: 'grey',
        textShadowRadius: 10,
        textAlign: 'center'
    },
    Loginbtn: {
        backgroundColor: 'orange',
        alignItems: "center",
        padding: 10,
        // margin: 10,
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
        // marginTop: 20,
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
    },
    userStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    userStatusHeading: {
        fontWeight: 'bold',
        color: 'orange',
        fontSize: 27,
        marginTop: 5,
        marginBottom: 10,
        textAlign: 'center'
        // flex: 1,
    },
    userStatusText: {
        fontSize: 17,
        alignSelf: 'center',
        marginRight: 10,
        flex: 1,
    },
});

const mapStateToProps = (state) => ({
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    register1: (term, props) => dispatch(register1(term, props)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);