import firebase from 'firebase'
import 'firebase/firestore';

import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID,
    STORAGE_BUCKET
} from 'react-native-dotenv'
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGE_SENDER_ID,
    appId: APP_ID
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig);

Firebase.firestore().settings({timestampsInSnapshots: true});

export default Firebase
