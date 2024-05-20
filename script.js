const button = document.querySelectorAll('.remove');
const books = document.querySelector('.books')
const cards = document.querySelectorAll('.card')





//code to remove card on click using event delegation
books.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('remove')) {
                const card = e.target.closest('.card');
                card.remove()
        }
    })



