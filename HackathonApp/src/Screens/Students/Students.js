import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux'
import { forcheck } from '../../Store/Action/Action'

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vaccancies: [
                {
                    id: '1',
                    companyname: 'software House',
                    jobname: 'webdeveloper',
                    jobdescription: 'website',
                    salary: '5000',
                    criteria: 'html, css'
                },
                {
                    id: '2',
                    companyname: 'software',
                    jobname: 'MobileAPPdeveloper',
                    jobdescription: 'Mobile App',
                    salary: '50000',
                    criteria: 'knows ReactNative'
                },
                {
                    id: '3',
                    companyname: 'software House',
                    jobname: 'webdeveloper',
                    jobdescription: 'website',
                    salary: '7000',
                    criteria: 'knows HTML5, JAVASCRIPT, ES6, ES7, ES2019'
                },
            ],
        }
    }
    render() {
        console.log(this.props.users)
        return (
            <View style={styles.container}>
                <Text style={styles.vaccn}>Vaccancies</Text>
                <FlatList
                    data={this.state.vaccancies}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(vaccancies) => {
                        return (
                            <View style={styles.vaccancydetail}>
                                <View style={styles.companyname}>
                                    <Text style={styles.company}>Company Name: </Text>
                                    <Text style={styles.name}>{vaccancies.item.companyname}</Text>
                                </View>
                                <View style={styles.companyname}>
                                    <Text style={styles.company}>Job Name: </Text>
                                    <Text style={styles.name}>{vaccancies.item.jobname}</Text>
                                </View>
                                <View style={styles.companyname}>
                                    <Text style={styles.company}>Job Description: </Text>
                                    <Text style={styles.name}>{vaccancies.item.jobdescription}</Text>
                                </View>
                                <View style={styles.companyname}>
                                    <Text style={styles.company}>Salary: </Text>
                                    <Text style={styles.name}>{vaccancies.item.salary}</Text>
                                </View>
                                <View style={styles.companyname}>
                                    <Text style={styles.company}>Eligibility Criteria: </Text>
                                    <Text style={styles.name}>{vaccancies.item.criteria}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View >
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        // alignItems: 'center',
        backgroundColor: 'white',
        width: '100%'
    },
    vaccancydetail: {
        padding: 10,
        backgroundColor: 'orange',
        width: '100%',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5
    },
    vaccn: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        color: 'orange',
        textAlign: 'center'
    },
    companyname: {
        flexDirection: 'row',
    },
    company: {
        // color: 'white'
        width: 120
    },
    name: {
        color: 'white',
        // marginLeft: 5,
        flexShrink: 1
    },
});

const mapStateToProps = (state) => ({
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    // googlelogin: (props) => dispatch(googlelogin(props)),
    forcheck: () => dispatch(forcheck()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Student);