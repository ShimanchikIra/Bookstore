import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import { AuthorizationComponent } from './authorization/authorization.component';
import { SignInComponent } from './authorization/sign-in/sign-in.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RestorePasswordComponent } from './authorization/restore-password/restore-password.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FixDirective } from './fix.directive';


const itemRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'restore-password', component: RestorePasswordComponent}
];
const appRoutes: Routes = [
  { path: 'authorization', component: AuthorizationComponent, children: itemRoutes}
];
@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    SignInComponent,
    SignUpComponent,
    RestorePasswordComponent,
    HeaderComponent,
    FooterComponent,
    FixDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
