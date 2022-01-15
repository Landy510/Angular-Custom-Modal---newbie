import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { ModalModule } from '../modal/modal.module';
const routes: Routes = [
  {
    path: '',
    component: TestComponent
  }
]


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    ModalModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModule { }
