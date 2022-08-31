const NotesModel = require("./notesModel.js");
const NotesViewFile = require("./NotesView.js");
const NotesView = NotesViewFile.NotesView;

const model = new NotesModel();
model.addNote("new note1");
model.addNote("new note2");
// console.log(model.getNotes());
const view = new NotesView(model);
view.loadNotes();

