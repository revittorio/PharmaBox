import { PharmaboxComponent } from './pharmabox/pharmabox.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutComponent } from './about/about.component';
import { SectionColor } from './model/model';
import { TherapyComponent } from './therapy/therapy.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: "error",
    component: ErrorPageComponent,
    data: { breadcrumb: { text: "Error" } },
  },
  {
    path: "about",
    component: AboutComponent,
    data: { breadcrumb: { text: "About" } },
  },
  {
    path: "pharmabox",
    component: PharmaboxComponent,
    data: { breadcrumb: { text: "Pharma Box" } },
  },
  {
    path: "therapy",
    component: TherapyComponent,
    data: { breadcrumb: { text: "Therapy", color: SectionColor.Theraphy } },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
