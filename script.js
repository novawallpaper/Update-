/* =====================================================
   DATING WEBSITE - SCRIPT.JS
===================================================== */


/* =====================================================
   CONFIG
===================================================== */

const GOOGLE_CLIENT_ID =
  "452456583028-1l86bibq60ggkl3o1h5j88sed7v04eof.apps.googleusercontent.com";

const RAZORPAY_KEY_ID =
  "rzp_live_TCZM7OsD80tNpH";


/* =====================================================
   GLOBAL DATA
===================================================== */

let currentUser = null;

let currentQuestion = 0;

let profileAnswers = {};

let ageVerified = false;


/* =====================================================
   QUESTIONS
===================================================== */

const questions = [

  {
    key: "name",
    question: "What is your name?",
    type: "text",
    placeholder: "Enter your name"
  },

  {
    key: "gender",
    question: "What is your gender?",
    type: "options",
    options: [
      "Male",
      "Female"
    ]
  },

  {
    key: "lookingFor",
    question: "Who are you looking for?",
    type: "options",
    options: [
      "Male",
      "Female"
    ]
  },

  {
    key: "city",
    question: "Which city do you live in?",
    type: "text",
    placeholder: "Enter your city"
  },

  {
    key: "bio",
    question: "Tell something about yourself.",
    type: "textarea",
    placeholder: "Write something about yourself..."
  }

];


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  initializeGoogleLogin();

  loadSavedProfile();

});


/* =====================================================
   SCREEN CONTROL
===================================================== */

function showScreen(screenId) {

  document
    .querySelectorAll(".screen-content")
    .forEach(screen => {
      screen.classList.remove("active");
    });

  const screen = document.getElementById(screenId);

  if (screen) {
    screen.classList.add("active");
  }

}


/* =====================================================
   GOOGLE LOGIN
===================================================== */

function initializeGoogleLogin() {

  if (
    typeof google === "undefined" ||
    !google.accounts ||
    !google.accounts.id
  ) {
    return;
  }

  google.accounts.id.initialize({

    client_id: GOOGLE_CLIENT_ID,

    callback: handleGoogleLogin

  });


  google.accounts.id.renderButton(

    document.getElementById(
      "google-signin-btn-gate"
    ),

    {
      theme: "outline",
      size: "large",
      width: 300,
      text: "continue_with"
    }

  );

}


/* =====================================================
   GOOGLE LOGIN CALLBACK
===================================================== */

function handleGoogleLogin(response) {

  try {

    const payload =
      parseJwt(response.credential);

    currentUser = {

      id: payload.sub,

      name: payload.name || "",

      email: payload.email || "",

      picture: payload.picture || ""

    };


    localStorage.setItem(
      "dating_google_user",
      JSON.stringify(currentUser)
    );


    document.getElementById(
      "signin-status"
    ).textContent = "Login successful.";


    startProfileFlow();

  } catch (error) {

    console.error(error);

    showToast(
      "Google login failed."
    );

  }

}


/* =====================================================
   FALLBACK GOOGLE BUTTON
===================================================== */

function handleFallbackGoogleClick() {

  showToast(
    "Please use the Google login button."
  );

}


/* =====================================================
   JWT DECODER
===================================================== */

function parseJwt(token) {

  const base64Url =
    token.split(".")[1];

  const base64 =
    base64Url
      .replace(/-/g, "+")
      .replace(/_/g, "/");

  const jsonPayload =
    decodeURIComponent(
      atob(base64)
        .split("")
        .map(
          c =>
            "%" +
            (
              "00" +
              c.charCodeAt(0)
                .toString(16)
            ).slice(-2)
        )
        .join("")
    );

  return JSON.parse(jsonPayload);

}


/* =====================================================
   START PROFILE FLOW
===================================================== */

function startProfileFlow() {

  const savedProfile =
    localStorage.getItem(
      "dating_profile"
    );


  if (savedProfile) {

    try {

      const profile =
        JSON.parse(savedProfile);

      if (
        profile.email === currentUser.email &&
        profile.paymentVerified
      ) {

        profileAnswers =
          profile.answers || {};

        showDatingHome();

        return;

      }

    } catch (error) {

      console.error(error);

    }

  }


  showScreen("age-screen");

}


/* =====================================================
   AGE VERIFICATION
===================================================== */

function verifyAge() {

  const dobInput =
    document.getElementById("dob");

  const error =
    document.getElementById("age-error");

  error.textContent = "";


  if (!dobInput.value) {

    error.textContent =
      "Please enter your date of birth.";

    return;

  }


  const dob =
    new Date(dobInput.value);

  const today =
    new Date();


  let age =
    today.getFullYear() -
    dob.getFullYear();


  const monthDifference =
    today.getMonth() -
    dob.getMonth();


  if (
    monthDifference < 0 ||
    (
      monthDifference === 0 &&
      today.getDate() < dob.getDate()
    )
  ) {

    age--;

  }


  if (age < 18) {

    error.textContent =
      "You must be 18 or older to use this service.";

    return;

  }


  ageVerified = true;

  profileAnswers.dob =
    dobInput.value;

  profileAnswers.age =
    age;


  currentQuestion = 0;

  renderQuestion();

  showScreen(
    "questions-screen"
  );

}


/* =====================================================
   RENDER QUESTION
===================================================== */

function renderQuestion() {

  const question =
    questions[currentQuestion];

  const container =
    document.getElementById(
      "question-container"
    );


  if (!question) {

    showPaymentScreen();

    return;

  }


  document.getElementById(
    "question-counter"
  ).textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;


  const progress =
    (
      currentQuestion /
      questions.length
    ) * 100;


  document.getElementById(
    "question-progress"
  ).style.width =
    `${progress}%`;


  let html = `

    <h2 class="question-title">
      ${escapeHtml(question.question)}
    </h2>

  `;


  /* TEXT */

  if (question.type === "text") {

    html += `

      <input
        id="current-question-input"
        class="question-input"
        type="text"
        placeholder="${escapeHtml(question.placeholder || "")}"
        value="${escapeHtml(profileAnswers[question.key] || "")}"
        autocomplete="off"
      >

    `;

  }


  /* TEXTAREA */

  if (question.type === "textarea") {

    html += `

      <textarea
        id="current-question-input"
        class="question-textarea"
        placeholder="${escapeHtml(question.placeholder || "")}"
      >${escapeHtml(profileAnswers[question.key] || "")}</textarea>

    `;

  }


  /* OPTIONS */

  if (question.type === "options") {

    html += `
      <div class="question-options">
    `;


    question.options.forEach(option => {

      const selected =
        profileAnswers[question.key] === option
          ? "selected"
          : "";


      html += `

        <button
          type="button"
          class="question-option ${selected}"
          onclick="selectOption(this, '${escapeAttribute(option)}')"
        >
          ${escapeHtml(option)}
        </button>

      `;

    });


    html += `
      </div>
    `;

  }


  container.innerHTML =
    html;


  const error =
    document.getElementById(
      "question-error"
    );

  error.textContent = "";


  const input =
    document.getElementById(
      "current-question-input"
    );

  if (input) {

    setTimeout(() => {
      input.focus();
    }, 100);

  }


  document.getElementById(
    "next-question-btn"
  ).textContent =
    currentQuestion === questions.length - 1
      ? "Continue"
      : "Next";

}


/* =====================================================
   SELECT OPTION
===================================================== */

function selectOption(button, value) {

  document
    .querySelectorAll(".question-option")
    .forEach(btn => {

      btn.classList.remove(
        "selected"
      );

    });


  button.classList.add(
    "selected"
  );


  button.dataset.value =
    value;

}


/* =====================================================
   NEXT QUESTION
===================================================== */

function nextQuestion() {

  const question =
    questions[currentQuestion];

  const error =
    document.getElementById(
      "question-error"
    );


  error.textContent = "";


  let answer = "";


  /* TEXT / TEXTAREA */

  if (
    question.type === "text" ||
    question.type === "textarea"
  ) {

    const input =
      document.getElementById(
        "current-question-input"
      );

    if (!input) {
      return;
    }

    answer =
      input.value.trim();

  }


  /* OPTIONS */

  if (question.type === "options") {

    const selected =
      document.querySelector(
        ".question-option.selected"
      );

    if (selected) {

      answer =
        selected.dataset.value;

    }

  }


  if (!answer) {

    error.textContent =
      "Please answer this question.";

    return;

  }


  profileAnswers[
    question.key
  ] = answer;


  currentQuestion++;


  if (
    currentQuestion >=
    questions.length
  ) {

    showPaymentScreen();

    return;

  }


  renderQuestion();

}


/* =====================================================
   PAYMENT SCREEN
===================================================== */

function showPaymentScreen() {

  document.getElementById(
    "question-progress"
  ).style.width = "100%";


  showScreen(
    "payment-screen"
  );

}


/* =====================================================
   START RAZORPAY PAYMENT
===================================================== */

async function startPayment() {

  if (!currentUser) {

    showToast(
      "Please login first."
    );

    showScreen(
      "login-gate"
    );

    return;

  }


  if (!ageVerified) {

    showToast(
      "Age verification is required."
    );

    showScreen(
      "age-screen"
    );

    return;

  }


  const payButton =
    document.getElementById(
      "pay-btn"
    );

  const status =
    document.getElementById(
      "payment-status"
    );


  payButton.disabled = true;

  payButton.textContent =
    "Preparing payment...";

  status.textContent = "";


  try {

    /*
      IMPORTANT:

      Backend should create the Razorpay order.

      Expected response:

      {
        order_id: "...",
        amount: 4500,
        currency: "INR"
      }
    */

    const response =
      await fetch(
        "/api/create-order",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            amount: 4500,

            currency: "INR",

            email:
              currentUser.email

          })

        }
      );


    if (!response.ok) {

      throw new Error(
        "Unable to create payment order."
      );

    }


    const order =
      await response.json();


    if (!order.order_id) {

      throw new Error(
        "Invalid payment order."
      );

    }


    openRazorpayCheckout(
      order
    );


  } catch (error) {

    console.error(error);

    status.textContent =
      error.message ||
      "Payment could not be started.";

    payButton.disabled =
      false;

    payButton.textContent =
      "Pay ₹45";

  }

}


/* =====================================================
   RAZORPAY CHECKOUT
===================================================== */

function openRazorpayCheckout(order) {

  const options = {

    key: RAZORPAY_KEY_ID,

    amount:
      order.amount || 4500,

    currency:
      order.currency || "INR",

    name:
      "Dating Profile",

    description:
      "Dating Profile Creation",

    order_id:
      order.order_id,


    prefill: {

      name:
        currentUser.name,

      email:
        currentUser.email

    },


    theme: {

      color:
        "#ff4d73"

    },


    handler:
      async function (payment) {

        await verifyPayment(
          payment
        );

      },


    modal: {

      ondismiss:
        function () {

          const payButton =
            document.getElementById(
              "pay-btn"
            );

          payButton.disabled =
            false;

          payButton.textContent =
            "Pay ₹45";

        }

    }

  };


  const razorpay =
    new Razorpay(options);


  razorpay.open();

}


/* =====================================================
   VERIFY PAYMENT
===================================================== */

async function verifyPayment(
  payment
) {

  const payButton =
    document.getElementById(
      "pay-btn"
    );

  const status =
    document.getElementById(
      "payment-status"
    );


  payButton.disabled =
    true;

  payButton.textContent =
    "Verifying payment...";


  try {

    const response =
      await fetch(
        "/api/verify-payment",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            razorpay_order_id:
              payment.razorpay_order_id,

            razorpay_payment_id:
              payment.razorpay_payment_id,

            razorpay_signature:
              payment.razorpay_signature,

            email:
              currentUser.email,

            answers:
              profileAnswers

          })

        }
      );


    const result =
      await response.json();


    if (
      !response.ok ||
      !result.success
    ) {

      throw new Error(
        result.message ||
        "Payment verification failed."
      );

    }


    /*
      Payment is verified by backend.
      Now profile can be created/saved.
    */

    createDatingProfile(
      payment
    );


  } catch (error) {

    console.error(error);

    status.textContent =
      error.message ||
      "Payment verification failed.";

    payButton.disabled =
      false;

    payButton.textContent =
      "Pay ₹45";

  }

}


/* =====================================================
   CREATE PROFILE
===================================================== */

function createDatingProfile(
  payment
) {

  const profile = {

    googleId:
      currentUser.id,

    email:
      currentUser.email,

    googleName:
      currentUser.name,

    googlePicture:
      currentUser.picture,

    answers:
      profileAnswers,

    paymentVerified:
      true,

    paymentId:
      payment.razorpay_payment_id,

    orderId:
      payment.razorpay_order_id,

    createdAt:
      new Date().toISOString()

  };


  localStorage.setItem(
    "dating_profile",
    JSON.stringify(profile)
  );


  showCreatedProfile(
    profile
  );

}


/* =====================================================
   SHOW CREATED PROFILE
===================================================== */

function showCreatedProfile(
  profile
) {

  const answers =
    profile.answers || {};


  const name =
    answers.name ||
    profile.googleName ||
    "User";


  document.getElementById(
    "created-profile"
  ).innerHTML = `

    <div class="profile-name">
      ${escapeHtml(name)}
    </div>

    <div class="profile-info">
      <i class="fa-solid fa-location-dot"></i>
      ${escapeHtml(answers.city || "")}
    </div>

    <div class="profile-info">
      <i class="fa-solid fa-user"></i>
      ${escapeHtml(answers.gender || "")}
    </div>

    <div class="profile-info">
      Looking for:
      ${escapeHtml(answers.lookingFor || "")}
    </div>

    ${
      answers.bio
        ? `
          <div class="profile-bio">
            ${escapeHtml(answers.bio)}
          </div>
        `
        : ""
    }

  `;


  showScreen(
    "profile-created-screen"
  );

}


/* =====================================================
   DATING HOME
===================================================== */

function openDatingHome() {

  showDatingHome();

}


function showDatingHome() {

  const profile =
    getSavedProfile();


  if (!profile) {

    showScreen(
      "login-gate"
    );

    return;

  }


  const answers =
    profile.answers || {};


  document.getElementById(
    "home-user-name"
  ).textContent =
    answers.name ||
    profile.googleName ||
    "Dating";


  renderDatingProfiles();


  showScreen(
    "dating-home"
  );

}


/* =====================================================
   DATING PROFILES
===================================================== */

function renderDatingProfiles() {

  const container =
    document.getElementById(
      "profiles-container"
    );


  /*
    Profile data can later come from
    your backend/database.

    For now this only displays the
    current profile after creation.
  */

  const profile =
    getSavedProfile();


  if (!profile) {

    container.innerHTML = "";

    return;

  }


  const answers =
    profile.answers || {};


  container.innerHTML = `

    <div class="profile-card">

      <div class="profile-card-content">

        <h3>
          ${escapeHtml(
            answers.name ||
            profile.googleName ||
            "User"
          )}
        </h3>

        <p>
          ${escapeHtml(
            answers.city || ""
          )}
        </p>

        <p>
          ${escapeHtml(
            answers.gender || ""
          )}
        </p>

      </div>

    </div>

  `;

}


/* =====================================================
   MY PROFILE
===================================================== */

function showMyProfile() {

  const profile =
    getSavedProfile();


  if (!profile) {

    showScreen(
      "login-gate"
    );

    return;

  }


  const answers =
    profile.answers || {};


  const container =
    document.getElementById(
      "my-profile-container"
    );


  container.innerHTML = `

    <div class="my-profile-card">

      <div class="profile-name">
        ${escapeHtml(
          answers.name ||
          profile.googleName ||
          "User"
        )}
      </div>

      <div class="profile-info">
        ${escapeHtml(
          answers.city || ""
        )}
      </div>

      <div class="profile-info">
        ${escapeHtml(
          answers.gender || ""
        )}
      </div>

      <div class="profile-info">
        Looking for:
        ${escapeHtml(
          answers.lookingFor || ""
        )}
      </div>

      ${
        answers.bio
          ? `
            <div class="profile-bio">
              ${escapeHtml(
                answers.bio
              )}
            </div>
          `
          : ""
      }

    </div>

  `;


  showScreen(
    "my-profile-screen"
  );

}


/* =====================================================
   LOAD SAVED PROFILE
===================================================== */

function loadSavedProfile() {

  const savedUser =
    localStorage.getItem(
      "dating_google_user"
    );


  if (savedUser) {

    try {

      currentUser =
        JSON.parse(savedUser);

    } catch (error) {

      localStorage.removeItem(
        "dating_google_user"
      );

    }

  }


  const savedProfile =
    localStorage.getItem(
      "dating_profile"
    );


  if (savedProfile) {

    try {

      const profile =
        JSON.parse(savedProfile);


      if (
        profile.paymentVerified &&
        currentUser &&
        profile.email ===
          currentUser.email
      ) {

        profileAnswers =
          profile.answers || {};

        ageVerified = true;

      }

    } catch (error) {

      console.error(error);

    }

  }

}


/* =====================================================
   GET PROFILE
===================================================== */

function getSavedProfile() {

  const data =
    localStorage.getItem(
      "dating_profile"
    );


  if (!data) {
    return null;
  }


  try {

    return JSON.parse(data);

  } catch (error) {

    return null;

  }

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

  const toast =
    document.getElementById(
      "app-toast"
    );


  if (!toast) {
    return;
  }


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

  }, 2500);

}


/* =====================================================
   HTML ESCAPE
===================================================== */

function escapeHtml(value) {

  if (value === undefined ||
      value === null) {

    return "";

  }


  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =====================================================
   ATTRIBUTE ESCAPE
===================================================== */

function escapeAttribute(value) {

  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'");
}


/* =====================================================
   GLOBAL FUNCTIONS
===================================================== */

window.handleFallbackGoogleClick =
  handleFallbackGoogleClick;

window.verifyAge =
  verifyAge;

window.nextQuestion =
  nextQuestion;

window.selectOption =
  selectOption;

window.startPayment =
  startPayment;

window.openDatingHome =
  openDatingHome;

window.showDatingHome =
  showDatingHome;

window.showMyProfile =
  showMyProfile;
