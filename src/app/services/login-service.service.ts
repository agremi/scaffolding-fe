import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url:string = 'https://localhost:7080';
  constructor(private httpClient:HttpClient) { }

  login(username:string,password:string):Observable<string>{
    return null;
  }
}
