import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalService } from './modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [ModalService]
})
export class ModalComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  close(): void {
    this.modalService.close();
  }

  get show(): Subject<boolean> {
    return this.modalService.show;
  }

}
