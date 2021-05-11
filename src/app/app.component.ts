import { Component } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyA7yd0FgatczErBhGn1mEWhNdk9JLXLo7U",
      authDomain: "le-blog-6c778.firebaseapp.com",
      databaseURL: "https://le-blog-6c778-default-rtdb.firebaseio.com",
      projectId: "le-blog-6c778",
      storageBucket: "le-blog-6c778.appspot.com",
      messagingSenderId: "665025552669",
      appId: "1:665025552669:web:09c66295bf2450212e41f4",
      measurementId: "G-1ELZ6KYK7W"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  }
  
  
  
  
}
