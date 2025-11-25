// Q3 - Library Management System

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false;
  }

  issueBook() {
    if (this.isIssued) return false;
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) return false;
    this.isIssued = false;
    return true;
  }
}

const books = [
  new Book("Harry Potter", "J.K. Rowling", "111"),
  new Book("Atomic Habits", "James Clear", "222"),
  new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "333"),
];

function listAvailableBooks() {
  return books.filter(b => !b.isIssued);
}

function issueByISBN(isbn) {
  const b = books.find(x => x.ISBN === isbn);
  if (!b) return "Book not found";
  return b.issueBook() ? "Issued successfully" : "Already issued";
}
