const Game = require("./game.js");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('li').on("click", event => {
      const box = event.currentTarget;
      const $box = $(box);
      this.game.playMove($box.data("pos"));
      this.makeMove($box);
    });
    //
  }

  makeMove($square) {
    let mark = this.game.board.grid[$square.data("pos")[0]]
    [$square.data("pos")[1]];
    console.log(mark);
    $square.text(mark);
    $square.css("background-color", "white")
  }

  setupBoard() {
    const $ul = $("<ul>");
    for (let i = 0; i < 3; i++) {
      // $ul.css("clear", "left");
      for (let j = 0; j < 3; j++) {
        const $li = $("<li>");

        $li.data("pos", [i,j]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
