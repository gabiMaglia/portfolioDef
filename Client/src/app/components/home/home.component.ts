import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Persona from 'src/app/model/persona.model';
import Skills from 'src/app/model/skills.model';
import SocialM from 'src/app/model/socialM.model';

import { PersonaService } from 'src/app/services/persona.service';
import { SkillsService } from 'src/app/services/skills.service';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  persona?: Persona;
  socialM?: SocialM;
  skills?: Skills[];
  softSkills?: Skills[];
  hardSkills?: Skills[];
  loading: boolean = true;
  requestsCompleted: number = 0;
  totalRequests: number = 3; // Número total de llamadas de servicio

  constructor(
    private personaService: PersonaService,
    private titleService: Title,
    private socialMservice: SocialService,
    private skillService: SkillsService,
  ) {}

  ngOnInit(): void {
    this.setTitlePage();
    this.loadData();
  }

  setTitlePage() {
    this.personaService.getPersona().subscribe((data) => {
      this.titleService.setTitle(data.name_persona.toString() + data.surname_persona.toString() + " Personal Page");
    });
  }

  loadData() {
    // Reiniciar el estado de carga
    this.loading = true;
    this.requestsCompleted = 0;

    // Realizar todas las llamadas a los servicios necesarios
    this.getPersona();
    this.getSkills();
    this.getSocialM();
  }

  public getPersona(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
      this.handleRequestComplete();
    });
  }

  public getSkills(): void {
    this.skillService.getSkills().subscribe((skills) => {
      this.skills = skills;
      this.softSkills = skills.filter((data) => data.type === 'soft');
      this.hardSkills = skills.filter((data) => data.type == 'hard');
      this.handleRequestComplete();
    });
  }

  public getSocialM(): void {
    this.socialMservice.getSocialM().subscribe((socialM) => {
      this.socialM = socialM[0];
      this.handleRequestComplete();
    });
  }

  handleRequestComplete() {
    this.requestsCompleted++;
    if (this.requestsCompleted === this.totalRequests) {
      this.loading = false; // Cambiar a false una vez que todas las solicitudes hayan terminado
    }
  }
}
