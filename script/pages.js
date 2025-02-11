    <script>
        // Scroll to top button visibility
        const scrollBtn = document.querySelector('.scroll-top');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Mobile menu toggle
        const navToggle = document.getElementById('nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.checked = false;
            });
        });
    </script>
