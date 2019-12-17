import {useEffect} from "react";
import Firebase from "../Firebase";


const Logout = (props: any) => {
    useEffect(() => {
        Firebase.auth().signOut().then(function() {
            props.navigation.navigate('Login')
        }, function(error) {
            // An error happened.
        });
    }, []);

    return null;
};

export default Logout;
