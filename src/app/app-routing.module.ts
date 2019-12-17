import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { MatFormsComponent } from './mat-forms/mat-forms.component';
import { MatTablesComponent } from './mat-tables/mat-tables.component';
import { MainSidemenuComponent } from './main-sidemenu/main-sidemenu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonComponent } from './common/common.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: MainSidemenuComponent
  // },
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'signup',
  //   component: SignupComponent
  // },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  },
  {
    path: 'material-forms',
    component: MatFormsComponent
  },
  {
    path: 'material-tables',
    component: MatTablesComponent
  },
  {
    path: 'material-stepper',
    component: MatTablesComponent
  },
  {
    path: '',
    component: CommonComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
