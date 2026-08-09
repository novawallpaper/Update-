/* =========================================================
   MITTI MANOR
   Main JavaScript
========================================================= */


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
   2. GLOBAL STATE
========================================================= */

let cart = JSON.parse(
    localStorage.getItem("mittiManorCart")
) || [];

let wishlist = JSON.parse(
    localStorage.getItem("mittiManorWishlist")
) || [];


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
   4. MOBILE MENU
========================================================= */

if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener(
        "click",
        () => {

            mainNav.classList.toggle("active");

            mobileMenuBtn.textContent =
                mainNav.classList.contains("active")
                    ? "×"
                    : "☰";
        }
    );
}


/* Close mobile menu after clicking link */

document
    .querySelectorAll(".main-nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove("active");

                if (mobileMenuBtn) {
                    mobileMenuBtn.textContent = "☰";
                }
            }
        );
    });


/* =========================================================
   5. SEARCH
========================================================= */

function openSearch() {

    if (!searchOverlay) return;

    searchOverlay.classList.add("active");

    document.body.classList.add("no-scroll");

    setTimeout(() => {

        if (searchInput) {
            searchInput.focus();
        }

    }, 100);
}


function closeSearchOverlay() {

    if (!searchOverlay) return;

    searchOverlay.classList.remove("active");

    document.body.classList.remove("no-scroll");
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
        searchInput.value
            .trim()
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


    if (results.length === 0) {

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

            firstResult.style.outline =
                "";

            firstResult.style.outlineOffset =
                "";

        }, 2000);

    }


    showToast(
        `${results.length} product found.`
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

            if (
                event.key === "Enter"
            ) {

                performProductSearch();
            }

            if (
                event.key === "Escape"
            ) {

                closeSearchOverlay();
            }
        }
    );
}


/* =========================================================
   6. CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "mittiManorCart",
        JSON.stringify(cart)
    );
}


function addToCart(productId) {

    const product =
        products.find(
            item =>
                item.id === Number(productId)
        );


    if (!product) return;


    const existingItem =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });
    }


    saveCart();

    updateCartUI();

    showToast(
        `${product.name} added to cart.`
    );
}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== Number(productId)
        );


    saveCart();

    updateCartUI();

    showToast(
        "Product removed from cart."
    );
}


function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            product =>
                product.id === Number(productId)
        );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;
    }


    saveCart();

    updateCartUI();
}


function getCartCount() {

    return cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );
}


function getCartTotal() {

    return cart.reduce(
        (total, item) =>
            total +
            item.price *
            item.quantity,
        0
    );
}


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


function updateCartUI() {

    const count =
        getCartCount();

    const total =
        getCartTotal();


    if (cartCount) {

        cartCount.textContent =
            count;
    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(total);
    }


    if (!cartItems) return;


    if (cart.length === 0) {

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
   CART EVENT DELEGATION
========================================================= */

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

                const action =
                    quantityButton.dataset.action;


                changeQuantity(
                    id,
                    action === "increase"
                        ? 1
                        : -1
                );
            }
        }
    );
}


/* =========================================================
   ADD TO CART BUTTONS
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


/* =========================================================
   OPEN / CLOSE CART
========================================================= */

function openCart() {

    if (!cartDrawer) return;

    updateCartUI();

    cartDrawer.classList.add("active");

    drawerBackdrop.classList.add("active");

    document.body.classList.add("no-scroll");
}


function closeCartDrawer() {

    if (!cartDrawer) return;

    cartDrawer.classList.remove("active");

    drawerBackdrop.classList.remove("active");

    document.body.classList.remove("no-scroll");
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
   7. WISHLIST
========================================================= */

function saveWishlist() {

    localStorage.setItem(
        "mittiManorWishlist",
        JSON.stringify(wishlist)
    );
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


function updateWishlistUI() {

    document
        .querySelectorAll(".wishlist-product")
        .forEach(button => {

            const id =
                Number(button.dataset.id);

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


document
    .querySelectorAll(".wishlist-product")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

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

            if (
                wishlist.length === 0
            ) {

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
   8. LOGIN MODAL
========================================================= */

function openLoginModal() {

    if (!loginModal) return;

    loginModal.classList.add("active");

    document.body.classList.add("no-scroll");
}


function closeLoginModal() {

    if (!loginModal) return;

    loginModal.classList.remove("active");

    document.body.classList.remove("no-scroll");
}


if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        openLoginModal
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
   9. EMAIL LOGIN PLACEHOLDER
========================================================= */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            if (!email) {

                showToast(
                    "Please enter your email."
                );

                return;
            }


            showToast(
                "Firebase login will be connected next."
            );
        }
    );
}


/* =========================================================
   10. GOOGLE LOGIN PLACEHOLDER
========================================================= */

if (googleLoginBtn) {

    googleLoginBtn.addEventListener(
        "click",
        () => {

            showToast(
                "Google Login will be connected with Firebase."
            );
        }
    );
}


/* =========================================================
   11. SIGNUP PLACEHOLDER
========================================================= */

if (signupBtn) {

    signupBtn.addEventListener(
        "click",
        () => {

            showToast(
                "Account creation will be connected with Firebase."
            );
        }
    );
}


/* =========================================================
   12. CHECKOUT
========================================================= */

if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Your cart is empty."
                );

                return;
            }


            showToast(
                "Checkout and Razorpay will be connected next."
            );
        }
    );
}


/* =========================================================
   13. NEWSLETTER
========================================================= */

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                document.getElementById(
                    "newsletterEmail"
                ).value.trim();


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
   14. TOAST NOTIFICATION
========================================================= */

let toastTimer;


function showToast(message) {

    if (!toast || !toastMessage) return;


    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );
}


/* =========================================================
   15. ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        closeSearchOverlay();

        closeCartDrawer();

        closeLoginModal();
    }
);


/* =========================================================
   16. ACTIVE NAVIGATION
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

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >=
                sectionTop

                &&

                window.scrollY <
                sectionTop +
                sectionHeight
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );
            }

        });


        navLinks.forEach(link => {

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

        });

    },
    {
        passive: true
    }
);


/* =========================================================
   17. CONTACT LINKS
========================================================= */

document
    .querySelectorAll(
        'a[href^="mailto:"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                showToast(
                    "Opening your email app..."
                );
            }
        );
    });


/* =========================================================
   18. INITIALIZE
========================================================= */

function initializeAppUI() {

    updateCartUI();

    updateWishlistUI();

}


initializeAppUI();


/* =========================================================
   MITTI MANOR
   End of script
========================================================= */
