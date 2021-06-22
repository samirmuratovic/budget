// connect to the database

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBbqepj4R9SYpDsRQn7Zx51HFKJ1GPAV5A',
  authDomain: 'budget-14fc4.firebaseapp.com',
  databaseURL: 'https://budget-14fc4-default-rtdb.firebaseio.com',
  projectId: 'budget-14fc4',
  storageBucket: 'budget-14fc4.appspot.com',
  messagingSenderId: '1059454197626',
  appId: '1:1059454197626:web:28ec5d868a58edf89340c3',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

firebase.database().ref().set({
  name: 'Samir Muratovic',
})
