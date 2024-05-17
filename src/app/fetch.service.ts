import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor(private http:HttpClient) { }
  private apiUrl = 'https://api.github.com/users/hadley/orgs';

  getData(){
    return this.http.get<any[]>(this.apiUrl).pipe(map((response ) => {
      return response.map( item => ({
        login:item.login,
        id:item.id,
        url:item.url
      }))
    }))
  }
}
