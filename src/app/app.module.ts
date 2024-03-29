import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainSidemenuComponent } from './main-sidemenu/main-sidemenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormsComponent } from './mat-forms/mat-forms.component';
import { MatTablesComponent } from './mat-tables/mat-tables.component';
import { MatStepperComponent } from './mat-stepper/mat-stepper.component';
// import { DataTableModule } from "angular-6-datatable";
import { DataTableModule } from 'ng-angular8-datatable';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonComponent } from './common/common.component';
import { SharedService } from './shared.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainSidemenuComponent,
    DashboardComponent,
    SettingsComponent,
    FormsComponent,
    TablesComponent,
    MatFormsComponent,
    MatTablesComponent,
    MatStepperComponent,
    LoginComponent,
    SignupComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    BrowserAnimationsModule,
    MatSliderModule,
    DataTableModule
  ],
  providers: [
    SharedService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
