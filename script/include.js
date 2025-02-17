// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-container', 'components/header.html');
    loadComponent('footer-container', 'components/footer.html');
});

function loadComponent(containerId, componentPath) {
    const container = document.getElementById(containerId);
    if (container) {
        fetch(componentPath)
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data;
            })
            .catch(error => console.error('Error loading component:', error));
    }
}
