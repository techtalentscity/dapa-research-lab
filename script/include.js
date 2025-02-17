document.addEventListener('DOMContentLoaded', function() {
    // Function to include HTML content
    async function includeHTML(selector, path) {
        try {
            const response = await fetch(path);
            const html = await response.text();
            document.querySelector(selector).innerHTML = html;
        } catch (error) {
            console.error('Error loading component:', error);
        }
    }

    // Include header and footer
    includeHTML('header', '/components/header.html');
    includeHTML('footer', '/components/footer.html');
});
