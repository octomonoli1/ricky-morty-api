import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrl: './form-search.component.css'
})
export class FormSearchComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(value: string): void {
    console.log("Buscando -> " + value);
    this.router.navigate([''], { queryParams: { q: value}});
  }

}
