import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 public AllBooks:any;
 searchKey:string="";
  constructor(private data : ApiService) { }
  ngOnInit(): void {

    this.getBooks();
    this.data.search.subscribe((val:any)=>{
      this.searchKey=val;
      console.log("from bookscomponet"+ this.searchKey)
    })

    this.data.filter.subscribe((res:any)=>{
      this.AllBooks=res;
    })

    this.data.price.subscribe((res:any)=>{
      this.AllBooks=res;
    })
  }

  getBooks(){
    this.data.getBooks().subscribe((res=>{
      this.AllBooks=res      
    }))
  }
 
}
