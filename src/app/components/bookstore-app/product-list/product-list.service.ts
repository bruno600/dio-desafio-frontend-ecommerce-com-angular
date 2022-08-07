import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Book";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private url = "https://62effe7b57311485d12bde0d.mockapi.io/book/books"

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient:HttpClient) {}

  getBook(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.url);
  }
  
}
