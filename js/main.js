const View = require('./ttt-view.js');
const Game = require('./game.js');

$( () => {
  const $elem = $('.ttt');
  const game = new Game();
  new View(game, $elem);
});
