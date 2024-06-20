document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const mainContent = document.getElementById('main-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            fetch(`/${section}`)
                .then(response => response.text())
                .then(data => {
                    mainContent.innerHTML = data;
                })
                .catch(error => console.error('Error fetching section:', error));
        });
    });
});
