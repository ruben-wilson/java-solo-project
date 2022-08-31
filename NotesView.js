const NotesModel = require("./notesModel");
const Model = new NotesModel();
// const fs = require("fs");

class NotesView {
	constructor(model) {
		this.model = model;
		this.bodyEl = document.querySelector("body");
    this.button = document.querySelector('#show-message-button')
    this.button.addEventListener('click', () =>{ this.createNote(document.querySelector('#message-input').value)});
	}

	loadNotes(){
		for (const e of this.model.getNotes()) {
			this.CreateDiv(e);
		}
	}



	// loadNotes(cycles through array of saved notes)
	// get the note content, use it in 2 ways: add to model, and create div 
	// displayNote(call CreateDiv on most recent note)
  
	// add new note (content of new note ) { call createDiv + displayNewNote, call some method calling addNote }

	CreateDiv(string) {
		let div = document.createElement("div");
		div.id = 'message';
    div.textContent = string;
		this.bodyEl.append(div);
	}
	
  createNote(string){
		this.model.addNote(string);
		this.CreateDiv(string);
    document.querySelector('#message-input').value = null;
  }

}

module.exports = { NotesView, NotesModel };
