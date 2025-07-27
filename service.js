// services-script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Intersection Observer for Scroll-Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealChildElements = document.querySelectorAll('.reveal-on-scroll-child');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // For the service cards specifically, add is-visible to their parent
                // This triggers the staggered animation for individual cards via CSS
                if (entry.target.classList.contains('services-list')) {
                    const serviceCardsContainer = entry.target.querySelector('.service-cards');
                    if (serviceCardsContainer) {
                        serviceCardsContainer.classList.add('is-visible');
                    }
                }
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    // Observe each main section for reveal
    revealElements.forEach(element => {
        observer.observe(element);
    });

    // Observe individual child elements for reveal (like profile image)
    revealChildElements.forEach(element => {
        observer.observe(element);
    });

    console.log("Services page loaded! JavaScript for scroll-reveal is active.");
});