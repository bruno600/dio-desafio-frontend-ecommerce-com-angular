import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../product-list/model/Book';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input()
  livros: Book[] = [];
  @Output()
  sendFilteredBooks = new EventEmitter<Book[]>()
  
  constructor() { }

  ngOnInit(): void {
  }

  filtrarPreco(min: number, max: number) {
    let filteredBooks = this.livros.filter(book => {
      return book.price >= min && book.price <= max
    })
    
    this.sendFilteredBooks.emit(filteredBooks)
  }

}
