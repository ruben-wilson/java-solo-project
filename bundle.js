(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(string) {
          this.notes.push(string);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // NotesView.js
  var require_NotesView = __commonJS({
    "NotesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var Model = new NotesModel2();
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.bodyEl = document.querySelector("body");
          this.button = document.querySelector("#show-message-button");
          this.button.addEventListener("click", () => {
            this.createNote(document.querySelector("#message-input").value);
          });
        }
        loadNotes() {
          for (const e of this.model.getNotes()) {
            this.CreateDiv(e);
          }
        }
        CreateDiv(string) {
          let div = document.createElement("div");
          div.id = "message";
          div.textContent = string;
          this.bodyEl.append(div);
        }
        createNote(string) {
          this.model.addNote(string);
          this.CreateDiv(string);
          document.querySelector("#message-input").value = null;
        }
      };
      module.exports = { NotesView: NotesView2, NotesModel: NotesModel2 };
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesViewFile = require_NotesView();
  var NotesView = NotesViewFile.NotesView;
  var model = new NotesModel();
  model.addNote("new note1");
  model.addNote("new note2");
  var view = new NotesView(model);
  view.loadNotes();
})();
