/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
import vuetify from './vuetify';
import router from './router';
import firebase from "firebase/app";
import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);

//firebase
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyCkEpnos4CcH0oJbkTmI2EJKe2Krg4CG-0",
    authDomain: "esmartorder.firebaseapp.com",
    projectId: "esmartorder",
    storageBucket: "esmartorder.appspot.com",
    messagingSenderId: "194647642539",
    appId: "1:194647642539:web:fe87d37ac0e255464382ee",
    measurementId: "G-2R3YXKNSJK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var db = firebase.firestore();
  window.db = db; //global connection


import App from './components/App';
new Vue({
    el: '#app',
    vuetify,
    router,
    components:{
        app:App
    }
});
