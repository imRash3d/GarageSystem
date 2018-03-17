import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GarageFormComponent } from './garage/garage-form/garage-form.component';
import { HomeComponent } from './garage/home/home.component';
import { DetailsComponent } from './garage/details/details.component';
import { GarageComponent } from './garage/garage.component';
import { VehicleService } from './shared/garage.service';




const routing:Routes =[
{path:'', component:HomeComponent,},
{path:'home',component:HomeComponent},
{path:'new',component:GarageFormComponent},
{path: 'home/edit/:id' ,component:GarageFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GarageComponent,
    GarageFormComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routing)
    
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
