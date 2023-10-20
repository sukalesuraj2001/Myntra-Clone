import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }


  private products = []; // Replace with your product data source
  private searchResultsSubject = new BehaviorSubject([]);

  searchProducts(searchTerm: string) {
    const results = this.products.filter((product:any) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.searchResultsSubject.next(results);
  }

  getSearchResults() {
    return this.searchResultsSubject.asObservable();
  }
}
