import firebase from 'firebase';
import { FIREBASE_CONFIG } from "./properties";

let fire = firebase.initializeApp(FIREBASE_CONFIG);
let rootRef = fire.database().ref();
let cluesRef = rootRef.child('clues');

export {
  fire,
  cluesRef
}
