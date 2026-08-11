// Keep your existing working Firebase/Razorpay values here.
// Do NOT publish private server keys. Razorpay Key ID is safe for checkout;
// secret keys must stay on a backend.

const CONFIG = {
  firebase: {
    apiKey: "PASTE_YOUR_FIREBASE_API_KEY_HERE",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_FIREBASE_APP_ID"
  },
  razorpayKeyId: "PASTE_YOUR_RAZORPAY_KEY_ID_HERE",
  demoOtp: "", // intentionally unused — demo OTP fallback has been removed
  business: {
    name: "Mitti Manor",
    whatsapp: "919999999999",
    email: "hello@mittimanor.in"
  }
};
