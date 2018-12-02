'use strict';

var settingsHero = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
/**
*Данная функция возвращает рандомное число в промежутке чисел от min до max.
*@param {number} min минимально значене
*@param {number} max максимальное значение
*@return {number} rand рандомное число в пределе от минимального до максимального значения
*/
function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

function creatingArrayHeroes(n) {
  var heroesArray = [];
  var names = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var surnames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  for (var i = 0; i < n; i++) {
    var fullName = names[randomInteger(0, names.length - 1)] + ' ' + surnames[randomInteger(0, surnames.length - 1)];
    heroesArray[i] = {
      name: fullName,
      coatColor: coatColors[randomInteger(0, coatColors.length - 1)],
      eyesColor: eyesColors[randomInteger(0, eyesColors.length - 1)],
    };
  }
  return heroesArray;
};

/**
*Данная функция добавляет аналогичных персонажей в блок setup-similar
*@param {number} n колличество карточке с персонажем
*/
var addingSimilarHeroes = function (n) {
  for (var i = 0; i < n; i++) {
    var arrayHeroes = creatingArrayHeroes(n);
    var arrayHeroesItem = arrayHeroes[i];
    var hero = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var list = document.querySelector('.setup-similar-list');
    var coat = hero.querySelector('.wizard-coat');
    var eyes = hero.querySelector('.wizard-eyes');
    var name = hero.querySelector('.setup-similar-label');
    var element;
    eyes.setAttribute('style', 'fill:' + arrayHeroesItem.eyesColor);
    coat.setAttribute('style', 'fill:' + arrayHeroesItem.coatColor);
    name.textContent = (arrayHeroesItem.name);
    element = hero.cloneNode(true);
    list.appendChild(element);
  }
}

settingsHero.classList.remove('hidden');
setupSimilar.classList.remove('hidden');
addingSimilarHeroes(4);
