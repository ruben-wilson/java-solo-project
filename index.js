const NotesModel = require("./notesModel.js");

const model = new NotesModel();
model.addNote("new note1");
model.addNote("new note2");
console.log(model.getNotes());
