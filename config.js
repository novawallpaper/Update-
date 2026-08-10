// ============================================================
// MITTI MANOR — CONFIG
// Reused from the earlier Mitti Manor project.
// If phone-OTP login doesn't work, it's because the Firebase
// apiKey/appId below are placeholders — fill them from your
// Firebase console (Project settings > General > Your apps).
// Until then, login falls back to a DEMO OTP: 123456
// ============================================================

const CONFIG = {
  firebase: {
    apiKey: "PASTE_YOUR_FIREBASE_API_KEY_HERE",
    authDomain: "novawallpaper-f7cc8.firebaseapp.com",
    projectId: "novawallpaper-f7cc8",
    storageBucket: "novawallpaper-f7cc8.appspot.com",
    messagingSenderId: "PASTE_SENDER_ID_HERE",
    appId: "PASTE_APP_ID_HERE"
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
