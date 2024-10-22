import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  characters: any;
  nextPage: any;
  prevPage: any;

  constructor(private characterService: CharactersService){}

  ngOnInit(): void {
    this.characterService.getData("").subscribe(data => {
      this.characters = data.results;
      this.nextPage = data.next;
      this.prevPage = data.prev;
    });
  }

  next(page: string): void {
    this.nextPage = page;
  }

  prev(page: string): void{
    this.prevPage = page;
  }

}
