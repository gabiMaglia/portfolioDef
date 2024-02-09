import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-gallery-modal',
  templateUrl: './image-gallery-modal.component.html',
  styleUrls: ['./image-gallery-modal.component.css']
})
export class ImageGalleryModalComponent implements OnInit {

  @Input() images: string[] = [];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
   
  }

  closeModal() {
    this.activeModal.dismiss('Cross click');
  }
}
