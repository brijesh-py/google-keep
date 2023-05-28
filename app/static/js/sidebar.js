const Sidebar = () => {

// sidebar toggler
const sidebar_toggler = document.querySelector(".sidebar-toggler");
const sidebar = document.querySelector('.sidebar');

sidebar_toggler.addEventListener('click',()=>{
    sidebar.classList.toggle('show-sidebar');
});

const notes_grid = document.querySelector('.notes');
const notes_grid_toggler = document.querySelector(".grid-toggler");
notes_grid_toggler.addEventListener("click",()=> {
    notes_grid.classList.toggle('grid')
})
};

export {Sidebar};