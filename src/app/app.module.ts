import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULES
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


// PAGES
import { AppComponent } from './app.component';
import { HomepageComponent } from '../modules/homepage/homepage.component';

// ROUTES
const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
