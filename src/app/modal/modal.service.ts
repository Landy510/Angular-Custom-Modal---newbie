// import { Injectable } from '@angular/core';

import { Subject } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
export class ModalService {
  show = new Subject<boolean>();

  constructor() { }

  open(): void {
    this.show.next(true);
  }

  close(): void {
    this.show.next(false);
  }
}
