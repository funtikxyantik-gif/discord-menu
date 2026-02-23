"use strict";

const linkTags = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
`;

document.head.insertAdjacentHTML('beforeend', linkTags);

const style = document.createElement('style');
style.textContent = `
  html {
    margin: 0;
    padding: 0;
  }

  .menu {
    position: absolute;
    width: 50%;
    height: 35%;
    border-radius: 5px;
    background-color: #2e333f;
    left:25%;
    top:25%;
    font-family: 'DotGothic16';
    user-select: none;
  }

  .menuTitle {
    width: 100%;
    background-color: #2e333f;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 5%;
    border-radius: 5px 5px 0 0;
  }

  .menuTitle > .title {
    color: #aaa;
    font-size: 1vw;
    position: absolute;
    top:20%;
  }

  .menuTitle > .settings {
    width: 1.5vw;
    height: 1.5vw;
    text-align: center;
    color: #aaa;
    font-size: 1.25vw;
    background-color: #1a222b;
    border-radius: 100%;
    line-height: 1.4vw;
    position: absolute;
    top: 20%;
    right: 9%;
  }

  .menuTitle > .settings:hover {
    cursor: pointer;
    color: #CCCC74;
  }

  .menuTitle > .move {
    width: 1.5vw;
    height: 1.5vw;
    text-align: center;
    color: #aaa;
    font-size: 1.25vw;
    background-color: #1a222b;
    border-radius: 100%;
    line-height: 1.4vw;
    position: absolute;
    top:20%;
    right: 5%;
  }

  .menuTitle > .exit {
    width: 1.5vw;
    height: 1.5vw;
    text-align: center;
    color: #aaa;
    font-size: 1.5vw;
    background-color: #1a222b;
    border-radius: 100%;
    line-height: 1vw;
    position: absolute;
    top:20%;
    right: 1%;
  }

  .menuTitle > .exit:hover {
    color: #CC4343;
    cursor: pointer;
  }

  .menuBody {
    width: 95%;
    height: 87%;
    margin-top: 2%;
    margin-left: 2.5%;
    display: flex;
    position: relative;
  }

  .menuBody > .class {
    width: 30%;
    background-color: #1a222b;
    border-radius: 5px;
  }

  .menuBody > .class > .classElement,
  .menuBody > .class > .settingsNav >.classElement {
    color: #aaa;
    background-color: #141a1f;
    border-radius: 5px;
    margin-top: 5%;
    width: 90%;
    text-align: center;
    margin-left: 5%;
    font-size: 1vw;
    cursor: pointer;
  }

  .menuBody > .class > .classElement:hover,
  .menuBody > .class > .settingsNav >.classElement:hover  {
    background-color: #2F3182;
  }

  .menuBody > .class > .classElement.active {
    background-color: #4b4db3;
  }
  
  .menuBody > .class > .settingsNav {
    position: absolute;
    bottom: 0;
    width: 30%;
    margin-bottom: 1%;
  }

  .menuBody > .list {
    margin-left: 1%;
    width: 69%;
    background-color: #1a222b;
    border-radius: 5px;
  }

  .menuBody > .list > .listElementParent {
    display: flex;
    position: relative;
    align-items: center;
    background-color: #141a1f;
    width: 92%;
    margin-left: 3%;
    margin-top: 1%;
    padding: 1%;
    border-radius: 5px;
  }

  .menuBody > .list .listElementParent > .listElement{
    color: #aaa;
    font-size: 1vw;
  }

  .menuBody > .list > .listElementParent > .settings {
    position: absolute;
    font-size: 1.25vw;
    right: 12%;
    color: #aaa;
    cursor: pointer;
    line-height: 1vw;
  }

  .menuBody > .list > .listElementParent > .settings:hover {
    color: #CCCC74;
  }

  .menuBody > .list > .listElementParent > .toggle-label {
    position: absolute;
    right: 2%;
  }

  .menuBody > .list > .descfunc {
    display: flex;
    position: relative;
    align-items: center;
    background-color: #141a1f;
    width: 92%;
    margin-left: 3%;
    margin-top: 1%;
    padding: 1%;
    border-radius: 5px;
    color: #aaa;
    font-size: 1vw;
  }

  .hiddenmenu {
    text-align: center;
    font-size: 24px;
    color: #aaa;
    align-items: center;
    border-radius: var(--radius-sm);
    color: var(--icon-subtle);
    display: flex;
    height: 32px;
    justify-content: center;
    line-height: 0;
    margin: 0;
    position: relative;
    transition: background-color .2s ease;
    width: 32px;
    user-select: none;
  }

  .hiddenmenu-container {
    position: relative;
    display: inline-block;
    visibility: hidden;
  }
  
  .hiddenmenu-container::before {
    content: "Открыть меню";
    position: absolute;
    left: -125%;
    transform: translateY(-125%);
    background-color: #242429;
    filter: brightness(1.18);
    color: white;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 4px;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.15s ease;
    pointer-events: none;
    z-index: 1000;
}

.hiddenmenu-container:hover::before {
    opacity: 1;
    visibility: visible;
}

  .hiddenmenu:hover {
    color: #7c7b7b;
    cursor: pointer;
    background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
    filter: brightness(1.18);
  }
    
  .dragging {
    cursor: move;
    opacity: 0.5;
  }

  .toggle-checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  }

  .toggle-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 1vw;
  }

  .toggle-label:before {
  content: '';
  width: 2.5vw;
  height: 1.25vw;
  background-color: #923333;
  border-radius: 5px;
  transition: background 0.3s;
  }

  .toggle-label:after {
  content: '';
  position: absolute;
  width: 1.25vw;
  height: 1.25vw;
  background-color: white;
  border-radius:5px;
  transition: transform 0.3s;
  }

  .toggle-checkbox:checked + .toggle-label:before {
  background-color: #4CAF50;
  }

  .toggle-checkbox:checked + .toggle-label:after {
  transform: translateX(1.25vw);
  }
`;

document.head.appendChild(style);

var functionlist = ['FileData', 'InvisibleText', 'FakeMute'];
var classesList = ['Global', 'Text', 'Voice'];


// --------------------------- Функции ---------------------------
function getFunctions(func) {
  var classFunc;
  var nameFunc;
  var descFunc;
  switch(func) {
    case 'FileData':
      classFunc = 'Global';
      nameFunc = 'Данные файлов';
      descFunc = 'Изменяет данные файлов';
      break;
    case 'InvisibleText':
      classFunc = 'Text';
      nameFunc = 'Невидимый текст';
      descFunc = 'Делает текст невидимым';
      break;
    case 'FakeMute':
      classFunc = 'Voice';
      nameFunc = 'Фейковый мут';
      descFunc = 'Делает фейковый мут';
      break;
    default:
      classFunc = '';
      nameFunc = '';
      descFunc = ''
      break;
  }
  return [classFunc, nameFunc, descFunc];
}

// --------------------------- Настройки функций ---------------------------

function openSettings(e) {
  clearMenu();
  var main = false;
  title.textContent = 'Настройки';
  switch(e) {
    case 'FileData':
      
      break;
    case 'InvisibleText':
      
      break;
    case 'FakeMute':
      
      break;
    default:
      main = true;
      break;
  }
  if (!main) {
    var [classFunc, nameFunc, descFunc] = getFunctions(e);
    currentClass = classFunc;

    var classElement = document.createElement('div');
    classElement.classList.add('classElement');
    classElement.textContent = nameFunc;

    var funcdesc = document.createElement('div');
    funcdesc.textContent = descFunc;
    funcdesc.classList.add('descfunc');

    classl.appendChild(classElement);
    list.appendChild(funcdesc);
  } else {

  }
  var settingsNav = document.createElement('div');
  settingsNav.classList.add('settingsNav');
  var back = document.createElement('div');
  back.textContent = 'Назад';
  back.classList.add('classElement');
  var resetCurrent = document.createElement('div');
  resetCurrent.textContent = 'Сбросить';
  resetCurrent.classList.add('classElement');
  var resetAll = document.createElement('div');
  resetAll.textContent = 'Сбросить всё';
  resetAll.classList.add('classElement');
  classl.appendChild(settingsNav);
  settingsNav.appendChild(resetAll);
  settingsNav.appendChild(resetCurrent);
  settingsNav.appendChild(back);
  if(!main) {
    back.addEventListener('click', () => {
      loadmenu(currentClass);
  })
  } else {
    back.addEventListener('click', () => {
      loadmenu('Global');
    });
  }
}

var currentClass = 'Global';

var menu = document.createElement('div');
menu.id = "drag-menu";
menu.classList.add('menu');
var menuTitle = document.createElement('div');
menuTitle.classList.add('menuTitle');

var title = document.createElement('div');
title.classList.add('title');
title.textContent = 'Меню';
var settingsmenu = document.createElement('div');
settingsmenu.classList.add('settings');
settingsmenu.textContent = '◉';
var move = document.createElement('div');
move.classList.add('move');
move.textContent = '⇆';
var exit = document.createElement('div');
exit.classList.add('exit');
exit.textContent = 'x';
var menuTitleList = [
  title,
  settingsmenu,
  move,
  exit
];

var menuBody = document.createElement('div');
menuBody.classList.add('menuBody');
var classl = document.createElement('div');
classl.classList.add('class');
var list = document.createElement('div');
list.classList.add('list');
var menuBodyList = [
  classl,
  list
];

var hiddenmenu = document.createElement('div');
hiddenmenu.textContent = '⇩';
hiddenmenu.classList.add('hiddenmenu');

var hiddenmenuContainer = document.createElement('div');
hiddenmenuContainer.classList.add('hiddenmenu-container');

var hiddenmenuParent = document.querySelector('[class^="accountPopoutButtonWrapper"]' ).parentElement.querySelector('[class^="buttons"]');
hiddenmenuParent.prepend(hiddenmenuContainer);
hiddenmenuContainer.appendChild(hiddenmenu);

document.querySelector('html').appendChild(menu);
menu.appendChild(menuTitle);
menuTitleList.forEach((e) => {
  menuTitle.appendChild(e);
})
menu.appendChild(menuBody);
menuBodyList.forEach((e) => {
  menuBody.appendChild(e);
})

settingsmenu.addEventListener('click', ()=> {
  openSettings();
});

function addClasses(e) {
  var classElement = document.createElement('div');
  classElement.classList.add('classElement');
  var classElementText;
  var classid;
  switch(e) {
    case 'Global':
      classElementText = 'Глобально';
      classid = 'classGlobal';
      break;
    case 'Text':
      classElementText = 'Текстовый';
      classid = 'classText';
      break; 
    case 'Voice':
      classElementText = 'Голосовой';
      classid = 'classVoice';
      break;
    default:
      classElementText = 'Глобально';
      classid = 'classGlobal';
      break;
  }
  classElement.id = classid;
  classElement.textContent = classElementText;
  classl.appendChild(classElement);
  classElement.addEventListener('click', () => {
    loadmenu(e);
  });
}

function addFunctions(cl) {
  functionlist.forEach((e) => {
    var listElementParent = document.createElement('div');
    listElementParent.classList.add('listElementParent');
    var listElement = document.createElement('div');
    listElement.classList.add('listElement');
    var settings = document.createElement('div');
    settings.classList.add('settings');
    settings.textContent = '◉';
    var [classFunc, nameFunc, descFunc] = getFunctions(e);
    if(classFunc == cl) {
      list.appendChild(listElementParent);
      listElement.id = e;
      listElement.textContent = nameFunc;
      listElementParent.appendChild(listElement);
      listElementParent.innerHTML = listElementParent.innerHTML+`
						<input type="checkbox" id="${e}Toggle" class="toggle-checkbox">
    					<label for="${e}Toggle" class="toggle-label"></label>`
      listElementParent.appendChild(settings);
      settings.addEventListener('click', ()=> {
        var e = settings.parentElement.getElementsByClassName('listElement')[0].id;
        openSettings(e);
      })
    }
  })
}

function clearMenu() {
  var ce = classl.childElementCount + list.childElementCount;
  if(ce>0) {
    classl.childNodes.forEach((e) => {
      e.remove();
    })
    list.childNodes.forEach((e) => {
      e.remove();
    })
    ce = classl.childElementCount + list.childElementCount;
    if(ce>0)
      clearMenu();
  }
    
}

function loadmenu(cl) {
  title.textContent = 'Меню';
  clearMenu();
  classesList.forEach((e) => {
    addClasses(e);
  });
  addFunctions(cl);
  document.getElementById(`class${cl}`).classList.add('active');
}

loadmenu(currentClass);













var offsetX, offsetY, isDragging = false;

menu.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

move.addEventListener('mousedown', startDragging);
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
        hiddenmenuContainer.style.visibility = "hidden";
    } else {
        menu.style.visibility = "hidden";
        hiddenmenuContainer.style.visibility = "visible";
    }
}

exit.addEventListener('click', () => {
    openMenu()
});

hiddenmenu.addEventListener('click', () => {
    openMenu()
});