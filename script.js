// Get HTML Elements
const books = document.querySelectorAll('.book.interactive');
const contents = document.querySelectorAll('.content');
const closeButtons = document.querySelectorAll('.close-btn');

// BOOK CLICK FUNCTIONALITY
books.forEach(book => {
    book.addEventListener('click', () => {
        // Reset others
        books.forEach(b => b.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Activate clicked book
        book.classList.add('active');

        // Show associated content
        const targetId = book.getAttribute('data-content');
        document.getElementById(targetId).classList.add('active');
    });
});

// CLOSE BUTTON FUNCITONALITY
closeButtons.forEach(button => {  
    button.addEventListener('click', () => { 

        // Get parent content and deactivate it
        const content = button.closest('.content');
        if (content) {
            content.classList.remove('active');
        }

        // Deactivate active book
        const activeBook = document.querySelector('.book.interactive.active');
        if (activeBook) {
            activeBook.classList.remove('active');
        }

    });
});