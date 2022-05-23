import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public search = new BehaviorSubject<string>("");
  public filter = new BehaviorSubject<any>([]);
  public price = new BehaviorSubject<any>([""]);
  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book")
    .pipe(map((res:any)=>{
      return res
    }))
  }
}
