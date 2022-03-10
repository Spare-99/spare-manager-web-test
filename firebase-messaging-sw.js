importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
    'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

console.log('in firebase service worker');

firebase.initializeApp({
    apiKey: 'AIzaSyBt-KtMv_Q_HuNkhmlittkAO6UXwHVvTNE',
    authDomain: 'flutter-push-test-e28ba.firebaseapp.com',
    projectId: 'flutter-push-test-e28ba',
    storageBucket: 'flutter-push-test-e28ba.appspot.com',
    messagingSenderId: '1099067283258',
    appId: '1:1099067283258:web:71c28ca31a09b7b649e203',
    measurementId: 'G-ZNBZK9WSP4'
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// // Optional:
// messaging.onBackgroundMessage(m => {
//     console.log('onBackgroundMessage', m);
// });

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
