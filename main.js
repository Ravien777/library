const toggleMenuBtn = document.getElementById("toggleMenu");
const mobileMenu = document.querySelector(".mobile-nav");
const books_list = document.getElementById("bookList");
const addBookModal = document.getElementById("");
const addBookForm = document.getElementById("");
const addBookBtn = document.getElementById("");
const errorMsg = document.getElementById("errorMsg");
const overlay = document.getElementById("overlay");

toggleMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-active");
  toggleMenuBtn.classList.toggle("open");
});

class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pages = "0",
    cover = "assets/no-cover.jpg",
    summary = "No Summary"
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.cover = cover;
    this.summary = summary;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    if (!this.IsInLibrary(newBook)) {
      this.books.push(newBook);
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  getBook(title) {
    return this.books.find((book) => book.title === title);
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }
}

const library = new Library();

const createBookDiv = (book) => {
  const book_div = document.createElement("div");
  const book_div_top = document.createElement("div");
  const bg_img = document.createElement("img");
  const book_div_bottom = document.createElement("div");
  const bottom_anchor = document.createElement("a");
  const bottom_h3 = document.createElement("h3");
  const book_div_bottom_wrap = document.createElement("div");
  const bottom_p_author = document.createElement("p");
  const bottom_p_pages = document.createElement("p");
  const remove_book_a = document.createElement("a");

  book_div.className = "book";
  book_div_top.className = "top";
  bg_img.src = book.cover;
  bg_img.alt = "Book Cover";
  book_div_bottom.className = "bottom";
  bottom_h3.className = "title";
  book_div_bottom_wrap.className = "wrap";
  bottom_p_author.className = "author";
  bottom_p_pages.className = "pages";
  remove_book_a.href = "javascript:void(0)";
  remove_book_a.className = "remove-book";

  bottom_h3.innerText = book.title;
  bottom_p_author.innerText = book.author;
  bottom_p_pages.innerText = book.pages;
  remove_book_a.innerText = "Remove";

  book_div_top.appendChild(bg_img);
  book_div_bottom_wrap.appendChild(bottom_p_author);
  book_div_bottom_wrap.appendChild(bottom_p_pages);
  bottom_anchor.appendChild(bottom_h3);
  bottom_anchor.appendChild(book_div_bottom_wrap);
  book_div_bottom.appendChild(bottom_anchor);
  book_div_bottom.appendChild(remove_book_a);
  book_div.appendChild(book_div_top);
  book_div.appendChild(book_div_bottom);
};

const openAddBookModal = () => {
  addBookForm.reset();
  addBookModal.classList.add("active");
  overlay.classList.add("active");
};

const closeAddBookModal = () => {
  addBookModal.classList.remove("active");
  overlay.classList.remove("active");
  errorMsg.classList.remove("active");
  errorMsg.textContent = "";
};

const closeAllModals = () => {
  closeAddBookModal();
};

const handleKeyboardInput = (e) => {
  if (e.key === "Escape") closeAllModals();
};

const updateBooksGrid = () => {
  resetBooksGrid();
  for (let book of library.books) {
    createBookDiv(book);
  }
};

const resetBooksGrid = () => {
  booksGrid.innerHTML = "";
};

const getBookFromInput = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;
  return new Book(title, author, pages, isRead);
};

const addBook = (e) => {
  e.preventDefault();
  const newBook = getBookFromInput();

  if (library.isInLibrary(newBook)) {
    errorMsg.textContent = "This book already exists in your library";
    errorMsg.classList.add("active");
    return;
  }

  if (auth.currentUser) {
    addBookDB(newBook);
  } else {
    library.addBook(newBook);
    saveLocal();
    updateBooksGrid();
  }

  closeAddBookModal();
};

const removeBook = (e) => {
  const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
    '"',
    ""
  );

  if (auth.currentUser) {
    removeBookDB(title);
  } else {
    library.removeBook(title);
    saveLocal();
    updateBooksGrid();
  }
};
