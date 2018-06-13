import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupFormComponent } from './template-driven-forms/signup-form/signup-form.component';
import { SignupReactiveFormComponent } from './reactive-forms/signup-reactive-form/signup-reactive-form.component';

const routes: Routes = [
  {
    path: 'td-form',
    component: SignupFormComponent,
  },
  {
    path: 'dd-form',
    component: SignupReactiveFormComponent ,
  },
  {
    path: '',
    redirectTo: '/td-form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
