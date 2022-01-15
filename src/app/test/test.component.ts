import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onModalOpenClick(modalRef: ModalComponent): void {
    modalRef.modalService.open();
  }
}
