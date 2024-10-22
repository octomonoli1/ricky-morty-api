import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  apiUrl: string = "https://rickandmortyapi.com/api/character?page=1";

  constructor(private http: HttpClient){}

  getData(page: string): Observable<any>{
    let currentPage = page != "" ? page : this.apiUrl;
    return this.http.get<any>(currentPage);
  }
}
