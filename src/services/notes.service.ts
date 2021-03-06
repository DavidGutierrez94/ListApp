import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';



@Injectable()
export class NoteService{
    constructor(public afDB:AngularFireDatabase){}
 
   
    numero ={numero:null, estado: 0};
    public getNotes(){
        return this.afDB.list('notas/');
    }
    public getNote(id){
    //return this.notes.filter(function(e, i){ return e.id == id})[0]|| {id: null, title: null, description: null};
    return this.afDB.object('notas/'+id);
}

    public createNote(note){
       // this.notes.push(note);
       this.afDB.database.ref('notas/'+note.id).set(note);
       
    }
    public editNote(note){
        /*for(let i=0; i<this.notes.length;i++){
            if (this.notes[i].id == note.id){
                this.notes[i] = note;
            }
            
        }*/
        this.afDB.database.ref('notas/'+note.id).set(note);
    }
    public deleteNote(note){
       /* for(let i=0; i<this.notes.length;i++){
            if (this.notes[i].id == note.id){
                this.notes.splice(i,1);
            }
            
        }*/
        this.numero.numero = note.description;
        this.afDB.database.ref('numero/').set(note.description);

        this.afDB.database.ref('notas/'+note.id).remove();
    }
}
