import { Injectable } from "@angular/core";
import { Garage } from "./garage.module";
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { BehaviorSubject } from "rxjs";

@Injectable()

export class VehicleService {
  


    private vehicleLIst:Garage[]=[];
    vehicle:Garage= new Garage();
    v1:Garage= new Garage();
    v2:Garage= new Garage();
    constructor() {

        // this.v1.id="vh-101";
        // this.v1.vhname="eereer";
        // this.v1.customerName="";
        // this.v1.customerAddress="Dhaka Cant ";
        // this.v1.entrydate="2018-4-3";
        // this.v1.releaseDate="2018-4-5";
        // this.v1.status=true;

        // this.v2.id="vh-102";
        // this.v2.vhname="rerer";
        // this.v2.customerName="boltu";
        // this.v2.customerAddress="Dhaka Cant ";
        // this.v2.entrydate="2018-1-3";
        // this.v2.releaseDate="2018-3-3";
        // this.v2.status=false;
       
        // this.vehicleLIst.push(this.v1);
        // this.vehicleLIst.push(this.v2);

    }
    addVehicle(vehicle) {

        if(localStorage.getItem("garage")===null){
            localStorage.setItem("garage",JSON.stringify(this.vehicleLIst));
        }
        else {
            this.vehicleLIst=JSON.parse(localStorage.getItem("garage"));
            this.vehicleLIst.push(vehicle);
            localStorage.setItem("garage",JSON.stringify(this.vehicleLIst))
        }
    }



    getallvehicle() {
        if(localStorage.getItem("garage")!==null){
            this.vehicleLIst=JSON.parse(localStorage.getItem("garage"));
        }
        return this.vehicleLIst;
    }



    editItem(vehicle,index){
        if(localStorage.getItem("garage")!==null){
            this.vehicleLIst=JSON.parse(localStorage.getItem("garage"));
        }
        console.log(vehicle);
    this.vehicleLIst[index]=vehicle;
    localStorage.setItem("garage",JSON.stringify(this.vehicleLIst))
    
    }


    delteitem(index){
        this.vehicleLIst=JSON.parse(localStorage.getItem("garage"));
        this.vehicleLIst.splice(index,1);
        localStorage.setItem("garage",JSON.stringify(this.vehicleLIst))
       
    }

}