import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '@app/model/character';
import { ActivatedRoute, ParamMap, Route, RouterModule } from '@angular/router';
import { Router } from 'express';
import { take } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  public characters: Character[] = [];
  private numPag: number = 1;
  private query: any;


  constructor(private characterService: CharactersService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getCharacterFromQuery();
  }

  getCharacterFromService(): void {
    this.characterService.getList(this.query, this.numPag).subscribe(
      (data:any) => {
        let {info, results} = data;
        this.characters = (results);
        console.log(this.characters);
      },
      (error) => {
        this.characters = [];
        console.log("Sin resultados");
      }
  
  );
  }

  getCharacterFromQuery(): void {
    this.route.queryParams.subscribe(data => {
      console.log("Params -> " + data['q']);
      this.query = data['q'];
      this.getCharacterFromService();
    });
  }

}
