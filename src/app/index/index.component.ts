import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onModalOpenClick(modalRef: ModalComponent): void {
    modalRef.modalService.open();
  }
}
