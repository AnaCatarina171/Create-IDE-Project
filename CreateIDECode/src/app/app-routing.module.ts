import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IDEDetailsComponent } from './idedetails-component/idedetails-component.component';
import { IDEsComponent } from './ides-component/ides-component.component';

const routes: Routes = [
  {path: '', redirectTo: '/ides', pathMatch: 'full' },
  {path: 'ides', component: IDEsComponent},
  {path: 'ide/create', component: IDEDetailsComponent},
  {path: 'ide/:id', component: IDEDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
