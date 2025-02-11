document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.querySelector(".main-nav ul");
    
    navToggle.addEventListener("change", function () {
        if (this.checked) {
            navLinks.classList.add("open");
        } else {
            navLinks.classList.remove("open");
        }
    });
    
    // Close the navigation when a link is clicked (for mobile UX)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            navToggle.checked = false;
            navLinks.classList.remove("open");
        });
    });
    
    // Scroll to Top Button
    const scrollTopBtn = document.querySelector(".scroll-top");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }
    });
    
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    
    // Lazy Loading Images (if applicable)
    const images = document.querySelectorAll("img");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        observer.observe(img);
    });
});
