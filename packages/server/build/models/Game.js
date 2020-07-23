"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.status = 'title';
    this.timer = null;
    this.canMove = true;
    this.countdownTime = 3;
    this.countdown = this.countdownTime;
  }

  _createClass(Game, [{
    key: "pauseGame",
    value: function pauseGame() {
      if (this.status === 'playing') {
        clearInterval(this.timer);
        this.status = 'paused';
        this.canMove = false;
      }
    }
  }, {
    key: "resumeGame",
    value: function resumeGame() {
      if (this.status !== 'playing') {
        this.status = 'playing';
        this.canMove = true;
      }
    }
  }, {
    key: "startGame",
    value: function startGame() {
      this.status = 'playing';
    }
  }, {
    key: "endGame",
    value: function endGame() {
      this.status = 'ended';
      this.pauseGame();
    }
  }]);

  return Game;
}();

var _default = Game;
exports["default"] = _default;