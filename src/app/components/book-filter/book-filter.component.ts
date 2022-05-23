import { Component, Input, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent implements OnInit {
 public AllBooks:any=[];
 public allbook:any=[];

 @Input()
  category: string="";

  categories$: Observable<Category[]> | any;
  constructor(private data: ApiService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.data.getBooks().subscribe((res=>{
      this.AllBooks=res 
      this.allbook=res     
    }))  
  }
  filter(category:any) {
    debugger;
    this.AllBooks= this.allbook
    .filter((a:any)=>{
      if(a.category==category || category==''){
        return a
      }
    })
    this.data.filter.next(this.AllBooks);
  }
}
