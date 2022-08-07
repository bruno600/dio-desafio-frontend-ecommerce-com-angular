import { Component, OnInit, Output } from '@angular/core';
import { Book } from './product-list/model/Book';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css']
})
export class BookstoreAppComponent implements OnInit {

  livros: Book[] = [];
  livrosFiltrados: Book[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  getBooks(books: Book[]): void {
    this.livros = books;
  }
  
  getFilteredBooks(books: Book[]): void {
    this.livrosFiltrados = books;
  }

}
