
function changeHeading() {
    document.getElementById("heading").textContent = "Books for Every Student";
}

function changeColor() {
    document.getElementById("card1").style.backgroundColor = "lightblue";
}

function hideBooks() {
    let books = document.getElementById("featured");

    if (books.style.display == "none") {
        books.style.display = "flex";
    } else {
        books.style.display = "none";
    }
}

function requestBook(button) {
    button.textContent = "Request Sent";
    document.getElementById("message").textContent = "Your book request has been sent.";
}

function showBook() {
    let title = document.getElementById("bookTitle").value;

    if (title == "") {
        document.getElementById("searchMessage").textContent = "Please enter a book title.";
        document.getElementById("result").textContent = "";
    } else {
        document.getElementById("result").textContent = "Book Title: " + title;
        document.getElementById("searchMessage").textContent = "Book title submitted successfully.";
    }
}

function changeBook() {
    document.getElementById("bookCard").style.backgroundColor = "lightblue";
}

function changeSize() {
    document.getElementById("formHeading").style.fontSize = "40px";
}

function hideForm() {
    let form = document.getElementById("bookForm");

    if (form.style.display == "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function submitBook(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let condition = document.getElementById("condition").value;
    let message = document.getElementById("formMessage");

    if (name == "" || title == "" || author == "" || category == "" || condition == "") {
        message.style.color = "red";
        message.textContent = "Please fill all the fields.";
    } else {
        message.style.color = "green";
        message.textContent = "Thank you " + name + "! Your book " + title + " has been listed.";
    }
}
