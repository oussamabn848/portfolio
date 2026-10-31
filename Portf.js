// ======================================
// OUSSAMA PORTFOLIO - JAVASCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. DYNAMIC FOOTER YEAR
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            `© ${new Date().getFullYear()} Oussama. All Rights Reserved.`;
    }


    // 2. SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll(
        ".Home-img, .Home-content, footer"
    );

    const style = document.createElement("style");

    style.textContent = `
        .js-reveal {
            opacity: 0;
            transform: translateY(35px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .js-reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
            .js-reveal {
                opacity: 1;
                transform: none;
                transition: none;
            }
        }

        #backToTop {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 48px;
            height: 48px;
            border: 1px solid #00e5ff;
            border-radius: 50%;
            background: linear-gradient(135deg, #00e5ff, #397bff);
            color: #070b18;
            font-size: 25px;
            font-weight: bold;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transform: translateY(15px);
            transition: 0.3s ease;
            z-index: 1000;
        }

        #backToTop.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        #backToTop:hover {
            box-shadow: 0 0 20px #00e5ff;
            transform: translateY(-5px);
        }

        @media (prefers-reduced-motion: reduce) {
            #backToTop {
                transition: none;
            }
        }
    `;

    document.head.appendChild(style);

    revealElements.forEach(element => {
        element.classList.add("js-reveal");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15
        });

        revealElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    // 3. BACK TO TOP BUTTON
    const backToTop = document.createElement("button");

    backToTop.id = "backToTop";
    backToTop.innerHTML = "↑";
    backToTop.setAttribute("aria-label", "Back to top");

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ? "instant" : "smooth"
        });

    });


    // 4. SOCIAL ICONS ANIMATION
    const socialIcons = document.querySelectorAll(".Social_icons a");

    socialIcons.forEach(icon => {

        icon.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-7px) scale(1.1)";
        });

        icon.addEventListener("mouseleave", function () {
            this.style.transform = "";
        });

    });


    // 5. PROFILE IMAGE EFFECT
    const profileImage = document.querySelector(".Home-img img");

    if (profileImage) {

        profileImage.addEventListener("mouseenter", function () {
            this.style.filter = "brightness(1.1)";
        });

        profileImage.addEventListener("mouseleave", function () {
            this.style.filter = "brightness(1)";
        });

    }


    console.log("Oussama Portfolio Loaded Successfully!");

});