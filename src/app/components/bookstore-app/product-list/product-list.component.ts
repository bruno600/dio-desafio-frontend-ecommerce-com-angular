import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './model/Book';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  livrosFiltrados: Book[] = [];
  
  @Output()
  retrieveBooks = new EventEmitter<Book[]>();
  
  livros: Book[] = [];
  
  constructor(private productListServive: ProductListService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    this.productListServive.getBook().subscribe((data) => {
      this.livros = data;
      this.livrosFiltrados = this.livros;
      this.retrieveBooks.emit(this.livros);
    })
  }

}
