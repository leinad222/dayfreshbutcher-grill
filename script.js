// Main JavaScript for Day Fresh Butcher & Grill

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initializeNavigation();
    initializeMenuFilters();
    setupReservationForm();
    setupScrollAnimations();
});

// Navigation functionality
const initializeNavigation = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
};

// Menu filtering system
const initializeMenuFilters = () => {
    const filterButtons = document.querySelectorAll('.menu-filter');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterMenuItems(category, menuItems);
        });
    });
};

// Reservation form handling
const setupReservationForm = () => {
    const form = document.querySelector('.reservation-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            validateAndSubmitForm(form);
        });
    }
};

// Scroll animations
const setupScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    });

    animatedElements.forEach(element => observer.observe(element));
};

// Utility functions
const filterMenuItems = (category, items) => {
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};

const validateAndSubmitForm = async (form) => {
    const formData = new FormData(form);
    try {
        // Add your form submission logic here
        console.log('Form submitted:', Object.fromEntries(formData));
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};  
// End of script.js

