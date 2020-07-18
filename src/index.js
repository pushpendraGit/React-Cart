import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as firebase from 'firebase';

import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDJhQIyHzuKH7bA-ZDaVvcHCQCFMK8GiDM",
  authDomain: "cart-fb922.firebaseapp.com",
  databaseURL: "https://cart-fb922.firebaseio.com",
  projectId: "cart-fb922",
  storageBucket: "cart-fb922.appspot.com",
  messagingSenderId: "933471021642",
  appId: "1:933471021642:web:8d59672f2e51b8c033d4b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

