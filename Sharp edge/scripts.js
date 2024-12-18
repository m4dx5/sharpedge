// JavaScript for Animations and Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Animate Hero Section Text on Load
    const heroText = document.querySelector('.hero-content h2');
    if (heroText) {
        heroText.classList.add('animate');
    }

    // Scroll-based Animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .stylist-card, .booking-form');
        const triggerHeight = window.innerHeight * 0.8;

        elements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerHeight) {
                el.classList.add('visible');
            }
        });
    };

    // Hover Animations for Service Cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Transparent Header on Scroll
    const mainHeader = document.getElementById('main-header');
    const transparentHeader = document.getElementById('transparent-header');
    const headerHeight = mainHeader.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            transparentHeader.classList.add('visible');
        } else {
            transparentHeader.classList.remove('visible');
        }
        animateOnScroll(); // Call animateOnScroll on scroll
    });

    // Initial call to animate elements on page load
    animateOnScroll();
});