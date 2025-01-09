document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle dropdown menu on click
    document.querySelectorAll('.dropdown-parent').forEach(parent => {
        parent.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = parent.querySelector('.dropdown');
            dropdown.classList.toggle('active');
        });
    });

    // Show/hide navbar on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScrollY = window.scrollY;
    });

    // Toggle menu for small screens
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // Modal functionality
    const readMoreButton = document.getElementById('readMoreButton');
    const directorModal = document.getElementById('directorModal');
    const closeModal = document.getElementById('closeModal');

    readMoreButton.addEventListener('click', () => {
        directorModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        directorModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === directorModal) {
            directorModal.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const visitorCounter = document.getElementById("visitor-counter");
    let currentCount = parseInt(visitorCounter.textContent, 10);
    visitorCounter.textContent = (currentCount + 1).toString().padStart(7, "0");
});
