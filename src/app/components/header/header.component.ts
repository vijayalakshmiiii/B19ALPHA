import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public AllBooks:any=[];
  public allbook:any=[];
  public empty:string="";
  constructor(private data  : ApiService, private router : Router) { }
  
  ngOnInit(): void {
    
  }
  search1:string="";
  

  getBooks(){
    this.data.getBooks().subscribe((res=>{
      this.AllBooks=res 
      this.allbook=res     
    }))
  }

 

 
  searching(event:any){
    this.search1 = (event.target as HTMLInputElement).value;
    console.log(this.search1);
    this.data.search.next(this.search1);
  }



  cancelSearch(){
    debugger;
    this.data.search.next(this.empty);
  
  }

}


