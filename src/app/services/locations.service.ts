import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterLocation } from '@app/model/characterLocation';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getDetail(apiUrl: any){
    return this.http.get<CharacterLocation>(apiUrl);
  }
}
