const NotesModel = require("./notesmodel.js");

describe("notesModel", () => {
	it("no notes added and returns []", () => {
		const model = new NotesModel();
		expect(model.getNotes()).toEqual([]);
	});

	it("it adds one note and returns it", () => {
		const model = new NotesModel();
		model.addNote("new note");
		expect(model.getNotes()).toEqual(["new note"]);
	});

	it("adds and gets back second note", () => {
		const model = new NotesModel();
		model.addNote("new note");
		model.addNote("second note");
		expect(model.getNotes()).toEqual(["new note", "second note"]);
	});

	it("reset empties the list of notes", () => {
		const model = new NotesModel();
		model.addNote("new note");
		model.addNote("second note");
		model.reset();
		expect(model.getNotes()).toEqual([]);
	});
});
