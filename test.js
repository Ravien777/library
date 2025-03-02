const myLibrary = [
    {
        title: "Book1",
        author: "Ravien",
    },
    {
        title: "Book2",
        author: "Akshay"
    },
    {
        title: "Book3",
        author: "Ravien"
    }
];

function Book() {
    // book
}

function addBookToLibrary() {
    // add
}

function displayBooks() {
    let booksList = document.getElementById("booksList");
    for (var i = 0; i < myLibrary.length; i++) {
        let listItem = document.createElement("li");
        let itemTitle = document.createElement("p");
        let itemAuthor = document.createElement("p");

        listItem.classList.add("book-item");
        itemTitle.innerHTML += myLibrary[i].title;
        itemAuthor.innerHTML += myLibrary[i].author;

        listItem.appendChild(itemTitle);
        listItem.appendChild(itemAuthor);

        booksList.appendChild(listItem);
    }
}

displayBooks();