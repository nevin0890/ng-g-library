import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddlibComponent } from './addlib/addlib.component';
import { ViewlibComponent } from './viewlib/viewlib.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbookComponent } from './searchbook/searchbook.component';

const routes: Routes = [
  {path:'',component:ViewlibComponent},
  { path: 'addlib', component: AddlibComponent },
  {path:'searchbook',component:SearchbookComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddlibComponent,
    ViewlibComponent,
    NavbarComponent,
    SearchbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
