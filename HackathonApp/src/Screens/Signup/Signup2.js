import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {
    Item,
    Label,
    Input,
} from 'native-base'
import { RadioButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux'
import { registerdone } from '../../Store/Action/Action'


class Signup2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userfname: '',
            userSname: '',
            userphoneno: '',
            userGender: 'Male',
            userDepartment: '',
            userAge: '',
            userQualification: '',
            userSkills: '',

            CompanyName: '',
            Established: '',
            HRName: '',
            comphoneno: ''
        }
    }
    handleevent = () => {
        let userStatus = 'Student'
        if (userStatus === 'Student') {
            let userfname = this.state.userfname;
            let userSname = this.state.userSname;
            let userphoneno = this.state.userphoneno;
            let userGender = this.state.userGender;
            let userDepartment = this.state.userDepartment;
            let userAge = this.state.userAge;
            let userQualification = this.state.userQualification;
            let userSkills = this.state.userSkills;
            if (userfname !== '' && userSname !== '' && userphoneno !== '' && userGender !== '' && userDepartment !== '' && userAge !== '' && userQualification !== '' && userSkills !== '') {
                // let term = { CompanyName: CompanyName, Established: Established, HRName: HRName, comphoneno: comphoneno };
                // this.props.registerdone(term)
                this.props.navigation.navigate('DrawerNavigation')
                // alert(term.CompanyName)
            } else {
                alert('Fill Form Properly')
            }
            // console.log('fname==>', userfname)
            // console.log('Sname==>', userSname)
            // console.log('phno==>', userphoneno)
            // console.log('Gender==>', userGender)
            // console.log('Department==>', userDepartment)
            // console.log('Age==>', userAge)
            // console.log('userQualification==>', userQualification)
            // console.log('userSkills==>', userSkills)
        } else {
            let CompanyName = this.state.CompanyName;
            let Established = this.state.Established;
            let HRName = this.state.HRName;
            let comphoneno = this.state.comphoneno;
            if (CompanyName !== '' && Established !== '' && HRName !== '' && comphoneno !== '') {
                // let term = { CompanyName: CompanyName, Established: Established, HRName: HRName, comphoneno: comphoneno };
                // this.props.registerdone(term)
                this.props.navigation.navigate('DrawerNavigation')
                // alert(term.CompanyName)
            } else {
                alert('Fill Form Properly')
            }
            // console.log('ComName==>', CompanyName)
            // console.log('ES==>', Established)
            // console.log('HR==>', HRName)
            // console.log('Pho==>', comphoneno)
        }
        // let user1 = this.props.users.NewSignUP
        // user1.map((v, i) => {
        //     console.log( 'staaaa==>',v, i)
        // })
        // console.log( 'staaaa==>',user1)
        // let userfname = this.state.userfname;
        // let userSname = this.state.userSname;
        // let userphoneno = this.state.userphoneno;
        // let userGender = this.state.userGender;
        // let userStatus = this.state.userStatus;
        // let userDepartment = this.state.userDepartment;
        // let userAge = this.state.userAge;
        // let userQualification = this.state.userQualification;
        // let userSkills = this.state.userSkills;
        // console.log('fname==>', userfname)
        // console.log('Sname==>', userSname)
        // console.log('phno==>', userphoneno)
        // console.log('Gender==>', userGender)
        // console.log('Status==>', userStatus)
        // console.log('Department==>', userDepartment)
        // console.log('Age==>', userAge)
        // console.log('userQualification==>', userQualification)
        // console.log('userSkills==>', userSkills)
        // this.props.navigation.navigate('AppNavigation')
        // let userphoneno = this.state.userphoneno
        // let userbloodgrp = this.state.userbloodgrp
        // if (userphoneno === '' || userbloodgrp === '') {
        //     alert('Enter Your details!')
        // }
        // else if (userbloodgrp === '') {
        //     alert('Enter Your Blood Group')
        // }
        // else if (userphoneno !== '' || userbloodgrp !== '') {
        //     if (userphoneno > 11 || userphoneno < 11) {
        //         alert('Invalid Number!')
        //     } else {
        //         let term = {
        //             userphoneno,
        //             userbloodgrp,
        //             userlastdonatedate,
        //             userlastdonatemonth,
        //             userlastdonateyear
        //         }
        //         console.log(term)
        //     }
        // }
        // this.setState({
        //     userphoneno: '',
        //     userbloodgrp: '',
        //     userlastdonatedate: '',
        //     userlastdonatemonth: '',
        //     userlastdonateyear: '',
        // })
    }
    render() {
        let user = this.props.users.NewSignUP
        let userStatus = user.userStatus
        // user.map((user) => {
        //     userStatus = user.userStatus
        // })
        // console.log(user.newUserEmail, user.newUserPass)
        // let userStatus = 'Company'
        return (
            <View style={styles.container}>
                <Text style={styles.appname}>
                    Campus Recruitment System
                </Text>
                {userStatus === "Student" ? (
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.loginform}>
                                <Item style={styles.logininput} floatingLabel>
                                    <Label>FirstName</Label>
                                    <Input
                                        ref={(el) => { this.userfname = el; }}
                                        onChangeText={(userfname) => this.setState({ userfname })}
                                        value={this.state.userfname}
                                    />
                                </Item>
                                <Item style={styles.logininput} floatingLabel>
                                    <Label>SurName</Label>
                                    <Input
                                        ref={(el) => { this.userSname = el; }}
                                        onChangeText={(userSname) => this.setState({ userSname })}
                                        value={this.state.userSname}
                                    />
                                </Item>
                                <Item style={styles.logininput2} floatingLabel>
                                    <Label>Phone</Label>
                                    <Input
                                        keyboardType='number-pad'
                                        ref={(el) => { this.userphoneno = el; }}
                                        onChangeText={(userphoneno) => this.setState({ userphoneno })}
                                        value={this.state.userphoneno}
                                    />
                                </Item>
                            </View>

                            <View style={styles.userStatus}>
                                <Text style={styles.userStatusHeading}>Gender</Text>
                                <RadioButton
                                    value="Male"
                                    status={this.state.userGender === 'Male' ? 'checked' : 'unchecked'}
                                    onPress={() => this.setState({ userGender: 'Male' })}
                                />
                                <Text style={styles.userStatusText}>MALE</Text>
                                <RadioButton
                                    value="feMale"
                                    status={this.state.userGender === 'FeMale' ? 'checked' : 'unchecked'}
                                    onPress={() => this.setState({ userGender: 'FeMale' })}
                                />
                                <Text style={styles.userStatusText}>FEMALE</Text>
                            </View>
                            <View style={styles.bloodgrpstyle}>
                                <DropDownPicker
                                    items={[
                                        { label: 'Software Engineering', value: 'SoftwareEngineering' },
                                        { label: 'Civil Engineering', value: 'CivilEngineering' },
                                        { label: 'Mass Communication', value: 'MassCommunication' },
                                        { label: 'Computer Engineering', value: 'ComputerEngineering' },
                                        { label: 'Accounting and Finance', value: 'AccountingandFinance' },
                                    ]}
                                    labelStyle={{
                                        fontSize: 17,
                                        textAlign: 'left',
                                        color: 'black'
                                    }}
                                    arrowStyle={{ marginRight: 10, fontWeight: 20 }}
                                    placeholder={"Department"}
                                    containerStyle={{ height: 50 }}
                                    style={{ backgroundColor: 'white' }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={item => this.setState({
                                        userDepartment: item.value
                                    })
                                    }
                                />
                            </View>
                            <View style={styles.bloodgrpstyle}>
                                <DropDownPicker
                                    items={[
                                        { label: '18', value: '18' },
                                        { label: '19', value: '19' },
                                        { label: '20', value: '20' },
                                        { label: '21', value: '21' },
                                        { label: '22', value: '22' },
                                        { label: '23', value: '23' },
                                        { label: '24', value: '24' },
                                        { label: '25', value: '25' },
                                        { label: '26', value: '26' },
                                        { label: '27', value: '27' },
                                        { label: '28', value: '28' },
                                        { label: '29', value: '29' },
                                        { label: '30', value: '30' },
                                    ]}
                                    labelStyle={{
                                        fontSize: 17,
                                        textAlign: 'left',
                                        color: 'black'
                                    }}
                                    arrowStyle={{ marginRight: 10, fontWeight: 20 }}
                                    placeholder={"Age"}
                                    containerStyle={{ height: 50 }}
                                    style={{ backgroundColor: 'white' }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={item => this.setState({
                                        userAge: item.value
                                    }, () => { console.log(this.state.userAge) })
                                    }
                                />
                            </View>
                            <View style={styles.loginform}>
                                <Item style={styles.logininput} floatingLabel>
                                    <Label>Qualification</Label>
                                    <Input
                                        ref={(el) => { this.userQualification = el; }}
                                        onChangeText={(userQualification) => this.setState({ userQualification })}
                                        value={this.state.userQualification}
                                    />
                                </Item>
                                <Item style={styles.logininput} floatingLabel>
                                    <Label>Skills</Label>
                                    <Input
                                        ref={(el) => { this.userSkills = el; }}
                                        onChangeText={(userSkills) => this.setState({ userSkills })}
                                        value={this.state.userSkills}
                                    />
                                </Item>
                            </View>
                        </View >
                    </ScrollView>
                ) : (
                        <ScrollView>
                            <View style={styles.container}>
                                <View style={styles.loginform}>
                                    <Item style={styles.logininput} floatingLabel>
                                        <Label>Company Name</Label>
                                        <Input
                                            ref={(el) => { this.CompanyName = el; }}
                                            onChangeText={(CompanyName) => this.setState({ CompanyName })}
                                            value={this.state.CompanyName}
                                        />
                                    </Item>
                                    <Item style={styles.logininput} floatingLabel>
                                        <Label>Established</Label>
                                        <Input
                                            ref={(el) => { this.Established = el; }}
                                            onChangeText={(Established) => this.setState({ Established })}
                                            value={this.state.Established}
                                        />
                                    </Item>
                                    <Item style={styles.logininput} floatingLabel>
                                        <Label>HR Name</Label>
                                        <Input
                                            ref={(el) => { this.HRName = el; }}
                                            onChangeText={(HRName) => this.setState({ HRName })}
                                            value={this.state.HRName}
                                        />
                                    </Item>
                                    <Item style={styles.logininput2} floatingLabel>
                                        <Label>Phone</Label>
                                        <Input
                                            keyboardType='number-pad'
                                            ref={(el) => { this.comphoneno = el; }}
                                            onChangeText={(comphoneno) => this.setState({ comphoneno })}
                                            value={this.state.comphoneno}
                                        />
                                    </Item>
                                </View>
                            </View >

                        </ScrollView>
                    )}
                <TouchableOpacity
                    style={styles.Loginbtn}
                    onPress={() => this.handleevent()}
                >
                    <Text style={styles.logintext}>Done</Text>
                </TouchableOpacity>
                <View style={styles.signupoption}>
                    <Text style={styles.signupoptiontext}>Already a member ? </Text>
                    <Text style={styles.signupoptiontext2} onPress={() => this.props.navigation.navigate('Login')} >Login here</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 50,
        paddingLeft: 15,
        paddingRight: 15,
        // justifyContent: 'center',
        // alignItems: 'center',
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
    userStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        marginBottom: 5,
    },
    userStatusHeading: {
        fontSize: 17,
        alignSelf: 'flex-start',
        marginRight: 10,
        marginTop: 5,
        flex: 1,
    },
    userStatusText: {
        fontSize: 17,
        alignSelf: 'center',
        marginRight: 10,
        flex: 1,
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
        // elevation: 6
    },
    logintext: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    loginform: {
        width: '100%',
        // marginTop: 10,
        // marginBottom: 15
    },
    logininput: {
        marginBottom: 10
    },
    logininput2: {
        marginBottom: 0
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
        color: 'blue'
    },
    bloodgrpstyle: {
        // elevation: 8,
        width: '100%',
        marginBottom: 15
    },
    dateViewstyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    }
});

const mapStateToProps = (state) => ({
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    registerdone: (term) => dispatch(registerdone(term)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup2);
