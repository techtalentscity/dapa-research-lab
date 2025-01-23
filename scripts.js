document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200; // Adjust offset
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 16;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scroll with offset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with offset on page load with hash links in the URL
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Fade-In Animation Logic
   */
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((el) => observer.observe(el));

  /**
   * Carousel Arrow Functionality
   */
  const teamCarousel = document.querySelector(".team-carousel");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

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
   * Team Members Array
   */
  const teamMembers = [
    { name: "Dr. Kofi Nyarko", role: "Director of DEPA Lab", image: "images/nyarko.jpg" },
    { name: "Jane Doe", role: "Senior Research Assistant", image: "images/nyarko.jpg" },
    { name: "John Smith", role: "Data Scientist", image: "images/nyarko.jpg" },
  ];

  // Add placeholders for additional members
  for (let i = 4; i <= 20; i++) {
    teamMembers.push({
      name: `Team Member ${i}`,
      role: "Research Specialist",
      image: "images/nyarko.jpg",
    });
  }

  // Populate the Team Carousel
  if (teamCarousel) {
    teamMembers.forEach((member) => {
      const cardHTML = `
        <div class="card">
          <img src="${member.image}" alt="${member.name}" class="team-photo" loading="lazy">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
        </div>
      `;
      teamCarousel.insertAdjacentHTML("beforeend", cardHTML);
    });
  }
});
