import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../shared/garage.service';
import { Garage } from '../../shared/garage.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
icon=false;
statusColor=true;
vehicleList:Garage[]=[]; 
tepmpArray=[]; //temp array for sorting 





  constructor(private vehicleservie:VehicleService,
    private route:Router) { 
    this.tepmpArray=this.vehicleList;

  }

  ngOnInit() {
    this.getallVehicle();
this.tepmpArray=this.vehicleList;



   
  }

  onSearch(e){

    const text=e.target.value.toLowerCase();
if(text){
  this.icon=true;
}
else{
  this.icon=false;
}
this.vehicleList=[];
  for(let i=0;i<this.tepmpArray.length;i++){
 var date = (this.tepmpArray[i].entrydate)
     if(
       (this.tepmpArray[i].vhname.toLowerCase().indexOf(text)>-1)
       || 
       (this.tepmpArray[i].id.toLowerCase().indexOf(text)>-1)
       ||
       (this.tepmpArray[i].customerName.toLowerCase().indexOf(text)>-1)
   
    )
     {
      this.vehicleList.push(this.tepmpArray[i]);
   
     }
    
  }
  }


  filter(e){
    const filter=e.target.value;

if(filter=='edate'){
  this.getallVehicle();
  this.vehicleList.sort(function(v1,v2):any{
if(v1.entrydate>v2.entrydate) return 1;
else return -1
  })
}

if(filter=='ldate'){
  this.getallVehicle();
  this.vehicleList.sort(function(v1,v2):any{
if(v1.releaseDate>v2.releaseDate) return 1;
else return -1
  })
}


if(filter=='waiting'){
  this.getallVehicle();
 this.tepmpArray=this.vehicleList.filter(function(item){
if(item.status==true){
  return item;
}
 }) 
this.vehicleList=this.tepmpArray;

}

if(filter=='release'){
  this.getallVehicle();
  this.tepmpArray=this.vehicleList.filter(function(item){
 if(item.status==false){
   return item;
 }
  }) 
 this.vehicleList=this.tepmpArray;
 
 }
 if(filter==''){
  this.getallVehicle();
 }
    
  }


  getallVehicle() {
    this.vehicleList=this.vehicleservie.getallvehicle();
    
 
  }

  deleteitem(index){
    this.vehicleList=JSON.parse(localStorage.getItem("garage"));
        this.vehicleList.splice(index,1);
        localStorage.setItem("garage",JSON.stringify(this.vehicleList));
        return this.vehicleList;
    
  }

  editItem(index){
this.route.navigate(['home/edit/'+index]);
  }

}
