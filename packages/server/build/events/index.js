"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DataStore = _interopRequireDefault(require("../models/DataStore"));

var _controller = _interopRequireDefault(require("./controller"));

var _gamestate = _interopRequireDefault(require("./gamestate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dataStore = new _DataStore["default"]();

var _default = function _default(io) {
  io.on('connection', function (socket) {
    (0, _controller["default"])(io, socket, dataStore);
    (0, _gamestate["default"])(io, socket, dataStore);
  });
};

exports["default"] = _default;