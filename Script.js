const SidebarButton = document.getElementById("sidebar-button")
const Sidebar = document.getElementById("Sidebar")

SidebarButton.addEventListener('click', ()=>{
    Sidebar.classList.toggle("active")
})


