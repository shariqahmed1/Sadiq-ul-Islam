import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCX52d_eJ42PEl0jXdfj_GqHa3fi8URvOc",
    authDomain: "websadiqulislam.firebaseapp.com",
    databaseURL: "https://websadiqulislam.firebaseio.com",
    projectId: "websadiqulislam",
    storageBucket: "websadiqulislam.appspot.com",
    messagingSenderId: "576546393592"
};
firebase.initializeApp(config);

const FIRESTORE = firebase.firestore();
FIRESTORE.settings({
    timestampsInSnapshots: true
});

export {
    FIRESTORE
};