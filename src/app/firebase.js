            import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
            import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
            const firebaseConfig = {
            apiKey: "AIzaSyDViN-jHs4j7HoPa9N688P4wzSQEjllX2o",
            authDomain: "proyec-login.firebaseapp.com",
            projectId: "proyec-login",
            storageBucket: "proyec-login.appspot.com",
            messagingSenderId: "901279187014",
            appId: "1:901279187014:web:f4d429540420b323780a47",
            measurementId: "G-3BXV535NX0"
            };
        
            // Initialize Firebase
            export const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);