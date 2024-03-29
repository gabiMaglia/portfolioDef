import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Persona from 'src/app/model/persona.model';
import Skills from 'src/app/model/skills.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { PersonaService } from 'src/app/services/persona.service';
import { SkillsService } from 'src/app/services/skills.service';
import { SocialService } from 'src/app/services/social.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  isLog: Boolean = this.authService.islog();
  defaultProfilePic: String = 'https://iili.io/HuCixdx.png';

  @Input() persona: any
  @Input() softSkills: any
  @Input() hardSkills: any
  @Input() socialM: any
  isMobile: Boolean = false;
  skills?: Skills[];

  // Forms
  contactFormSkill!: FormGroup;
  contactFormPersona!: FormGroup;

  constructor(
    private authService: AuthService,
    public personaService: PersonaService,
    public socialMservice: SocialService,
    private skillService: SkillsService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.itIsMobile();
    this.contactFormPersona = this.initFormPersona();
    this.contactFormSkill = this.initFormSkill();
  }

  itIsMobile(): void {
    if (window.innerWidth < 658) {
      this.isMobile = true
    }
  }
  succesAlert(message: String) {
    return Swal.fire({
      title: 'Succes',
      text: message.valueOf(),
      icon: 'success',
      iconColor: 'Black',
      showConfirmButton: false,
      timer: 2500,
    });
  }
  errorAlert(message: String) {
    return Swal.fire({
      title: 'Error',
      text: message.valueOf(),
      icon: 'error',
      iconColor: 'Black',
      showConfirmButton: false,
      timer: 2500,
    });
  }
  // Persona Crud
  public getPersona(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
  }
  updatePersona(contactForm: FormGroup) {
    this.personaService.updatePersona(contactForm.value).subscribe({
      next: (response: Persona) => {
        this.succesAlert('Update ok');
        this.getPersona();
      },
      error: (error: HttpErrorResponse) => {
        this.errorAlert(error.statusText);
      },
    });
  }
  // Skill Crud
  public getSkills(): void {
    this.skillService.getSkills().subscribe((skills) => {
      this.skills = skills;
      this.softSkills = skills.filter((data) => data.type === 'soft');
      this.hardSkills = skills.filter((data) => data.type == 'hard');
    });
  }

  public addSkill(contactForm: FormGroup) {
    if (this.contactFormSkill.valid) {
      this.skillService.addSkills(contactForm.value).subscribe({
        next: (response: Skills) => {
          this.succesAlert('Add ok');
          this.getSkills();
        },
        error: (error: HttpErrorResponse) => {
          this.errorAlert(error.statusText);
          this.getSkills();
        },
      });
    } else {
      this.errorAlert('Type nad Name required');
    }
  }

  public getSocialM(): void {
    this.socialMservice.getSocialM().subscribe((socialM) => {
      this.socialM = socialM[0]

    })
  }

  updateSkill(contactForm: FormGroup) {
    if (this.contactFormSkill.valid) {
      this.skillService.updateSkills(contactForm.value).subscribe({
        next: (response: Skills) => {
          this.succesAlert('Update ok');
          this.getSkills();
        },
        error: (error: HttpErrorResponse) => {
          this.errorAlert(error.statusText);
        },
      });
    } else {
      this.errorAlert('Type nad Name required');
    }
  }

  public deleteSkill(id: Number): void {
    this.skillService.deleteSkills(id).subscribe({
      next: (response: void) => {
        this.succesAlert('Delete ok');
        this.getSkills();
      },
      error: (error: HttpErrorResponse) => {
        this.errorAlert(error.statusText);
        this.getSkills();
      },
    });
  }
  // ngFor method
  trackByMethod(index: number, el: any): number {
    return el.id;
  }
  // formMethod SKills
  initFormSkill(): FormGroup {
    return this.fb.group({
      id: [''],
      type: ['', Validators.required],
      img_skill: [''],
      name: ['', Validators.required],
      amount: [''],

      persona_id: [
        sessionStorage.getItem('currentUserId'),
        Validators.required,
      ],
      persona_DNI_persona: [
        sessionStorage.getItem('currentUserDNI'),
        Validators.required,
      ],
    });
  }

  onPatchValueSkill(data: any): any {
    return this.contactFormSkill.patchValue({
      id: data.id,
      type: data.type,
      img_skill: data.img_skill,
      name: data.name,
      amount: data.amount === null ? 0 : data.amount,
    });
  }

  // formMethod Persona

  initFormPersona(): FormGroup {
    return this.fb.group({
      id: [''],
      name_persona: ['', Validators.required],
      surname_persona: ['', Validators.required],
      dni_persona: ['', Validators.required],
      telephone_persona: [''],
      photo_url: [''],
      main_phrase: [''],
      phrase1: [''],
      phrase2: [''],
      phrase3: [''],
    });
  }

  onPatchValuePersona(data: any): any {
    return this.contactFormPersona.patchValue({
      id: data.id,
      name_persona: data.name_persona,
      surname_persona: data.surname_persona,
      dni_persona: data.dni_persona,
      telephone_persona: data.telephone_persona,
      photo_url: data.photo_url,
      main_phrase: data.main_phrase,
      phrase1: data.phrase1,
      phrase2: data.phrase2,
      phrase3: data.phrase3,
    });
  }
}
