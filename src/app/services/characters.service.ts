import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@app/model/character';
import { catchError, Observable, ObservableInput, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  apiUrl: string = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient){}

  getList(query = '', page = 1): Observable<Character[]>{
    let filter = this.apiUrl + "/?name="+query+"&page="+page;
    console.log("Peticion =>" + filter);
    return this.http.get<Character[]>(filter).pipe(catchError(error => this.handledError()));
  }

  getCharacter(id: number){
    return this.http.get<Character>(this.apiUrl + "/character" + id);
  }

  handledError(){

    console.log("Elemento no encontrado");

    return throwError(() => new Error("Error en la petición"));

  }

}
