"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

var _express = _interopRequireDefault(require("./config/express"));

var _events = _interopRequireDefault(require("./events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = _http["default"].Server(_express["default"]);

var io = (0, _socket["default"])(server);
(0, _events["default"])(io);
var PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  console.log("\u2705  | Server listening on http://localhost:".concat(PORT));
});
var _default = server;
exports["default"] = _default;