'use strict';

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

  function drawRect(ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  function drawText(ctx, text, x, y) {
    ctx.fillStyle = 'black';
    ctx.fillText(text, x, y);
  }
  function genOpacity() {
    return Math.random();
  }
  function getPercent(value, max, colHeight) {
    return value / max * colHeight;
  }

  for (var i = 0; i < names.length; i++) {
    height = Math.round(getPercent(times[i], maxTime, columnHeight));
    color = you !== names[i] ? 'rgba(0, 0, 255, ' + genOpacity() + ')' : 'rgba(255, 0, 0, 1)';
    drawText(ctx, names[i], 140 + (i * wordSpace), 250);
    drawRect(ctx, 140 + (i * wordSpace), 130 + (100 - height), columnWidth, height, color);

  }
}
