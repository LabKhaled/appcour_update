import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../Services/appareil.service';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  appareils:any[];


  constructor(private appareilServ: AppareilService)
  {    
       
  
  }

  ngOnInit(){

    this.appareils=this.appareilServ.appareils;


  }
  Touteteindre(){
    this.appareilServ.switchOffAll();
    
  }

  Toutallumer(){

    this.appareilServ.switchOnAll();
     
   } 

 
}
