import { ExploreProgram } from './models/explore-program';
import { ExploreProduct } from './models/explore-product';
import { ReportsComponent } from './reports/reports.component';
import { TechnologyComponent } from './technology/technology.component';
import { ExploreTeamsComponent } from './explore-teams/explore-teams.component';
import { ExploreProjectsComponent } from './explore-projects/explore-projects.component';
import { ExploreLocationsComponent } from './explore-locations/explore-locations.component';
import { TeamsComponent } from './teams/teams.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { ExploreComponent} from './explore/explore.component';


import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExploreProgramComponent } from './explore-program/explore-program.component';
import { ExploreProductComponent } from './explore-product/explore-product.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'explore/locations', component: ExploreLocationsComponent },
  { path: 'explore/projects', component: ExploreProjectsComponent},
  { path: 'explore/teams', component: ExploreTeamsComponent},
  { path: 'explore/programs', component: ExploreProgramComponent },
  { path: 'explore/products', component: ExploreProductComponent},
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
