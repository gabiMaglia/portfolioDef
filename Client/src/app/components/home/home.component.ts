import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private getPersona: PersonaService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
   this.setTitlePage();
  }

  setTitlePage(){
    this.getPersona.getPersona().subscribe((data) => {
      this.titleService.setTitle(data.name_persona.toString()+data.surname_persona.toString() + " portfolio");
    });
  }
      
}
