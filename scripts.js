document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // If the link is an anchor link to the current page
            if (href.startsWith('#')) {
                e.preventDefault(); // Prevent default navigation
                const targetId = href.substring(1); // Remove the '#' to get the ID
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 60, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
                closeMenu(); // Close the menu after scrolling
            }
        });
    });

    // Close Menu Function
    function closeMenu() {
        const menuCheckbox = document.querySelector('.check');
        if (menuCheckbox) {
            menuCheckbox.checked = false;
        }
    }

    // Fade-In Animation Logic
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

    // Carousel Arrow Functionality
    const teamCarousel = document.querySelector('.team-carousel');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (teamCarousel && leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            teamCarousel.scrollBy({
                left: -300, // Adjust scroll amount
                behavior: 'smooth'
            });
        });

        rightArrow.addEventListener('click', () => {
            teamCarousel.scrollBy({
                left: 300, // Adjust scroll amount
                behavior: 'smooth'
            });
        });
    } else {
        console.warn('Carousel or arrows not found in the DOM.');
    }

    // Active Link Highlighting for Navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100; // Adjust based on header height
        sections.forEach(section => {
            if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Scroll-to-Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.textContent = '↑';
    scrollTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    // Team Members Array
    const teamMembers = [
        { name: "Dr. Kofi Nyarko", role: "Director of DEPA Lab", image: "images/nyarko.jpg" },
        { name: "Jane Doe", role: "Senior Research Assistant", image: "images/nyarko.jpg" },
        { name: "John Smith", role: "Data Scientist", image: "images/nyarko.jpg" },
    ];

    }

    // Populate the Team Carousel
    if (teamCarousel) {
        teamMembers.forEach(member => {
            const cardHTML = `
                <div class="card">
                    <img src="${member.image}" alt="${member.name}" class="team-photo">
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                </div>
            `;
            teamCarousel.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
});
