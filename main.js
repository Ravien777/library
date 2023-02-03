const toggleMenuBtn = document.getElementById("toggleMenu");
const mobileMenu = document.querySelector(".mobile-nav");
const books_list = document.getElementById("bookList");

toggleMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-active");
  toggleMenuBtn.classList.toggle("open");
});

let myLibrary = [];

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

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {});
}

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
