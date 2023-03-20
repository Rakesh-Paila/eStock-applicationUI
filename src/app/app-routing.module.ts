import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'company', component:CompanydetailsComponent},
  // otherwise redirect to home
  { path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
