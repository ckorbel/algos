const list = document.querySelector("#book-list ul");

list.addEventListener("click", function (event) {
  if (event.target.className === "delete") {
    const li = event.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  //add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  // add to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (event) {
  const term = event.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
