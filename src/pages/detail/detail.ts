import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../services/notes.service';
import { subscribeOn } from 'rxjs/operator/subscribeOn';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note={id:null, title:null, description: null};
  id =null;
  show=true;
  constructor(public navCtrl: NavController, public navParams: NavParams,public notesService: NoteService) {
    this.id = navParams.get('id');
    if(this.id != 0){
 
     notesService.getNote(this.id)
     .valueChanges().subscribe(note=> {
   
      this.note=note;
  
});
     
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  addNote(){
    if(this.id != 0){
      this.notesService.editNote(this.note);
      alert('Numero editado con exito');
    }
    else{
      this.note.id = Date.now();
      this.notesService.createNote(this.note);
      alert('Numero guardado con exito');
  
    }
    this.navCtrl.pop();
   
  }
  deleteNote(){
    this.notesService.deleteNote(this.note);
    alert('Orden enviada con exito');
    this.navCtrl.pop();
  }

}