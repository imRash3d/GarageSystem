import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  VehicleService } from '../../shared/garage.service';
import { Garage } from '../../shared/garage.module';
import { Router,  Routes, ActivatedRoute, Params } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-garage-form',
  templateUrl: './garage-form.component.html',
  styleUrls: ['./garage-form.component.css']
})
export class GarageFormComponent implements OnInit ,OnDestroy {
editMode=false;
editIndex;
todaysDate;
status;
constructor(private vehicleservie:VehicleService,
private router:Router,
private route:ActivatedRoute,

  ) { }

  
vehicle:Garage=new Garage();
  ngOnInit() {
   this.vehicleservie.vehicle =new Garage();
   this.status=true;
    this.route.params.subscribe(
      (params:Params)=>{
        if(params){
          this.editIndex=params['id'];
          this.editMode=params['id'];
         if(this.editIndex && this.editMode ) 
         this.eidtItem();
        }
 
      
    
      }
    
    );
  }

  saveForm(form:NgForm){
if(this.editMode){
  this.vehicle.customerName = form.value.customerName;
  this.vehicle.id = form.value.id;
  this.vehicle.vhname = form.value.vhname;
  this.vehicle.customerAddress = form.value.customerAddress;
  this.vehicle.releaseDate = form.value.releaseDate;
  const date = new Date();
  this.vehicle.entrydate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDay();
  const r =  new Date(this.vehicle.releaseDate)
  const e=  new Date()
  if((Number(r)-Number(e))>=0){
 var status= true;
 
 }
 else {
status=false
 
 }
 console.log(status);
 this.vehicle.status=status;
 console.log( this.vehicle);
this.vehicleservie.editItem(this.vehicle,this.editIndex);

this.router.navigate([''], { relativeTo: this.route });
form.reset();

}
else {
  this.vehicle.customerName = form.value.customerName;
  this.vehicle.id = 'VH'+ form.value.id;
  this.vehicle.vhname = form.value.vhname;
  this.vehicle.customerAddress = form.value.customerAddress;
  this.vehicle.releaseDate = form.value.releaseDate;
  this.vehicle.status = true;
  const date = new Date();
  this.vehicle.entrydate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDay();
  console.log(this.vehicle)
  this.vehicleservie.addVehicle(this.vehicle);
  this.router.navigate([''], { relativeTo: this.route });
  form.reset();
}
   

   

  }

  eidtItem(){
    const vechileArray=this.vehicleservie.getallvehicle();
      this.vehicleservie.vehicle=vechileArray[this.editIndex];
      //console.log(vechileArray[0])



  }

  ngOnDestroy(){
    
  }

}
