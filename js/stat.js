'use strict';
/**
*Данная функция рисует область на полотне.
*@param ctx  канвас на котором рисуется игра.
*@param x {number} расстояние по оси x
*@param y {number} расстояние по оси y
*@param width {number} ширина области
*@param height {number} высота области
*@param color {string} цвет области
*/
function drawRect(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

/**
*Данная функция рисует текст на полотне.
*@param ctx  канвас на котором рисуется игра.
*@param text {string}  текст, которые необходимо дабавить.
*@param x {number} расстояние по оси x
*@param y {number} расстояние по оси x
*/
function drawText(ctx,text, x, y) {
  ctx.fillStyle = 'black';
  ctx.fillText(text, x, y);
}

/**
*Определение процентного соотношения от максимального значения.
*@param value {number} значение
*@param max {number} максимальное значение
*/
function getPercent(value, max) {
  return value / max;
}

/**
*Данная функция будет вызываться при выстреле в забор. Это обозначает, что пользователь прошел уровень.
*@param ctx  канвас на котором рисуется игра.
*@param names  массив, с именами игроков прошедших уровень
*@param times  массив содержит время прохождения уровня
*/
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'black';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px Tahoma';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 150, 50);
  ctx.fillText('Список результатов:', 150, 100);

  var columnHeight = 150;
  var columnWidth = 40;
  var wordSpace = columnWidth + 50;
  var maxTime = Math.max.apply(null, times);
  var height;
  var color;
  var you = 'Вы';

  for (var i = 0; i < names.length; i++) {
    height = Math.round(getPercent(times[i], maxTime) * columnHeight);
    console.log('Time:'+times[i]+' '+ 'Height:' + height + ' '+  'Names:' + names[i])
    color = you !== names[i] ? 'rgba(0, 0, 255, ' + Math.random() + ')' : 'rgba(255, 0, 0, 1)';
    drawText(ctx, names[i], 140 + (i * wordSpace), 250);
    drawRect(ctx, 140 + (i * wordSpace), 130 + (100 - height), columnWidth, height, color);

  }
};
