import { ExploreTeamsComponent } from './explore-teams/explore-teams.component';
import { ExploreProjectsComponent } from './explore-projects/explore-projects.component';
import { ExploreLocationsComponent } from './explore-locations/explore-locations.component';
import { TeamsComponent } from './teams/teams.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { ExploreComponent} from './explore/explore.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'explore/locations', component: ExploreLocationsComponent },
  { path: 'explore/projects', component: ExploreProjectsComponent},
  { path: 'explore/teams', component: ExploreTeamsComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
