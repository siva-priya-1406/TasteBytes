const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const filterButtons = document.querySelectorAll('.filter-btn');
const recipeCards = document.querySelectorAll('.card');

themeToggleBtn.addEventListener('click', () => {
    
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
       
        filterButtons.forEach(btn => btn.classList.remove('active'));
       
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        recipeCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || filterValue === cardCategory) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    });
});
