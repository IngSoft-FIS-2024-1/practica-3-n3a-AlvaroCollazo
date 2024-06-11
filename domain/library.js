import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;
  //Borré wordCount porque no llego a usarla.

  constructor(name) {
    this.setName(name);
    this.addBook('La Biblia', 'Dios', 400, 9999);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error();
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error();
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages, words) {
    const newBook = new Book(title, author, pages, words);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    this.#totalWords = 0;
    this.#inventory.forEach(element => {
      this.#totalWords += element.getWords();      
    });
    return this.#totalWords;
    
  }
}

export default Library;
