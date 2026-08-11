// ============================================================
// MITTI MANOR — FULL APP LOGIC v2
// ============================================================

const CATEGORIES = [
  {id:"all",name:"All",icon:"grid"},{id:"plants",name:"Plants",icon:"leaf"},
  {id:"pots",name:"Pots & Planters",icon:"pot"},{id:"soil",name:"Soil & Fertilizers",icon:"soil"},
  {id:"seeds",name:"Seeds & Bulbs",icon:"seed"},{id:"decor",name:"Garden Decor",icon:"decor"},
  {id:"tools",name:"Tools & Accessories",icon:"tool"}
];

const ICONS = {
 grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
 leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14z"/><path d="M4 20 12 12"/></svg>',
 pot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h12l-1.5 12a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 8z"/><path d="M4 8h16M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
 soil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 14h18M3 14c2-4 5-6 9-6s7 2 9 6M3 14v6h18v-6"/></svg>',
 seed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="12" rx="5" ry="8"/><path d="M12 4v16"/></svg>',
 decor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v6M12 22v-4M4.9 4.9l4.2 4.2M19.1 4.9 14.9 9.1M2 12h6M22 12h-6"/><circle cx="12" cy="12" r="3"/></svg>',
 tool:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/></svg>'
};

const NAME_BANKS = {
 plants:["Money Plant","Snake Plant","Areca Palm","Peace Lily","ZZ Plant","Aloe Vera","Jade Plant","Spider Plant","Lucky Bamboo","Rubber Plant","Croton","Bonsai Ficus","Marigold Plant","Rose Plant","Hibiscus Plant","Jasmine Plant","Tulsi Plant","Aparajita Plant","Bougainvillea Plant","Anthurium Plant","Philodendron","Monstera Deliciosa","Calathea","Boston Fern","Succulent Set","Adenium Bonsai","Champa Plant","Curry Leaf Plant","Lemon Plant","Mint Plant","Ixora Plant","Hoya Plant","Syngonium","Dracaena Plant","Fiddle Leaf Fig","Kalanchoe","Chrysanthemum Plant"],
 pots:["Ceramic Pot","Terracotta Pot","Self-Watering Pot","Hanging Planter","Metal Planter","Cement Planter","Plastic Planter","Wooden Planter Box","Railing Planter","Wall Mounted Planter","Designer Ceramic Bowl Planter","Balcony Rail Planter","Fibre Rock Planter","Woven Basket Planter","Concrete Textured Planter"],
 soil:["Potting Mix Soil","Cocopeat Block","Vermicompost","Organic Manure","Perlite Mix","Bone Meal Fertilizer","NPK Fertilizer","Neem Cake Fertilizer","Seaweed Fertilizer","Rice Husk Compost","Cactus & Succulent Soil Mix","Vermiculite Mix","Organic Compost Pack","Micronutrient Fertilizer Mix"],
 seeds:["Tomato Seeds","Chilli Seeds","Marigold Seeds","Sunflower Seeds","Spinach Seeds","Cucumber Seeds","Rose Seeds Pack","Watermelon Seeds","Coriander Seeds","Lawn Grass Seeds","Tulip Bulbs","Gladiolus Bulbs","Onion Sets Bulbs","Brinjal Seeds","Capsicum Seeds"],
 decor:["Garden Gnome","Fairy Light String","Wind Chime","Garden Stool","Stone Pathway Tile","Decorative Pebbles Pack","Bird Bath","Plant Stand","Wall Trellis","Garden Fountain","Solar Garden Lamp","Miniature Fairy House","Hanging Wind Bell","Garden Bench"],
 tools:["Pruning Shears","Garden Trowel Set","Watering Can","Gardening Gloves Pair","Hand Cultivator","Spray Bottle Mister","Garden Hose 10m","Grow Bags Set of 5","Plant Support Stakes","Soil pH Meter","Garden Tool Kit 5pc","Hand Pruner","Garden Kneeling Pad","Seedling Tray Set"]
};
const ADJECTIVES=["Premium","Live","Fresh","Handpicked","Air-Purifying","Indoor","Outdoor","Mini","Large","Combo Pack of 2","Set of 3","Nursery Fresh","Best Quality"];
const LANDSCAPING_SERVICES=[
 ["Home Garden Landscaping","Complete garden planning, planting and finishing for homes.","🌿"],
 ["Terrace Garden Design","Low-maintenance terrace gardens designed around your space.","🏡"],
 ["Balcony Garden Makeover","Turn balconies into compact, beautiful green corners.","🪴"],
 ["Vertical Garden Installation","Living walls and vertical planting for compact spaces.","🌱"],
 ["Lawn Development & Turfing","Fresh lawns, turfing and ongoing garden care.","🍃"],
 ["Rock Garden Design","Natural stone, textures and plants for a sculpted look.","🪨"],
 ["Kitchen Garden Setup","Grow herbs, vegetables and useful plants at home.","🥬"],
 ["Office Green Wall Installation","Green walls and plants for productive workspaces.","🏢"],
 ["Farmhouse Landscaping","Large-space landscape planning, planting and maintenance.","🌳"],
 ["Poolside Garden Design","Tropical and low-maintenance planting around pools.","💧"]
];

function seededRandom(seed){let x=Math.sin(seed)*10000;return x-Math.floor(x)}
function generateProducts(targetCount){
 const products=[];let id=1;const cats=["plants","pots","soil","seeds","decor","tools"];
 const weights={plants:.34,pots:.16,soil:.14,seeds:.12,decor:.12,tools:.12};
 const base={plants:149,pots:199,soil:99,seeds:39,decor:249,tools:149};
 const spread={plants:900,pots:1200,soil:400,seeds:150,decor:1500,tools:800};
 const imageMap={
  plants:"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80",
  pots:"https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80",
  soil:"https://images.unsplash.com/photo-1585314062604-1a357de8b000?auto=format&fit=crop&w=700&q=80",
  seeds:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=700&q=80",
  decor:"https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80",
  tools:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80"
 };
 cats.forEach(cat=>{
  const count=Math.round(targetCount*weights[cat]);
  for(let i=0;i<count;i++){
   const name=(seededRandom(id*3.7)>.35?ADJECTIVES[Math.floor(seededRandom(id*7.13)*ADJECTIVES.length)]+" ":"")+NAME_BANKS[cat][i%NAME_BANKS[cat].length];
   const price=Math.max(39,Math.round((base[cat]+seededRandom(id*1.9)*spread[cat])/10)*10-1);
   const discountPct=10+Math.floor(seededRandom(id*5.3)*45);
   const mrp=Math.round(price/(1-discountPct/100)/10)*10-1;
   const tags=[];if(seededRandom(id*6.6)>.85)tags.push("Bestseller");if(seededRandom(id*8.8)>.9)tags.push("New");
   products.push({id,name,category:cat,price,mrp,discountPct,rating:(3.6+seededRandom(id*2.2)*1.4).toFixed(1),reviews:Math.floor(20+seededRandom(id*4.1)*4000),tags,image:imageMap[cat]});
   id++;
  }
 });return products;
}
const ALL_PRODUCTS=generateProducts(300);

let state={
 cart:JSON.parse(localStorage.getItem("mm_cart")||"{}"),
 wishlist:JSON.parse(localStorage.getItem("mm_wishlist")||"[]"),
 user:JSON.parse(localStorage.getItem("mm_user")||"null"),
 activeCategory:"all",searchQuery:"",
 currentOrders:JSON.parse(localStorage.getItem("mm_orders")||"[]"),
 pin:localStorage.getItem("mm_pin")||""
};
function saveState(){
 localStorage.setItem("mm_cart",JSON.stringify(state.cart));
 localStorage.setItem("mm_wishlist",JSON.stringify(state.wishlist));
 localStorage.setItem("mm_user",JSON.stringify(state.user));
 localStorage.setItem("mm_orders",JSON.stringify(state.currentOrders));
 if(state.pin)localStorage.setItem("mm_pin",state.pin);
}
function toast(message){const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),2400)}
function showOverlay(){document.getElementById("overlay").classList.add("show");document.body.classList.add("no-scroll")}
function hideOverlay(){document.getElementById("overlay").classList.remove("show");document.body.classList.remove("no-scroll")}

function renderCategories(){
 const wrap=document.getElementById("categoryChips");
 wrap.innerHTML=CATEGORIES.map(c=>`<button class="chip ${state.activeCategory===c.id?"chip-active":""}" data-cat="${c.id}"><span class="chip-icon">${ICONS[c.icon]}</span><span>${c.name}</span></button>`).join("");
 wrap.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{state.activeCategory=b.dataset.cat;renderCategories();renderProducts();document.getElementById("productGrid").scrollIntoView({behavior:"smooth",block:"start"})});
}
function getFilteredProducts(){
 let list=ALL_PRODUCTS;
 if(state.activeCategory!=="all")list=list.filter(p=>p.category===state.activeCategory);
 if(state.searchQuery.trim()){const q=state.searchQuery.toLowerCase();list=list.filter(p=>p.name.toLowerCase().includes(q))}
 return list;
}
function productCardHTML(p){
 const qty=state.cart[p.id]||0,wished=state.wishlist.includes(p.id);
 return `<article class="product-card">
  <div class="product-img-wrap"><img loading="lazy" src="${p.image}" alt="${p.name}" class="product-img" onerror="this.style.opacity='.25'">
   ${p.tags.includes("Bestseller")?'<span class="badge badge-best">Bestseller</span>':""}${p.tags.includes("New")?'<span class="badge badge-new">New</span>':""}
   <button class="wish-btn ${wished?"wished":""}" data-wish="${p.id}" aria-label="Wishlist"><svg viewBox="0 0 24 24" fill="${wished?"currentColor":"none"}" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7.5-4.6-10-9.3C.5 8 2.3 4.5 6 4.1c2.1-.2 3.8 1 5 2.6 1.2-1.6 2.9-2.8 5-2.6 3.7.4 5.5 3.9 4 7.6C19.5 16.4 12 21 12 21z"/></svg></button>
  </div>
  <div class="product-info"><p class="product-name">${p.name}</p><div class="rating-row"><span class="rating-pill">${p.rating} ★</span><span class="review-count">${p.reviews.toLocaleString("en-IN")}</span></div>
   <div class="price-row"><span class="price">₹${p.price}</span><span class="mrp">₹${p.mrp}</span><span class="discount">${p.discountPct}% off</span></div>
   ${qty?`<div class="qty-stepper"><button data-dec="${p.id}">−</button><span>${qty}</span><button data-inc="${p.id}">+</button></div>`:`<button class="add-btn" data-add="${p.id}">Add to cart</button>`}
  </div>
 </article>`;
}
function renderProducts(){
 const grid=document.getElementById("productGrid"),list=getFilteredProducts().slice(0,100);
 grid.innerHTML=list.length?list.map(productCardHTML).join(""):`<div class="empty-state">No products found. Try another search or category.</div>`;
 grid.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>{addToCart(b.dataset.add);renderProducts()});
 grid.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>{addToCart(b.dataset.inc);renderProducts()});
 grid.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>{removeFromCart(b.dataset.dec);renderProducts()});
 grid.querySelectorAll("[data-wish]").forEach(b=>b.onclick=()=>{toggleWishlist(b.dataset.wish);renderProducts()});
 updateCartBadge();
}
function addToCart(id){id=String(id);state.cart[id]=(state.cart[id]||0)+1;saveState();toast("Added to cart")}
function removeFromCart(id){id=String(id);if(!state.cart[id])return;state.cart[id]--;if(state.cart[id]<=0)delete state.cart[id];saveState()}
function removeItem(id){delete state.cart[String(id)];saveState();renderCartPage();renderProducts();updateCartBadge();toast("Item removed")}
function toggleWishlist(id){id=Number(id);const i=state.wishlist.indexOf(id);if(i<0){state.wishlist.push(id);toast("Added to wishlist")}else{state.wishlist.splice(i,1);toast("Removed from wishlist")}saveState()}
function cartItemCount(){return Object.values(state.cart).reduce((a,b)=>a+Number(b),0)}
function cartSubtotal(){return Object.entries(state.cart).reduce((s,[id,q])=>{const p=ALL_PRODUCTS.find(x=>x.id===Number(id));return s+(p?p.price*q:0)},0)}
function updateCartBadge(){document.getElementById("cartCount").textContent=cartItemCount()}
function cartDelivery(){const sub=cartSubtotal();return !sub?0:sub>=999?0:79}
function renderCartPage(){
 const body=document.getElementById("fullCartBody"),entries=Object.entries(state.cart).filter(([id])=>ALL_PRODUCTS.some(p=>p.id===Number(id)));
 if(!entries.length){body.innerHTML=`<div class="empty-state"><div style="font-size:42px;margin-bottom:8px">🛒</div>Your cart is empty.<br><button class="hero-btn" id="emptyShopBtn">Start shopping</button></div>`;document.getElementById("cartSummary").hidden=true;document.getElementById("emptyShopBtn").onclick=()=>{closePage("cartPage");document.getElementById("shopPlantsBtn").click()};return}
 document.getElementById("cartSummary").hidden=false;
 body.innerHTML=entries.map(([id,q])=>{const p=ALL_PRODUCTS.find(x=>x.id===Number(id));return `<div class="cart-row"><img class="cart-row-img" src="${p.image}" alt="${p.name}"><div class="cart-row-info"><p class="cart-row-name">${p.name}</p><p class="cart-row-price">₹${p.price} each · ₹${p.price*q}</p><div class="qty-stepper" style="max-width:135px"><button data-cdec="${p.id}">−</button><span>${q}</span><button data-cinc="${p.id}">+</button></div><button class="cart-remove" data-remove="${p.id}">Remove</button></div></div>`}).join("");
 body.querySelectorAll("[data-cinc]").forEach(b=>b.onclick=()=>{addToCart(b.dataset.cinc);renderCartPage()});
 body.querySelectorAll("[data-cdec]").forEach(b=>b.onclick=()=>{removeFromCart(b.dataset.cdec);renderCartPage();renderProducts();updateCartBadge()});
 body.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>removeItem(b.dataset.remove));
 const sub=cartSubtotal(),del=cartDelivery();document.getElementById("cartSubtotal").textContent=`₹${sub}`;document.getElementById("cartDelivery").textContent=del?"₹"+del:"FREE";document.getElementById("cartGrandTotal").textContent=`₹${sub+del}`;
}

function openPage(id){document.querySelectorAll(".full-page").forEach(p=>p.hidden=true);document.getElementById("homePage").hidden=true;document.getElementById("categoryChips").style.display="none";document.getElementById(id).hidden=false;document.body.scrollTop=0;window.scrollTo(0,0);if(id==="cartPage")renderCartPage();if(id==="profilePage")renderProfile();hideOverlay()}
function closePage(id){document.getElementById(id).hidden=true;document.getElementById("homePage").hidden=false;document.getElementById("categoryChips").style.display="flex";window.scrollTo(0,0)}
function goHome(){document.querySelectorAll(".full-page").forEach(p=>p.hidden=true);document.getElementById("homePage").hidden=false;document.getElementById("categoryChips").style.display="flex";window.scrollTo({top:0,behavior:"smooth"})}

/* PROFILE */
function renderProfile(){
 const el=document.getElementById("profileContent");
 if(!state.user){el.innerHTML=`<div class="profile-shell"><div class="profile-card"><div class="avatar">M</div><div><h2>Welcome to Mitti Manor</h2><p>Log in to access your profile and orders.</p></div></div><div class="profile-actions"><button class="profile-action" id="profileLogin"><strong>Login</strong><span>Google or mobile number</span></button><button class="profile-action" id="profileWishlist"><strong>Wishlist</strong><span>${state.wishlist.length} saved items</span></button></div></div>`;document.getElementById("profileLogin").onclick=openLoginModal;return}
 const name=state.user.name||"Mitti Manor customer",email=state.user.email||state.user.phone||"Account verified";
 el.innerHTML=`<div class="profile-shell"><div class="profile-card"><div class="avatar">${name.charAt(0).toUpperCase()}</div><div><h2>${name}</h2><p>${email}</p></div></div><div class="profile-actions"><button class="profile-action" id="ordersAction"><strong>My orders</strong><span>${state.currentOrders.length} order${state.currentOrders.length===1?"":"s"}</span></button><button class="profile-action" id="wishlistAction"><strong>Wishlist</strong><span>${state.wishlist.length} saved items</span></button><button class="profile-action" id="pinAction"><strong>Delivery PIN</strong><span>${state.pin||"Not set"}</span></button><button class="profile-action" id="changeLoginAction"><strong>Login method</strong><span>${state.user.method==="google"?"Google":"Mobile number"}</span></button></div><button class="logout-btn" id="logoutBtn">Log out</button></div>`;
 document.getElementById("logoutBtn").onclick=logout;
 document.getElementById("pinAction").onclick=()=>{closePage("profilePage");openPinOverlay(true)};
 document.getElementById("ordersAction").onclick=()=>toast(state.currentOrders.length?`You have ${state.currentOrders.length} order(s).`:"No orders yet.");
 document.getElementById("wishlistAction").onclick=()=>toast(`${state.wishlist.length} item(s) saved.`);
}
function logout(){state.user=null;saveState();if(auth)auth.signOut().catch(()=>{});renderProfile();renderAccountArea();toast("You have been logged out")}
function renderAccountArea(){document.getElementById("accountLabel").textContent=state.user?(state.user.name||"Account"):"Login"}

/* AUTH */
let firebaseApp=null,auth=null,confirmationResult=null,recaptchaVerifier=null;
function initFirebase(){
 try{
  if(!window.firebase||!window.CONFIG||!CONFIG.firebase||CONFIG.firebase.apiKey==="PASTE_YOUR_FIREBASE_API_KEY_HERE")return;
  firebaseApp=firebase.initializeApp(CONFIG.firebase);auth=firebase.auth();
  auth.onAuthStateChanged(u=>{if(u&&!state.user){loginSuccess({name:u.displayName||"User",email:u.email||"",phone:u.phoneNumber||"",method:u.providerData?.[0]?.providerId==="google.com"?"google":"phone"})}});
 }catch(e){console.error("Firebase initialization error",e)}
}
function setLoginError(msg){document.getElementById("loginError").textContent=msg||""}
function resetRecaptcha(){
 if(recaptchaVerifier){try{recaptchaVerifier.clear()}catch(e){}recaptchaVerifier=null}
 const c=document.getElementById("recaptchaContainer");if(c)c.innerHTML="";
}
function setupRecaptcha(){
 if(!auth)throw new Error("Firebase Phone Authentication is not configured.");
 resetRecaptcha();
 recaptchaVerifier=new firebase.auth.RecaptchaVerifier("recaptchaContainer",{size:"normal",callback:()=>setLoginError("")},auth);
 return recaptchaVerifier.render();
}
async function sendOtp(){
 setLoginError("");
 if(!auth){setLoginError("Mobile login is not configured. Add your Firebase configuration and enable Phone Authentication.");return}
 const phone=document.getElementById("phoneInput").value.replace(/\D/g,"");
 if(phone.length!==10){setLoginError("Enter a valid 10-digit mobile number.");return}
 const btn=document.getElementById("sendOtpBtn");btn.disabled=true;btn.textContent="Sending...";
 try{
  await setupRecaptcha();
  confirmationResult=await auth.signInWithPhoneNumber("+91"+phone,recaptchaVerifier);
  document.getElementById("otpSection").hidden=false;btn.textContent="Code sent";toast("Verification code sent");
  document.getElementById("otpInput").focus();
 }catch(e){
  console.error(e);btn.disabled=false;btn.textContent="Send verification code";
  if(recaptchaVerifier){try{recaptchaVerifier.clear()}catch(err){}}recaptchaVerifier=null;
  const code=e&&e.code?e.code:"";
  const messages={
   "auth/invalid-phone-number":"The mobile number is invalid.",
   "auth/too-many-requests":"Too many attempts. Please try again later.",
   "auth/quota-exceeded":"SMS quota has been exceeded. Try again later.",
   "auth/operation-not-allowed":"Phone Authentication is not enabled in Firebase.",
   "auth/captcha-check-failed":"The reCAPTCHA check failed. Please try again."
  };
  setLoginError(messages[code]||"Unable to send the verification code. Check Firebase Phone Authentication and your authorized domain.");
 }
}
async function verifyOtp(){
 setLoginError("");
 if(!confirmationResult){setLoginError("Please request a verification code first.");return}
 const otp=document.getElementById("otpInput").value.trim();
 if(!/^\d{6}$/.test(otp)){setLoginError("Enter the 6-digit verification code.");return}
 const btn=document.getElementById("verifyOtpBtn");btn.disabled=true;btn.textContent="Verifying...";
 try{
  const result=await confirmationResult.confirm(otp),u=result.user;
  loginSuccess({name:u.displayName||"User",email:u.email||"",phone:u.phoneNumber||("+91"+document.getElementById("phoneInput").value),method:"phone"});
  btn.textContent="Verified";
 }catch(e){
  console.error(e);btn.disabled=false;btn.textContent="Verify and log in";
  setLoginError(e.code==="auth/invalid-verification-code"?"The verification code is incorrect.":e.code==="auth/code-expired"?"The verification code has expired. Request a new code.":"Verification failed. Please try again.");
 }
}
async function resendOtp(){document.getElementById("otpSection").hidden=true;document.getElementById("sendOtpBtn").disabled=false;document.getElementById("sendOtpBtn").textContent="Send verification code";await sendOtp()}
function googleSignIn(){
 if(!auth){setLoginError("Google login is not configured. Check config.js.");return}
 const provider=new firebase.auth.GoogleAuthProvider();
 auth.signInWithPopup(provider).then(r=>{const u=r.user;loginSuccess({name:u.displayName||"User",email:u.email||"",phone:u.phoneNumber||"",method:"google"})}).catch(e=>{console.error(e);setLoginError("Google sign-in failed. Check your Firebase authorized domains.")});
}
function loginSuccess(userObj){state.user=userObj;saveState();renderAccountArea();closeLoginModal();renderProfile();toast("Login successful")}

function openLoginModal(){
 document.getElementById("loginModal").classList.add("open");showOverlay();
 document.getElementById("loginChoice").hidden=false;document.getElementById("phoneLoginForm").hidden=true;setLoginError("");
}
function closeLoginModal(){document.getElementById("loginModal").classList.remove("open");hideOverlay();resetRecaptcha()}
function openPinOverlay(force=false){
 const o=document.getElementById("pinOverlay");o.classList.add("show");o.setAttribute("aria-hidden","false");document.body.classList.add("no-scroll");document.getElementById("pinInput").value=state.pin||"";document.getElementById("pinMessage").textContent="";document.getElementById("pinMessage").className="pin-message";if(force)document.getElementById("pinChangeBtn").style.display="none";setTimeout(()=>document.getElementById("pinInput").focus(),100)
}
function closePinOverlay(){document.getElementById("pinOverlay").classList.remove("show");document.getElementById("pinOverlay").setAttribute("aria-hidden","true");document.body.classList.remove("no-scroll")}
function validatePin(){
 const pin=document.getElementById("pinInput").value.replace(/\D/g,"").slice(0,6);document.getElementById("pinInput").value=pin;
 const msg=document.getElementById("pinMessage");
 if(!/^\d{6}$/.test(pin)){msg.className="pin-message error";msg.textContent="Please enter a valid 6-digit PIN code.";return}
 // Delhi postal coverage: 110001–110099. The current Delhi PIN directories include the full 1100xx range, including newer 110097–110099 entries.
 const ok=/^1100(0[1-9]|[1-9]\d)$/.test(pin);
 if(ok){
  state.pin=pin;saveState();msg.className="pin-message ok";msg.textContent="Great — Mitti Manor delivers to this PIN code.";
  document.getElementById("pinChangeBtn").style.display="none";setTimeout(closePinOverlay,650);
 }else{
  msg.className="pin-message error";msg.textContent="Sorry, we do not currently provide service in this area.";
  document.getElementById("pinChangeBtn").style.display="block";
 }
}

/* LANDSCAPING */
function renderLandscapeServices(){
 document.getElementById("landscapeServices").innerHTML=LANDSCAPING_SERVICES.map((s,i)=>`<article class="land-service"><div class="service-big">${s[2]}</div><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join("");
 const select=document.getElementById("landscapeService");select.innerHTML=LANDSCAPING_SERVICES.map(s=>`<option value="${s[0]}">${s[0]}</option>`).join("");
}
function openLandscapingPage(){openPage("landscapePage")}
function openLandscapingModal(){document.getElementById("landscapeModal").classList.add("open");showOverlay()}
function submitLandscapeQuote(e){
 e.preventDefault();const name=document.getElementById("landscapeName").value.trim(),phone=document.getElementById("landscapePhone").value.replace(/\D/g,"");
 if(!name||phone.length!==10){toast("Enter your name and a valid 10-digit phone number.");return}
 const service=document.getElementById("landscapeService").value,area=document.getElementById("landscapeArea").value.trim(),notes=document.getElementById("landscapeNotes").value.trim();
 const text=`Landscaping Quote Request\n\nService: ${service}\nName: ${name}\nPhone: +91 ${phone}\nArea/Size: ${area||"Not specified"}\nNotes: ${notes||"None"}`;
 const encoded=encodeURIComponent(text);
 if(window.CONFIG&&CONFIG.business){
  window.open(`https://wa.me/${CONFIG.business.whatsapp}?text=${encoded}`,"_blank");
  setTimeout(()=>{window.location.href=`mailto:${CONFIG.business.email}?subject=Landscaping Quote Request&body=${encoded}`},250);
 }
 document.getElementById("landscapeForm").reset();document.getElementById("landscapeModal").classList.remove("open");hideOverlay();toast("Your quote request is ready to send.");
}

/* CHECKOUT */
function openCheckout(){
 if(!cartItemCount()){toast("Your cart is empty.");return}
 if(!state.user){closePage("cartPage");openLoginModal();toast("Please log in before checkout.");return}
 if(!window.Razorpay||!CONFIG||!CONFIG.razorpayKeyId){toast("Razorpay is not configured yet.");return}
 const amount=cartSubtotal()+cartDelivery();
 const options={key:CONFIG.razorpayKeyId,amount:amount*100,currency:"INR",name:CONFIG.business.name,description:"Mitti Manor Order",handler:response=>{
  const order={id:"MM"+Date.now(),items:{...state.cart},total:amount,paymentId:response.razorpay_payment_id,date:new Date().toISOString()};
  state.currentOrders.push(order);state.cart={};saveState();updateCartBadge();renderCartPage();renderProducts();toast("Order placed successfully.");
 },prefill:{name:state.user.name||"",contact:(state.user.phone||"").replace("+91",""),email:state.user.email||""},theme:{color:"#1F3D2B"}};
 try{new Razorpay(options).open()}catch(e){console.error(e);toast("Unable to open checkout. Check Razorpay configuration.")}
}

/* SEARCH/BANNER */
function setupSearch(){document.getElementById("searchInput").addEventListener("input",e=>{state.searchQuery=e.target.value;if(state.searchQuery)state.activeCategory="all";renderCategories();renderProducts()})}
const BANNERS=[
 {text:"Fresh indoor plants — up to 60% off",color:"#1F3D2B"},
 {text:"Landscaping services — request a free quote",color:"#C4622D"},
 {text:"Terracotta planters — made for green spaces",color:"#B8935A"},
 {text:"Organic garden essentials from ₹99",color:"#3D5A3D"}
];let bannerIdx=0;
function renderBanner(){document.getElementById("bannerTrack").innerHTML=BANNERS.map(b=>`<div class="banner-slide" style="background:${b.color}"><p>${b.text}</p></div>`).join("");document.getElementById("bannerDots").innerHTML=BANNERS.map((_,i)=>`<span class="dot ${i===0?"dot-active":""}"></span>`).join("")}
function nextBanner(){bannerIdx=(bannerIdx+1)%BANNERS.length;document.getElementById("bannerTrack").style.transform=`translateX(-${bannerIdx*100}%)`;document.querySelectorAll("#bannerDots .dot").forEach((d,i)=>d.classList.toggle("dot-active",i===bannerIdx))}

/* EVENTS */
document.addEventListener("DOMContentLoaded",()=>{
 initFirebase();renderCategories();renderBanner();renderProducts();renderAccountArea();renderLandscapeServices();setupSearch();
 setInterval(nextBanner,3800);
 document.getElementById("brandHomeBtn").onclick=goHome;
 document.getElementById("shopPlantsBtn").onclick=()=>{state.activeCategory="plants";renderCategories();renderProducts();document.getElementById("productGrid").scrollIntoView({behavior:"smooth"})};
 document.getElementById("viewAllBtn").onclick=()=>{state.activeCategory="all";state.searchQuery="";document.getElementById("searchInput").value="";renderCategories();renderProducts()};
 document.querySelectorAll("[data-service]").forEach(b=>b.onclick=()=>{state.activeCategory=b.dataset.service;renderCategories();renderProducts();goHome();document.getElementById("productGrid").scrollIntoView({behavior:"smooth"})});
 document.getElementById("landscapeServiceCard").onclick=openLandscapingPage;document.getElementById("landscapeNavBtn").onclick=openLandscapingPage;document.getElementById("bottomLandscapeBtn").onclick=openLandscapingPage;document.getElementById("landscapeQuoteTop").onclick=openLandscapingModal;document.getElementById("landscapeQuoteBottom").onclick=openLandscapingModal;
 document.getElementById("cartBtn").onclick=()=>openPage("cartPage");document.getElementById("bottomCartBtn").onclick=()=>openPage("cartPage");
 document.getElementById("accountBtn").onclick=()=>openPage("profilePage");document.getElementById("bottomAccountBtn").onclick=()=>openPage("profilePage");document.getElementById("bottomHomeBtn").onclick=goHome;
 document.querySelectorAll("[data-close-page]").forEach(b=>b.onclick=()=>closePage(b.dataset.closePage));
 document.getElementById("closeLogin").onclick=closeLoginModal;document.getElementById("overlay").onclick=()=>{document.getElementById("landscapeModal").classList.remove("open");closeLoginModal();hideOverlay()};
 document.getElementById("phoneLoginBtn").onclick=()=>{document.getElementById("loginChoice").hidden=true;document.getElementById("phoneLoginForm").hidden=false;setLoginError("")};
 document.getElementById("backToLoginChoice").onclick=()=>{document.getElementById("loginChoice").hidden=false;document.getElementById("phoneLoginForm").hidden=true;resetRecaptcha()};
 document.getElementById("googleSignInBtn").onclick=googleSignIn;document.getElementById("sendOtpBtn").onclick=sendOtp;document.getElementById("verifyOtpBtn").onclick=verifyOtp;document.getElementById("resendOtpBtn").onclick=resendOtp;
 document.getElementById("closeLandscape").onclick=()=>{document.getElementById("landscapeModal").classList.remove("open");hideOverlay()};document.getElementById("landscapeForm").onsubmit=submitLandscapeQuote;
 document.getElementById("checkoutBtn").onclick=openCheckout;
 document.getElementById("pinGoBtn").onclick=validatePin;document.getElementById("pinInput").addEventListener("input",e=>e.target.value=e.target.value.replace(/\D/g,"").slice(0,6));document.getElementById("pinInput").addEventListener("keydown",e=>{if(e.key==="Enter")validatePin()});document.getElementById("pinChangeBtn").onclick=()=>{document.getElementById("pinInput").value="";document.getElementById("pinMessage").textContent=""};
 // loader stays visible for exactly 3 seconds, then the PIN gate opens on first visit.
 setTimeout(()=>{document.getElementById("loadingScreen").classList.add("hide");if(!state.pin)setTimeout(()=>openPinOverlay(),180)},3000);
});
