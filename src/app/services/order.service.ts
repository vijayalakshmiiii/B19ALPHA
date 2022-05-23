import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // data = '../../assets/test-data/order-data.json';
 
  constructor(private _http: HttpClient) {}

  getMyOrders(userId: number): Observable<any> {
    const endPoint = `api/Order/`;

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJsYWtzaG1pZyIsInVzZXJpZCI6Ijc5NyIsInVzZXJUeXBlSWQiOiIyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMiIsImp0aSI6ImI4M2MxOWU1LTg3NjgtNDlkNy04NWM2LWZlNzA5YjIwMzFmNCIsImV4cCI6MTY1MzA1MzQ5NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIn0.Z82YxaRHS0iV8P_6LqqDHoQ6H1G-nguoUUBXFUVz9CU');
      let url = "https://bookcart.azurewebsites.net/api/Order/797";
      return this._http.get(url, { headers: headers });
  }
}



















/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  data = '../../assets/test-data/order-data.json';
  constructor(private _http: HttpClient) {}

  getMyOrders(userId: number): Observable<any> {
    return this._http.get(this.data);
  }
}*/


