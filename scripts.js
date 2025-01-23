document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Helper functions
   */
  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Smooth scroll to an element with header offset
   */
  const scrollto = (el) => {
    const header = select(".main-header");
    const offset = header ? header.offsetHeight : 0;
    const elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function () {
    const navLinks = select(".nav-links");
    if (navLinks) {
      navLinks.classList.toggle("active");
    }
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Scroll with offset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        const navLinks = select(".nav-links");
        const mobileToggle = select(".mobile-nav-toggle");

        if (navLinks && navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          mobileToggle.classList.toggle("bi-list");
          mobileToggle.classList.toggle("bi-x");
        }

        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Highlight active nav link on scroll
   */
  const highlightNavOnScroll = () => {
    const position = window.scrollY + 200; // Adjust offset for active link
    const sections = select("section", true);
    const navLinks = select(".nav-links a", true);

    sections.forEach((section) => {
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", highlightNavOnScroll);

  /**
   * Scroll-to-Top Button
   */
  const scrollTopBtn = document.createElement("button");
  scrollTopBtn.textContent = "↑";
  scrollTopBtn.classList.add("scroll-to-top");
  document.body.appendChild(scrollTopBtn);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  /**
   * Remove Preloader
   */
  const preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Smooth scrolling on page load with hash links
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Dynamic Header Styling on Scroll
   */
  const header = select(".main-header");
  if (header) {
    const toggleHeaderScrolled = () => {
      if (window.scrollY > 100) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", toggleHeaderScrolled);
    window.addEventListener("scroll", toggleHeaderScrolled);
  }

  /**
   * Carousel Arrow Functionality
   */
  const teamCarousel = select(".team-carousel");
  const leftArrow = select(".left-arrow");
  const rightArrow = select(".right-arrow");

  if (teamCarousel && leftArrow && rightArrow) {
    // Scroll Left
    leftArrow.addEventListener("click", () => {
      teamCarousel.scrollBy({
        left: -300, // Adjust scroll amount
        behavior: "smooth",
      });
    });

    // Scroll Right
    rightArrow.addEventListener("click", () => {
      teamCarousel.scrollBy({
        left: 300, // Adjust scroll amount
        behavior: "smooth",
      });
    });
  } else {
    console.warn("Carousel or arrows not found in the DOM.");
  }
});
