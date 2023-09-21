import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  searchBill(request: any): Observable<any> {
    const url = `http://localhost:8080/billing/searchBill`;
    return this.http.post(url, request);
  }
}
