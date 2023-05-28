const UtilityHelper = () => {
  const colors = [
    "#f9ca24",
    "#f0932b",
    "#eb4d4b",
    "#6ab04c",
    "#c7ecee",
    "#22a6b3",
    "#4834d4",
    "#be2edd",
    '#4834d4',
    '#D6A2E8',
    '#535c68',
    '#182C61',

  ];
  // selectors
  const tools_wraper = document.querySelector(".tools-wraper .container");
  const color_palette_toggler = document.querySelector('.color-palette-toggler');
  const editor = document.querySelector('.editor');
  const note_pin = document.querySelector(".note-pin");

  //   color picker
  const color_picker = document.createElement("div");
  color_picker.setAttribute("class", "color-picker row p-2");
  for (let x in colors) {
    const color_picker_item = document.createElement("div");
    color_picker_item.setAttribute("class", "color-picker-item border");
    color_picker_item.style.backgroundColor = colors[x];
    color_picker_item.title = colors[x]
    color_picker.appendChild(color_picker_item);
  }
  color_palette_toggler.addEventListener("click",() => {
    if(color_palette_toggler.dataset.toggler == 'on'){
        tools_wraper.appendChild(color_picker);
        color_palette_toggler.dataset.toggler = 'off'
    }else{
      tools_wraper.innerHTML = ""
      color_palette_toggler.dataset.toggler = 'on'
    }
  get_color();
  });
// get color
  const get_color = () => {
    const colors_array = document.querySelectorAll(".color-picker-item");
    colors_array.forEach(element => {
      element.addEventListener("click",() => {
        editor.style.backgroundColor = element.style.backgroundColor;
      })
    })
  };
  note_pin.addEventListener('click',() => {
    if(note_pin.dataset.toggler=='on'){
      note_pin.dataset.toggler = 'off'
    }else{
      note_pin.dataset.toggler = 'on'
    }
  })
};
export { UtilityHelper};
