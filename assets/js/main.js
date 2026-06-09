/* ===================================
   HAIDER ALI PHARMACY
   MAIN JAVASCRIPT
=================================== */

/* ===================================
   QUICK ORDER FORM
=================================== */

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("customerName").value.trim();

        const phone =
            document.getElementById("customerPhone").value.trim();

        const product =
            document.getElementById("productName").value.trim();

        if (!name || !phone || !product) {

            alert("يرجى تعبئة جميع الحقول");

            return;
        }

        const message = `
مرحباً صيدلية حيدر علي

لدي طلب جديد:

الاسم: ${name}

رقم الهاتف: ${phone}

المنتج المطلوب: ${product}
`;

        const whatsappUrl =
            `https://wa.me/9647767003700?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappUrl,
            "_blank"
        );

        orderForm.reset();

    });

}

/* ===================================
   HEADER SCROLL EFFECT
=================================== */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.10)";

    } else {

        header.style.boxShadow =
            "0 5px 15px rgba(0,0,0,.08)";
    }

});

/* ===================================
   SCROLL REVEAL
=================================== */

const revealElements =
    document.querySelectorAll(
        ".service-card, .product-card, .why-card, .contact-card"
    );

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* ===================================
   BACK TO TOP BUTTON
=================================== */

const backToTop =
    document.createElement("button");

backToTop.innerHTML =
    "↑";

backToTop.classList.add(
    "back-to-top"
);

document.body.appendChild(
    backToTop
);

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("active");

        } else {

            backToTop.classList.remove("active");
        }

    }
);

backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);

/* ===================================
   ACTIVE NAV LINKS
=================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.clientHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {
                link.classList.add("active");
            }

        });

    }
);

/* ===================================
   LAZY LOADING IMAGES
=================================== */

const lazyImages =
    document.querySelectorAll("img");

const imageObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const image =
                        entry.target;

                    image.classList.add("loaded");

                    observer.unobserve(image);

                }

            });

        }
    );

lazyImages.forEach((image) => {

    imageObserver.observe(image);

});

/* ===================================
   COUNTER ANIMATION
   READY FOR FUTURE
=================================== */

const animateCounter = (
    element,
    target
) => {

    let current = 0;

    const increment =
        target / 100;

    const updateCounter = () => {

        current += increment;

        if (current < target) {

            element.innerText =
                Math.floor(current);

            requestAnimationFrame(
                updateCounter
            );

        } else {

            element.innerText =
                target;
        }

    };

    updateCounter();
};

/* ===================================
   PRODUCT BUTTON TRACKING
=================================== */

const productButtons =
    document.querySelectorAll(
        ".product-btn"
    );

productButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            console.log(
                "Product Inquiry Clicked"
            );

        }
    );

});

/* ===================================
   PERFORMANCE OPTIMIZATION
=================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);

/* ===================================
   PREVENT DOUBLE SUBMIT
=================================== */

let formSubmitting =
    false;

if (orderForm) {

    orderForm.addEventListener(
        "submit",
        () => {

            if (formSubmitting)
                return;

            formSubmitting = true;

            setTimeout(() => {

                formSubmitting =
                    false;

            }, 2000);

        }
    );

}

/* ===================================
   CONSOLE MESSAGE
=================================== */

console.log(
    "%cHaider Ali Pharmacy",
    "font-size:20px;color:#37C4D7;font-weight:bold;"
);

console.log(
    "Website Loaded Successfully"
);

const notifications = [

    "عميل طلب مستلزمات طبية",
    "تم الاستفسار عن دواء جديد",
    "عميل تواصل عبر واتساب",
    "تم طلب منتج للعناية بالبشرة",
    "استفسار جديد عن العروض"

];

const proofBox =
document.getElementById("socialProof");

const proofText =
document.getElementById("proofText");

function showNotification(){

    const randomText =
    notifications[
        Math.floor(
            Math.random() *
            notifications.length
        )
    ];

    proofText.innerText =
    randomText;

    proofBox.classList.add("show");

    setTimeout(()=>{

        proofBox.classList.remove("show");

    },5000);
}

setInterval(
showNotification,
15000
);

