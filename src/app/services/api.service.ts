import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRandomDawg(): Observable<string> {
    return this.http.get<any>("https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true");
  }

  getRandomBirdie(): Observable<any> {
    return this.http.get<any>("https://shibe.online/api/birds?count=1&urls=true&httpsUrls=true")
  }

  getRandomGatito(): Observable<any> {
    return this.http.get<any>("https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true")
  }
}
