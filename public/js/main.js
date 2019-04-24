'use strict'

const navElem = document.querySelector('nav');
const colorArr = ['#b91e28','#ce414a','#e21d2a'];
const sectionH2Elem = document.querySelector('main section h2');
const fontSizeArr = ['2em','4em','6em'];
const fontFamArr = ['ZCOOL KuaiLe','Poppins'];

let colorEffect = setInterval(function(){

  const randomColor = Math.floor(Math.random()*colorArr.length);
  navElem.style.background = colorArr[randomColor];
},100);
let randowmH2Effect = setInterval(function(){

  const randomFontSize = Math.floor(Math.random()*fontSizeArr.length);
  sectionH2Elem.style.fontSize = fontSizeArr[randomFontSize];

  const randomFontFam = Math.floor(Math.random()*fontFamArr.length);
  sectionH2Elem.style.fontFamily = fontFamArr[randomFontFam];

},100);
