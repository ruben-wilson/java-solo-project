const NotesModel = require("./notesModel");
const Model = new NotesModel();
// const fs = require("fs");

class NotesView {
	constructor(model) {
		this.model = model;
		this.bodyEl = document.querySelector("body");
	}

	displayNotes() {
		for (const e of this.model.getNotes()) {
			this.addNoteDiv(e);
		}
	}

	addNoteDiv(string) {
		let div = document.createElement("div");
		let p = document.createElement("p");
		div.append(string, p);
		this.bodyEl.append(div);
	}
}

module.exports = { NotesView, NotesModel };
