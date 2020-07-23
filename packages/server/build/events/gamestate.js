"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(io, socket, dataStore) {
  socket.on('start game', function () {
    var game = dataStore.getGame();
    game.status = 'playing';
    io.emit('start game', game);
    game.startGame();
  });
  socket.on('resume game', function () {
    var game = dataStore.getGame();
    game.resumeGame();
    io.emit('resume game', game.turn);
  });
  socket.on('pause game', function () {
    var game = dataStore.getGame();
    game.pauseGame();
    io.emit('pause game', game.turn);
  });
};

exports["default"] = _default;