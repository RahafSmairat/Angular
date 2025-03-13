import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BindingComponent } from './binding/binding.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "footer", component: FooterComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "binding", component: BindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
