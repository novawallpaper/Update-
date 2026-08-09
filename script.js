/* =========================================================
   MITTI MANOR
   FULL UPDATED SCRIPT
   Firebase + Cart + Wishlist + Search + Login
========================================================= */

import {
    auth,
    loginWithGoogle,
    logoutUser,
    watchAuthState,
    saveUserProfile,
    saveUserCart,
    getUserCart
} from "./config.js";


/* =========================================================
   1. PRODUCT DATA
========================================================= */

const products = [
    {
        id: 1,
        name: "Fiddle Leaf Fig",
        category: "Indoor Plant",
        description: "Elegant • Medium",
        price: 899,
        image:
            "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 2,
        name: "Snake Plant",
        category: "Indoor Plant",
        description: "Easy Care • Medium",
        price: 699,
        image:
            "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 3,
        name: "Monstera Deliciosa",
        category: "Premium Plant",
        description: "Statement • Large",
        price: 1299,
        image:
            "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 4,
        name: "Areca Palm",
        category: "Outdoor / Indoor",
        description: "Air Purifying • Large",
        price: 1499,
        image:
            "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=700&q=85"
    }
];


/* =========================================================
   2. LOCAL STATE
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("mittiManorCart")
    ) || [];


let wishlist =
    JSON.parse(
        localStorage.getItem("mittiManorWishlist")
    ) || [];


let currentUser = null;


/* =========================================================
   3. DOM ELEMENTS
========================================================= */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mainNav =
    document.getElementById("mainNav");

const searchBtn =
    document.getElementById("searchBtn");

const searchOverlay =
    document.getElementById("searchOverlay");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");

const performSearch =
    document.getElementById("performSearch");

const cartBtn =
    document.getElementById("cartBtn");

const cartDrawer =
    document.getElementById("cartDrawer");

const closeCart =
    document.getElementById("closeCart");

const drawerBackdrop =
    document.getElementById("drawerBackdrop");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const loginBtn =
    document.getElementById("loginBtn");

const loginModal =
    document.getElementById("loginModal");

const closeLogin =
    document.getElementById("closeLogin");

const googleLoginBtn =
    document.getElementById("googleLoginBtn");

const loginForm =
    document.getElementById("loginForm");

const signupBtn =
    document.getElementById("signupBtn");

const wishlistBtn =
    document.getElementById("wishlistBtn");

const newsletterForm =
    document.getElementById("newsletterForm");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* =========================================================
   4. HELPERS
========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(price);
}


function showToast(message) {

    if (!toast || !toastMessage) {
        console.log(message);
        return;
    }

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(
        window.mittiToastTimer
    );

    window.mittiToastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2800);
}


/* =========================================================
   5. MOBILE MENU
========================================================= */

if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener(
        "click",
        () => {

            mainNav.classList.toggle(
                "active"
            );

            mobileMenuBtn.textContent =
                mainNav.classList.contains("active")
                    ? "×"
                    : "☰";
        }
    );
}


document
    .querySelectorAll(".main-nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "active"
                );

                if (mobileMenuBtn) {
                    mobileMenuBtn.textContent =
                        "☰";
                }
            }
        );
    });


/* =========================================================
   6. SEARCH
========================================================= */

function openSearch() {

    if (!searchOverlay) return;

    searchOverlay.classList.add(
        "active"
    );

    document.body.classList.add(
        "no-scroll"
    );

    setTimeout(() => {

        searchInput?.focus();

    }, 100);
}


function closeSearchOverlay() {

    if (!searchOverlay) return;

    searchOverlay.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );
}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        openSearch
    );
}


if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        closeSearchOverlay
    );
}


if (searchOverlay) {

    searchOverlay.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                searchOverlay
            ) {

                closeSearchOverlay();
            }
        }
    );
}


function performProductSearch() {

    const query =
        searchInput?.value
            ?.trim()
            .toLowerCase();


    if (!query) {

        showToast(
            "Please enter a search term."
        );

        return;
    }


    const results =
        products.filter(product => {

            return (

                product.name
                    .toLowerCase()
                    .includes(query)

                ||

                product.category
                    .toLowerCase()
                    .includes(query)

                ||

                product.description
                    .toLowerCase()
                    .includes(query)
            );
        });


    closeSearchOverlay();


    if (!results.length) {

        showToast(
            `No products found for "${query}".`
        );

        return;
    }


    const firstResult =
        document.querySelector(
            `[data-product-id="${results[0].id}"]`
        );


    if (firstResult) {

        firstResult.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        firstResult.style.outline =
            "2px solid #557b5b";

        firstResult.style.outlineOffset =
            "5px";


        setTimeout(() => {

            firstResult.style.outline = "";
            firstResult.style.outlineOffset = "";

        }, 2000);
    }


    showToast(
        `${results.length} product${
            results.length > 1
                ? "s"
                : ""
        } found.`
    );
}


if (performSearch) {

    performSearch.addEventListener(
        "click",
        performProductSearch
    );
}


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                performProductSearch();
            }

            if (event.key === "Escape") {
                closeSearchOverlay();
            }
        }
    );
}


/* =========================================================
   7. CART STORAGE
========================================================= */

function saveLocalCart() {

    localStorage.setItem(
        "mittiManorCart",
        JSON.stringify(cart)
    );
}


/* =========================================================
   8. FIREBASE CART SYNC
========================================================= */

async function syncCartToFirebase() {

    if (!currentUser) {
        return;
    }


    try {

        await saveUserCart(
            currentUser.uid,
            cart
        );

    } catch (error) {

        console.error(
            "Cart sync failed:",
            error
        );
    }
}


async function loadFirebaseCart() {

    if (!currentUser) {
        return;
    }


    try {

        const firebaseCart =
            await getUserCart(
                currentUser.uid
            );


        if (
            Array.isArray(firebaseCart) &&
            firebaseCart.length > 0
        ) {

            cart = firebaseCart;

            saveLocalCart();

            updateCartUI();

            return;
        }


        await syncCartToFirebase();

    } catch (error) {

        console.error(
            "Firebase cart loading failed:",
            error
        );
    }
}


/* =========================================================
   9. CART FUNCTIONS
========================================================= */

function getCartCount() {

    return cart.reduce(
        (total, item) =>
            total + Number(item.quantity || 0),
        0
    );
}


function getCartTotal() {

    return cart.reduce(
        (total, item) =>
            total +
            Number(item.price || 0) *
            Number(item.quantity || 0),
        0
    );
}


async function addToCart(productId) {

    const product =
        products.find(
            item =>
                item.id === Number(productId)
        );


    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existing) {

        existing.quantity =
            Number(existing.quantity) + 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });
    }


    saveLocalCart();

    updateCartUI();

    await syncCartToFirebase();


    showToast(
        `${product.name} added to cart.`
    );
}


async function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== Number(productId)
        );


    saveLocalCart();

    updateCartUI();

    await syncCartToFirebase();


    showToast(
        "Product removed from cart."
    );
}


async function changeQuantity(
    productId,
    amount
) {

    const item =
        cart.find(
            product =>
                product.id === Number(productId)
        );


    if (!item) return;


    item.quantity =
        Number(item.quantity) + amount;


    if (item.quantity <= 0) {

        await removeFromCart(
            productId
        );

        return;
    }


    saveLocalCart();

    updateCartUI();

    await syncCartToFirebase();
}


/* =========================================================
   10. CART UI
========================================================= */

function updateCartUI() {

    if (cartCount) {

        cartCount.textContent =
            getCartCount();
    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(
                getCartTotal()
            );
    }


    if (!cartItems) {
        return;
    }


    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <span>🪴</span>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add something green
                    to your space.
                </p>

            </div>

        `;

        return;
    }


    cartItems.innerHTML =
        cart.map(item => `

            <div
                class="cart-item"
                data-cart-id="${item.id}"
            >

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div>

                    <h4>
                        ${item.name}
                    </h4>

                    <div class="cart-item-price">

                        ${formatPrice(item.price)}

                    </div>


                    <div
                        style="
                            display:flex;
                            align-items:center;
                            gap:8px;
                            margin-top:8px;
                        "
                    >

                        <button
                            class="quantity-btn"
                            data-action="decrease"
                            data-id="${item.id}"
                            aria-label="Decrease quantity"
                            style="
                                width:26px;
                                height:26px;
                                border:1px solid #ddd;
                                border-radius:50%;
                                background:white;
                            "
                        >
                            −
                        </button>


                        <span
                            style="
                                font-size:12px;
                                min-width:15px;
                                text-align:center;
                            "
                        >
                            ${item.quantity}
                        </span>


                        <button
                            class="quantity-btn"
                            data-action="increase"
                            data-id="${item.id}"
                            aria-label="Increase quantity"
                            style="
                                width:26px;
                                height:26px;
                                border:1px solid #ddd;
                                border-radius:50%;
                                background:white;
                            "
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="remove-item"
                    data-id="${item.id}"
                    aria-label="Remove item"
                >
                    ×
                </button>

            </div>

        `).join("");
}


/* =========================================================
   11. CART BUTTON EVENTS
========================================================= */

document
    .querySelectorAll(".add-cart")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                addToCart(
                    button.dataset.id
                );
            }
        );
    });


if (cartItems) {

    cartItems.addEventListener(
        "click",
        event => {

            const removeButton =
                event.target.closest(
                    ".remove-item"
                );


            if (removeButton) {

                removeFromCart(
                    removeButton.dataset.id
                );

                return;
            }


            const quantityButton =
                event.target.closest(
                    ".quantity-btn"
                );


            if (quantityButton) {

                const id =
                    Number(
                        quantityButton.dataset.id
                    );


                const amount =
                    quantityButton.dataset.action ===
                    "increase"
                        ? 1
                        : -1;


                changeQuantity(
                    id,
                    amount
                );
            }
        }
    );
}


/* =========================================================
   12. CART DRAWER
========================================================= */

function openCart() {

    if (!cartDrawer) return;

    updateCartUI();

    cartDrawer.classList.add(
        "active"
    );

    drawerBackdrop?.classList.add(
        "active"
    );

    document.body.classList.add(
        "no-scroll"
    );
}


function closeCartDrawer() {

    if (!cartDrawer) return;

    cartDrawer.classList.remove(
        "active"
    );

    drawerBackdrop?.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );
}


if (cartBtn) {

    cartBtn.addEventListener(
        "click",
        openCart
    );
}


if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartDrawer
    );
}


if (drawerBackdrop) {

    drawerBackdrop.addEventListener(
        "click",
        closeCartDrawer
    );
}


/* =========================================================
   13. WISHLIST
========================================================= */

function saveWishlist() {

    localStorage.setItem(
        "mittiManorWishlist",
        JSON.stringify(wishlist)
    );
}


function updateWishlistUI() {

    document
        .querySelectorAll(
            ".wishlist-product"
        )
        .forEach(button => {

            const id =
                Number(
                    button.dataset.id
                );


            if (
                wishlist.includes(id)
            ) {

                button.classList.add(
                    "active"
                );

                button.textContent =
                    "♥";

            } else {

                button.classList.remove(
                    "active"
                );

                button.textContent =
                    "♡";
            }
        });
}


function toggleWishlist(productId) {

    const id =
        Number(productId);


    const index =
        wishlist.indexOf(id);


    if (index === -1) {

        wishlist.push(id);

        showToast(
            "Added to wishlist."
        );

    } else {

        wishlist.splice(
            index,
            1
        );

        showToast(
            "Removed from wishlist."
        );
    }


    saveWishlist();

    updateWishlistUI();
}


document
    .querySelectorAll(
        ".wishlist-product"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();

                toggleWishlist(
                    button.dataset.id
                );
            }
        );
    });


if (wishlistBtn) {

    wishlistBtn.addEventListener(
        "click",
        () => {

            if (!wishlist.length) {

                showToast(
                    "Your wishlist is empty."
                );

                return;
            }


            showToast(
                `${wishlist.length} item${
                    wishlist.length > 1
                        ? "s"
                        : ""
                } in your wishlist.`
            );
        }
    );
}


/* =========================================================
   14. FIREBASE AUTH UI
========================================================= */

function updateLoggedInUI(user) {

    if (!loginBtn) {
        return;
    }


    if (!user) {

        loginBtn.textContent =
            "Login";

        loginBtn.dataset.loggedIn =
            "false";

        return;
    }


    const firstName =
        user.displayName
            ?.split(" ")[0];


    loginBtn.textContent =
        firstName
            ? firstName
            : "Account";

    loginBtn.dataset.loggedIn =
        "true";
}


/* =========================================================
   15. LOGIN MODAL
========================================================= */

function openLoginModal() {

    if (!loginModal) return;

    loginModal.classList.add(
        "active"
    );

    document.body.classList.add(
        "no-scroll"
    );
}


function closeLoginModal() {

    if (!loginModal) return;

    loginModal.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );
}


if (closeLogin) {

    closeLogin.addEventListener(
        "click",
        closeLoginModal
    );
}


if (loginModal) {

    loginModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                loginModal
            ) {

                closeLoginModal();
            }
        }
    );
}


/* =========================================================
   16. GOOGLE LOGIN
========================================================= */

async function handleGoogleLogin() {

    if (!googleLoginBtn) {
        return;
    }


    const originalText =
        googleLoginBtn.innerHTML;


    try {

        googleLoginBtn.disabled =
            true;

        googleLoginBtn.innerHTML =
            "Signing in...";


        const user =
            await loginWithGoogle();


        if (user) {

            await saveUserProfile(
                user
            );

            currentUser =
                user;

            updateLoggedInUI(
                user
            );

            await loadFirebaseCart();

            closeLoginModal();

            showToast(
                `Welcome, ${
                    user.displayName ||
                    "to Mitti Manor"
                }!`
            );
        }

    } catch (error) {

        console.error(
            "Google login failed:",
            error
        );


        let message =
            "Google login failed.";


        if (
            error?.code ===
            "auth/popup-closed-by-user"
        ) {

            message =
                "Login window was closed.";

        } else if (
            error?.code ===
            "auth/popup-blocked"
        ) {

            message =
                "Please allow popups for this website.";

        } else if (
            error?.code ===
            "auth/unauthorized-domain"
        ) {

            message =
                "This domain is not authorized in Firebase.";

        }


        showToast(message);

    } finally {

        googleLoginBtn.disabled =
            false;

        googleLoginBtn.innerHTML =
            originalText;
    }
}


if (googleLoginBtn) {

    googleLoginBtn.addEventListener(
        "click",
        handleGoogleLogin
    );
}


/* =========================================================
   17. LOGIN BUTTON
========================================================= */

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        async () => {

            if (!currentUser) {

                openLoginModal();

                return;
            }


            const shouldLogout =
                confirm(
                    `Logged in as ${
                        currentUser.email ||
                        currentUser.displayName ||
                        "User"
                    }.\n\nLogout?`
                );


            if (!shouldLogout) {
                return;
            }


            try {

                await logoutUser();

                currentUser =
                    null;

                updateLoggedInUI(
                    null
                );

                showToast(
                    "You have been logged out."
                );

            } catch (error) {

                console.error(
                    "Logout failed:",
                    error
                );

                showToast(
                    "Logout failed."
                );
            }
        }
    );
}


/* =========================================================
   18. EMAIL LOGIN
========================================================= */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                )?.value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                )?.value;


            if (!email) {

                showToast(
                    "Please enter your email."
                );

                return;
            }


            if (!password) {

                showToast(
                    "Please enter your password."
                );

                return;
            }


            showToast(
                "Email authentication will be enabled in the next Firebase auth update."
            );
        }
    );
}


/* =========================================================
   19. SIGN UP
========================================================= */

if (signupBtn) {

    signupBtn.addEventListener(
        "click",
        () => {

            showToast(
                "Account creation will be enabled with Firebase."
            );
        }
    );
}


/* =========================================================
   20. NEWSLETTER
========================================================= */

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                document.getElementById(
                    "newsletterEmail"
                )?.value.trim();


            if (!email) {

                showToast(
                    "Please enter your email."
                );

                return;
            }


            showToast(
                "Thank you for subscribing!"
            );


            newsletterForm.reset();
        }
    );
}


/* =========================================================
   21. CHECKOUT
========================================================= */

if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        () => {

            if (!cart.length) {

                showToast(
                    "Your cart is empty."
                );

                return;
            }


            if (!currentUser) {

                closeCartDrawer();

                openLoginModal();

                showToast(
                    "Please login before checkout."
                );

                return;
            }


            showToast(
                "Checkout is ready for Razorpay integration."
            );
        }
    );
}


/* =========================================================
   22. AUTH STATE LISTENER
========================================================= */

watchAuthState(
    async user => {

        currentUser =
            user || null;


        updateLoggedInUI(
            currentUser
        );


        if (currentUser) {

            console.log(
                "Logged in:",
                currentUser.email
            );


            try {

                await saveUserProfile(
                    currentUser
                );

                await loadFirebaseCart();

            } catch (error) {

                console.error(
                    "User sync error:",
                    error
                );
            }

        } else {

            console.log(
                "No user logged in."
            );
        }
    }
);


/* =========================================================
   23. NAV ACTIVE SECTION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".main-nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection =
            "";


        sections.forEach(
            section => {

                const top =
                    section.offsetTop - 160;


                const bottom =
                    top +
                    section.offsetHeight;


                if (
                    window.scrollY >= top &&
                    window.scrollY < bottom
                ) {

                    currentSection =
                        section.id;
                }
            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );
                }
            }
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   24. ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        closeSearchOverlay();

        closeCartDrawer();

        closeLoginModal();
    }
);


/* =========================================================
   25. INITIAL UI
========================================================= */

function initializeMittiManor() {

    updateCartUI();

    updateWishlistUI();

    updateLoggedInUI(
        currentUser
    );

    console.log(
        "🌿 Mitti Manor initialized."
    );
}


initializeMittiManor();


/* =========================================================
   END
========================================================= */
