import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnInit {
  public AllBooks:any=[];
  public allbook:any=[];
  public rate:any;
  
  
  
  constructor(private data: ApiService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  getBooks(){
    this.data.getBooks().subscribe((res=>{
      this.AllBooks=res 
      this.allbook=res     
    }))
  }

  // onChange(event: { value: any; }) {
  //   this.priceValue.emit(event.value);
  // }

  // setMinValue(book: Book[]) {
  //   this.min = book.reduce((prev, curr) => {
  //     return prev.price < curr.price ? prev : curr;
  //   }).price;
  // }

  // setMaxValue(book: Book[]) {
  //   this.value = this.max = book.reduce((prev, curr) => {
  //     return prev.price > curr.price ? prev : curr;
  //   }).price;
  // }

  filter() {
    this.AllBooks= this.allbook
    .filter((a:any)=>{
      debugger;
      if(a.price<=this.rate){
        return a
      }
    })
    this.data.price.next(this.AllBooks);
  }
}
