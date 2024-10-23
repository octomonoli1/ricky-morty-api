import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/model/character';
import { CharacterLocation } from '@app/model/characterLocation';
import { CharactersService } from '@app/services/characters.service';
import { LocationsService } from '@app/services/locations.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  
  public id: any;
  public character: Character | null = null;
  public location: CharacterLocation | null = null;
  public origin: CharacterLocation | null = null;

  constructor(
    private characterService: CharactersService, 
    private locationService: LocationsService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.characterService.getCharacter(this.id).subscribe((data:Character) => {
      this.character = data;

    });
  }

}
