import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { ModalModule } from '../modal/modal.module';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
]

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ModalModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexModule { }
