import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 10000);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 'Cervantes', 350, 10000)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350, 10000)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Harry Potter', 1, 350, 10000)).toThrow();
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book('The Hobbit', 'Tolkien', '0', 10000)).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book('The Hobbit', 'Tolkien', 0, 10000)).toThrow();
  });

  it('toString()', () => {
    new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 10000)
    expect(this.myBook.toString() == 'Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 10000');
  });

});
