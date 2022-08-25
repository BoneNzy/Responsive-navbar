const list = document.querySelector(".nav-container");
const icon =document.querySelector(".menu-icon")
const menu = document.querySelector("#menu");

menu.addEventListener('click', () => {
    const content = list.getAttribute("data-visible");

    if (content == "false"){
        list.setAttribute('data-visible', true);
        icon.setAttribute('data-visible', true);
    }
    else {
        list.setAttribute('data-visible', false);
        icon.setAttribute('data-visible', false);
    }
})