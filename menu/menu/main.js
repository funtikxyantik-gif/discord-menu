"use strict";
const menu = document.getElementById('drag-menu');
var offsetX, offsetY, isDragging = false;

menu.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

menu.querySelector('.menuTitle > .move').addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDragging);

function startDragging(e) {
    isDragging = true;

    const rect = menu.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    menu.classList.add('dragging');
}

function drag(e) {
    if (!isDragging) return;

    menu.style.left = (e.clientX - offsetX) + 'px';
    menu.style.top = (e.clientY - offsetY) + 'px';
    menu.style.position = 'absolute';
}

function stopDragging() {
    isDragging = false;
    menu.classList.remove('dragging');
}

var isOpenMenu = true;

function openMenu() {
    isOpenMenu = !isOpenMenu
    if(isOpenMenu) {
        menu.style.visibility = "visible";
        hiddenmenu.style.visibility = "hidden";
    } else {
        menu.style.visibility = "hidden";
        hiddenmenu.style.visibility = "visible";
    }
}

const exit = document.getElementsByClassName('exit')[0];
exit.addEventListener('click', () => {
    openMenu()
});

const hiddenmenu = document.getElementsByClassName('hiddenmenu')[0];
hiddenmenu.addEventListener('click', () => {
    openMenu()
});

const allsettings = document.getElementsByClassName('settings');
allsettings.array.forEach(e => {
    if(e.parentElement.classList == 'menuTitle') {
        e.addEventListener('click', () => {
            settings('menu');
        })
    } else {
        e.addEventListener('click', () => {
            settings(e.parentElement.querySelector('div').id);
        })
    }
});

function settings(e) {
    switch(e) {
        case 'menu':
            
            break;
        default:
            
            break;
    }
}