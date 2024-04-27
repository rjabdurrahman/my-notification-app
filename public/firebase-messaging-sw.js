
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBq1qTRpEQI5lzKVFTA19PYzsWW9vYtrRQ",
    authDomain: "pushnotifications-b6b49.firebaseapp.com",
    projectId: "pushnotifications-b6b49",
    storageBucket: "pushnotifications-b6b49.appspot.com",
    messagingSenderId: "747658061064",
    appId: "1:747658061064:web:59640780f4d4316bc8f8bd",
    measurementId: "G-LMHBZ5QK7Z"
  });


const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });