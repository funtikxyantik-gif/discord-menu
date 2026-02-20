"use strict";
const style = document.createElement('style');
style.textContent = `
  body {
	transition: .2s;
  }
`;

document.head.appendChild(style);

var menu = document.createElement('div');
var menuTitle = document.createElement('div');
var menuBody = document.createElement('div');

document.querySelector('html').appendChild(menu);
menu.appendChild(menuTitle);
menuTitle.appendChild(menuBody);