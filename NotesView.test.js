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
		view.loadNotes();

		expect(document.querySelectorAll("div").length).toEqual(7);
	});

  it("add a note to html", () => {
		const model = new Model();
    document.body.innerHTML = fs.readFileSync('./index.html')
		const view = new NotesView(model);

    const inputField = document.querySelector("#message-input")
    inputField.value = 'input 1';
    const showMessage = document.querySelector("#show-message-button")
    showMessage.click();


		expect(document.querySelector('#message').textContent).toEqual('input 1');
	});

it("only adds an input once", () => {
	const model = new Model();
    document.body.innerHTML = fs.readFileSync('./index.html')
		const view = new NotesView(model);
		
    const inputField = document.querySelector("#message-input")
    inputField.value = 'input 1';
    const showMessage = document.querySelector("#show-message-button")
    showMessage.click();
    showMessage.click();
		expect(document.querySelector('#message').textContent).toEqual('input 1');
	});
	
  it("empty input adds and displays nothing", () => {
	const model = new Model();
    document.body.innerHTML = fs.readFileSync('./index.html')
		const view = new NotesView(model);
		
    const inputField = document.querySelector("#message-input")
    inputField.value = null;
    const showMessage = document.querySelector("#show-message-button")
    showMessage.click();
    showMessage.click();

		expect(document.querySelector('#message')).toBeNull()
	});
});
