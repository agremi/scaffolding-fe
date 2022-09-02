import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = 'https://localhost:7080';
  constructor(private httpClient:HttpClient) { }

  login(username:string,password:string):Observable<object>{
    let httpParams = new HttpParams();
    httpParams = httpParams.append(username,username);
    httpParams = httpParams.append(password,password);

    return this.httpClient.post(`${this.url}/login`,httpParams);
  }
}
