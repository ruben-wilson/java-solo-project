/**
 * @jest-environment jsdom
 */
const fs = require("fs");

const NotesViewFile = require("./NotesView");
const NotesView = NotesViewFile.NotesView;
const Model = NotesViewFile.NotesModel;

// module.exports = { NotesView, NotesModel };

describe("notes view", () => {
	// beforeEach(() => {

	//   const view = new NotesView(model)
	// });

	it("lists all notes with divs of each note", () => {
		const model = new Model();
    document.body.innerHTML = fs.readFileSync('./index.html')
		model.addNote("note1");
		model.addNote("note2");
		model.addNote("note3");
		model.addNote("note4");
		model.addNote("note5");
		model.addNote("note6");
		const view = new NotesView(model);
		view.displayNotes();
    console.log(document.querySelector("div").textContent)
		expect(document.querySelectorAll("div").length).toEqual(6);
	});
});
