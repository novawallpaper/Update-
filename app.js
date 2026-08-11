// ============================================================
// MITTI MANOR — FULL APP.JS
// Firebase Google Login + Real Phone OTP
// Cart + Wishlist + Products + Landscaping + Razorpay
// ============================================================

/* ============================================================
   CATEGORY DEFINITIONS
============================================================ */

const CATEGORIES = [
  { id: "all", name: "All", icon: "grid" },
  { id: "plants", name: "Plants", icon: "leaf" },
  { id: "pots", name: "Pots & Planters", icon: "pot" },
  { id: "soil", name: "Soil & Fertilizers", icon: "soil" },
  { id: "seeds", name: "Seeds & Bulbs", icon: "seed" },
  { id: "decor", name: "Garden Decor", icon: "decor" },
  { id: "tools", name: "Tools & Accessories", icon: "tool" },
  { id: "landscaping", name: "Landscaping", icon: "landscape" }
];

const ICONS = {
  grid: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.6">
      <rect x="3" y="3" width="7" height="7" rx="1.5"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5"/>
    </svg>`,

  leaf: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.6">
      <path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14z"/>
      <path d="M4 20 12 12"/>
    </svg>`,

  pot: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.6">
      <path d="M6 8h12l-1.5 12a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 8z"/>
      <path d="M4 8h16M9 8V6a3 3 0 0 1 6 0v2"/>
    </svg>`,

  soil: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.6">
      <path d="M3 14h18"/>
      <path d="M3 14c2-4 5-6 9-6s7 2 9 6"/>
      <path d="M3 14v6h18v-6"/>
    </svg>`,

  seed: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.6">
      <ellipse cx="12" cy="12" rx="5" ry="8"/>
      <path d="M12 4v16"/>
    </svg>`,

  decor: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.6">
      <path d="M12 2v6M12 22v-4M4.9 4.9l4.2 4.2M19.1 4.9
      14.9 9.1M2 12h6M22 12h-6"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>`,

  tool: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.6">
      <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L4 17l3 3
      5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/>
    </svg>`,

  landscape: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.6">
      <path d="M3 18l5-7 4 5 3-4 6 6"/>
      <path d="M3 21h18"/>
    </svg>`
};


/* ============================================================
   PRODUCT DATA
============================================================ */

const NAME_BANKS = {
  plants: [
    "Money Plant",
    "Snake Plant",
    "Areca Palm",
    "Peace Lily",
    "ZZ Plant",
    "Aloe Vera",
    "Jade Plant",
    "Spider Plant",
    "Lucky Bamboo",
    "Rubber Plant",
    "Croton",
    "Bonsai Ficus",
    "Marigold Plant",
    "Rose Plant",
    "Hibiscus Plant",
    "Jasmine Plant",
    "Tulsi Plant",
    "Aparajita Plant",
    "Bougainvillea Plant",
    "Anthurium Plant",
    "Philodendron",
    "Monstera Deliciosa",
    "Calathea",
    "Boston Fern",
    "Cactus Mix",
    "Succulent Set",
    "Adenium Bonsai",
    "Champa Plant",
    "Curry Leaf Plant",
    "Lemon Plant",
    "Mint Plant",
    "Ixora Plant",
    "Hoya Plant",
    "Syngonium",
    "Dracaena Plant",
    "Money Plant Pothos",
    "Fiddle Leaf Fig",
    "Kalanchoe",
    "Chrysanthemum Plant",
    "Champa Frangipani"
  ],

  pots: [
    "Ceramic Pot",
    "Terracotta Pot",
    "Self-Watering Pot",
    "Hanging Planter",
    "Metal Planter",
    "Cement Planter",
    "Plastic Planter",
    "Wooden Planter Box",
    "Railing Planter",
    "Wall Mounted Planter",
    "Designer Ceramic Bowl Planter",
    "Balcony Rail Planter",
    "Fibre Rock Planter",
    "Woven Basket Planter",
    "Concrete Textured Planter"
  ],

  soil: [
    "Potting Mix Soil",
    "Cocopeat Block",
    "Vermicompost",
    "Organic Manure",
    "Perlite Mix",
    "Bone Meal Fertilizer",
    "NPK Fertilizer",
    "Neem Cake Fertilizer",
    "Seaweed Fertilizer",
    "Rice Husk Compost",
    "Cactus & Succulent Soil Mix",
    "Vermiculite Mix",
    "Organic Compost Pack",
    "Micronutrient Fertilizer Mix"
  ],

  seeds: [
    "Tomato Seeds",
    "Chilli Seeds",
    "Marigold Seeds",
    "Sunflower Seeds",
    "Spinach Seeds",
    "Cucumber Seeds",
    "Rose Seeds Pack",
    "Watermelon Seeds",
    "Coriander Seeds",
    "Lawn Grass Seeds",
    "Tulip Bulbs",
    "Gladiolus Bulbs",
    "Onion Sets Bulbs",
    "Brinjal Seeds",
    "Capsicum Seeds"
  ],

  decor: [
    "Garden Gnome",
    "Fairy Light String",
    "Wind Chime",
    "Garden Stool",
    "Stone Pathway Tile",
    "Decorative Pebbles Pack",
    "Bird Bath",
    "Plant Stand",
    "Wall Trellis",
    "Garden Fountain",
    "Solar Garden Lamp",
    "Miniature Fairy House",
    "Hanging Wind Bell",
    "Garden Bench"
  ],

  tools: [
    "Pruning Shears",
    "Garden Trowel Set",
    "Watering Can",
    "Gardening Gloves Pair",
    "Hand Cultivator",
    "Spray Bottle Mister",
    "Garden Hose 10m",
    "Grow Bags Set of 5",
    "Plant Support Stakes",
    "Soil pH Meter",
    "Garden Tool Kit 5pc",
    "Hand Pruner",
    "Garden Kneeling Pad",
    "Seedling Tray Set"
  ]
};

const ADJECTIVES = [
  "Premium",
  "Live",
  "Fresh",
  "Handpicked",
  "Air-Purifying",
  "Indoor",
  "Outdoor",
  "Mini",
  "Large",
  "Combo Pack",
  "Set of 3",
  "Nursery Fresh",
  "Imported Variety",
  "Best Quality"
];

const LANDSCAPING_SERVICES = [
  "Home Garden Landscaping",
  "Terrace Garden Design",
  "Balcony Garden Makeover",
  "Vertical Garden Installation",
  "Lawn Development & Turfing",
  "Rock Garden Design",
  "Kitchen Garden Setup",
  "Office Green Wall Installation",
  "Farmhouse Landscaping",
  "Poolside Garden Design"
];


/* ============================================================
   RANDOM GENERATOR
============================================================ */

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}


/* ============================================================
   PRODUCT GENERATION
============================================================ */

function generateProducts(targetCount) {
  const products = [];
  let id = 1;

  const orderCats = [
    "plants",
    "pots",
    "soil",
    "seeds",
    "decor",
    "tools"
  ];

  const weights = {
    plants: 0.34,
    pots: 0.16,
    soil: 0.14,
    seeds: 0.12,
    decor: 0.12,
    tools: 0.12
  };

  orderCats.forEach(category => {

    const count = Math.round(
      targetCount * weights[category]
    );

    const bank = NAME_BANKS[category];

    for (let i = 0; i < count; i++) {

      const base = bank[i % bank.length];

      const adjective =
        ADJECTIVES[
          Math.floor(
            seededRandom(id * 7.13) *
            ADJECTIVES.length
          )
        ];

      const useAdjective =
        seededRandom(id * 3.7) > 0.35;

      const name =
        useAdjective
          ? `${adjective} ${base}`
          : base;

      const priceBase = {
        plants: 149,
        pots: 199,
        soil: 99,
        seeds: 39,
        decor: 249,
        tools: 149
      }[category];

      const priceSpread = {
        plants: 900,
        pots: 1200,
        soil: 400,
        seeds: 150,
        decor: 1500,
        tools: 800
      }[category];

      const price =
        Math.round(
          (
            priceBase +
            seededRandom(id * 1.9) *
            priceSpread
          ) / 10
        ) * 10 - 1;

      const discountPct =
        10 +
        Math.floor(
          seededRandom(id * 5.3) * 55
        );

      const mrp =
        Math.round(
          price /
          (1 - discountPct / 100) /
          10
        ) * 10 - 1;

      const rating =
        (
          3.6 +
          seededRandom(id * 2.2) * 1.4
        ).toFixed(1);

      const reviews =
        Math.floor(
          20 +
          seededRandom(id * 4.1) * 4000
        );

      const tags = [];

      if (seededRandom(id * 6.6) > 0.85) {
        tags.push("Bestseller");
      }

      if (seededRandom(id * 8.8) > 0.9) {
        tags.push("New");
      }

      if (seededRandom(id * 9.9) > 0.88) {
        tags.push("Trending");
      }

      products.push({
        id,
        name,
        category,
        price,
        mrp,
        discountPct,
        rating,
        reviews,
        tags,
        image:
          `https://picsum.photos/seed/mitti${id}/500/500`
      });

      id++;
    }
  });

  return products;
}

const ALL_PRODUCTS = generateProducts(1000);


/* ============================================================
   APPLICATION STATE
============================================================ */

let state = {
  cart: JSON.parse(
    localStorage.getItem("mm_cart") || "{}"
  ),

  wishlist: JSON.parse(
    localStorage.getItem("mm_wishlist") || "[]"
  ),

  user: JSON.parse(
    localStorage.getItem("mm_user") || "null"
  ),

  activeCategory: "all",

  searchQuery: "",

  currentOrders: JSON.parse(
    localStorage.getItem("mm_orders") || "[]"
  )
};

let firebaseApp = null;
let auth = null;
let confirmationResult = null;
let recaptchaVerifier = null;


/* ============================================================
   STATE SAVE
============================================================ */

function saveState() {

  localStorage.setItem(
    "mm_cart",
    JSON.stringify(state.cart)
  );

  localStorage.setItem(
    "mm_wishlist",
    JSON.stringify(state.wishlist)
  );

  localStorage.setItem(
    "mm_user",
    JSON.stringify(state.user)
  );

  localStorage.setItem(
    "mm_orders",
    JSON.stringify(state.currentOrders)
  );
}


/* ============================================================
   FIREBASE INITIALIZATION
============================================================ */

function initFirebase() {

  if (!window.firebase) {
    console.error(
      "Firebase SDK is not loaded."
    );
    return;
  }

  if (
    typeof CONFIG === "undefined" ||
    !CONFIG.firebase
  ) {
    console.error(
      "Firebase configuration is missing."
    );
    return;
  }

  try {

    if (!firebase.apps.length) {

      firebaseApp =
        firebase.initializeApp(
          CONFIG.firebase
        );

    } else {

      firebaseApp =
        firebase.app();

    }

    auth = firebase.auth();

    auth.onAuthStateChanged(user => {

      if (user) {

        const provider =
          user.providerData &&
          user.providerData[0]
            ? user.providerData[0].providerId
            : "";

        state.user = {
          uid: user.uid,
          name:
            user.displayName ||
            "Mitti Manor Customer",
          email:
            user.email || "",
          phone:
            user.phoneNumber || "",
          photo:
            user.photoURL || "",
          method:
            provider || "firebase"
        };

        saveState();
        renderAccountArea();

      } else {

        /*
         * Do not immediately clear local state here.
         * This prevents a page refresh from flashing logout state.
         */
      }

    });

    console.log(
      "Firebase initialized successfully."
    );

  } catch (error) {

    console.error(
      "Firebase initialization failed:",
      error
    );

  }
}


/* ============================================================
   RECAPTCHA
============================================================ */

function createRecaptcha() {

  if (!auth) {
    throw new Error(
      "Firebase Authentication is not initialized."
    );
  }

  try {

    if (recaptchaVerifier) {

      try {
        recaptchaVerifier.clear();
      } catch (_) {}

      recaptchaVerifier = null;
    }

    const container =
      document.getElementById(
        "recaptchaContainer"
      );

    if (!container) {
      throw new Error(
        "reCAPTCHA container not found."
      );
    }

    container.innerHTML = "";

    recaptchaVerifier =
      new firebase.auth.RecaptchaVerifier(
        "recaptchaContainer",
        {
          size: "invisible",

          callback: () => {
            console.log(
              "reCAPTCHA verified."
            );
          },

          "expired-callback": () => {
            console.warn(
              "reCAPTCHA expired."
            );

            try {
              recaptchaVerifier.reset();
            } catch (_) {}
          }
        },
        auth
      );

    return recaptchaVerifier;

  } catch (error) {

    console.error(
      "reCAPTCHA initialization failed:",
      error
    );

    throw error;
  }
}


/* ============================================================
   FIREBASE ERROR MESSAGE
============================================================ */

function firebaseErrorMessage(error) {

  if (!error) {
    return "Something went wrong. Please try again.";
  }

  const code =
    error.code || "";

  const messages = {

    "auth/invalid-phone-number":
      "Please enter a valid Indian mobile number.",

    "auth/missing-phone-number":
      "Please enter your mobile number.",

    "auth/quota-exceeded":
      "SMS limit has been reached. Please try again later.",

    "auth/too-many-requests":
      "Too many attempts. Please wait and try again.",

    "auth/invalid-verification-code":
      "The verification code is incorrect.",

    "auth/code-expired":
      "The verification code has expired. Please request a new code.",

    "auth/captcha-check-failed":
      "reCAPTCHA verification failed. Please try again.",

    "auth/network-request-failed":
      "Network error. Please check your internet connection.",

    "auth/operation-not-allowed":
      "Phone authentication is not enabled in Firebase.",

    "auth/unauthorized-domain":
      "This website domain is not authorized in Firebase.",

    "auth/popup-blocked":
      "The Google login popup was blocked by your browser.",

    "auth/popup-closed-by-user":
      "Google login was cancelled.",

    "auth/account-exists-with-different-credential":
      "An account already exists with another login method.",

    "auth/invalid-api-key":
      "Firebase API configuration is invalid.",

    "auth/app-not-authorized":
      "This website is not authorized to use Firebase Authentication."
  };

  return (
    messages[code] ||
    error.message ||
    "Authentication failed. Please try again."
  );
}


/* ============================================================
   SEND PHONE OTP
============================================================ */

async function sendOtp(phoneNumber) {

  if (!auth) {

    alert(
      "Firebase Authentication is not initialized."
    );

    return false;
  }

  const phone =
    String(phoneNumber || "")
      .replace(/\D/g, "");

  if (!/^[6-9]\d{9}$/.test(phone)) {

    alert(
      "Please enter a valid 10-digit Indian mobile number."
    );

    return false;
  }

  try {

    const verifier =
      createRecaptcha();

    const fullPhone =
      "+91" + phone;

    confirmationResult =
      await auth.signInWithPhoneNumber(
        fullPhone,
        verifier
      );

    console.log(
      "OTP sent successfully."
    );

    return true;

  } catch (error) {

    console.error(
      "OTP sending failed:",
      error
    );

    if (recaptchaVerifier) {

      try {
        recaptchaVerifier.clear();
      } catch (_) {}

      recaptchaVerifier = null;
    }

    alert(
      firebaseErrorMessage(error)
    );

    return false;
  }
}


/* ============================================================
   VERIFY PHONE OTP
============================================================ */

async function verifyOtp(otp) {

  if (!confirmationResult) {

    alert(
      "Please request a new verification code first."
    );

    return false;
  }

  const code =
    String(otp || "")
      .replace(/\D/g, "");

  if (!/^\d{6}$/.test(code)) {

    alert(
      "Please enter the 6-digit verification code."
    );

    return false;
  }

  try {

    const result =
      await confirmationResult.confirm(code);

    const user =
      result.user;

    loginSuccess({
      uid: user.uid,
      name:
        user.displayName ||
        "Mitti Manor Customer",
      email:
        user.email || "",
      phone:
        user.phoneNumber || "",
      photo:
        user.photoURL || "",
      method: "phone"
    });

    confirmationResult = null;

    if (recaptchaVerifier) {

      try {
        recaptchaVerifier.clear();
      } catch (_) {}

      recaptchaVerifier = null;
    }

    return true;

  } catch (error) {

    console.error(
      "OTP verification failed:",
      error
    );

    alert(
      firebaseErrorMessage(error)
    );

    return false;
  }
}


/* ============================================================
   RESEND OTP
============================================================ */

async function resendOtp() {

  const phoneInput =
    document.getElementById(
      "phoneInput"
    );

  if (!phoneInput) return;

  const phone =
    phoneInput.value.trim();

  confirmationResult = null;

  return await sendOtp(phone);
}


/* ============================================================
   GOOGLE LOGIN
============================================================ */

async function googleSignIn() {

  if (!auth) {

    alert(
      "Firebase Authentication is not initialized."
    );

    return;
  }

  try {

    const provider =
      new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: "select_account"
    });

    /*
     * Popup works well on desktop.
     * If the browser blocks the popup, fall back
     * to redirect authentication.
     */

    try {

      const result =
        await auth.signInWithPopup(
          provider
        );

      const user =
        result.user;

      loginSuccess({
        uid: user.uid,
        name:
          user.displayName ||
          "Mitti Manor Customer",
        email:
          user.email || "",
        phone:
          user.phoneNumber || "",
        photo:
          user.photoURL || "",
        method: "google"
      });

      return true;

    } catch (popupError) {

      console.warn(
        "Google popup failed:",
        popupError
      );

      if (
        popupError.code ===
          "auth/popup-blocked" ||
        popupError.code ===
          "auth/operation-not-supported-in-this-environment"
      ) {

        await auth.signInWithRedirect(
          provider
        );

        return true;
      }

      throw popupError;
    }

  } catch (error) {

    console.error(
      "Google login failed:",
      error
    );

    alert(
      firebaseErrorMessage(error)
    );

    return false;
  }
}


/* ============================================================
   LOGIN SUCCESS
============================================================ */

function loginSuccess(userObj) {

  state.user = userObj;

  saveState();

  closeAllOverlays();

  renderAccountArea();

  alert(
    "Welcome to Mitti Manor!"
  );
}


/* ============================================================
   LOGOUT
============================================================ */

async function logout() {

  try {

    if (auth) {
      await auth.signOut();
    }

  } catch (error) {

    console.error(
      "Firebase logout failed:",
      error
    );

  } finally {

    state.user = null;

    saveState();

    renderAccountArea();

    closeAllOverlays();
  }
}


/* ============================================================
   CATEGORY RENDER
============================================================ */

function renderCategories() {

  const wrap =
    document.getElementById(
      "categoryChips"
    );

  if (!wrap) return;

  wrap.innerHTML =
    CATEGORIES.map(category => {

      return `
        <button
          class="chip ${
            state.activeCategory === category.id
              ? "chip-active"
              : ""
          }"
          data-cat="${category.id}"
        >
          <span class="chip-icon">
            ${ICONS[category.icon]}
          </span>

          <span>
            ${category.name}
          </span>
        </button>
      `;

    }).join("");

  wrap
    .querySelectorAll(".chip")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          state.activeCategory =
            button.dataset.cat;

          renderCategories();

          if (
            state.activeCategory ===
            "landscaping"
          ) {

            openLandscapingModal();

          } else {

            renderProducts();

          }
        }
      );
    });
}


/* ============================================================
   FILTER PRODUCTS
============================================================ */

function getFilteredProducts() {

  let list =
    ALL_PRODUCTS;

  if (
    state.activeCategory !== "all" &&
    state.activeCategory !== "landscaping"
  ) {

    list =
      list.filter(
        product =>
          product.category ===
          state.activeCategory
      );
  }

  if (
    state.searchQuery.trim()
  ) {

    const query =
      state.searchQuery
        .toLowerCase()
        .trim();

    list =
      list.filter(product =>
        product.name
          .toLowerCase()
          .includes(query)
      );
  }

  return list;
}


/* ============================================================
   PRODUCT GRID
============================================================ */

function renderProducts() {

  const grid =
    document.getElementById(
      "productGrid"
    );

  if (!grid) return;

  const products =
    getFilteredProducts()
      .slice(0, 120);

  if (!products.length) {

    grid.innerHTML = `
      <div class="empty-state">
        No products found.
        Try another search.
      </div>
    `;

    return;
  }

  grid.innerHTML =
    products
      .map(productCardHTML)
      .join("");

  attachProductCardEvents();
}


/* ============================================================
   PRODUCT CARD
============================================================ */

function productCardHTML(product) {

  const quantity =
    state.cart[product.id] || 0;

  const wished =
    state.wishlist.includes(
      product.id
    );

  return `
    <article
      class="product-card"
      data-id="${product.id}"
    >

      <div class="product-img-wrap">

        <img
          loading="lazy"
          src="${product.image}"
          alt="${product.name}"
          class="product-img"
        >

        ${
          product.tags.includes("Bestseller")
            ? `<span class="badge badge-best">
                Bestseller
              </span>`
            : ""
        }

        ${
          product.tags.includes("New")
            ? `<span class="badge badge-new">
                New
              </span>`
            : ""
        }

        <button
          class="wish-btn ${
            wished ? "wished" : ""
          }"
          data-wish="${product.id}"
          aria-label="Add to wishlist"
        >

          <svg
            viewBox="0 0 24 24"
            fill="${
              wished
                ? "currentColor"
                : "none"
            }"
            stroke="currentColor"
            stroke-width="1.6"
          >
            <path d="M12 21s-7.5-4.6-10-9.3C.5 8 2.3 4.5 6 4.1c2.1-.2 3.8 1 5 2.6 1.2-1.6 2.9-2.8 5-2.6 3.7.4 5.5 3.9 4 7.6C19.5 16.4 12 21 12 21z"/>
          </svg>

        </button>

      </div>

      <div class="product-info">

        <p class="product-name">
          ${product.name}
        </p>

        <div class="rating-row">

          <span class="rating-pill">
            ${product.rating} ★
          </span>

          <span class="review-count">
            ${product.reviews.toLocaleString("en-IN")}
          </span>

        </div>

        <div class="price-row">

          <span class="price">
            ₹${product.price}
          </span>

          <span class="mrp">
            ₹${product.mrp}
          </span>

          <span class="discount">
            ${product.discountPct}% off
          </span>

        </div>

        ${
          quantity === 0

            ? `
              <button
                class="add-btn"
                data-add="${product.id}"
              >
                Add +
              </button>
            `

            : `
              <div class="qty-stepper">

                <button
                  data-dec="${product.id}"
                >
                  −
                </button>

                <span>
                  ${quantity}
                </span>

                <button
                  data-inc="${product.id}"
                >
                  +
                </button>

              </div>
            `
        }

      </div>

    </article>
  `;
}


/* ============================================================
   PRODUCT EVENTS
============================================================ */

function attachProductCardEvents() {

  document
    .querySelectorAll("[data-add]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          addToCart(
            button.dataset.add
          );

          renderProducts();

          updateCartBadge();
        }
      );
    });


  document
    .querySelectorAll("[data-inc]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          addToCart(
            button.dataset.inc
          );

          renderProducts();

          updateCartBadge();
        }
      );
    });


  document
    .querySelectorAll("[data-dec]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          removeFromCart(
            button.dataset.dec
          );

          renderProducts();

          updateCartBadge();
        }
      );
    });


  document
    .querySelectorAll("[data-wish]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          toggleWishlist(
            button.dataset.wish
          );

          renderProducts();
        }
      );
    });
}


/* ============================================================
   CART
============================================================ */

function addToCart(id) {

  id = String(id);

  state.cart[id] =
    (state.cart[id] || 0) + 1;

  saveState();
}


function removeFromCart(id) {

  id = String(id);

  if (!state.cart[id]) {
    return;
  }

  state.cart[id]--;

  if (
    state.cart[id] <= 0
  ) {

    delete state.cart[id];
  }

  saveState();
}


function toggleWishlist(id) {

  id = Number(id);

  const index =
    state.wishlist.indexOf(id);

  if (index === -1) {

    state.wishlist.push(id);

  } else {

    state.wishlist.splice(
      index,
      1
    );
  }

  saveState();
}


function cartItemCount() {

  return Object.values(
    state.cart
  ).reduce(
    (total, quantity) =>
      total + quantity,
    0
  );
}


function cartTotal() {

  return Object.entries(
    state.cart
  ).reduce(
    (total, [id, quantity]) => {

      const product =
        ALL_PRODUCTS.find(
          p =>
            p.id === Number(id)
        );

      return (
        total +
        (
          product
            ? product.price * quantity
            : 0
        )
      );

    },
    0
  );
}


function updateCartBadge() {

  const badge =
    document.getElementById(
      "cartCount"
    );

  if (!badge) return;

  badge.textContent =
    cartItemCount();
}


/* ============================================================
   CART DRAWER
============================================================ */

function renderCartDrawer() {

  const body =
    document.getElementById(
      "cartDrawerBody"
    );

  if (!body) return;

  const entries =
    Object.entries(
      state.cart
    );

  if (!entries.length) {

    body.innerHTML = `
      <div class="empty-state">
        Your cart is empty.
      </div>
    `;

  } else {

    body.innerHTML =
      entries
        .map(([id, quantity]) => {

          const product =
            ALL_PRODUCTS.find(
              p =>
                p.id === Number(id)
            );

          if (!product) {
            return "";
          }

          return `
            <div class="cart-row">

              <img
                src="${product.image}"
                class="cart-row-img"
                alt="${product.name}"
              >

              <div class="cart-row-info">

                <p class="cart-row-name">
                  ${product.name}
                </p>

                <p class="cart-row-price">
                  ₹${product.price}
                  × ${quantity}
                  =
                  ₹${product.price * quantity}
                </p>

                <div class="qty-stepper qty-stepper-sm">

                  <button
                    data-dec="${product.id}"
                  >
                    −
                  </button>

                  <span>
                    ${quantity}
                  </span>

                  <button
                    data-inc="${product.id}"
                  >
                    +
                  </button>

                </div>

              </div>

            </div>
          `;

        })
        .join("");


    body
      .querySelectorAll("[data-inc]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            addToCart(
              button.dataset.inc
            );

            renderCartDrawer();
            updateCartBadge();
          }
        );
      });


    body
      .querySelectorAll("[data-dec]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            removeFromCart(
              button.dataset.dec
            );

            renderCartDrawer();
            updateCartBadge();
          }
        );
      });
  }

  const total =
    document.getElementById(
      "cartTotal"
    );

  if (total) {
    total.textContent =
      `₹${cartTotal()}`;
  }
}


function openCartDrawer() {

  renderCartDrawer();

  document
    .getElementById("cartDrawer")
    ?.classList.add("open");

  document
    .getElementById("overlay")
    ?.classList.add("show");
}


/* ============================================================
   OVERLAY
============================================================ */

function closeAllOverlays() {

  document
    .querySelectorAll(
      ".drawer, .modal"
    )
    .forEach(element => {

      element.classList.remove(
        "open"
      );
    });

  document
    .getElementById("overlay")
    ?.classList.remove("show");
}


/* ============================================================
   LOGIN MODAL
============================================================ */

function openLoginModal() {

  const modal =
    document.getElementById(
      "loginModal"
    );

  if (!modal) return;

  modal.classList.add("open");

  document
    .getElementById("overlay")
    ?.classList.add("show");

  const otpSection =
    document.getElementById(
      "otpSection"
    );

  if (otpSection) {
    otpSection.style.display =
      "none";
  }

  const otpInput =
    document.getElementById(
      "otpInput"
    );

  if (otpInput) {
    otpInput.value = "";
  }
}


/* ============================================================
   ACCOUNT
============================================================ */

function renderAccountArea() {

  const button =
    document.getElementById(
      "accountBtn"
    );

  if (!button) return;

  if (state.user) {

    button.innerHTML = `

      ${
        state.user.photo
          ? `
            <img
              src="${state.user.photo}"
              alt="Profile"
              style="
                width:22px;
                height:22px;
                border-radius:50%;
                object-fit:cover;
              "
            >
          `
          : `
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              style="width:22px;height:22px;"
            >
              <circle
                cx="12"
                cy="8"
                r="4"
              />
              <path
                d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6"
              />
            </svg>
          `
      }

      <span>
        ${
          state.user.name ||
          "Account"
        }
      </span>

    `;

  } else {

    button.innerHTML = `

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        style="width:22px;height:22px;"
      >
        <circle
          cx="12"
          cy="8"
          r="4"
        />
        <path
          d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6"
        />
      </svg>

      <span>
        Login
      </span>
    `;
  }
}


/* ============================================================
   RAZORPAY CHECKOUT
============================================================ */

function openCheckout() {

  if (
    cartItemCount() === 0
  ) {

    alert(
      "Your cart is empty."
    );

    return;
  }

  if (!state.user) {

    openLoginModal();

    alert(
      "Please login before checkout."
    );

    return;
  }

  if (
    typeof Razorpay ===
    "undefined"
  ) {

    alert(
      "Payment service is unavailable."
    );

    return;
  }

  const key =
    CONFIG &&
    CONFIG.razorpayKeyId
      ? CONFIG.razorpayKeyId
      : "";

  if (!key) {

    alert(
      "Razorpay is not configured."
    );

    return;
  }

  const amount =
    cartTotal();

  const options = {

    key,

    amount:
      amount * 100,

    currency: "INR",

    name:
      CONFIG.business.name,

    description:
      "Mitti Manor Garden Order",

    handler:
      function(response) {

        const order = {

          id:
            "MM" +
            Date.now(),

          items:
            {
              ...state.cart
            },

          total:
            amount,

          paymentId:
            response.razorpay_payment_id,

          date:
            new Date().toISOString()
        };

        state.currentOrders.push(
          order
        );

        state.cart = {};

        saveState();

        updateCartBadge();

        closeAllOverlays();

        alert(
          "Order placed successfully!"
        );
      },

    prefill: {

      name:
        state.user.name || "",

      contact:
        state.user.phone || "",

      email:
        state.user.email || ""
    },

    theme: {
      color: "#1F3D2B"
    }
  };

  try {

    const razorpay =
      new Razorpay(
        options
      );

    razorpay.open();

  } catch (error) {

    console.error(
      "Razorpay error:",
      error
    );

    alert(
      "Unable to open payment."
    );
  }
}


/* ============================================================
   LANDSCAPING
============================================================ */

function openLandscapingModal() {

  const select =
    document.getElementById(
      "landscapeService"
    );

  if (!select) return;

  select.innerHTML =
    LANDSCAPING_SERVICES
      .map(service => {

        return `
          <option
            value="${service}"
          >
            ${service}
          </option>
        `;

      })
      .join("");

  document
    .getElementById(
      "landscapeModal"
    )
    ?.classList.add("open");

  document
    .getElementById("overlay")
    ?.classList.add("show");
}


function submitLandscapeQuote(event) {

  event.preventDefault();

  const service =
    document
      .getElementById(
        "landscapeService"
      )
      ?.value || "";

  const name =
    document
      .getElementById(
        "landscapeName"
      )
      ?.value
      .trim() || "";

  const phone =
    document
      .getElementById(
        "landscapePhone"
      )
      ?.value
      .trim() || "";

  const area =
    document
      .getElementById(
        "landscapeArea"
      )
      ?.value
      .trim() || "";

  const notes =
    document
      .getElementById(
        "landscapeNotes"
      )
      ?.value
      .trim() || "";


  if (!name || !phone) {

    alert(
      "Name and phone number are required."
    );

    return;
  }


  const message =
    `Landscaping Quote Request

Service: ${service}

Name: ${name}

Phone: ${phone}

Area/Size: ${area}

Notes: ${notes}`;


  const encodedMessage =
    encodeURIComponent(
      message
    );


  const whatsapp =
    CONFIG.business.whatsapp;


  if (whatsapp) {

    window.open(
      `https://wa.me/${whatsapp}?text=${encodedMessage}`,
      "_blank"
    );
  }


  if (CONFIG.business.email) {

    const subject =
      encodeURIComponent(
        "Landscaping Quote Request"
      );

    window.location.href =
      `mailto:${CONFIG.business.email}` +
      `?subject=${subject}` +
      `&body=${encodedMessage}`;
  }

  closeAllOverlays();
}


/* ============================================================
   SEARCH
============================================================ */

function setupSearch() {

  const input =
    document.getElementById(
      "searchInput"
    );

  if (!input) return;

  input.addEventListener(
    "input",
    () => {

      state.searchQuery =
        input.value;

      if (
        state.activeCategory ===
        "landscaping"
      ) {

        state.activeCategory =
          "all";

        renderCategories();
      }

      renderProducts();
    }
  );
}


/* ============================================================
   BANNER
============================================================ */

const BANNERS = [
  {
    text:
      "Fresh Indoor Plants — Up to 60% Off",
    color:
      "#1F3D2B"
  },

  {
    text:
      "Landscaping Services — Get a Free Quote",
    color:
      "#C4622D"
  },

  {
    text:
      "Buy 2 Get 1 Free — Terracotta Pots",
    color:
      "#B8935A"
  },

  {
    text:
      "Organic Fertilizers Starting ₹99",
    color:
      "#3D5A3D"
  }
];

let bannerIdx = 0;


function renderBanner() {

  const track =
    document.getElementById(
      "bannerTrack"
    );

  const dots =
    document.getElementById(
      "bannerDots"
    );

  if (!track || !dots) return;

  track.innerHTML =
    BANNERS
      .map(
        banner => `
          <div
            class="banner-slide"
            style="
              background:${banner.color}
            "
          >
            <p>
              ${banner.text}
            </p>
          </div>
        `
      )
      .join("");

  dots.innerHTML =
    BANNERS
      .map(
        (_, index) => `
          <span
            class="dot ${
              index === bannerIdx
                ? "dot-active"
                : ""
            }"
          ></span>
        `
      )
      .join("");
}


function nextBanner() {

  bannerIdx =
    (bannerIdx + 1) %
    BANNERS.length;

  const track =
    document.getElementById(
      "bannerTrack"
    );

  if (track) {

    track.style.transform =
      `translateX(-${
        bannerIdx * 100
      }%)`;
  }

  document
    .querySelectorAll(
      "#bannerDots .dot"
    )
    .forEach(
      (dot, index) => {

        dot.classList.toggle(
          "dot-active",
          index === bannerIdx
        );
      }
    );
}


/* ============================================================
   INIT
============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initFirebase();

    renderCategories();

    renderBanner();

    renderProducts();

    renderAccountArea();

    updateCartBadge();

    setupSearch();


    setInterval(
      nextBanner,
      3500
    );


    /* ---------------- CART ---------------- */

    document
      .getElementById("cartBtn")
      ?.addEventListener(
        "click",
        openCartDrawer
      );


    document
      .getElementById("closeCart")
      ?.addEventListener(
        "click",
        closeAllOverlays
      );


    document
      .getElementById("overlay")
      ?.addEventListener(
        "click",
        closeAllOverlays
      );


    document
      .getElementById("checkoutBtn")
      ?.addEventListener(
        "click",
        openCheckout
      );


    /* ---------------- ACCOUNT ---------------- */

    document
      .getElementById("accountBtn")
      ?.addEventListener(
        "click",
        () => {

          if (state.user) {

            if (
              confirm(
                "Do you want to logout?"
              )
            ) {

              logout();
            }

          } else {

            openLoginModal();
          }
        }
      );


    /* ---------------- LOGIN CLOSE ---------------- */

    document
      .getElementById("closeLogin")
      ?.addEventListener(
        "click",
        closeAllOverlays
      );


    /* ---------------- GOOGLE ---------------- */

    document
      .getElementById(
        "googleSignInBtn"
      )
      ?.addEventListener(
        "click",
        googleSignIn
      );


    /* ---------------- SEND OTP ---------------- */

    document
      .getElementById(
        "sendOtpBtn"
      )
      ?.addEventListener(
        "click",
        async () => {

          const input =
            document.getElementById(
              "phoneInput"
            );

          const phone =
            input
              ? input.value.trim()
              : "";

          const success =
            await sendOtp(
              phone
            );

          if (success) {

            const otpSection =
              document.getElementById(
                "otpSection"
              );

            if (otpSection) {

              otpSection.style.display =
                "block";
            }
          }
        }
      );


    /* ---------------- VERIFY OTP ---------------- */

    document
      .getElementById(
        "verifyOtpBtn"
      )
      ?.addEventListener(
        "click",
        async () => {

          const otpInput =
            document.getElementById(
              "otpInput"
            );

          const otp =
            otpInput
              ? otpInput.value.trim()
              : "";

          await verifyOtp(
            otp
          );
        }
      );


    /* ---------------- LANDSCAPING ---------------- */

    document
      .getElementById(
        "closeLandscape"
      )
      ?.addEventListener(
        "click",
        closeAllOverlays
      );


    document
      .getElementById(
        "landscapeForm"
      )
      ?.addEventListener(
        "submit",
        submitLandscapeQuote
      );


    document
      .getElementById(
        "landscapeNavBtn"
      )
      ?.addEventListener(
        "click",
        openLandscapingModal
      );

  }
);


/* ============================================================
   GLOBAL ACCESS
============================================================ */

window.openLoginModal =
  openLoginModal;

window.openLandscapingModal =
  openLandscapingModal;

window.closeAllOverlays =
  closeAllOverlays;

window.addToCart =
  addToCart;

window.removeFromCart =
  removeFromCart;

window.googleSignIn =
  googleSignIn;

window.sendOtp =
  sendOtp;

window.verifyOtp =
  verifyOtp;

window.resendOtp =
  resendOtp;

window.logout =
  logout;
