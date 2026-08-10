// ============================================================
// MITTI MANOR — APP LOGIC
// ============================================================

/* ---------------- CATEGORY DEFINITIONS ---------------- */
const CATEGORIES = [
  { id: "all", name: "All", icon: "grid" },
  { id: "plants", name: "Plants", icon: "leaf" },
  { id: "pots", name: "Pots & Planters", icon: "pot" },
  { id: "soil", name: "Soil & Fertilizers", icon: "soil" },
  { id: "seeds", name: "Seeds & Bulbs", icon: "seed" },
  { id: "decor", name: "Garden Decor", icon: "decor" },
  { id: "tools", name: "Tools & Accessories", icon: "tool" },
  { id: "landscaping", name: "Landscaping (Get Quote)", icon: "landscape" }
];

const ICONS = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14z"/><path d="M4 20 12 12"/></svg>',
  pot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h12l-1.5 12a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 8z"/><path d="M4 8h16M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  soil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 14h18M3 14c2-4 5-6 9-6s7 2 9 6M3 14v6h18v-6"/></svg>',
  seed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="12" rx="5" ry="8"/><path d="M12 4v16"/></svg>',
  decor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v6M12 22v-4M4.9 4.9l4.2 4.2M19.1 4.9 14.9 9.1M2 12h6M22 12h-6"/><circle cx="12" cy="12" r="3"/></svg>',
  tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/></svg>',
  landscape: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 18l5-7 4 5 3-4 6 6"/><path d="M3 21h18"/></svg>'
};

/* ---------------- PRODUCT NAME BANKS ---------------- */
const NAME_BANKS = {
  plants: ["Money Plant","Snake Plant","Areca Palm","Peace Lily","ZZ Plant","Aloe Vera","Jade Plant","Spider Plant","Lucky Bamboo","Rubber Plant","Croton","Bonsai Ficus","Marigold Plant","Rose Plant","Hibiscus Plant","Jasmine Plant","Tulsi Plant","Aparajita Plant","Bougainvillea Plant","Anthurium Plant","Philodendron","Monstera Deliciosa","Calathea","Boston Fern","Cactus Mix","Succulent Set","Adenium Bonsai","Champa Plant","Curry Leaf Plant","Lemon Plant","Mint Plant","Ixora Plant","Hoya Plant","Syngonium","Dracaena Plant","Money Plant Pothos","Fiddle Leaf Fig","Kalanchoe","Chrysanthemum Plant","Champa Frangipani"],
  pots: ["Ceramic Pot","Terracotta Pot","Self-Watering Pot","Hanging Planter","Metal Planter","Cement Planter","Plastic Planter","Wooden Planter Box","Railing Planter","Wall Mounted Planter","Designer Ceramic Bowl Planter","Balcony Rail Planter","Fibre Rock Planter","Woven Basket Planter","Concrete Textured Planter"],
  soil: ["Potting Mix Soil","Cocopeat Block","Vermicompost","Organic Manure","Perlite Mix","Bone Meal Fertilizer","NPK Fertilizer","Neem Cake Fertilizer","Seaweed Fertilizer","Rice Husk Compost","Cactus & Succulent Soil Mix","Vermiculite Mix","Organic Compost Pack","Micronutrient Fertilizer Mix"],
  seeds: ["Tomato Seeds","Chilli Seeds","Marigold Seeds","Sunflower Seeds","Spinach Seeds","Cucumber Seeds","Rose Seeds Pack","Watermelon Seeds","Coriander Seeds","Lawn Grass Seeds","Tulip Bulbs","Gladiolus Bulbs","Onion Sets Bulbs","Brinjal Seeds","Capsicum Seeds"],
  decor: ["Garden Gnome","Fairy Light String","Wind Chime","Garden Stool","Stone Pathway Tile","Decorative Pebbles Pack","Bird Bath","Plant Stand","Wall Trellis","Garden Fountain","Solar Garden Lamp","Miniature Fairy House","Hanging Wind Bell","Garden Bench"],
  tools: ["Pruning Shears","Garden Trowel Set","Watering Can","Gardening Gloves Pair","Hand Cultivator","Spray Bottle Mister","Garden Hose 10m","Grow Bags Set of 5","Plant Support Stakes","Soil pH Meter","Garden Tool Kit 5pc","Hand Pruner","Garden Kneeling Pad","Seedling Tray Set"]
};

const ADJECTIVES = ["Premium","Live","Fresh","Handpicked","Air-Purifying","Indoor","Outdoor","Mini","Large","Combo Pack of 2","Set of 3","Grown","Nursery Fresh","Imported Variety","Best Quality"];

const LANDSCAPING_SERVICES = ["Home Garden Landscaping","Terrace Garden Design","Balcony Garden Makeover","Vertical Garden Installation","Lawn Development & Turfing","Rock Garden Design","Kitchen Garden Setup","Office Green Wall Installation","Farmhouse Landscaping","Poolside Garden Design"];

/* ---------------- PRODUCT GENERATION ---------------- */
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateProducts(targetCount) {
  const products = [];
  let id = 1;
  const orderCats = ["plants", "pots", "soil", "seeds", "decor", "tools"];
  // distribute target count across categories, weighted toward plants
  const weights = { plants: 0.34, pots: 0.16, soil: 0.14, seeds: 0.12, decor: 0.12, tools: 0.12 };

  orderCats.forEach(cat => {
    const count = Math.round(targetCount * weights[cat]);
    const bank = NAME_BANKS[cat];
    for (let i = 0; i < count; i++) {
      const base = bank[i % bank.length];
      const adj = ADJECTIVES[Math.floor(seededRandom(id * 7.13) * ADJECTIVES.length)];
      const useAdj = seededRandom(id * 3.7) > 0.35;
      const name = useAdj ? `${adj} ${base}` : base;

      const priceBase = { plants: 149, pots: 199, soil: 99, seeds: 39, decor: 249, tools: 149 }[cat];
      const priceSpread = { plants: 900, pots: 1200, soil: 400, seeds: 150, decor: 1500, tools: 800 }[cat];
      const price = Math.round((priceBase + seededRandom(id * 1.9) * priceSpread) / 10) * 10 - 1;
      const discountPct = 10 + Math.floor(seededRandom(id * 5.3) * 55);
      const mrp = Math.round(price / (1 - discountPct / 100) / 10) * 10 - 1;

      const rating = (3.6 + seededRandom(id * 2.2) * 1.4).toFixed(1);
      const reviews = Math.floor(20 + seededRandom(id * 4.1) * 4000);

      const tags = [];
      if (seededRandom(id * 6.6) > 0.85) tags.push("Bestseller");
      if (seededRandom(id * 8.8) > 0.9) tags.push("New");
      if (seededRandom(id * 9.9) > 0.88) tags.push("Trending");

      products.push({
        id,
        name,
        category: cat,
        price,
        mrp,
        discountPct,
        rating,
        reviews,
        tags,
        image: `https://picsum.photos/seed/mitti${id}/400/400`
      });
      id++;
    }
  });

  return products;
}

const ALL_PRODUCTS = generateProducts(1000);

/* ---------------- STATE ---------------- */
let state = {
  cart: JSON.parse(localStorage.getItem("mm_cart") || "{}"), // { productId: qty }
  wishlist: JSON.parse(localStorage.getItem("mm_wishlist") || "[]"),
  user: JSON.parse(localStorage.getItem("mm_user") || "null"),
  activeCategory: "all",
  searchQuery: "",
  currentOrders: JSON.parse(localStorage.getItem("mm_orders") || "[]")
};

function saveState() {
  localStorage.setItem("mm_cart", JSON.stringify(state.cart));
  localStorage.setItem("mm_wishlist", JSON.stringify(state.wishlist));
  localStorage.setItem("mm_user", JSON.stringify(state.user));
  localStorage.setItem("mm_orders", JSON.stringify(state.currentOrders));
}

/* ---------------- RENDER: CATEGORY CHIPS ---------------- */
function renderCategories() {
  const wrap = document.getElementById("categoryChips");
  wrap.innerHTML = CATEGORIES.map(c => `
    <button class="chip ${state.activeCategory === c.id ? "chip-active" : ""}" data-cat="${c.id}">
      <span class="chip-icon">${ICONS[c.icon]}</span>
      <span>${c.name}</span>
    </button>
  `).join("");
  wrap.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeCategory = btn.dataset.cat;
      renderCategories();
      if (state.activeCategory === "landscaping") {
        openLandscapingModal();
      } else {
        renderProducts();
      }
      document.getElementById("productGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ---------------- RENDER: PRODUCT GRID ---------------- */
function getFilteredProducts() {
  let list = ALL_PRODUCTS;
  if (state.activeCategory !== "all" && state.activeCategory !== "landscaping") {
    list = list.filter(p => p.category === state.activeCategory);
  }
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q));
  }
  return list;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const list = getFilteredProducts().slice(0, 120); // render first 120, lazy-load more on scroll
  if (list.length === 0) {
    grid.innerHTML = `<div class="empty-state">Koi product nahi mila. Kuch aur search karo.</div>`;
    return;
  }
  grid.innerHTML = list.map(productCardHTML).join("");
  attachProductCardEvents();
}

function productCardHTML(p) {
  const qty = state.cart[p.id] || 0;
  const wished = state.wishlist.includes(p.id);
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <img loading="lazy" src="${p.image}" alt="${p.name}" class="product-img">
        ${p.tags.includes("Bestseller") ? '<span class="badge badge-best">Bestseller</span>' : ""}
        ${p.tags.includes("New") ? '<span class="badge badge-new">New</span>' : ""}
        <button class="wish-btn ${wished ? "wished" : ""}" data-wish="${p.id}" aria-label="Wishlist">
          <svg viewBox="0 0 24 24" fill="${wished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7.5-4.6-10-9.3C.5 8 2.3 4.5 6 4.1c2.1-.2 3.8 1 5 2.6 1.2-1.6 2.9-2.8 5-2.6 3.7.4 5.5 3.9 4 7.6C19.5 16.4 12 21 12 21z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <p class="product-name">${p.name}</p>
        <div class="rating-row">
          <span class="rating-pill">${p.rating} ★</span>
          <span class="review-count">${p.reviews.toLocaleString("en-IN")}</span>
        </div>
        <div class="price-row">
          <span class="price">₹${p.price}</span>
          <span class="mrp">₹${p.mrp}</span>
          <span class="discount">${p.discountPct}% off</span>
        </div>
        ${qty === 0
          ? `<button class="add-btn" data-add="${p.id}">Add +</button>`
          : `<div class="qty-stepper">
               <button data-dec="${p.id}">−</button>
               <span>${qty}</span>
               <button data-inc="${p.id}">+</button>
             </div>`
        }
      </div>
    </div>
  `;
}

function attachProductCardEvents() {
  document.querySelectorAll("[data-add]").forEach(btn =>
    btn.addEventListener("click", () => { addToCart(btn.dataset.add); renderProducts(); updateCartBadge(); }));
  document.querySelectorAll("[data-inc]").forEach(btn =>
    btn.addEventListener("click", () => { addToCart(btn.dataset.inc); renderProducts(); updateCartBadge(); }));
  document.querySelectorAll("[data-dec]").forEach(btn =>
    btn.addEventListener("click", () => { removeFromCart(btn.dataset.dec); renderProducts(); updateCartBadge(); }));
  document.querySelectorAll("[data-wish]").forEach(btn =>
    btn.addEventListener("click", () => { toggleWishlist(btn.dataset.wish); renderProducts(); }));
}

/* ---------------- CART LOGIC ---------------- */
function addToCart(id) {
  id = String(id);
  state.cart[id] = (state.cart[id] || 0) + 1;
  saveState();
}
function removeFromCart(id) {
  id = String(id);
  if (!state.cart[id]) return;
  state.cart[id] -= 1;
  if (state.cart[id] <= 0) delete state.cart[id];
  saveState();
}
function toggleWishlist(id) {
  id = Number(id);
  const idx = state.wishlist.indexOf(id);
  if (idx === -1) state.wishlist.push(id); else state.wishlist.splice(idx, 1);
  saveState();
}
function cartItemCount() {
  return Object.values(state.cart).reduce((a, b) => a + b, 0);
}
function cartTotal() {
  return Object.entries(state.cart).reduce((sum, [id, qty]) => {
    const p = ALL_PRODUCTS.find(p => p.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);
}
function updateCartBadge() {
  document.getElementById("cartCount").textContent = cartItemCount();
}

/* ---------------- CART DRAWER ---------------- */
function renderCartDrawer() {
  const body = document.getElementById("cartDrawerBody");
  const entries = Object.entries(state.cart);
  if (entries.length === 0) {
    body.innerHTML = `<div class="empty-state">Cart khali hai. Kuch add karo!</div>`;
  } else {
    body.innerHTML = entries.map(([id, qty]) => {
      const p = ALL_PRODUCTS.find(p => p.id === Number(id));
      if (!p) return "";
      return `
        <div class="cart-row">
          <img src="${p.image}" class="cart-row-img">
          <div class="cart-row-info">
            <p class="cart-row-name">${p.name}</p>
            <p class="cart-row-price">₹${p.price} x ${qty} = ₹${p.price * qty}</p>
            <div class="qty-stepper qty-stepper-sm">
              <button data-dec="${p.id}">−</button>
              <span>${qty}</span>
              <button data-inc="${p.id}">+</button>
            </div>
          </div>
        </div>`;
    }).join("");
    body.querySelectorAll("[data-inc]").forEach(btn =>
      btn.addEventListener("click", () => { addToCart(btn.dataset.inc); renderCartDrawer(); updateCartBadge(); }));
    body.querySelectorAll("[data-dec]").forEach(btn =>
      btn.addEventListener("click", () => { removeFromCart(btn.dataset.dec); renderCartDrawer(); updateCartBadge(); }));
  }
  document.getElementById("cartTotal").textContent = `₹${cartTotal()}`;
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}
function closeAllOverlays() {
  document.querySelectorAll(".drawer, .modal").forEach(el => el.classList.remove("open"));
  document.getElementById("overlay").classList.remove("show");
}

/* ---------------- LOGIN (Firebase Phone OTP + Google) ---------------- */
let firebaseApp, auth, confirmationResult;

function initFirebase() {
  try {
    if (window.firebase && CONFIG.firebase.apiKey !== "PASTE_YOUR_FIREBASE_API_KEY_HERE") {
      firebaseApp = firebase.initializeApp(CONFIG.firebase);
      auth = firebase.auth();
    }
  } catch (e) {
    console.warn("Firebase not fully configured, using demo login fallback.", e);
  }
}

function setupRecaptcha() {
  if (!auth) return;
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptchaContainer", { size: "invisible" }, auth);
  }
}

async function sendOtp(phoneNumber) {
  const fullPhone = "+91" + phoneNumber;
  if (auth) {
    try {
      setupRecaptcha();
      confirmationResult = await auth.signInWithPhoneNumber(fullPhone, window.recaptchaVerifier);
      return true;
    } catch (e) {
      console.error(e);
      alert("OTP bhejne mein error aaya. Demo mode use ho raha hai (OTP: " + CONFIG.demoOtp + ")");
      return "demo";
    }
  }
  return "demo";
}

async function verifyOtp(otp, phoneNumber) {
  if (confirmationResult) {
    try {
      const result = await confirmationResult.confirm(otp);
      loginSuccess({ name: "User", phone: phoneNumber, method: "phone" });
      return true;
    } catch (e) {
      alert("Galat OTP. Dobara try karo.");
      return false;
    }
  } else {
    // demo fallback
    if (otp === CONFIG.demoOtp) {
      loginSuccess({ name: "User", phone: phoneNumber, method: "phone-demo" });
      return true;
    } else {
      alert(`Galat OTP. Demo OTP hai: ${CONFIG.demoOtp}`);
      return false;
    }
  }
}

function googleSignIn() {
  if (auth) {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(result => {
      const u = result.user;
      loginSuccess({ name: u.displayName, email: u.email, method: "google" });
    }).catch(e => {
      console.error(e);
      alert("Google Sign-In fail hua. Firebase config check karo (config.js).");
    });
  } else {
    alert("Google Sign-In ke liye Firebase config zaroori hai (config.js mein apiKey daalo).");
  }
}

function loginSuccess(userObj) {
  state.user = userObj;
  saveState();
  closeAllOverlays();
  renderAccountArea();
}

function logout() {
  state.user = null;
  saveState();
  renderAccountArea();
  if (auth) auth.signOut();
}

function renderAccountArea() {
  const el = document.getElementById("accountBtn");
  if (state.user) {
    el.innerHTML = `<span>${state.user.name || state.user.phone || "Account"}</span>`;
  } else {
    el.innerHTML = `<span>Login</span>`;
  }
}

/* ---------------- CHECKOUT (Razorpay) ---------------- */
function openCheckout() {
  if (cartItemCount() === 0) { alert("Cart khali hai."); return; }
  if (!state.user) {
    openLoginModal();
    alert("Pehle login karo, phir checkout karo.");
    return;
  }
  const amount = cartTotal();
  const options = {
    key: CONFIG.razorpayKeyId,
    amount: amount * 100,
    currency: "INR",
    name: CONFIG.business.name,
    description: "Order Payment",
    handler: function (response) {
      const order = {
        id: "MM" + Date.now(),
        items: { ...state.cart },
        total: amount,
        paymentId: response.razorpay_payment_id,
        date: new Date().toISOString()
      };
      state.currentOrders.push(order);
      state.cart = {};
      saveState();
      updateCartBadge();
      closeAllOverlays();
      alert("Order successful! Payment ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: state.user.name || "",
      contact: state.user.phone || "",
      email: state.user.email || ""
    },
    theme: { color: "#1F3D2B" }
  };
  const rzp = new Razorpay(options);
  rzp.open();
}

/* ---------------- LANDSCAPING QUOTE FORM ---------------- */
function openLandscapingModal() {
  const select = document.getElementById("landscapeService");
  select.innerHTML = LANDSCAPING_SERVICES.map(s => `<option value="${s}">${s}</option>`).join("");
  document.getElementById("landscapeModal").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

function submitLandscapeQuote(e) {
  e.preventDefault();
  const service = document.getElementById("landscapeService").value;
  const name = document.getElementById("landscapeName").value.trim();
  const phone = document.getElementById("landscapePhone").value.trim();
  const area = document.getElementById("landscapeArea").value.trim();
  const notes = document.getElementById("landscapeNotes").value.trim();

  if (!name || !phone) { alert("Naam aur phone number zaroori hai."); return; }

  const message = `Landscaping Quote Request%0A%0AService: ${encodeURIComponent(service)}%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AArea/Size: ${encodeURIComponent(area)}%0ANotes: ${encodeURIComponent(notes)}`;

  window.open(`https://wa.me/${CONFIG.business.whatsapp}?text=${message}`, "_blank");
  window.location.href = `mailto:${CONFIG.business.email}?subject=Landscaping Quote Request&body=${message}`;

  closeAllOverlays();
  alert("Quote request WhatsApp/Email mein khul gaya hai. Bhej do!");
}

/* ---------------- SEARCH ---------------- */
function setupSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", () => {
    state.searchQuery = input.value;
    if (state.activeCategory === "landscaping") state.activeCategory = "all";
    renderProducts();
  });
}

/* ---------------- BANNER CAROUSEL ---------------- */
const BANNERS = [
  { text: "Fresh Indoor Plants — Up to 60% Off", color: "#1F3D2B" },
  { text: "Landscaping Services — Get a Free Quote", color: "#C4622D" },
  { text: "Buy 2 Get 1 Free — Terracotta Pots", color: "#B8935A" },
  { text: "Organic Fertilizers Starting ₹99", color: "#3D5A3D" }
];
let bannerIdx = 0;
function renderBanner() {
  const track = document.getElementById("bannerTrack");
  track.innerHTML = BANNERS.map(b => `<div class="banner-slide" style="background:${b.color}"><p>${b.text}</p></div>`).join("");
  const dots = document.getElementById("bannerDots");
  dots.innerHTML = BANNERS.map((_, i) => `<span class="dot ${i === bannerIdx ? "dot-active" : ""}"></span>`).join("");
}
function nextBanner() {
  bannerIdx = (bannerIdx + 1) % BANNERS.length;
  document.getElementById("bannerTrack").style.transform = `translateX(-${bannerIdx * 100}%)`;
  document.querySelectorAll("#bannerDots .dot").forEach((d, i) => d.classList.toggle("dot-active", i === bannerIdx));
}

/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  initFirebase();
  renderCategories();
  renderBanner();
  renderProducts();
  renderAccountArea();
  updateCartBadge();
  setupSearch();
  setInterval(nextBanner, 3500);

  document.getElementById("cartBtn").addEventListener("click", openCartDrawer);
  document.getElementById("closeCart").addEventListener("click", closeAllOverlays);
  document.getElementById("overlay").addEventListener("click", closeAllOverlays);
  document.getElementById("checkoutBtn").addEventListener("click", openCheckout);

  document.getElementById("accountBtn").addEventListener("click", () => {
    if (state.user) {
      if (confirm("Logout karna hai?")) logout();
    } else {
      openLoginModal();
    }
  });
  document.getElementById("closeLogin").addEventListener("click", closeAllOverlays);
  document.getElementById("googleSignInBtn").addEventListener("click", googleSignIn);

  document.getElementById("sendOtpBtn").addEventListener("click", async () => {
    const phone = document.getElementById("phoneInput").value.trim();
    if (phone.length !== 10) { alert("10 digit mobile number daalo."); return; }
    await sendOtp(phone);
    document.getElementById("otpSection").style.display = "block";
  });
  document.getElementById("verifyOtpBtn").addEventListener("click", () => {
    const phone = document.getElementById("phoneInput").value.trim();
    const otp = document.getElementById("otpInput").value.trim();
    verifyOtp(otp, phone);
  });

  document.getElementById("closeLandscape").addEventListener("click", closeAllOverlays);
  document.getElementById("landscapeForm").addEventListener("submit", submitLandscapeQuote);

  document.getElementById("landscapeNavBtn").addEventListener("click", openLandscapingModal);
});

function openLoginModal() {
  document.getElementById("loginModal").classList.add("open");
  document.getElementById("overlay").classList.add("show");
  document.getElementById("otpSection").style.display = "none";
}
