import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrittersComponent } from './writters/writters.component';
import { WritterDetailComponent } from './writter-detail/writter-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'writters', component: WrittersComponent },
  { path: 'detail/:id', component: WritterDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
