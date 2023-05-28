const GetNotes = () => {
    let notes_element = document.querySelector(".notes");
    notes_element.innerHTML = " "
    fetch('/get/').then(res=>res.json()).then(data => {
        for(let x in data){
            let title = data[x].note_title;
            let content = data[x].note_content;
            let color = data[x].note_color;
            let pin = data[x].note_pin;
            let key = data[x].key;

            let note_wrapper = document.createElement('div');
            note_wrapper.setAttribute("class",'note-wrapper mb-2 rounded border '+key);
            note_wrapper.style.backgroundColor = color;

            let editor_edit = document.createElement("div");
            editor_edit.setAttribute('class','editor-edit p-2 rounded-top');
            editor_edit.innerHTML = `<div class="d-flex justify-content-between align-content-center">
            <input
              type="text"
              class="note-title"
              placeholder="Title"
              title="Note Title"
              value='${title}'
            />
            <ion-icon name="pricetag-outline" title="Pin" data-toogler='${pin}' ></ion-icon>
          </div>
          <div
            class="note-content mt-2"
            contenteditable="true"
            title="Note Content"
          >
            ${content}
          </div>`;
            note_wrapper.appendChild(editor_edit)

            let editor_tools = document.createElement("div");
            editor_tools.setAttribute("class", 'editor-tools p-2 rounded-bottom');
            editor_tools.innerHTML = `<div class="d-flex justify-content-start align-items-center text-secondary">
            <ion-icon name="color-palette-outline" title="Color Palette"></ion-icon>
            <ion-icon name="save-outline" title="Save"></ion-icon>
            <ion-icon name="trash" class='note-trash' title="More" dataset-key='${key}' ></ion-icon>
          </div>`;
            note_wrapper.appendChild(editor_tools);

            let tools_wrapper = document.createElement('div');
            tools_wrapper.setAttribute("class",'tools-wrapper bg-white shadow mt-1 rounded');
            tools_wrapper.innerHTML = ``;
            note_wrapper.appendChild(tools_wrapper);

            notes_element.prepend(note_wrapper);
        }
    })
};

export { GetNotes };
