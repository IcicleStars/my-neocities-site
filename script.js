const books = document.querySelectorAll('.book.highlight');
    const contents = document.querySelectorAll('.content');

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