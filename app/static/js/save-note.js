import { GetNotes } from "./get-note.js";

const SaveNote = () => {
  const save_note = document.querySelector(".save-note");
  // save note
  save_note.addEventListener("click", () => {
    let note_title = document.querySelector(".note-title").value;
    let note_content = document.querySelector(".note-content");
    let note_pin = document.querySelector(".note-pin");
    let note_color = document.querySelector(".editor");

    if (confirm("Are You Save Now?")) {
      $.ajax({
        url: "/new/",
        type: "POST",
        data: {
          "note-title": note_title,
          "note-content": note_content.innerHTML,
          "note-color": note_color.style.backgroundColor,
          "note-pin": note_pin.dataset.toggeler,
        },
        success: (response) => {
          console.log(response);
          GetNotes();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  });
};
export { SaveNote };
