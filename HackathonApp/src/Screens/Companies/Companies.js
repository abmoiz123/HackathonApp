import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'

class Companies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Companies: [
                {
                    id: '1',
                    companyname: 'software',
                    Established: '10Years',
                    HRName: 'Moiz',
                    Email: 'AbdulMoiz333@gamil.com',
                    phoneno: '03001212121'
                },
                {
                    id: '2',
                    companyname: 'software House',
                    Established: '15Years',
                    HRName: 'Zeeshan',
                    Email: 'Zeeshan333@gamil.com',
                    phoneno: '03001515155'
                },
                {
                    id: '3',
                    companyname: 'software House',
                    Established: '15Years',
                    HRName: 'Saad',
                    Email: 'Saad333@gamil.com',
                    phoneno: '03001313133'
                },
            ],
        }
    }
    render() {
        // console.log(this.props.users)
        return (
            <View style={styles.container}>
                <Text style={styles.vaccn}>Companies</Text>
                <FlatList
                    data={this.state.Companies}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(Companies) => {
                        return (
                            <View style={styles.vaccancydetail}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Icon
                                        name="home-outline"
                                        color='white'
                                        size={50}
                                    />
                                </View>
                                <View style={styles.companyname}>
                                    <Text style={styles.company}>Company Name: </Text>
                                    <Text style={styles.name}>{Companies.item.companyname}</Text>
                                </View>
                                <View style={styles.companyname}>
                                    <Text style={styles.company}>Established: </Text>
                                    <Text style={styles.name}>{Companies.item.Established}</Text>
                                </View>
                                <View style={styles.companyname}>
                                    <Text style={styles.company}>HR Name: </Text>
                                    <Text style={styles.name}>{Companies.item.HRName}</Text>
                                </View>
                                <View style={styles.companyname}>
                                    <Text style={styles.company}>Email: </Text>
                                    <Text style={styles.name}>{Companies.item.Email}</Text>
                                </View>
                                <View style={styles.companyname}>
                                    <Text style={styles.company}>Contact Number: </Text>
                                    <Text style={styles.name}>{Companies.item.phoneno}</Text>
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

export default connect(mapStateToProps, null)(Companies);