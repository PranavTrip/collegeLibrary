class Book {
  constructor(Name, Author, Type) {
    this.Name = Name;
    this.Author = Author;
    this.Type = Type;
  }
}

class Display {
  add(book) {
    let tableBody = document.getElementById("tableBody");
    let uiString = ` <tr>
      <td>${book.Name}</td>
      <td>${book.Author}</td>
      <td>${book.Type}</td>
    </tr>`;
    tableBody.innerHTML += uiString;
  }

  clear() {
    let bookForm = document.getElementById("bookForm");
    bookForm.reset();
  }

  validate(book) {
    if (book.Name.length < 2 || book.Author.length < 2) {
      return false;
    } else {
      return true;
    }
  }

  show(type, displayMessage) {
    let message = document.getElementById("message");
    let boldText;
    if (type === "success") {
      boldText = "Success";
    } else {
      boldText = "Error";
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;

    setTimeout(function () {
      message.innerHTML = "";
    }, 5000);
  }
}

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", formSubmit);

function formSubmit(e) {
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("authorName").value;
  let type;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("Programming");
  let physics = document.getElementById("Physics");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (physics.checked) {
    type = physics.value;
  }

  let book = new Book(name, author, type);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Book has been successfully added");
  } else {
    display.show("danger", "Book Not Added. Try Again");
  }
  e.preventDefault();
}
