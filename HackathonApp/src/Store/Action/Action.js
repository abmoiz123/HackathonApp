// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-community/google-signin';
// // import firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database';
// import { NavigationActions } from 'react-navigation'


// const googlelogin = (props) => {
//     GoogleSignin.configure({
//         webClientId: "830448369848-phado5brk7m5v3k0r57l794eh4u9t6hi.apps.googleusercontent.com",
//     });
//     return async dispatch => {
//         const { idToken } = await GoogleSignin.signIn();
//         const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//         auth().signInWithCredential(googleCredential)
//             .then((result) => {
//                 // let idToken = idToken.googleCredential
//                 let user = result.user;
//                 let create_user = {
//                     name: user.displayName,
//                     email: user.email,
//                     uid: user.uid
//                 }
//                 dispatch({
//                     type: "NEWUSER",
//                     payload: create_user,
//                 })
//                 props.navigation.navigate("Signup")
//                 // console.log(create_user)
//                 // console.log(props)
//                 // database().ref('/').child(`users/${user.uid}`).set(create_user)
//                 //     .then(() => {
//                 //         dispatch({
//                 //             type: "NEWUSER",
//                 //             payload: user,
//                 //         })
//                 //         // NavigationActions.navigate({ routeName: 'Signup' })
//                 //         props.navigation.navigate("Signup")
//                 //         // alert('User Login Successful!')
//                 //         console.log(user)
//                 //     })
//             }).catch((error) => {
//                 console.log("errr==>", error)
//                 alert('SomeThing Went Wrong! \n Try Again')
//             })
//         // console.log(auth().currentUser)
//         // try {
//         // } catch (error) { 
//         //     console.log("errr==>", error)
//         // }
//     }
// }

const forcheck = () => {
    return (dispatch) => {
        // alert('hello world')
        let check = 'hello world'
        database().ref('/').child('users').push(check)
            .then(alert('ok'))
            .catch(alert('not ok'))
        dispatch({
            type: "forcheck",
            payload: check,
        })
    }
}

const register1 = (term) => {
    return (dispatch) => {
        dispatch({
            type: "register1",
            payload: term,
        })
    }
}
const registerdone = (term) => {
    return (dispatch) => {
        // console.log(term)
        dispatch({
            type: "registerdone",
            payload: term,
        })
    }
}
export {
    forcheck,
    register1,
    registerdone
}
