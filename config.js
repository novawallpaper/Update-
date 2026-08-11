// ============================================================
// MITTI MANOR — CONFIG
// Firebase project "mitti-manor" connected (Phone OTP + Google login).
// Razorpay key reused from the earlier Mitti Manor project.
// If login ever fails (e.g. Phone/Google not enabled in Firebase
// Console > Authentication > Sign-in method), it falls back to
// a DEMO OTP: 123456
// ============================================================

const CONFIG = {
  firebase: {
    apiKey: "AIzaSyDBuaqeGPJRcKNjND69-E3W_g3gta3LpW4",
    authDomain: "mitti-manor.firebaseapp.com",
    projectId: "mitti-manor",
    storageBucket: "mitti-manor.firebasestorage.app",
    messagingSenderId: "321272334348",
    appId: "1:321272334348:web:4ee71f475f0b586f2e4629",
    measurementId: "G-K9H53GTB1Q"
  },

  googleClientId: "452456583028-1l86bibq60ggkl3o1h5j88sed7v04eof.apps.googleusercontent.com",

  razorpayKeyId: "rzp_live_TCZM7OsD80tNpH",

  business: {
    name: "Mitti Manor",
    phone: "9331649629",
    whatsapp: "919331649629", // country code + number, no +/spaces (for wa.me links)
    email: "mittimanor@gmail.com"
  },

  // Demo OTP used only when Firebase phone auth isn't fully configured
  demoOtp: "123456"
};
