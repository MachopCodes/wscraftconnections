import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { BrandsComponent } from './core/brands/brands.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  {
    path: 'brands',
    component: BrandsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
