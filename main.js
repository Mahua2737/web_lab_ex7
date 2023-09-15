const apiUrl = "book.json";

async function fetchBooks() {

    fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AWLyXSaBO4y3tn7NLsarvg0fkuGREqCL")
        .then((response) => {
            response.json()
                .then((data) => {

                    displayBooks(data)

                }).catch((err) => {
                    console.log(err);
                })
        }).catch((err) => {
            console.log(err);
        })
}




function displayBooks(books) {
    const ul = document.getElementById('books');

    books["results"]["books"].forEach((book) => {

        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        ul.appendChild(li);
    })
}
const fetchBooksButton = document.getElementById('fetchBooks');
fetchBooksButton.addEventListener('click', fetchBooks);
