import { describe, it, expect, beforeEach } from '@jest/globals';
import Library from '../library.js';
import Book from '../book.js';

describe('Library', () => {
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library('Biblioteca');
  });

  it('add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120, 10000);
    const aBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120, 100000);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286, 20000);
    expect(myLibrary.totalBooks()).toBe(3);
  });

  it('set the name of the library', () => {
    myLibrary.setName('Montevideo');
    expect(myLibrary.getName()).toBe('Montevideo');
  });

  it('throw an error when setting an invalid name', () => {
    expect(() => myLibrary.setName(123)).toThrow();
  });
  it('throw an error when setting an empty name', () => {
    expect(() => myLibrary.setName('')).toThrow();
  });

  it('check if the total words count is correct', () => {   
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120, 100000);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286, 20000); 
    expect(myLibrary.totalWords()).toBe(129999);
  });
});