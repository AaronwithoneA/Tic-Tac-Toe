const Game = require("./game.js");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      const box = event.currentTarget;
      const $box = $(box);

      this.makeMove($box);
    });
    //
  }

  makeMove($square) {
    try {
      this.game.playMove($square.data("pos"));
    } catch (e) {
      alert("Invalid move! Try again.");
      return;
    }

    let mark = this.game.board.grid[$square.data("pos")[0]]
    [$square.data("pos")[1]];
    console.log(mark);
    $square.text(mark);
    $square.css("background-color", "white");
    if (this.game.isOver()) {
      let $h1 = $("<h1>").text("You won! Stop playing now!");
      this.$el.append($h1);
      this.$el.off("click");
    }
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
