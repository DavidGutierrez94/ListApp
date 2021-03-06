import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteService } from '../../services/notes.service';
import { DetailPage } from '../detail/detail';
//import {VerifyPhonePage} from '../verify-phone/verify-phone';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 notes=[];
 @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, public noteService:NoteService) {
  noteService.getNotes()
  .valueChanges().subscribe(notes=> {
   
      this.notes=notes;
  
});
      
    }

  public goToDetail(id){
    this.navCtrl.push(DetailPage,{id:id});
  }
  public goToVerify(){
   // this.navCtrl.push(VerifyPhonePage);
  }
  public createNote(){
    this.navCtrl.push(DetailPage,{id:0});
  }
}
