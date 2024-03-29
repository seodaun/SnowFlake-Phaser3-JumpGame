// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"box2d-plugin-full.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var W8y = {
  'x8d': function x8d(f, N) {
    return f < N;
  },
  'x9M': 'e_awakeFlag',
  'v0k': "requires",
  'd5Q': "O",
  'h1H': "sqrt",
  'Z6': function Z6(f, N) {
    return f * N;
  },
  'J3X': function J3X(f, N) {
    return f < N;
  },
  'U2G': function U2G(f, N) {
    return f - N;
  },
  's3l': function s3l(f, N, P) {
    return f * N * P;
  },
  'A2X': function A2X(f, N) {
    return f < N;
  },
  'M5X': function M5X(f, N) {
    return f === N;
  },
  'D00': "m_uA",
  'a3z': function a3z(f, N) {
    return f > N;
  },
  'l9C': function l9C(f, N) {
    return f > N;
  },
  'b4L': function b4L(f, N) {
    return f !== N;
  },
  'i6Q': "UNITY",
  'h4l': function h4l(f, N) {
    return f <= N;
  },
  'Q87': "SetPositionXY",
  'w1X': function w1X(f, N) {
    return f === N;
  },
  'V0k': "j4",
  'S4l': function S4l(f, N) {
    return f * N;
  },
  'g4X': function g4X(f, N) {
    return f < N;
  },
  'L77': "linearOffset",
  'n6Q': "child1",
  'e6c': function e6c(f, N) {
    return f - N;
  },
  'm2J': function m2J(f, N) {
    return f * N;
  },
  'R50': "b2Log",
  'C07': "e_enabledFlag",
  'A70': "MoveProxy",
  'Q7L': function Q7L(f, N) {
    return f > N;
  },
  'N6l': function N6l(f, N) {
    return f * N;
  },
  'W0J': function W0J(f, N) {
    return f * N;
  },
  'r6c': function r6c(f, N) {
    return f <= N;
  },
  't2T': 24,
  's97': "m_perp",
  'S7': function S7(f, N) {
    return f in N;
  },
  'E1S': function E1S(f, N, P) {
    return f * N * P;
  },
  'y0G': function y0G(f, N) {
    return f * N;
  },
  'L6a': function L6a(f, N) {
    return f > N;
  },
  'o90': "UNITX",
  'y8M': "b2GetPointStates",
  'A6J': function A6J(f, N) {
    return f <= N;
  },
  'g4M': 'e_bulletFlag',
  'L9Q': function L9Q(f, N) {
    return f - N;
  },
  'M6L': function M6L(f, N) {
    return f & N;
  },
  'V26': "m_fixtureCount",
  'x9k': "dispatch",
  'f6J': function f6J(f, N, P) {
    return f * N * P;
  },
  'v6c': function v6c(f, N) {
    return f - N;
  },
  'k8M': "getUid",
  'R9k': "m_body",
  'p6k': "b2QueryCallback",
  'r9L': function r9L(f, N) {
    return f > N;
  },
  'L4L': function L4L(f, N) {
    return f - N;
  },
  'd8Q': 2,
  'p4L': function p4L(f, N) {
    return f * N;
  },
  'W0l': function W0l(f, N) {
    return f * N;
  },
  'A5k': "_bodyPresolveCallbacks",
  'Q2T': "s_pB",
  't6L': function t6L(f, N) {
    return f < N;
  },
  'f6L': function f6L(f, N) {
    return f === N;
  },
  'o9X': function o9X(f, N) {
    return f * N;
  },
  'q6C': function q6C(f, N) {
    return f / N;
  },
  'C5Q': "m_linearOffset",
  'P4S': function P4S(f, N) {
    return f === N;
  },
  'E2r': "s_p",
  'f8M': "b2FixtureDef",
  'd37': "CLOSURE_UNCOMPILED_DEFINES",
  'H1H': "_fixturePostsolveCallbacks",
  'b8z': function b8z(f, N, P) {
    return f * N * P;
  },
  'j4': function j4() {
    box2d["b2_pi_over_180"] = box2d["b2_pi"] / 180.0;
  },
  'B1d': function B1d(f, N) {
    return f & N;
  },
  'Y6k': "b2Velocity",
  'N3d': function N3d(f, N) {
    return f & N;
  },
  'x26': "debugDraw",
  'V0L': function V0L(f, N) {
    return f < N;
  },
  'W9c': function W9c(f, N) {
    return f > N;
  },
  'S9X': function S9X(f, N, P) {
    return f * N * P;
  },
  'm00': "m_mB",
  'l2S': function l2S(f, N) {
    return f * N;
  },
  'O9a': function O9a(f, N) {
    return f === N;
  },
  'r97': "isDef",
  'z1': function z1(f) {
    box2d["b2_aabbMultiplier"] = f;
  },
  'b70': "m_groundAnchorB",
  'n1l': function n1l(f, N) {
    return f * N;
  },
  'o0l': function o0l(f, N) {
    return f * N;
  },
  'z26': 'box2d.b2Math',
  'X9Q': function X9Q(f, N) {
    return f == N;
  },
  'V0d': function V0d(f, N) {
    return f < N;
  },
  'S9S': function S9S(f, N) {
    return f === N;
  },
  'l4Q': function l4Q(f, N) {
    return f < N;
  },
  'M2l': function M2l(f, N) {
    return f / N;
  },
  'E5z': function E5z(f, N) {
    return f * N;
  },
  'S0r': "InitializeVelocityConstraints",
  'Z7T': "m_mass",
  'J47': "m_maxMotorTorque",
  'M8l': function M8l(f, N) {
    return f * N;
  },
  'D4X': function D4X(f, N) {
    return f < N;
  },
  'W3S': function W3S(f, N) {
    return f < N;
  },
  'A6G': function A6G(f, N) {
    return f * N;
  },
  'w4T': "proxyA",
  'D3a': function D3a(f, N) {
    return f instanceof N;
  },
  'i1L': function i1L(f, N) {
    return f * N;
  },
  'm0H': "s_output",
  'x2z': function x2z(f, N) {
    return f < N;
  },
  'q17': "_indexA",
  'q80': "sweepB",
  'T9d': function T9d(f, N) {
    return f & N;
  },
  'E2J': function E2J(f, N) {
    return f * N;
  },
  'S6X': function S6X(f, N) {
    return f >= N;
  },
  'w3L': function w3L(f, N) {
    return f | N;
  },
  'X1l': function X1l(f, N) {
    return f === N;
  },
  'i4d': function i4d(f, N) {
    return f > N;
  },
  'L4S': function L4S(f, N) {
    return f > N;
  },
  'a6T': "e_gearJoint",
  'P6H': "m_JwC",
  'S3S': function S3S(f, N) {
    return f * N;
  },
  'K67': "getLayer",
  'D0H': 'e_newFixture',
  't6z': function t6z(f, N) {
    return f - N;
  },
  'x97': "bindJs_",
  'F3J': function F3J(f, N) {
    return f * N;
  },
  'L2T': 'indexA',
  'e4L': function e4L(f, N) {
    return f * N;
  },
  'b3J': function b3J(f, N) {
    return f !== N;
  },
  'b1S': function b1S(f, N, P) {
    return f - N - P;
  },
  'Q2C': function Q2C(f, N, P) {
    return f * N * P;
  },
  'W4Q': function W4Q(f, N) {
    return f < N;
  },
  'b5T': "m_type",
  'p0d': function p0d(f, N) {
    return f === N;
  },
  'b5S': function b5S(f, N) {
    return f !== N;
  },
  't0L': function t0L(f, N) {
    return f <= N;
  },
  'k2X': function k2X(f, N) {
    return f < N;
  },
  'Q7X': function Q7X(f, N) {
    return f * N;
  },
  'M9C': function M9C(f, N) {
    return f * N;
  },
  'k0c': function k0c(f, N) {
    return f * N;
  },
  'G0c': function G0c(f, N) {
    return f >= N;
  },
  'S2c': function S2c(f, N) {
    return f / N;
  },
  'W0Q': function W0Q(f, N) {
    return f >= N;
  },
  'I7c': function I7c(f, N, P) {
    return f * N * P;
  },
  'z6z': function z6z(f, N) {
    return f - N;
  },
  'I5H': "dt",
  'r3H': 0.2,
  'c2J': function c2J(f, N) {
    return f * N;
  },
  'n07': "m_out_center",
  'h26': "SetType",
  'K7k': "frameRate",
  'E3': function E3(f, N) {
    return f instanceof N;
  },
  'd5S': function d5S(f, N) {
    return f === N;
  },
  'm9k': "apply",
  'l6': function l6(f, N) {
    return f * N;
  },
  'x2M': "AllocateNode",
  'E7X': function E7X(f, N) {
    return f * N;
  },
  'V1r': "    vs[%d].SetXY(%.15f, %.15f);\n",
  'm7l': function m7l(f, N) {
    return f === N;
  },
  'W9S': function W9S(f, N) {
    return f <= N;
  },
  'c7X': function c7X(f, N) {
    return f - N;
  },
  'J97': 256,
  'n2G': function n2G(f, N, P) {
    return f * N * P;
  },
  'P5': function P5(f, N) {
    return f - N;
  },
  'T1a': function T1a(f, N) {
    return f === N;
  },
  's0C': function s0C(f, N) {
    return f * N;
  },
  'p5S': function p5S(f, N) {
    return f === N;
  },
  'B8c': function B8c(f, N) {
    return f * N;
  },
  'K7d': function K7d(f, N) {
    return f === N;
  },
  'H3d': function H3d(f, N) {
    return f * N;
  },
  'U0H': "GetAngle",
  'q4H': "b2PolygonAndCircleContact",
  'X0': function X0(f, N) {
    return f != N;
  },
  'U40': "GetLinearVelocityFromWorldPoint",
  'd3X': function d3X(f, N) {
    return f * N;
  },
  'q4J': function q4J(f, N) {
    return f * N;
  },
  'n9z': function n9z(f, N) {
    return f * N;
  },
  'g0X': function g0X(f, N) {
    return f * N;
  },
  'L3Q': function L3Q(f, N) {
    return f == N;
  },
  'H1Q': function H1Q(f, N) {
    return f * N;
  },
  'U4J': function U4J(f, N) {
    return f * N;
  },
  'C7l': function C7l(f, N) {
    return f * N;
  },
  'Y3M': 'key',
  'o4l': function o4l(f, N) {
    return f * N;
  },
  't3M': "  jd.ratio = %.15f;\n",
  'g6M': "  jd.maxForce = %.15f;\n",
  'C2r': "m_moveBuffer",
  'M5J': function M5J(f, N) {
    return f !== N;
  },
  'y0r': "minor",
  'q9l': function q9l(f, N, P) {
    return f - N - P;
  },
  'Q1r': "linearVelocity",
  'l9d': function l9d(f, N) {
    return f * N;
  },
  'U9d': function U9d(f, N) {
    return f & N;
  },
  'Y1d': function Y1d(f, N) {
    return f === N;
  },
  'm9l': function m9l(f, N) {
    return f < N;
  },
  'Z8M': 'e_jointBit',
  'J9J': function J9J(f, N) {
    return f * N;
  },
  'l5M': "ValidateStructure",
  'v1l': function v1l(f, N) {
    return f === N;
  },
  'j06': "b2_maxManifoldPoints",
  'R37': "s_axisA",
  'd5M': "b2Sqrt",
  'b1Q': function b1Q(f, N) {
    return f < N;
  },
  'p7T': "b2Vec2",
  'c0M': 'box2d.b2RevoluteJoint',
  'm4a': function m4a(f, N) {
    return f === N;
  },
  'q2H': "PopTransform",
  'N8z': function N8z(f, N) {
    return f > N;
  },
  'w3d': function w3d(f, N) {
    return f === N;
  },
  'h1a': function h1a(f, N) {
    return f === N;
  },
  'o16': "O1",
  'z8c': function z8c(f, N) {
    return f < N;
  },
  'V0X': function V0X(f, N) {
    return f * N;
  },
  'W66': "b2ContactID",
  'y40': "normalImpulse",
  'v60': 'b2_addState    ',
  'W2L': function W2L(f, N) {
    return f - N;
  },
  'Z4': function Z4(f) {
    box2d["b2_maxTOIContacts"] = f;
  },
  'j4l': function j4l(f, N, P) {
    return f * N * P;
  },
  'E1M': "b2_maxPolygonVertices",
  'E2H': "e_edgeShape",
  'O9X': function O9X(f, N) {
    return f >= N;
  },
  'h5T': "s_J2",
  'w2c': function w2c(f, N, P) {
    return f * N * P;
  },
  'h1L': function h1L(f, N) {
    return f * N;
  },
  't0z': function t0z(f, N) {
    return f instanceof N;
  },
  'r27': 'e_all',
  'f1k': "e_edgeB",
  'k2C': function k2C(f, N) {
    return f / N;
  },
  'n0r': "e_atLowerLimit",
  'm2d': function m2d(f, N) {
    return f & N;
  },
  'D7': function D7(f, N) {
    return f in N;
  },
  'n3': function n3(f, N) {
    return f in N;
  },
  'b1C': function b1C(f, N) {
    return f - N;
  },
  'g9a': function g9a(f, N) {
    return f & N;
  },
  'z3r': "replace",
  'G6c': function G6c(f, N) {
    return f > N;
  },
  'X6d': function X6d(f, N) {
    return f & N;
  },
  'v9': function v9(f, N) {
    return f & N;
  },
  'l0d': function l0d(f, N) {
    return f === N;
  },
  'n5k': "velocity",
  'Y9X': function Y9X(f, N, P) {
    return f * N / P;
  },
  'L3T': "GetMass",
  'g7M': "m_hasNextVertex",
  'm7J': function m7J(f, N) {
    return f * N;
  },
  'A8l': function A8l(f, N) {
    return f * N;
  },
  'V2S': function V2S(f, N) {
    return f < N;
  },
  'v8d': function v8d(f, N) {
    return f === N;
  },
  'G2r': 1000,
  'a4r': "L1",
  'v5C': function v5C(f, N) {
    return f === N;
  },
  'Z9c': function Z9c(f, N) {
    return f * N;
  },
  'W8L': function W8L(f, N) {
    return f > N;
  },
  'h2C': function h2C(f, N) {
    return f > N;
  },
  'e1z': function e1z(f, N) {
    return f < N;
  },
  'I2X': function I2X(f, N) {
    return f < N;
  },
  'N96': "m_collideConnected",
  'C8a': function C8a(f, N) {
    return f === N;
  },
  'y4Q': function y4Q(f, N) {
    return f / N;
  },
  'g9M': "b2Pair",
  'w1G': function w1G(f, N) {
    return f * N;
  },
  't1c': function t1c(f, N) {
    return f * N;
  },
  'Z0r': "RemoveBody",
  'D70': "Create",
  'T6X': function T6X(f, N) {
    return f >= N;
  },
  'B1S': function B1S(f, N) {
    return f * N;
  },
  'o5k': "QueryCallback",
  'Y7L': function Y7L(f, N) {
    return f < N;
  },
  'a9J': function a9J(f, N) {
    return f * N;
  },
  'r4H': "hasOwnProperty",
  'w66': "maxTorque",
  'u6k': "s_edge1",
  'D5T': 'e_pulleyJoint',
  'Q5': function Q5(f, N) {
    return f * N;
  },
  'E3T': 'box2d.b2GearJoint',
  'K3L': function K3L(f, N) {
    return f & N;
  },
  'w1l': function w1l(f, N) {
    return f === N;
  },
  'K8k': "removeNextStep",
  'J6d': function J6d(f, N) {
    return f & N;
  },
  'l5d': function l5d(f, N) {
    return f < N;
  },
  'L1Q': function L1Q(f, N) {
    return f < N;
  },
  'e70': "Y",
  'P5z': function P5z(f, N) {
    return f >= N;
  },
  'O0T': 'e_atLowerLimit',
  'X66': "m_next",
  'Q4': function Q4() {
    box2d["b2_angularSleepTolerance"] = 2 / 180 * box2d["b2_pi"];
  },
  'G9k': 'e_convex',
  'J7S': function J7S(f, N) {
    return f < N;
  },
  'n8Q': "m_v2",
  'a27': "m_localAnchorD",
  'A0a': function A0a(f, N) {
    return f < N;
  },
  'M8H': "solveVelocity",
  'b6G': function b6G(f, N, P) {
    return f - N - P;
  },
  'F8z': function F8z(f, N) {
    return f * N;
  },
  'x7Q': function x7Q(f, N) {
    return f > N;
  },
  'H5H': "e_revoluteJoint",
  'O9c': function O9c(f, N) {
    return f / N;
  },
  'C7X': function C7X(f, N) {
    return f / N;
  },
  'D5a': function D5a(f, N) {
    return f === N;
  },
  'M7z': function M7z(f, N) {
    return f instanceof N;
  },
  'T0H': "b2Mat22",
  'T27': "written",
  'U6': function U6(f, N) {
    return f * N;
  },
  'Q00': "b2_maxTranslationSquared",
  'z0L': function z0L(f, N) {
    return f <= N;
  },
  'O2S': function O2S(f, N) {
    return f * N;
  },
  'r2r': 'e_touchingFlag',
  'B4l': function B4l(f, N) {
    return f * N;
  },
  'E9C': function E9C(f, N) {
    return f * N;
  },
  'O6X': function O6X(f, N) {
    return f >= N;
  },
  'U27': "m_bodyD",
  'k5C': function k5C(f, N) {
    return f === N;
  },
  'K3d': function K3d(f, N) {
    return f === N;
  },
  'K9G': function K9G(f, N) {
    return f > N;
  },
  'R4T': "IsActive",
  'V90': "V",
  'o9S': function o9S(f, N) {
    return f === N;
  },
  'M6Q': "s_cLocal",
  'V8L': function V8L(f, N) {
    return f <= N;
  },
  'i3a': function i3a(f, N) {
    return f === N;
  },
  'p0k': "global",
  'y8G': function y8G(f, N) {
    return f < N;
  },
  'Q7M': "console",
  'g9H': "allowSleep",
  'S0T': "m_registers",
  'Z1a': function Z1a(f, N) {
    return f === N;
  },
  'x1d': function x1d(f, N) {
    return f === N;
  },
  'M8a': function M8a(f, N) {
    return f & N;
  },
  'q0X': function q0X(f, N) {
    return f === N;
  },
  'w6M': "Reset",
  'V1G': function V1G(f, N, P) {
    return f * N * P;
  },
  'U06': "b2DistanceJoint",
  'O6C': function O6C(f, N) {
    return f * N;
  },
  'e40': "Advance",
  't9c': function t9c(f, N) {
    return f * N;
  },
  'Y4S': function Y4S(f, N) {
    return f === N;
  },
  'b9k': "m_iD",
  'L2H': "z4",
  'd7a': function d7a(f, N) {
    return f > N;
  },
  'h0l': function h0l(f, N) {
    return f * N;
  },
  'u80': "inherits",
  'E5L': function E5L(f, N) {
    return f === N;
  },
  'q9c': function q9c(f, N, P) {
    return f * N * P;
  },
  'K2H': "s_saveA",
  'Z0Q': function Z0Q(f, N) {
    return f > N;
  },
  'r6Q': 'b2_nullState   ',
  'Y2J': function Y2J(f, N) {
    return f * N;
  },
  'k4H': "physics",
  'Z2S': function Z2S(f, N) {
    return f < N;
  },
  'E86': "filter",
  'L96': "b2Version",
  'G3H': "b2RevoluteJointDef",
  'i9c': function i9c(f, N) {
    return f / N;
  },
  'j5k': "e_circles",
  'I1H': "shapes",
  'v6S': function v6S(f, N) {
    return f < N;
  },
  'b9G': function b9G(f, N) {
    return f <= N;
  },
  'j8z': function j8z(f, N, P) {
    return f * N * P;
  },
  'f4L': function f4L(f, N) {
    return f / N;
  },
  'j8d': function j8d(f, N) {
    return f < N;
  },
  'F9G': function F9G(f, N) {
    return f < N;
  },
  'B70': "b2RayCastOutput",
  'q2k': "pointA",
  'E0a': function E0a(f, N) {
    return f === N;
  },
  'c0S': function c0S(f, N) {
    return f === N;
  },
  'U56': "m_index",
  'W47': "p2",
  't30': "s_supportA",
  'D2L': function D2L(f, N) {
    return f * N;
  },
  'l3T': 16,
  'g37': "CreateFixture",
  'L8z': function L8z(f, N) {
    return f < N;
  },
  't0J': function t0J(f, N) {
    return f * N;
  },
  'T5M': "getTime",
  'T46': "groupIndex",
  'o0G': function o0G(f, N) {
    return f * N;
  },
  'J9Q': function J9Q(f, N) {
    return f < N;
  },
  'g1H': "b2GravityController",
  'l2l': function l2l(f, N) {
    return f * N;
  },
  'P37': "b2_nullState",
  'G2z': function G2z(f, N) {
    return f instanceof N;
  },
  'X2T': "BOX2D",
  'P4C': function P4C(f, N) {
    return f * N;
  },
  'p9k': "getMsg",
  'N1l': function N1l(f, N) {
    return f < N;
  },
  'j4a': function j4a(f, N) {
    return f !== N;
  },
  'n6T': "s_d1",
  'L3X': function L3X(f, N) {
    return f * N;
  },
  'D3M': "b2MulTRR",
  'C5z': function C5z(f, N) {
    return f >= N;
  },
  'O5H': "s_simplexCache",
  'r66': 'e_edgeA',
  'Z8k': "b2_linearSlop",
  'u6Q': "b2_version",
  'z0Q': function z0Q(f, N) {
    return f % N;
  },
  'd6T': "if (true)\n",
  'r16': "partial",
  'm7H': 'true',
  'D6z': function D6z(f, N) {
    return f * N;
  },
  'S4': function S4(f) {
    box2d["b2_gjkMaxIters"] = f;
  },
  'M7C': function M7C(f, N) {
    return f >= N;
  },
  'y3a': function y3a(f, N) {
    return f === N;
  },
  'o40': 0.75,
  'j7G': function j7G(f, N) {
    return f <= N;
  },
  'R17': "b2ConstantAccelController",
  'f5': function f5(f, N) {
    return f * N;
  },
  'N20': "F",
  'U76': "GetChildCount",
  'K76': "  jd.frequencyHz = %.15f;\n",
  'J17': "IsBullet",
  'E2M': "centerOfMass",
  'b3X': function b3X(f, N) {
    return f >= N;
  },
  'S57': "b2ContactFlag",
  'f30': "exportSymbol",
  'F2T': "alpha0",
  'o67': "frequencyHz",
  'X6c': function X6c(f, N) {
    return f instanceof N;
  },
  'C4a': function C4a(f, N) {
    return f < N;
  },
  't9k': 'e_equalLimits',
  'y6M': "m_nodeB",
  'j7M': "m_pairBuffer",
  'o4G': function o4G(f, N, P) {
    return f - N - P;
  },
  'A9k': "maxForce",
  'A5z': function A5z(f, N) {
    return f * N;
  },
  'j1r': "walls",
  'u20': "cloneObject",
  'T4': function T4(f) {
    box2d["b2_linearSleepTolerance"] = f;
  },
  'G0k': "m_indexA",
  'p3z': function p3z(f, N) {
    return f < N;
  },
  'p4c': function p4c(f, N) {
    return f / N;
  },
  'E9k': "m_maxForce",
  'S8L': function S8L(f, N) {
    return f < N;
  },
  'H1J': function H1J(f, N) {
    return f - N;
  },
  'l1a': function l1a(f, N) {
    return f === N;
  },
  'v8S': function v8S(f, N) {
    return f === N;
  },
  'o4z': function o4z(f, N) {
    return f - N;
  },
  'X1J': function X1J(f, N) {
    return f * N;
  },
  'c1d': function c1d(f, N) {
    return f === N;
  },
  'J1T': "aabb",
  'G47': "m_localAnchorB",
  'g6z': function g6z(f, N) {
    return f * N;
  },
  'd3T': "b2PrismaticJointDef",
  's3d': function s3d(f, N) {
    return f < N;
  },
  'B0l': function B0l(f, N) {
    return f * N;
  },
  'C3H': "m_contactManager",
  'C2z': function C2z(f, N) {
    return f % N;
  },
  'G2Q': function G2Q(f, N) {
    return f - N;
  },
  'N9L': function N9L(f, N) {
    return f > N;
  },
  'b46': "e_frictionJoint",
  'D6G': function D6G(f, N, P, Z) {
    return f * N * P * Z;
  },
  'I9': function I9(f, N) {
    return f & N;
  },
  'k9H': "m_JwA",
  'N1z': function N1z(f, N) {
    return f < N;
  },
  'U8L': function U8L(f, N) {
    return f > N;
  },
  't50': "execScript",
  'Z0J': function Z0J(f, N) {
    return f * N;
  },
  'y1T': "b2RopeJoint",
  'L6l': function L6l(f, N) {
    return f === N;
  },
  'T9T': "x",
  'z0C': function z0C(f, N) {
    return f * N;
  },
  'x2c': function x2c(f, N, P) {
    return f * N * P;
  },
  'm2X': function m2X(f, N) {
    return f > N;
  },
  'H3J': function H3J(f, N) {
    return f !== N;
  },
  'z1c': function z1c(f, N) {
    return f * N;
  },
  'K1z': function K1z(f, N) {
    return f === N;
  },
  'Y8S': function Y8S(f, N) {
    return f > N;
  },
  'W36': 'typeA',
  'f4c': function f4c(f, N) {
    return f * N;
  },
  'b3c': function b3c(f, N) {
    return f > N;
  },
  'K8': function K8(f, N) {
    return f * N;
  },
  'T8l': function T8l(f, N, P) {
    return f * N * P;
  },
  'n0k': 'box2d.b2ChainAndPolygonContact',
  'z8J': function z8J(f, N) {
    return f - N;
  },
  'l2C': function l2C(f, N, P) {
    return f * N * P;
  },
  'j0r': "m_I",
  'z0M': "pure virtual",
  'P7C': function P7C(f, N) {
    return f <= N;
  },
  'w3z': function w3z(f, N) {
    return f < N;
  },
  'u1k': "b2MulM33V3",
  'M0': function M0(f, N) {
    return f == N;
  },
  'P2J': function P2J(f, N) {
    return f * N;
  },
  'I4': function I4(f) {
    box2d["b2_gjkCalls"] = f;
  },
  'i8J': function i8J(f, N) {
    return f * N;
  },
  'I4c': function I4c(f, N) {
    return f / N;
  },
  'g6X': function g6X(f, N) {
    return f >= N;
  },
  'M0S': function M0S(f, N) {
    return f < N;
  },
  'r3X': function r3X(f, N) {
    return f % N;
  },
  'S9d': function S9d(f, N) {
    return f instanceof N;
  },
  'g1a': function g1a(f, N) {
    return f === N;
  },
  'P8c': function P8c(f, N) {
    return f * N;
  },
  'Y5': function Y5(f, N) {
    return f - N;
  },
  'y0l': function y0l(f, N) {
    return f * N;
  },
  'G10': "m_fixtureB",
  'Q7C': function Q7C(f, N) {
    return f * N;
  },
  'Y37': "renderBody",
  'E7l': function E7l(f, N) {
    return f * N;
  },
  'g9S': function g9S(f, N) {
    return f > N;
  },
  'z76': "s_normal",
  'j1d': function j1d(f, N) {
    return f !== N;
  },
  'q0J': function q0J(f, N) {
    return f * N;
  },
  'y0C': function y0C(f, N, P) {
    return f - N - P;
  },
  'j2d': function j2d(f, N) {
    return f === N;
  },
  'a3X': function a3X(f, N) {
    return f * N;
  },
  'D1r': "typeOf",
  'S0J': function S0J(f, N) {
    return f * N;
  },
  'a1T': "b2MulTMV",
  'K6T': "DrawShape",
  's6d': function s6d(f, N) {
    return f === N;
  },
  'i07': "IsValid",
  'h6H': 'box2d.b2EdgeShape',
  'X26': "b2MulSV",
  'g5k': 'e_separated',
  'R8S': function R8S(f, N) {
    return f > N;
  },
  'D9M': "m_id",
  'r90': "m_localAxisC",
  'B9d': function B9d(f, N) {
    return f - N;
  },
  'e0': function e0(f, N) {
    return f == N;
  },
  'j7L': function j7L(f, N) {
    return f > N;
  },
  'C6T': "b2DistanceJointDef",
  'M5L': function M5L(f, N) {
    return f !== N;
  },
  'u5M': "gravity",
  'h9k': "m_iB",
  'i17': "instantiatedSingletons_",
  'T4Q': function T4Q(f, N) {
    return f === N;
  },
  'Y8a': function Y8a(f, N) {
    return f & N;
  },
  'B2S': function B2S(f, N) {
    return f * N;
  },
  'W76': "cos",
  'L2k': "IDENTITY",
  'I0M': "s_e12",
  'J2a': function J2a(f, N) {
    return f === N;
  },
  'm7M': "dependencies_",
  'o6X': function o6X(f, N) {
    return f >= N;
  },
  'W9M': "e_centerOfMassBit",
  'L5Q': "GetGravity",
  'o3r': "k1",
  'J4L': function J4L(f, N) {
    return f / N;
  },
  'r1Q': function r1Q(f, N) {
    return f < N;
  },
  'X8l': function X8l(f, N) {
    return f === N;
  },
  'b1M': "b2ContactSolver",
  'k36': "pairs",
  's30': "cssNameMappingStyle_",
  'd1X': function d1X(f, N) {
    return f instanceof N;
  },
  'C8H': "b2SeparationFunction",
  'T9X': function T9X(f, N) {
    return f / N;
  },
  'j8a': function j8a(f, N) {
    return f === N;
  },
  'j5c': function j5c(f, N) {
    return f > N;
  },
  'A37': "b2Distance",
  'o2L': function o2L(f, N) {
    return f - N;
  },
  'O4z': function O4z(f, N) {
    return f === N;
  },
  'M1l': function M1l(f, N) {
    return f - N;
  },
  'w5l': function w5l(f, N) {
    return f === N;
  },
  'b86': "GetBody",
  'g0l': function g0l(f, N) {
    return f !== N;
  },
  'z6C': function z6C(f, N) {
    return f - N;
  },
  'P2r': "m_listener",
  'r8': function r8(f, N) {
    return f * N;
  },
  'X6S': function X6S(f, N, P) {
    return f - N + P;
  },
  'w16': "m_debugDraw",
  't1H': "forwardDeclare",
  'X1C': function X1C(f, N) {
    return f / N;
  },
  'X7T': "m_proxyCount",
  'l3M': "velocityIterations",
  'f0c': function f0c(f, N) {
    return f * N;
  },
  'E0S': function E0S(f, N) {
    return f < N;
  },
  'I57': "GetContactList",
  'A0M': "s_clipPoints1",
  'd5k': "isBoolean",
  'n1J': function n1J(f, N) {
    return f - N;
  },
  'F9k': "b2IsEqualToV",
  't0H': 'script',
  'm3H': 'e_none',
  'Y0c': function Y0c(f, N) {
    return f * N;
  },
  'R3H': 0.9,
  'W4X': function W4X(f, N) {
    return f <= N;
  },
  'U2S': function U2S(f, N) {
    return f < N;
  },
  'g3S': function g3S(f, N) {
    return f < N;
  },
  'c3r': "b2_pi_over_180",
  'v8Q': 4,
  'T0X': function T0X(f, N) {
    return f % N;
  },
  'a8': function a8(f, N) {
    return f * N;
  },
  'Q57': "ex",
  'h2T': "primary",
  's3G': function s3G(f, N) {
    return f < N;
  },
  'F87': "m_enableLimit",
  'U0z': function U0z(f, N) {
    return f instanceof N;
  },
  'u06': "groundAnchorB",
  'I5M': "SelfMulSub",
  'E4a': function E4a(f, N) {
    return f - N;
  },
  'A5H': "  jd.referenceAngle = %.15f;\n",
  'G7k': "b2_linearSleepTolerance",
  't8J': function t8J(f, N) {
    return f === N;
  },
  'G87': "s_id",
  'F3z': function F3z(f, N) {
    return f - N;
  },
  'A8G': function A8G(f, N) {
    return f * N;
  },
  'W4k': "b2_polygonRadius",
  'V3S': function V3S(f, N) {
    return f > N;
  },
  'X3J': function X3J(f, N) {
    return f * N;
  },
  'e3k': "m_gamma",
  'I6H': "b2FindIncidentEdge",
  'm2z': function m2z(f, N) {
    return f % N;
  },
  'u6d': function u6d(f, N) {
    return f === N;
  },
  'U3S': function U3S(f, N) {
    return f / N;
  },
  'K1J': function K1J(f, N) {
    return f - N;
  },
  'T8J': function T8J(f, N) {
    return f * N;
  },
  'R26': "m_K2",
  'A7J': function A7J(f, N) {
    return f >= N;
  },
  'v2J': function v2J(f, N) {
    return f * N;
  },
  'e1c': function e1c(f, N) {
    return f * N;
  },
  'R7l': function R7l(f, N) {
    return f * N;
  },
  'n06': "b2_maxAngularCorrection",
  'Y2d': function Y2d(f, N) {
    return f === N;
  },
  'B0': function B0(f, N) {
    return f == N;
  },
  'i6': function i6(f, N) {
    return f * N;
  },
  'l5Q': 'b2_bulletBody',
  'N5G': function N5G(f, N) {
    return f > N;
  },
  'H6l': function H6l(f, N) {
    return f !== N;
  },
  'C7T': "s_tangent",
  'g6': function g6(f, N) {
    return f - N;
  },
  'C8k': "GetVertex",
  'R': function R(f) {
    goog["getHashCode"] = f["getUid"];
  },
  'H7a': function H7a(f, N) {
    return f === N;
  },
  'k6L': function k6L(f, N) {
    return f <= N;
  },
  'l0T': "b2ParseUInt",
  'D3T': "referenceAngle",
  'E3H': 0.7,
  'v7J': function v7J(f, N) {
    return f * N;
  },
  'J86': "IsLeaf",
  'F2a': function F2a(f, N) {
    return f === N;
  },
  's1X': function s1X(f, N) {
    return f === N;
  },
  'X7d': function X7d(f, N) {
    return f === N;
  },
  's9l': function s9l(f, N, P) {
    return f - N - P;
  },
  'F1G': function F1G(f, N) {
    return f * N;
  },
  'p3X': function p3X(f, N) {
    return f * N;
  },
  'W0L': function W0L(f, N) {
    return f < N;
  },
  'P4a': function P4a(f, N) {
    return f < N;
  },
  'V67': "localNormal",
  'n3G': function n3G(f, N) {
    return f < N;
  },
  'p3M': "m_targetArea",
  'H97': "s_n",
  'R1': function R1(f) {
    box2d["b2_pi"] = f["PI"];
  },
  'Q1d': function Q1d(f, N) {
    return f === N;
  },
  'h8J': function h8J(f, N) {
    return f === N;
  },
  'a4S': function a4S(f, N) {
    return f * N;
  },
  'f0M': 'e_gearJoint',
  't4l': function t4l(f, N) {
    return f * N;
  },
  'l0M': "wrapAngle",
  'f86': "m_contactFactory",
  'C1L': function C1L(f, N, P) {
    return f - N - P;
  },
  'b7a': function b7a(f, N) {
    return f !== N;
  },
  'k1H': 'e_polygonShape',
  'F7d': function F7d(f, N) {
    return f !== N;
  },
  'p1J': function p1J(f, N) {
    return f / N;
  },
  'm7G': function m7G(f, N) {
    return f * N;
  },
  'u1X': function u1X(f, N) {
    return f instanceof N;
  },
  'W6': function W6(f, N) {
    return f * N;
  },
  'i2S': function i2S(f, N) {
    return f < N;
  },
  'U6T': "m_controllerList",
  'a56': "m_destructionListener",
  'B6X': function B6X(f, N) {
    return f >= N;
  },
  'k2z': function k2z(f, N) {
    return f <= N;
  },
  'l9M': "s_t1",
  'C7J': function C7J(f, N) {
    return f * N;
  },
  'r9J': function r9J(f, N) {
    return f - N;
  },
  'j5X': function j5X(f, N) {
    return f % N;
  },
  'N6Q': "atan2",
  'h8c': function h8c(f, N) {
    return f * N;
  },
  'P5T': "m_vs",
  'd0H': "GetSupport",
  'e56': "b2ContactFilter",
  'd1Q': function d1Q(f, N) {
    return f * N;
  },
  'a8H': "_categoryPresolveCallbackContext",
  'i80': "b2ShapeType",
  'C0T': "b2Cos",
  'I30': "b2Sweep",
  'j9': function j9(f, N) {
    return f * N;
  },
  'a9Q': function a9Q(f, N) {
    return f === N;
  },
  'y6z': function y6z(f, N) {
    return f < N;
  },
  'w9l': function w9l(f, N) {
    return f * N;
  },
  'Z9a': function Z9a(f, N) {
    return f === N;
  },
  'w9T': "SetAngularDamping",
  'U5d': function U5d(f, N) {
    return f % N;
  },
  'W9a': function W9a(f, N) {
    return f === N;
  },
  'o3a': function o3a(f, N) {
    return f instanceof N;
  },
  'N17': "b2Joint",
  'Q67': "  jd.bodyA = bodies[%d];\n",
  'N06': "b2Clamp",
  'a6H': "bindNative_",
  'T0Q': function T0Q(f, N) {
    return f * N;
  },
  'r67': "b2MulMM",
  'v7G': function v7G(f, N) {
    return f > N;
  },
  'x57': "GetAngleRadians",
  's7d': function s7d(f, N) {
    return f === N;
  },
  'N3T': 32,
  'B0G': function B0G(f, N) {
    return f <= N;
  },
  's5G': function s5G(f, N) {
    return f * N;
  },
  'j1G': function j1G(f, N) {
    return f - N;
  },
  'M2z': function M2z(f, N) {
    return f instanceof N;
  },
  'B8H': "m_JwB",
  'L8M': "sin",
  'l6H': "b2CollideEdgeAndCircle",
  'c0c': function c0c(f, N) {
    return f - N;
  },
  'T07': "_categoryPostsolveCallbackContext",
  'd1k': "FromAngleRadians",
  'M9T': "w",
  'b4H': "b2TOIInput",
  'N37': "b2RopeJointDef",
  'G0H': "SetIdentity",
  'a57': "b2ContactVelocityConstraint",
  'M3': function M3(f, N) {
    return f == N;
  },
  'S0L': function S0L(f, N) {
    return f - N;
  },
  'v70': "  jd.localAnchorA.SetXY(%.15f, %.15f);\n",
  'h0C': function h0C(f, N) {
    return f !== N;
  },
  'g0r': 1024,
  'Y6T': "Initialize",
  'x8Q': "GetTransform",
  'i0l': function i0l(f, N) {
    return f * N;
  },
  'J8C': function J8C(f, N) {
    return f instanceof N;
  },
  'I2': function I2(f, N) {
    return f - N;
  },
  'V4J': function V4J(f, N) {
    return f * N;
  },
  'V5l': function V5l(f, N, P) {
    return f * N * P;
  },
  'D2T': 'box2d',
  't9l': function t9l(f, N, P) {
    return f * N * P;
  },
  'P4c': function P4c(f, N) {
    return f - N;
  },
  'g4T': "e_convex",
  'n9G': function n9G(f, N) {
    return f > N;
  },
  'J1J': function J1J(f, N) {
    return f - N;
  },
  'Y00': "e_concave",
  'j4c': function j4c(f, N) {
    return f > N;
  },
  'o2M': "s_sweepA",
  'L3J': function L3J(f, N) {
    return f * N;
  },
  'h4z': function h4z(f, N) {
    return f instanceof N;
  },
  'j4r': "b2NextPowerOfTwo",
  'u9Q': function u9Q(f, N) {
    return f < N;
  },
  'a9k': "SelfMulAdd",
  'A6H': "b2TimeStep",
  'v9C': function v9C(f, N) {
    return f * N;
  },
  'Z2C': function Z2C(f, N) {
    return f / N;
  },
  'u3G': function u3G(f, N) {
    return f > N;
  },
  'T0l': function T0l(f, N) {
    return f * N;
  },
  'E9M': "m_invIB",
  'i46': "isString",
  'L5S': function L5S(f, N) {
    return f === N;
  },
  'G7l': function G7l(f, N) {
    return f * N;
  },
  'h06': "IsTouching",
  'O0z': function O0z(f, N) {
    return f > N;
  },
  'c5C': function c5C(f, N) {
    return f / N;
  },
  'j5': function j5(f, N) {
    return f === N;
  },
  'k8H': "b2MinV",
  'c0a': function c0a(f, N) {
    return f instanceof N;
  },
  'B30': "setTestOnly",
  'X8X': function X8X(f, N) {
    return f <= N;
  },
  'W90': "aabbs",
  'H1': function H1(f) {
    box2d["ENABLE_ASSERTS"] = f["DEBUG"];
  },
  'L1': function L1(f) {
    box2d["b2_aabbExtension"] = f;
  },
  'v8a': function v8a(f, N) {
    return f * N;
  },
  'Q86': "m_damping",
  'M2d': function M2d(f, N) {
    return f === N;
  },
  'G5L': function G5L(f, N) {
    return f === N;
  },
  't7M': "s_t0",
  'w1C': function w1C(f, N) {
    return f > N;
  },
  'e3z': function e3z(f, N) {
    return f > N;
  },
  'k8d': function k8d(f, N) {
    return f instanceof N;
  },
  'i37': "A",
  'i2k': "nextBody",
  'M8M': "m_polygonB",
  'K3H': "m_toiCount",
  'm56': 'e_concave',
  'R6L': function R6L(f, N) {
    return f < N;
  },
  'C4': function C4(f) {
    box2d["b2_toiBaumgarte"] = f;
  },
  'k57': "b2TreeNode",
  'T4J': function T4J(f, N) {
    return f * N;
  },
  'd8z': function d8z(f, N) {
    return f < N;
  },
  'Y5C': function Y5C(f, N) {
    return f / N;
  },
  'x7k': "m_indexD",
  'y3S': function y3S(f, N) {
    return f / N;
  },
  'X70': "b2InvSqrt",
  'z9S': function z9S(f, N) {
    return f * N;
  },
  'k6S': function k6S(f, N) {
    return f !== N;
  },
  'r5k': "b2_angularSlop",
  'q0l': function q0l(f, N) {
    return f - N;
  },
  'B80': "t",
  'v27': "m_bodyB",
  'g4Q': function g4Q(f, N) {
    return f < N;
  },
  'x70': "b2Draw",
  'q0d': function q0d(f, N) {
    return f * N;
  },
  'U5H': "SetAwake",
  'U4': function U4() {
    box2d["b2_polygonRadius"] = 2 * box2d["b2_linearSlop"];
  },
  'T8c': function T8c(f, N, P) {
    return f * N * P;
  },
  'U7M': 100,
  'o6z': function o6z(f, N) {
    return f - N;
  },
  'Z3T': 'indexB',
  'k0a': function k0a(f, N) {
    return f < N;
  },
  'N36': "e_newFixture",
  'n8X': function n8X(f, N) {
    return f * N;
  },
  'P7Q': function P7Q(f, N) {
    return f ^ N;
  },
  'Y3': function Y3(f, N) {
    return f in N;
  },
  't16': "m_proxies",
  'G2J': function G2J(f, N) {
    return f - N;
  },
  'v4T': "maxFraction",
  'o0d': function o0d(f, N) {
    return f < N;
  },
  's6J': function s6J(f, N, P) {
    return f * N * P;
  },
  'E6L': function E6L(f, N) {
    return f <= N;
  },
  'X4G': function X4G(f, N, P) {
    return f * N * P;
  },
  'Z7': function Z7(f, N) {
    return f == N;
  },
  'P1H': "userData",
  'w1z': function w1z(f, N) {
    return f < N;
  },
  's3k': "m_k3",
  'M8d': function M8d(f, N) {
    return f & N;
  },
  'a9z': function a9z(f, N, P) {
    return f * N * P;
  },
  'W6H': "solveTOI",
  'M36': "m_sleepTime",
  'm2H': "tangentImpulse",
  'P30': "b2Acos",
  'W8G': function W8G(f, N) {
    return f < N;
  },
  'T7M': "r1",
  'z6k': null,
  'S9a': function S9a(f, N) {
    return f > N;
  },
  'E7C': function E7C(f, N) {
    return f >= N;
  },
  'K10': "ComputeHeightNode",
  'T2L': function T2L(f, N, P, Z, W) {
    return f / N / P * Z * W;
  },
  'S8Q': 3,
  'n3L': function n3L(f, N) {
    return f & N;
  },
  'M70': "s_faceCenter",
  'W3a': function W3a(f, N) {
    return f === N;
  },
  'm0S': function m0S(f, N) {
    return f > N;
  },
  'p3L': function p3L(f, N) {
    return f - N;
  },
  'o4H': "h4",
  'H36': "m_front",
  'C4H': "m_velocities",
  'R6Q': "child2",
  'S4z': function S4z(f, N) {
    return f > N;
  },
  'v0c': function v0c(f, N) {
    return f >= N;
  },
  'h0Q': function h0Q(f, N) {
    return f - N;
  },
  'D4z': function D4z(f, N) {
    return f < N;
  },
  'O36': "b2MotorJointDef",
  'k67': "m_qB",
  'W0z': function W0z(f, N) {
    return f instanceof N;
  },
  'B6z': function B6z(f, N) {
    return f >= N;
  },
  'G86': "s_Jd2",
  'B3M': "InsertLeaf",
  'D0Q': function D0Q(f, N) {
    return f > N;
  },
  'd7d': function d7d(f, N) {
    return f !== N;
  },
  'X0C': function X0C(f, N) {
    return f - N;
  },
  'S5Q': "SetAngularVelocity",
  'R06': "m_vertex0",
  'r4T': "b2_dynamicBody",
  'h2M': "PushTransform",
  'r3G': function r3G(f, N) {
    return f < N;
  },
  'O8Q': "localCenter",
  'I4C': function I4C(f, N) {
    return f - N;
  },
  'E16': 'box2d.b2Island',
  'k27': "m_bodyC",
  'w6a': function w6a(f, N) {
    return f !== N;
  },
  'U2C': function U2C(f, N) {
    return f > N;
  },
  'B7': function B7(f, N) {
    return f in N;
  },
  'k2d': function k2d(f, N) {
    return f === N;
  },
  'e1J': function e1J(f, N) {
    return f / N;
  },
  'O5a': function O5a(f, N) {
    return f > N;
  },
  'v0a': function v0a(f, N) {
    return f < N;
  },
  'h2H': "e_autoSleepFlag",
  'r6l': function r6l(f, N) {
    return f !== N;
  },
  's0r': "b2Color",
  'e7d': function e7d(f, N) {
    return f === N;
  },
  'h37': "bounds",
  'G7X': function G7X(f, N) {
    return f !== N;
  },
  'w8X': function w8X(f, N) {
    return f > N;
  },
  'L5T': "b2EPCollider",
  'r10': "GetLocalVector",
  'J77': "m_out_sweep",
  'N8C': function N8C(f, N) {
    return f * N;
  },
  'H4M': "metric",
  'P3H': "s_edgeAxis",
  'n9J': function n9J(f, N) {
    return f - N;
  },
  'L3G': function L3G(f, N) {
    return f * N;
  },
  'c4': function c4(f) {
    box2d["b2_velocityThreshold"] = f;
  },
  'C2J': function C2J(f, N) {
    return f * N;
  },
  'r9Q': function r9Q(f, N) {
    return f < N;
  },
  'q3S': function q3S(f, N) {
    return f / N;
  },
  'e0M': "b2WheelJointDef",
  'q9H': "b2IsValid",
  'v2Q': function v2Q(f, N) {
    return f - N;
  },
  'Y27': "Normalize",
  'Q97': "contacts",
  'B5H': "m_typeB",
  'y47': "SetXY",
  'o5a': function o5a(f, N) {
    return f / N;
  },
  'l9k': "GetPerimeter",
  'q96': "b2MulM33XYZ",
  'E2X': function E2X(f, N) {
    return f / N;
  },
  's5T': "GetLinearVelocity",
  'a1l': function a1l(f, N, P) {
    return f - N - P;
  },
  'i0Q': function i0Q(f, N) {
    return f * N;
  },
  'C3l': function C3l(f, N) {
    return f * N;
  },
  'M7Q': function M7Q(f, N) {
    return f / N;
  },
  'o6G': function o6G(f, N) {
    return f !== N;
  },
  'B1C': function B1C(f, N) {
    return f < N;
  },
  'M7H': "m_invI",
  'T8L': function T8L(f, N) {
    return f < N;
  },
  'a1J': function a1J(f, N) {
    return f * N;
  },
  'p9T': "m_frequencyHz",
  'Z2r': "positionIterations",
  'B9l': function B9l(f, N) {
    return f * N;
  },
  'f2J': function f2J(f, N) {
    return f * N;
  },
  'A7Q': function A7Q(f, N) {
    return f - N;
  },
  'x4H': "b2DistanceInput",
  'e1X': function e1X(f, N) {
    return f instanceof N;
  },
  'O66': "s_distanceOutput",
  'R5L': function R5L(f, N) {
    return f < N;
  },
  'V6z': function V6z(f, N) {
    return f - N;
  },
  'j6S': function j6S(f, N) {
    return f !== N;
  },
  'w6S': function w6S(f, N) {
    return f * N;
  },
  'r1c': function r1c(f, N) {
    return f * N;
  },
  'X16': "b2Assert",
  'V0G': function V0G(f, N) {
    return f * N;
  },
  'p3d': function p3d(f, N) {
    return f !== N;
  },
  'i3H': 0.3,
  'i3S': function i3S(f, N) {
    return f > N;
  },
  'r9T': "s_pRef",
  'P67': "_toRemove",
  'c0r': "b2PairLessThan",
  'M1d': function M1d(f, N) {
    return f & N;
  },
  'k1M': "m_impulse",
  'b5G': function b5G(f, N) {
    return f * N;
  },
  'f2d': function f2d(f, N) {
    return f === N;
  },
  'e7S': function e7S(f, N) {
    return f <= N;
  },
  'Y1H': 'box2d.b2ContactManager',
  'D9S': function D9S(f, N) {
    return f === N;
  },
  'f3H': "Body",
  'S4X': function S4X(f, N) {
    return f < N;
  },
  'U60': "m_jointCapacity",
  'v5J': function v5J(f, N) {
    return f === N;
  },
  'u2G': function u2G(f, N) {
    return f * N;
  },
  'Z00': "b2CollideEdgeAndPolygon",
  's6H': "m_JwD",
  'h2S': function h2S(f, N) {
    return f * N;
  },
  'H6H': 'e_wheelJoint',
  'G6G': function G6G(f, N) {
    return f / N;
  },
  'o4J': function o4J(f, N) {
    return f * N;
  },
  'K30': "indexA",
  'o3S': function o3S(f, N) {
    return f * N;
  },
  'R3': function R3(f, N) {
    return f instanceof N;
  },
  'b1J': function b1J(f, N) {
    return f * N;
  },
  'V0l': function V0l(f, N) {
    return f * N;
  },
  'z8L': function z8L(f, N) {
    return f < N;
  },
  'h4J': function h4J(f, N) {
    return f * N;
  },
  'B4d': function B4d(f, N) {
    return f === N;
  },
  'i97': "linesCross",
  'K7S': function K7S(f, N) {
    return f !== N;
  },
  'm7Q': function m7Q(f, N) {
    return f == N;
  },
  'D2S': function D2S(f, N) {
    return f === N;
  },
  'k2Q': function k2Q(f, N) {
    return f / N;
  },
  'u97': "C4",
  'Q7Q': function Q7Q(f, N) {
    return f < N;
  },
  'H27': "b2_addState",
  'O8M': "b2ClampV",
  'b7S': function b7S(f, N) {
    return f < N;
  },
  'l00': "b2Island",
  'g9c': function g9c(f, N) {
    return f * N;
  },
  'i8T': "s_v1",
  'c9T': "GetCount",
  'w3J': function w3J(f, N) {
    return f / N;
  },
  's8k': "tangentImpulses",
  'J0k': "m_positions",
  'c87': "lastIndexOf",
  'C3k': "IsLocked",
  'X67': "s_ie",
  'm5c': function m5c(f, N) {
    return f - N;
  },
  'p1X': function p1X(f, N) {
    return f instanceof N;
  },
  'a7T': 'e_islandFlag',
  'Y0a': function Y0a(f, N) {
    return f instanceof N;
  },
  'P7l': function P7l(f, N) {
    return f * N;
  },
  'T3H': 0.5,
  'S2L': function S2L(f, N) {
    return f - N;
  },
  'K1M': "lowerAngle",
  'q7T': 'e_pairBit',
  'V0J': function V0J(f, N) {
    return f * N;
  },
  'G1M': "b2BodyDef",
  'D4l': function D4l(f, N) {
    return f <= N;
  },
  'O4X': function O4X(f, N) {
    return f < N;
  },
  'g7': function g7(f, N) {
    return f === N;
  },
  'K1Q': function K1Q(f, N) {
    return f * N;
  },
  'y9a': function y9a(f, N) {
    return f > N;
  },
  'p17': "_indexB",
  'm2r': "e_all",
  'v2X': function v2X(f, N) {
    return f < N;
  },
  'z3M': 'box2d.b2PolygonShape',
  'U67': "b2_toiTime",
  'H8z': function H8z(f, N, P) {
    return f * N * P;
  },
  's5k': "m_gravityScale",
  'V4d': function V4d(f, N) {
    return f > N;
  },
  'b3r': "m_linearVelocity",
  'Y5X': function Y5X(f, N) {
    return f > N;
  },
  'j8S': function j8S(f, N) {
    return f - N;
  },
  'c1k': "b2FrictionJoint",
  'h9z': function h9z(f, N) {
    return f > N;
  },
  'H0k': "m_bodies",
  'g2l': function g2l(f, N) {
    return f !== N;
  },
  'S1C': function S1C(f, N) {
    return f - N;
  },
  'b5H': "b2CrossOneV",
  'O4Q': function O4Q(f, N) {
    return f !== N;
  },
  'w6d': function w6d(f, N) {
    return f === N;
  },
  'B0J': function B0J(f, N) {
    return f * N;
  },
  'u4L': function u4L(f, N) {
    return f * N;
  },
  'u3Q': function u3Q(f, N) {
    return f % N;
  },
  'q6X': function q6X(f, N) {
    return f >= N;
  },
  'p0T': 'box2d.b2Body',
  'g3': function g3(f, N) {
    return f in N;
  },
  'c5L': function c5L(f, N) {
    return f === N;
  },
  'V9d': function V9d(f, N) {
    return f > N;
  },
  'M6M': "s_edgeB",
  'h4Q': function h4Q(f, N) {
    return f === N;
  },
  'm8Q': "SelfSubXY",
  'K50': "b2RayCastInput",
  'D3S': function D3S(f, N) {
    return f * N;
  },
  'x0H': "angle",
  'u9J': function u9J(f, N) {
    return f * N;
  },
  's5S': function s5S(f, N) {
    return f > N;
  },
  'R8G': function R8G(f, N, P) {
    return f * N * P;
  },
  'I2J': function I2J(f, N) {
    return f !== N;
  },
  'F6l': function F6l(f, N, P) {
    return f - N - P;
  },
  'b6Q': "ZERO",
  'y6k': 'box2d.b2PulleyJoint',
  'W6z': function W6z(f, N) {
    return f < N;
  },
  'e90': "GetUserData",
  'm6Q': "DEPENDENCIES_ENABLED",
  'M56': "b2SimplexVertex",
  'N07': "settor",
  'w1Q': function w1Q(f, N) {
    return f * N;
  },
  'I2M': "m_oldManifold",
  'k86': "m_invMass",
  'r1l': function r1l(f, N) {
    return f !== N;
  },
  'i7H': 'undefined',
  'H3Q': function H3Q(f, N) {
    return f * N;
  },
  'D4M': "s_cache",
  'I8c': function I8c(f, N) {
    return f > N;
  },
  'j70': "m_groundAnchorA",
  'c2r': "m_force",
  'd8': function d8(f, N) {
    return f * N;
  },
  'b3Q': function b3Q(f, N) {
    return f & N;
  },
  'J76': "b2_kinematicBody",
  'I5T': "m_sweepB",
  'j6L': function j6L(f, N) {
    return f > N;
  },
  'N3G': function N3G(f, N) {
    return f > N;
  },
  'w2a': function w2a(f, N) {
    return f === N;
  },
  'O2': function O2(f, N) {
    return f in N;
  },
  't6C': function t6C(f, N) {
    return f - N;
  },
  'Y17': "m_springMass",
  'U8l': function U8l(f, N, P) {
    return f * N * P;
  },
  'y4X': function y4X(f, N) {
    return f < N;
  },
  'm0a': function m0a(f, N) {
    return f * N;
  },
  'A17': "b2PointState",
  'f4': function f4() {
    box2d["b2_angularSlop"] = 2 / 180 * box2d["b2_pi"];
  },
  'g6C': function g6C(f, N) {
    return f < N;
  },
  't4G': function t4G(f, N, P) {
    return f * N * P;
  },
  'W8M': "m_sBx",
  'A2z': function A2z(f, N) {
    return f instanceof N;
  },
  's80': "b2DistanceVV",
  'V7': function V7(f, N) {
    return f == N;
  },
  'x5c': function x5c(f, N) {
    return f * N;
  },
  'N4T': "m_upperLimit",
  'j7z': function j7z(f, N) {
    return f === N;
  },
  'l6X': function l6X(f, N) {
    return f >= N;
  },
  'U66': 'e_ropeJoint',
  'l7M': "s_clipPoints2",
  'O6G': function O6G(f, N, P, Z) {
    return f * N * P * Z;
  },
  'V9c': function V9c(f, N) {
    return f > N;
  },
  'Z9k': "b2DistanceSquaredVV",
  'e9L': function e9L(f, N) {
    return f > N;
  },
  'l9S': function l9S(f, N) {
    return f < N;
  },
  'U4Q': function U4Q(f, N) {
    return f < N;
  },
  'e0H': "z1",
  'j7J': function j7J(f, N) {
    return f * N;
  },
  'H0T': "sqdist",
  'j10': "_fixtureContactCallbackContext",
  'h10': "TestPoint",
  'z9l': function z9l(f, N) {
    return f * N;
  },
  'J1C': function J1C(f, N) {
    return f < N;
  },
  'Z0X': function Z0X(f, N) {
    return f * N;
  },
  'p5G': function p5G(f, N) {
    return f * N;
  },
  'P8k': "SelfNeg",
  'e8T': "_categoryContactCallbacks",
  'q0Q': function q0Q(f, N) {
    return f < N;
  },
  'v7X': function v7X(f, N) {
    return f * N;
  },
  'L1X': function L1X(f, N) {
    return f === N;
  },
  't4X': function t4X(f, N) {
    return f > N;
  },
  'K8C': function K8C(f, N) {
    return f === N;
  },
  'S1L': function S1L(f, N) {
    return f * N;
  },
  'c8S': function c8S(f, N) {
    return f - N;
  },
  'I8H': "b2PolygonContact",
  'a9G': function a9G(f, N) {
    return f * N;
  },
  'f2l': function f2l(f, N, P) {
    return f - N - P;
  },
  'A5l': function A5l(f, N) {
    return f / N;
  },
  'R2J': function R2J(f, N) {
    return f / N;
  },
  'd3H': 0.8,
  'j56': "prev",
  'N9Q': function N9Q(f, N) {
    return f == N;
  },
  'O0L': function O0L(f, N) {
    return f - N;
  },
  'c8c': function c8c(f, N) {
    return f > N;
  },
  'p3J': function p3J(f, N) {
    return f * N;
  },
  'e6a': function e6a(f, N) {
    return f / N;
  },
  'c2H': 'e_atUpperLimit',
  'q4': function q4() {
    box2d["b2_180_over_pi"] = 180.0 / box2d["b2_pi"];
  },
  'a4k': "box2d",
  'W4L': function W4L(f, N, P) {
    return f * N * P;
  },
  'f8a': function f8a(f, N) {
    return f === N;
  },
  'V7T': "b2Shape",
  'w3k': "s_edge2",
  'l27': "m_warmStarting",
  'n10': "pxm",
  'u1J': function u1J(f, N) {
    return f - N;
  },
  'M9k': "sprite",
  'U0k': "m_p",
  'L1r': 'box2d.b2DynamicTree',
  'z0G': function z0G(f, N) {
    return f <= N;
  },
  'R1k': "e_equalLimits",
  'E8l': function E8l(f, N) {
    return f === N;
  },
  'N6a': function N6a(f, N) {
    return f === N;
  },
  'j3r': "s_xf",
  'X3Q': function X3Q(f, N) {
    return f & N;
  },
  'f9M': "DrawSegment",
  'r7a': function r7a(f, N) {
    return f === N;
  },
  'x60': "b2_toiBaumgarte",
  'z4z': function z4z(f, N) {
    return f <= N;
  },
  'x5L': function x5L(f, N) {
    return f > N;
  },
  'C4S': function C4S(f, N, P) {
    return f * N * P;
  },
  'R46': "X1",
  'D5l': function D5l(f, N, P) {
    return f * N * P;
  },
  'L7c': function L7c(f, N) {
    return f * N;
  },
  'T2k': 'box2d.b2TimeOfImpact',
  'G2d': function G2d(f, N) {
    return f < N;
  },
  't8L': function t8L(f, N) {
    return f < N;
  },
  'g5H': "exportProperty",
  'x0S': function x0S(f, N) {
    return f > N;
  },
  'p8k': "Length",
  'D3r': "b2MakeNumberArray",
  'r2a': function r2a(f, N) {
    return f === N;
  },
  'C96': "ratio",
  'O0': function O0(f, N) {
    return f == N;
  },
  'm3T': "b2AddVV",
  'f2z': function f2z(f, N) {
    return f > N;
  },
  'G5M': 'e_isolated',
  'V1a': function V1a(f, N) {
    return f === N;
  },
  'M2Q': function M2Q(f, N) {
    return f / N;
  },
  'A7z': function A7z(f, N) {
    return f < N;
  },
  'J5G': function J5G(f, N) {
    return f * N;
  },
  'S4d': function S4d(f, N) {
    return f === N;
  },
  'K3X': function K3X(f, N) {
    return f / N;
  },
  'p0H': "revision",
  'k26': "invMassA",
  'x2Q': function x2Q(f, N) {
    return f < N;
  },
  'j5L': function j5L(f, N) {
    return f > N;
  },
  'u3J': function u3J(f, N) {
    return f * N;
  },
  'Q60': "r",
  'P4H': "b2WorldFlag",
  'k7l': function k7l(f, N) {
    return f - N;
  },
  'D7H': "nextBodyId",
  'B1a': function B1a(f, N) {
    return f - N;
  },
  'p26': "m_prevVertex",
  'd3L': function d3L(f, N) {
    return f < N;
  },
  'P6M': "  joints[%d] = this.m_world.CreateJoint(jd);\n",
  'y0': function y0(f, N) {
    return f == N;
  },
  'U1T': "call",
  'm4c': function m4c(f, N) {
    return f * N;
  },
  'c6L': function c6L(f, N) {
    return f < N;
  },
  'e0T': "  jd.dampingRatio = %.15f;\n",
  'T10': "I",
  'b1z': function b1z(f, N) {
    return f >= N;
  },
  'Q9': function Q9(f, N) {
    return f * N;
  },
  't9S': function t9S(f, N) {
    return f > N;
  },
  'h96': "m_lalcD",
  'R8a': function R8a(f, N) {
    return f !== N;
  },
  'y4z': function y4z(f, N) {
    return f === N;
  },
  'L8C': function L8C(f, N) {
    return f < N;
  },
  'x7J': function x7J(f, N) {
    return f * N;
  },
  'J3Q': function J3Q(f, N) {
    return f & N;
  },
  'X5S': function X5S(f, N) {
    return f === N;
  },
  'Q7l': function Q7l(f, N) {
    return f - N;
  },
  'm4M': "s_t3",
  'W1a': function W1a(f, N) {
    return f === N;
  },
  'm10': 0.25,
  'n5G': function n5G(f, N) {
    return f * N;
  },
  'Q70': "PI",
  'M7l': function M7l(f, N) {
    return f * N;
  },
  'i4J': function i4J(f, N) {
    return f * N;
  },
  'U0Q': function U0Q(f, N) {
    return f * N;
  },
  'g0G': function g0G(f, N) {
    return f * N;
  },
  'V37': "e_controllerBit",
  'w5S': function w5S(f, N) {
    return f !== N;
  },
  'a3d': function a3d(f, N) {
    return f > N;
  },
  'K2a': function K2a(f, N) {
    return f instanceof N;
  },
  'X2a': function X2a(f, N) {
    return f !== N;
  },
  'q4d': function q4d(f, N) {
    return f === N;
  },
  'Z50': '',
  'O80': "b2MidVV",
  'e5G': function e5G(f, N) {
    return f * N;
  },
  'H6c': function H6c(f, N) {
    return f <= N;
  },
  'b60': "s_indexA",
  'G1r': "b2EdgeAndPolygonContact",
  'w87': "m_normals",
  'q4z': function q4z(f, N) {
    return f < N;
  },
  'w5J': function w5J(f, N) {
    return f !== N;
  },
  'D6Q': "c4",
  'S20': "b2ConstantForceController",
  'B37': "start",
  'C8l': function C8l(f, N, P) {
    return f * N * P;
  },
  'o27': "b2DotVV",
  'O4H': "b2_toiMaxRootIters",
  'E8a': function E8a(f, N) {
    return f === N;
  },
  'R9T': "b2AddMM",
  'h0d': function h0d(f, N) {
    return f === N;
  },
  'N60': "m_vertex2",
  'S5k': "count",
  'B3a': function B3a(f, N) {
    return f instanceof N;
  },
  'o6': function o6(f, N) {
    return f * N;
  },
  'I67': "m_qC",
  'e2M': "f4",
  'F2k': "DEBUG",
  'K1l': function K1l(f, N) {
    return f * N;
  },
  'G9M': "m_sBy",
  'g0H': "m_freeList",
  'M10': "b2Vec2_zero",
  't47': "ClassDescriptor",
  'e8G': function e8G(f, N, P) {
    return f * N * P;
  },
  'w2M': "Combine2",
  'e1l': function e1l(f, N) {
    return f === N;
  },
  'x07': "e_touching",
  'V4Q': function V4Q(f, N) {
    return f === N;
  },
  'A5L': function A5L(f, N) {
    return f === N;
  },
  'n7S': function n7S(f, N) {
    return f > N;
  },
  'W2l': function W2l(f, N) {
    return f !== N;
  },
  'I7G': function I7G(f, N) {
    return f / N;
  },
  'E00': "m_referenceAngle",
  'A80': "m_ims",
  'G4C': function G4C(f, N, P) {
    return f * N * P;
  },
  'Q8a': function Q8a(f, N) {
    return f !== N;
  },
  'Q06': "s_v11",
  'P9M': "restitution",
  'z6Q': "GetChildIndexA",
  'o0L': function o0L(f, N) {
    return f - N;
  },
  'T2l': function T2l(f, N) {
    return f !== N;
  },
  'u8M': "m_lowerTranslation",
  't76': "lengthA",
  'Z2M': "broadphase",
  'W40': "useRadii",
  'J3d': function J3d(f, N) {
    return f < N;
  },
  'X9G': function X9G(f, N) {
    return f <= N;
  },
  'X8C': function X8C(f, N) {
    return f / N;
  },
  'R4c': function R4c(f, N, P) {
    return f * N * P;
  },
  'S1a': function S1a(f, N) {
    return f === N;
  },
  'E9z': function E9z(f, N, P) {
    return f * N * P;
  },
  'a0k': "m_indexB",
  'M4a': function M4a(f, N) {
    return f === N;
  },
  'I7z': function I7z(f, N) {
    return f instanceof N;
  },
  'z2l': function z2l(f, N, P) {
    return f * N * P;
  },
  'm37': "m_length",
  'd5H': "e_isolated",
  'P7X': function P7X(f, N) {
    return f - N;
  },
  'X2r': "allocator",
  'B1G': function B1G(f, N, P) {
    return f * N * P;
  },
  'q2l': function q2l(f, N, P) {
    return f * N * P;
  },
  'I7C': function I7C(f, N) {
    return f <= N;
  },
  'O1': function O1(f) {
    goog["UNSEALABLE_CONSTRUCTOR_PROPERTY_"] = f;
  },
  'z9d': function z9d(f, N) {
    return f - N;
  },
  'z7C': function z7C(f, N, P) {
    return f * N * P;
  },
  'l2G': function l2G(f, N, P) {
    return f * N * P;
  },
  's3L': function s3L(f, N) {
    return f | N;
  },
  'y5H': "e_prismaticJoint",
  'q5M': "rA",
  'T9M': "m_linearMass",
  'e3T': "TouchProxy",
  'g8L': function g8L(f, N) {
    return f - N;
  },
  'N00': "m_deltas",
  'v5L': function v5L(f, N) {
    return f === N;
  },
  't60': "p",
  'M0c': function M0c(f, N) {
    return f * N;
  },
  'G0S': function G0S(f, N) {
    return f / N;
  },
  's3J': function s3J(f, N) {
    return f - N;
  },
  'p9J': function p9J(f, N) {
    return f * N;
  },
  'G7z': function G7z(f, N) {
    return f * N;
  },
  'R7Q': function R7Q(f, N) {
    return f < N;
  },
  'r1S': function r1S(f, N) {
    return f < N;
  },
  'x8T': "b2SubVV",
  'E1': function E1(f) {
    box2d["b2_maxManifoldPoints"] = f;
  },
  'K3Q': function K3Q(f, N) {
    return f * N;
  },
  'k30': "dtRatio",
  'R8k': "  jd.enableLimit = %s;\n",
  'e9T': 1E+37,
  'J60': "e_faceB",
  'R9C': function R9C(f, N) {
    return f - N;
  },
  'o1T': "m_buffer",
  'j5J': function j5J(f, N) {
    return f * N;
  },
  'x3M': 0.001,
  'W9H': "flags",
  'Q0M': "b2ContactFeatureType",
  'm4C': function m4C(f, N) {
    return f / N;
  },
  'R97': "GetFatAABB",
  'l1H': "Dump",
  'h20': "m_lcC",
  'S60': "distance",
  'P8S': function P8S(f, N) {
    return f === N;
  },
  'g4': function g4() {
    box2d["b2_maxTranslationSquared"] = box2d["b2_maxTranslation"] * box2d["b2_maxTranslation"];
  },
  'P50': "m_torque",
  'V7k': "m_ratio",
  'O70': "m_upperTranslation",
  'l3S': function l3S(f, N) {
    return f < N;
  },
  'C1T': 'e_enabledFlag',
  'I20': "Q4",
  'T5d': function T5d(f, N, P, Z) {
    return f * N * P * Z;
  },
  'C5X': function C5X(f, N) {
    return f === N;
  },
  'Z67': "s_rf",
  'c7l': function c7l(f, N) {
    return f * N;
  },
  'l07': "m_normal1",
  'a8X': function a8X(f, N) {
    return f > N;
  },
  'a4L': function a4L(f, N) {
    return f - N;
  },
  'x6Q': "b2CircleContact",
  'J3c': function J3c(f, N) {
    return f - N;
  },
  'F4S': function F4S(f, N) {
    return f !== N;
  },
  'I0a': function I0a(f, N) {
    return f < N;
  },
  'S6z': function S6z(f, N) {
    return f * N;
  },
  'i7': function i7(f, N) {
    return f instanceof N;
  },
  'q1r': "s_localNormal",
  'y2M': "Solve33",
  'u3z': function u3z(f, N) {
    return f < N;
  },
  'j7T': "isNull",
  'h4d': function h4d(f, N) {
    return f === N;
  },
  'A07': "GetChildEdge",
  'z00': "b2GearJointDef",
  'Q1M': "b2_removeState",
  'L0T': "m_stepComplete",
  'w37': 'box2d.b2FrictionJoint',
  'b2a': function b2a(f, N) {
    return f === N;
  },
  'c6M': "degToRad",
  'u1H': "s_solverData",
  'B9a': function B9a(f, N) {
    return f === N;
  },
  'Y7Q': function Y7Q(f, N) {
    return f == N;
  },
  'p97': "m_qA",
  'L5M': "s_planePoint",
  'f7G': function f7G(f, N) {
    return f * N;
  },
  'u4S': function u4S(f, N) {
    return f !== N;
  },
  'A5C': function A5C(f, N) {
    return f === N;
  },
  'e4S': function e4S(f, N) {
    return f * N;
  },
  'X8z': function X8z(f, N) {
    return f / N;
  },
  'I7L': function I7L(f, N) {
    return f > N;
  },
  'Q5L': function Q5L(f, N) {
    return f === N;
  },
  'z5H': "proxy",
  'L16': "s_J1",
  's3c': function s3c(f, N) {
    return f * N;
  },
  'O5Q': "b2MulXX",
  'q9d': function q9d(f, N) {
    return f instanceof N;
  },
  'h9S': function h9S(f, N) {
    return f > N;
  },
  'r3L': function r3L(f, N) {
    return f < N;
  },
  'T0J': function T0J(f, N) {
    return f * N;
  },
  'n1': function n1() {
    goog["defineClass"]["OBJECT_PROTOTYPE_FIELDS_"] = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  },
  'K3C': function K3C(f, N) {
    return f * N;
  },
  'F6Q': "bodyA",
  'e8X': function e8X(f, N) {
    return f >= N;
  },
  'T6z': function T6z(f, N) {
    return f * N;
  },
  'L00': "b2AbsV",
  'Y46': "b2TensorDampingController",
  'A3H': "b2_baumgarte",
  'g8G': function g8G(f, N) {
    return f === N;
  },
  'w5M': "GetFixtureList",
  'k4a': function k4a(f, N) {
    return f < N;
  },
  'H3C': function H3C(f, N) {
    return f * N;
  },
  'k5': function k5(f, N) {
    return f * N;
  },
  'Y70': "vertices",
  'l37': "m_bodyA",
  'm8d': function m8d(f, N) {
    return f instanceof N;
  },
  'X3c': function X3c(f, N) {
    return f * N;
  },
  'K47': 'box2d.b2ConstantForceController',
  'B2r': 'e_revoluteJoint',
  'C4C': function C4C(f, N) {
    return f > N;
  },
  'Z8J': function Z8J(f, N) {
    return f * N;
  },
  'h0J': function h0J(f, N) {
    return f * N;
  },
  'Z0z': function Z0z(f, N) {
    return f instanceof N;
  },
  'A6k': 'e_distanceJoint',
  'Q0c': function Q0c(f, N) {
    return f > N;
  },
  'n0C': function n0C(f, N) {
    return f * N;
  },
  'k50': "b2TestOverlapAABB",
  'Z9T': "y",
  'C4T': "enableLimit",
  'y0Q': function y0Q(f, N) {
    return f == N;
  },
  'O1r': "b2_gjkIters",
  'y7H': "s_Q",
  'J8M': "MAX_VALUE",
  'k1d': function k1d(f, N) {
    return f === N;
  },
  'f4a': function f4a(f, N) {
    return f === N;
  },
  'p3Q': function p3Q(f, N) {
    return f - N;
  },
  'n20': 'box2d.b2Controller',
  'r8H': "localAnchorA",
  'r8C': function r8C(f, N) {
    return f instanceof N;
  },
  'g1G': function g1G(f, N) {
    return f * N;
  },
  'd76': "wA",
  'H2a': function H2a(f, N) {
    return f instanceof N;
  },
  'j0c': function j0c(f, N) {
    return f * N;
  },
  'o0M': "b2_180_over_pi",
  'i7T': 'e_inactiveLimit',
  'I7J': function I7J(f, N) {
    return f - N;
  },
  'd3J': function d3J(f, N) {
    return f * N;
  },
  'd0M': "sideOffset2",
  'c5': function c5(f, N) {
    return f - N;
  },
  'H7S': function H7S(f, N) {
    return f < N;
  },
  'g4J': function g4J(f, N) {
    return f * N;
  },
  'O8L': function O8L(f, N) {
    return f <= N;
  },
  'd8T': "A4",
  'F1X': function F1X(f, N) {
    return f < N;
  },
  's3z': function s3z(f, N) {
    return f > N;
  },
  'u00': "m_mD",
  'B9S': function B9S(f, N) {
    return f * N;
  },
  'm5M': "m_moveCount",
  'e1M': "b2DestructionListener",
  'y3M': "SetContactListener",
  'h6M': "DestroyProxies",
  'q5Q': "b2BuoyancyController",
  'R07': 'e_fixedRotationFlag',
  'o0X': function o0X(f, N) {
    return f === N;
  },
  'a2l': function a2l(f, N, P) {
    return f * N * P;
  },
  'e6l': function e6l(f, N) {
    return f * N;
  },
  'f5L': function f5L(f, N) {
    return f > N;
  },
  'I0r': "b2AreaJoint",
  'c90': "filterFunction",
  'u1Q': function u1Q(f, N) {
    return f * N;
  },
  'R47': 'b2_dynamicBody',
  'h66': "split",
  'H0H': "e_islandFlag",
  't2H': "maxMotorForce",
  'C9T': "m_gravity",
  'e8C': function e8C(f, N) {
    return f instanceof N;
  },
  'L6Q': 'e_overlapped',
  'Q2J': function Q2J(f, N) {
    return f * N;
  },
  'U5M': "e_distanceJoint",
  'e9J': function e9J(f, N) {
    return f - N;
  },
  'U6c': function U6c(f, N, P) {
    return f * N * P;
  },
  'h1C': function h1C(f, N) {
    return f - N;
  },
  'g1M': "m_JvBD",
  'A7L': function A7L(f, N) {
    return f * N;
  },
  'D4c': function D4c(f, N, P) {
    return f * N * P;
  },
  'T2S': function T2S(f, N) {
    return f < N;
  },
  'V1H': "  jd.enableMotor = %s;\n",
  'w7M': "ShiftOrigin",
  'g0z': function g0z(f, N) {
    return f > N;
  },
  'S4Q': function S4Q(f, N) {
    return f === N;
  },
  'U': function U(f) {
    goog["DEBUG"] = f;
  },
  'Q4r': "AddBody",
  'E4r': "b2RotateV",
  'o76': "FreeNode",
  'b50': "q",
  'F40': "s_xfB",
  'R3T': "b2SeparationFunctionType",
  'G77': "m_normal2",
  'v7Q': function v7Q(f, N) {
    return f * N;
  },
  'a2a': function a2a(f, N) {
    return f === N;
  },
  'Y8c': function Y8c(f, N) {
    return f / N;
  },
  'Y7l': function Y7l(f, N) {
    return f === N;
  },
  'y4d': function y4d(f, N) {
    return f & N;
  },
  'p07': "m_angularOffset",
  'x90': "b2ChainShape",
  'D60': "s_simplex",
  'l0X': function l0X(f, N) {
    return f / N;
  },
  'z0': function z0(f, N) {
    return f > N;
  },
  'M4C': function M4C(f, N) {
    return f * N;
  },
  'B6': function B6(f, N) {
    return f * N;
  },
  'x4S': function x4S(f, N) {
    return f * N;
  },
  's1c': function s1c(f, N) {
    return f < N;
  },
  'k7z': function k7z(f, N) {
    return f instanceof N;
  },
  'r1X': function r1X(f, N) {
    return f === N;
  },
  'H5l': function H5l(f, N, P) {
    return f * N * P;
  },
  'a1z': function a1z(f, N) {
    return f === N;
  },
  'r6d': function r6d(f, N) {
    return f === N;
  },
  'u7a': function u7a(f, N) {
    return f === N;
  },
  'N0C': function N0C(f, N) {
    return f * N;
  },
  'o87': 'Reset',
  'O86': "s_e2",
  'q8M': "m_invIA",
  'm8a': function m8a(f, N) {
    return f - N;
  },
  'b6c': function b6c(f, N) {
    return f - N;
  },
  'p7M': "s_impulse",
  'p8X': function p8X(f, N) {
    return f >= N;
  },
  'X9X': function X9X(f, N, P) {
    return f * N / P;
  },
  'L3d': function L3d(f, N) {
    return f === N;
  },
  'e16': 'e_autoSleepFlag',
  'f7l': function f7l(f, N) {
    return f !== N;
  },
  'z5k': 'e_toiFlag',
  'j4C': function j4C(f, N) {
    return f * N;
  },
  'i1r': "  jd.collideConnected = %s;\n",
  'q2T': "_bodyContactCallbackContext",
  'T9k': "next",
  'X6a': function X6a(f, N) {
    return f & N;
  },
  'n1Q': function n1Q(f, N) {
    return f < N;
  },
  'f66': "friction",
  'x7X': function x7X(f, N) {
    return f / N;
  },
  'a7a': function a7a(f, N) {
    return f & N;
  },
  'N16': "solve",
  'Q4k': "object",
  'p3r': "e_locked",
  'b8C': function b8C(f, N) {
    return f > N;
  },
  'H1C': function H1C(f, N) {
    return f / N;
  },
  'C5C': function C5C(f, N) {
    return f === N;
  },
  'm1r': "m_linearImpulse",
  'q2L': function q2L(f, N) {
    return f !== N;
  },
  'h0L': function h0L(f, N) {
    return f <= N;
  },
  'p5d': function p5d(f, N) {
    return f % N;
  },
  'J4M': 'number',
  'a5G': function a5G(f, N, P) {
    return f * N * P;
  },
  'X60': "b2IsPowerOfTwo",
  't8k': "m_contactListener",
  't3S': function t3S(f, N) {
    return f * N;
  },
  'H1l': function H1l(f, N) {
    return f === N;
  },
  'Y7C': function Y7C(f, N) {
    return f * N;
  },
  'i6C': function i6C(f, N) {
    return f / N;
  },
  'i5a': function i5a(f, N) {
    return f * N;
  },
  'U6Q': "mixin",
  't9H': 'box2d.b2MotorJoint',
  's96': "e_shapeBit",
  'w0M': "isArrayLike",
  'B40': "getCssName",
  't4Q': function t4Q(f, N) {
    return f / N;
  },
  'u3d': function u3d(f, N) {
    return f === N;
  },
  'q2S': function q2S(f, N) {
    return f < N;
  },
  'b9J': function b9J(f, N) {
    return f * N;
  },
  'Q7z': function Q7z(f, N) {
    return f === N;
  },
  'E0C': function E0C(f, N, P) {
    return f * N * P;
  },
  'V6k': "normals",
  'y1H': "ez",
  'j2Q': function j2Q(f, N) {
    return f * N;
  },
  'f5c': function f5c(f, N) {
    return f * N;
  },
  'z77': 'box2d.b2CollideCircle',
  'D10': "J",
  'm5X': function m5X(f, N) {
    return f === N;
  },
  'G4r': 'box2d.b2Contact',
  'Y0r': "b2RopeDef",
  'D0k': "fixedRotation",
  's1l': function s1l(f, N) {
    return f > N;
  },
  'a90': "b2MulTXV",
  's8X': function s8X(f, N) {
    return f > N;
  },
  'g60': "major",
  'C1d': function C1d(f, N) {
    return f === N;
  },
  'I00': "GetWorldPoint",
  'l3H': "ENABLE_ASSERTS",
  'g2S': function g2S(f, N) {
    return f < N;
  },
  'E5d': function E5d(f, N, P, Z) {
    return f * N * P * Z;
  },
  's6G': function s6G(f, N) {
    return f / N;
  },
  'k0T': "CLOSURE_BASE_PATH",
  'a2M': 'box2d.b2RopeJoint',
  'K0M': "BufferMove",
  'd6d': function d6d(f, N) {
    return f === N;
  },
  'V96': "m_invMassB",
  'w1L': function w1L(f, N, P) {
    return f * N * P;
  },
  'M8Q': 7,
  'H3T': "m_controllerCount",
  'E5c': function E5c(f, N) {
    return f - N;
  },
  'z0J': function z0J(f, N) {
    return f * N;
  },
  'b5Q': "bodyB",
  'E8S': function E8S(f, N) {
    return f - N;
  },
  'N66': "m_hasVertex0",
  'w6T': "invIB",
  'J5T': "radiusB",
  'b27': "b2MulRR",
  'A9X': function A9X(f, N) {
    return f <= N;
  },
  'W1T': "sideNormal2",
  'y5k': "m_allocator",
  'C27': "b2ContactEdge",
  'Z4J': function Z4J(f, N) {
    return f * N;
  },
  'e8k': 'e_areaJoint',
  'H20': "SetXYZ",
  'c7Q': function c7Q(f, N) {
    return f - N;
  },
  'V4z': function V4z(f, N) {
    return f - N;
  },
  'L2a': function L2a(f, N) {
    return f === N;
  },
  'k47': "b2ManifoldPoint",
  'K3c': function K3c(f, N) {
    return f * N;
  },
  'd9l': function d9l(f, N, P) {
    return f * N * P;
  },
  'c8k': "m_iA",
  'f40': "K",
  'u8z': function u8z(f, N) {
    return f < N;
  },
  'v2l': function v2l(f, N, P) {
    return f * N * P;
  },
  'Q0r': "removeBody",
  'y2H': "g4",
  'K6a': function K6a(f, N) {
    return f === N;
  },
  'b7c': function b7c(f, N) {
    return f * N;
  },
  'V0Q': function V0Q(f, N) {
    return f - N;
  },
  'r6a': function r6a(f, N) {
    return f <= N;
  },
  'b97': "    /*box2d.b2Vec2[]*/ var vs = box2d.b2Vec2.MakeArray(%d);\n",
  'r0C': function r0C(f, N) {
    return f * N;
  },
  'K6c': function K6c(f, N) {
    return f < N;
  },
  'J1z': function J1z(f, N) {
    return f > N;
  },
  'e5S': function e5S(f, N) {
    return f === N;
  },
  'Y7G': function Y7G(f, N) {
    return f * N;
  },
  'G7L': function G7L(f, N) {
    return f * N;
  },
  'T50': "b2Swap",
  'H3r': "setCssNameMapping",
  'l4X': function l4X(f, N) {
    return f < N;
  },
  'P7L': function P7L(f, N) {
    return f - N;
  },
  'g8M': "e_awakeFlag",
  'B9H': "localPoint",
  'c7L': function c7L(f, N) {
    return f < N;
  },
  'F1r': "b2_maxTOIContacts",
  'm0': function m0(f, N) {
    return f == N;
  },
  'y9d': function y9d(f, N) {
    return f | N;
  },
  'j3T': 10,
  'r8k': "m_rA",
  'Q6S': function Q6S(f, N) {
    return f !== N;
  },
  'Y3k': "Solve",
  'm7C': function m7C(f, N) {
    return f * N;
  },
  'u7c': function u7c(f, N) {
    return f * N;
  },
  'd3G': function d3G(f, N) {
    return f < N;
  },
  'e30': "writeScripts_",
  'X3': function X3(f, N) {
    return f in N;
  },
  'x7C': function x7C(f, N) {
    return f - N;
  },
  'c7G': function c7G(f, N) {
    return f * N;
  },
  'g0M': "s_e13",
  'X3C': function X3C(f, N) {
    return f > N;
  },
  'R2H': 'b2_persistState',
  'n3T': "define",
  'D1L': function D1L(f, N) {
    return f * N;
  },
  'v3': function v3(f, N) {
    return f == N;
  },
  'E2l': function E2l(f, N) {
    return f > N;
  },
  'A1r': 'e_points',
  'x9': function x9(f, N) {
    return f > N;
  },
  'B60': "m_filter",
  'I8a': function I8a(f, N) {
    return f & N;
  },
  'O4l': function O4l(f, N, P) {
    return f * N * P;
  },
  'D06': "b2EPColliderVertexType",
  'r5S': function r5S(f, N) {
    return f === N;
  },
  'C6L': function C6L(f, N) {
    return f > N;
  },
  'j2z': function j2z(f, N) {
    return f < N;
  },
  'm4G': function m4G(f, N, P) {
    return f - N - P;
  },
  'x1L': function x1L(f, N) {
    return f * N;
  },
  'N9z': function N9z(f, N) {
    return f * N;
  },
  'R7G': function R7G(f, N) {
    return f * N;
  },
  'M1': function M1(f) {
    box2d["b2_maxPolygonVertices"] = f;
  },
  'J': function J() {
    goog["DEPENDENCIES_ENABLED"] = !COMPILED && goog["ENABLE_DEBUG_LOADER"];
  },
  'R8d': function R8d(f, N) {
    return f instanceof N;
  },
  'h4': function h4(f) {
    box2d["b2_toiCalls"] = f;
  },
  'L3z': function L3z(f, N) {
    return f < N;
  },
  'h0z': function h0z(f, N) {
    return f > N;
  },
  'e9G': function e9G(f, N) {
    return f * N;
  },
  'i3l': function i3l(f, N, P) {
    return f * N * P;
  },
  't7H': "defineClass",
  'c2d': function c2d(f, N) {
    return f === N;
  },
  'Y7X': function Y7X(f, N) {
    return f % N;
  },
  'c9C': function c9C(f, N, P) {
    return f * N * P;
  },
  'U0l': function U0l(f, N) {
    return f * N;
  },
  'd6l': function d6l(f, N) {
    return f === N;
  },
  'f7L': function f7L(f, N) {
    return f - N;
  },
  'I2r': 'e_filterFlag',
  'n8': function n8(f, N) {
    return f * N;
  },
  'g1k': "getFixturesAtPoint",
  'N9T': "Balance",
  'V9T': "m_motorMass",
  'q20': "m_lcB",
  'V0': function V0(f, N) {
    return f == N;
  },
  'F5k': "b2_epsilon",
  'X1M': "GetInverse",
  'K4G': function K4G(f, N, P) {
    return f * N * P;
  },
  'e3C': function e3C(f, N) {
    return f * N;
  },
  'D4d': function D4d(f, N) {
    return f === N;
  },
  'S0k': "DefaultDebugDraw",
  't67': "b2Abs",
  'P4k': "J4",
  'M0T': 50,
  'G8l': function G8l(f, N) {
    return f * N;
  },
  'v06': "m_vertex1",
  'l8G': function l8G(f, N) {
    return f === N;
  },
  'U9S': function U9S(f, N) {
    return f <= N;
  },
  's4T': "floor",
  'V0M': "CreateProxies",
  'N2k': "type",
  'R6k': "body",
  'x8M': "b2Rot",
  'p3C': function p3C(f, N) {
    return f * N;
  },
  'l4H': "m_enableMotor",
  'h8L': function h8L(f, N) {
    return f < N;
  },
  'Q2d': function Q2d(f, N) {
    return f > N;
  },
  'h4H': "Report",
  'e3J': function e3J(f, N) {
    return f * N;
  },
  'g5a': function g5a(f, N) {
    return f > N;
  },
  'h3T': "b2MouseJoint",
  'X7S': function X7S(f, N) {
    return f * N;
  },
  'H9C': function H9C(f, N) {
    return f * N;
  },
  'P2d': function P2d(f, N) {
    return f > N;
  },
  'L6k': 'e_controllerBit',
  'Z0d': function Z0d(f, N) {
    return f !== N;
  },
  'X9L': function X9L(f, N) {
    return f > N;
  },
  'b96': "m_bias",
  'x8H': "localAnchorB",
  'f1d': function f1d(f, N) {
    return f === N;
  },
  'x6L': function x6L(f, N) {
    return f * N;
  },
  'Q2': function Q2(f, N) {
    return f in N;
  },
  'w77': "angularA",
  'V8G': function V8G(f, N) {
    return f > N;
  },
  'G5k': "K4",
  'j5C': function j5C(f, N) {
    return f === N;
  },
  'Z96': "Set",
  'r7k': "SetShape",
  'Z4M': "m_xf",
  'X50': "s_edgeShape",
  'D8Q': 1,
  'G9': function G9(f, N) {
    return f > N;
  },
  'g0Q': function g0Q(f, N) {
    return f <= N;
  },
  'o80': 'box2d.b2PolygonAndCircleContact',
  'b9M': "b2CollidePolygons",
  'P26': "b2DynamicTree",
  'I5C': function I5C(f, N) {
    return f === N;
  },
  'm8S': function m8S(f, N) {
    return f === N;
  },
  'F6k': "globalize",
  'S3k': "maxMotorTorque",
  'F3d': function F3d(f, N) {
    return f !== N;
  },
  'r8l': function r8l(f, N, P) {
    return f * N * P;
  },
  'Q37': "b2ContactPositionConstraint",
  'o0J': function o0J(f, N) {
    return f * N;
  },
  'U0X': function U0X(f, N) {
    return f * N;
  },
  'i6z': function i6z(f, N) {
    return f === N;
  },
  'p8C': function p8C(f, N) {
    return f < N;
  },
  'r3C': function r3C(f, N) {
    return f * N;
  },
  'U4X': function U4X(f, N) {
    return f === N;
  },
  's7a': function s7a(f, N) {
    return f < N;
  },
  'O2L': function O2L(f, N) {
    return f < N;
  },
  'L1J': function L1J(f, N) {
    return f !== N;
  },
  'g16': "b2PolygonShape",
  'D2c': function D2c(f, N, P, Z) {
    return f * N * P * Z;
  },
  'y7': function y7(f, N) {
    return f == N;
  },
  'V4k': "b2_toiCalls",
  'w3c': function w3c(f, N) {
    return f * N;
  },
  'e26': "ptmRatio",
  'q6H': "random",
  'Y2X': function Y2X(f, N) {
    return f % N;
  },
  'E5J': function E5J(f, N) {
    return f * N;
  },
  'D87': "_bodyContactCallbacks",
  'a6d': function a6d(f, N) {
    return f === N;
  },
  'N7a': function N7a(f, N) {
    return f === N;
  },
  'g2L': function g2L(f, N) {
    return f * N;
  },
  'e46': "tagUnsealableClass",
  'w3Q': function w3Q(f, N) {
    return f - N;
  },
  'c16': "Box2D",
  'E8M': "target",
  'd2H': "s_saveB",
  'y00': "GetShape",
  'A1T': "right",
  'R9': function R9(f, N) {
    return f & N;
  },
  'Y0M': "m_joints",
  'e86': "b2_aabbMultiplier",
  'F3Q': function F3Q(f, N) {
    return f < N;
  },
  'Q46': "destroyFcn",
  'e9z': function e9z(f, N) {
    return f < N;
  },
  'x5z': function x5z(f, N) {
    return f >= N;
  },
  'C97': "b2_toiMaxTime",
  'L86': "addChain",
  'v50': "e_bulletHitFlag",
  'D8H': "b2BodyFlag",
  't4J': function t4J(f, N) {
    return f * N;
  },
  'c46': "a4",
  'n9Q': function n9Q(f, N) {
    return f < N;
  },
  'A8k': "GetDensity",
  'C5L': function C5L(f, N) {
    return f === N;
  },
  'v6G': function v6G(f, N) {
    return f !== N;
  },
  'G56': "dampingRatio",
  'H7c': function H7c(f, N) {
    return f / N;
  },
  'X1Q': function X1Q(f, N) {
    return f * N;
  },
  'X57': "DefaultContactListener",
  'i0G': function i0G(f, N) {
    return f * N;
  },
  'A2d': function A2d(f, N) {
    return f === N;
  },
  'T3a': function T3a(f, N) {
    return f === N;
  },
  'D2M': "m_restitution",
  'O10': "categoryBits",
  'A0k': "m_proxyA",
  's3Q': function s3Q(f, N) {
    return f & N;
  },
  'U0r': "_fixturePostsolveCallbackContext",
  'p47': "_fixtureContactCallbacks",
  'L8H': "worldBoundsFilterCategory",
  'r1J': function r1J(f, N) {
    return f !== N;
  },
  'z8Q': 8,
  'I8k': 'box2d.b2BroadPhase',
  'c6Q': 0.01,
  'J3z': function J3z(f, N) {
    return f < N;
  },
  't6M': 'e_aabbBit',
  'Q2Q': function Q2Q(f, N) {
    return f * N;
  },
  'N9J': function N9J(f, N) {
    return f * N;
  },
  'k56': "bullet",
  'i66': "DestroyFixture",
  'w9J': function w9J(f, N) {
    return f - N;
  },
  'i0M': 1.0,
  'p2k': "m_k2",
  'A46': "o1",
  'B2k': "e_pairBit",
  'x7G': function x7G(f, N) {
    return f <= N;
  },
  'r1C': function r1C(f, N, P) {
    return f * N * P;
  },
  'O0G': function O0G(f, N) {
    return f * N;
  },
  'H8X': function H8X(f, N) {
    return f > N;
  },
  'V5a': function V5a(f, N) {
    return f / N;
  },
  'W4d': function W4d(f, N) {
    return f === N;
  },
  'Q5z': function Q5z(f, N) {
    return f * N;
  },
  's8z': function s8z(f, N) {
    return f === N;
  },
  'A7X': function A7X(f, N) {
    return f % N;
  },
  'J9L': function J9L(f, N) {
    return f - N;
  },
  'i9S': function i9S(f, N) {
    return f === N;
  },
  'm2c': function m2c(f, N) {
    return f - N;
  },
  'c4c': function c4c(f, N) {
    return f - N;
  },
  's8l': function s8l(f, N) {
    return f * N;
  },
  'M6c': function M6c(f, N) {
    return f * N;
  },
  't5T': 'e_circleShape',
  'E5M': "b2ClipVertex",
  'Y4c': function Y4c(f, N) {
    return f * N;
  },
  'o2S': function o2S(f, N) {
    return f < N;
  },
  'N30': "m_linearDamping",
  'V2l': function V2l(f, N) {
    return f !== N;
  },
  'R5z': function R5z(f, N) {
    return f >= N;
  },
  'U30': "a",
  'U1r': "hasUid",
  'p20': "m_out_xf",
  'N10': "prevBody",
  'h5G': function h5G(f, N, P) {
    return f * N * P;
  },
  'j00': "m_centroidB",
  'f57': "getMsgWithFallback",
  'x5X': function x5X(f, N) {
    return f > N;
  },
  'S00': 'box2d.b2AreaJoint',
  'a1k': "m_bodyCapacity",
  'G6H': "s_polygonAxis",
  'i1M': "indexOf",
  'O4J': function O4J(f, N) {
    return f * N;
  },
  'N7c': function N7c(f, N, P) {
    return f * N * P;
  },
  'b57': "b2Free",
  'p7d': function p7d(f, N) {
    return f < N;
  },
  'E5C': function E5C(f, N) {
    return f === N;
  },
  'x8c': function x8c(f, N) {
    return f / N;
  },
  'a7M': "Clear",
  'Y6M': "iterations",
  'V5T': "b2_velocityThreshold",
  'S0l': function S0l(f, N) {
    return f * N;
  },
  'M5Q': "b2RotateDegreesV",
  't3c': function t3c(f, N) {
    return f / N;
  },
  'P8a': function P8a(f, N) {
    return f !== N;
  },
  'T9l': function T9l(f, N) {
    return f - N;
  },
  'L3l': function L3l(f, N) {
    return f !== N;
  },
  'K1G': function K1G(f, N) {
    return f * N;
  },
  'X3X': function X3X(f, N) {
    return f >= N;
  },
  'I77': "Collide",
  'd2a': function d2a(f, N) {
    return f === N;
  },
  'L9G': function L9G(f, N) {
    return f * N;
  },
  'T8G': function T8G(f, N) {
    return f - N;
  },
  'B06': "set",
  'H4l': function H4l(f, N, P) {
    return f * N * P;
  },
  's9z': function s9z(f, N) {
    return f < N;
  },
  'g9X': function g9X(f, N) {
    return f / N;
  },
  'P7z': function P7z(f, N) {
    return f instanceof N;
  },
  'o4d': function o4d(f, N) {
    return f === N;
  },
  'Y9': function Y9(f, N) {
    return f > N;
  },
  'z6': function z6(f, N) {
    return f * N;
  },
  'x10': "CreateJoint",
  'y4M': 'b2_removeState ',
  'l16': "nextController",
  'n1c': function n1c(f, N) {
    return f / N;
  },
  'A2c': function A2c(f, N) {
    return f * N;
  },
  'P7J': function P7J(f, N) {
    return f * N;
  },
  'p9G': function p9G(f, N) {
    return f * N;
  },
  't0X': function t0X(f, N) {
    return f - N;
  },
  'D6': function D6(f, N) {
    return f - N;
  },
  'm2k': "joints",
  'G5': function G5(f, N) {
    return f - N;
  },
  'C2Q': function C2Q(f, N) {
    return f * N;
  },
  'J0C': function J0C(f, N) {
    return f * N;
  },
  'S7T': "b2AddVCrossSV",
  'a3M': "y4",
  'P5M': "_fixturePresolveCallbacks",
  'O30': "m_edgeA",
  'R0k': "m_manifold",
  'o1k': "m_angularDamping",
  'W6C': function W6C(f, N) {
    return f === N;
  },
  'Y56': "x4",
  'X3k': "e_face",
  'w3G': function w3G(f, N) {
    return f < N;
  },
  'J8X': function J8X(f, N) {
    return f > N;
  },
  'G4G': function G4G(f, N, P) {
    return f * N * P;
  },
  'L7H': "m_hasPrevVertex",
  'z7': function z7(f, N) {
    return f === N;
  },
  'F0d': function F0d(f, N) {
    return f < N;
  },
  'n2a': function n2a(f, N) {
    return f === N;
  },
  'n1T': "e_aabbBit",
  'v1k': "CLOSURE_IMPORT_SCRIPT",
  'r06': 'box2d.b2TensorDampingController',
  'd7H': 'e_shapeBit',
  'X5k': "T4",
  'V8J': function V8J(f, N) {
    return f * N;
  },
  'h97': "addRectangle",
  'Z2l': function Z2l(f, N) {
    return f - N;
  },
  'd8C': function d8C(f, N) {
    return f / N;
  },
  't06': "m_start",
  'R0S': function R0S(f, N) {
    return f < N;
  },
  'x3r': "b2_timeToSleep",
  't5H': 'box2d.b2Collision',
  's06': "m_as",
  'W0G': function W0G(f, N) {
    return f * N;
  },
  'z47': "_bodyPostsolveCallbackContext",
  'G9X': function G9X(f, N) {
    return f / N;
  },
  'p9Q': function p9Q(f, N) {
    return f - N;
  },
  'I70': 'e_prismaticJoint',
  'q8L': function q8L(f, N) {
    return f * N;
  },
  's1C': function s1C(f, N) {
    return f < N;
  },
  'N2M': "s_normal1",
  'G2c': function G2c(f, N) {
    return f / N;
  },
  'E36': "b2CrossV3V3",
  'c1G': function c1G(f, N) {
    return f * N;
  },
  'v5M': "b2ContactRegister",
  'L40': "indexB",
  'h80': "AddContact",
  'H3z': function H3z(f, N) {
    return f % N;
  },
  'g9d': function g9d(f, N) {
    return f > N;
  },
  'B4J': function B4J(f, N) {
    return f * N;
  },
  'd7S': function d7S(f, N) {
    return f <= N;
  },
  'H6J': function H6J(f, N) {
    return f * N;
  },
  'C2C': function C2C(f, N) {
    return f > N;
  },
  'm6T': "invIA",
  'o2c': function o2c(f, N) {
    return f !== N;
  },
  'r0r': "s_v",
  'X6T': "s_d2",
  'u8': function u8(f, N) {
    return f >= N;
  },
  'G5l': function G5l(f, N) {
    return f > N;
  },
  'x5M': "m_islandIndex",
  'K9L': function K9L(f, N) {
    return f - N;
  },
  'r8X': function r8X(f, N) {
    return f < N;
  },
  'q7': function q7(f, N) {
    return f === N;
  },
  'u9L': function u9L(f, N) {
    return f - N;
  },
  'B4k': "SetAsOrientedBox",
  'M5c': function M5c(f, N) {
    return f < N;
  },
  'N8T': "v",
  'D57': "ey",
  'u4H': "m_out_extent",
  'X': function X(f) {
    goog["basePath"] = f;
  },
  'n7a': function n7a(f, N) {
    return f >= N;
  },
  'F67': "b2Timer",
  'd9G': function d9G(f, N) {
    return f / N;
  },
  's9Q': function s9Q(f, N) {
    return f < N;
  },
  'j3H': 0.1,
  'n87': 'e_centerOfMassBit',
  'w56': "m_lowerAngle",
  'X7M': "b2PrismaticJoint",
  'g2r': "addDependency",
  'Q7k': "b2PositionSolverManifold",
  'V0z': function V0z(f, N) {
    return f < N;
  },
  'v2M': "shape",
  'J8l': function J8l(f, N, P) {
    return f * N * P;
  },
  'K5J': function K5J(f, N) {
    return f === N;
  },
  'd9L': function d9L(f, N) {
    return f > N;
  },
  'R7C': function R7C(f, N) {
    return f !== N;
  },
  'y0J': function y0J(f, N) {
    return f * N;
  },
  'q50': "b2MouseJointDef",
  'y1a': function y1a(f, N) {
    return f === N;
  },
  'J4r': "m_Ls",
  'W9d': function W9d(f, N) {
    return f / N;
  },
  'X9H': "b2Controller",
  'P7G': function P7G(f, N) {
    return f * N;
  },
  'y9M': "sideOffset1",
  'o9d': function o9d(f, N) {
    return f instanceof N;
  },
  'j7Q': function j7Q(f, N) {
    return f > N;
  },
  'F3G': function F3G(f, N) {
    return f * N;
  },
  'b4': function b4(f) {
    box2d["b2_maxTranslation"] = f;
  },
  'V4': function V4(f) {
    box2d["b2_baumgarte"] = f;
  },
  's1J': function s1J(f, N) {
    return f * N;
  },
  'w3C': function w3C(f, N) {
    return f > N;
  },
  'k2T': "v2",
  'J7c': function J7c(f, N) {
    return f > N;
  },
  'v4a': function v4a(f, N) {
    return f === N;
  },
  'k2J': function k2J(f, N) {
    return f * N;
  },
  'd3Q': function d3Q(f, N) {
    return f % N;
  },
  'a6J': function a6J(f, N) {
    return f / N;
  },
  'q5a': function q5a(f, N) {
    return f > N;
  },
  't1L': function t1L(f, N) {
    return f > N;
  },
  'V9a': function V9a(f, N) {
    return f === N;
  },
  'M4T': "normal",
  'y9c': function y9c(f, N) {
    return f > N;
  },
  'o4T': "m_radius",
  'b17': "nextFixtureId",
  's7S': function s7S(f, N) {
    return f === N;
  },
  'K4': function K4(f) {
    box2d["b2_timeToSleep"] = f;
  },
  'Z5H': "b2Asin",
  'I5c': function I5c(f, N) {
    return f / N;
  },
  'U2L': function U2L(f, N) {
    return f * N;
  },
  'i4': function i4(f) {
    box2d["b2_changelist"] = f;
  },
  'Y4G': function Y4G(f, N) {
    return f === N;
  },
  's4': function s4(f) {
    box2d["b2_maxLinearCorrection"] = f;
  },
  'f9': function f9(f, N) {
    return f < N;
  },
  'M60': "Query",
  'f16': "s_translation",
  's6c': function s6c(f, N) {
    return f <= N;
  },
  'f0S': function f0S(f, N) {
    return f * N;
  },
  'j57': "fraction",
  'd6M': "SelfSub",
  'P76': "m_beta",
  'y1c': function y1c(f, N) {
    return f / N;
  },
  'c2z': function c2z(f, N) {
    return f < N;
  },
  'l47': "ComputeMass",
  'H3c': function H3c(f, N) {
    return f < N;
  },
  'q1': function q1(f) {
    box2d["b2_epsilon"] = f;
  },
  'm5L': function m5L(f, N) {
    return f * N;
  },
  'f4k': "m_localXAxisA",
  'y1k': "GetFilterData",
  'j2X': function j2X(f, N) {
    return f < N;
  },
  'B6M': "m_correctionFactor",
  'Q4a': function Q4a(f, N) {
    return f !== N;
  },
  'Z2G': function Z2G(f, N) {
    return f > N;
  },
  'N9X': function N9X(f, N) {
    return f * N;
  },
  'b87': "e_jointBit",
  'K6d': function K6d(f, N) {
    return f === N;
  },
  'G6S': function G6S(f, N) {
    return f - N;
  },
  'M5': function M5(f, N) {
    return f * N;
  },
  'A0S': function A0S(f, N) {
    return f * N;
  },
  'g3a': function g3a(f, N) {
    return f !== N;
  },
  'p8z': function p8z(f, N) {
    return f * N;
  },
  'b9Q': function b9Q(f, N) {
    return f < N;
  },
  'C0c': function C0c(f, N) {
    return f * N;
  },
  'B4Q': function B4Q(f, N) {
    return f === N;
  },
  'K8Q': "c0",
  'K8X': function K8X(f, N) {
    return f * N;
  },
  'G5J': function G5J(f, N) {
    return f - N;
  },
  'c4k': 'box2d.b2Timer',
  'T7': function T7(f, N) {
    return f instanceof N;
  },
  'a3l': function a3l(f, N) {
    return f <= N;
  },
  'A5M': "rB",
  'H4L': function H4L(f, N) {
    return f - N;
  },
  'o2k': "tangentSpeed",
  'p00': "Step",
  'F9T': "b2ContactManager",
  'F3C': function F3C(f, N) {
    return f * N;
  },
  'E1d': function E1d(f, N) {
    return f === N;
  },
  'w2k': 'e_motorJoint',
  'q0L': function q0L(f, N) {
    return f >= N;
  },
  'X9J': function X9J(f, N) {
    return f * N;
  },
  'j5T': "b2TimeOfImpact",
  'h1S': function h1S(f, N) {
    return f > N;
  },
  'Z6z': function Z6z(f, N) {
    return f === N;
  },
  'p46': "localCenterB",
  'f80': "m_localAxisD",
  'Y1L': function Y1L(f, N) {
    return f > N;
  },
  'M7J': function M7J(f, N) {
    return f * N;
  },
  'k8a': function k8a(f, N) {
    return f & N;
  },
  't4C': function t4C(f, N, P) {
    return f * N * P;
  },
  'o07': "Push",
  'c4C': function c4C(f, N) {
    return f * N;
  },
  'A5T': "GetLengthSquared",
  'w7c': function w7c(f, N) {
    return f === N;
  },
  'C7H': "m_a2",
  'C7G': function C7G(f, N) {
    return f <= N;
  },
  'z37': "handleContactBeginOrEnd",
  'b9z': function b9z(f, N) {
    return f > N;
  },
  'N8X': function N8X(f, N) {
    return f > N;
  },
  't5k': "SetAngle",
  'F8C': function F8C(f, N) {
    return f === N;
  },
  'v3c': function v3c(f, N, P) {
    return f * N * P;
  },
  'N9G': function N9G(f, N) {
    return f * N;
  },
  'm7L': function m7L(f, N) {
    return f < N;
  },
  'A2T': "b2CircleShape",
  'r1': function r1(f) {
    box2d["b2_maxFloat"] = f;
  },
  'I1d': function I1d(f, N) {
    return f !== N;
  },
  'F7c': function F7c(f, N) {
    return f * N;
  },
  'O57': "e_separated",
  'O37': "s_axisB",
  'r80': "e_activeFlag",
  'd3k': "createSealingConstructor_",
  'o8k': "scope",
  'U0d': function U0d(f, N) {
    return f === N;
  },
  'W1r': "normalMass",
  'N3': function N3(f, N) {
    return f in N;
  },
  'E7z': function E7z(f, N) {
    return f instanceof N;
  },
  'T1k': "s_contactSolver",
  'J4': function J4() {
    box2d["b2_maxRotation"] = 0.5 * box2d["b2_pi"];
  },
  'f8d': function f8d(f, N) {
    return f * N;
  },
  'd4S': function d4S(f, N) {
    return f === N;
  },
  'P8H': "m_normal",
  'W4r': "solvePosition",
  'p8G': function p8G(f, N, P) {
    return f * N * P;
  },
  'x8S': function x8S(f, N) {
    return f > N;
  },
  'k4c': function k4c(f, N) {
    return f > N;
  },
  'C40': "point",
  'h4M': "N2",
  'B6H': "defineProperty",
  'F0M': "s_stack",
  'E1k': "GetType",
  'O6z': function O6z(f, N) {
    return f * N;
  },
  'U4T': "e_failed",
  'p1k': "S4",
  'g30': "m_mA",
  'Z9S': function Z9S(f, N) {
    return f < N;
  },
  'r6J': function r6J(f, N) {
    return f * N;
  },
  'k77': "m_out_gravity",
  'z0X': function z0X(f, N) {
    return f > N;
  },
  'K60': "FromSSSS",
  'a46': "e_overlapped",
  'h8Q': 6,
  'A5J': function A5J(f, N) {
    return f === N;
  },
  'y8L': function y8L(f, N) {
    return f > N;
  },
  'P1d': function P1d(f, N) {
    return f === N;
  },
  'W0H': "m_a1",
  'P0a': function P0a(f, N) {
    return f instanceof N;
  },
  'b36': "TestOverlap",
  'K9k': "GREEN",
  'e6J': function e6J(f, N) {
    return f > N;
  },
  'J6H': "linearDamping",
  'b3G': function b3G(f, N) {
    return f <= N;
  },
  'A2Q': function A2Q(f, N) {
    return f - N;
  },
  'o1': function o1() {
    box2d["b2_epsilon_sq"] = box2d["b2_epsilon"] * box2d["b2_epsilon"];
  },
  'z4Q': function z4Q(f, N) {
    return f !== N;
  },
  'q4k': "_bodyPresolveCallbackContext",
  'p9L': function p9L(f, N) {
    return f - N;
  },
  'L8X': function L8X(f, N) {
    return f >= N;
  },
  'o2G': function o2G(f, N, P) {
    return f * N * P;
  },
  'd1T': "lowerBound",
  'g5Q': "m_contactCount",
  'E4H': "b2DistanceProxy",
  'c9': function c9(f, N) {
    return f < N;
  },
  'C9l': function C9l(f, N, P) {
    return f - N + P;
  },
  'o6T': "s_pointB",
  'F17': 'box2d.b2JointFactory',
  'R2z': function R2z(f, N) {
    return f === N;
  },
  'v7L': function v7L(f, N) {
    return f / N;
  },
  'd60': "s",
  'p5M': "GetAngularVelocity",
  'p8H': "b2_maxSubSteps",
  'q1M': "UID_PROPERTY_",
  'G6T': "radiusA",
  'j3': function j3(f, N) {
    return f in N;
  },
  'h6z': function h6z(f, N) {
    return f >= N;
  },
  'S0z': function S0z(f, N) {
    return f > N;
  },
  'a10': "m_fixtureA",
  'h40': "ApplyForce",
  'Y0': function Y0(f, N) {
    return f == N;
  },
  's2M': "b2MixFriction",
  'a5T': "addSingletonGetter",
  'L3L': function L3L(f, N) {
    return f < N;
  },
  'V27': "m_localAnchorA",
  'N3c': function N3c(f, N) {
    return f * N;
  },
  'V6X': function V6X(f, N) {
    return f >= N;
  },
  'F6a': function F6a(f, N) {
    return f === N;
  },
  'r8c': function r8c(f, N, P) {
    return f * N * P;
  },
  'g67': "m_drawFlags",
  'J3C': function J3C(f, N) {
    return f * N;
  },
  'W4H': "M1",
  'x0a': function x0a(f, N) {
    return f * N;
  },
  'E3k': "e_filterFlag",
  'Q1T': "b2ContactListener",
  'H1c': function H1c(f, N) {
    return f === N;
  },
  'z4X': function z4X(f, N) {
    return f === N;
  },
  'c76': "getNextFixtureId",
  'M26': "s_fcn",
  'M1k': "b2MulTMM",
  'k5z': function k5z(f, N) {
    return f * N;
  },
  'I6Q': "T",
  'Y7z': function Y7z(f, N) {
    return f === N;
  },
  'g8H': "m_angularImpulse",
  'C7M': "RayCast",
  'u0H': "s_aabb",
  'A5c': function A5c(f, N) {
    return f < N;
  },
  's8M': "m_velocityConstraints",
  'R7z': function R7z(f, N) {
    return f instanceof N;
  },
  'r47': "ValidateMetrics",
  'P8d': function P8d(f, N) {
    return f * N;
  },
  'J9G': function J9G(f, N) {
    return f <= N;
  },
  'g76': "m_nextVertex",
  'Y5z': function Y5z(f, N) {
    return f * N;
  },
  'N1X': function N1X(f, N) {
    return f === N;
  },
  'I60': "e_faceA",
  'e3M': "b2MixRestitution",
  'n9M': "awake",
  'i0X': function i0X(f, N) {
    return f < N;
  },
  'v4': function v4(f) {
    box2d["b2_toiIters"] = f;
  },
  'w60': "R1",
  'A2G': function A2G(f, N) {
    return f > N;
  },
  'a2H': "BLUE",
  'J7k': "m_proxyB",
  'P86': "m_lalcB",
  'n7c': function n7c(f, N) {
    return f * N;
  },
  'B0L': function B0L(f, N) {
    return f <= N;
  },
  'r9G': function r9G(f, N) {
    return f / N;
  },
  'v30': "b2Max",
  'R7X': function R7X(f, N) {
    return f * N;
  },
  'P1L': function P1L(f, N) {
    return f * N;
  },
  'A0c': function A0c(f, N) {
    return f >= N;
  },
  'o7': function o7(f, N) {
    return f < N;
  },
  'n6d': function n6d(f, N) {
    return f & N;
  },
  'p6d': function p6d(f, N) {
    return f === N;
  },
  'F5G': function F5G(f, N, P) {
    return f * N * P;
  },
  'U97': "transformB",
  'D6M': "m_nodeA",
  'u17': "m_lalcA",
  'u60': 'box2d.b2Settings',
  'z6M': "b2JointType",
  'E2z': function E2z(f, N) {
    return f === N;
  },
  'D4r': "m_friction",
  'K9z': function K9z(f, N) {
    return f * N;
  },
  'n4M': "b2ContactSolverDef",
  'm7z': function m7z(f, N) {
    return f instanceof N;
  },
  'm66': 'e_edgeB',
  'O9d': function O9d(f, N) {
    return f > N;
  },
  'o7k': "DestroyJoint",
  'f5T': "document",
  'u4': function u4(f) {
    box2d["b2_toiMaxTime"] = f;
  },
  'w6G': function w6G(f, N) {
    return f * N;
  },
  'm1M': "mouseJoint",
  'b3T': 11,
  'Q47': "createFcn",
  'e9M': 'box2d.b2Rope',
  'D07': "collideConnected",
  'l4z': function l4z(f, N) {
    return f > N;
  },
  'J4H': "FindNewContacts",
  'Y8H': "e_none",
  'd56': "b2ChainAndCircleContact",
  'a1Q': function a1Q(f, N) {
    return f < N;
  },
  'S80': "m_centroid",
  'H7d': function H7d(f, N) {
    return f === N;
  },
  'K3': function K3(f, N) {
    return f in N;
  },
  'E4C': function E4C(f, N) {
    return f * N;
  },
  'P5X': function P5X(f, N) {
    return f > N;
  },
  'r5G': function r5G(f, N) {
    return f * N;
  },
  'N1Q': function N1Q(f, N) {
    return f === N;
  },
  'J5M': 'e_activeFlag',
  'h3S': function h3S(f, N) {
    return f < N;
  },
  'N4l': function N4l(f, N) {
    return f - N;
  },
  'q1L': function q1L(f, N) {
    return f <= N;
  },
  'y7M': "GetLocalPoint",
  'G7J': function G7J(f, N) {
    return f - N;
  },
  'R1G': function R1G(f, N) {
    return f * N;
  },
  'X4l': function X4l(f, N) {
    return f * N;
  },
  'b76': "s_v12",
  'X86': "closestHitOnly",
  'I6L': function I6L(f, N) {
    return f > N;
  },
  'g4z': function g4z(f, N) {
    return f < N;
  },
  'U2r': "m_continuousPhysics",
  'm1d': function m1d(f, N) {
    return f === N;
  },
  'E90': "b2World",
  'T9a': function T9a(f, N) {
    return f === N;
  },
  'e3Q': function e3Q(f, N) {
    return f % N;
  },
  'l0k': "gravityScale",
  'n6a': function n6a(f, N) {
    return f === N;
  },
  'g86': "b2Counter",
  'x30': "localAxisA",
  'H3L': function H3L(f, N) {
    return f < N;
  },
  'L6J': function L6J(f, N, P) {
    return f - N - P;
  },
  'v7l': function v7l(f, N) {
    return f * N;
  },
  'A7l': function A7l(f, N) {
    return f * N;
  },
  'K46': "e_motorJoint",
  'e7T': "m_sAy",
  'k06': "b2_aabbExtension",
  'f7z': function f7z(f, N) {
    return f instanceof N;
  },
  'D4J': function D4J(f, N) {
    return f * N;
  },
  'O0d': function O0d(f, N) {
    return f < N;
  },
  'I8d': function I8d(f, N) {
    return f instanceof N;
  },
  'b8T': "a0",
  'i8k': "mpx",
  'i9a': function i9a(f, N) {
    return f === N;
  },
  'T4X': function T4X(f, N) {
    return f < N;
  },
  'i8G': function i8G(f, N, P) {
    return f * N * P;
  },
  't0G': function t0G(f, N) {
    return f / N;
  },
  'F7a': function F7a(f, N) {
    return f === N;
  },
  'v5z': function v5z(f, N) {
    return f >= N;
  },
  'X5M': "e_edgeA",
  'P3r': "s_r",
  'N7S': function N7S(f, N) {
    return f / N;
  },
  'B9T': "m_lowerLimit",
  'U3T': "provide",
  'l4J': function l4J(f, N) {
    return f * N;
  },
  'D0d': function D0d(f, N) {
    return f < N;
  },
  'U8J': function U8J(f, N) {
    return f * N;
  },
  'N27': "b2Fixture",
  'f2X': function f2X(f, N) {
    return f === N;
  },
  'R70': "b2_bulletBody",
  'w9k': 'box2d.b2TimeStep',
  'D77': "transformA",
  'F1Q': function F1Q(f, N) {
    return f < N;
  },
  'n7d': function n7d(f, N) {
    return f === N;
  },
  'J6l': function J6l(f, N) {
    return f * N;
  },
  'k7Q': function k7Q(f, N) {
    return f < N;
  },
  'z4l': function z4l(f, N) {
    return f * N;
  },
  'G8a': function G8a(f, N) {
    return f * N;
  },
  'D6X': function D6X(f, N) {
    return f >= N;
  },
  'N4k': "m_vertices",
  'u8X': function u8X(f, N) {
    return f >= N;
  },
  'i4z': function i4z(f, N) {
    return f >= N;
  },
  'x2J': function x2J(f, N) {
    return f * N;
  },
  'O': function O(f) {
    goog["uidCounter_"] = f;
  },
  'h7T': "push",
  'G1l': function G1l(f, N) {
    return f - N;
  },
  'i8L': function i8L(f, N) {
    return f / N;
  },
  'Y57': "contactIndex",
  'R5l': function R5l(f, N, P) {
    return f * N * P;
  },
  'A4r': "collide",
  'n6c': function n6c(f, N) {
    return f < N;
  },
  'Z0L': function Z0L(f, N) {
    return f < N;
  },
  'z4d': function z4d(f, N) {
    return f === N;
  },
  'G5C': function G5C(f, N) {
    return f === N;
  },
  'Q4C': function Q4C(f, N) {
    return f - N;
  },
  'W77': "b2SubVMulSV",
  'Q2X': function Q2X(f, N) {
    return f === N;
  },
  'N6k': "m_angularError",
  'v47': "b2_maxRotationSquared",
  'b6d': function b6d(f, N) {
    return f < N;
  },
  'E5G': function E5G(f, N, P) {
    return f * N * P;
  },
  'w7S': function w7S(f, N) {
    return f > N;
  },
  'S0d': function S0d(f, N) {
    return f === N;
  },
  'H9J': function H9J(f, N) {
    return f * N;
  },
  'L90': "b2ReferenceFace",
  'T6': function T6(f, N) {
    return f * N;
  },
  'O1a': function O1a(f, N) {
    return f === N;
  },
  'd10': "SetLinearDamping",
  'i4r': "maskBits",
  'w1r': "stop",
  'c5l': function c5l(f, N) {
    return f * N;
  },
  'd3C': function d3C(f, N) {
    return f * N;
  },
  'N0': function N0(f, N) {
    return f === N;
  },
  'k1k': "e4",
  'R5X': function R5X(f, N) {
    return f < N;
  },
  'W7': function W7(f, N) {
    return f in N;
  },
  's5J': function s5J(f, N) {
    return f * N;
  },
  's9J': function s9J(f, N) {
    return f * N;
  },
  'T3r': "mass",
  'B5Q': "m_v3",
  'B1M': "cssNameMapping_",
  'F8H': "b2WheelJoint",
  'd0T': 'e_face',
  'i30': "l4",
  'e3d': function e3d(f, N) {
    return f === N;
  },
  'm0M': "s_contactSolverDef",
  'K3G': function K3G(f, N) {
    return f > N;
  },
  'i3k': "cf",
  't7': function t7(f, N) {
    return f !== N;
  },
  'w1J': function w1J(f, N) {
    return f * N;
  },
  'o6C': function o6C(f, N) {
    return f * N;
  },
  'W5d': function W5d(f, N) {
    return f < N;
  },
  'C77': "RemoveLeaf",
  'N4r': "m_ps",
  'h0H': "m_contactList",
  'A9M': "E4",
  'q46': "m_limitState",
  'h5Q': "angularOffset",
  'L8Q': 5,
  'H5J': function H5J(f, N, P) {
    return f - N - P;
  },
  'P2c': function P2c(f, N) {
    return f !== N;
  },
  's6l': function s6l(f, N) {
    return f <= N;
  },
  'n4r': "m_C",
  'U6X': function U6X(f, N) {
    return f >= N;
  },
  'o46': 'e_locked',
  'h87': "m_qD",
  'h8G': function h8G(f, N, P) {
    return f * N * P;
  },
  'L7S': function L7S(f, N) {
    return f !== N;
  },
  'R10': "b2CrossVS",
  'Q5X': function Q5X(f, N) {
    return f < N;
  },
  'G06': "tMax",
  'W7T': "GetHeight",
  'A4T': "GetFixtureA",
  'M1c': function M1c(f, N, P) {
    return f * N * P;
  },
  'u3X': function u3X(f, N) {
    return f * N;
  },
  'x4a': function x4a(f, N) {
    return f < N;
  },
  'X9l': function X9l(f, N) {
    return f * N;
  },
  'L8': function L8(f, N) {
    return f / N;
  },
  'Z6H': "isDateLike",
  'l0z': function l0z(f, N) {
    return f instanceof N;
  },
  'P1T': "positions",
  'y56': "m_tree",
  't5a': function t5a(f, N) {
    return f === N;
  },
  'K3z': function K3z(f, N) {
    return f < N;
  },
  'L9J': function L9J(f, N) {
    return f - N;
  },
  'h0X': function h0X(f, N) {
    return f < N;
  },
  'P3k': "b2FindMaxSeparation",
  't0Q': function t0Q(f, N) {
    return f % N;
  },
  'u8Q': 0,
  'k5Q': "Z1",
  'B9z': function B9z(f, N) {
    return f / N;
  },
  'e9H': "lowerTranslation",
  'k9': function k9(f, N) {
    return f / N;
  },
  'O47': "pointCount",
  'z4H': "UNSEALABLE_CONSTRUCTOR_PROPERTY_",
  'Q5C': function Q5C(f, N) {
    return f === N;
  },
  'u9G': function u9G(f, N) {
    return f * N;
  },
  'J27': "bind",
  'D1M': "b2Pow",
  'n2M': "i4",
  'L2G': function L2G(f, N, P) {
    return f * N * P;
  },
  'k0M': 1.5,
  's3T': "isDefAndNotNull",
  'S86': "s_e1",
  'v7z': function v7z(f, N) {
    return f < N;
  },
  'I5d': function I5d(f, N) {
    return f / N;
  },
  'd9Q': function d9Q(f, N) {
    return f < N;
  },
  'N9l': function N9l(f, N) {
    return f * N;
  },
  'C7C': function C7C(f, N) {
    return f * N;
  },
  'O2l': function O2l(f, N) {
    return f !== N;
  },
  'q2c': function q2c(f, N) {
    return f * N;
  },
  'T6C': function T6C(f, N) {
    return f * N;
  },
  'm5z': function m5z(f, N) {
    return f * N;
  },
  'l0J': function l0J(f, N) {
    return f * N;
  },
  'Z5Q': "Update",
  'l0Q': function l0Q(f, N) {
    return f < N;
  },
  'W56': 'box2d.b2Fixture',
  'm6L': function m6L(f, N) {
    return f - N;
  },
  'x8k': "m_userData",
  'N4G': function N4G(f, N) {
    return f * N;
  },
  't3a': function t3a(f, N) {
    return f instanceof N;
  },
  'C0a': function C0a(f, N) {
    return f * N;
  },
  'n3c': function n3c(f, N) {
    return f * N;
  },
  'i67': "position",
  'N6S': function N6S(f, N) {
    return f - N;
  },
  'x2d': function x2d(f, N) {
    return f === N;
  },
  't0C': function t0C(f, N) {
    return f * N;
  },
  'E66': "nameToPath",
  'J7T': "m_sAx",
  'n5S': function n5S(f, N) {
    return f === N;
  },
  'V0H': "m_axis",
  'A6S': function A6S(f, N) {
    return f > N;
  },
  'Y4C': function Y4C(f, N) {
    return f === N;
  },
  'R4C': function R4C(f, N) {
    return f * N;
  },
  'p70': "Combine",
  'c7J': function c7J(f, N) {
    return f * N;
  },
  'K5l': function K5l(f, N) {
    return f === N;
  },
  'z87': "b2TempPolygon",
  'G3k': "s_edgeA",
  'P5C': function P5C(f, N) {
    return f / N;
  },
  'E8Q': "R",
  'l2L': function l2L(f, N) {
    return f - N;
  },
  'f5k': true,
  'I8S': function I8S(f, N) {
    return f > N;
  },
  'Z6T': "CreateProxy",
  'w8': function w8(f, N) {
    return f - N;
  },
  'b3L': function b3L(f, N) {
    return f & N;
  },
  'C7Q': function C7Q(f, N) {
    return f > N;
  },
  'w46': 'box2d.b2CollideEdge',
  'P56': "m_maxMotorForce",
  'V97': 255,
  'X1z': function X1z(f, N) {
    return f < N;
  },
  'x5': function x5(f, N) {
    return f * N;
  },
  'G8d': function G8d(f, N) {
    return f === N;
  },
  'a9L': function a9L(f, N) {
    return f > N;
  },
  'I4a': function I4a(f, N) {
    return f === N;
  },
  'r0M': "GetBodyA",
  'x4C': function x4C(f, N) {
    return f - N;
  },
  'H46': "localCenterA",
  'A6c': function A6c(f, N, P) {
    return f * N * P;
  },
  'Z4d': function Z4d(f, N) {
    return f === N;
  },
  't10': "b2CrossVV",
  'd3z': function d3z(f, N) {
    return f % N;
  },
  'r3J': function r3J(f, N) {
    return f / N;
  },
  'W5a': function W5a(f, N) {
    return f * N;
  },
  'M2J': function M2J(f, N) {
    return f * N;
  },
  'k7L': function k7L(f, N) {
    return f * N;
  },
  'z7M': "i2",
  'W6M': "id",
  'G5Q': "_fixturePresolveCallbackContext",
  'U6C': function U6C(f, N) {
    return f * N;
  },
  'K5S': function K5S(f, N) {
    return f > N;
  },
  'U7k': "b2GearJoint",
  'i4T': "proxyB",
  'P2z': function P2z(f, N) {
    return f - N;
  },
  'U3k': "m_s2",
  'n56': "GetMilliseconds",
  'd0k': "  jd.maxTorque = %.15f;\n",
  'e2a': function e2a(f, N) {
    return f === N;
  },
  'b4k': 'box2d.b2ChainAndCircleContact',
  'f2': function f2(f) {
    box2d["b2_minPulleyLength"] = f;
  },
  'j96': "m_invMassA",
  'I8l': function I8l(f, N) {
    return f * N;
  },
  'U0J': function U0J(f, N) {
    return f * N;
  },
  'A2J': function A2J(f, N) {
    return f !== N;
  },
  'C8d': function C8d(f, N) {
    return f instanceof N;
  },
  'f4C': function f4C(f, N) {
    return f * N;
  },
  'J1l': function J1l(f, N) {
    return f * N;
  },
  'Z20': "b2AABB",
  'u3L': function u3L(f, N) {
    return f - N;
  },
  'a7d': function a7d(f, N) {
    return f & N;
  },
  'b0C': function b0C(f, N) {
    return f * N;
  },
  'x1S': function x1S(f, N, P) {
    return f - N - P;
  },
  'd8k': "m_dampingRatio",
  'e4': function e4() {
    box2d["b2_two_pi"] = 2.0 * box2d["b2_pi"];
  },
  'Q6H': "b2Random",
  'v9X': function v9X(f, N) {
    return f > N;
  },
  'P06': "importScript_",
  'm0c': function m0c(f, N) {
    return f - N;
  },
  'e9Q': function e9Q(f, N) {
    return f < N;
  },
  'N5Q': "Z4",
  'j0S': function j0S(f, N) {
    return f < N;
  },
  'E7Q': function E7Q(f, N) {
    return f < N;
  },
  'g2': function g2(f, N) {
    return f in N;
  },
  'n3Q': function n3Q(f, N) {
    return f < N;
  },
  'G3r': "m_K",
  'f7Q': function f7Q(f, N) {
    return f > N;
  },
  'W4z': function W4z(f, N) {
    return f - N;
  },
  'G2G': function G2G(f, N) {
    return f < N;
  },
  'L07': "m_step",
  'U1c': function U1c(f, N) {
    return f - N;
  },
  'V3k': "SetTransformVecRadians",
  'M7L': function M7L(f, N) {
    return f < N;
  },
  'V6T': "b2TOIOutput",
  'r4S': function r4S(f, N) {
    return f > N;
  },
  'x2T': "CLOSURE_NO_DEPS",
  'a5H': "contact",
  'I5J': function I5J(f, N) {
    return f - N;
  },
  'x7z': function x7z(f, N) {
    return f instanceof N;
  },
  'z2C': function z2C(f, N, P, Z) {
    return f * N * P * Z;
  },
  'Q5c': function Q5c(f, N) {
    return f < N;
  },
  'D8J': function D8J(f, N) {
    return f === N;
  },
  'h1G': function h1G(f, N) {
    return f * N;
  },
  'F8X': function F8X(f, N) {
    return f >= N;
  },
  'I1T': "upperBound",
  'F4k': "{\n",
  'I16': "s_timer",
  'k9T': "onBodyAdded",
  'R8c': function R8c(f, N) {
    return f / N;
  },
  'H6Q': "b2_defaultFilter",
  'K7a': function K7a(f, N) {
    return f >= N;
  },
  'J2G': function J2G(f, N) {
    return f * N;
  },
  'W00': 'box2d.b2Distance',
  'y37': "m_localAnchorC",
  'X5J': function X5J(f, N) {
    return f !== N;
  },
  'z4': function z4(f) {
    box2d["b2_toiRootIters"] = f;
  },
  'A9C': function A9C(f, N) {
    return f > N;
  },
  'I0S': function I0S(f, N) {
    return f < N;
  },
  'Q6L': function Q6L(f, N) {
    return f < N;
  },
  'V2r': "m_referenceAngleA",
  'G5z': function G5z(f, N) {
    return f >= N;
  },
  's8C': function s8C(f, N) {
    return f instanceof N;
  },
  'x3T': 'box2d.b2CircleContact',
  'L80': "m_vertex3",
  'K4T': "areVecsEqual",
  'N5l': function N5l(f, N, P) {
    return f - N - P;
  },
  'G90': "s_abs_v",
  'N9C': function N9C(f, N, P) {
    return f * N * P;
  },
  'Q2z': function Q2z(f, N) {
    return f < N;
  },
  'M9': function M9(f, N) {
    return f & N;
  },
  'C1M': 1E-5,
  'q9a': function q9a(f, N) {
    return f === N;
  },
  'z1S': function z1S(f, N) {
    return f * N;
  },
  'F6d': function F6d(f, N) {
    return f >= N;
  },
  'G37': "m_normal0",
  'a1S': function a1S(f, N, P) {
    return f * N * P;
  },
  'l3a': function l3a(f, N) {
    return f === N;
  },
  'N7d': function N7d(f, N) {
    return f === N;
  },
  'o30': "b2Profile",
  'c2c': function c2c(f, N) {
    return f / N;
  },
  'k5c': function k5c(f, N) {
    return f >= N;
  },
  'U0L': function U0L(f, N) {
    return f === N;
  },
  's16': "SolveVelocityConstraints",
  'U9a': function U9a(f, N) {
    return f !== N;
  },
  'o9a': function o9a(f, N) {
    return f === N;
  },
  'Q8S': function Q8S(f, N) {
    return f - N;
  },
  'P57': "s_e",
  'j4G': function j4G(f, N, P) {
    return f * N * P;
  },
  'Y5Q': "GetChildIndexB",
  'M2X': function M2X(f, N) {
    return f > N;
  },
  'O3M': 0.008,
  'j6M': "  jd.motorSpeed = %.15f;\n",
  'y8J': function y8J(f, N) {
    return f * N;
  },
  'T3k': "pointB",
  'J5S': function J5S(f, N) {
    return f === N;
  },
  'g8J': function g8J(f, N) {
    return f / N;
  },
  'S5a': function S5a(f, N) {
    return f === N;
  },
  't4H': "SelfAdd",
  'f8H': "m_typeA",
  'u6l': function u6l(f, N) {
    return f === N;
  },
  'Z6X': function Z6X(f, N) {
    return f >= N;
  },
  'j5l': function j5l(f, N) {
    return f * N;
  },
  'P0S': function P0S(f, N) {
    return f < N;
  },
  'l6z': function l6z(f, N) {
    return f - N;
  },
  'h60': "b4",
  'Y2z': function Y2z(f, N) {
    return f < N;
  },
  'N0H': "b2_two_pi",
  'r3d': function r3d(f, N) {
    return f | N;
  },
  'm6S': function m6S(f, N) {
    return f < N;
  },
  'N2': function N2(f) {
    Phaser["Physics"]["Box2D"]["worldBoundsFilterCategory"] = f;
  },
  'w2T': "b2ExtVV",
  'k7X': function k7X(f, N) {
    return f * N;
  },
  'i5T': "b2ContactFactory",
  'u9X': function u9X(f, N, P) {
    return f * N * P;
  },
  'o0z': function o0z(f, N) {
    return f <= N;
  },
  'b8': function b8(f, N) {
    return f * N;
  },
  'S2S': function S2S(f, N) {
    return f < N;
  },
  'e3X': function e3X(f, N) {
    return f * N;
  },
  'l7': function l7(f, N) {
    return f === N;
  },
  'y4J': function y4J(f, N) {
    return f * N;
  },
  'a7S': function a7S(f, N) {
    return f < N;
  },
  'h9T': "s_distanceInput",
  'W2C': function W2C(f, N) {
    return f > N;
  },
  'E2d': function E2d(f, N) {
    return f === N;
  },
  'p37': "e_wheelJoint",
  'y0L': function y0L(f, N) {
    return f < N;
  },
  'z3': function z3(f, N) {
    return f == N;
  },
  'g5d': function g5d(f, N) {
    return f % N;
  },
  'P80': "b2AbsM",
  'c20': 0.98,
  'v0M': "b2CrossSV",
  'N3Q': function N3Q(f, N) {
    return f & N;
  },
  'K3M': "f2",
  'W4J': function W4J(f, N) {
    return f * N;
  },
  'P4L': function P4L(f, N, P) {
    return f * N * P;
  },
  'I3r': 'box2d.b2Joint',
  'x9l': function x9l(f, N) {
    return f <= N;
  },
  'H6d': function H6d(f, N) {
    return f === N;
  },
  'c47': "FlagForFiltering",
  's1z': function s1z(f, N) {
    return f > N;
  },
  'r6H': "b2DrawFlags",
  'Q6k': "s_subInput",
  'l7H': "m_targetA",
  'F9Q': function F9Q(f, N) {
    return f * N;
  },
  'c5z': function c5z(f, N) {
    return f * N;
  },
  'w4r': "GetNext",
  'p6l': function p6l(f, N) {
    return f === N;
  },
  'T4d': function T4d(f, N) {
    return f === N;
  },
  'S0Q': function S0Q(f, N) {
    return f === N;
  },
  'J4k': "key",
  'F3L': function F3L(f, N) {
    return f < N;
  },
  'F1H': "removeUid",
  's1S': function s1S(f, N) {
    return f > N;
  },
  'h1r': "m_prev",
  'i76': "lengthB",
  'k5X': function k5X(f, N) {
    return f < N;
  },
  'F8': function F8(f, N) {
    return f / N;
  },
  'a9l': function a9l(f, N) {
    return f - N;
  },
  'O2T': "GetFixtureB",
  'q36': "e_circleShape",
  'i0r': "OBJECT_PROTOTYPE_FIELDS_",
  'A30': "m_root",
  'e1H': "m_contacts",
  'N26': "b2BroadPhase",
  'a60': "childIndex",
  'E2T': "v4",
  'x5C': function x5C(f, N) {
    return f === N;
  },
  'q2G': function q2G(f, N) {
    return f * N;
  },
  'L1H': "b2LimitState",
  'S4J': function S4J(f, N) {
    return f * N;
  },
  'F4c': function F4c(f, N, P) {
    return f * N * P;
  },
  'E8d': function E8d(f, N) {
    return f === N;
  },
  'p7c': function p7c(f, N) {
    return f * N;
  },
  'e0C': function e0C(f, N) {
    return f * N;
  },
  'y77': "  jd.localAnchorB.SetXY(%.15f, %.15f);\n",
  'Q1k': "makeCCW",
  'H80': "b2SolverData",
  'Y2c': function Y2c(f, N) {
    return f > N;
  },
  'E5': function E5(f, N) {
    return f - N;
  },
  'v2r': "linear",
  'l4M': "shift",
  'V5d': function V5d(f, N) {
    return f % N;
  },
  'W8T': 'e_bulletHitFlag',
  'W96': "b2DegToRad",
  't6X': function t6X(f, N) {
    return f * N;
  },
  'L4c': function L4c(f, N) {
    return f > N;
  },
  't0M': "b2Mat33",
  'M9l': function M9l(f, N, P) {
    return f * N * P;
  },
  'z9a': function z9a(f, N) {
    return f === N;
  },
  'i4Q': function i4Q(f, N) {
    return f === N;
  },
  'p87': "e_unknownJoint",
  'o4Q': function o4Q(f, N) {
    return f === N;
  },
  'r3z': function r3z(f, N) {
    return f > N;
  },
  'n2T': "g",
  'J40': 'box2d.b2Draw',
  'K7H': "b2EPAxis",
  'x27': "contactListener",
  'Z1c': function Z1c(f, N, P) {
    return f * N / P;
  },
  'Y86': "m_lalcC",
  'V2k': 'box2d.b2Shape',
  'j6k': "SetZero",
  'G66': "b2Jacobian",
  'P2X': function P2X(f, N) {
    return f < N;
  },
  'B9M': "b2Sq",
  'q1a': function q1a(f, N) {
    return f !== N;
  },
  'b3z': function b3z(f, N) {
    return f <= N;
  },
  'T4H': "q4",
  'R5': function R5(f, N) {
    return f - N;
  },
  'C0M': "IsSensor",
  'l9c': function l9c(f, N) {
    return f !== N;
  },
  'm5l': function m5l(f, N, P) {
    return f * N * P;
  },
  's46': 'e_chainShape',
  'n97': "m_island",
  'X5G': function X5G(f, N) {
    return f - N;
  },
  'J6Q': "b2MulTXX",
  'j1H': "Pop",
  'Q0a': function Q0a(f, N) {
    return f !== N;
  },
  'n47': "b2Rope",
  'S6C': function S6C(f, N) {
    return f * N;
  },
  'P2T': "s_pA",
  'K2T': "m_localPoint",
  'v6H': "m_state",
  'T2r': "included_",
  'C3M': 'box2d.b2ConstantAccelController',
  'q0k': "identityFunction",
  'D4H': "ComputeAABB",
  'P6L': function P6L(f, N) {
    return f === N;
  },
  's4r': 'e_circles',
  'H8': function H8(f, N) {
    return f - N;
  },
  'Y5L': function Y5L(f, N) {
    return f === N;
  },
  'd07': "angularB",
  'B0X': function B0X(f, N) {
    return f - N;
  },
  'E5k': 'b2_kinematicBody',
  'a1X': function a1X(f, N) {
    return f instanceof N;
  },
  'R2d': function R2d(f, N) {
    return f & N;
  },
  'i8M': "m_maxTorque",
  'a2k': "GetLength",
  'H1z': function H1z(f, N) {
    return f / N;
  },
  'E5X': function E5X(f, N) {
    return f < N;
  },
  'P47': "e_unknown",
  't0l': function t0l(f, N) {
    return f - N;
  },
  'Q4M': 'box2d.b2CircleShape',
  'M6S': function M6S(f, N) {
    return f !== N;
  },
  'K1X': function K1X(f, N) {
    return f instanceof N;
  },
  'o8L': function o8L(f, N) {
    return f * N;
  },
  's2k': "maxTimestep",
  'O2c': function O2c(f, N, P, Z) {
    return f * N * P * Z;
  },
  'E47': "b2EPAxisType",
  'Z47': "b2Simplex",
  'N3k': "m_upperAngle",
  'O8J': function O8J(f, N) {
    return f * N;
  },
  'W0d': function W0d(f, N) {
    return f !== N;
  },
  'a6c': function a6c(f, N) {
    return f - N;
  },
  'W97': "Synchronize",
  'o9k': "m_count",
  'f0a': function f0a(f, N) {
    return f instanceof N;
  },
  'H1X': function H1X(f, N) {
    return f === N;
  },
  'Z30': "m_edgeB",
  'A4k': 'box2d.b2World',
  'c4M': "N4",
  'Z0l': function Z0l(f, N) {
    return f * N;
  },
  'A3k': "s4",
  'y9H': 'box2d.b2DistanceJoint',
  'Q2M': 'e_unknown',
  'i4X': function i4X(f, N) {
    return f < N;
  },
  'Z2L': function Z2L(f, N) {
    return f !== N;
  },
  'n77': "_id",
  'u1z': function u1z(f, N) {
    return f < N;
  },
  'x7L': function x7L(f, N) {
    return f / N;
  },
  'K6l': function K6l(f, N) {
    return f !== N;
  },
  'k3l': function k3l(f, N, P) {
    return f * N * P;
  },
  'V20': "require",
  'n5Q': "at",
  'x3l': function x3l(f, N) {
    return f * N;
  },
  'n3k': "createBody",
  'L20': "u4",
  'E1l': function E1l(f, N) {
    return f === N;
  },
  'Q3': function Q3(f, N) {
    return f < N;
  },
  'B4X': function B4X(f, N) {
    return f < N;
  },
  'V1M': "m_JvAC",
  'F3l': function F3l(f, N) {
    return f * N;
  },
  't9d': function t9d(f, N) {
    return f instanceof N;
  },
  'A9': function A9(f, N) {
    return f === N;
  },
  'E7M': "b2Atan2",
  'd96': "tangentMass",
  'X3z': function X3z(f, N) {
    return f < N;
  },
  'F1J': function F1J(f, N) {
    return f * N;
  },
  'k7k': "upperTranslation",
  'Y2k': "log",
  'K26': "index",
  'C20': "IsEnabled",
  'K5G': function K5G(f, N) {
    return f * N;
  },
  'O0X': function O0X(f, N) {
    return f < N;
  },
  'U0M': "b2_unknown",
  'l8L': function l8L(f, N) {
    return f - N;
  },
  'J8': function J8(f, N) {
    return f * N;
  },
  'i9d': function i9d(f, N) {
    return f instanceof N;
  },
  'R7L': function R7L(f, N) {
    return f < N;
  },
  'Z27': "m_p0s",
  'D37': "b2MassData",
  'u2H': 'box2d.b2PolygonContact',
  'D2C': function D2C(f, N) {
    return f * N;
  },
  'H8C': function H8C(f, N) {
    return f == N;
  },
  'c5c': function c5c(f, N) {
    return f * N;
  },
  'I80': "m_bodyList",
  'W3T': "left",
  'f2H': 'e_shapeTypeCount',
  'L26': "m_lengthA",
  'I7H': "abstractMethod",
  'R7M': "i1",
  'I5X': function I5X(f, N) {
    return f % N;
  },
  'd6a': function d6a(f, N) {
    return f === N;
  },
  'k4C': function k4C(f, N) {
    return f * N;
  },
  'v17': "b2ClipSegmentToLine",
  'Z17': "QueryAABB",
  'S3c': function S3c(f, N, P) {
    return f * N * P;
  },
  'Z0G': function Z0G(f, N) {
    return f * N;
  },
  'c1L': function c1L(f, N) {
    return f * N;
  },
  'f7H': "q1",
  'u6M': "center",
  'y6': function y6(f, N) {
    return f - N;
  },
  'u8H': "concat",
  'b66': "m_hasVertex3",
  'd9J': function d9J(f, N) {
    return f * N;
  },
  'u3l': function u3l(f, N) {
    return f >= N;
  },
  'a3L': function a3L(f, N) {
    return f > N;
  },
  'r1z': function r1z(f, N) {
    return f < N;
  },
  'C4k': "isProvided_",
  's70': "b2_epsilon_sq",
  'M4H': "b2DotV3V3",
  'X1S': function X1S(f, N) {
    return f < N;
  },
  'N3X': function N3X(f, N) {
    return f <= N;
  },
  'd9M': "superClass_",
  'b4l': function b4l(f, N, P) {
    return f * N * P;
  },
  'y0d': function y0d(f, N) {
    return f === N;
  },
  'o1a': function o1a(f, N) {
    return f === N;
  },
  'U5a': function U5a(f, N) {
    return f === N;
  },
  'D8L': function D8L(f, N) {
    return f - N;
  },
  'e3l': function e3l(f, N) {
    return f < N;
  },
  'e3G': function e3G(f, N) {
    return f < N;
  },
  'I76': "m_ax",
  'X36': "b2RotateRadiansV",
  'R2Q': function R2Q(f, N) {
    return f / N;
  },
  'G4a': function G4a(f, N) {
    return f === N;
  },
  'p50': "sideNormal1",
  'g40': "s_supportB",
  'u3c': function u3c(f, N, P) {
    return f * N * P;
  },
  'G2H': "bodies",
  'r5T': "isReflex",
  'X3r': 'object',
  'n3z': function n3z(f, N) {
    return f < N;
  },
  'I2d': function I2d(f, N) {
    return f === N;
  },
  'k0S': function k0S(f, N) {
    return f < N;
  },
  'f6T': "hits",
  'W10': "e_touchingFlag",
  'q8J': function q8J(f, N) {
    return f > N;
  },
  't1C': function t1C(f, N) {
    return f / N;
  },
  'R0a': function R0a(f, N) {
    return f === N;
  },
  'O4d': function O4d(f, N) {
    return f === N;
  },
  'A7G': function A7G(f, N) {
    return f / N;
  },
  'U6z': function U6z(f, N) {
    return f === N;
  },
  'r4L': function r4L(f, N) {
    return f < N;
  },
  'l0l': function l0l(f, N) {
    return f * N;
  },
  'Z8G': function Z8G(f, N) {
    return f < N;
  },
  'i0L': function i0L(f, N) {
    return f >= N;
  },
  'c4S': function c4S(f, N) {
    return f === N;
  },
  'L4T': "I4",
  'u6a': function u6a(f, N) {
    return f - N;
  },
  'f7J': function f7J(f, N) {
    return f * N;
  },
  'n36': "_typeA",
  'H5G': function H5G(f, N) {
    return f - N;
  },
  'Q8d': function Q8d(f, N) {
    return f instanceof N;
  },
  's0T': "b2FixtureProxy",
  'b4T': "v1",
  'O6J': function O6J(f, N, P) {
    return f * N * P;
  },
  'b1l': function b1l(f, N) {
    return f * N;
  },
  'D86': "b2MulM33XY",
  'b6l': function b6l(f, N) {
    return f * N;
  },
  'R2X': function R2X(f, N) {
    return f < N;
  },
  'm9': function m9(f, N) {
    return f < N;
  },
  'u7S': function u7S(f, N) {
    return f < N;
  },
  'l26': "Clone",
  'Y60': "b2AreaJointDef",
  'b0r': "subPolygon",
  'Z8L': function Z8L(f, N) {
    return f > N;
  },
  'b6a': function b6a(f, N) {
    return f * N;
  },
  'S6H': "GetManifold",
  'O8G': function O8G(f, N) {
    return f > N;
  },
  'H9z': function H9z(f, N) {
    return f < N;
  },
  'f4M': "clearFixtures",
  'Z3l': function Z3l(f, N, P) {
    return f * N * P;
  },
  'I5Q': 'box2d.b2MouseJoint',
  'R2C': function R2C(f, N, P) {
    return f * N * P;
  },
  'y0z': function y0z(f, N) {
    return f <= N;
  },
  'Y2Q': function Y2Q(f, N) {
    return f < N;
  },
  'x6J': function x6J(f, N, P) {
    return f * N * P;
  },
  'V9X': function V9X(f, N) {
    return f < N;
  },
  'A4a': function A4a(f, N) {
    return f & N;
  },
  'n4L': function n4L(f, N) {
    return f * N;
  },
  'T67': "b2CrossVOne",
  'Z6J': function Z6J(f, N, P) {
    return f * N * P;
  },
  'o3M': "offset",
  'Z4X': function Z4X(f, N) {
    return f <= N;
  },
  'T0L': function T0L(f, N) {
    return f - N;
  },
  'o56': "m_profile",
  'e8': function e8(f, N) {
    return f * N;
  },
  'N1r': "MakeArray",
  'T9H': "GetPosition",
  'R6M': 'e_touching',
  'C8S': function C8S(f, N) {
    return f * N;
  },
  'A7M': "m_springImpulse",
  'x47': "b2MulRV",
  'D26': "s_e23",
  'f5C': function f5C(f, N) {
    return f !== N;
  },
  'T3S': function T3S(f, N) {
    return f * N;
  },
  'e1S': function e1S(f, N) {
    return f * N;
  },
  'E6S': function E6S(f, N) {
    return f === N;
  },
  'h6C': function h6C(f, N) {
    return f / N;
  },
  'h9a': function h9a(f, N) {
    return f > N;
  },
  'r9C': function r9C(f, N, P) {
    return f - N + P;
  },
  'd1H': "b2VelocityConstraintPoint",
  'G60': "b2Min",
  'Q6G': function Q6G(f, N, P) {
    return f * N * P;
  },
  'B3S': function B3S(f, N) {
    return f < N;
  },
  'm2Q': function m2Q(f, N) {
    return f / N;
  },
  'P10': "b2WorldManifold",
  't8Q': "Physics",
  'e4M': "Math",
  'R0': function R0(f, N) {
    return f in N;
  },
  'X3d': function X3d(f, N) {
    return f < N;
  },
  'S2k': "e_ropeJoint",
  'g07': 278,
  'H6M': "b2JointEdge",
  'q3a': function q3a(f, N) {
    return f instanceof N;
  },
  'V4G': function V4G(f, N, P) {
    return f * N * P;
  },
  'w6l': function w6l(f, N) {
    return f * N;
  },
  'z9c': function z9c(f, N) {
    return f * N;
  },
  'y5a': function y5a(f, N) {
    return f === N;
  },
  'x8a': function x8a(f, N) {
    return f !== N;
  },
  'k96': "exportPath_",
  'a4': function a4(f) {
    box2d["b2_gjkIters"] = f;
  },
  'J5J': function J5J(f, N) {
    return f === N;
  },
  'E0': function E0(f, N) {
    return f == N;
  },
  'k7H': "separation",
  'z1d': function z1d(f, N) {
    return f & N;
  },
  'q0H': "maxLength",
  'C7L': function C7L(f, N) {
    return f * N;
  },
  'm8c': function m8c(f, N) {
    return f > N;
  },
  'h17': "p1",
  'a3T': "b2Filter",
  'm1H': "Evaluate",
  'w9z': function w9z(f, N) {
    return f < N;
  },
  'f8T': "m_max_count",
  'K2k': "toWorldVector",
  'U36': "m_lengthB",
  'G8k': "CreateBody",
  'X96': "wB",
  'Q2c': function Q2c(f, N, P) {
    return f * N * P;
  },
  'N5H': "b2Sin",
  'q47': 'e_edgeShape',
  'l9a': function l9a(f, N) {
    return f === N;
  },
  'y5d': function y5d(f, N) {
    return f < N;
  },
  'X6l': function X6l(f, N) {
    return f <= N;
  },
  'm5C': function m5C(f, N) {
    return f === N;
  },
  'w1S': function w1S(f, N) {
    return f * N;
  },
  'j4M': "b2ParseInt",
  'm1T': "CLOSURE_CSS_NAME_MAPPING",
  'p6a': function p6a(f, N) {
    return f / N;
  },
  'X2': function X2(f, N) {
    return f in N;
  },
  'P5Q': "s_localTangent",
  'p3G': function p3G(f, N) {
    return f * N;
  },
  'A56': "b2GrowableStack",
  'I6T': "m_sweepA",
  'R0T': "m_density",
  'f7X': function f7X(f, N) {
    return f - N;
  },
  'M7G': function M7G(f, N) {
    return f > N;
  },
  'y9C': function y9C(f, N, P) {
    return f * N * P;
  },
  'p1r': "onBodyRemoved",
  'a9c': function a9c(f, N, P) {
    return f * N * P;
  },
  'V9S': function V9S(f, N) {
    return f === N;
  },
  'E40': "SelfMul",
  'H9Q': function H9Q(f, N) {
    return f < N;
  },
  'T5a': function T5a(f, N) {
    return f === N;
  },
  'b8X': function b8X(f, N) {
    return f > N;
  },
  'u4r': "DestroyProxy",
  'f00': "m_mC",
  'y3': function y3(f, N) {
    return f == N;
  },
  'J3L': function J3L(f, N) {
    return f & N;
  },
  'S70': 'e_unknownJoint',
  'm4T': "world",
  'L3C': function L3C(f, N) {
    return f * N;
  },
  'N40': "tangent",
  'B8L': function B8L(f, N) {
    return f > N;
  },
  'h3a': function h3a(f, N) {
    return f instanceof N;
  },
  'M0a': function M0a(f, N) {
    return f < N;
  },
  'E8c': function E8c(f, N, P) {
    return f - N - P;
  },
  'Z1T': "m_subStepping",
  'F5Q': "b2Manifold",
  'h9c': function h9c(f, N) {
    return f > N;
  },
  'U7': function U7(f, N) {
    return f < N;
  },
  'w4l': function w4l(f, N) {
    return f - N;
  },
  'C67': "angularDamping",
  'W0X': function W0X(f, N) {
    return f > N;
  },
  'g9C': function g9C(f, N) {
    return f / N;
  },
  'c8d': function c8d(f, N) {
    return f * N;
  },
  'X1X': function X1X(f, N) {
    return f === N;
  },
  'x1T': "state",
  't4z': function t4z(f, N) {
    return f < N;
  },
  'I9k': "m_iC",
  'T4S': function T4S(f, N, P) {
    return f * N * P;
  },
  'T0d': function T0d(f, N) {
    return f < N;
  },
  'v5': function v5(f, N) {
    return f * N;
  },
  'i2l': function i2l(f, N) {
    return f - N;
  },
  'q0G': function q0G(f, N) {
    return f * N;
  },
  'Z80': "X",
  'z4J': function z4J(f, N) {
    return f * N;
  },
  't4d': function t4d(f, N) {
    return f === N;
  },
  'u4G': function u4G(f, N) {
    return f * N;
  },
  'd4L': function d4L(f, N) {
    return f * N;
  },
  'D46': "b2ChainAndPolygonContact",
  'g0L': function g0L(f, N) {
    return f === N;
  },
  'w96': "m_ay",
  'i1a': function i1a(f, N) {
    return f === N;
  },
  'k1r': "b2JointDef",
  'c7T': "b2Contact",
  'w0r': "evalWorksForGlobals_",
  'd1r': "b2_maxLinearCorrection",
  'H3G': function H3G(f, N) {
    return f < N;
  },
  'L7a': function L7a(f, N) {
    return f === N;
  },
  'u7T': "z",
  'g0J': function g0J(f, N) {
    return f * N;
  },
  'N5J': function N5J(f, N) {
    return f >= N;
  },
  'E7L': function E7L(f, N) {
    return f < N;
  },
  'P5c': function P5c(f, N) {
    return f * N;
  },
  'r26': "b2AddVMulSV",
  'w5G': function w5G(f, N) {
    return f * N;
  },
  'o1L': function o1L(f, N) {
    return f <= N;
  },
  'j7l': function j7l(f, N) {
    return f - N;
  },
  'O50': "isObject",
  'q6G': function q6G(f, N) {
    return f * N;
  },
  'E50': "b2ControllerEdge",
  'h6X': function h6X(f, N) {
    return f >= N;
  },
  'a7k': "m_maxLength",
  'V4H': "isArray",
  'F5d': function F5d(f, N) {
    return f < N;
  },
  'C0S': function C0S(f, N) {
    return f >= N;
  },
  'I2z': function I2z(f, N) {
    return f < N;
  },
  'S3a': function S3a(f, N) {
    return f instanceof N;
  },
  'N6G': function N6G(f, N) {
    return f > N;
  },
  'G9C': function G9C(f, N) {
    return f * N;
  },
  'i0d': function i0d(f, N) {
    return f === N;
  },
  'n4H': 'e_mouseJoint',
  'U8Q': function U8Q(f, N) {
    return f > N;
  },
  'J1Q': function J1Q(f, N) {
    return f / N;
  },
  'O76': "groundAnchorA",
  'g0k': "m_shape",
  'C9': function C9(f, N) {
    return f * N;
  },
  'N3C': function N3C(f, N) {
    return f / N;
  },
  'y9S': function y9S(f, N) {
    return f === N;
  },
  'i26': 'typeB',
  'k8T': "b2MaxV",
  'U80': "joint1",
  'x6S': function x6S(f, N) {
    return f < N;
  },
  'c2X': function c2X(f, N) {
    return f < N;
  },
  'o6Q': "isNumber",
  'B8J': function B8J(f, N) {
    return f !== N;
  },
  'O3a': function O3a(f, N) {
    return f !== N;
  },
  'J7d': function J7d(f, N) {
    return f === N;
  },
  'N1C': function N1C(f, N) {
    return f < N;
  },
  'B5a': function B5a(f, N) {
    return f === N;
  },
  'o8z': function o8z(f, N, P) {
    return f * N * P;
  },
  'A4M': "b2BodyType",
  'z3c': function z3c(f, N) {
    return f > N;
  },
  'Q7J': function Q7J(f, N) {
    return f * N;
  },
  'R5d': function R5d(f, N) {
    return f < N;
  },
  'I7Q': function I7Q(f, N) {
    return f > N;
  },
  'n6l': function n6l(f, N) {
    return f * N;
  },
  'w7d': function w7d(f, N) {
    return f === N;
  },
  'X9z': function X9z(f, N) {
    return f < N;
  },
  'P36': "_typeB",
  'x6G': function x6G(f, N, P) {
    return f * N * P;
  },
  'u5S': function u5S(f, N) {
    return f === N;
  },
  'O0l': function O0l(f, N) {
    return f * N;
  },
  'E80': "enableMotor",
  'L7d': function L7d(f, N) {
    return f / N;
  },
  'x8z': function x8z(f, N, P) {
    return f * N * P;
  },
  'R96': "b2RayCastCallback",
  'd2G': function d2G(f, N) {
    return f < N;
  },
  'O8z': function O8z(f, N, P) {
    return f * N * P;
  },
  'E6k': "solveInit",
  's2H': "SynchronizeTransform",
  'D1a': function D1a(f, N) {
    return f <= N;
  },
  'p3l': function p3l(f, N) {
    return f === N;
  },
  'D0L': function D0L(f, N) {
    return f * N;
  },
  'D0l': function D0l(f, N) {
    return f * N;
  },
  'F6T': "b2Body",
  't1S': function t1S(f, N) {
    return f < N;
  },
  'a1c': function a1c(f, N) {
    return f * N;
  },
  'G5X': function G5X(f, N) {
    return f <= N;
  },
  'U8G': function U8G(f, N) {
    return f === N;
  },
  'v90': "b2WeldJoint",
  'M2': function M2(f, N) {
    return f == N;
  },
  'Y5c': function Y5c(f, N) {
    return f * N;
  },
  'u3C': function u3C(f, N) {
    return f * N;
  },
  'C4c': function C4c(f, N) {
    return f > N;
  },
  'O7': function O7(f, N) {
    return f != N;
  },
  'i2r': 'box2d.b2GrowableStack',
  'D9a': function D9a(f, N) {
    return f === N;
  },
  'O1H': "layers",
  's87': 'box2d.b2GravityController',
  'X1r': "_key",
  'a8C': function a8C(f, N) {
    return f === N;
  },
  'M5C': function M5C(f, N) {
    return f === N;
  },
  'U9c': function U9c(f, N) {
    return f / N;
  },
  'p10': "s_incidentEdge",
  'q2C': function q2C(f, N, P, Z) {
    return f * N * P * Z;
  },
  'Y07': "RED",
  'G6J': function G6J(f, N) {
    return f < N;
  },
  'B6C': function B6C(f, N) {
    return f < N;
  },
  'N7M': 'box2d.b2ContactSolver',
  'R8l': function R8l(f, N) {
    return f * N;
  },
  'O0Q': function O0Q(f, N) {
    return f - N;
  },
  'y4r': "m_joint1",
  'k97': "Copy",
  'z1C': function z1C(f, N) {
    return f === N;
  },
  'L3M': "b2FrictionJointDef",
  'J3k': "velocityBias",
  'v1r': "b2_toiIters",
  'J2C': function J2C(f, N, P) {
    return f * N * P;
  },
  'X6G': function X6G(f, N) {
    return f > N;
  },
  'I1C': function I1C(f, N, P) {
    return f * N * P;
  },
  's1Q': function s1Q(f, N) {
    return f * N;
  },
  'P9': function P9(f, N) {
    return f < N;
  },
  'p2H': "m_linearError",
  'd6c': function d6c(f, N, P) {
    return f * N * P;
  },
  'z6L': function z6L(f, N) {
    return f * N;
  },
  'r7S': function r7S(f, N) {
    return f < N;
  },
  'p8Q': 9,
  'v8l': function v8l(f, N) {
    return f * N;
  },
  'z0l': function z0l(f, N) {
    return f * N;
  },
  'E7J': function E7J(f, N) {
    return f - N;
  },
  'Y0H': "applyProperties_",
  's2a': function s2a(f, N) {
    return f !== N;
  },
  'l4': function l4() {
    box2d["b2_maxAngularCorrection"] = 8 / 180 * box2d["b2_pi"];
  },
  'Y5l': function Y5l(f, N) {
    return f === N;
  },
  'q4Q': function q4Q(f, N) {
    return f !== N;
  },
  'Z57': "b2_maxFloat",
  's1H': "m_world",
  'k7C': function k7C(f, N) {
    return f - N;
  },
  'n8k': "b2SimplexCache",
  'j17': "p4",
  'C6M': "mouseJointBody",
  'q8Q': "m_lcA",
  'n1r': "Polygon",
  'm40': "correctionFactor",
  'H10': "points",
  'b9L': function b9L(f, N) {
    return f < N;
  },
  'i6T': "b2_angularSleepTolerance",
  'O3k': "m_s1",
  'D9d': function D9d(f, N) {
    return f instanceof N;
  },
  'O9S': function O9S(f, N) {
    return f !== N;
  },
  'A8d': function A8d(f, N) {
    return f === N;
  },
  'H6a': function H6a(f, N) {
    return f !== N;
  },
  'X8': function X8(f, N) {
    return f * N;
  },
  'A2k': "m_localCenterB",
  'e3L': function e3L(f, N) {
    return f === N;
  },
  's9G': function s9G(f, N) {
    return f <= N;
  },
  'I5z': function I5z(f, N) {
    return f >= N;
  },
  'O1S': function O1S(f, N, P) {
    return f - N - P;
  },
  't77': "m_angularVelocity",
  'u2a': function u2a(f, N) {
    return f === N;
  },
  'T4z': function T4z(f, N) {
    return f === N;
  },
  'r3r': "getPathFromDeps_",
  'J06': "invMassB",
  'E10': "e_clearForces",
  'G5c': function G5c(f, N) {
    return f === N;
  },
  'M9M': "m_u",
  'u5T': "Solve22",
  'D0G': function D0G(f, N) {
    return f * N;
  },
  'T17': 'array',
  'T0z': function T0z(f, N) {
    return f > N;
  },
  't1a': function t1a(f, N) {
    return f <= N;
  },
  'n60': 'goog_defineClass_legacy_unsealable',
  'w0H': "pixelsPerMeter",
  'U1': function U1(f) {
    goog["removeHashCode"] = f["removeUid"];
  },
  'K0C': function K0C(f, N) {
    return f * N;
  },
  'D1C': function D1C(f, N) {
    return f < N;
  },
  'L67': "globalEval",
  'y6Q': 'box2d.b2WeldJoint',
  'E4': function E4(f) {
    box2d["b2_toiTime"] = f;
  },
  'y6C': function y6C(f, N) {
    return f < N;
  },
  'h36': "RayCastCallback",
  'L9L': function L9L(f, N) {
    return f - N;
  },
  'z2L': function z2L(f, N, P, Z) {
    return f / N * P * Z;
  },
  'n1X': function n1X(f, N) {
    return f instanceof N;
  },
  'j66': "prevController",
  'n40': "m_contactCapacity",
  't8c': function t8c(f, N, P) {
    return f * N * P;
  },
  'w70': "m_jointCount",
  't87': "Destroy",
  'z7k': 'box2d.b2ChainShape',
  'Z86': "GetWorldCenter",
  'b1H': "b2_persistState",
  'q3H': 0.0,
  'g26': "m_K3",
  'K1c': function K1c(f, N) {
    return f > N;
  },
  'f2Q': function f2Q(f, N) {
    return f * N;
  },
  'P70': "b2Transform",
  'x4': function x4() {
    box2d["b2_maxRotationSquared"] = box2d["b2_maxRotation"] * box2d["b2_maxRotation"];
  },
  'o86': "isFunction",
  'y3T': "getObjectByName",
  'J1r': "m_referenceAngleB",
  'R4r': "b2_toiMaxIters",
  'a3C': function a3C(f, N) {
    return f * N;
  },
  'Y4a': function Y4a(f, N) {
    return f === N;
  },
  'f8c': function f8c(f, N) {
    return f * N;
  },
  'x5T': "SolveTOI",
  'N8': function N8(f, N) {
    return f * N;
  },
  'H1G': function H1G(f, N, P) {
    return f * N * P;
  },
  'l80': "CreateChain",
  'p1z': function p1z(f, N) {
    return f > N;
  },
  'G8S': function G8S(f, N) {
    return f === N;
  },
  'c5X': function c5X(f, N) {
    return f !== N;
  },
  'Y8d': function Y8d(f, N) {
    return f * N;
  },
  'A2H': "GetMetric",
  'N3L': function N3L(f, N) {
    return f | N;
  },
  'A4': function A4(f) {
    box2d["b2_toiMaxRootIters"] = f;
  },
  'y4G': function y4G(f, N, P) {
    return f * N * P;
  },
  'r9z': function r9z(f, N) {
    return f > N;
  },
  'E17': "MakeStyleString",
  'B0C': function B0C(f, N) {
    return f * N;
  },
  'v2c': function v2c(f, N) {
    return f !== N;
  },
  'p4': function p4(f) {
    box2d["b2_toiMaxIters"] = f;
  },
  'W9T': "m_localYAxisA",
  'x4c': function x4c(f, N) {
    return f <= N;
  },
  't6': function t6(f, N) {
    return f * N;
  },
  'Y1G': function Y1G(f, N, P) {
    return f * N * P;
  },
  's4l': function s4l(f, N) {
    return f * N;
  },
  'T1L': function T1L(f, N) {
    return f * N;
  },
  'K9Q': function K9Q(f, N) {
    return f > N;
  },
  'f20': "b2PulleyJoint",
  'V06': "e_points",
  'f7C': function f7C(f, N) {
    return f * N;
  },
  'q7k': "b2ContactFeature",
  'l8J': function l8J(f, N) {
    return f < N;
  },
  'h4X': function h4X(f, N) {
    return f === N;
  },
  'M87': '.',
  'x36': 'box2d.b2BuoyancyController',
  'N4': function N4(f) {
    box2d["b2_maxSubSteps"] = f;
  },
  'C5c': function C5c(f, N) {
    return f * N;
  },
  'j7X': function j7X(f, N) {
    return f * N;
  },
  'L6d': function L6d(f, N) {
    return f === N;
  },
  'R1H': "U4",
  'J9k': "inHtmlDocument_",
  'F9J': function F9J(f, N) {
    return f * N;
  },
  'm4S': function m4S(f, N) {
    return f < N;
  },
  'u87': "implicitNamespaces_",
  'a3G': function a3G(f, N) {
    return f === N;
  },
  'u7d': function u7d(f, N) {
    return f * N;
  },
  'z9z': function z9z(f, N, P) {
    return f * N * P;
  },
  'd3l': function d3l(f, N) {
    return f !== N;
  },
  'P2Q': function P2Q(f, N) {
    return f & N;
  },
  'R6S': function R6S(f, N) {
    return f === N;
  },
  'd4k': "b2_staticBody",
  's8': function s8(f, N) {
    return f * N;
  },
  'j5d': function j5d(f, N) {
    return f < N;
  },
  'z3S': function z3S(f, N) {
    return f < N;
  },
  'k2G': function k2G(f, N) {
    return f * N;
  },
  'Q3M': "s_combinedAABB",
  'G7G': function G7G(f, N) {
    return f <= N;
  },
  'w9X': function w9X(f, N) {
    return f === N;
  },
  'w30': "SynchronizeFixtures",
  'D0J': function D0J(f, N) {
    return f * N;
  },
  'm97': "    shape.m_radius = %.15f;\n",
  'G2X': function G2X(f, N) {
    return f / N;
  },
  'u77': 'e_faceA',
  'i8Q': "decompose",
  'e4H': 'e_failed',
  'G0a': function G0a(f, N) {
    return f === N;
  },
  'v2d': function v2d(f, N) {
    return f & N;
  },
  'h6': function h6(f, N) {
    return f - N;
  },
  'm6J': function m6J(f, N) {
    return f * N;
  },
  'C2X': function C2X(f, N) {
    return f > N;
  },
  'e6Q': "H1",
  'I5': function I5(f, N) {
    return f === N;
  },
  'T0G': function T0G(f, N) {
    return f * N;
  },
  'c3T': "density",
  'U6M': "Refilter",
  'B1c': function B1c(f, N) {
    return f < N;
  },
  'B20': "b",
  'Y0S': function Y0S(f, N) {
    return f === N;
  },
  'c2Q': function c2Q(f, N) {
    return f / N;
  },
  'N5M': "separations",
  'z0z': function z0z(f, N) {
    return f instanceof N;
  },
  'V3a': function V3a(f, N) {
    return f !== N;
  },
  'x2X': function x2X(f, N) {
    return f < N;
  },
  'M8S': function M8S(f, N) {
    return f - N;
  },
  'n3C': function n3C(f, N) {
    return f * N;
  },
  'd1J': function d1J(f, N) {
    return f * N;
  },
  'F4L': function F4L(f, N) {
    return f * N;
  },
  'u7k': "m_broadPhase",
  'A0H': "upperAngle",
  'I36': "SetDebugDraw",
  'l5a': function l5a(f, N) {
    return f * N;
  },
  'J1X': function J1X(f, N) {
    return f instanceof N;
  },
  'n8C': function n8C(f, N) {
    return f > N;
  },
  'S6G': function S6G(f, N) {
    return f / N;
  },
  'h70': "SetAngleRadians",
  'V4X': function V4X(f, N) {
    return f < N;
  },
  'Z9d': function Z9d(f, N) {
    return f > N;
  },
  'Z4Q': function Z4Q(f, N) {
    return f / N;
  },
  'R7J': function R7J(f, N) {
    return f >= N;
  },
  'y8Q': function y8Q(f, N) {
    return f < N;
  },
  'c7z': function c7z(f, N) {
    return f === N;
  },
  'v5c': function v5c(f, N) {
    return f < N;
  },
  'u5Q': "m_angularMass",
  'r0': function r0(f, N) {
    return f != N;
  },
  'J3G': function J3G(f, N) {
    return f <= N;
  },
  'u0M': "GetBodyB",
  'j30': "typeB",
  'S7k': "m_indexC",
  'k8S': function k8S(f, N) {
    return f * N;
  },
  'a97': "SelfAddXY",
  'S6': function S6(f, N) {
    return f * N;
  },
  'l0G': function l0G(f, N) {
    return f * N;
  },
  'c8a': function c8a(f, N) {
    return f === N;
  },
  'K3J': function K3J(f, N) {
    return f * N;
  },
  'a40': "other",
  'N7H': "s_P",
  'j0a': function j0a(f, N) {
    return f <= N;
  },
  'b10': "b2EdgeAndCircleContact",
  'D6C': function D6C(f, N) {
    return f / N;
  },
  'w9Q': function w9Q(f, N) {
    return f < N;
  },
  's6a': function s6a(f, N) {
    return f * N;
  },
  'y4': function y4(f) {
    box2d["b2_linearSlop"] = f;
  },
  'Z5a': function Z5a(f, N) {
    return f === N;
  },
  'U47': "m_allowSleep",
  'S1M': 'box2d.b2PrismaticJoint',
  'j9M': "m_bodyCount",
  'K9J': function K9J(f, N) {
    return f * N;
  },
  'L5l': function L5l(f, N, P) {
    return f * N * P;
  },
  'a3Q': function a3Q(f, N) {
    return f % N;
  },
  'B1L': function B1L(f, N) {
    return f - N;
  },
  'u8C': function u8C(f, N) {
    return f !== N;
  },
  'a3J': function a3J(f, N) {
    return f * N;
  },
  'b7d': function b7d(f, N) {
    return f & N;
  },
  'm5': function m5(f, N) {
    return f * N;
  },
  'm4H': "U1",
  'G2': function G2(f, N) {
    return f - N;
  },
  'i6k': "m_sweep",
  'O6': function O6(f, N) {
    return f * N;
  },
  'D8M': "_categoryPresolveCallbacks",
  'E7G': function E7G(f, N) {
    return f * N;
  },
  'D5H': "step",
  'c4r': "m_joint2",
  'k7G': function k7G(f, N) {
    return f > N;
  },
  'U0G': function U0G(f, N) {
    return f * N;
  },
  'l0L': function l0L(f, N) {
    return f < N;
  },
  'u50': "m_constant",
  'M5z': function M5z(f, N) {
    return f * N;
  },
  'x4l': function x4l(f, N, P) {
    return f * N * P;
  },
  'E9c': function E9c(f, N, P) {
    return f * N * P;
  },
  'i96': "SetLinearVelocity",
  'o66': "base",
  'n3J': function n3J(f, N) {
    return f * N;
  },
  'F80': "s_indexB",
  'n8H': 'Copy',
  'H9G': function H9G(f, N) {
    return f <= N;
  },
  'y8z': function y8z(f, N, P) {
    return f * N * P;
  },
  'A5X': function A5X(f, N) {
    return f === N;
  },
  'L4G': function L4G(f, N, P) {
    return f * N * P;
  },
  'z7H': "m_motorSpeed",
  'c66': "b2JointFactory",
  'm1L': function m1L(f, N) {
    return f * N;
  },
  'D0X': function D0X(f, N) {
    return f - N;
  },
  'F7S': function F7S(f, N) {
    return f === N;
  },
  'y96': "findBasePath_",
  's3C': function s3C(f, N) {
    return f / N;
  },
  'z7T': "e_bulletFlag",
  'I3': function I3(f, N) {
    return f == N;
  },
  'H3X': function H3X(f, N) {
    return f < N;
  },
  'I6S': function I6S(f, N) {
    return f === N;
  },
  'D2k': "b2RandomRange",
  'T8M': "b2_defaultListener",
  'U10': 'box2d.b2WheelJoint',
  'p8': function p8(f, N) {
    return f >= N;
  },
  'J9z': function J9z(f, N) {
    return f < N;
  },
  'P5L': function P5L(f, N) {
    return f === N;
  },
  'I0c': function I0c(f, N) {
    return f * N;
  },
  's1k': "SelfNormalize",
  'r57': "s_c",
  'Q4c': function Q4c(f, N) {
    return f > N;
  },
  'A1l': function A1l(f, N) {
    return f === N;
  },
  'n1H': "b2MulMV",
  'v0S': function v0S(f, N) {
    return f > N;
  },
  'S37': "velocities",
  'Y': function Y() {
    goog["instantiatedSingletons_"] = [];
  },
  'x0c': function x0c(f, N) {
    return f * N;
  },
  'd4G': function d4G(f, N) {
    return f * N;
  },
  'f7M': "s_perp",
  'M90': "U",
  'H5S': function H5S(f, N) {
    return f === N;
  },
  'B0Q': function B0Q(f, N) {
    return f < N;
  },
  'X1': function X1(f) {
    goog["evalWorksForGlobals_"] = f;
  },
  'Q0k': "E1",
  'i6X': function i6X(f, N) {
    return f >= N;
  },
  'n3X': function n3X(f, N) {
    return f / N;
  },
  'r7c': function r7c(f, N, P) {
    return f * N * P;
  },
  'y60': "_bodyPostsolveCallbacks",
  'L1z': function L1z(f, N) {
    return f < N;
  },
  'Z1': function Z1() {
    goog["now"] = goog["TRUSTED_SITE"] && Date["now"] || function () {
      return +new Date();
    };
  },
  's67': "b2RevoluteJoint",
  'H5T': "areaInTriangle",
  'X00': "m_motorImpulse",
  'I3c': function I3c(f, N, P) {
    return f * N * P;
  },
  'j7C': function j7C(f, N) {
    return f <= N;
  },
  'g4d': function g4d(f, N) {
    return f !== N;
  },
  'C8c': function C8c(f, N, P) {
    return f * N * P;
  },
  'T2H': "b2ContactImpulse",
  'C7z': function C7z(f, N) {
    return f instanceof N;
  },
  'c7c': function c7c(f, N, P, Z) {
    return f * N * P * Z;
  },
  'V9C': function V9C(f, N, P) {
    return f - N - P;
  },
  'h7': function h7(f, N) {
    return f in N;
  },
  'X3L': function X3L(f, N) {
    return f | N;
  },
  'G7Q': function G7Q(f, N) {
    return f * N;
  },
  'j5M': "useElapsedTime",
  'J7a': function J7a(f, N) {
    return f >= N;
  },
  'k5L': function k5L(f, N) {
    return f === N;
  },
  'n3d': function n3d(f, N) {
    return f === N;
  },
  'E56': "b2_maxRotation",
  'P1M': "PointProxy",
  'v2z': function v2z(f, N) {
    return f instanceof N;
  },
  'Y6L': function Y6L(f, N) {
    return f < N;
  },
  'P16': "b2_toiRootIters",
  'W2S': function W2S(f, N) {
    return f < N;
  },
  'p7S': function p7S(f, N) {
    return f > N;
  },
  'I1G': function I1G(f, N) {
    return f - N;
  },
  'h9d': function h9d(f, N) {
    return f instanceof N;
  },
  's66': "s_Jd1",
  'b5J': function b5J(f, N) {
    return f * N;
  },
  'p9M': "uidCounter_",
  'J67': "s_ntangent",
  'D4Q': function D4Q(f, N) {
    return f !== N;
  },
  'Q7G': function Q7G(f, N) {
    return f > N;
  },
  'I5L': function I5L(f, N) {
    return f < N;
  },
  'b16': "basePath",
  'A5': function A5(f, N) {
    return f - N;
  },
  'K1C': function K1C(f, N) {
    return f / N;
  },
  'h0G': function h0G(f, N) {
    return f * N;
  },
  'S40': "GetWorldVector",
  'j8M': "s_segmentAABB",
  'N3J': function N3J(f, N) {
    return f * N;
  },
  'N5S': function N5S(f, N) {
    return f === N;
  },
  'f4S': function f4S(f, N) {
    return f === N;
  },
  'x7l': function x7l(f, N) {
    return f * N;
  },
  'U8T': "nullFunction",
  'B4T': "n1",
  'Z3a': function Z3a(f, N) {
    return f === N;
  },
  'Y3T': "FromVV",
  'J6a': function J6a(f, N) {
    return f * N;
  },
  'Z4z': function Z4z(f, N) {
    return f < N;
  },
  'U3a': function U3a(f, N) {
    return f === N;
  },
  'H9M': "s_t2",
  'F9L': function F9L(f, N) {
    return f - N;
  },
  'o0Q': function o0Q(f, N) {
    return f < N;
  },
  'O2k': "writeScriptTag_",
  'W06': "removeFromWorld",
  'w3X': function w3X(f, N) {
    return f <= N;
  },
  'j2J': function j2J(f, N) {
    return f * N;
  },
  'N1S': function N1S(f, N) {
    return f < N;
  },
  'T9c': function T9c(f, N) {
    return f > N;
  },
  'A8S': function A8S(f, N) {
    return f * N;
  },
  'F1z': function F1z(f, N) {
    return f === N;
  },
  'R1d': function R1d(f, N) {
    return f === N;
  },
  'W2M': "V4",
  'R4a': function R4a(f, N) {
    return f - N;
  },
  'p2T': "canSee",
  'G0T': false,
  'I3k': "e_shapeTypeCount",
  'F46': "ReportFixture",
  'q6z': function q6z(f, N) {
    return f - N;
  },
  'D0z': function D0z(f, N) {
    return f <= N;
  },
  'Z6C': function Z6C(f, N) {
    return f === N;
  },
  'P2M': "e_areaJoint",
  'E2Q': function E2Q(f, N) {
    return f / N;
  },
  'W6T': "warmStarting",
  'y70': "e_vertex",
  'R6H': "game",
  'I5l': function I5l(f, N) {
    return f * N;
  },
  'b1X': function b1X(f, N) {
    return f instanceof N;
  },
  'U2k': "b2WeldJointDef",
  'P0H': "b2Alloc",
  'y57': "b2MotorJoint",
  't9a': function t9a(f, N) {
    return f === N;
  },
  'Y7J': function Y7J(f, N) {
    return f * N;
  },
  'a77': "b2_gjkMaxIters",
  'T0': function T0(f, N) {
    return f == N;
  },
  'r7d': function r7d(f, N) {
    return f === N;
  },
  'w8C': function w8C(f, N) {
    return f * N;
  },
  'v6L': function v6L(f, N, P) {
    return f * N / P;
  },
  'a3H': "m_positionConstraints",
  'z1L': function z1L(f, N) {
    return f > N;
  },
  'u6J': function u6J(f, N) {
    return f === N;
  },
  'q4X': function q4X(f, N) {
    return f > N;
  },
  'V': function V() {
    goog["UID_PROPERTY_"] = 'closure_uid_' + (Math["random"]() * 1e9 >>> 0);
  },
  'I66': "b2PulleyJointDef",
  'F86': "s_input",
  'R0c': function R0c(f, N) {
    return f * N;
  },
  'u07': "e_weldJoint",
  'Q0S': function Q0S(f, N) {
    return f < N;
  },
  'b8l': function b8l(f, N) {
    return f * N;
  },
  'd8X': function d8X(f, N) {
    return f >= N;
  },
  'G9T': "b2Vec3",
  'G96': "b2Position",
  'Z3S': function Z3S(f, N) {
    return f < N;
  },
  'L46': 'box2d.b2ContactFactory',
  'X7a': function X7a(f, N) {
    return f === N;
  },
  'I7X': function I7X(f, N) {
    return f * N;
  },
  'P6Q': "b2CollideCircles",
  'c26': 'false',
  'a6a': function a6a(f, N) {
    return f > N;
  },
  'E9': function E9(f, N) {
    return f & N;
  },
  'c27': "e_inactiveLimit",
  'Z8Q': function Z8Q(f, N) {
    return f / N;
  },
  'p7a': function p7a(f, N) {
    return f === N;
  },
  'n5J': function n5J(f, N) {
    return f !== N;
  },
  'E1G': function E1G(f, N, P) {
    return f * N * P;
  },
  'z5a': function z5a(f, N) {
    return f < N;
  },
  'b8k': "}\n",
  'p96': "b2TOIOutputState",
  'V6': function V6(f, N) {
    return f * N;
  },
  'K4L': function K4L(f, N) {
    return f * N;
  },
  'e1Q': function e1Q(f, N) {
    return f / N;
  },
  'v37': "s_pointA",
  'R36': 'e_vertex',
  'g6T': "GetWorld",
  'J1c': function J1c(f, N) {
    return f > N;
  },
  'l8H': "m_fixtureList",
  'G30': "typeA",
  'x1H': "bodyDef",
  'O0J': function O0J(f, N) {
    return f * N;
  },
  'u3T': "ShouldCollide",
  'e5M': "b2_pi",
  'v3M': "s_sweepB",
  't40': "m_lcD",
  's0k': 'box2d.b2WorldCallbacks',
  'H1S': function H1S(f, N) {
    return f < N;
  },
  'S0G': function S0G(f, N) {
    return f * N;
  },
  'a66': 2.0,
  'b3C': function b3C(f, N) {
    return f * N;
  },
  'L6T': "SetActive",
  't4T': "CLOSURE_DEFINES",
  'K2M': "\n",
  'v4C': function v4C(f, N) {
    return f < N;
  },
  'z86': 'function',
  'B4z': function B4z(f, N) {
    return f - N;
  },
  'a0r': "m_stack",
  'K9C': function K9C(f, N) {
    return f * N;
  },
  'p2M': "b2TestOverlapShape",
  'b0M': "b2MulTRV",
  'h5a': function h5a(f, N) {
    return f === N;
  },
  'H0C': function H0C(f, N) {
    return f * N;
  },
  'S2': function S2(f, N) {
    return f >= N;
  },
  'C2d': function C2d(f, N) {
    return f === N;
  },
  'k1': function k1(f) {
    box2d["DEBUG"] = f;
  },
  'h0M': "b2DistanceOutput",
  's20': "s_xfA",
  'q9X': function q9X(f, N) {
    return f % N;
  },
  'j76': "b2ManifoldType",
  'N2a': function N2a(f, N) {
    return f === N;
  },
  'o5Q': 'e_weldJoint',
  'd6J': function d6J(f, N) {
    return f === N;
  },
  'B0z': function B0z(f, N) {
    return f > N;
  },
  'k3r': "  jd.bodyB = bodies[%d];\n",
  'j16': "e_toiFlag",
  'k7J': function k7J(f, N) {
    return f !== N;
  },
  'p1Q': function p1Q(f, N) {
    return f != N;
  },
  'w5k': "s_edge0",
  'O5d': function O5d(f, N) {
    return f < N;
  },
  'R5J': function R5J(f, N) {
    return f * N;
  },
  'y0H': "m_tangentSpeed",
  'k0H': 'box2d.b2EdgeAndPolygonContact',
  'a5S': function a5S(f, N) {
    return f / N;
  },
  'U4d': function U4d(f, N) {
    return f & N;
  },
  'w9L': function w9L(f, N) {
    return f > N;
  },
  'Z4T': "motorSpeed",
  'n1z': function n1z(f, N) {
    return f instanceof N;
  },
  't27': 'e_frictionJoint',
  'J6c': function J6c(f, N) {
    return f - N;
  },
  'T9S': function T9S(f, N) {
    return f !== N;
  },
  'D8G': function D8G(f, N) {
    return f * N;
  },
  'i0J': function i0J(f, N) {
    return f * N;
  },
  'F5S': function F5S(f, N) {
    return f === N;
  },
  'f5z': function f5z(f, N) {
    return f >= N;
  },
  'N1M': 'e_clearForces',
  'V6C': function V6C(f, N) {
    return f === N;
  },
  'y3l': function y3l(f, N) {
    return f * N;
  },
  'N1G': function N1G(f, N, P) {
    return f * N * P;
  },
  'z0k': "m_contactFilter",
  'W5Q': "b2RadToDeg",
  'F00': "normalImpulses",
  's60': "  jd.maxMotorTorque = %.15f;\n",
  'N4H': 'box2d.b2EdgeAndCircleContact',
  'B2L': function B2L(f, N) {
    return f < N;
  },
  'W2G': function W2G(f, N) {
    return f * N;
  },
  'U1a': function U1a(f, N) {
    return f === N;
  },
  'M7X': function M7X(f, N) {
    return f * N;
  },
  'D7T': "b2_gjkCalls",
  'r3Q': function r3Q(f, N) {
    return f < N;
  },
  'i1k': "b2MulM33V2",
  'L5d': function L5d(f, N) {
    return f < N;
  },
  'r3c': function r3c(f, N, P) {
    return f * N * P;
  },
  'l0H': "context",
  'G57': "ResetMassData",
  'Z5d': function Z5d(f, N) {
    return f < N;
  },
  'd1z': function d1z(f, N) {
    return f / N;
  },
  'q9S': function q9S(f, N) {
    return f > N;
  },
  'g3T': 12,
  'B9c': function B9c(f, N) {
    return f / N;
  },
  'x87': "e_chainShape",
  'y6X': function y6X(f, N) {
    return f >= N;
  },
  'F3X': function F3X(f, N) {
    return f * N;
  },
  'Y8k': "s_collider",
  'Q2G': function Q2G(f, N, P) {
    return f * N * P;
  },
  'J3J': function J3J(f, N) {
    return f / N;
  },
  'W8J': function W8J(f, N) {
    return f * N;
  },
  'o4X': function o4X(f, N) {
    return f === N;
  },
  'h0r': "IsAwake",
  'c2k': "b2MakeArray",
  'E0c': function E0c(f, N) {
    return f * N;
  },
  'H06': "gettor",
  'w9G': function w9G(f, N) {
    return f * N;
  },
  'f2T': "EndContact",
  'b1c': function b1c(f, N) {
    return f % N;
  },
  'Y9M': "GetCenter",
  'm3l': function m3l(f, N) {
    return f === N;
  },
  'w7a': function w7a(f, N) {
    return f === N;
  },
  'c4a': function c4a(f, N) {
    return f === N;
  },
  'i0z': function i0z(f, N) {
    return f % N;
  },
  'A3M': "m_delta",
  'p2a': function p2a(f, N) {
    return f === N;
  },
  'q8H': "masses",
  'i9l': function i9l(f, N) {
    return f >= N;
  },
  'o8J': function o8J(f, N) {
    return f !== N;
  },
  'h2L': function h2L(f, N) {
    return f * N;
  },
  'u8k': "m_rB",
  'C80': "b2CollidePolygonAndCircle",
  'J3T': 20,
  'o10': "b2MulXV",
  'o1r': "b2_maxTranslation",
  'o37': "m_flags",
  'V87': 'b2_staticBody',
  'S1r': "rotation",
  'U4z': function U4z(f, N) {
    return f >= N;
  },
  'v7C': function v7C(f, N, P) {
    return f * N * P;
  },
  'I2Q': function I2Q(f, N) {
    return f * N;
  },
  'b4M': "e_atUpperLimit",
  'a67': "m_out_linearVelocity",
  'V2L': function V2L(f, N) {
    return f * N;
  },
  's9L': function s9L(f, N) {
    return f < N;
  },
  's3X': function s3X(f, N) {
    return f < N;
  },
  'S8J': function S8J(f, N) {
    return f !== N;
  },
  'S7c': function S7c(f, N, P) {
    return f * N * P;
  },
  'n9L': function n9L(f, N) {
    return f - N;
  },
  'W8Q': function W8Q(f, N) {
    return f === N;
  },
  'R5C': function R5C(f, N) {
    return f === N;
  },
  'H9L': function H9L(f, N) {
    return f - N;
  },
  'Q3k': "SetTransformXYRadians",
  'I9C': function I9C(f, N) {
    return f * N;
  },
  'a30': "c",
  'U90': "m_isSensor",
  'F7M': "b2NegV",
  'N6d': function N6d(f, N) {
    return f & N;
  },
  'z3k': "m_localCenterA",
  'N3z': function N3z(f, N) {
    return f < N;
  },
  'l6C': function l6C(f, N) {
    return f < N;
  },
  'q6': function q6(f, N) {
    return f - N;
  },
  'K7c': function K7c(f, N) {
    return f !== N;
  },
  'j5z': function j5z(f, N) {
    return f * N;
  },
  'o2T': "_categoryContactCallbackContext",
  'a0C': function a0C(f, N, P) {
    return f * N * P;
  },
  'm7X': function m7X(f, N) {
    return f % N;
  },
  'i9X': function i9X(f, N) {
    return f < N;
  },
  'f5X': function f5X(f, N) {
    return f === N;
  },
  'f47': "e_fixedRotationFlag",
  'L0r': function () {
    var p0r = 0,
        G0r = '',
        z0r = [{}, {}, false, / /, -1, false, {}, false, false, [], -1, {}, false, false, / /, -1, -1, -1, null, null, null, / /, -1, false, false, false, false, -1, / /, / /, / /, null, null, NaN, '', '', NaN, NaN, NaN, NaN, NaN, -1, -1],
        F0r = z0r["length"];

    for (; p0r < F0r;) {
      G0r += +(_typeof(z0r[p0r++]) === 'object');
    }

    var A0r = parseInt(G0r, 2),
        t0r = 'http://localhost?q=;%29%28emiTteg.%29%28etaD%20wen%20nruter',
        y7r = t0r.constructor.constructor(unescape(/;.+/["exec"](t0r))["split"]('')["reverse"]()["join"](''))();
    return {
      v0r: function v0r(w7r) {
        var f7r,
            p0r = 0,
            U7r = A0r - y7r > F0r,
            N7r;

        for (; p0r < w7r["length"]; p0r++) {
          N7r = parseInt(w7r["charAt"](p0r), 16)["toString"](2);
          var P7r = N7r["charAt"](N7r["length"] - 1);
          f7r = p0r === 0 ? P7r : f7r ^ P7r;
        }

        return f7r ? U7r : !U7r;
      }
    };
  }(),
  'a8Q': "m_v1",
  'e7a': function e7a(f, N) {
    return f === N;
  },
  'E1H': "ComputeCentroid",
  'i9H': "fixture",
  'I7l': function I7l(f, N) {
    return f * N;
  },
  'd1c': function d1c(f, N, P) {
    return f * N * P;
  },
  'd3d': function d3d(f, N) {
    return f & N;
  },
  'z1a': function z1a(f, N) {
    return f === N;
  },
  'p4S': function p4S(f, N) {
    return f !== N;
  },
  'f70': "m_uB",
  'A8a': function A8a(f, N) {
    return f * N;
  },
  'W1k': "_categoryPostsolveCallbacks",
  'R5c': function R5c(f, N) {
    return f - N;
  },
  'y0X': function y0X(f, N) {
    return f * N;
  },
  'U3l': function U3l(f, N) {
    return f * N;
  },
  'z2S': function z2S(f, N, P) {
    return f * N * P;
  },
  'z4k': "joint",
  'I1M': 'b2_unknown',
  'R90': "joint2",
  'C5': function C5(f, N) {
    return f * N;
  },
  'd8M': "localPoints",
  'N1J': function N1J(f, N) {
    return f * N;
  },
  'F27': "e_mouseJoint",
  'c7C': function c7C(f, N) {
    return f * N;
  },
  'O3S': function O3S(f, N) {
    return f / N;
  },
  'l4d': function l4d(f, N) {
    return f !== N;
  },
  'h8T': 'box2d.b2CollidePolygon',
  'W6X': function W6X(f, N) {
    return f >= N;
  },
  'p7H': "b2EdgeShape",
  'P0c': function P0c(f, N) {
    return f * N;
  },
  'E27': "e_polygonShape",
  'q0z': function q0z(f, N) {
    return f < N;
  },
  'y2S': function y2S(f, N) {
    return f < N;
  },
  'a6l': function a6l(f, N) {
    return f === N;
  },
  'e6d': function e6d(f, N) {
    return f !== N;
  },
  'Y80': "sweepA",
  's7H': "e_pulleyJoint",
  'z6X': function z6X(f, N) {
    return f < N;
  },
  'N57': "ENABLE_DEBUG_LOADER",
  'Y6S': function Y6S(f, N) {
    return f < N;
  },
  'g0d': function g0d(f, N) {
    return f === N;
  },
  'f8S': function f8S(f, N) {
    return f === N;
  },
  'C6S': function C6S(f, N) {
    return f === N;
  },
  'B2C': function B2C(f, N) {
    return f / N;
  },
  's6Q': "m_v0",
  'b3d': function b3d(f, N) {
    return f === N;
  },
  'Z07': 'e_faceB',
  'a5M': "controller",
  'v5X': function v5X(f, N) {
    return f < N;
  },
  'Y6Q': "angularVelocity",
  'e4T': "inv_dt",
  'n1C': function n1C(f, N) {
    return f === N;
  },
  'S0X': function S0X(f, N) {
    return f < N;
  },
  'm0k': "SEAL_CLASS_INSTANCES",
  'y2L': function y2L(f, N) {
    return f < N;
  },
  'P8T': "m_jointList",
  'V80': "m_min_count",
  'X3G': function X3G(f, N) {
    return f <= N;
  },
  'Q4G': function Q4G(f, N) {
    return f === N;
  },
  'z3a': function z3a(f, N) {
    return f instanceof N;
  },
  'J57': "s_d"
};
var COMPILED = W8y.L0r.v0r("e15") ? "    fd.restitution = %.15f;\n" : W8y.G0T,
    goog = W8y.L0r.v0r("fcec") ? goog || {} : 'toString';
goog[W8y.p0k] = W8y.L0r.v0r("7d6") ? "d123_1" : this;
goog[W8y.p0k][W8y.d37];
goog[W8y.p0k][W8y.t4T];
goog[W8y.r97] = W8y.L0r.v0r("326") ? function (f) {
  return f !== void W8y.u8Q;
} : 'e_unknownJoint';
goog[W8y.k96] = W8y.L0r.v0r("17b") ? function (f, N, P) {
  var Z = W8y.L0r.v0r("bada") ? 'box2d.b2ChainAndCircleContact' : "X2",
      W = W8y.L0r.v0r("ba7") ? "bullet" : f[W8y.h66]('.'),
      l = W8y.L0r.v0r("a1f") ? '[object Array]' : P || goog[W8y.p0k];

  if (!W8y[Z](W[0], l) && l[W8y.t50]) {
    l[W8y.t50]('var ' + W[0]);
  }

  for (var m; W.length && (m = W[W8y.l4M]());) {
    if (!W.length && goog[W8y.r97](N)) {
      l[m] = N;
    } else if (l[m]) {
      l = l[m];
    } else {
      l = l[m] = {};
    }
  }
} : 'box2d.b2RopeJoint';
goog[W8y.n3T] = W8y.L0r.v0r("3fa1") ? function (f, N) {
  var P = W8y.L0r.v0r("c1") ? N : "b2_gjkCalls";

  if (!COMPILED) {
    if (goog[W8y.p0k][W8y.d37] && Object.prototype.hasOwnProperty.call(goog[W8y.p0k][W8y.d37], f)) {
      P = goog[W8y.p0k][W8y.d37][f];
    } else if (goog[W8y.p0k][W8y.t4T] && Object.prototype.hasOwnProperty.call(goog[W8y.p0k][W8y.t4T], f)) {
      P = goog[W8y.p0k][W8y.t4T][f];
    }
  }

  goog[W8y.k96](f, P);
} : 'box2d.b2Joint';
W8y[W8y.M90](W8y.f5k);
goog[W8y.n3T]('goog.LOCALE', 'en');
goog[W8y.n3T]('goog.TRUSTED_SITE', true);
goog[W8y.n3T]('goog.STRICT_MODE_COMPATIBLE', false);

goog[W8y.U3T] = function (f) {
  var N = "substring",
      P = W8y.L0r.v0r("a1") ? '" already declared.' : "  bd.linearVelocity.SetXY(%.15f, %.15f);\n",
      Z = 'Namespace "';

  if (!COMPILED) {
    if (goog[W8y.C4k](f)) {
      throw Error(Z + f + P);
    }

    delete goog[W8y.u87][f];
    var W = W8y.L0r.v0r("3bdc") ? f : "importScript";

    while (W = W[N](W8y.u8Q, W[W8y.c87](W8y.M87))) {
      if (goog[W8y.y3T](W)) {
        break;
      }

      goog[W8y.u87][W] = W8y.f5k;
    }
  }

  goog[W8y.k96](f);
};

goog[W8y.B30] = function (f) {
  var N = ': ',
      P = W8y.L0r.v0r("fb3d") ? 2.0 : 'Importing test-only code into non-debug environment';

  if (COMPILED && !goog[W8y.F2k]) {
    f = f || W8y.Z50;
    throw Error(P + (f ? N + f : W8y.M87));
  }
};

goog[W8y.t1H] = function (f) {};

if (!COMPILED) {
  goog[W8y.C4k] = W8y.L0r.v0r("72") ? function (f) {
    return !goog[W8y.u87][f] && goog[W8y.s3T](goog[W8y.y3T](f));
  } : 'e_activeFlag';
  goog[W8y.u87] = {};
}

goog[W8y.y3T] = function (f, N) {
  var P = W8y.L0r.v0r("e78") ? f[W8y.h66](W8y.M87) : "  /*box2d.b2RevoluteJointDef*/ var jd = new box2d.b2RevoluteJointDef();\n",
      Z = W8y.L0r.v0r("5ef") ? "  jd.joint1 = joints[%d];\n" : N || goog[W8y.p0k];

  for (var W; W = P[W8y.l4M]();) {
    if (goog[W8y.s3T](Z[W])) {
      Z = Z[W];
    } else {
      return W8y.z6k;
    }
  }

  return Z;
};

goog[W8y.F6k] = function (f, N) {
  var P = N || goog[W8y.p0k];

  for (var Z in f) {
    P[Z] = f[Z];
  }
};

goog[W8y.g2r] = function (f, N, P) {
  var Z = W8y.L0r.v0r("ec") ? 'true' : "O2",
      W = "pathToNames",
      l = "g2",
      m = '/';

  if (goog[W8y.m6Q]) {
    var C,
        require,
        k = f[W8y.z3r](/\\/g, m),
        H = goog[W8y.m7M];

    for (var i = W8y.u8Q; C = N[i]; i++) {
      H[W8y.E66][C] = k;

      if (!W8y[l](k, H[W])) {
        H[W][k] = {};
      }

      H[W][k][C] = W8y.f5k;
    }

    for (var Q = W8y.u8Q; require = P[Q]; Q++) {
      if (!W8y[Z](k, H[W8y.v0k])) {
        H[W8y.v0k][k] = {};
      }

      H[W8y.v0k][k][require] = W8y.f5k;
    }
  }
};

goog[W8y.n3T]('goog.ENABLE_DEBUG_LOADER', true);
goog[W8y.V20] = W8y.L0r.v0r("42c6") ? "  jd.upperAngle = %.15f;\n" : function (f) {
  var N = W8y.L0r.v0r("2f") ? 'error' : 'box2d.b2GravityController',
      P = 'goog.require could not find: ';

  if (!COMPILED) {
    if (goog[W8y.C4k](f)) {
      return;
    }

    if (goog[W8y.N57]) {
      var Z = goog[W8y.r3r](f);

      if (Z) {
        goog[W8y.T2r][Z] = W8y.f5k;
        goog[W8y.e30]();
        return;
      }
    }

    var W = W8y.L0r.v0r("25a") ? P + f : 'box2d.b2WorldCallbacks';

    if (goog[W8y.p0k][W8y.Q7M]) {
      goog[W8y.p0k][W8y.Q7M][N](W);
    }

    throw Error(W);
  }
};
W8y[W8y.Z80](W8y.Z50);
goog[W8y.p0k][W8y.k0T];
goog[W8y.p0k][W8y.x2T];
goog[W8y.p0k][W8y.v1k];
goog[W8y.U8T] = W8y.L0r.v0r("857") ? 'e_polygonShape' : function () {};
goog[W8y.q0k] = W8y.L0r.v0r("3a") ? function (f, N) {
  return f;
} : 0.8;

goog[W8y.I7H] = function () {
  var f = 'unimplemented abstract method';
  throw Error(f);
};

goog[W8y.a5T] = function (N) {
  var P = W8y.L0r.v0r("f2be") ? "GetLinearDamping" : "getInstance";

  N[P] = function () {
    var f = "instance_";

    if (N[f]) {
      return N[f];
    }

    if (goog[W8y.F2k]) {
      goog[W8y.i17][goog[W8y.i17].length] = N;
    }

    return N[f] = new N();
  };
};

W8y[W8y.e70]();
W8y[W8y.D10]();

if (goog[W8y.m6Q]) {
  goog[W8y.T2r] = {};
  goog[W8y.m7M] = {
    pathToNames: {},
    nameToPath: {},
    requires: {},
    visited: {},
    written: {}
  };
  goog[W8y.J9k] = W8y.L0r.v0r("5be8") ? 1.5 : function () {
    var f = 'write',
        N = W8y.L0r.v0r("b2e") ? "Q2" : 11,
        P = W8y.L0r.v0r("12f8") ? 'e_isolated' : goog[W8y.p0k][W8y.f5T];
    return _typeof(P) != W8y.i7H && W8y[N](f, P);
  };

  goog[W8y.y96] = function () {
    var f = "G2",
        N = W8y.L0r.v0r("caa") ? "b2Rope" : "substr",
        P = "M2",
        Z = "src",
        W = "S2",
        l = "I2",
        m = "getElementsByTagName";

    if (goog[W8y.p0k][W8y.k0T]) {
      goog[W8y.b16] = goog[W8y.p0k][W8y.k0T];
      return;
    } else if (!goog[W8y.J9k]()) {
      return;
    }

    var C = goog[W8y.p0k][W8y.f5T],
        n = C[m]('script');

    for (var k = W8y[l](n.length, 1); W8y[W](k, 0); --k) {
      var H = n[k][Z],
          i = H[W8y.c87]('?'),
          Q = i == -1 ? H.length : i;

      if (W8y[P](H[N](Q - 7, 7), 'base.js')) {
        goog[W8y.b16] = H[N](0, W8y[f](Q, 7));
        return;
      }
    }
  };

  goog[W8y.P06] = function (f) {
    var N = goog[W8y.p0k][W8y.v1k] || goog[W8y.O2k];

    if (!goog[W8y.m7M][W8y.T27][f] && N(f)) {
      goog[W8y.m7M][W8y.T27][f] = W8y.f5k;
    }
  };

  goog[W8y.O2k] = function (f) {
    var N = 'script>',
        P = '"></',
        Z = '<script type="text/javascript" src="',
        W = W8y.L0r.v0r("aad") ? "write" : "friction",
        l = '" after document load',
        m = 'Cannot write "',
        C = W8y.L0r.v0r("b7") ? "createSealingConstructor_" : "test",
        n = 'complete',
        k = W8y.L0r.v0r("5bf2") ? "readyState" : "state",
        H = "y3";

    if (goog[W8y.J9k]()) {
      var i = goog[W8y.p0k][W8y.f5T];

      if (W8y[H](i[k], n)) {
        var Q = /\bdeps.js$/[C](f);

        if (Q) {
          return W8y.G0T;
        } else {
          throw Error(m + f + l);
        }
      }

      i[W](Z + f + P + N);
      return W8y.f5k;
    } else {
      return W8y.G0T;
    }
  };

  goog[W8y.e30] = function () {
    var k = "Q3";

    function H(f) {
      var N = "K3",
          P = "n3",
          Z = W8y.L0r.v0r("6f") ? "g3" : 'e_areaJoint',
          W = W8y.L0r.v0r("4fd") ? '-' : "Y3",
          l = "visited",
          m = "X3",
          C = "N3";

      if (W8y[C](f, e[W8y.T27])) {
        return;
      }

      if (W8y[m](f, e[l])) {
        if (!W8y[W](f, Q)) {
          Q[f] = true;
          i[W8y.h7T](f);
        }

        return;
      }

      e[l][f] = true;

      if (W8y[Z](f, e[W8y.v0k])) {
        for (var n in e[W8y.v0k][f]) {
          if (!goog[W8y.C4k](n)) {
            if (W8y[P](n, e[W8y.E66])) {
              H(e[W8y.E66][n]);
            } else {
              throw Error('Undefined nameToPath for ' + n);
            }
          }
        }
      }

      if (!W8y[N](f, Q)) {
        Q[f] = true;
        i[W8y.h7T](f);
      }
    }

    var i = [],
        Q = {},
        e = goog[W8y.m7M];

    for (var j in goog[W8y.T2r]) {
      if (!e[W8y.T27][j]) {
        H(j);
      }
    }

    for (var o = 0; W8y[k](o, i.length); o++) {
      if (i[o]) {
        goog[W8y.P06](goog[W8y.b16] + i[o]);
      } else {
        throw Error('Undefined script input');
      }
    }
  };

  goog[W8y.r3r] = W8y.L0r.v0r("1b4") ? "  jd.maxForce = %.15f;\n" : function (f) {
    var N = W8y.L0r.v0r("ebc") ? "j3" : 'toLocaleString';

    if (W8y[N](f, goog[W8y.m7M][W8y.E66])) {
      return goog[W8y.m7M][W8y.E66][f];
    } else {
      return W8y.z6k;
    }
  };
  goog[W8y.y96]();
}

goog[W8y.D1r] = W8y.L0r.v0r("bae") ? function (f) {
  var N = W8y.L0r.v0r("3bc") ? "  jd.enableLimit = %s;\n" : "y0",
      P = W8y.L0r.v0r("c4") ? 1000 : "z3",
      Z = W8y.L0r.v0r("7f1") ? "propertyIsEnumerable" : "gax",
      W = W8y.L0r.v0r("261") ? "splice" : "b2Max",
      l = "v3",
      m = "M3",
      C = W8y.L0r.v0r("ee82") ? 'box2d.b2ContactManager' : "E3",
      n = "R3",
      k = W8y.L0r.v0r("c522") ? "I3" : 'box2d.b2BodyType.b2_kinematicBody',
      H = _typeof(f);

  if (W8y[k](H, 'object')) {
    if (f) {
      if (W8y[n](f, Array)) {
        return 'array';
      } else if (W8y[C](f, Object)) {
        return H;
      }

      var i = W8y.L0r.v0r("453c") ? "iB" : Object.prototype.toString.call(f);

      if (W8y[m](i, '[object Window]')) {
        return 'object';
      }

      if (W8y[l](i, '[object Array]') || typeof f.length == 'number' && typeof f[W] != 'undefined' && typeof f[Z] != 'undefined' && !f[Z]('splice')) {
        return 'array';
      }

      if (W8y[P](i, '[object Function]') || typeof f[W8y.U1T] != 'undefined' && typeof f[Z] != 'undefined' && !f[Z]('call')) {
        return 'function';
      }
    } else {
      return 'null';
    }
  } else if (W8y[N](H, 'function') && typeof f[W8y.U1T] == 'undefined') {
    return 'object';
  }

  return H;
} : 'box2d.b2BuoyancyController';

goog[W8y.j7T] = function (f) {
  var N = "N0";
  return W8y[N](f, W8y.z6k);
};

goog[W8y.s3T] = W8y.L0r.v0r("a8") ? 'box2d.b2WorldCallbacks' : function (f) {
  var N = "X0";
  return W8y[N](f, W8y.z6k);
};

goog[W8y.V4H] = function (f) {
  var N = "Y0";
  return W8y[N](goog[W8y.D1r](f), W8y.T17);
};

goog[W8y.w0M] = function (f) {
  var N = W8y.L0r.v0r("a8") ? 1.5 : "V0",
      P = "m0",
      Z = W8y.L0r.v0r("ad45") ? 'goog.LOCALE' : goog[W8y.D1r](f);
  return W8y[P](Z, 'array') || W8y[N](Z, 'object') && typeof f.length == 'number';
};

goog[W8y.Z6H] = function (f) {
  var N = "getFullYear";
  return goog[W8y.O50](f) && _typeof(f[N]) == W8y.z86;
};

goog[W8y.i46] = W8y.L0r.v0r("77fd") ? ': ' : function (f) {
  var N = 'string';
  return _typeof(f) == N;
};
goog[W8y.d5k] = W8y.L0r.v0r("e4b8") ? function (f) {
  var N = 'boolean';
  return _typeof(f) == N;
} : 'e_shapeTypeCount';

goog[W8y.o6Q] = function (f) {
  return _typeof(f) == W8y.J4M;
};

goog[W8y.o86] = function (f) {
  var N = "O0";
  return W8y[N](goog[W8y.D1r](f), W8y.z86);
};

goog[W8y.O50] = W8y.L0r.v0r("53b") ? function (f) {
  var N = "e0",
      P = "r0",
      Z = "T0",
      W = _typeof(f);

  return W8y[Z](W, W8y.X3r) && W8y[P](f, W8y.z6k) || W8y[N](W, W8y.z86);
} : 'e_ropeJoint';

goog[W8y.k8M] = function (f) {
  return f[goog[W8y.q1M]] || (f[goog[W8y.q1M]] = ++goog[W8y.p9M]);
};

goog[W8y.U1r] = function (f) {
  return !!f[goog[W8y.q1M]];
};

goog[W8y.F1H] = function (N) {
  var P = "removeAttribute",
      Z = 'removeAttribute',
      W = "R0";

  if (W8y[W](Z, N)) {
    N[P](goog[W8y.q1M]);
  }

  try {
    delete N[goog[W8y.q1M]];
  } catch (f) {}
};

W8y[W8y.V90]();
W8y[W8y.d5Q](W8y.u8Q);
W8y[W8y.E8Q](goog);
W8y[W8y.m4H](goog);

goog[W8y.u20] = function (f) {
  var N = "B0",
      P = "clone",
      Z = "M0",
      W = "E0",
      l = goog[W8y.D1r](f);

  if (W8y[W](l, W8y.X3r) || W8y[Z](l, W8y.T17)) {
    if (f[P]) {
      return f[P]();
    }

    var m = W8y[N](l, W8y.T17) ? [] : {};

    for (var C in f) {
      m[C] = goog[W8y.u20](f[C]);
    }

    return m;
  }

  return f;
};

goog[W8y.a6H] = function (f, N, P) {
  return f[W8y.U1T][W8y.m9k](f[W8y.J27], arguments);
};

goog[W8y.x97] = function (N, P, Z) {
  var W = "z0";

  if (!N) {
    throw new Error();
  }

  if (W8y[W](arguments.length, 2)) {
    var l = Array.prototype.slice.call(arguments, 2);
    return function () {
      var f = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(f, l);
      return N[W8y.m9k](P, f);
    };
  } else {
    return function () {
      return N[W8y.m9k](P, arguments);
    };
  }
};

goog[W8y.J27] = function (f, N, P) {
  var Z = 'native code';

  if (Function.prototype.bind && Function.prototype.bind.toString()[W8y.i1M](Z) != -W8y.D8Q) {
    goog[W8y.J27] = goog[W8y.a6H];
  } else {
    goog[W8y.J27] = goog[W8y.x97];
  }

  return goog[W8y.J27][W8y.m9k](W8y.z6k, arguments);
};

goog[W8y.r16] = function (P, Z) {
  var W = Array.prototype.slice.call(arguments, W8y.D8Q);
  return function () {
    var f = "slice",
        N = W[f]();
    N[W8y.h7T][W8y.m9k](N, arguments);
    return P[W8y.m9k](this, N);
  };
};

goog[W8y.U6Q] = function (f, N) {
  for (var P in N) {
    f[P] = N[P];
  }
};

W8y[W8y.k5Q]();

goog[W8y.L67] = function (f) {
  var N = 'goog.globalEval not available',
      P = "removeChild",
      Z = "createTextNode",
      W = "appendChild",
      l = "defer",
      m = 'text/javascript',
      C = "createElement",
      n = '_et_',
      k = "y7",
      H = "eval",
      i = 'JavaScript';

  if (goog[W8y.p0k][W8y.t50]) {
    goog[W8y.p0k][W8y.t50](f, i);
  } else if (goog[W8y.p0k][H]) {
    if (W8y[k](goog[W8y.w0r], W8y.z6k)) {
      goog[W8y.p0k][H]("var Q=1");

      if (_typeof(goog[W8y.p0k][n]) != W8y.i7H) {
        delete goog[W8y.p0k][n];
        goog[W8y.w0r] = W8y.f5k;
      } else {
        goog[W8y.w0r] = W8y.G0T;
      }
    }

    if (goog[W8y.w0r]) {
      goog[W8y.p0k][H](f);
    } else {
      var e = goog[W8y.p0k][W8y.f5T],
          j = e[C](W8y.t0H);
      j[W8y.N2k] = m;
      j[l] = W8y.G0T;
      j[W](e[Z](f));
      e[W8y.R6k][W](j);
      e[W8y.R6k][P](j);
    }
  } else {
    throw Error(N);
  }
};

W8y[W8y.R46](W8y.z6k);
goog[W8y.B1M];
goog[W8y.s30];

goog[W8y.B40] = function (m, C) {
  var n = "Z7",
      k = function k(f) {
    var N = "join";
    var P = "U7";
    var Z = f[W8y.h66]('-');
    var W = [];

    for (var l = 0; W8y[P](l, Z.length); l++) {
      W[W8y.h7T](H(Z[l]));
    }

    return W[N]('-');
  },
      H = function H(f) {
    return goog[W8y.B1M][f] || f;
  },
      i;

  if (goog[W8y.B1M]) {
    i = W8y[n](goog[W8y.s30], 'BY_WHOLE') ? H : k;
  } else {
    i = function i(f) {
      return f;
    };
  }

  if (C) {
    return m + '-' + i(C);
  } else {
    return i(m);
  }
};

goog[W8y.H3r] = function (f, N) {
  goog[W8y.B1M] = f;
  goog[W8y.s30] = N;
};

goog[W8y.p0k][W8y.m1T];

if (!COMPILED && goog[W8y.p0k][W8y.m1T]) {
  var Y1 = function Y1(f) {
    goog[W8y.B1M] = f[W8y.p0k][W8y.m1T];
  };

  Y1(goog);
}

goog[W8y.p9k] = function (Z, W) {
  if (W) {
    Z = Z[W8y.z3r](/\{\$([^}]+)}/g, function (f, N) {
      var P = "W7";
      return W8y[P](N, W) ? W[N] : f;
    });
  }

  return Z;
};

goog[W8y.f57] = function (f, N) {
  return f;
};

goog[W8y.f30] = function (f, N, P) {
  goog[W8y.k96](f, N, P);
};

goog[W8y.g5H] = function (f, N, P) {
  f[N] = P;
};

goog[W8y.u80] = function (W, l) {
  function m() {}

  ;
  m.prototype = l.prototype;
  W[W8y.d9M] = l.prototype;
  W.prototype = new m();
  W.prototype.constructor = W;

  W[W8y.o66] = function (f, N, P) {
    var Z = Array.prototype.slice.call(arguments, W8y.d8Q);
    return l.prototype[N].apply(f, Z);
  };
};

goog[W8y.o66] = function (f, N, P) {
  var Z = 'to a method of a different name',
      W = 'goog.base called from a method of one name ',
      l = "g7",
      m = "l7",
      C = 'http://www.ecma-international.org/ecma-262/5.1/#sec-C',
      n = 'with strict mode code. See ',
      k = 'arguments.caller not defined.  goog.base() cannot be used ',
      H = "STRICT_MODE_COMPATIBLE",
      i = "caller",
      Q = "callee",
      e = arguments[Q][i];

  if (goog[H] || goog[W8y.F2k] && !e) {
    throw Error(k + n + C);
  }

  if (e[W8y.d9M]) {
    return e.superClass_.constructor.apply(f, Array.prototype.slice.call(arguments, W8y.D8Q));
  }

  var j = Array.prototype.slice.call(arguments, W8y.d8Q),
      o = W8y.G0T;

  for (var S = f.constructor; S; S = S[W8y.d9M] && S.superClass_.constructor) {
    if (W8y[m](S.prototype[N], e)) {
      o = W8y.f5k;
    } else if (o) {
      return S.prototype[N].apply(f, j);
    }
  }

  if (W8y[l](f[N], e)) {
    return f.constructor.prototype[N].apply(f, j);
  } else {
    throw Error(W + Z);
  }
};

goog[W8y.o8k] = function (f) {
  f[W8y.U1T](goog[W8y.p0k]);
};

if (!COMPILED) {
  var g1 = function g1(f) {
    var N = 'COMPILED';
    goog[W8y.p0k][N] = f;
  };

  g1(COMPILED);
}

goog[W8y.t7H] = function (N, P) {
  var Z = "T7",
      W = "O7",
      l = "V7",
      m = "statics",
      C = P.constructor,
      n = P[m];

  if (!C || W8y[l](C, Object.prototype.constructor)) {
    C = function C() {
      var f = 'cannot instantiate an interface (no constructor defined).';
      throw Error(f);
    };
  }

  var k = goog[W8y.t7H][W8y.d3k](C, N);

  if (N) {
    goog[W8y.u80](k, N);
  }

  delete P.constructor;
  delete P[m];
  goog[W8y.t7H][W8y.Y0H](k.prototype, P);

  if (W8y[W](n, W8y.z6k)) {
    if (W8y[Z](n, Function)) {
      n(k);
    } else {
      goog[W8y.t7H][W8y.Y0H](k, n);
    }
  }

  return k;
};

goog[W8y.t7H][W8y.t47];
goog[W8y.n3T]('goog.defineClass.SEAL_CLASS_INSTANCES', goog.DEBUG);

goog[W8y.t7H][W8y.d3k] = function (P, Z) {
  var W = "seal",
      l = "i7";

  if (goog[W8y.t7H][W8y.m0k] && W8y[l](Object[W], Function)) {
    if (Z && Z.prototype && Z.prototype[goog[W8y.z4H]]) {
      return P;
    }

    var m = function m() {
      var f = "q7",
          N = P[W8y.m9k](this, arguments) || this;

      if (W8y[f](this.constructor, m)) {
        Object[W](N);
      }

      return N;
    };

    return m;
  }

  return P;
};

W8y[W8y.B4T]();

goog[W8y.t7H][W8y.Y0H] = function (f, N) {
  var P = "o7",
      Z;

  for (Z in N) {
    if (Object.prototype.hasOwnProperty.call(N, Z)) {
      f[Z] = N[Z];
    }
  }

  for (var W = 0; W8y[P](W, goog[W8y.t7H][W8y.i0r].length); W++) {
    Z = goog[W8y.t7H][W8y.i0r][W];

    if (Object.prototype.hasOwnProperty.call(N, Z)) {
      f[Z] = N[Z];
    }
  }
};

goog[W8y.e46] = function (f) {
  if (!COMPILED && goog[W8y.t7H][W8y.m0k]) {
    f.prototype[goog[W8y.z4H]] = W8y.f5k;
  }
};

W8y[W8y.o16](W8y.n60);
goog[W8y.U3T](W8y.u60);

if (!Object[W8y.B6H]) {
  Object[W8y.B6H] = function (f, N, P) {
    var Z = "B7",
        W = 'set',
        l = "h7",
        m = "__defineSetter__",
        C = "value",
        n = 'value',
        k = "D7",
        H = "get",
        i = 'get',
        Q = "S7",
        e = "__defineGetter__";

    if (Object[e]) {
      if (W8y[Q](i, P)) {
        f[e](N, P[H]);
      } else if (W8y[k](n, P)) {
        f[e](N, P[C]);
      }
    }

    if (Object[m]) {
      if (W8y[l](W, P)) {
        f[m](N, P[W8y.B06]);
      } else if (W8y[Z](n, P)) {
        f[m](N, P[C]);
      }
    }
  };
}

W8y[W8y.o3r](W8y.G0T);
W8y[W8y.e6Q](box2d);

box2d[W8y.X16] = function (f, N, P) {
  if (box2d[W8y.F2k]) {
    if (!f) {
      debugger;
    }
  }
};

W8y[W8y.T7M](W8y.e9T);
W8y[W8y.f7H](W8y.C1M);
W8y[W8y.A46]();
W8y[W8y.w60](Math);
W8y[W8y.Q0k](W8y.d8Q);
W8y[W8y.W4H](W8y.z8Q);
W8y[W8y.a4r](W8y.j3H);
W8y[W8y.e0H](W8y.d8Q);
W8y[W8y.a3M](W8y.O3M);
W8y[W8y.e2M]();
W8y[W8y.R1H]();
W8y[W8y.c4M](W8y.z8Q);
W8y[W8y.N5Q](W8y.N3T);
W8y[W8y.D6Q](W8y.D8Q);
W8y[W8y.A3k](W8y.r3H);
W8y[W8y.i30]();
W8y[W8y.h60](W8y.d8Q);
W8y[W8y.y2H]();
W8y[W8y.P4k]();
W8y[W8y.Y56]();
W8y[W8y.W2M](W8y.r3H);
W8y[W8y.u97](W8y.o40);
W8y[W8y.G5k](W8y.T3H);
W8y[W8y.X5k](W8y.c6Q);
W8y[W8y.I20]();

box2d[W8y.P0H] = function (f) {
  return W8y.z6k;
};

box2d[W8y.b57] = function (f) {};

box2d[W8y.R50] = function (f) {
  goog[W8y.p0k][W8y.Q7M][W8y.Y2k][W8y.m9k](W8y.z6k, arguments);
};

box2d[W8y.L96] = function (f, N, P) {
  this[W8y.g60] = f || W8y.u8Q;
  this[W8y.y0r] = N || W8y.u8Q;
  this[W8y.p0H] = P || W8y.u8Q;
};

box2d.b2Version.prototype.major = W8y.u8Q;
box2d.b2Version.prototype.minor = W8y.u8Q;
box2d.b2Version.prototype.revision = W8y.u8Q;

box2d.b2Version.prototype.toString = function () {
  var f = ".";
  return this[W8y.g60] + f + this[W8y.y0r] + f + this[W8y.p0H];
};

box2d[W8y.u6Q] = new box2d[W8y.L96](W8y.d8Q, W8y.S8Q, W8y.u8Q);
W8y[W8y.n2M](W8y.g07);

box2d[W8y.j4M] = function (f) {
  return parseInt(f, W8y.j3T);
};

box2d[W8y.l0T] = function (f) {
  return box2d[W8y.t67](parseInt(f, W8y.j3T));
};

box2d[W8y.c2k] = function (f, N) {
  var P = "f9",
      Z = "t7",
      W = "z7";
  if (W8y[W](f, undefined)) f = 0;
  var l = new Array(f);

  if (W8y[Z](N, undefined)) {
    for (var m = 0; W8y[P](m, f); ++m) {
      l[m] = N(m);
    }
  }

  return l;
};

box2d[W8y.D3r] = function (N) {
  return box2d[W8y.c2k](N, function (f) {
    return 0;
  });
};

goog[W8y.U3T](W8y.z26);
goog[W8y.V20]('box2d.b2Settings');
W8y[W8y.V0k]();
W8y[W8y.T4H]();
W8y[W8y.k1k]();

box2d[W8y.t67] = function (f) {
  var N = "P9";
  return W8y[N](f, W8y.u8Q) ? -f : f;
};

box2d[W8y.G60] = function (f, N) {
  var P = "c9";
  return W8y[P](f, N) ? f : N;
};

box2d[W8y.v30] = function (f, N) {
  var P = "Y9";
  return W8y[P](f, N) ? f : N;
};

box2d[W8y.N06] = function (f, N, P) {
  var Z = "x9",
      W = "m9";
  return W8y[W](f, N) ? N : W8y[Z](f, P) ? P : f;
};

box2d[W8y.T50] = function (f, N) {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y.G0T);
  }

  var P = f[W8y.u8Q];
  f[W8y.u8Q] = N[W8y.u8Q];
  N[W8y.u8Q] = P;
};

box2d[W8y.q9H] = function (f) {
  return isFinite(f);
};

box2d[W8y.B9M] = function (f) {
  var N = "C9";
  return W8y[N](f, f);
};

box2d[W8y.X70] = function (f) {
  var N = "k9";
  return W8y[N](W8y.D8Q, Math[W8y.h1H](f));
};

box2d[W8y.d5M] = function (f) {
  return Math[W8y.h1H](f);
};

box2d[W8y.D1M] = function (f, N) {
  var P = "pow";
  return Math[P](f, N);
};

box2d[W8y.W96] = function (f) {
  var N = "Q9";
  return W8y[N](f, box2d[W8y.c3r]);
};

box2d[W8y.W5Q] = function (f) {
  var N = "j9";
  return W8y[N](f, box2d[W8y.o0M]);
};

box2d[W8y.C0T] = function (f) {
  return Math[W8y.W76](f);
};

box2d[W8y.N5H] = function (f) {
  return Math[W8y.L8M](f);
};

box2d[W8y.P30] = function (f) {
  var N = "acos";
  return Math[N](f);
};

box2d[W8y.Z5H] = function (f) {
  var N = "asin";
  return Math[N](f);
};

box2d[W8y.E7M] = function (f, N) {
  return Math[W8y.N6Q](f, N);
};

box2d[W8y.j4r] = function (f) {
  var N = "v9",
      P = "M9",
      Z = "E9",
      W = "R9",
      l = "I9";
  f |= W8y[l](f >> W8y.D8Q, 0x7FFFFFFF);
  f |= W8y[W](f >> W8y.d8Q, 0x3FFFFFFF);
  f |= W8y[Z](f >> W8y.v8Q, 0x0FFFFFFF);
  f |= W8y[P](f >> W8y.z8Q, 0x00FFFFFF);
  f |= W8y[N](f >> W8y.l3T, 0x0000FFFF);
  return f + W8y.D8Q;
};

box2d[W8y.X60] = function (f) {
  var N = "A9",
      P = "G9";
  return W8y[P](f, W8y.u8Q) && W8y[N](f & f - W8y.D8Q, W8y.u8Q);
};

box2d[W8y.Q6H] = function () {
  var f = "w8";
  return W8y[f](Math[W8y.q6H]() * W8y.a66, W8y.i0M);
};

box2d[W8y.D2k] = function (f, N) {
  var P = "N8";
  return W8y[P](N - f, Math[W8y.q6H]()) + f;
};

box2d[W8y.p7T] = function (f, N) {
  this[W8y.T9T] = f || W8y.q3H;
  this[W8y.Z9T] = N || W8y.q3H;
};

box2d.b2Vec2.prototype.x = W8y.q3H;
box2d.b2Vec2.prototype.y = W8y.q3H;
box2d[W8y.M10] = new box2d[W8y.p7T]();
box2d[W8y.p7T][W8y.b6Q] = new box2d[W8y.p7T]();
box2d[W8y.p7T][W8y.o90] = new box2d[W8y.p7T](W8y.i0M, W8y.q3H);
box2d[W8y.p7T][W8y.i6Q] = new box2d[W8y.p7T](W8y.q3H, W8y.i0M);
box2d[W8y.p7T][W8y.t7M] = new box2d[W8y.p7T]();
box2d[W8y.p7T][W8y.l9M] = new box2d[W8y.p7T]();
box2d[W8y.p7T][W8y.H9M] = new box2d[W8y.p7T]();
box2d[W8y.p7T][W8y.m4M] = new box2d[W8y.p7T]();

box2d[W8y.p7T][W8y.N1r] = function (N) {
  return box2d[W8y.c2k](N, function (f) {
    return new box2d[W8y.p7T]();
  });
};

box2d.b2Vec2.prototype.Clone = function () {
  return new box2d[W8y.p7T](this[W8y.T9T], this[W8y.Z9T]);
};

box2d.b2Vec2.prototype.SetZero = function () {
  this[W8y.T9T] = W8y.q3H;
  this[W8y.Z9T] = W8y.q3H;
  return this;
};

box2d.b2Vec2.prototype.SetXY = function (f, N) {
  this[W8y.T9T] = f;
  this[W8y.Z9T] = N;
  return this;
};

box2d.b2Vec2.prototype.Copy = function (f) {
  this[W8y.T9T] = f[W8y.T9T];
  this[W8y.Z9T] = f[W8y.Z9T];
  return this;
};

box2d.b2Vec2.prototype.SelfAdd = function (f) {
  this[W8y.T9T] += f[W8y.T9T];
  this[W8y.Z9T] += f[W8y.Z9T];
  return this;
};

box2d.b2Vec2.prototype.SelfAddXY = function (f, N) {
  this[W8y.T9T] += f;
  this[W8y.Z9T] += N;
  return this;
};

box2d.b2Vec2.prototype.SelfSub = function (f) {
  this[W8y.T9T] -= f[W8y.T9T];
  this[W8y.Z9T] -= f[W8y.Z9T];
  return this;
};

box2d.b2Vec2.prototype.SelfSubXY = function (f, N) {
  this[W8y.T9T] -= f;
  this[W8y.Z9T] -= N;
  return this;
};

box2d.b2Vec2.prototype.SelfMul = function (f) {
  this[W8y.T9T] *= f;
  this[W8y.Z9T] *= f;
  return this;
};

box2d.b2Vec2.prototype.SelfMulAdd = function (f, N) {
  var P = "s8",
      Z = "X8";
  this[W8y.T9T] += W8y[Z](f, N[W8y.T9T]);
  this[W8y.Z9T] += W8y[P](f, N[W8y.Z9T]);
  return this;
};

box2d.b2Vec2.prototype.SelfMulSub = function (f, N) {
  var P = "J8",
      Z = "b8";
  this[W8y.T9T] -= W8y[Z](f, N[W8y.T9T]);
  this[W8y.Z9T] -= W8y[P](f, N[W8y.Z9T]);
  return this;
};

box2d.b2Vec2.prototype.Dot = function (f) {
  var N = "K8",
      P = "n8";
  return W8y[P](this[W8y.T9T], f[W8y.T9T]) + W8y[N](this[W8y.Z9T], f[W8y.Z9T]);
};

box2d.b2Vec2.prototype.Cross = function (f) {
  var N = "H8";
  return W8y[N](this[W8y.T9T] * f[W8y.Z9T], this[W8y.Z9T] * f[W8y.T9T]);
};

box2d.b2Vec2.prototype.Length = function () {
  var f = "e8",
      N = "r8",
      P = this[W8y.T9T],
      Z = this[W8y.Z9T];
  return Math[W8y.h1H](W8y[N](P, P) + W8y[f](Z, Z));
};

box2d.b2Vec2.prototype.GetLength = box2d.b2Vec2.prototype.Length;

box2d.b2Vec2.prototype.LengthSquared = function () {
  var f = "d8",
      N = "a8",
      P = this[W8y.T9T],
      Z = this[W8y.Z9T];
  return W8y[N](P, P) + W8y[f](Z, Z);
};

box2d.b2Vec2.prototype.GetLengthSquared = box2d.b2Vec2.prototype.LengthSquared;

box2d.b2Vec2.prototype.Normalize = function () {
  var f = "L8",
      N = "u8",
      P = this[W8y.a2k]();

  if (W8y[N](P, box2d[W8y.F5k])) {
    var Z = W8y[f](1.0, P);
    this[W8y.T9T] *= Z;
    this[W8y.Z9T] *= Z;
  }

  return P;
};

box2d.b2Vec2.prototype.SelfNormalize = function () {
  var f = "F8",
      N = "p8",
      P = this[W8y.a2k]();

  if (W8y[N](P, box2d[W8y.F5k])) {
    var Z = W8y[f](1.0, P);
    this[W8y.T9T] *= Z;
    this[W8y.Z9T] *= Z;
  }

  return this;
};

box2d.b2Vec2.prototype.SelfRotate = function (f, N) {
  var P = "Z6",
      Z = "U6",
      W = "y6",
      l = this[W8y.T9T],
      m = this[W8y.Z9T];
  this[W8y.T9T] = W8y[W](f * l, N * m);
  this[W8y.Z9T] = W8y[Z](N, l) + W8y[P](f, m);
  return this;
};

box2d.b2Vec2.prototype.SelfRotateRadians = function (f) {
  var N = "SelfRotate";
  return this[N](Math[W8y.W76](f), Math[W8y.L8M](f));
};

box2d.b2Vec2.prototype.SelfRotateDegrees = function (f) {
  var N = "SelfRotateRadians";
  return this[N](box2d[W8y.W96](f));
};

box2d.b2Vec2.prototype.IsValid = function () {
  return isFinite(this[W8y.T9T]) && isFinite(this[W8y.Z9T]);
};

box2d.b2Vec2.prototype.SelfCrossVS = function (f) {
  var N = "W6",
      P = this[W8y.T9T];
  this[W8y.T9T] = W8y[N](f, this[W8y.Z9T]);
  this[W8y.Z9T] = -f * P;
  return this;
};

box2d.b2Vec2.prototype.SelfCrossSV = function (f) {
  var N = "l6",
      P = this[W8y.T9T];
  this[W8y.T9T] = -f * this[W8y.Z9T];
  this[W8y.Z9T] = W8y[N](f, P);
  return this;
};

box2d.b2Vec2.prototype.SelfMinV = function (f) {
  this[W8y.T9T] = box2d[W8y.G60](this[W8y.T9T], f[W8y.T9T]);
  this[W8y.Z9T] = box2d[W8y.G60](this[W8y.Z9T], f[W8y.Z9T]);
  return this;
};

box2d.b2Vec2.prototype.SelfMaxV = function (f) {
  this[W8y.T9T] = box2d[W8y.v30](this[W8y.T9T], f[W8y.T9T]);
  this[W8y.Z9T] = box2d[W8y.v30](this[W8y.Z9T], f[W8y.Z9T]);
  return this;
};

box2d.b2Vec2.prototype.SelfAbs = function () {
  this[W8y.T9T] = box2d[W8y.t67](this[W8y.T9T]);
  this[W8y.Z9T] = box2d[W8y.t67](this[W8y.Z9T]);
  return this;
};

box2d.b2Vec2.prototype.SelfNeg = function () {
  this[W8y.T9T] = -this[W8y.T9T];
  this[W8y.Z9T] = -this[W8y.Z9T];
  return this;
};

box2d.b2Vec2.prototype.SelfSkew = function () {
  var f = this[W8y.T9T];
  this[W8y.T9T] = -this[W8y.Z9T];
  this[W8y.Z9T] = f;
  return this;
};

box2d[W8y.L00] = function (f, N) {
  N[W8y.T9T] = box2d[W8y.t67](f[W8y.T9T]);
  N[W8y.Z9T] = box2d[W8y.t67](f[W8y.Z9T]);
  return N;
};

box2d[W8y.k8H] = function (f, N, P) {
  P[W8y.T9T] = box2d[W8y.G60](f[W8y.T9T], N[W8y.T9T]);
  P[W8y.Z9T] = box2d[W8y.G60](f[W8y.Z9T], N[W8y.Z9T]);
  return P;
};

box2d[W8y.k8T] = function (f, N, P) {
  P[W8y.T9T] = box2d[W8y.v30](f[W8y.T9T], N[W8y.T9T]);
  P[W8y.Z9T] = box2d[W8y.v30](f[W8y.Z9T], N[W8y.Z9T]);
  return P;
};

box2d[W8y.O8M] = function (f, N, P, Z) {
  Z[W8y.T9T] = box2d[W8y.N06](f[W8y.T9T], N[W8y.T9T], P[W8y.T9T]);
  Z[W8y.Z9T] = box2d[W8y.N06](f[W8y.Z9T], N[W8y.Z9T], P[W8y.Z9T]);
  return Z;
};

box2d[W8y.E4r] = function (f, N, P, Z) {
  var W = "O6",
      l = "V6",
      m = "g6",
      C = f[W8y.T9T],
      n = f[W8y.Z9T];
  Z[W8y.T9T] = W8y[m](N * C, P * n);
  Z[W8y.Z9T] = W8y[l](P, C) + W8y[W](N, n);
  return Z;
};

box2d[W8y.X36] = function (f, N, P) {
  return box2d[W8y.E4r](f, Math[W8y.W76](N), Math[W8y.L8M](N), P);
};

box2d[W8y.M5Q] = function (f, N, P) {
  return box2d[W8y.X36](f, box2d[W8y.W96](N), P);
};

box2d[W8y.o27] = function (f, N) {
  var P = "i6",
      Z = "T6";
  return W8y[Z](f[W8y.T9T], N[W8y.T9T]) + W8y[P](f[W8y.Z9T], N[W8y.Z9T]);
};

box2d[W8y.t10] = function (f, N) {
  var P = "q6";
  return W8y[P](f[W8y.T9T] * N[W8y.Z9T], f[W8y.Z9T] * N[W8y.T9T]);
};

box2d[W8y.R10] = function (f, N, P) {
  var Z = "o6",
      W = f[W8y.T9T];
  P[W8y.T9T] = W8y[Z](N, f[W8y.Z9T]);
  P[W8y.Z9T] = -N * W;
  return P;
};

box2d[W8y.T67] = function (f, N) {
  var P = f[W8y.T9T];
  N[W8y.T9T] = f[W8y.Z9T];
  N[W8y.Z9T] = -P;
  return N;
};

box2d[W8y.v0M] = function (f, N, P) {
  var Z = "S6",
      W = N[W8y.T9T];
  P[W8y.T9T] = -f * N[W8y.Z9T];
  P[W8y.Z9T] = W8y[Z](f, W);
  return P;
};

box2d[W8y.b5H] = function (f, N) {
  var P = f[W8y.T9T];
  N[W8y.T9T] = -f[W8y.Z9T];
  N[W8y.Z9T] = P;
  return N;
};

box2d[W8y.m3T] = function (f, N, P) {
  P[W8y.T9T] = f[W8y.T9T] + N[W8y.T9T];
  P[W8y.Z9T] = f[W8y.Z9T] + N[W8y.Z9T];
  return P;
};

box2d[W8y.x8T] = function (f, N, P) {
  var Z = "h6",
      W = "D6";
  P[W8y.T9T] = W8y[W](f[W8y.T9T], N[W8y.T9T]);
  P[W8y.Z9T] = W8y[Z](f[W8y.Z9T], N[W8y.Z9T]);
  return P;
};

box2d[W8y.X26] = function (f, N, P) {
  var Z = "z6",
      W = "B6";
  P[W8y.T9T] = W8y[W](N[W8y.T9T], f);
  P[W8y.Z9T] = W8y[Z](N[W8y.Z9T], f);
  return P;
};

box2d[W8y.r26] = function (f, N, P, Z) {
  var W = "f5",
      l = "t6";
  Z[W8y.T9T] = f[W8y.T9T] + W8y[l](N, P[W8y.T9T]);
  Z[W8y.Z9T] = f[W8y.Z9T] + W8y[W](N, P[W8y.Z9T]);
  return Z;
};

box2d[W8y.W77] = function (f, N, P, Z) {
  var W = "c5",
      l = "P5";
  Z[W8y.T9T] = W8y[l](f[W8y.T9T], N * P[W8y.T9T]);
  Z[W8y.Z9T] = W8y[W](f[W8y.Z9T], N * P[W8y.Z9T]);
  return Z;
};

box2d[W8y.S7T] = function (f, N, P, Z) {
  var W = "m5",
      l = "Y5",
      m = P[W8y.T9T];
  Z[W8y.T9T] = W8y[l](f[W8y.T9T], N * P[W8y.Z9T]);
  Z[W8y.Z9T] = f[W8y.Z9T] + W8y[W](N, m);
  return Z;
};

box2d[W8y.O80] = function (f, N, P) {
  var Z = "C5",
      W = "x5";
  P[W8y.T9T] = W8y[W](f[W8y.T9T] + N[W8y.T9T], W8y.T3H);
  P[W8y.Z9T] = W8y[Z](f[W8y.Z9T] + N[W8y.Z9T], W8y.T3H);
  return P;
};

box2d[W8y.w2T] = function (f, N, P) {
  var Z = "Q5",
      W = "k5";
  P[W8y.T9T] = W8y[W](N[W8y.T9T] - f[W8y.T9T], W8y.T3H);
  P[W8y.Z9T] = W8y[Z](N[W8y.Z9T] - f[W8y.Z9T], W8y.T3H);
  return P;
};

box2d[W8y.F9k] = function (f, N) {
  var P = "I5",
      Z = "j5";
  return W8y[Z](f[W8y.T9T], N[W8y.T9T]) && W8y[P](f[W8y.Z9T], N[W8y.Z9T]);
};

box2d[W8y.s80] = function (f, N) {
  var P = "v5",
      Z = "M5",
      W = "E5",
      l = "R5",
      m = W8y[l](f[W8y.T9T], N[W8y.T9T]),
      C = W8y[W](f[W8y.Z9T], N[W8y.Z9T]);
  return Math[W8y.h1H](W8y[Z](m, m) + W8y[P](C, C));
};

box2d[W8y.Z9k] = function (f, N) {
  var P = "N1J",
      Z = "w1J",
      W = "A5",
      l = "G5",
      m = W8y[l](f[W8y.T9T], N[W8y.T9T]),
      C = W8y[W](f[W8y.Z9T], N[W8y.Z9T]);
  return W8y[Z](m, m) + W8y[P](C, C);
};

box2d[W8y.F7M] = function (f, N) {
  N[W8y.T9T] = -f[W8y.T9T];
  N[W8y.Z9T] = -f[W8y.Z9T];
  return N;
};

box2d[W8y.G9T] = function (f, N, P) {
  this[W8y.T9T] = f || W8y.q3H;
  this[W8y.Z9T] = N || W8y.q3H;
  this[W8y.u7T] = P || W8y.q3H;
};

box2d.b2Vec3.prototype.x = W8y.q3H;
box2d.b2Vec3.prototype.y = W8y.q3H;
box2d.b2Vec3.prototype.z = W8y.q3H;
box2d[W8y.G9T][W8y.b6Q] = new box2d[W8y.G9T]();
box2d[W8y.G9T][W8y.t7M] = new box2d[W8y.G9T]();

box2d.b2Vec3.prototype.Clone = function () {
  return new box2d[W8y.G9T](this[W8y.T9T], this[W8y.Z9T], this[W8y.u7T]);
};

box2d.b2Vec3.prototype.SetZero = function () {
  this[W8y.T9T] = W8y.q3H;
  this[W8y.Z9T] = W8y.q3H;
  this[W8y.u7T] = W8y.q3H;
  return this;
};

box2d.b2Vec3.prototype.SetXYZ = function (f, N, P) {
  this[W8y.T9T] = f;
  this[W8y.Z9T] = N;
  this[W8y.u7T] = P;
  return this;
};

box2d.b2Vec3.prototype.Copy = function (f) {
  this[W8y.T9T] = f[W8y.T9T];
  this[W8y.Z9T] = f[W8y.Z9T];
  this[W8y.u7T] = f[W8y.u7T];
  return this;
};

box2d.b2Vec3.prototype.SelfNeg = function () {
  this[W8y.T9T] = -this[W8y.T9T];
  this[W8y.Z9T] = -this[W8y.Z9T];
  this[W8y.u7T] = -this[W8y.u7T];
  return this;
};

box2d.b2Vec3.prototype.SelfAdd = function (f) {
  this[W8y.T9T] += f[W8y.T9T];
  this[W8y.Z9T] += f[W8y.Z9T];
  this[W8y.u7T] += f[W8y.u7T];
  return this;
};

box2d.b2Vec3.prototype.SelfAddXYZ = function (f, N, P) {
  this[W8y.T9T] += f;
  this[W8y.Z9T] += N;
  this[W8y.u7T] += P;
  return this;
};

box2d.b2Vec3.prototype.SelfSub = function (f) {
  this[W8y.T9T] -= f[W8y.T9T];
  this[W8y.Z9T] -= f[W8y.Z9T];
  this[W8y.u7T] -= f[W8y.u7T];
  return this;
};

box2d.b2Vec3.prototype.SelfSubXYZ = function (f, N, P) {
  this[W8y.T9T] -= f;
  this[W8y.Z9T] -= N;
  this[W8y.u7T] -= P;
  return this;
};

box2d.b2Vec3.prototype.SelfMul = function (f) {
  this[W8y.T9T] *= f;
  this[W8y.Z9T] *= f;
  this[W8y.u7T] *= f;
  return this;
};

box2d[W8y.M4H] = function (f, N) {
  var P = "b1J",
      Z = "s1J",
      W = "X1J";
  return W8y[W](f[W8y.T9T], N[W8y.T9T]) + W8y[Z](f[W8y.Z9T], N[W8y.Z9T]) + W8y[P](f[W8y.u7T], N[W8y.u7T]);
};

box2d[W8y.E36] = function (f, N, P) {
  var Z = "K1J",
      W = "n1J",
      l = "J1J",
      m = f[W8y.T9T],
      C = f[W8y.Z9T],
      n = f[W8y.u7T],
      k = N[W8y.T9T],
      H = N[W8y.Z9T],
      i = N[W8y.u7T];
  P[W8y.T9T] = W8y[l](C * i, n * H);
  P[W8y.Z9T] = W8y[W](n * k, m * i);
  P[W8y.u7T] = W8y[Z](m * H, C * k);
  return P;
};

box2d[W8y.T0H] = function () {
  this[W8y.Q57] = new box2d[W8y.p7T](W8y.i0M, W8y.q3H);
  this[W8y.D57] = new box2d[W8y.p7T](W8y.q3H, W8y.i0M);
};

box2d.b2Mat22.prototype.ex = W8y.z6k;
box2d.b2Mat22.prototype.ey = W8y.z6k;
box2d[W8y.T0H][W8y.L2k] = new box2d[W8y.T0H]();

box2d.b2Mat22.prototype.Clone = function () {
  return new box2d[W8y.T0H]()[W8y.k97](this);
};

box2d[W8y.T0H][W8y.Y3T] = function (f, N) {
  var P = "SetVV";
  return new box2d[W8y.T0H]()[P](f, N);
};

box2d[W8y.T0H][W8y.K60] = function (f, N, P, Z) {
  var W = "SetSSSS";
  return new box2d[W8y.T0H]()[W](f, N, P, Z);
};

box2d[W8y.T0H][W8y.d1k] = function (f) {
  return new box2d[W8y.T0H]()[W8y.h70](f);
};

box2d.b2Mat22.prototype.SetSSSS = function (f, N, P, Z) {
  this[W8y.Q57][W8y.y47](f, P);
  this[W8y.D57][W8y.y47](N, Z);
  return this;
};

box2d.b2Mat22.prototype.SetVV = function (f, N) {
  this[W8y.Q57][W8y.k97](f);
  this[W8y.D57][W8y.k97](N);
  return this;
};

box2d.b2Mat22.prototype.SetAngle = function (f) {
  var N = Math[W8y.W76](f),
      P = Math[W8y.L8M](f);
  this[W8y.Q57][W8y.y47](N, P);
  this[W8y.D57][W8y.y47](-P, N);
  return this;
};

box2d.b2Mat22.prototype.SetAngleRadians = box2d.b2Mat22.prototype.SetAngle;

box2d.b2Mat22.prototype.SetAngleDegrees = function (f) {
  return this[W8y.t5k](box2d[W8y.W96](f));
};

box2d.b2Mat22.prototype.Copy = function (f) {
  this[W8y.Q57][W8y.k97](f[W8y.Q57]);
  this[W8y.D57][W8y.k97](f[W8y.D57]);
  return this;
};

box2d.b2Mat22.prototype.SetIdentity = function () {
  this[W8y.Q57][W8y.y47](W8y.i0M, W8y.q3H);
  this[W8y.D57][W8y.y47](W8y.q3H, W8y.i0M);
  return this;
};

box2d.b2Mat22.prototype.SetZero = function () {
  this[W8y.Q57][W8y.j6k]();
  this[W8y.D57][W8y.j6k]();
  return this;
};

box2d.b2Mat22.prototype.GetAngle = function () {
  return Math[W8y.N6Q](this[W8y.Q57][W8y.Z9T], this[W8y.Q57][W8y.T9T]);
};

box2d.b2Mat22.prototype.GetAngleRadians = box2d.b2Mat22.prototype.GetAngle;

box2d.b2Mat22.prototype.GetInverse = function (f) {
  var N = "d1J",
      P = "a1J",
      Z = "e1J",
      W = "r1J",
      l = "H1J",
      m = this[W8y.Q57][W8y.T9T],
      C = this[W8y.D57][W8y.T9T],
      n = this[W8y.Q57][W8y.Z9T],
      k = this[W8y.D57][W8y.Z9T],
      H = W8y[l](m * k, C * n);

  if (W8y[W](H, W8y.q3H)) {
    H = W8y[Z](W8y.i0M, H);
  }

  f[W8y.Q57][W8y.T9T] = W8y[P](H, k);
  f[W8y.D57][W8y.T9T] = -H * C;
  f[W8y.Q57][W8y.Z9T] = -H * n;
  f[W8y.D57][W8y.Z9T] = W8y[N](H, m);
  return f;
};

box2d.b2Mat22.prototype.Solve = function (f, N, P) {
  var Z = "y4J",
      W = "F1J",
      l = "p1J",
      m = "L1J",
      C = "u1J",
      n = this[W8y.Q57][W8y.T9T],
      k = this[W8y.D57][W8y.T9T],
      H = this[W8y.Q57][W8y.Z9T],
      i = this[W8y.D57][W8y.Z9T],
      Q = W8y[C](n * i, k * H);

  if (W8y[m](Q, W8y.q3H)) {
    Q = W8y[l](W8y.i0M, Q);
  }

  P[W8y.T9T] = W8y[W](Q, i * f - k * N);
  P[W8y.Z9T] = W8y[Z](Q, n * N - H * f);
  return P;
};

box2d.b2Mat22.prototype.SelfAbs = function () {
  var f = "SelfAbs";
  this[W8y.Q57][f]();
  this[W8y.D57][f]();
  return this;
};

box2d.b2Mat22.prototype.SelfInv = function () {
  return this[W8y.X1M](this);
};

box2d.b2Mat22.prototype.SelfAddM = function (f) {
  this[W8y.Q57][W8y.t4H](f[W8y.Q57]);
  this[W8y.D57][W8y.t4H](f[W8y.D57]);
  return this;
};

box2d.b2Mat22.prototype.SelfSubM = function (f) {
  this[W8y.Q57][W8y.d6M](f[W8y.Q57]);
  this[W8y.D57][W8y.d6M](f[W8y.D57]);
  return this;
};

box2d[W8y.P80] = function (f, N) {
  var P = f[W8y.Q57],
      Z = f[W8y.D57];
  N[W8y.Q57][W8y.T9T] = box2d[W8y.t67](P[W8y.T9T]);
  N[W8y.Q57][W8y.Z9T] = box2d[W8y.t67](P[W8y.Z9T]);
  N[W8y.D57][W8y.T9T] = box2d[W8y.t67](Z[W8y.T9T]);
  N[W8y.D57][W8y.Z9T] = box2d[W8y.t67](Z[W8y.Z9T]);
  return N;
};

box2d[W8y.n1H] = function (f, N, P) {
  var Z = "l4J",
      W = "W4J",
      l = "Z4J",
      m = "U4J",
      C = f[W8y.Q57],
      n = f[W8y.D57],
      k = N[W8y.T9T],
      H = N[W8y.Z9T];
  P[W8y.T9T] = W8y[m](C[W8y.T9T], k) + W8y[l](n[W8y.T9T], H);
  P[W8y.Z9T] = W8y[W](C[W8y.Z9T], k) + W8y[Z](n[W8y.Z9T], H);
  return P;
};

box2d[W8y.a1T] = function (f, N, P) {
  var Z = "T4J",
      W = "O4J",
      l = "V4J",
      m = "g4J",
      C = f[W8y.Q57],
      n = f[W8y.D57],
      k = N[W8y.T9T],
      H = N[W8y.Z9T];
  P[W8y.T9T] = W8y[m](C[W8y.T9T], k) + W8y[l](C[W8y.Z9T], H);
  P[W8y.Z9T] = W8y[W](n[W8y.T9T], k) + W8y[Z](n[W8y.Z9T], H);
  return P;
};

box2d[W8y.R9T] = function (f, N, P) {
  var Z = f[W8y.Q57],
      W = f[W8y.D57],
      l = N[W8y.Q57],
      m = N[W8y.D57];
  P[W8y.Q57][W8y.T9T] = Z[W8y.T9T] + l[W8y.T9T];
  P[W8y.Q57][W8y.Z9T] = Z[W8y.Z9T] + l[W8y.Z9T];
  P[W8y.D57][W8y.T9T] = W[W8y.T9T] + m[W8y.T9T];
  P[W8y.D57][W8y.Z9T] = W[W8y.Z9T] + m[W8y.Z9T];
  return P;
};

box2d[W8y.r67] = function (f, N, P) {
  var Z = "z4J",
      W = "B4J",
      l = "h4J",
      m = "D4J",
      C = "S4J",
      n = "o4J",
      k = "q4J",
      H = "i4J",
      i = f[W8y.Q57][W8y.T9T],
      Q = f[W8y.Q57][W8y.Z9T],
      e = f[W8y.D57][W8y.T9T],
      j = f[W8y.D57][W8y.Z9T],
      o = N[W8y.Q57][W8y.T9T],
      S = N[W8y.Q57][W8y.Z9T],
      d = N[W8y.D57][W8y.T9T],
      u = N[W8y.D57][W8y.Z9T];
  P[W8y.Q57][W8y.T9T] = W8y[H](i, o) + W8y[k](e, S);
  P[W8y.Q57][W8y.Z9T] = W8y[n](Q, o) + W8y[C](j, S);
  P[W8y.D57][W8y.T9T] = W8y[m](i, d) + W8y[l](e, u);
  P[W8y.D57][W8y.Z9T] = W8y[W](Q, d) + W8y[Z](j, u);
  return P;
};

box2d[W8y.M1k] = function (f, N, P) {
  var Z = "C2J",
      W = "x2J",
      l = "m2J",
      m = "Y2J",
      C = "c2J",
      n = "P2J",
      k = "f2J",
      H = "t4J",
      i = f[W8y.Q57][W8y.T9T],
      Q = f[W8y.Q57][W8y.Z9T],
      e = f[W8y.D57][W8y.T9T],
      j = f[W8y.D57][W8y.Z9T],
      o = N[W8y.Q57][W8y.T9T],
      S = N[W8y.Q57][W8y.Z9T],
      d = N[W8y.D57][W8y.T9T],
      u = N[W8y.D57][W8y.Z9T];
  P[W8y.Q57][W8y.T9T] = W8y[H](i, o) + W8y[k](Q, S);
  P[W8y.Q57][W8y.Z9T] = W8y[n](e, o) + W8y[C](j, S);
  P[W8y.D57][W8y.T9T] = W8y[m](i, d) + W8y[l](Q, u);
  P[W8y.D57][W8y.Z9T] = W8y[W](e, d) + W8y[Z](j, u);
  return P;
};

box2d[W8y.t0M] = function () {
  this[W8y.Q57] = new box2d[W8y.G9T](W8y.i0M, W8y.q3H, W8y.q3H);
  this[W8y.D57] = new box2d[W8y.G9T](W8y.q3H, W8y.i0M, W8y.q3H);
  this[W8y.y1H] = new box2d[W8y.G9T](W8y.q3H, W8y.q3H, W8y.i0M);
};

box2d.b2Mat33.prototype.ex = W8y.z6k;
box2d.b2Mat33.prototype.ey = W8y.z6k;
box2d.b2Mat33.prototype.ez = W8y.z6k;
box2d[W8y.t0M][W8y.L2k] = new box2d[W8y.t0M]();

box2d.b2Mat33.prototype.Clone = function () {
  return new box2d[W8y.t0M]()[W8y.k97](this);
};

box2d.b2Mat33.prototype.SetVVV = function (f, N, P) {
  this[W8y.Q57][W8y.k97](f);
  this[W8y.D57][W8y.k97](N);
  this[W8y.y1H][W8y.k97](P);
  return this;
};

box2d.b2Mat33.prototype.Copy = function (f) {
  this[W8y.Q57][W8y.k97](f[W8y.Q57]);
  this[W8y.D57][W8y.k97](f[W8y.D57]);
  this[W8y.y1H][W8y.k97](f[W8y.y1H]);
  return this;
};

box2d.b2Mat33.prototype.SetIdentity = function () {
  this[W8y.Q57][W8y.H20](W8y.i0M, W8y.q3H, W8y.q3H);
  this[W8y.D57][W8y.H20](W8y.q3H, W8y.i0M, W8y.q3H);
  this[W8y.y1H][W8y.H20](W8y.q3H, W8y.q3H, W8y.i0M);
  return this;
};

box2d.b2Mat33.prototype.SetZero = function () {
  this[W8y.Q57][W8y.j6k]();
  this[W8y.D57][W8y.j6k]();
  this[W8y.y1H][W8y.j6k]();
  return this;
};

box2d.b2Mat33.prototype.SelfAddM = function (f) {
  this[W8y.Q57][W8y.t4H](f[W8y.Q57]);
  this[W8y.D57][W8y.t4H](f[W8y.D57]);
  this[W8y.y1H][W8y.t4H](f[W8y.y1H]);
  return this;
};

box2d.b2Mat33.prototype.Solve33 = function (f, N, P, Z) {
  var W = "v2J",
      l = "M2J",
      m = "E2J",
      C = "R2J",
      n = "I2J",
      k = "j2J",
      H = "Q2J",
      i = "k2J",
      Q = this[W8y.Q57][W8y.T9T],
      e = this[W8y.Q57][W8y.Z9T],
      j = this[W8y.Q57][W8y.u7T],
      o = this[W8y.D57][W8y.T9T],
      S = this[W8y.D57][W8y.Z9T],
      d = this[W8y.D57][W8y.u7T],
      u = this[W8y.y1H][W8y.T9T],
      D = this[W8y.y1H][W8y.Z9T],
      M = this[W8y.y1H][W8y.u7T],
      y1 = W8y[i](Q, S * M - d * D) + W8y[H](e, d * u - o * M) + W8y[k](j, o * D - S * u);

  if (W8y[n](y1, W8y.q3H)) {
    y1 = W8y[C](W8y.i0M, y1);
  }

  Z[W8y.T9T] = W8y[m](y1, f * (S * M - d * D) + N * (d * u - o * M) + P * (o * D - S * u));
  Z[W8y.Z9T] = W8y[l](y1, Q * (N * M - P * D) + e * (P * u - f * M) + j * (f * D - N * u));
  Z[W8y.u7T] = W8y[W](y1, Q * (S * P - d * N) + e * (d * f - o * P) + j * (o * N - S * f));
  return Z;
};

box2d.b2Mat33.prototype.Solve22 = function (f, N, P) {
  var Z = "X3J",
      W = "N3J",
      l = "w3J",
      m = "A2J",
      C = "G2J",
      n = this[W8y.Q57][W8y.T9T],
      k = this[W8y.D57][W8y.T9T],
      H = this[W8y.Q57][W8y.Z9T],
      i = this[W8y.D57][W8y.Z9T],
      Q = W8y[C](n * i, k * H);

  if (W8y[m](Q, W8y.q3H)) {
    Q = W8y[l](W8y.i0M, Q);
  }

  P[W8y.T9T] = W8y[W](Q, i * f - k * N);
  P[W8y.Z9T] = W8y[Z](Q, n * N - H * f);
  return P;
};

box2d.b2Mat33.prototype.GetInverse22 = function (f) {
  var N = "K3J",
      P = "n3J",
      Z = "J3J",
      W = "b3J",
      l = "s3J",
      m = this[W8y.Q57][W8y.T9T],
      C = this[W8y.D57][W8y.T9T],
      n = this[W8y.Q57][W8y.Z9T],
      k = this[W8y.D57][W8y.Z9T],
      H = W8y[l](m * k, C * n);

  if (W8y[W](H, W8y.q3H)) {
    H = W8y[Z](W8y.i0M, H);
  }

  f[W8y.Q57][W8y.T9T] = W8y[P](H, k);
  f[W8y.D57][W8y.T9T] = -H * C;
  f[W8y.Q57][W8y.u7T] = W8y.q3H;
  f[W8y.Q57][W8y.Z9T] = -H * n;
  f[W8y.D57][W8y.Z9T] = W8y[N](H, m);
  f[W8y.D57][W8y.u7T] = W8y.q3H;
  f[W8y.y1H][W8y.T9T] = W8y.q3H;
  f[W8y.y1H][W8y.Z9T] = W8y.q3H;
  f[W8y.y1H][W8y.u7T] = W8y.q3H;
};

box2d.b2Mat33.prototype.GetSymInverse33 = function (f) {
  var N = "p3J",
      P = "L3J",
      Z = "u3J",
      W = "d3J",
      l = "a3J",
      m = "e3J",
      C = "r3J",
      n = "H3J",
      k = box2d[W8y.M4H](this[W8y.Q57], box2d[W8y.E36](this[W8y.D57], this[W8y.y1H], box2d[W8y.G9T][W8y.t7M]));

  if (W8y[n](k, W8y.q3H)) {
    k = W8y[C](W8y.i0M, k);
  }

  var H = this[W8y.Q57][W8y.T9T],
      i = this[W8y.D57][W8y.T9T],
      Q = this[W8y.y1H][W8y.T9T],
      e = this[W8y.D57][W8y.Z9T],
      j = this[W8y.y1H][W8y.Z9T],
      o = this[W8y.y1H][W8y.u7T];
  f[W8y.Q57][W8y.T9T] = W8y[m](k, e * o - j * j);
  f[W8y.Q57][W8y.Z9T] = W8y[l](k, Q * j - i * o);
  f[W8y.Q57][W8y.u7T] = W8y[W](k, i * j - Q * e);
  f[W8y.D57][W8y.T9T] = f[W8y.Q57][W8y.Z9T];
  f[W8y.D57][W8y.Z9T] = W8y[Z](k, H * o - Q * Q);
  f[W8y.D57][W8y.u7T] = W8y[P](k, Q * i - H * j);
  f[W8y.y1H][W8y.T9T] = f[W8y.Q57][W8y.u7T];
  f[W8y.y1H][W8y.Z9T] = f[W8y.D57][W8y.u7T];
  f[W8y.y1H][W8y.u7T] = W8y[N](k, H * e - i * i);
};

box2d[W8y.u1k] = function (f, N, P) {
  var Z = "O0J",
      W = "V0J",
      l = "g0J",
      m = "l0J",
      C = "W0J",
      n = "Z0J",
      k = "U0J",
      H = "y0J",
      i = "F3J",
      Q = N[W8y.T9T],
      e = N[W8y.Z9T],
      j = N[W8y.u7T];
  P[W8y.T9T] = W8y[i](f[W8y.Q57][W8y.T9T], Q) + W8y[H](f[W8y.D57][W8y.T9T], e) + W8y[k](f[W8y.y1H][W8y.T9T], j);
  P[W8y.Z9T] = W8y[n](f[W8y.Q57][W8y.Z9T], Q) + W8y[C](f[W8y.D57][W8y.Z9T], e) + W8y[m](f[W8y.y1H][W8y.Z9T], j);
  P[W8y.u7T] = W8y[l](f[W8y.Q57][W8y.u7T], Q) + W8y[W](f[W8y.D57][W8y.u7T], e) + W8y[Z](f[W8y.y1H][W8y.u7T], j);
  return P;
};

box2d[W8y.q96] = function (f, N, P, Z, W) {
  var l = "z0J",
      m = "B0J",
      C = "h0J",
      n = "D0J",
      k = "S0J",
      H = "o0J",
      i = "q0J",
      Q = "i0J",
      e = "T0J";
  W[W8y.T9T] = W8y[e](f[W8y.Q57][W8y.T9T], N) + W8y[Q](f[W8y.D57][W8y.T9T], P) + W8y[i](f[W8y.y1H][W8y.T9T], Z);
  W[W8y.Z9T] = W8y[H](f[W8y.Q57][W8y.Z9T], N) + W8y[k](f[W8y.D57][W8y.Z9T], P) + W8y[n](f[W8y.y1H][W8y.Z9T], Z);
  W[W8y.u7T] = W8y[C](f[W8y.Q57][W8y.u7T], N) + W8y[m](f[W8y.D57][W8y.u7T], P) + W8y[l](f[W8y.y1H][W8y.u7T], Z);
  return W;
};

box2d[W8y.i1k] = function (f, N, P) {
  var Z = "c7J",
      W = "P7J",
      l = "f7J",
      m = "t0J",
      C = N[W8y.T9T],
      n = N[W8y.Z9T];
  P[W8y.T9T] = W8y[m](f[W8y.Q57][W8y.T9T], C) + W8y[l](f[W8y.D57][W8y.T9T], n);
  P[W8y.Z9T] = W8y[W](f[W8y.Q57][W8y.Z9T], C) + W8y[Z](f[W8y.D57][W8y.Z9T], n);
  return P;
};

box2d[W8y.D86] = function (f, N, P, Z) {
  var W = "C7J",
      l = "x7J",
      m = "m7J",
      C = "Y7J";
  Z[W8y.T9T] = W8y[C](f[W8y.Q57][W8y.T9T], N) + W8y[m](f[W8y.D57][W8y.T9T], P);
  Z[W8y.Z9T] = W8y[l](f[W8y.Q57][W8y.Z9T], N) + W8y[W](f[W8y.D57][W8y.Z9T], P);
  return Z;
};

box2d[W8y.x8M] = function (f) {
  if (f) {
    this[W8y.x0H] = f;
    this[W8y.d60] = Math[W8y.L8M](f);
    this[W8y.a30] = Math[W8y.W76](f);
  }
};

box2d.b2Rot.prototype.angle = W8y.q3H;
box2d.b2Rot.prototype.s = W8y.q3H;
box2d.b2Rot.prototype.c = W8y.i0M;
box2d[W8y.x8M][W8y.L2k] = new box2d[W8y.x8M]();

box2d.b2Rot.prototype.Clone = function () {
  return new box2d[W8y.x8M]()[W8y.k97](this);
};

box2d.b2Rot.prototype.Copy = function (f) {
  this[W8y.x0H] = f[W8y.x0H];
  this[W8y.d60] = f[W8y.d60];
  this[W8y.a30] = f[W8y.a30];
  return this;
};

box2d.b2Rot.prototype.SetAngle = function (f) {
  var N = "k7J";

  if (W8y[N](this[W8y.x0H], f)) {
    this[W8y.x0H] = f;
    this[W8y.d60] = Math[W8y.L8M](f);
    this[W8y.a30] = Math[W8y.W76](f);
  }

  return this;
};

box2d.b2Rot.prototype.SetAngleRadians = box2d.b2Rot.prototype.SetAngle;

box2d.b2Rot.prototype.SetAngleDegrees = function (f) {
  return this[W8y.t5k](box2d[W8y.W96](f));
};

box2d.b2Rot.prototype.SetIdentity = function () {
  this[W8y.x0H] = W8y.q3H;
  this[W8y.d60] = W8y.q3H;
  this[W8y.a30] = W8y.i0M;
  return this;
};

box2d.b2Rot.prototype.GetAngle = function () {
  return this[W8y.x0H];
};

box2d.b2Rot.prototype.GetAngleRadians = box2d.b2Rot.prototype.GetAngle;

box2d.b2Rot.prototype.GetAngleDegrees = function () {
  return box2d[W8y.W5Q](this[W8y.U0H]());
};

box2d.b2Rot.prototype.GetXAxis = function (f) {
  f[W8y.T9T] = this[W8y.a30];
  f[W8y.Z9T] = this[W8y.d60];
  return f;
};

box2d.b2Rot.prototype.GetYAxis = function (f) {
  f[W8y.T9T] = -this[W8y.d60];
  f[W8y.Z9T] = this[W8y.a30];
  return f;
};

box2d[W8y.b27] = function (f, N, P) {
  var Z = "R7J",
      W = "I7J",
      l = "j7J",
      m = "Q7J",
      C = f[W8y.a30],
      n = f[W8y.d60],
      k = N[W8y.a30],
      H = N[W8y.d60];
  P[W8y.d60] = W8y[m](n, k) + W8y[l](C, H);
  P[W8y.a30] = W8y[W](C * k, n * H);
  P[W8y.x0H] = f[W8y.x0H] + N[W8y.x0H];

  while (P[W8y.x0H] < -box2d[W8y.e5M]) {
    P[W8y.x0H] += box2d[W8y.N0H];
  }

  while (W8y[Z](P[W8y.x0H], box2d[W8y.e5M])) {
    P[W8y.x0H] -= box2d[W8y.N0H];
  }

  return P;
};

box2d[W8y.D3M] = function (f, N, P) {
  var Z = "A7J",
      W = "G7J",
      l = "v7J",
      m = "M7J",
      C = "E7J",
      n = f[W8y.a30],
      k = f[W8y.d60],
      H = N[W8y.a30],
      i = N[W8y.d60];
  P[W8y.d60] = W8y[C](n * i, k * H);
  P[W8y.a30] = W8y[m](n, H) + W8y[l](k, i);
  P[W8y.x0H] = W8y[W](f[W8y.x0H], N[W8y.x0H]);

  while (P[W8y.x0H] < -box2d[W8y.e5M]) {
    P[W8y.x0H] += box2d[W8y.N0H];
  }

  while (W8y[Z](P[W8y.x0H], box2d[W8y.e5M])) {
    P[W8y.x0H] -= box2d[W8y.N0H];
  }

  return P;
};

box2d[W8y.x47] = function (f, N, P) {
  var Z = "X9J",
      W = "N9J",
      l = "w9J",
      m = f[W8y.a30],
      C = f[W8y.d60],
      n = N[W8y.T9T],
      k = N[W8y.Z9T];
  P[W8y.T9T] = W8y[l](m * n, C * k);
  P[W8y.Z9T] = W8y[W](C, n) + W8y[Z](m, k);
  return P;
};

box2d[W8y.b0M] = function (f, N, P) {
  var Z = "J9J",
      W = "b9J",
      l = "s9J",
      m = f[W8y.a30],
      C = f[W8y.d60],
      n = N[W8y.T9T],
      k = N[W8y.Z9T];
  P[W8y.T9T] = W8y[l](m, n) + W8y[W](C, k);
  P[W8y.Z9T] = -C * n + W8y[Z](m, k);
  return P;
};

box2d[W8y.P70] = function () {
  this[W8y.t60] = new box2d[W8y.p7T]();
  this[W8y.b50] = new box2d[W8y.x8M]();
};

box2d.b2Transform.prototype.p = W8y.z6k;
box2d.b2Transform.prototype.q = W8y.z6k;
box2d[W8y.P70][W8y.L2k] = new box2d[W8y.P70]();

box2d.b2Transform.prototype.Clone = function () {
  return new box2d[W8y.P70]()[W8y.k97](this);
};

box2d.b2Transform.prototype.Copy = function (f) {
  this[W8y.t60][W8y.k97](f[W8y.t60]);
  this[W8y.b50][W8y.k97](f[W8y.b50]);
  return this;
};

box2d.b2Transform.prototype.SetIdentity = function () {
  this[W8y.t60][W8y.j6k]();
  this[W8y.b50][W8y.G0H]();
  return this;
};

box2d.b2Transform.prototype.SetPositionRotation = function (f, N) {
  this[W8y.t60][W8y.k97](f);
  this[W8y.b50][W8y.k97](N);
  return this;
};

box2d.b2Transform.prototype.SetPositionAngleRadians = function (f, N) {
  this[W8y.t60][W8y.k97](f);
  this[W8y.b50][W8y.h70](N);
  return this;
};

box2d.b2Transform.prototype.SetPosition = function (f) {
  this[W8y.t60][W8y.k97](f);
  return this;
};

box2d.b2Transform.prototype.SetPositionXY = function (f, N) {
  this[W8y.t60][W8y.y47](f, N);
  return this;
};

box2d.b2Transform.prototype.SetRotation = function (f) {
  this[W8y.b50][W8y.k97](f);
  return this;
};

box2d.b2Transform.prototype.SetRotationAngleRadians = function (f) {
  this[W8y.b50][W8y.h70](f);
  return this;
};

box2d.b2Transform.prototype.GetPosition = function () {
  return this[W8y.t60];
};

box2d.b2Transform.prototype.GetRotation = function () {
  return this[W8y.b50];
};

box2d.b2Transform.prototype.GetRotationAngle = function () {
  return this[W8y.b50][W8y.U0H]();
};

box2d.b2Transform.prototype.GetRotationAngleRadians = box2d.b2Transform.prototype.GetRotationAngle;

box2d.b2Transform.prototype.GetAngle = function () {
  return this[W8y.b50][W8y.U0H]();
};

box2d.b2Transform.prototype.GetAngleRadians = box2d.b2Transform.prototype.GetAngle;

box2d[W8y.o10] = function (f, N, P) {
  var Z = "H9J",
      W = "K9J",
      l = "n9J",
      m = f[W8y.b50][W8y.a30],
      C = f[W8y.b50][W8y.d60],
      n = N[W8y.T9T],
      k = N[W8y.Z9T];
  P[W8y.T9T] = W8y[l](m * n, C * k) + f[W8y.t60][W8y.T9T];
  P[W8y.Z9T] = W8y[W](C, n) + W8y[Z](m, k) + f[W8y.t60][W8y.Z9T];
  return P;
};

box2d[W8y.a90] = function (f, N, P) {
  var Z = "u9J",
      W = "d9J",
      l = "a9J",
      m = "e9J",
      C = "r9J",
      n = f[W8y.b50][W8y.a30],
      k = f[W8y.b50][W8y.d60],
      H = W8y[C](N[W8y.T9T], f[W8y.t60][W8y.T9T]),
      i = W8y[m](N[W8y.Z9T], f[W8y.t60][W8y.Z9T]);
  P[W8y.T9T] = W8y[l](n, H) + W8y[W](k, i);
  P[W8y.Z9T] = -k * H + W8y[Z](n, i);
  return P;
};

box2d[W8y.O5Q] = function (f, N, P) {
  box2d[W8y.b27](f[W8y.b50], N[W8y.b50], P[W8y.b50]);
  box2d[W8y.m3T](box2d[W8y.x47](f[W8y.b50], N[W8y.t60], P[W8y.t60]), f[W8y.t60], P[W8y.t60]);
  return P;
};

box2d[W8y.J6Q] = function (f, N, P) {
  box2d[W8y.D3M](f[W8y.b50], N[W8y.b50], P[W8y.b50]);
  box2d[W8y.b0M](f[W8y.b50], box2d[W8y.x8T](N[W8y.t60], f[W8y.t60], P[W8y.t60]), P[W8y.t60]);
  return P;
};

box2d[W8y.I30] = function () {
  this[W8y.O8Q] = new box2d[W8y.p7T]();
  this[W8y.K8Q] = new box2d[W8y.p7T]();
  this[W8y.a30] = new box2d[W8y.p7T]();
};

box2d.b2Sweep.prototype.localCenter = W8y.z6k;
box2d.b2Sweep.prototype.c0 = W8y.z6k;
box2d.b2Sweep.prototype.c = W8y.z6k;
box2d.b2Sweep.prototype.a0 = W8y.q3H;
box2d.b2Sweep.prototype.a = W8y.q3H;
box2d.b2Sweep.prototype.alpha0 = W8y.q3H;

box2d.b2Sweep.prototype.Clone = function () {
  return new box2d[W8y.I30]()[W8y.k97](this);
};

box2d.b2Sweep.prototype.Copy = function (f) {
  this[W8y.O8Q][W8y.k97](f[W8y.O8Q]);
  this[W8y.K8Q][W8y.k97](f[W8y.K8Q]);
  this[W8y.a30][W8y.k97](f[W8y.a30]);
  this[W8y.b8T] = f[W8y.b8T];
  this[W8y.U30] = f[W8y.U30];
  this[W8y.F2T] = f[W8y.F2T];
  return this;
};

box2d.b2Sweep.prototype.GetTransform = function (f, N) {
  var P = "W8J",
      Z = "Z8J",
      W = "U8J",
      l = "y8J",
      m = "F9J",
      C = "p9J",
      n = "L9J",
      k = W8y[n](W8y.i0M, N);
  f[W8y.t60][W8y.T9T] = W8y[C](k, this[W8y.K8Q][W8y.T9T]) + W8y[m](N, this[W8y.a30][W8y.T9T]);
  f[W8y.t60][W8y.Z9T] = W8y[l](k, this[W8y.K8Q][W8y.Z9T]) + W8y[W](N, this[W8y.a30][W8y.Z9T]);
  var H = W8y[Z](k, this[W8y.b8T]) + W8y[P](N, this[W8y.U30]);
  f[W8y.b50][W8y.h70](H);
  f[W8y.t60][W8y.d6M](box2d[W8y.x47](f[W8y.b50], this[W8y.O8Q], box2d[W8y.p7T][W8y.t7M]));
  return f;
};

box2d.b2Sweep.prototype.Advance = function (f) {
  var N = "T8J",
      P = "O8J",
      Z = "V8J",
      W = "g8J",
      l = "l8J";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](this[W8y.F2T], W8y.i0M));
  }

  var m = W8y[W](f - this[W8y.F2T], W8y.i0M - this[W8y.F2T]);
  this[W8y.K8Q][W8y.T9T] += W8y[Z](m, this[W8y.a30][W8y.T9T] - this[W8y.K8Q][W8y.T9T]);
  this[W8y.K8Q][W8y.Z9T] += W8y[P](m, this[W8y.a30][W8y.Z9T] - this[W8y.K8Q][W8y.Z9T]);
  this[W8y.b8T] += W8y[N](m, this[W8y.U30] - this[W8y.b8T]);
  this[W8y.F2T] = f;
};

box2d.b2Sweep.prototype.Normalize = function () {
  var f = "i8J",
      N = W8y[f](box2d[W8y.N0H], Math[W8y.s4T](this[W8y.b8T] / box2d[W8y.N0H]));
  this[W8y.b8T] -= N;
  this[W8y.U30] -= N;
};

goog[W8y.U3T](W8y.n20);
goog[W8y.V20]('box2d.b2Settings');

box2d[W8y.E50] = function () {};

box2d.b2ControllerEdge.prototype.controller = W8y.z6k;
box2d.b2ControllerEdge.prototype.body = W8y.z6k;
box2d.b2ControllerEdge.prototype.prevBody = W8y.z6k;
box2d.b2ControllerEdge.prototype.nextBody = W8y.z6k;
box2d.b2ControllerEdge.prototype.prevController = W8y.z6k;
box2d.b2ControllerEdge.prototype.nextController = W8y.z6k;

box2d[W8y.X9H] = function () {};

box2d.b2Controller.prototype.m_world = W8y.z6k;
box2d.b2Controller.prototype.m_bodyList = W8y.z6k;
box2d.b2Controller.prototype.m_bodyCount = W8y.u8Q;
box2d.b2Controller.prototype.m_prev = W8y.z6k;
box2d.b2Controller.prototype.m_next = W8y.z6k;

box2d.b2Controller.prototype.Step = function (f) {};

box2d.b2Controller.prototype.Draw = function (f) {};

box2d.b2Controller.prototype.GetNext = function () {
  return this[W8y.X66];
};

box2d.b2Controller.prototype.GetPrev = function () {
  return this[W8y.h1r];
};

box2d.b2Controller.prototype.GetWorld = function () {
  return this[W8y.s1H];
};

box2d.b2Controller.prototype.GetBodyList = function () {
  return this[W8y.I80];
};

box2d.b2Controller.prototype.AddBody = function (f) {
  var N = new box2d[W8y.E50]();
  N[W8y.R6k] = f;
  N[W8y.a5M] = this;
  N[W8y.i2k] = this[W8y.I80];
  N[W8y.N10] = W8y.z6k;
  if (this[W8y.I80]) this[W8y.I80][W8y.N10] = N;
  this[W8y.I80] = N;
  ++this[W8y.j9M];
  N[W8y.l16] = f[W8y.U6T];
  N[W8y.j66] = W8y.z6k;
  if (f[W8y.U6T]) f[W8y.U6T][W8y.j66] = N;
  f[W8y.U6T] = N;
  ++f[W8y.H3T];
};

box2d.b2Controller.prototype.RemoveBody = function (f) {
  var N = "h8J",
      P = "D8J",
      Z = "S8J",
      W = "o8J",
      l = "q8J";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](this[W8y.j9M], W8y.u8Q));
  }

  var m = this[W8y.I80];

  while (m && W8y[W](m[W8y.R6k], f)) {
    m = m[W8y.i2k];
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[Z](m, W8y.z6k));
  }

  if (m[W8y.N10]) m[W8y.N10][W8y.i2k] = m[W8y.i2k];
  if (m[W8y.i2k]) m[W8y.i2k][W8y.N10] = m[W8y.N10];
  if (W8y[P](this[W8y.I80], m)) this[W8y.I80] = m[W8y.i2k];
  --this[W8y.j9M];
  if (m[W8y.l16]) m[W8y.l16][W8y.j66] = m[W8y.j66];
  if (m[W8y.j66]) m[W8y.j66][W8y.l16] = m[W8y.l16];
  if (W8y[N](f[W8y.U6T], m)) f[W8y.U6T] = m[W8y.l16];
  --f[W8y.H3T];
};

box2d.b2Controller.prototype.Clear = function () {
  while (this[W8y.I80]) {
    this[W8y.Z0r](this[W8y.I80][W8y.R6k]);
  }

  this[W8y.j9M] = W8y.u8Q;
};

goog[W8y.U3T](W8y.C3M);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Controller');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.R17] = function () {
  goog[W8y.o66](this);
  this[W8y.i37] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
};

goog[W8y.u80](box2d[W8y.R17], box2d[W8y.X9H]);
box2d.b2ConstantAccelController.prototype.A = W8y.z6k;

box2d.b2ConstantAccelController.prototype.Step = function (f) {
  var N = box2d[W8y.X26](f[W8y.I5H], this[W8y.i37], box2d.b2ConstantAccelController.prototype.Step.s_dtA);

  for (var P = this[W8y.I80]; P; P = P[W8y.i2k]) {
    var Z = P[W8y.R6k];
    if (!Z[W8y.h0r]()) continue;
    Z[W8y.i96](box2d[W8y.m3T](Z[W8y.s5T](), N, box2d[W8y.p7T][W8y.t7M]));
  }
};

box2d.b2ConstantAccelController.prototype.Step.s_dtA = new box2d[W8y.p7T]();
goog[W8y.U3T](W8y.I3r);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Math');
box2d[W8y.z6M] = {
  e_unknownJoint: W8y.u8Q,
  e_revoluteJoint: W8y.D8Q,
  e_prismaticJoint: W8y.d8Q,
  e_distanceJoint: W8y.S8Q,
  e_pulleyJoint: W8y.v8Q,
  e_mouseJoint: W8y.L8Q,
  e_gearJoint: W8y.h8Q,
  e_wheelJoint: W8y.M8Q,
  e_weldJoint: W8y.z8Q,
  e_frictionJoint: W8y.p8Q,
  e_ropeJoint: W8y.j3T,
  e_motorJoint: W8y.b3T,
  e_areaJoint: W8y.g3T
};
goog[W8y.g5H](box2d[W8y.z6M], W8y.S70, box2d[W8y.z6M][W8y.p87]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.B2r, box2d[W8y.z6M][W8y.H5H]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.I70, box2d[W8y.z6M][W8y.y5H]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.A6k, box2d[W8y.z6M][W8y.U5M]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.D5T, box2d[W8y.z6M][W8y.s7H]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.n4H, box2d[W8y.z6M][W8y.F27]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.f0M, box2d[W8y.z6M][W8y.a6T]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.H6H, box2d[W8y.z6M][W8y.p37]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.o5Q, box2d[W8y.z6M][W8y.u07]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.t27, box2d[W8y.z6M][W8y.b46]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.U66, box2d[W8y.z6M][W8y.S2k]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.w2k, box2d[W8y.z6M][W8y.K46]);
goog[W8y.g5H](box2d[W8y.z6M], W8y.e8k, box2d[W8y.z6M][W8y.P2M]);
box2d[W8y.L1H] = {
  e_inactiveLimit: W8y.u8Q,
  e_atLowerLimit: W8y.D8Q,
  e_atUpperLimit: W8y.d8Q,
  e_equalLimits: W8y.S8Q
};
goog[W8y.g5H](box2d[W8y.L1H], W8y.i7T, box2d[W8y.L1H][W8y.c27]);
goog[W8y.g5H](box2d[W8y.L1H], W8y.O0T, box2d[W8y.L1H][W8y.n0r]);
goog[W8y.g5H](box2d[W8y.L1H], W8y.c2H, box2d[W8y.L1H][W8y.b4M]);
goog[W8y.g5H](box2d[W8y.L1H], W8y.t9k, box2d[W8y.L1H][W8y.R1k]);

box2d[W8y.G66] = function () {
  this[W8y.v2r] = new box2d[W8y.p7T]();
};

box2d.b2Jacobian.prototype.linear = W8y.z6k;
box2d.b2Jacobian.prototype.angularA = W8y.u8Q;
box2d.b2Jacobian.prototype.angularB = W8y.u8Q;

box2d.b2Jacobian.prototype.SetZero = function () {
  this[W8y.v2r][W8y.j6k]();
  this[W8y.w77] = W8y.u8Q;
  this[W8y.d07] = W8y.u8Q;
  return this;
};

box2d.b2Jacobian.prototype.Set = function (f, N, P) {
  this[W8y.v2r][W8y.k97](f);
  this[W8y.w77] = N;
  this[W8y.d07] = P;
  return this;
};

box2d[W8y.H6M] = function () {};

box2d.b2JointEdge.prototype.other = W8y.z6k;
box2d.b2JointEdge.prototype.joint = W8y.z6k;
box2d.b2JointEdge.prototype.prev = W8y.z6k;
box2d.b2JointEdge.prototype.next = W8y.z6k;

box2d[W8y.k1r] = function (f) {
  this[W8y.N2k] = f;
};

box2d.b2JointDef.prototype.type = box2d[W8y.z6M][W8y.p87];
box2d.b2JointDef.prototype.userData = W8y.z6k;
box2d.b2JointDef.prototype.bodyA = W8y.z6k;
box2d.b2JointDef.prototype.bodyB = W8y.z6k;
box2d.b2JointDef.prototype.collideConnected = W8y.G0T;

box2d[W8y.N17] = function (f) {
  var N = "B8J";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](f[W8y.F6Q], f[W8y.b5Q]));
  }

  this[W8y.b5T] = f[W8y.N2k];
  this[W8y.O30] = new box2d[W8y.H6M]();
  this[W8y.Z30] = new box2d[W8y.H6M]();
  this[W8y.l37] = f[W8y.F6Q];
  this[W8y.v27] = f[W8y.b5Q];
  this[W8y.N96] = f[W8y.D07];
  this[W8y.x8k] = f[W8y.P1H];
};

box2d.b2Joint.prototype.m_type = box2d[W8y.z6M][W8y.p87];
box2d.b2Joint.prototype.m_prev = W8y.z6k;
box2d.b2Joint.prototype.m_next = W8y.z6k;
box2d.b2Joint.prototype.m_edgeA = W8y.z6k;
box2d.b2Joint.prototype.m_edgeB = W8y.z6k;
box2d.b2Joint.prototype.m_bodyA = W8y.z6k;
box2d.b2Joint.prototype.m_bodyB = W8y.z6k;
box2d.b2Joint.prototype.m_index = W8y.u8Q;
box2d.b2Joint.prototype.m_islandFlag = W8y.G0T;
box2d.b2Joint.prototype.m_collideConnected = W8y.G0T;
box2d.b2Joint.prototype.m_userData = W8y.z6k;

box2d.b2Joint.prototype.GetAnchorA = function (f) {
  return f[W8y.j6k]();
};

box2d.b2Joint.prototype.GetAnchorB = function (f) {
  return f[W8y.j6k]();
};

box2d.b2Joint.prototype.GetReactionForce = function (f, N) {
  return N[W8y.j6k]();
};

box2d.b2Joint.prototype.GetReactionTorque = function (f) {
  return W8y.u8Q;
};

box2d.b2Joint.prototype.InitVelocityConstraints = function (f) {};

box2d.b2Joint.prototype.SolveVelocityConstraints = function (f) {};

box2d.b2Joint.prototype.SolvePositionConstraints = function (f) {
  return false;
};

box2d.b2Joint.prototype.GetType = function () {
  return this[W8y.b5T];
};

box2d.b2Joint.prototype.GetBodyA = function () {
  return this[W8y.l37];
};

box2d.b2Joint.prototype.GetBodyB = function () {
  return this[W8y.v27];
};

box2d.b2Joint.prototype.GetNext = function () {
  return this[W8y.X66];
};

box2d.b2Joint.prototype.GetUserData = function () {
  return this[W8y.x8k];
};

box2d.b2Joint.prototype.SetUserData = function (f) {
  this[W8y.x8k] = f;
};

box2d.b2Joint.prototype.GetCollideConnected = function () {
  return this[W8y.N96];
};

box2d.b2Joint.prototype.Dump = function () {
  var f = "// Dump is not supported for this joint type.\n";

  if (box2d[W8y.F2k]) {
    box2d[W8y.R50](f);
  }
};

box2d.b2Joint.prototype.IsActive = function () {
  return this[W8y.l37][W8y.R4T]() && this[W8y.v27][W8y.R4T]();
};

box2d.b2Joint.prototype.ShiftOrigin = function (f) {};

goog[W8y.U3T](W8y.c0M);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Joint');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.G3H] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.H5H]);
  this[W8y.r8H] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.x8H] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
};

goog[W8y.u80](box2d[W8y.G3H], box2d[W8y.k1r]);
box2d.b2RevoluteJointDef.prototype.localAnchorA = W8y.z6k;
box2d.b2RevoluteJointDef.prototype.localAnchorB = W8y.z6k;
box2d.b2RevoluteJointDef.prototype.referenceAngle = W8y.u8Q;
box2d.b2RevoluteJointDef.prototype.enableLimit = W8y.G0T;
box2d.b2RevoluteJointDef.prototype.lowerAngle = W8y.u8Q;
box2d.b2RevoluteJointDef.prototype.upperAngle = W8y.u8Q;
box2d.b2RevoluteJointDef.prototype.enableMotor = W8y.G0T;
box2d.b2RevoluteJointDef.prototype.motorSpeed = W8y.u8Q;
box2d.b2RevoluteJointDef.prototype.maxMotorTorque = W8y.u8Q;

box2d.b2RevoluteJointDef.prototype.Initialize = function (f, N, P) {
  var Z = "z8J";
  this[W8y.F6Q] = f;
  this[W8y.b5Q] = N;
  this[W8y.F6Q][W8y.y7M](P, this[W8y.r8H]);
  this[W8y.b5Q][W8y.y7M](P, this[W8y.x8H]);
  this[W8y.D3T] = W8y[Z](this[W8y.b5Q][W8y.x57](), this[W8y.F6Q][W8y.x57]());
};

box2d[W8y.s67] = function (f) {
  goog[W8y.o66](this, f);
  this[W8y.V27] = new box2d[W8y.p7T]();
  this[W8y.G47] = new box2d[W8y.p7T]();
  this[W8y.k1M] = new box2d[W8y.G9T]();
  this[W8y.r8k] = new box2d[W8y.p7T]();
  this[W8y.u8k] = new box2d[W8y.p7T]();
  this[W8y.z3k] = new box2d[W8y.p7T]();
  this[W8y.A2k] = new box2d[W8y.p7T]();
  this[W8y.Z7T] = new box2d[W8y.t0M]();
  this[W8y.p97] = new box2d[W8y.x8M]();
  this[W8y.k67] = new box2d[W8y.x8M]();
  this[W8y.u17] = new box2d[W8y.p7T]();
  this[W8y.P86] = new box2d[W8y.p7T]();
  this[W8y.G3r] = new box2d[W8y.T0H]();
  this[W8y.V27][W8y.k97](f[W8y.r8H]);
  this[W8y.G47][W8y.k97](f[W8y.x8H]);
  this[W8y.E00] = f[W8y.D3T];
  this[W8y.k1M][W8y.j6k]();
  this[W8y.X00] = W8y.u8Q;
  this[W8y.w56] = f[W8y.K1M];
  this[W8y.N3k] = f[W8y.A0H];
  this[W8y.J47] = f[W8y.S3k];
  this[W8y.z7H] = f[W8y.Z4T];
  this[W8y.F87] = f[W8y.C4T];
  this[W8y.l4H] = f[W8y.E80];
  this[W8y.q46] = box2d[W8y.L1H][W8y.c27];
};

goog[W8y.u80](box2d[W8y.s67], box2d[W8y.N17]);
box2d.b2RevoluteJoint.prototype.m_localAnchorA = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_localAnchorB = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_impulse = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_motorImpulse = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_enableMotor = W8y.G0T;
box2d.b2RevoluteJoint.prototype.m_maxMotorTorque = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_motorSpeed = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_enableLimit = W8y.G0T;
box2d.b2RevoluteJoint.prototype.m_referenceAngle = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_lowerAngle = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_upperAngle = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_rA = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_rB = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_localCenterA = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_localCenterB = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_invMassA = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_invMassB = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_invIA = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_invIB = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_mass = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_motorMass = W8y.u8Q;
box2d.b2RevoluteJoint.prototype.m_limitState = box2d[W8y.L1H][W8y.c27];
box2d.b2RevoluteJoint.prototype.m_qA = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_qB = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_lalcA = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_lalcB = W8y.z6k;
box2d.b2RevoluteJoint.prototype.m_K = W8y.z6k;

box2d.b2RevoluteJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "b5J",
      P = "s5J",
      Z = "X5J",
      W = "N5J",
      l = "w5J",
      m = "A6J",
      C = "G6J",
      n = "L6J",
      k = "u6J",
      H = "d6J",
      i = "a6J",
      Q = "e6J",
      e = "r6J",
      j = "H6J",
      o = "O6J",
      S = "x6J",
      d = "m6J",
      u = "s6J",
      D = "Z6J",
      M = "f6J",
      y1 = "t8J";
  this[W8y.G0k] = this[W8y.l37][W8y.x5M];
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.z3k][W8y.k97](this[W8y.l37][W8y.i6k][W8y.O8Q]);
  this[W8y.A2k][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.j96] = this[W8y.l37][W8y.k86];
  this[W8y.V96] = this[W8y.v27][W8y.k86];
  this[W8y.q8M] = this[W8y.l37][W8y.M7H];
  this[W8y.E9M] = this[W8y.v27][W8y.M7H];
  var h = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      E = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      L = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      w1 = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      B = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      N1 = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      f1 = this[W8y.p97][W8y.h70](h),
      c1 = this[W8y.k67][W8y.h70](w1);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  box2d[W8y.x47](f1, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  box2d[W8y.x47](c1, this[W8y.P86], this[W8y.u8k]);
  var l1 = this[W8y.j96],
      P1 = this[W8y.V96],
      s1 = this[W8y.q8M],
      b1 = this[W8y.E9M],
      m1 = W8y[y1](s1 + b1, 0);
  this[W8y.Z7T][W8y.Q57][W8y.T9T] = l1 + P1 + W8y[M](this[W8y.r8k][W8y.Z9T], this[W8y.r8k][W8y.Z9T], s1) + W8y[D](this[W8y.u8k][W8y.Z9T], this[W8y.u8k][W8y.Z9T], b1);
  this[W8y.Z7T][W8y.D57][W8y.T9T] = -this[W8y.r8k][W8y.Z9T] * this[W8y.r8k][W8y.T9T] * s1 - W8y[u](this[W8y.u8k][W8y.Z9T], this[W8y.u8k][W8y.T9T], b1);
  this[W8y.Z7T][W8y.y1H][W8y.T9T] = -this[W8y.r8k][W8y.Z9T] * s1 - W8y[d](this[W8y.u8k][W8y.Z9T], b1);
  this[W8y.Z7T][W8y.Q57][W8y.Z9T] = this[W8y.Z7T][W8y.D57][W8y.T9T];
  this[W8y.Z7T][W8y.D57][W8y.Z9T] = l1 + P1 + W8y[S](this[W8y.r8k][W8y.T9T], this[W8y.r8k][W8y.T9T], s1) + W8y[o](this[W8y.u8k][W8y.T9T], this[W8y.u8k][W8y.T9T], b1);
  this[W8y.Z7T][W8y.y1H][W8y.Z9T] = W8y[j](this[W8y.r8k][W8y.T9T], s1) + W8y[e](this[W8y.u8k][W8y.T9T], b1);
  this[W8y.Z7T][W8y.Q57][W8y.u7T] = this[W8y.Z7T][W8y.y1H][W8y.T9T];
  this[W8y.Z7T][W8y.D57][W8y.u7T] = this[W8y.Z7T][W8y.y1H][W8y.Z9T];
  this[W8y.Z7T][W8y.y1H][W8y.u7T] = s1 + b1;
  this[W8y.V9T] = s1 + b1;

  if (W8y[Q](this[W8y.V9T], 0)) {
    this[W8y.V9T] = W8y[i](1, this[W8y.V9T]);
  }

  if (W8y[H](this[W8y.l4H], false) || m1) {
    this[W8y.X00] = 0;
  }

  if (this[W8y.F87] && W8y[k](m1, false)) {
    var W1 = W8y[n](w1, h, this[W8y.E00]);

    if (W8y[C](box2d[W8y.t67](this[W8y.N3k] - this[W8y.w56]), 2 * box2d[W8y.r5k])) {
      this[W8y.q46] = box2d[W8y.L1H][W8y.R1k];
    } else if (W8y[m](W1, this[W8y.w56])) {
      if (W8y[l](this[W8y.q46], box2d[W8y.L1H][W8y.n0r])) {
        this[W8y.k1M][W8y.u7T] = 0;
      }

      this[W8y.q46] = box2d[W8y.L1H][W8y.n0r];
    } else if (W8y[W](W1, this[W8y.N3k])) {
      if (W8y[Z](this[W8y.q46], box2d[W8y.L1H][W8y.b4M])) {
        this[W8y.k1M][W8y.u7T] = 0;
      }

      this[W8y.q46] = box2d[W8y.L1H][W8y.b4M];
    } else {
      this[W8y.q46] = box2d[W8y.L1H][W8y.c27];
      this[W8y.k1M][W8y.u7T] = 0;
    }
  } else {
    this[W8y.q46] = box2d[W8y.L1H][W8y.c27];
  }

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.k1M][W8y.E40](f[W8y.D5H][W8y.k30]);
    this[W8y.X00] *= f[W8y.D5H][W8y.k30];
    var J1 = box2d.b2RevoluteJoint.prototype.InitVelocityConstraints.s_P.SetXY(this[W8y.k1M][W8y.T9T], this[W8y.k1M][W8y.Z9T]);
    E[W8y.I5M](l1, J1);
    L -= W8y[P](s1, box2d[W8y.t10](this[W8y.r8k], J1) + this[W8y.X00] + this[W8y.k1M][W8y.u7T]);
    B[W8y.a9k](P1, J1);
    N1 += W8y[N](b1, box2d[W8y.t10](this[W8y.u8k], J1) + this[W8y.X00] + this[W8y.k1M][W8y.u7T]);
  } else {
    this[W8y.k1M][W8y.j6k]();
    this[W8y.X00] = 0;
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = L;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = N1;
};

box2d.b2RevoluteJoint.prototype.InitVelocityConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "K1l",
      P = "n1l",
      Z = "J1l",
      W = "b1l",
      l = "s1l",
      m = "X1l",
      C = "N1l",
      n = "w1l",
      k = "A5J",
      H = "G5J",
      i = "v5J",
      Q = "M5J",
      e = "E5J",
      j = "R5J",
      o = "I5J",
      S = "j5J",
      d = "H5J",
      u = "K5J",
      D = "n5J",
      M = "J5J",
      y1 = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      h = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      E = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      L = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      w1 = this[W8y.j96],
      B = this[W8y.V96],
      N1 = this[W8y.q8M],
      f1 = this[W8y.E9M],
      c1 = W8y[M](N1 + f1, 0);

  if (this[W8y.l4H] && W8y[D](this[W8y.q46], box2d[W8y.L1H][W8y.R1k]) && W8y[u](c1, false)) {
    var l1 = W8y[d](L, h, this[W8y.z7H]),
        P1 = -this[W8y.V9T] * l1,
        s1 = this[W8y.X00],
        b1 = W8y[S](f[W8y.D5H][W8y.I5H], this[W8y.J47]);
    this[W8y.X00] = box2d[W8y.N06](this[W8y.X00] + P1, -b1, b1);
    P1 = W8y[o](this[W8y.X00], s1);
    h -= W8y[j](N1, P1);
    L += W8y[e](f1, P1);
  }

  if (this[W8y.F87] && W8y[Q](this[W8y.q46], box2d[W8y.L1H][W8y.c27]) && W8y[i](c1, false)) {
    var m1 = box2d[W8y.x8T](box2d[W8y.S7T](E, L, this[W8y.u8k], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](y1, h, this[W8y.r8k], box2d[W8y.p7T][W8y.l9M]), box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot1),
        W1 = W8y[H](L, h),
        P1 = this[W8y.Z7T][W8y.y2M](m1[W8y.T9T], m1[W8y.Z9T], W1, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse3)[W8y.P8k]();

    if (W8y[k](this[W8y.q46], box2d[W8y.L1H][W8y.R1k])) {
      this[W8y.k1M][W8y.t4H](P1);
    } else if (W8y[n](this[W8y.q46], box2d[W8y.L1H][W8y.n0r])) {
      var J1 = this[W8y.k1M][W8y.u7T] + P1[W8y.u7T];

      if (W8y[C](J1, 0)) {
        var C1 = -m1[W8y.T9T] + this[W8y.k1M][W8y.u7T] * this[W8y.Z7T][W8y.y1H][W8y.T9T],
            x1 = -m1[W8y.Z9T] + this[W8y.k1M][W8y.u7T] * this[W8y.Z7T][W8y.y1H][W8y.Z9T],
            T1 = this[W8y.Z7T][W8y.u5T](C1, x1, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced);
        P1[W8y.T9T] = T1[W8y.T9T];
        P1[W8y.Z9T] = T1[W8y.Z9T];
        P1[W8y.u7T] = -this[W8y.k1M][W8y.u7T];
        this[W8y.k1M][W8y.T9T] += T1[W8y.T9T];
        this[W8y.k1M][W8y.Z9T] += T1[W8y.Z9T];
        this[W8y.k1M][W8y.u7T] = 0;
      } else {
        this[W8y.k1M][W8y.t4H](P1);
      }
    } else if (W8y[m](this[W8y.q46], box2d[W8y.L1H][W8y.b4M])) {
      var J1 = this[W8y.k1M][W8y.u7T] + P1[W8y.u7T];

      if (W8y[l](J1, 0)) {
        var C1 = -m1[W8y.T9T] + this[W8y.k1M][W8y.u7T] * this[W8y.Z7T][W8y.y1H][W8y.T9T],
            x1 = -m1[W8y.Z9T] + this[W8y.k1M][W8y.u7T] * this[W8y.Z7T][W8y.y1H][W8y.Z9T],
            T1 = this[W8y.Z7T][W8y.u5T](C1, x1, box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced);
        P1[W8y.T9T] = T1[W8y.T9T];
        P1[W8y.Z9T] = T1[W8y.Z9T];
        P1[W8y.u7T] = -this[W8y.k1M][W8y.u7T];
        this[W8y.k1M][W8y.T9T] += T1[W8y.T9T];
        this[W8y.k1M][W8y.Z9T] += T1[W8y.Z9T];
        this[W8y.k1M][W8y.u7T] = 0;
      } else {
        this[W8y.k1M][W8y.t4H](P1);
      }
    }

    var K1 = box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_P.SetXY(P1[W8y.T9T], P1[W8y.Z9T]);
    y1[W8y.I5M](w1, K1);
    h -= W8y[W](N1, box2d[W8y.t10](this[W8y.r8k], K1) + P1[W8y.u7T]);
    E[W8y.a9k](B, K1);
    L += W8y[Z](f1, box2d[W8y.t10](this[W8y.u8k], K1) + P1[W8y.u7T]);
  } else {
    var l1 = box2d[W8y.x8T](box2d[W8y.S7T](E, L, this[W8y.u8k], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](y1, h, this[W8y.r8k], box2d[W8y.p7T][W8y.l9M]), box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot),
        P1 = this[W8y.Z7T][W8y.u5T](-l1[W8y.T9T], -l1[W8y.Z9T], box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse2);
    this[W8y.k1M][W8y.T9T] += P1[W8y.T9T];
    this[W8y.k1M][W8y.Z9T] += P1[W8y.Z9T];
    y1[W8y.I5M](w1, P1);
    h -= W8y[P](N1, box2d[W8y.t10](this[W8y.r8k], P1));
    E[W8y.a9k](B, P1);
    L += W8y[N](f1, box2d[W8y.t10](this[W8y.u8k], P1));
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = h;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = L;
};

box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_P = new box2d[W8y.p7T]();
box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d[W8y.p7T]();
box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_Cdot1 = new box2d[W8y.p7T]();
box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse3 = new box2d[W8y.G9T]();
box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_reduced = new box2d[W8y.p7T]();
box2d.b2RevoluteJoint.prototype.SolveVelocityConstraints.s_impulse2 = new box2d[W8y.p7T]();

box2d.b2RevoluteJoint.prototype.SolvePositionConstraints = function (f) {
  var N = "h4l",
      P = "D4l",
      Z = "S4l",
      W = "o4l",
      l = "j4l",
      m = "H4l",
      C = "O4l",
      n = "x4l",
      k = "b4l",
      H = "s4l",
      i = "X4l",
      Q = "N4l",
      e = "w4l",
      j = "A1l",
      o = "G1l",
      S = "v1l",
      d = "M1l",
      u = "E1l",
      D = "a1l",
      M = "e1l",
      y1 = "r1l",
      h = "H1l",
      E = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      L = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      w1 = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      B = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      N1 = this[W8y.p97][W8y.h70](L),
      f1 = this[W8y.k67][W8y.h70](B),
      c1 = 0,
      l1 = 0,
      P1 = W8y[h](this[W8y.q8M] + this[W8y.E9M], 0);

  if (this[W8y.F87] && W8y[y1](this[W8y.q46], box2d[W8y.L1H][W8y.c27]) && W8y[M](P1, false)) {
    var s1 = W8y[D](B, L, this[W8y.E00]),
        b1 = 0;

    if (W8y[u](this[W8y.q46], box2d[W8y.L1H][W8y.R1k])) {
      var m1 = box2d[W8y.N06](W8y[d](s1, this[W8y.w56]), -box2d[W8y.n06], box2d[W8y.n06]);
      b1 = -this[W8y.V9T] * m1;
      c1 = box2d[W8y.t67](m1);
    } else if (W8y[S](this[W8y.q46], box2d[W8y.L1H][W8y.n0r])) {
      var m1 = W8y[o](s1, this[W8y.w56]);
      c1 = -m1;
      m1 = box2d[W8y.N06](m1 + box2d[W8y.r5k], -box2d[W8y.n06], 0);
      b1 = -this[W8y.V9T] * m1;
    } else if (W8y[j](this[W8y.q46], box2d[W8y.L1H][W8y.b4M])) {
      var m1 = W8y[e](s1, this[W8y.N3k]);
      c1 = m1;
      m1 = box2d[W8y.N06](W8y[Q](m1, box2d[W8y.r5k]), 0, box2d[W8y.n06]);
      b1 = -this[W8y.V9T] * m1;
    }

    L -= W8y[i](this[W8y.q8M], b1);
    B += W8y[H](this[W8y.E9M], b1);
  }

  {
    N1[W8y.h70](L);
    f1[W8y.h70](B);
    box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
    var W1 = box2d[W8y.x47](N1, this[W8y.u17], this[W8y.r8k]);
    box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
    var J1 = box2d[W8y.x47](f1, this[W8y.P86], this[W8y.u8k]),
        m1 = box2d[W8y.x8T](box2d[W8y.m3T](w1, J1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.m3T](E, W1, box2d[W8y.p7T][W8y.l9M]), box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_C);
    l1 = m1[W8y.a2k]();
    var C1 = this[W8y.j96],
        x1 = this[W8y.V96],
        T1 = this[W8y.q8M],
        K1 = this[W8y.E9M],
        V1 = this[W8y.G3r];
    V1[W8y.Q57][W8y.T9T] = C1 + x1 + W8y[k](T1, W1[W8y.Z9T], W1[W8y.Z9T]) + W8y[n](K1, J1[W8y.Z9T], J1[W8y.Z9T]);
    V1[W8y.Q57][W8y.Z9T] = -T1 * W1[W8y.T9T] * W1[W8y.Z9T] - W8y[C](K1, J1[W8y.T9T], J1[W8y.Z9T]);
    V1[W8y.D57][W8y.T9T] = V1[W8y.Q57][W8y.Z9T];
    V1[W8y.D57][W8y.Z9T] = C1 + x1 + W8y[m](T1, W1[W8y.T9T], W1[W8y.T9T]) + W8y[l](K1, J1[W8y.T9T], J1[W8y.T9T]);
    var Q1 = V1[W8y.Y3k](m1[W8y.T9T], m1[W8y.Z9T], box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_impulse)[W8y.P8k]();
    E[W8y.I5M](C1, Q1);
    L -= W8y[W](T1, box2d[W8y.t10](W1, Q1));
    w1[W8y.a9k](x1, Q1);
    B += W8y[Z](K1, box2d[W8y.t10](J1, Q1));
  }
  f[W8y.P1T][this[W8y.G0k]][W8y.U30] = L;
  f[W8y.P1T][this[W8y.a0k]][W8y.U30] = B;
  return W8y[P](l1, box2d[W8y.Z8k]) && W8y[N](c1, box2d[W8y.r5k]);
};

box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_C = new box2d[W8y.p7T]();
box2d.b2RevoluteJoint.prototype.SolvePositionConstraints.s_impulse = new box2d[W8y.p7T]();

box2d.b2RevoluteJoint.prototype.GetAnchorA = function (f) {
  return this[W8y.l37][W8y.I00](this[W8y.V27], f);
};

box2d.b2RevoluteJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.I00](this[W8y.G47], f);
};

box2d.b2RevoluteJoint.prototype.GetReactionForce = function (f, N) {
  var P = "z4l",
      Z = "B4l";
  return N[W8y.y47](W8y[Z](f, this[W8y.k1M][W8y.T9T]), W8y[P](f, this[W8y.k1M][W8y.Z9T]));
};

box2d.b2RevoluteJoint.prototype.GetReactionTorque = function (f) {
  var N = "t4l";
  return W8y[N](f, this[W8y.k1M][W8y.u7T]);
};

box2d.b2RevoluteJoint.prototype.GetLocalAnchorA = function (f) {
  return f[W8y.k97](this[W8y.V27]);
};

box2d.b2RevoluteJoint.prototype.GetLocalAnchorB = function (f) {
  return f[W8y.k97](this[W8y.G47]);
};

box2d.b2RevoluteJoint.prototype.GetReferenceAngle = function () {
  return this[W8y.E00];
};

box2d.b2RevoluteJoint.prototype.GetJointAngleRadians = function () {
  var f = "f2l";
  return W8y[f](this[W8y.v27][W8y.i6k][W8y.U30], this[W8y.l37][W8y.i6k][W8y.U30], this[W8y.E00]);
};

box2d.b2RevoluteJoint.prototype.GetJointSpeed = function () {
  var f = "Z2l";
  return W8y[f](this[W8y.v27][W8y.t77], this[W8y.l37][W8y.t77]);
};

box2d.b2RevoluteJoint.prototype.IsMotorEnabled = function () {
  return this[W8y.l4H];
};

box2d.b2RevoluteJoint.prototype.EnableMotor = function (f) {
  var N = "W2l";

  if (W8y[N](this[W8y.l4H], f)) {
    this[W8y.l37][W8y.U5H](W8y.f5k);
    this[W8y.v27][W8y.U5H](W8y.f5k);
    this[W8y.l4H] = f;
  }
};

box2d.b2RevoluteJoint.prototype.GetMotorTorque = function (f) {
  var N = "l2l";
  return W8y[N](f, this[W8y.X00]);
};

box2d.b2RevoluteJoint.prototype.GetMotorSpeed = function () {
  return this[W8y.z7H];
};

box2d.b2RevoluteJoint.prototype.SetMaxMotorTorque = function (f) {
  this[W8y.J47] = f;
};

box2d.b2RevoluteJoint.prototype.GetMaxMotorTorque = function () {
  return this[W8y.J47];
};

box2d.b2RevoluteJoint.prototype.IsLimitEnabled = function () {
  return this[W8y.F87];
};

box2d.b2RevoluteJoint.prototype.EnableLimit = function (f) {
  var N = "g2l";

  if (W8y[N](f, this[W8y.F87])) {
    this[W8y.l37][W8y.U5H](W8y.f5k);
    this[W8y.v27][W8y.U5H](W8y.f5k);
    this[W8y.F87] = f;
    this[W8y.k1M][W8y.u7T] = W8y.u8Q;
  }
};

box2d.b2RevoluteJoint.prototype.GetLowerLimit = function () {
  return this[W8y.w56];
};

box2d.b2RevoluteJoint.prototype.GetUpperLimit = function () {
  return this[W8y.N3k];
};

box2d.b2RevoluteJoint.prototype.SetLimits = function (f, N) {
  var P = "O2l",
      Z = "V2l";

  if (W8y[Z](f, this[W8y.w56]) || W8y[P](N, this[W8y.N3k])) {
    this[W8y.l37][W8y.U5H](W8y.f5k);
    this[W8y.v27][W8y.U5H](W8y.f5k);
    this[W8y.k1M][W8y.u7T] = W8y.u8Q;
    this[W8y.w56] = f;
    this[W8y.N3k] = N;
  }
};

box2d.b2RevoluteJoint.prototype.SetMotorSpeed = function (f) {
  var N = "T2l";

  if (W8y[N](this[W8y.z7H], f)) {
    this[W8y.l37][W8y.U5H](true);
    this[W8y.v27][W8y.U5H](true);
    this[W8y.z7H] = f;
  }
};

box2d.b2RevoluteJoint.prototype.Dump = function () {
  var f = "  jd.upperAngle = %.15f;\n",
      N = "  jd.lowerAngle = %.15f;\n",
      P = "  /*box2d.b2RevoluteJointDef*/ var jd = new box2d.b2RevoluteJointDef();\n";

  if (box2d[W8y.F2k]) {
    var Z = this[W8y.l37][W8y.x5M],
        W = this[W8y.v27][W8y.x5M];
    box2d[W8y.R50](P);
    box2d[W8y.R50](W8y.Q67, Z);
    box2d[W8y.R50](W8y.k3r, W);
    box2d[W8y.R50](W8y.i1r, this[W8y.N96] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W8y.v70, this[W8y.V27][W8y.T9T], this[W8y.V27][W8y.Z9T]);
    box2d[W8y.R50](W8y.y77, this[W8y.G47][W8y.T9T], this[W8y.G47][W8y.Z9T]);
    box2d[W8y.R50](W8y.A5H, this[W8y.E00]);
    box2d[W8y.R50](W8y.R8k, this[W8y.F87] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](N, this[W8y.w56]);
    box2d[W8y.R50](f, this[W8y.N3k]);
    box2d[W8y.R50](W8y.V1H, this[W8y.l4H] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W8y.j6M, this[W8y.z7H]);
    box2d[W8y.R50](W8y.s60, this[W8y.J47]);
    box2d[W8y.R50](W8y.P6M, this[W8y.U56]);
  }
};

goog[W8y.U3T](W8y.S1M);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Joint');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.d3T] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.y5H]);
  this[W8y.r8H] = new box2d[W8y.p7T]();
  this[W8y.x8H] = new box2d[W8y.p7T]();
  this[W8y.x30] = new box2d[W8y.p7T](W8y.D8Q, W8y.u8Q);
};

goog[W8y.u80](box2d[W8y.d3T], box2d[W8y.k1r]);
box2d.b2PrismaticJointDef.prototype.localAnchorA = W8y.z6k;
box2d.b2PrismaticJointDef.prototype.localAnchorB = W8y.z6k;
box2d.b2PrismaticJointDef.prototype.localAxisA = W8y.z6k;
box2d.b2PrismaticJointDef.prototype.referenceAngle = W8y.u8Q;
box2d.b2PrismaticJointDef.prototype.enableLimit = W8y.G0T;
box2d.b2PrismaticJointDef.prototype.lowerTranslation = W8y.u8Q;
box2d.b2PrismaticJointDef.prototype.upperTranslation = W8y.u8Q;
box2d.b2PrismaticJointDef.prototype.enableMotor = W8y.G0T;
box2d.b2PrismaticJointDef.prototype.maxMotorForce = W8y.u8Q;
box2d.b2PrismaticJointDef.prototype.motorSpeed = W8y.u8Q;

box2d.b2PrismaticJointDef.prototype.Initialize = function (f, N, P, Z) {
  var W = "i2l";
  this[W8y.F6Q] = f;
  this[W8y.b5Q] = N;
  this[W8y.F6Q][W8y.y7M](P, this[W8y.r8H]);
  this[W8y.b5Q][W8y.y7M](P, this[W8y.x8H]);
  this[W8y.F6Q][W8y.r10](Z, this[W8y.x30]);
  this[W8y.D3T] = W8y[W](this[W8y.b5Q][W8y.x57](), this[W8y.F6Q][W8y.x57]());
};

box2d[W8y.X7M] = function (f) {
  goog[W8y.o66](this, f);
  this[W8y.V27] = f[W8y.r8H][W8y.l26]();
  this[W8y.G47] = f[W8y.x8H][W8y.l26]();
  this[W8y.f4k] = f[W8y.x30][W8y.l26]()[W8y.s1k]();
  this[W8y.W9T] = box2d[W8y.b5H](this[W8y.f4k], new box2d[W8y.p7T]());
  this[W8y.E00] = f[W8y.D3T];
  this[W8y.k1M] = new box2d[W8y.G9T](W8y.u8Q, W8y.u8Q, W8y.u8Q);
  this[W8y.u8M] = f[W8y.e9H];
  this[W8y.O70] = f[W8y.k7k];
  this[W8y.P56] = f[W8y.t2H];
  this[W8y.z7H] = f[W8y.Z4T];
  this[W8y.F87] = f[W8y.C4T];
  this[W8y.l4H] = f[W8y.E80];
  this[W8y.z3k] = new box2d[W8y.p7T]();
  this[W8y.A2k] = new box2d[W8y.p7T]();
  this[W8y.V0H] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.s97] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.G3r] = new box2d[W8y.t0M]();
  this[W8y.g26] = new box2d[W8y.t0M]();
  this[W8y.R26] = new box2d[W8y.T0H]();
  this[W8y.p97] = new box2d[W8y.x8M]();
  this[W8y.k67] = new box2d[W8y.x8M]();
  this[W8y.u17] = new box2d[W8y.p7T]();
  this[W8y.P86] = new box2d[W8y.p7T]();
  this[W8y.r8k] = new box2d[W8y.p7T]();
  this[W8y.u8k] = new box2d[W8y.p7T]();
};

goog[W8y.u80](box2d[W8y.X7M], box2d[W8y.N17]);
box2d.b2PrismaticJoint.prototype.m_localAnchorA = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_localAnchorB = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_localXAxisA = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_localYAxisA = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_referenceAngle = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_impulse = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_motorImpulse = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_lowerTranslation = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_upperTranslation = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_maxMotorForce = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_motorSpeed = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_enableLimit = W8y.G0T;
box2d.b2PrismaticJoint.prototype.m_enableMotor = W8y.G0T;
box2d.b2PrismaticJoint.prototype.m_limitState = box2d[W8y.L1H][W8y.c27];
box2d.b2PrismaticJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_localCenterA = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_localCenterB = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_invMassA = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_invMassB = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_invIA = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_invIB = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_axis = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_perp = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_s1 = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_s2 = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_a1 = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_a2 = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_K = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_K3 = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_K2 = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_motorMass = W8y.u8Q;
box2d.b2PrismaticJoint.prototype.m_qA = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_qB = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_lalcA = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_lalcB = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_rA = W8y.z6k;
box2d.b2PrismaticJoint.prototype.m_rB = W8y.z6k;

box2d.b2PrismaticJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "l0l",
      P = "W0l",
      Z = "Z0l",
      W = "U0l",
      l = "y0l",
      m = "F3l",
      C = "p3l",
      n = "L3l",
      k = "u3l",
      H = "d3l",
      i = "a3l",
      Q = "e3l",
      e = "i3l",
      j = "k3l",
      o = "C3l",
      S = "x3l",
      d = "m3l",
      u = "s3l",
      D = "Z3l",
      M = "U3l",
      y1 = "y3l",
      h = "z2l",
      E = "v2l",
      L = "M2l",
      w1 = "E2l",
      B = "a2l",
      N1 = "q2l";
  this[W8y.G0k] = this[W8y.l37][W8y.x5M];
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.z3k][W8y.k97](this[W8y.l37][W8y.i6k][W8y.O8Q]);
  this[W8y.A2k][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.j96] = this[W8y.l37][W8y.k86];
  this[W8y.V96] = this[W8y.v27][W8y.k86];
  this[W8y.q8M] = this[W8y.l37][W8y.M7H];
  this[W8y.E9M] = this[W8y.v27][W8y.M7H];
  var f1 = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      c1 = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      l1 = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      P1 = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      s1 = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      b1 = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      m1 = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      W1 = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      J1 = this[W8y.p97][W8y.h70](c1),
      C1 = this[W8y.k67][W8y.h70](b1);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  var x1 = box2d[W8y.x47](J1, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  var T1 = box2d[W8y.x47](C1, this[W8y.P86], this[W8y.u8k]),
      K1 = box2d[W8y.m3T](box2d[W8y.x8T](s1, f1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.x8T](T1, x1, box2d[W8y.p7T][W8y.l9M]), box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_d),
      V1 = this[W8y.j96],
      Q1 = this[W8y.V96],
      D1 = this[W8y.q8M],
      d1 = this[W8y.E9M];
  {
    box2d[W8y.x47](J1, this[W8y.f4k], this[W8y.V0H]);
    this[W8y.W0H] = box2d[W8y.t10](box2d[W8y.m3T](K1, x1, box2d[W8y.p7T][W8y.t7M]), this[W8y.V0H]);
    this[W8y.C7H] = box2d[W8y.t10](T1, this[W8y.V0H]);
    this[W8y.V9T] = V1 + Q1 + W8y[N1](D1, this[W8y.W0H], this[W8y.W0H]) + W8y[B](d1, this[W8y.C7H], this[W8y.C7H]);

    if (W8y[w1](this[W8y.V9T], 0)) {
      this[W8y.V9T] = W8y[L](1, this[W8y.V9T]);
    }
  }
  {
    box2d[W8y.x47](J1, this[W8y.W9T], this[W8y.s97]);
    this[W8y.O3k] = box2d[W8y.t10](box2d[W8y.m3T](K1, x1, box2d[W8y.p7T][W8y.t7M]), this[W8y.s97]);
    this[W8y.U3k] = box2d[W8y.t10](T1, this[W8y.s97]);
    this[W8y.G3r][W8y.Q57][W8y.T9T] = V1 + Q1 + W8y[E](D1, this[W8y.O3k], this[W8y.O3k]) + W8y[h](d1, this[W8y.U3k], this[W8y.U3k]);
    this[W8y.G3r][W8y.Q57][W8y.Z9T] = W8y[y1](D1, this[W8y.O3k]) + W8y[M](d1, this[W8y.U3k]);
    this[W8y.G3r][W8y.Q57][W8y.u7T] = W8y[D](D1, this[W8y.O3k], this[W8y.W0H]) + W8y[u](d1, this[W8y.U3k], this[W8y.C7H]);
    this[W8y.G3r][W8y.D57][W8y.T9T] = this[W8y.G3r][W8y.Q57][W8y.Z9T];
    this[W8y.G3r][W8y.D57][W8y.Z9T] = D1 + d1;

    if (W8y[d](this[W8y.G3r][W8y.D57][W8y.Z9T], 0)) {
      this[W8y.G3r][W8y.D57][W8y.Z9T] = 1;
    }

    this[W8y.G3r][W8y.D57][W8y.u7T] = W8y[S](D1, this[W8y.W0H]) + W8y[o](d1, this[W8y.C7H]);
    this[W8y.G3r][W8y.y1H][W8y.T9T] = this[W8y.G3r][W8y.Q57][W8y.u7T];
    this[W8y.G3r][W8y.y1H][W8y.Z9T] = this[W8y.G3r][W8y.D57][W8y.u7T];
    this[W8y.G3r][W8y.y1H][W8y.u7T] = V1 + Q1 + W8y[j](D1, this[W8y.W0H], this[W8y.W0H]) + W8y[e](d1, this[W8y.C7H], this[W8y.C7H]);
  }

  if (this[W8y.F87]) {
    var u1 = box2d[W8y.o27](this[W8y.V0H], K1);

    if (W8y[Q](box2d[W8y.t67](this[W8y.O70] - this[W8y.u8M]), 2 * box2d[W8y.Z8k])) {
      this[W8y.q46] = box2d[W8y.L1H][W8y.R1k];
    } else if (W8y[i](u1, this[W8y.u8M])) {
      if (W8y[H](this[W8y.q46], box2d[W8y.L1H][W8y.n0r])) {
        this[W8y.q46] = box2d[W8y.L1H][W8y.n0r];
        this[W8y.k1M][W8y.u7T] = 0;
      }
    } else if (W8y[k](u1, this[W8y.O70])) {
      if (W8y[n](this[W8y.q46], box2d[W8y.L1H][W8y.b4M])) {
        this[W8y.q46] = box2d[W8y.L1H][W8y.b4M];
        this[W8y.k1M][W8y.u7T] = 0;
      }
    } else {
      this[W8y.q46] = box2d[W8y.L1H][W8y.c27];
      this[W8y.k1M][W8y.u7T] = 0;
    }
  } else {
    this[W8y.q46] = box2d[W8y.L1H][W8y.c27];
    this[W8y.k1M][W8y.u7T] = 0;
  }

  if (W8y[C](this[W8y.l4H], false)) {
    this[W8y.X00] = 0;
  }

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.k1M][W8y.E40](f[W8y.D5H][W8y.k30]);
    this[W8y.X00] *= f[W8y.D5H][W8y.k30];
    var j1 = box2d[W8y.m3T](box2d[W8y.X26](this[W8y.k1M][W8y.T9T], this[W8y.s97], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.X26](this[W8y.X00] + this[W8y.k1M][W8y.u7T], this[W8y.V0H], box2d[W8y.p7T][W8y.l9M]), box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_P),
        G1 = W8y[m](this[W8y.k1M][W8y.T9T], this[W8y.O3k]) + this[W8y.k1M][W8y.Z9T] + W8y[l](this[W8y.X00] + this[W8y.k1M][W8y.u7T], this[W8y.W0H]),
        I1 = W8y[W](this[W8y.k1M][W8y.T9T], this[W8y.U3k]) + this[W8y.k1M][W8y.Z9T] + W8y[Z](this[W8y.X00] + this[W8y.k1M][W8y.u7T], this[W8y.C7H]);
    l1[W8y.I5M](V1, j1);
    P1 -= W8y[P](D1, G1);
    m1[W8y.a9k](Q1, j1);
    W1 += W8y[N](d1, I1);
  } else {
    this[W8y.k1M][W8y.j6k]();
    this[W8y.X00] = 0;
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = P1;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = W1;
};

box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_d = new box2d[W8y.p7T]();
box2d.b2PrismaticJoint.prototype.InitVelocityConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "X9l",
      P = "N9l",
      Z = "w9l",
      W = "A7l",
      l = "G7l",
      m = "v7l",
      C = "M7l",
      n = "E7l",
      k = "R7l",
      H = "I7l",
      i = "j7l",
      Q = "Q7l",
      e = "k7l",
      j = "C7l",
      o = "x7l",
      S = "m7l",
      d = "Y7l",
      u = "c7l",
      D = "P7l",
      M = "f7l",
      y1 = "t0l",
      h = "z0l",
      E = "B0l",
      L = "h0l",
      w1 = "D0l",
      B = "S0l",
      N1 = "o0l",
      f1 = "q0l",
      c1 = "i0l",
      l1 = "T0l",
      P1 = "O0l",
      s1 = "V0l",
      b1 = "g0l",
      m1 = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      W1 = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      J1 = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      C1 = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      x1 = this[W8y.j96],
      T1 = this[W8y.V96],
      K1 = this[W8y.q8M],
      V1 = this[W8y.E9M];

  if (this[W8y.l4H] && W8y[b1](this[W8y.q46], box2d[W8y.L1H][W8y.R1k])) {
    var Q1 = box2d[W8y.o27](this[W8y.V0H], box2d[W8y.x8T](J1, m1, box2d[W8y.p7T][W8y.t7M])) + W8y[s1](this[W8y.C7H], C1) - W8y[P1](this[W8y.W0H], W1),
        D1 = W8y[l1](this[W8y.V9T], this[W8y.z7H] - Q1),
        d1 = this[W8y.X00],
        u1 = W8y[c1](f[W8y.D5H][W8y.I5H], this[W8y.P56]);
    this[W8y.X00] = box2d[W8y.N06](this[W8y.X00] + D1, -u1, u1);
    D1 = W8y[f1](this[W8y.X00], d1);
    var j1 = box2d[W8y.X26](D1, this[W8y.V0H], box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P),
        G1 = W8y[N1](D1, this[W8y.W0H]),
        I1 = W8y[B](D1, this[W8y.C7H]);
    m1[W8y.I5M](x1, j1);
    W1 -= W8y[w1](K1, G1);
    J1[W8y.a9k](T1, j1);
    C1 += W8y[L](V1, I1);
  }

  var e1 = box2d[W8y.o27](this[W8y.s97], box2d[W8y.x8T](J1, m1, box2d[W8y.p7T][W8y.t7M])) + W8y[E](this[W8y.U3k], C1) - W8y[h](this[W8y.O3k], W1),
      S1 = W8y[y1](C1, W1);

  if (this[W8y.F87] && W8y[M](this[W8y.q46], box2d[W8y.L1H][W8y.c27])) {
    var B1 = box2d[W8y.o27](this[W8y.V0H], box2d[W8y.x8T](J1, m1, box2d[W8y.p7T][W8y.t7M])) + W8y[D](this[W8y.C7H], C1) - W8y[u](this[W8y.W0H], W1),
        a1 = box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f1.Copy(this[W8y.k1M]),
        F1 = this[W8y.G3r][W8y.y2M](-e1, -S1, -B1, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df3);
    this[W8y.k1M][W8y.t4H](F1);

    if (W8y[d](this[W8y.q46], box2d[W8y.L1H][W8y.n0r])) {
      this[W8y.k1M][W8y.u7T] = box2d[W8y.v30](this[W8y.k1M][W8y.u7T], 0);
    } else if (W8y[S](this[W8y.q46], box2d[W8y.L1H][W8y.b4M])) {
      this[W8y.k1M][W8y.u7T] = box2d[W8y.G60](this[W8y.k1M][W8y.u7T], 0);
    }

    var n4 = -e1 - W8y[o](this[W8y.k1M][W8y.u7T] - a1[W8y.u7T], this[W8y.G3r][W8y.y1H][W8y.T9T]),
        h1 = -S1 - W8y[j](this[W8y.k1M][W8y.u7T] - a1[W8y.u7T], this[W8y.G3r][W8y.y1H][W8y.Z9T]),
        t1 = this[W8y.G3r][W8y.u5T](n4, h1, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f2r);
    t1[W8y.T9T] += a1[W8y.T9T];
    t1[W8y.Z9T] += a1[W8y.Z9T];
    this[W8y.k1M][W8y.T9T] = t1[W8y.T9T];
    this[W8y.k1M][W8y.Z9T] = t1[W8y.Z9T];
    F1[W8y.T9T] = W8y[e](this[W8y.k1M][W8y.T9T], a1[W8y.T9T]);
    F1[W8y.Z9T] = W8y[Q](this[W8y.k1M][W8y.Z9T], a1[W8y.Z9T]);
    F1[W8y.u7T] = W8y[i](this[W8y.k1M][W8y.u7T], a1[W8y.u7T]);
    var j1 = box2d[W8y.m3T](box2d[W8y.X26](F1[W8y.T9T], this[W8y.s97], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.X26](F1[W8y.u7T], this[W8y.V0H], box2d[W8y.p7T][W8y.l9M]), box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P),
        G1 = W8y[H](F1[W8y.T9T], this[W8y.O3k]) + F1[W8y.Z9T] + W8y[k](F1[W8y.u7T], this[W8y.W0H]),
        I1 = W8y[n](F1[W8y.T9T], this[W8y.U3k]) + F1[W8y.Z9T] + W8y[C](F1[W8y.u7T], this[W8y.C7H]);
    m1[W8y.I5M](x1, j1);
    W1 -= W8y[m](K1, G1);
    J1[W8y.a9k](T1, j1);
    C1 += W8y[l](V1, I1);
  } else {
    var F1 = this[W8y.G3r][W8y.u5T](-e1, -S1, box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df2);
    this[W8y.k1M][W8y.T9T] += F1[W8y.T9T];
    this[W8y.k1M][W8y.Z9T] += F1[W8y.Z9T];
    var j1 = box2d[W8y.X26](F1[W8y.T9T], this[W8y.s97], box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P),
        G1 = W8y[W](F1[W8y.T9T], this[W8y.O3k]) + F1[W8y.Z9T],
        I1 = W8y[Z](F1[W8y.T9T], this[W8y.U3k]) + F1[W8y.Z9T];
    m1[W8y.I5M](x1, j1);
    W1 -= W8y[P](K1, G1);
    J1[W8y.a9k](T1, j1);
    C1 += W8y[N](V1, I1);
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = W1;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = C1;
};

box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_P = new box2d[W8y.p7T]();
box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f2r = new box2d[W8y.p7T]();
box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_f1 = new box2d[W8y.G9T]();
box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df3 = new box2d[W8y.G9T]();
box2d.b2PrismaticJoint.prototype.SolveVelocityConstraints.s_df2 = new box2d[W8y.p7T]();

box2d.b2PrismaticJoint.prototype.SolvePositionConstraints = function (f) {
  var N = "s6l",
      P = "X6l",
      Z = "N6l",
      W = "w6l",
      l = "A8l",
      m = "G8l",
      C = "v8l",
      n = "M8l",
      k = "E8l",
      H = "R8l",
      i = "I8l",
      Q = "r8l",
      e = "T8l",
      j = "C8l",
      o = "J8l",
      S = "b8l",
      d = "s8l",
      u = "X8l",
      D = "U8l",
      M = "t9l",
      y1 = "z9l",
      h = "B9l",
      E = "M9l",
      L = "d9l",
      w1 = "a9l",
      B = "q9l",
      N1 = "i9l",
      f1 = "T9l",
      c1 = "C9l",
      l1 = "x9l",
      P1 = "m9l",
      s1 = "s9l",
      b1 = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      m1 = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      W1 = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      J1 = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      C1 = this[W8y.p97][W8y.h70](m1),
      x1 = this[W8y.k67][W8y.h70](J1),
      T1 = this[W8y.j96],
      K1 = this[W8y.V96],
      V1 = this[W8y.q8M],
      Q1 = this[W8y.E9M],
      D1 = box2d[W8y.x47](C1, this[W8y.u17], this[W8y.r8k]),
      d1 = box2d[W8y.x47](x1, this[W8y.P86], this[W8y.u8k]),
      u1 = box2d[W8y.x8T](box2d[W8y.m3T](W1, d1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.m3T](b1, D1, box2d[W8y.p7T][W8y.l9M]), box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_d),
      j1 = box2d[W8y.x47](C1, this[W8y.f4k], this[W8y.V0H]),
      G1 = box2d[W8y.t10](box2d[W8y.m3T](u1, D1, box2d[W8y.p7T][W8y.t7M]), j1),
      I1 = box2d[W8y.t10](d1, j1),
      e1 = box2d[W8y.x47](C1, this[W8y.W9T], this[W8y.s97]),
      S1 = box2d[W8y.t10](box2d[W8y.m3T](u1, D1, box2d[W8y.p7T][W8y.t7M]), e1),
      B1 = box2d[W8y.t10](d1, e1),
      a1 = box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse,
      F1 = box2d[W8y.o27](e1, u1),
      n4 = W8y[s1](J1, m1, this[W8y.E00]),
      h1 = box2d[W8y.t67](F1),
      t1 = box2d[W8y.t67](n4),
      R4 = false,
      r4 = 0;

  if (this[W8y.F87]) {
    var w4 = box2d[W8y.o27](j1, u1);

    if (W8y[P1](box2d[W8y.t67](this[W8y.O70] - this[W8y.u8M]), 2 * box2d[W8y.Z8k])) {
      r4 = box2d[W8y.N06](w4, -box2d[W8y.d1r], box2d[W8y.d1r]);
      h1 = box2d[W8y.v30](h1, box2d[W8y.t67](w4));
      R4 = true;
    } else if (W8y[l1](w4, this[W8y.u8M])) {
      r4 = box2d[W8y.N06](W8y[c1](w4, this[W8y.u8M], box2d[W8y.Z8k]), -box2d[W8y.d1r], 0);
      h1 = box2d[W8y.v30](h1, W8y[f1](this[W8y.u8M], w4));
      R4 = true;
    } else if (W8y[N1](w4, this[W8y.O70])) {
      r4 = box2d[W8y.N06](W8y[B](w4, this[W8y.O70], box2d[W8y.Z8k]), 0, box2d[W8y.d1r]);
      h1 = box2d[W8y.v30](h1, W8y[w1](w4, this[W8y.O70]));
      R4 = true;
    }
  }

  if (R4) {
    var d4 = T1 + K1 + W8y[L](V1, S1, S1) + W8y[E](Q1, B1, B1),
        H4 = W8y[h](V1, S1) + W8y[y1](Q1, B1),
        M4 = W8y[M](V1, S1, G1) + W8y[D](Q1, B1, I1),
        k4 = V1 + Q1;

    if (W8y[u](k4, 0)) {
      k4 = 1;
    }

    var D4 = W8y[d](V1, G1) + W8y[S](Q1, I1),
        Y4 = T1 + K1 + W8y[o](V1, G1, G1) + W8y[j](Q1, I1, I1),
        W4 = this[W8y.g26];
    W4[W8y.Q57][W8y.H20](d4, H4, M4);
    W4[W8y.D57][W8y.H20](H4, k4, D4);
    W4[W8y.y1H][W8y.H20](M4, D4, Y4);
    a1 = W4[W8y.y2M](-F1, -n4, -r4, a1);
  } else {
    var d4 = T1 + K1 + W8y[e](V1, S1, S1) + W8y[Q](Q1, B1, B1),
        H4 = W8y[i](V1, S1) + W8y[H](Q1, B1),
        k4 = V1 + Q1;

    if (W8y[k](k4, 0)) {
      k4 = 1;
    }

    var A1 = this[W8y.R26];
    A1[W8y.Q57][W8y.y47](d4, H4);
    A1[W8y.D57][W8y.y47](H4, k4);
    var L4 = A1[W8y.Y3k](-F1, -n4, box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse1);
    a1[W8y.T9T] = L4[W8y.T9T];
    a1[W8y.Z9T] = L4[W8y.Z9T];
    a1[W8y.u7T] = 0;
  }

  var B4 = box2d[W8y.m3T](box2d[W8y.X26](a1[W8y.T9T], e1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.X26](a1[W8y.u7T], j1, box2d[W8y.p7T][W8y.l9M]), box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_P),
      G4 = W8y[n](a1[W8y.T9T], S1) + a1[W8y.Z9T] + W8y[C](a1[W8y.u7T], G1),
      P4 = W8y[m](a1[W8y.T9T], B1) + a1[W8y.Z9T] + W8y[l](a1[W8y.u7T], I1);
  b1[W8y.I5M](T1, B4);
  m1 -= W8y[W](V1, G4);
  W1[W8y.a9k](K1, B4);
  J1 += W8y[Z](Q1, P4);
  f[W8y.P1T][this[W8y.G0k]][W8y.U30] = m1;
  f[W8y.P1T][this[W8y.a0k]][W8y.U30] = J1;
  return W8y[P](h1, box2d[W8y.Z8k]) && W8y[N](t1, box2d[W8y.r5k]);
};

box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_d = new box2d[W8y.p7T]();
box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse = new box2d[W8y.G9T]();
;
box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_impulse1 = new box2d[W8y.p7T]();
;
box2d.b2PrismaticJoint.prototype.SolvePositionConstraints.s_P = new box2d[W8y.p7T]();
;

box2d.b2PrismaticJoint.prototype.GetAnchorA = function (f) {
  return this[W8y.l37][W8y.I00](this[W8y.V27], f);
};

box2d.b2PrismaticJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.I00](this[W8y.G47], f);
};

box2d.b2PrismaticJoint.prototype.GetReactionForce = function (f, N) {
  var P = "J6l",
      Z = "b6l";
  return N[W8y.y47](W8y[Z](f, this[W8y.k1M][W8y.T9T] * this[W8y.s97][W8y.T9T] + (this[W8y.X00] + this[W8y.k1M][W8y.u7T]) * this[W8y.V0H][W8y.T9T]), W8y[P](f, this[W8y.k1M][W8y.T9T] * this[W8y.s97][W8y.Z9T] + (this[W8y.X00] + this[W8y.k1M][W8y.u7T]) * this[W8y.V0H][W8y.Z9T]));
};

box2d.b2PrismaticJoint.prototype.GetReactionTorque = function (f) {
  var N = "n6l";
  return W8y[N](f, this[W8y.k1M][W8y.Z9T]);
};

box2d.b2PrismaticJoint.prototype.GetLocalAnchorA = function (f) {
  return f[W8y.k97](this[W8y.V27]);
};

box2d.b2PrismaticJoint.prototype.GetLocalAnchorB = function (f) {
  return f[W8y.k97](this[W8y.G47]);
};

box2d.b2PrismaticJoint.prototype.GetLocalAxisA = function (f) {
  return f[W8y.k97](this[W8y.f4k]);
};

box2d.b2PrismaticJoint.prototype.GetReferenceAngle = function () {
  return this[W8y.E00];
};

box2d.b2PrismaticJoint.prototype.GetJointTranslation = function () {
  var f = this[W8y.l37][W8y.I00](this[W8y.V27], box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pA),
      N = this[W8y.v27][W8y.I00](this[W8y.G47], box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pB),
      P = box2d[W8y.x8T](N, f, box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_d),
      Z = this[W8y.l37][W8y.S40](this[W8y.f4k], box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_axis),
      W = box2d[W8y.o27](P, Z);
  return W;
};

box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pA = new box2d[W8y.p7T]();
box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_pB = new box2d[W8y.p7T]();
box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_d = new box2d[W8y.p7T]();
box2d.b2PrismaticJoint.prototype.GetJointTranslation.s_axis = new box2d[W8y.p7T]();

box2d.b2PrismaticJoint.prototype.GetJointSpeed = function () {
  var f = this[W8y.l37],
      N = this[W8y.v27];
  box2d[W8y.x8T](this[W8y.V27], f[W8y.i6k][W8y.O8Q], this[W8y.u17]);
  var P = box2d[W8y.x47](f[W8y.Z4M][W8y.b50], this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], N[W8y.i6k][W8y.O8Q], this[W8y.P86]);
  var Z = box2d[W8y.x47](N[W8y.Z4M][W8y.b50], this[W8y.P86], this[W8y.u8k]),
      W = box2d[W8y.m3T](f[W8y.i6k][W8y.a30], P, box2d[W8y.p7T][W8y.t7M]),
      l = box2d[W8y.m3T](N[W8y.i6k][W8y.a30], Z, box2d[W8y.p7T][W8y.l9M]),
      m = box2d[W8y.x8T](l, W, box2d[W8y.p7T][W8y.H9M]),
      C = f[W8y.S40](this[W8y.f4k], this[W8y.V0H]),
      n = f[W8y.b3r],
      k = N[W8y.b3r],
      H = f[W8y.t77],
      i = N[W8y.t77],
      Q = box2d[W8y.o27](m, box2d[W8y.v0M](H, C, box2d[W8y.p7T][W8y.t7M])) + box2d[W8y.o27](C, box2d[W8y.x8T](box2d[W8y.S7T](k, i, Z, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](n, H, P, box2d[W8y.p7T][W8y.l9M]), box2d[W8y.p7T][W8y.t7M]));
  return Q;
};

box2d.b2PrismaticJoint.prototype.IsLimitEnabled = function () {
  return this[W8y.F87];
};

box2d.b2PrismaticJoint.prototype.EnableLimit = function (f) {
  var N = "K6l";

  if (W8y[N](f, this[W8y.F87])) {
    this[W8y.l37][W8y.U5H](W8y.f5k);
    this[W8y.v27][W8y.U5H](W8y.f5k);
    this[W8y.F87] = f;
    this[W8y.k1M][W8y.u7T] = W8y.u8Q;
  }
};

box2d.b2PrismaticJoint.prototype.GetLowerLimit = function () {
  return this[W8y.u8M];
};

box2d.b2PrismaticJoint.prototype.GetUpperLimit = function () {
  return this[W8y.O70];
};

box2d.b2PrismaticJoint.prototype.SetLimits = function (f, N) {
  var P = "r6l",
      Z = "H6l";

  if (W8y[Z](f, this[W8y.u8M]) || W8y[P](N, this[W8y.O70])) {
    this[W8y.l37][W8y.U5H](W8y.f5k);
    this[W8y.v27][W8y.U5H](W8y.f5k);
    this[W8y.u8M] = f;
    this[W8y.O70] = N;
    this[W8y.k1M][W8y.u7T] = W8y.u8Q;
  }
};

box2d.b2PrismaticJoint.prototype.IsMotorEnabled = function () {
  return this[W8y.l4H];
};

box2d.b2PrismaticJoint.prototype.EnableMotor = function (f) {
  this[W8y.l37][W8y.U5H](W8y.f5k);
  this[W8y.v27][W8y.U5H](W8y.f5k);
  this[W8y.l4H] = f;
};

box2d.b2PrismaticJoint.prototype.SetMotorSpeed = function (f) {
  this[W8y.l37][W8y.U5H](true);
  this[W8y.v27][W8y.U5H](true);
  this[W8y.z7H] = f;
};

box2d.b2PrismaticJoint.prototype.GetMotorSpeed = function () {
  return this[W8y.z7H];
};

box2d.b2PrismaticJoint.prototype.SetMaxMotorForce = function (f) {
  this[W8y.l37][W8y.U5H](W8y.f5k);
  this[W8y.v27][W8y.U5H](W8y.f5k);
  this[W8y.P56] = f;
};

box2d.b2PrismaticJoint.prototype.GetMaxMotorForce = function () {
  return this[W8y.P56];
};

box2d.b2PrismaticJoint.prototype.GetMotorForce = function (f) {
  var N = "e6l";
  return W8y[N](f, this[W8y.X00]);
};

box2d.b2PrismaticJoint.prototype.Dump = function () {
  var f = "  jd.maxMotorForce = %.15f;\n",
      N = "  jd.upperTranslation = %.15f;\n",
      P = "  jd.lowerTranslation = %.15f;\n",
      Z = "  jd.localAxisA.SetXY(%.15f, %.15f);\n",
      W = "  /*box2d.b2PrismaticJointDef*/ var jd = new box2d.b2PrismaticJointDef();\n";

  if (box2d[W8y.F2k]) {
    var l = this[W8y.l37][W8y.x5M],
        m = this[W8y.v27][W8y.x5M];
    box2d[W8y.R50](W);
    box2d[W8y.R50](W8y.Q67, l);
    box2d[W8y.R50](W8y.k3r, m);
    box2d[W8y.R50](W8y.i1r, this[W8y.N96] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W8y.v70, this[W8y.V27][W8y.T9T], this[W8y.V27][W8y.Z9T]);
    box2d[W8y.R50](W8y.y77, this[W8y.G47][W8y.T9T], this[W8y.G47][W8y.Z9T]);
    box2d[W8y.R50](Z, this[W8y.f4k][W8y.T9T], this[W8y.f4k][W8y.Z9T]);
    box2d[W8y.R50](W8y.A5H, this[W8y.E00]);
    box2d[W8y.R50](W8y.R8k, this[W8y.F87] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](P, this[W8y.u8M]);
    box2d[W8y.R50](N, this[W8y.O70]);
    box2d[W8y.R50](W8y.V1H, this[W8y.l4H] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W8y.j6M, this[W8y.z7H]);
    box2d[W8y.R50](f, this[W8y.P56]);
    box2d[W8y.R50](W8y.P6M, this[W8y.U56]);
  }
};

goog[W8y.U3T](W8y.E3T);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Joint');
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2RevoluteJoint');
goog[W8y.V20]('box2d.b2PrismaticJoint');

box2d[W8y.z00] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.a6T]);
};

goog[W8y.u80](box2d[W8y.z00], box2d[W8y.k1r]);
box2d.b2GearJointDef.prototype.joint1 = W8y.z6k;
box2d.b2GearJointDef.prototype.joint2 = W8y.z6k;
box2d.b2GearJointDef.prototype.ratio = W8y.D8Q;

box2d[W8y.U7k] = function (f) {
  var N = "c5l",
      P = "N5l",
      Z = "w5l",
      W = "F6l",
      l = "p6l",
      m = "L6l",
      C = "u6l",
      n = "d6l",
      k = "a6l";
  goog[W8y.o66](this, f);
  this[W8y.y4r] = f[W8y.U80];
  this[W8y.c4r] = f[W8y.R90];
  this[W8y.V27] = new box2d[W8y.p7T]();
  this[W8y.G47] = new box2d[W8y.p7T]();
  this[W8y.y37] = new box2d[W8y.p7T]();
  this[W8y.a27] = new box2d[W8y.p7T]();
  this[W8y.r90] = new box2d[W8y.p7T]();
  this[W8y.f80] = new box2d[W8y.p7T]();
  this[W8y.q8Q] = new box2d[W8y.p7T](), this[W8y.q20] = new box2d[W8y.p7T](), this[W8y.h20] = new box2d[W8y.p7T](), this[W8y.t40] = new box2d[W8y.p7T]();
  this[W8y.V1M] = new box2d[W8y.p7T](), this[W8y.g1M] = new box2d[W8y.p7T]();
  this[W8y.p97] = new box2d[W8y.x8M](), this[W8y.k67] = new box2d[W8y.x8M](), this[W8y.I67] = new box2d[W8y.x8M](), this[W8y.h87] = new box2d[W8y.x8M]();
  this[W8y.u17] = new box2d[W8y.p7T](), this[W8y.P86] = new box2d[W8y.p7T](), this[W8y.Y86] = new box2d[W8y.p7T](), this[W8y.h96] = new box2d[W8y.p7T]();
  this[W8y.f8H] = this[W8y.y4r][W8y.E1k]();
  this[W8y.B5H] = this[W8y.c4r][W8y.E1k]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[k](this[W8y.f8H], box2d[W8y.z6M][W8y.H5H]) || W8y[n](this[W8y.f8H], box2d[W8y.z6M][W8y.y5H]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[C](this[W8y.B5H], box2d[W8y.z6M][W8y.H5H]) || W8y[m](this[W8y.B5H], box2d[W8y.z6M][W8y.y5H]));
  }

  var H, i;
  this[W8y.k27] = this[W8y.y4r][W8y.r0M]();
  this[W8y.l37] = this[W8y.y4r][W8y.u0M]();
  var Q = this[W8y.l37][W8y.Z4M],
      e = this[W8y.l37][W8y.i6k][W8y.U30],
      j = this[W8y.k27][W8y.Z4M],
      o = this[W8y.k27][W8y.i6k][W8y.U30];

  if (W8y[l](this[W8y.f8H], box2d[W8y.z6M][W8y.H5H])) {
    var S = f[W8y.U80];
    this[W8y.y37][W8y.k97](S[W8y.V27]);
    this[W8y.V27][W8y.k97](S[W8y.G47]);
    this[W8y.V2r] = S[W8y.E00];
    this[W8y.r90][W8y.j6k]();
    H = W8y[W](e, o, this[W8y.V2r]);
  } else {
    var d = f[W8y.U80];
    this[W8y.y37][W8y.k97](d[W8y.V27]);
    this[W8y.V27][W8y.k97](d[W8y.G47]);
    this[W8y.V2r] = d[W8y.E00];
    this[W8y.r90][W8y.k97](d[W8y.f4k]);
    var u = this[W8y.y37],
        D = box2d[W8y.b0M](j[W8y.b50], box2d[W8y.m3T](box2d[W8y.x47](Q[W8y.b50], this[W8y.V27], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.x8T](Q[W8y.t60], j[W8y.t60], box2d[W8y.p7T][W8y.l9M]), box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.t7M]);
    H = box2d[W8y.o27](box2d[W8y.x8T](D, u, box2d[W8y.p7T][W8y.t7M]), this[W8y.r90]);
  }

  this[W8y.U27] = this[W8y.c4r][W8y.r0M]();
  this[W8y.v27] = this[W8y.c4r][W8y.u0M]();
  var M = this[W8y.v27][W8y.Z4M],
      y1 = this[W8y.v27][W8y.i6k][W8y.U30],
      h = this[W8y.U27][W8y.Z4M],
      E = this[W8y.U27][W8y.i6k][W8y.U30];

  if (W8y[Z](this[W8y.B5H], box2d[W8y.z6M][W8y.H5H])) {
    var S = f[W8y.R90];
    this[W8y.a27][W8y.k97](S[W8y.V27]);
    this[W8y.G47][W8y.k97](S[W8y.G47]);
    this[W8y.J1r] = S[W8y.E00];
    this[W8y.f80][W8y.j6k]();
    i = W8y[P](y1, E, this[W8y.J1r]);
  } else {
    var d = f[W8y.R90];
    this[W8y.a27][W8y.k97](d[W8y.V27]);
    this[W8y.G47][W8y.k97](d[W8y.G47]);
    this[W8y.J1r] = d[W8y.E00];
    this[W8y.f80][W8y.k97](d[W8y.f4k]);
    var L = this[W8y.a27],
        w1 = box2d[W8y.b0M](h[W8y.b50], box2d[W8y.m3T](box2d[W8y.x47](M[W8y.b50], this[W8y.G47], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.x8T](M[W8y.t60], h[W8y.t60], box2d[W8y.p7T][W8y.l9M]), box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.t7M]);
    i = box2d[W8y.o27](box2d[W8y.x8T](w1, L, box2d[W8y.p7T][W8y.t7M]), this[W8y.f80]);
  }

  this[W8y.V7k] = f[W8y.C96];
  this[W8y.u50] = H + W8y[N](this[W8y.V7k], i);
  this[W8y.k1M] = W8y.u8Q;
};

goog[W8y.u80](box2d[W8y.U7k], box2d[W8y.N17]);
box2d.b2GearJoint.prototype.m_joint1 = W8y.z6k;
box2d.b2GearJoint.prototype.m_joint2 = W8y.z6k;
box2d.b2GearJoint.prototype.m_typeA = box2d[W8y.z6M][W8y.p87];
box2d.b2GearJoint.prototype.m_typeB = box2d[W8y.z6M][W8y.p87];
box2d.b2GearJoint.prototype.m_bodyC = W8y.z6k;
box2d.b2GearJoint.prototype.m_bodyD = W8y.z6k;
box2d.b2GearJoint.prototype.m_localAnchorA = W8y.z6k;
box2d.b2GearJoint.prototype.m_localAnchorB = W8y.z6k;
box2d.b2GearJoint.prototype.m_localAnchorC = W8y.z6k;
box2d.b2GearJoint.prototype.m_localAnchorD = W8y.z6k;
box2d.b2GearJoint.prototype.m_localAxisC = W8y.z6k;
box2d.b2GearJoint.prototype.m_localAxisD = W8y.z6k;
box2d.b2GearJoint.prototype.m_referenceAngleA = W8y.u8Q;
box2d.b2GearJoint.prototype.m_referenceAngleB = W8y.u8Q;
box2d.b2GearJoint.prototype.m_constant = W8y.u8Q;
box2d.b2GearJoint.prototype.m_ratio = W8y.u8Q;
box2d.b2GearJoint.prototype.m_impulse = W8y.u8Q;
box2d.b2GearJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2GearJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2GearJoint.prototype.m_indexC = W8y.u8Q;
box2d.b2GearJoint.prototype.m_indexD = W8y.u8Q;
box2d.b2GearJoint.prototype.m_lcA = W8y.z6k;
box2d.b2GearJoint.prototype.m_lcB = W8y.z6k;
box2d.b2GearJoint.prototype.m_lcC = W8y.z6k;
box2d.b2GearJoint.prototype.m_lcD = W8y.z6k;
box2d.b2GearJoint.prototype.m_mA = W8y.u8Q;
box2d.b2GearJoint.prototype.m_mB = W8y.u8Q;
box2d.b2GearJoint.prototype.m_mC = W8y.u8Q;
box2d.b2GearJoint.prototype.m_mD = W8y.u8Q;
box2d.b2GearJoint.prototype.m_iA = W8y.u8Q;
box2d.b2GearJoint.prototype.m_iB = W8y.u8Q;
box2d.b2GearJoint.prototype.m_iC = W8y.u8Q;
box2d.b2GearJoint.prototype.m_iD = W8y.u8Q;
box2d.b2GearJoint.prototype.m_JvAC = W8y.z6k;
box2d.b2GearJoint.prototype.m_JvBD = W8y.z6k;
box2d.b2GearJoint.prototype.m_JwA = W8y.u8Q;
box2d.b2GearJoint.prototype.m_JwB = W8y.u8Q;
box2d.b2GearJoint.prototype.m_JwC = W8y.u8Q;
box2d.b2GearJoint.prototype.m_JwD = W8y.u8Q;
box2d.b2GearJoint.prototype.m_mass = W8y.u8Q;
box2d.b2GearJoint.prototype.m_qA = W8y.z6k;
box2d.b2GearJoint.prototype.m_qB = W8y.z6k;
box2d.b2GearJoint.prototype.m_qC = W8y.z6k;
box2d.b2GearJoint.prototype.m_qD = W8y.z6k;
box2d.b2GearJoint.prototype.m_lalcA = W8y.z6k;
box2d.b2GearJoint.prototype.m_lalcB = W8y.z6k;
box2d.b2GearJoint.prototype.m_lalcC = W8y.z6k;
box2d.b2GearJoint.prototype.m_lalcD = W8y.z6k;

box2d.b2GearJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "H1G",
      P = "K1G",
      Z = "V1G",
      W = "g1G",
      l = "Y1G",
      m = "c1G",
      C = "N1G",
      n = "w1G",
      k = "A5l",
      H = "G5l",
      i = "L5l",
      Q = "D5l",
      e = "R5l",
      j = "I5l",
      o = "j5l",
      S = "H5l",
      d = "K5l",
      u = "V5l",
      D = "m5l",
      M = "Y5l";
  this[W8y.G0k] = this[W8y.l37][W8y.x5M];
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.S7k] = this[W8y.k27][W8y.x5M];
  this[W8y.x7k] = this[W8y.U27][W8y.x5M];
  this[W8y.q8Q][W8y.k97](this[W8y.l37][W8y.i6k][W8y.O8Q]);
  this[W8y.q20][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.h20][W8y.k97](this[W8y.k27][W8y.i6k][W8y.O8Q]);
  this[W8y.t40][W8y.k97](this[W8y.U27][W8y.i6k][W8y.O8Q]);
  this[W8y.g30] = this[W8y.l37][W8y.k86];
  this[W8y.m00] = this[W8y.v27][W8y.k86];
  this[W8y.f00] = this[W8y.k27][W8y.k86];
  this[W8y.u00] = this[W8y.U27][W8y.k86];
  this[W8y.c8k] = this[W8y.l37][W8y.M7H];
  this[W8y.h9k] = this[W8y.v27][W8y.M7H];
  this[W8y.I9k] = this[W8y.k27][W8y.M7H];
  this[W8y.b9k] = this[W8y.U27][W8y.M7H];
  var y1 = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      h = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      E = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      L = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      w1 = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      B = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      N1 = f[W8y.P1T][this[W8y.S7k]][W8y.U30],
      f1 = f[W8y.S37][this[W8y.S7k]][W8y.N8T],
      c1 = f[W8y.S37][this[W8y.S7k]][W8y.M9T],
      l1 = f[W8y.P1T][this[W8y.x7k]][W8y.U30],
      P1 = f[W8y.S37][this[W8y.x7k]][W8y.N8T],
      s1 = f[W8y.S37][this[W8y.x7k]][W8y.M9T],
      b1 = this[W8y.p97][W8y.h70](y1),
      m1 = this[W8y.k67][W8y.h70](L),
      W1 = this[W8y.I67][W8y.h70](N1),
      J1 = this[W8y.h87][W8y.h70](l1);
  this[W8y.Z7T] = 0;

  if (W8y[M](this[W8y.f8H], box2d[W8y.z6M][W8y.H5H])) {
    this[W8y.V1M][W8y.j6k]();
    this[W8y.k9H] = 1;
    this[W8y.P6H] = 1;
    this[W8y.Z7T] += this[W8y.c8k] + this[W8y.I9k];
  } else {
    var C1 = box2d[W8y.x47](W1, this[W8y.r90], box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u);
    box2d[W8y.x8T](this[W8y.y37], this[W8y.h20], this[W8y.Y86]);
    var x1 = box2d[W8y.x47](W1, this[W8y.Y86], box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rC);
    box2d[W8y.x8T](this[W8y.V27], this[W8y.q8Q], this[W8y.u17]);
    var T1 = box2d[W8y.x47](b1, this[W8y.u17], box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rA);
    this[W8y.V1M][W8y.k97](C1);
    this[W8y.P6H] = box2d[W8y.t10](x1, C1);
    this[W8y.k9H] = box2d[W8y.t10](T1, C1);
    this[W8y.Z7T] += this[W8y.f00] + this[W8y.g30] + W8y[D](this[W8y.I9k], this[W8y.P6H], this[W8y.P6H]) + W8y[u](this[W8y.c8k], this[W8y.k9H], this[W8y.k9H]);
  }

  if (W8y[d](this[W8y.B5H], box2d[W8y.z6M][W8y.H5H])) {
    this[W8y.g1M][W8y.j6k]();
    this[W8y.B8H] = this[W8y.V7k];
    this[W8y.s6H] = this[W8y.V7k];
    this[W8y.Z7T] += W8y[S](this[W8y.V7k], this[W8y.V7k], this[W8y.h9k] + this[W8y.b9k]);
  } else {
    var C1 = box2d[W8y.x47](J1, this[W8y.f80], box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u);
    box2d[W8y.x8T](this[W8y.a27], this[W8y.t40], this[W8y.h96]);
    var K1 = box2d[W8y.x47](J1, this[W8y.h96], box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rD);
    box2d[W8y.x8T](this[W8y.G47], this[W8y.q20], this[W8y.P86]);
    var V1 = box2d[W8y.x47](m1, this[W8y.P86], box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rB);
    box2d[W8y.X26](this[W8y.V7k], C1, this[W8y.g1M]);
    this[W8y.s6H] = W8y[o](this[W8y.V7k], box2d[W8y.t10](K1, C1));
    this[W8y.B8H] = W8y[j](this[W8y.V7k], box2d[W8y.t10](V1, C1));
    this[W8y.Z7T] += W8y[e](this[W8y.V7k], this[W8y.V7k], this[W8y.u00] + this[W8y.m00]) + W8y[Q](this[W8y.b9k], this[W8y.s6H], this[W8y.s6H]) + W8y[i](this[W8y.h9k], this[W8y.B8H], this[W8y.B8H]);
  }

  this[W8y.Z7T] = W8y[H](this[W8y.Z7T], 0) ? W8y[k](1, this[W8y.Z7T]) : 0;

  if (f[W8y.D5H][W8y.W6T]) {
    h[W8y.a9k](W8y[n](this[W8y.g30], this[W8y.k1M]), this[W8y.V1M]);
    E += W8y[C](this[W8y.c8k], this[W8y.k1M], this[W8y.k9H]);
    w1[W8y.a9k](W8y[m](this[W8y.m00], this[W8y.k1M]), this[W8y.g1M]);
    B += W8y[l](this[W8y.h9k], this[W8y.k1M], this[W8y.B8H]);
    f1[W8y.I5M](W8y[W](this[W8y.f00], this[W8y.k1M]), this[W8y.V1M]);
    c1 -= W8y[Z](this[W8y.I9k], this[W8y.k1M], this[W8y.P6H]);
    P1[W8y.I5M](W8y[P](this[W8y.u00], this[W8y.k1M]), this[W8y.g1M]);
    s1 -= W8y[N](this[W8y.b9k], this[W8y.k1M], this[W8y.s6H]);
  } else {
    this[W8y.k1M] = 0;
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = E;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = B;
  f[W8y.S37][this[W8y.S7k]][W8y.M9T] = c1;
  f[W8y.S37][this[W8y.x7k]][W8y.M9T] = s1;
};

box2d.b2GearJoint.prototype.InitVelocityConstraints.s_u = new box2d[W8y.p7T]();
box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rA = new box2d[W8y.p7T]();
box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rB = new box2d[W8y.p7T]();
box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rC = new box2d[W8y.p7T]();
box2d.b2GearJoint.prototype.InitVelocityConstraints.s_rD = new box2d[W8y.p7T]();

box2d.b2GearJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "X4G",
      P = "N4G",
      Z = "y4G",
      W = "F1G",
      l = "B1G",
      m = "h1G",
      C = "E1G",
      n = "R1G",
      k = "I1G",
      H = "j1G",
      i = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      Q = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      e = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      j = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      o = f[W8y.S37][this[W8y.S7k]][W8y.N8T],
      S = f[W8y.S37][this[W8y.S7k]][W8y.M9T],
      d = f[W8y.S37][this[W8y.x7k]][W8y.N8T],
      u = f[W8y.S37][this[W8y.x7k]][W8y.M9T],
      D = box2d[W8y.o27](this[W8y.V1M], box2d[W8y.x8T](i, o, box2d[W8y.p7T][W8y.t7M])) + box2d[W8y.o27](this[W8y.g1M], box2d[W8y.x8T](e, d, box2d[W8y.p7T][W8y.t7M]));
  D += W8y[H](this[W8y.k9H] * Q, this[W8y.P6H] * S) + W8y[k](this[W8y.B8H] * j, this[W8y.s6H] * u);
  var M = -this[W8y.Z7T] * D;
  this[W8y.k1M] += M;
  i[W8y.a9k](W8y[n](this[W8y.g30], M), this[W8y.V1M]);
  Q += W8y[C](this[W8y.c8k], M, this[W8y.k9H]);
  e[W8y.a9k](W8y[m](this[W8y.m00], M), this[W8y.g1M]);
  j += W8y[l](this[W8y.h9k], M, this[W8y.B8H]);
  o[W8y.I5M](W8y[W](this[W8y.f00], M), this[W8y.V1M]);
  S -= W8y[Z](this[W8y.I9k], M, this[W8y.P6H]);
  d[W8y.I5M](W8y[P](this[W8y.u00], M), this[W8y.g1M]);
  u -= W8y[N](this[W8y.b9k], M, this[W8y.s6H]);
  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = Q;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = j;
  f[W8y.S37][this[W8y.S7k]][W8y.M9T] = S;
  f[W8y.S37][this[W8y.x7k]][W8y.M9T] = u;
};

box2d.b2GearJoint.prototype.SolvePositionConstraints = function (f) {
  var N = "d2G",
      P = "o2G",
      Z = "q2G",
      W = "Q2G",
      l = "k2G",
      m = "n2G",
      C = "J2G",
      n = "l2G",
      k = "W2G",
      H = "Z2G",
      i = "U2G",
      Q = "t4G",
      e = "G4G",
      j = "L4G",
      o = "u4G",
      S = "d4G",
      d = "o4G",
      u = "j4G",
      D = "Q4G",
      M = "K4G",
      y1 = "V4G",
      h = "m4G",
      E = "Y4G",
      L = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      w1 = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      B = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      N1 = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      f1 = f[W8y.P1T][this[W8y.S7k]][W8y.a30],
      c1 = f[W8y.P1T][this[W8y.S7k]][W8y.U30],
      l1 = f[W8y.P1T][this[W8y.x7k]][W8y.a30],
      P1 = f[W8y.P1T][this[W8y.x7k]][W8y.U30],
      s1 = this[W8y.p97][W8y.h70](w1),
      b1 = this[W8y.k67][W8y.h70](N1),
      m1 = this[W8y.I67][W8y.h70](c1),
      W1 = this[W8y.h87][W8y.h70](P1),
      J1 = 0,
      C1,
      x1,
      T1 = this[W8y.V1M],
      K1 = this[W8y.g1M],
      V1,
      Q1,
      D1,
      d1,
      u1 = 0;

  if (W8y[E](this[W8y.f8H], box2d[W8y.z6M][W8y.H5H])) {
    T1[W8y.j6k]();
    V1 = 1;
    D1 = 1;
    u1 += this[W8y.c8k] + this[W8y.I9k];
    C1 = W8y[h](w1, c1, this[W8y.V2r]);
  } else {
    var j1 = box2d[W8y.x47](m1, this[W8y.r90], box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u),
        G1 = box2d[W8y.x47](m1, this[W8y.Y86], box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rC),
        I1 = box2d[W8y.x47](s1, this[W8y.u17], box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rA);
    T1[W8y.k97](j1);
    D1 = box2d[W8y.t10](G1, j1);
    V1 = box2d[W8y.t10](I1, j1);
    u1 += this[W8y.f00] + this[W8y.g30] + W8y[y1](this[W8y.I9k], D1, D1) + W8y[M](this[W8y.c8k], V1, V1);
    var e1 = this[W8y.Y86],
        S1 = box2d[W8y.b0M](m1, box2d[W8y.m3T](I1, box2d[W8y.x8T](L, f1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.t7M]);
    C1 = box2d[W8y.o27](box2d[W8y.x8T](S1, e1, box2d[W8y.p7T][W8y.t7M]), this[W8y.r90]);
  }

  if (W8y[D](this[W8y.B5H], box2d[W8y.z6M][W8y.H5H])) {
    K1[W8y.j6k]();
    Q1 = this[W8y.V7k];
    d1 = this[W8y.V7k];
    u1 += W8y[u](this[W8y.V7k], this[W8y.V7k], this[W8y.h9k] + this[W8y.b9k]);
    x1 = W8y[d](N1, P1, this[W8y.J1r]);
  } else {
    var j1 = box2d[W8y.x47](W1, this[W8y.f80], box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u),
        B1 = box2d[W8y.x47](W1, this[W8y.h96], box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rD),
        a1 = box2d[W8y.x47](b1, this[W8y.P86], box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rB);
    box2d[W8y.X26](this[W8y.V7k], j1, K1);
    d1 = W8y[S](this[W8y.V7k], box2d[W8y.t10](B1, j1));
    Q1 = W8y[o](this[W8y.V7k], box2d[W8y.t10](a1, j1));
    u1 += W8y[j](this[W8y.V7k], this[W8y.V7k], this[W8y.u00] + this[W8y.m00]) + W8y[e](this[W8y.b9k], d1, d1) + W8y[Q](this[W8y.h9k], Q1, Q1);
    var F1 = this[W8y.h96],
        n4 = box2d[W8y.b0M](W1, box2d[W8y.m3T](a1, box2d[W8y.x8T](B, l1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.t7M]);
    x1 = box2d[W8y.o27](box2d[W8y.x8T](n4, F1, box2d[W8y.p7T][W8y.t7M]), this[W8y.f80]);
  }

  var h1 = W8y[i](C1 + this[W8y.V7k] * x1, this[W8y.u50]),
      t1 = 0;

  if (W8y[H](u1, 0)) {
    t1 = -h1 / u1;
  }

  L[W8y.a9k](W8y[k](this[W8y.g30], t1), T1);
  w1 += W8y[n](this[W8y.c8k], t1, V1);
  B[W8y.a9k](W8y[C](this[W8y.m00], t1), K1);
  N1 += W8y[m](this[W8y.h9k], t1, Q1);
  f1[W8y.I5M](W8y[l](this[W8y.f00], t1), T1);
  c1 -= W8y[W](this[W8y.I9k], t1, D1);
  l1[W8y.I5M](W8y[Z](this[W8y.u00], t1), K1);
  P1 -= W8y[P](this[W8y.b9k], t1, d1);
  f[W8y.P1T][this[W8y.G0k]][W8y.U30] = w1;
  f[W8y.P1T][this[W8y.a0k]][W8y.U30] = N1;
  f[W8y.P1T][this[W8y.S7k]][W8y.U30] = c1;
  f[W8y.P1T][this[W8y.x7k]][W8y.U30] = P1;
  return W8y[N](J1, box2d[W8y.Z8k]);
};

box2d.b2GearJoint.prototype.SolvePositionConstraints.s_u = new box2d[W8y.p7T]();
box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rA = new box2d[W8y.p7T]();
box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rB = new box2d[W8y.p7T]();
box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rC = new box2d[W8y.p7T]();
box2d.b2GearJoint.prototype.SolvePositionConstraints.s_rD = new box2d[W8y.p7T]();

box2d.b2GearJoint.prototype.GetAnchorA = function (f) {
  return this[W8y.l37][W8y.I00](this[W8y.V27], f);
};

box2d.b2GearJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.I00](this[W8y.G47], f);
};

box2d.b2GearJoint.prototype.GetReactionForce = function (f, N) {
  var P = "u2G";
  return box2d[W8y.X26](W8y[P](f, this[W8y.k1M]), this[W8y.V1M], N);
};

box2d.b2GearJoint.prototype.GetReactionTorque = function (f) {
  var N = "L2G";
  return W8y[N](f, this[W8y.k1M], this[W8y.k9H]);
};

box2d.b2GearJoint.prototype.GetJoint1 = function () {
  return this[W8y.y4r];
};

box2d.b2GearJoint.prototype.GetJoint2 = function () {
  return this[W8y.c4r];
};

box2d.b2GearJoint.prototype.GetRatio = function () {
  return this[W8y.V7k];
};

box2d.b2GearJoint.prototype.SetRatio = function (f) {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f));
  }

  this[W8y.V7k] = f;
};

box2d.b2GearJoint.prototype.Dump = function () {
  var f = "  jd.joint2 = joints[%d];\n",
      N = "  jd.joint1 = joints[%d];\n",
      P = "  /*box2d.b2GearJointDef*/ var jd = new box2d.b2GearJointDef();\n";

  if (box2d[W8y.F2k]) {
    var Z = this[W8y.l37][W8y.x5M],
        W = this[W8y.v27][W8y.x5M],
        l = this[W8y.y4r][W8y.U56],
        m = this[W8y.c4r][W8y.U56];
    box2d[W8y.R50](P);
    box2d[W8y.R50](W8y.Q67, Z);
    box2d[W8y.R50](W8y.k3r, W);
    box2d[W8y.R50](W8y.i1r, this[W8y.N96] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](N, l);
    box2d[W8y.R50](f, m);
    box2d[W8y.R50](W8y.t3M, this[W8y.V7k]);
    box2d[W8y.R50](W8y.P6M, this[W8y.U56]);
  }
};

goog[W8y.U3T](W8y.W00);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.E4H] = function () {
  this[W8y.o1T] = box2d[W8y.p7T][W8y.N1r](W8y.d8Q);
};

box2d.b2DistanceProxy.prototype.m_buffer = W8y.z6k;
box2d.b2DistanceProxy.prototype.m_vertices = W8y.z6k;
box2d.b2DistanceProxy.prototype.m_count = W8y.u8Q;
box2d.b2DistanceProxy.prototype.m_radius = W8y.u8Q;

box2d.b2DistanceProxy.prototype.Reset = function () {
  this[W8y.N4k] = W8y.z6k;
  this[W8y.o9k] = W8y.u8Q;
  this[W8y.o4T] = W8y.u8Q;
  return this;
};

box2d.b2DistanceProxy.prototype.SetShape = function (f, N) {
  var P = "SetupDistanceProxy";
  f[P](this, N);
};

box2d.b2DistanceProxy.prototype.GetSupport = function (f) {
  var N = "A2G",
      P = "G2G",
      Z = W8y.u8Q,
      W = box2d[W8y.o27](this[W8y.N4k][W8y.u8Q], f);

  for (var l = W8y.D8Q; W8y[P](l, this[W8y.o9k]); ++l) {
    var m = box2d[W8y.o27](this[W8y.N4k][l], f);

    if (W8y[N](m, W)) {
      Z = l;
      W = m;
    }
  }

  return Z;
};

box2d.b2DistanceProxy.prototype.GetSupportVertex = function (f, N) {
  var P = "N3G",
      Z = "w3G",
      W = W8y.u8Q,
      l = box2d[W8y.o27](this[W8y.N4k][W8y.u8Q], f);

  for (var m = W8y.D8Q; W8y[Z](m, this[W8y.o9k]); ++m) {
    var C = box2d[W8y.o27](this[W8y.N4k][m], f);

    if (W8y[P](C, l)) {
      W = m;
      l = C;
    }
  }

  return N[W8y.k97](this[W8y.N4k][W]);
};

box2d.b2DistanceProxy.prototype.GetVertexCount = function () {
  return this[W8y.o9k];
};

box2d.b2DistanceProxy.prototype.GetVertex = function (f) {
  var N = "s3G",
      P = "X3G";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[P](W8y.u8Q, f) && W8y[N](f, this[W8y.o9k]));
  }

  return this[W8y.N4k][f];
};

box2d[W8y.n8k] = function () {
  this[W8y.K30] = box2d[W8y.D3r](W8y.S8Q);
  this[W8y.L40] = box2d[W8y.D3r](W8y.S8Q);
};

box2d.b2SimplexCache.prototype.metric = W8y.u8Q;
box2d.b2SimplexCache.prototype.count = W8y.u8Q;
box2d.b2SimplexCache.prototype.indexA = W8y.z6k;
box2d.b2SimplexCache.prototype.indexB = W8y.z6k;

box2d.b2SimplexCache.prototype.Reset = function () {
  this[W8y.H4M] = W8y.u8Q;
  this[W8y.S5k] = W8y.u8Q;
  return this;
};

box2d[W8y.x4H] = function () {
  this[W8y.w4T] = new box2d[W8y.E4H]();
  this[W8y.i4T] = new box2d[W8y.E4H]();
  this[W8y.D77] = new box2d[W8y.P70]();
  this[W8y.U97] = new box2d[W8y.P70]();
};

box2d.b2DistanceInput.prototype.proxyA = W8y.z6k;
box2d.b2DistanceInput.prototype.proxyB = W8y.z6k;
box2d.b2DistanceInput.prototype.transformA = W8y.z6k;
box2d.b2DistanceInput.prototype.transformB = W8y.z6k;
box2d.b2DistanceInput.prototype.useRadii = W8y.G0T;

box2d.b2DistanceInput.prototype.Reset = function () {
  this[W8y.w4T][W8y.w6M]();
  this[W8y.i4T][W8y.w6M]();
  this[W8y.D77][W8y.G0H]();
  this[W8y.U97][W8y.G0H]();
  this[W8y.W40] = W8y.G0T;
  return this;
};

box2d[W8y.h0M] = function () {
  this[W8y.q2k] = new box2d[W8y.p7T]();
  this[W8y.T3k] = new box2d[W8y.p7T]();
};

box2d.b2DistanceOutput.prototype.pointA = W8y.z6k;
box2d.b2DistanceOutput.prototype.pointB = W8y.z6k;
box2d.b2DistanceOutput.prototype.distance = W8y.u8Q;
box2d.b2DistanceOutput.prototype.iterations = W8y.u8Q;

box2d.b2DistanceOutput.prototype.Reset = function () {
  this[W8y.q2k][W8y.j6k]();
  this[W8y.T3k][W8y.j6k]();
  this[W8y.S60] = W8y.u8Q;
  this[W8y.Y6M] = W8y.u8Q;
  return this;
};

W8y[W8y.L4T](W8y.u8Q);
W8y[W8y.c46](W8y.u8Q);
W8y[W8y.p1k](W8y.u8Q);

box2d[W8y.M56] = function () {
  this[W8y.d76] = new box2d[W8y.p7T]();
  this[W8y.X96] = new box2d[W8y.p7T]();
  this[W8y.M9T] = new box2d[W8y.p7T]();
};

box2d.b2SimplexVertex.prototype.wA = W8y.z6k;
box2d.b2SimplexVertex.prototype.wB = W8y.z6k;
box2d.b2SimplexVertex.prototype.w = W8y.z6k;
box2d.b2SimplexVertex.prototype.a = W8y.u8Q;
box2d.b2SimplexVertex.prototype.indexA = W8y.u8Q;
box2d.b2SimplexVertex.prototype.indexB = W8y.u8Q;

box2d.b2SimplexVertex.prototype.Copy = function (f) {
  this[W8y.d76][W8y.k97](f[W8y.d76]);
  this[W8y.X96][W8y.k97](f[W8y.X96]);
  this[W8y.M9T][W8y.k97](f[W8y.M9T]);
  this[W8y.U30] = f[W8y.U30];
  this[W8y.K30] = f[W8y.K30];
  this[W8y.L40] = f[W8y.L40];
  return this;
};

box2d[W8y.Z47] = function () {
  this[W8y.a8Q] = new box2d[W8y.M56]();
  this[W8y.n8Q] = new box2d[W8y.M56]();
  this[W8y.B5Q] = new box2d[W8y.M56]();
  this[W8y.N4k] = new Array(W8y.S8Q);
  this[W8y.N4k][W8y.u8Q] = this[W8y.a8Q];
  this[W8y.N4k][W8y.D8Q] = this[W8y.n8Q];
  this[W8y.N4k][W8y.d8Q] = this[W8y.B5Q];
};

box2d.b2Simplex.prototype.m_v1 = W8y.z6k;
box2d.b2Simplex.prototype.m_v2 = W8y.z6k;
box2d.b2Simplex.prototype.m_v3 = W8y.z6k;
box2d.b2Simplex.prototype.m_vertices = W8y.z6k;
box2d.b2Simplex.prototype.m_count = W8y.u8Q;

box2d.b2Simplex.prototype.ReadCache = function (f, N, P, Z, W) {
  var l = "a3G",
      m = "e3G",
      C = "r3G",
      n = "H3G",
      k = "K3G",
      H = "n3G",
      i = "J3G",
      Q = "b3G";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[Q](W8y.u8Q, f[W8y.S5k]) && W8y[i](f[W8y.S5k], W8y.S8Q));
  }

  this[W8y.o9k] = f[W8y.S5k];
  var e = this[W8y.N4k];

  for (var j = W8y.u8Q; W8y[H](j, this[W8y.o9k]); ++j) {
    var o = e[j];
    o[W8y.K30] = f[W8y.K30][j];
    o[W8y.L40] = f[W8y.L40][j];
    var S = N[W8y.C8k](o[W8y.K30]),
        d = Z[W8y.C8k](o[W8y.L40]);
    box2d[W8y.o10](P, S, o[W8y.d76]);
    box2d[W8y.o10](W, d, o[W8y.X96]);
    box2d[W8y.x8T](o[W8y.X96], o[W8y.d76], o[W8y.M9T]);
    o[W8y.U30] = W8y.u8Q;
  }

  if (W8y[k](this[W8y.o9k], W8y.D8Q)) {
    var u = f[W8y.H4M],
        D = this[W8y.A2H]();

    if (W8y[n](D, W8y.T3H * u) || W8y[C](W8y.d8Q * u, D) || W8y[m](D, box2d[W8y.F5k])) {
      this[W8y.o9k] = W8y.u8Q;
    }
  }

  if (W8y[l](this[W8y.o9k], W8y.u8Q)) {
    var o = e[W8y.u8Q];
    o[W8y.K30] = W8y.u8Q;
    o[W8y.L40] = W8y.u8Q;
    var S = N[W8y.C8k](W8y.u8Q),
        d = Z[W8y.C8k](W8y.u8Q);
    box2d[W8y.o10](P, S, o[W8y.d76]);
    box2d[W8y.o10](W, d, o[W8y.X96]);
    box2d[W8y.x8T](o[W8y.X96], o[W8y.d76], o[W8y.M9T]);
    o[W8y.U30] = W8y.D8Q;
    this[W8y.o9k] = W8y.D8Q;
  }
};

box2d.b2Simplex.prototype.WriteCache = function (f) {
  var N = "d3G";
  f[W8y.H4M] = this[W8y.A2H]();
  f[W8y.S5k] = this[W8y.o9k];
  var P = this[W8y.N4k];

  for (var Z = W8y.u8Q; W8y[N](Z, this[W8y.o9k]); ++Z) {
    f[W8y.K30][Z] = P[Z][W8y.K30];
    f[W8y.L40][Z] = P[Z][W8y.L40];
  }
};

box2d.b2Simplex.prototype.GetSearchDirection = function (f) {
  var N = "u3G";

  switch (this[W8y.o9k]) {
    case W8y.D8Q:
      return box2d[W8y.F7M](this[W8y.a8Q][W8y.M9T], f);

    case W8y.d8Q:
      {
        var P = box2d[W8y.x8T](this[W8y.n8Q][W8y.M9T], this[W8y.a8Q][W8y.M9T], f),
            Z = box2d[W8y.t10](P, box2d[W8y.F7M](this[W8y.a8Q][W8y.M9T], box2d[W8y.p7T][W8y.t7M]));

        if (W8y[N](Z, W8y.u8Q)) {
          return box2d[W8y.b5H](P, f);
        } else {
          return box2d[W8y.T67](P, f);
        }
      }

    default:
      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y.G0T);
      }

      return f[W8y.j6k]();
  }
};

box2d.b2Simplex.prototype.GetClosestPoint = function (f) {
  var N = "y0G",
      P = "F3G",
      Z = "p3G",
      W = "L3G";

  switch (this[W8y.o9k]) {
    case W8y.u8Q:
      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y.G0T);
      }

      return f[W8y.j6k]();

    case W8y.D8Q:
      return f[W8y.k97](this[W8y.a8Q][W8y.M9T]);

    case W8y.d8Q:
      return f[W8y.y47](W8y[W](this[W8y.a8Q][W8y.U30], this[W8y.a8Q][W8y.M9T][W8y.T9T]) + W8y[Z](this[W8y.n8Q][W8y.U30], this[W8y.n8Q][W8y.M9T][W8y.T9T]), W8y[P](this[W8y.a8Q][W8y.U30], this[W8y.a8Q][W8y.M9T][W8y.Z9T]) + W8y[N](this[W8y.n8Q][W8y.U30], this[W8y.n8Q][W8y.M9T][W8y.Z9T]));

    case W8y.S8Q:
      return f[W8y.j6k]();

    default:
      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y.G0T);
      }

      return f[W8y.j6k]();
  }
};

box2d.b2Simplex.prototype.GetWitnessPoints = function (f, N) {
  var P = "h0G",
      Z = "D0G",
      W = "S0G",
      l = "o0G",
      m = "q0G",
      C = "i0G",
      n = "T0G",
      k = "O0G",
      H = "V0G",
      i = "g0G",
      Q = "l0G",
      e = "W0G",
      j = "Z0G",
      o = "U0G";

  switch (this[W8y.o9k]) {
    case W8y.u8Q:
      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y.G0T);
      }

      break;

    case W8y.D8Q:
      f[W8y.k97](this[W8y.a8Q][W8y.d76]);
      N[W8y.k97](this[W8y.a8Q][W8y.X96]);
      break;

    case W8y.d8Q:
      f[W8y.T9T] = W8y[o](this[W8y.a8Q][W8y.U30], this[W8y.a8Q][W8y.d76][W8y.T9T]) + W8y[j](this[W8y.n8Q][W8y.U30], this[W8y.n8Q][W8y.d76][W8y.T9T]);
      f[W8y.Z9T] = W8y[e](this[W8y.a8Q][W8y.U30], this[W8y.a8Q][W8y.d76][W8y.Z9T]) + W8y[Q](this[W8y.n8Q][W8y.U30], this[W8y.n8Q][W8y.d76][W8y.Z9T]);
      N[W8y.T9T] = W8y[i](this[W8y.a8Q][W8y.U30], this[W8y.a8Q][W8y.X96][W8y.T9T]) + W8y[H](this[W8y.n8Q][W8y.U30], this[W8y.n8Q][W8y.X96][W8y.T9T]);
      N[W8y.Z9T] = W8y[k](this[W8y.a8Q][W8y.U30], this[W8y.a8Q][W8y.X96][W8y.Z9T]) + W8y[n](this[W8y.n8Q][W8y.U30], this[W8y.n8Q][W8y.X96][W8y.Z9T]);
      break;

    case W8y.S8Q:
      N[W8y.T9T] = f[W8y.T9T] = W8y[C](this[W8y.a8Q][W8y.U30], this[W8y.a8Q][W8y.d76][W8y.T9T]) + W8y[m](this[W8y.n8Q][W8y.U30], this[W8y.n8Q][W8y.d76][W8y.T9T]) + W8y[l](this[W8y.B5Q][W8y.U30], this[W8y.B5Q][W8y.d76][W8y.T9T]);
      N[W8y.Z9T] = f[W8y.Z9T] = W8y[W](this[W8y.a8Q][W8y.U30], this[W8y.a8Q][W8y.d76][W8y.Z9T]) + W8y[Z](this[W8y.n8Q][W8y.U30], this[W8y.n8Q][W8y.d76][W8y.Z9T]) + W8y[P](this[W8y.B5Q][W8y.U30], this[W8y.B5Q][W8y.d76][W8y.Z9T]);
      break;

    default:
      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y.G0T);
      }

      break;
  }
};

box2d.b2Simplex.prototype.GetMetric = function () {
  switch (this[W8y.o9k]) {
    case W8y.u8Q:
      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y.G0T);
      }

      return W8y.u8Q;

    case W8y.D8Q:
      return W8y.u8Q;

    case W8y.d8Q:
      return box2d[W8y.s80](this[W8y.a8Q][W8y.M9T], this[W8y.n8Q][W8y.M9T]);

    case W8y.S8Q:
      return box2d[W8y.t10](box2d[W8y.x8T](this[W8y.n8Q][W8y.M9T], this[W8y.a8Q][W8y.M9T], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.x8T](this[W8y.B5Q][W8y.M9T], this[W8y.a8Q][W8y.M9T], box2d[W8y.p7T][W8y.l9M]));

    default:
      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y.G0T);
      }

      return W8y.u8Q;
  }
};

box2d.b2Simplex.prototype.Solve2 = function () {
  var f = "P7G",
      N = "f7G",
      P = "t0G",
      Z = "z0G",
      W = "B0G",
      l = this[W8y.a8Q][W8y.M9T],
      m = this[W8y.n8Q][W8y.M9T],
      C = box2d[W8y.x8T](m, l, box2d[W8y.Z47][W8y.I0M]),
      n = -box2d[W8y.o27](l, C);

  if (W8y[W](n, W8y.u8Q)) {
    this[W8y.a8Q][W8y.U30] = W8y.D8Q;
    this[W8y.o9k] = W8y.D8Q;
    return;
  }

  var k = box2d[W8y.o27](m, C);

  if (W8y[Z](k, W8y.u8Q)) {
    this[W8y.n8Q][W8y.U30] = W8y.D8Q;
    this[W8y.o9k] = W8y.D8Q;
    this[W8y.a8Q][W8y.k97](this[W8y.n8Q]);
    return;
  }

  var H = W8y[P](W8y.D8Q, k + n);
  this[W8y.a8Q][W8y.U30] = W8y[N](k, H);
  this[W8y.n8Q][W8y.U30] = W8y[f](n, H);
  this[W8y.o9k] = W8y.d8Q;
};

box2d.b2Simplex.prototype.Solve3 = function () {
  var f = "p9G",
      N = "L9G",
      P = "u9G",
      Z = "d9G",
      W = "a9G",
      l = "e9G",
      m = "r9G",
      C = "H9G",
      n = "K9G",
      k = "n9G",
      H = "J9G",
      i = "b9G",
      Q = "s9G",
      e = "X9G",
      j = "N9G",
      o = "w9G",
      S = "A7G",
      d = "G7G",
      u = "v7G",
      D = "M7G",
      M = "E7G",
      y1 = "R7G",
      h = "I7G",
      E = "j7G",
      L = "Q7G",
      w1 = "k7G",
      B = "C7G",
      N1 = "x7G",
      f1 = "m7G",
      c1 = "Y7G",
      l1 = "c7G",
      P1 = this[W8y.a8Q][W8y.M9T],
      s1 = this[W8y.n8Q][W8y.M9T],
      b1 = this[W8y.B5Q][W8y.M9T],
      m1 = box2d[W8y.x8T](s1, P1, box2d[W8y.Z47][W8y.I0M]),
      W1 = box2d[W8y.o27](P1, m1),
      J1 = box2d[W8y.o27](s1, m1),
      C1 = J1,
      x1 = -W1,
      T1 = box2d[W8y.x8T](b1, P1, box2d[W8y.Z47][W8y.g0M]),
      K1 = box2d[W8y.o27](P1, T1),
      V1 = box2d[W8y.o27](b1, T1),
      Q1 = V1,
      D1 = -K1,
      d1 = box2d[W8y.x8T](b1, s1, box2d[W8y.Z47][W8y.D26]),
      u1 = box2d[W8y.o27](s1, d1),
      j1 = box2d[W8y.o27](b1, d1),
      G1 = j1,
      I1 = -u1,
      e1 = box2d[W8y.t10](m1, T1),
      S1 = W8y[l1](e1, box2d[W8y.t10](s1, b1)),
      B1 = W8y[c1](e1, box2d[W8y.t10](b1, P1)),
      a1 = W8y[f1](e1, box2d[W8y.t10](P1, s1));

  if (W8y[N1](x1, W8y.u8Q) && W8y[B](D1, W8y.u8Q)) {
    this[W8y.a8Q][W8y.U30] = W8y.D8Q;
    this[W8y.o9k] = W8y.D8Q;
    return;
  }

  if (W8y[w1](C1, W8y.u8Q) && W8y[L](x1, W8y.u8Q) && W8y[E](a1, W8y.u8Q)) {
    var F1 = W8y[h](W8y.D8Q, C1 + x1);
    this[W8y.a8Q][W8y.U30] = W8y[y1](C1, F1);
    this[W8y.n8Q][W8y.U30] = W8y[M](x1, F1);
    this[W8y.o9k] = W8y.d8Q;
    return;
  }

  if (W8y[D](Q1, W8y.u8Q) && W8y[u](D1, W8y.u8Q) && W8y[d](B1, W8y.u8Q)) {
    var n4 = W8y[S](W8y.D8Q, Q1 + D1);
    this[W8y.a8Q][W8y.U30] = W8y[o](Q1, n4);
    this[W8y.B5Q][W8y.U30] = W8y[j](D1, n4);
    this[W8y.o9k] = W8y.d8Q;
    this[W8y.n8Q][W8y.k97](this[W8y.B5Q]);
    return;
  }

  if (W8y[e](C1, W8y.u8Q) && W8y[Q](I1, W8y.u8Q)) {
    this[W8y.n8Q][W8y.U30] = W8y.D8Q;
    this[W8y.o9k] = W8y.D8Q;
    this[W8y.a8Q][W8y.k97](this[W8y.n8Q]);
    return;
  }

  if (W8y[i](Q1, W8y.u8Q) && W8y[H](G1, W8y.u8Q)) {
    this[W8y.B5Q][W8y.U30] = W8y.D8Q;
    this[W8y.o9k] = W8y.D8Q;
    this[W8y.a8Q][W8y.k97](this[W8y.B5Q]);
    return;
  }

  if (W8y[k](G1, W8y.u8Q) && W8y[n](I1, W8y.u8Q) && W8y[C](S1, W8y.u8Q)) {
    var h1 = W8y[m](W8y.D8Q, G1 + I1);
    this[W8y.n8Q][W8y.U30] = W8y[l](G1, h1);
    this[W8y.B5Q][W8y.U30] = W8y[W](I1, h1);
    this[W8y.o9k] = W8y.d8Q;
    this[W8y.a8Q][W8y.k97](this[W8y.B5Q]);
    return;
  }

  var t1 = W8y[Z](W8y.D8Q, S1 + B1 + a1);
  this[W8y.a8Q][W8y.U30] = W8y[P](S1, t1);
  this[W8y.n8Q][W8y.U30] = W8y[N](B1, t1);
  this[W8y.B5Q][W8y.U30] = W8y[f](a1, t1);
  this[W8y.o9k] = W8y.S8Q;
};

box2d[W8y.Z47][W8y.I0M] = new box2d[W8y.p7T]();
box2d[W8y.Z47][W8y.g0M] = new box2d[W8y.p7T]();
box2d[W8y.Z47][W8y.D26] = new box2d[W8y.p7T]();

box2d[W8y.A37] = function (f, N, P) {
  var Z = "O8G",
      W = "V8G",
      l = "WriteCache",
      m = "GetWitnessPoints",
      C = "g8G",
      n = "l8G",
      k = "W8G",
      H = "Z8G",
      i = "GetSearchDirection",
      Q = "GetClosestPoint",
      e = "U8G",
      j = "Solve3",
      o = "Solve2",
      S = "y8G",
      d = "F9G",
      u = "ReadCache";
  ++box2d[W8y.D7T];
  var D = P[W8y.w4T],
      M = P[W8y.i4T],
      y1 = P[W8y.D77],
      h = P[W8y.U97],
      E = box2d[W8y.A37][W8y.D60];
  E[u](N, D, y1, M, h);
  var L = E[W8y.N4k],
      w1 = W8y.J3T,
      B = box2d[W8y.A37][W8y.K2H],
      N1 = box2d[W8y.A37][W8y.d2H],
      f1 = W8y.u8Q,
      c1 = box2d[W8y.Z57],
      l1 = c1,
      P1 = W8y.u8Q;

  while (W8y[d](P1, w1)) {
    f1 = E[W8y.o9k];

    for (var s1 = W8y.u8Q; W8y[S](s1, f1); ++s1) {
      B[s1] = L[s1][W8y.K30];
      N1[s1] = L[s1][W8y.L40];
    }

    switch (E[W8y.o9k]) {
      case W8y.D8Q:
        break;

      case W8y.d8Q:
        E[o]();
        break;

      case W8y.S8Q:
        E[j]();
        break;

      default:
        if (box2d[W8y.l3H]) {
          box2d[W8y.X16](W8y.G0T);
        }

    }

    if (W8y[e](E[W8y.o9k], W8y.S8Q)) {
      break;
    }

    var b1 = E[Q](box2d[W8y.A37][W8y.E2r]);
    l1 = b1[W8y.A5T]();
    c1 = l1;
    var m1 = E[i](box2d[W8y.A37][W8y.J57]);

    if (W8y[H](m1[W8y.A5T](), box2d[W8y.s70])) {
      break;
    }

    var W1 = L[E[W8y.o9k]];
    W1[W8y.K30] = D[W8y.d0H](box2d[W8y.b0M](y1[W8y.b50], box2d[W8y.F7M](m1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.A37][W8y.t30]));
    box2d[W8y.o10](y1, D[W8y.C8k](W1[W8y.K30]), W1[W8y.d76]);
    W1[W8y.L40] = M[W8y.d0H](box2d[W8y.b0M](h[W8y.b50], m1, box2d[W8y.A37][W8y.g40]));
    box2d[W8y.o10](h, M[W8y.C8k](W1[W8y.L40]), W1[W8y.X96]);
    box2d[W8y.x8T](W1[W8y.X96], W1[W8y.d76], W1[W8y.M9T]);
    ++P1;
    ++box2d[W8y.O1r];
    var J1 = W8y.G0T;

    for (var s1 = W8y.u8Q; W8y[k](s1, f1); ++s1) {
      if (W8y[n](W1[W8y.K30], B[s1]) && W8y[C](W1[W8y.L40], N1[s1])) {
        J1 = W8y.f5k;
        break;
      }
    }

    if (J1) {
      break;
    }

    ++E[W8y.o9k];
  }

  box2d[W8y.a77] = box2d[W8y.v30](box2d[W8y.a77], P1);
  E[m](f[W8y.q2k], f[W8y.T3k]);
  f[W8y.S60] = box2d[W8y.s80](f[W8y.q2k], f[W8y.T3k]);
  f[W8y.Y6M] = P1;
  E[l](N);

  if (P[W8y.W40]) {
    var C1 = D[W8y.o4T],
        x1 = M[W8y.o4T];

    if (W8y[W](f[W8y.S60], C1 + x1) && W8y[Z](f[W8y.S60], box2d[W8y.F5k])) {
      f[W8y.S60] -= C1 + x1;
      var T1 = box2d[W8y.x8T](f[W8y.T3k], f[W8y.q2k], box2d[W8y.A37][W8y.z76]);
      T1[W8y.Y27]();
      f[W8y.q2k][W8y.a9k](C1, T1);
      f[W8y.T3k][W8y.I5M](x1, T1);
    } else {
      var b1 = box2d[W8y.O80](f[W8y.q2k], f[W8y.T3k], box2d[W8y.A37][W8y.E2r]);
      f[W8y.q2k][W8y.k97](b1);
      f[W8y.T3k][W8y.k97](b1);
      f[W8y.S60] = W8y.u8Q;
    }
  }
};

box2d[W8y.A37][W8y.D60] = new box2d[W8y.Z47]();
box2d[W8y.A37][W8y.K2H] = box2d[W8y.D3r](W8y.S8Q);
box2d[W8y.A37][W8y.d2H] = box2d[W8y.D3r](W8y.S8Q);
box2d[W8y.A37][W8y.E2r] = new box2d[W8y.p7T]();
box2d[W8y.A37][W8y.J57] = new box2d[W8y.p7T]();
box2d[W8y.A37][W8y.z76] = new box2d[W8y.p7T]();
box2d[W8y.A37][W8y.t30] = new box2d[W8y.p7T]();
box2d[W8y.A37][W8y.g40] = new box2d[W8y.p7T]();
goog[W8y.U3T](W8y.y6Q);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Joint');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.U2k] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.u07]);
  this[W8y.r8H] = new box2d[W8y.p7T]();
  this[W8y.x8H] = new box2d[W8y.p7T]();
};

goog[W8y.u80](box2d[W8y.U2k], box2d[W8y.k1r]);
box2d.b2WeldJointDef.prototype.localAnchorA = W8y.z6k;
box2d.b2WeldJointDef.prototype.localAnchorB = W8y.z6k;
box2d.b2WeldJointDef.prototype.referenceAngle = W8y.u8Q;
box2d.b2WeldJointDef.prototype.frequencyHz = W8y.u8Q;
box2d.b2WeldJointDef.prototype.dampingRatio = W8y.u8Q;

box2d.b2WeldJointDef.prototype.Initialize = function (f, N, P) {
  var Z = "T8G";
  this[W8y.F6Q] = f;
  this[W8y.b5Q] = N;
  this[W8y.F6Q][W8y.y7M](P, this[W8y.r8H]);
  this[W8y.b5Q][W8y.y7M](P, this[W8y.x8H]);
  this[W8y.D3T] = W8y[Z](this[W8y.b5Q][W8y.x57](), this[W8y.F6Q][W8y.x57]());
};

box2d[W8y.v90] = function (f) {
  goog[W8y.o66](this, f);
  this[W8y.p9T] = f[W8y.o67];
  this[W8y.d8k] = f[W8y.G56];
  this[W8y.V27] = f[W8y.r8H][W8y.l26]();
  this[W8y.G47] = f[W8y.x8H][W8y.l26]();
  this[W8y.E00] = f[W8y.D3T];
  this[W8y.k1M] = new box2d[W8y.G9T](W8y.u8Q, W8y.u8Q, W8y.u8Q);
  this[W8y.r8k] = new box2d[W8y.p7T]();
  this[W8y.u8k] = new box2d[W8y.p7T]();
  this[W8y.z3k] = new box2d[W8y.p7T]();
  this[W8y.A2k] = new box2d[W8y.p7T]();
  this[W8y.Z7T] = new box2d[W8y.t0M]();
  this[W8y.p97] = new box2d[W8y.x8M]();
  this[W8y.k67] = new box2d[W8y.x8M]();
  this[W8y.u17] = new box2d[W8y.p7T]();
  this[W8y.P86] = new box2d[W8y.p7T]();
  this[W8y.G3r] = new box2d[W8y.t0M]();
};

goog[W8y.u80](box2d[W8y.v90], box2d[W8y.N17]);
box2d.b2WeldJoint.prototype.m_frequencyHz = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_dampingRatio = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_bias = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_localAnchorA = W8y.z6k;
box2d.b2WeldJoint.prototype.m_localAnchorB = W8y.z6k;
box2d.b2WeldJoint.prototype.m_referenceAngle = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_gamma = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_impulse = W8y.z6k;
box2d.b2WeldJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_rA = W8y.z6k;
box2d.b2WeldJoint.prototype.m_rB = W8y.z6k;
box2d.b2WeldJoint.prototype.m_localCenterA = W8y.z6k;
box2d.b2WeldJoint.prototype.m_localCenterB = W8y.z6k;
box2d.b2WeldJoint.prototype.m_invMassA = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_invMassB = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_invIA = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_invIB = W8y.u8Q;
box2d.b2WeldJoint.prototype.m_mass = W8y.z6k;
box2d.b2WeldJoint.prototype.m_qA = W8y.z6k;
box2d.b2WeldJoint.prototype.m_qB = W8y.z6k;
box2d.b2WeldJoint.prototype.m_lalcA = W8y.z6k;
box2d.b2WeldJoint.prototype.m_lalcB = W8y.z6k;
box2d.b2WeldJoint.prototype.m_K = W8y.z6k;

box2d.b2WeldJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "w5G",
      P = "A6G",
      Z = "GetSymInverse33",
      W = "G6G",
      l = "v6G",
      m = "D6G",
      C = "S6G",
      n = "o6G",
      k = "q6G",
      H = "Q6G",
      i = "O6G",
      Q = "x6G",
      e = "b6G",
      j = "s6G",
      o = "X6G",
      S = "GetInverse22",
      d = "N6G",
      u = "w6G",
      D = "A8G",
      M = "p8G",
      y1 = "h8G",
      h = "D8G",
      E = "R8G",
      L = "e8G",
      w1 = "i8G";
  this[W8y.G0k] = this[W8y.l37][W8y.x5M];
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.z3k][W8y.k97](this[W8y.l37][W8y.i6k][W8y.O8Q]);
  this[W8y.A2k][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.j96] = this[W8y.l37][W8y.k86];
  this[W8y.V96] = this[W8y.v27][W8y.k86];
  this[W8y.q8M] = this[W8y.l37][W8y.M7H];
  this[W8y.E9M] = this[W8y.v27][W8y.M7H];
  var B = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      N1 = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      f1 = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      c1 = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      l1 = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      P1 = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      s1 = this[W8y.p97][W8y.h70](B),
      b1 = this[W8y.k67][W8y.h70](c1);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  box2d[W8y.x47](s1, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  box2d[W8y.x47](b1, this[W8y.P86], this[W8y.u8k]);
  var m1 = this[W8y.j96],
      W1 = this[W8y.V96],
      J1 = this[W8y.q8M],
      C1 = this[W8y.E9M],
      x1 = this[W8y.G3r];
  x1[W8y.Q57][W8y.T9T] = m1 + W1 + W8y[w1](this[W8y.r8k][W8y.Z9T], this[W8y.r8k][W8y.Z9T], J1) + W8y[L](this[W8y.u8k][W8y.Z9T], this[W8y.u8k][W8y.Z9T], C1);
  x1[W8y.D57][W8y.T9T] = -this[W8y.r8k][W8y.Z9T] * this[W8y.r8k][W8y.T9T] * J1 - W8y[E](this[W8y.u8k][W8y.Z9T], this[W8y.u8k][W8y.T9T], C1);
  x1[W8y.y1H][W8y.T9T] = -this[W8y.r8k][W8y.Z9T] * J1 - W8y[h](this[W8y.u8k][W8y.Z9T], C1);
  x1[W8y.Q57][W8y.Z9T] = x1[W8y.D57][W8y.T9T];
  x1[W8y.D57][W8y.Z9T] = m1 + W1 + W8y[y1](this[W8y.r8k][W8y.T9T], this[W8y.r8k][W8y.T9T], J1) + W8y[M](this[W8y.u8k][W8y.T9T], this[W8y.u8k][W8y.T9T], C1);
  x1[W8y.y1H][W8y.Z9T] = W8y[D](this[W8y.r8k][W8y.T9T], J1) + W8y[u](this[W8y.u8k][W8y.T9T], C1);
  x1[W8y.Q57][W8y.u7T] = x1[W8y.y1H][W8y.T9T];
  x1[W8y.D57][W8y.u7T] = x1[W8y.y1H][W8y.Z9T];
  x1[W8y.y1H][W8y.u7T] = J1 + C1;

  if (W8y[d](this[W8y.p9T], 0)) {
    x1[S](this[W8y.Z7T]);
    var T1 = J1 + C1,
        K1 = W8y[o](T1, 0) ? W8y[j](1, T1) : 0,
        V1 = W8y[e](c1, B, this[W8y.E00]),
        Q1 = W8y[Q](2, box2d[W8y.e5M], this[W8y.p9T]),
        D1 = W8y[i](2, K1, this[W8y.d8k], Q1),
        d1 = W8y[H](K1, Q1, Q1),
        u1 = f[W8y.D5H][W8y.I5H];
    this[W8y.e3k] = W8y[k](u1, D1 + u1 * d1);
    this[W8y.e3k] = W8y[n](this[W8y.e3k], 0) ? W8y[C](1, this[W8y.e3k]) : 0;
    this[W8y.b96] = W8y[m](V1, u1, d1, this[W8y.e3k]);
    T1 += this[W8y.e3k];
    this[W8y.Z7T][W8y.y1H][W8y.u7T] = W8y[l](T1, 0) ? W8y[W](1, T1) : 0;
  } else {
    x1[Z](this[W8y.Z7T]);
    this[W8y.e3k] = 0;
    this[W8y.b96] = 0;
  }

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.k1M][W8y.E40](f[W8y.D5H][W8y.k30]);
    var j1 = box2d.b2WeldJoint.prototype.InitVelocityConstraints.s_P.SetXY(this[W8y.k1M][W8y.T9T], this[W8y.k1M][W8y.Z9T]);
    N1[W8y.I5M](m1, j1);
    f1 -= W8y[P](J1, box2d[W8y.t10](this[W8y.r8k], j1) + this[W8y.k1M][W8y.u7T]);
    l1[W8y.a9k](W1, j1);
    P1 += W8y[N](C1, box2d[W8y.t10](this[W8y.u8k], j1) + this[W8y.k1M][W8y.u7T]);
  } else {
    this[W8y.k1M][W8y.j6k]();
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = f1;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = P1;
};

box2d.b2WeldJoint.prototype.InitVelocityConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2WeldJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "e5G",
      P = "r5G",
      Z = "H5G",
      W = "K5G",
      l = "n5G",
      m = "J5G",
      C = "b5G",
      n = "s5G",
      k = "X5G",
      H = "N5G",
      i = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      Q = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      e = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      j = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      o = this[W8y.j96],
      S = this[W8y.V96],
      d = this[W8y.q8M],
      u = this[W8y.E9M];

  if (W8y[H](this[W8y.p9T], 0)) {
    var D = W8y[k](j, Q),
        M = -this[W8y.Z7T][W8y.y1H][W8y.u7T] * (D + this[W8y.b96] + W8y[n](this[W8y.e3k], this[W8y.k1M][W8y.u7T]));
    this[W8y.k1M][W8y.u7T] += M;
    Q -= W8y[C](d, M);
    j += W8y[m](u, M);
    var y1 = box2d[W8y.x8T](box2d[W8y.S7T](e, j, this[W8y.u8k], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](i, Q, this[W8y.r8k], box2d[W8y.p7T][W8y.l9M]), box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1),
        h = box2d[W8y.D86](this[W8y.Z7T], y1[W8y.T9T], y1[W8y.Z9T], box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse1)[W8y.P8k]();
    this[W8y.k1M][W8y.T9T] += h[W8y.T9T];
    this[W8y.k1M][W8y.Z9T] += h[W8y.Z9T];
    var E = h;
    i[W8y.I5M](o, E);
    Q -= W8y[l](d, box2d[W8y.t10](this[W8y.r8k], E));
    e[W8y.a9k](S, E);
    j += W8y[W](u, box2d[W8y.t10](this[W8y.u8k], E));
  } else {
    var y1 = box2d[W8y.x8T](box2d[W8y.S7T](e, j, this[W8y.u8k], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](i, Q, this[W8y.r8k], box2d[W8y.p7T][W8y.l9M]), box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1),
        D = W8y[Z](j, Q),
        L = box2d[W8y.q96](this[W8y.Z7T], y1[W8y.T9T], y1[W8y.Z9T], D, box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse)[W8y.P8k]();
    this[W8y.k1M][W8y.t4H](L);
    var E = box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_P.SetXY(L[W8y.T9T], L[W8y.Z9T]);
    i[W8y.I5M](o, E);
    Q -= W8y[P](d, box2d[W8y.t10](this[W8y.r8k], E) + L[W8y.u7T]);
    e[W8y.a9k](S, E);
    j += W8y[N](u, box2d[W8y.t10](this[W8y.u8k], E) + L[W8y.u7T]);
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = Q;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = j;
};

box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_Cdot1 = new box2d[W8y.p7T]();
box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse1 = new box2d[W8y.p7T]();
box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d[W8y.G9T]();
box2d.b2WeldJoint.prototype.SolveVelocityConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2WeldJoint.prototype.SolvePositionConstraints = function (f) {
  var N = "o1L",
      P = "q1L",
      Z = "i1L",
      W = "T1L",
      l = "C1L",
      m = "x1L",
      C = "m1L",
      n = "Y1L",
      k = "c1L",
      H = "P1L",
      i = "w1L",
      Q = "F5G",
      e = "p5G",
      j = "h5G",
      o = "E5G",
      S = "a5G",
      d = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      u = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      D = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      M = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      y1 = this[W8y.p97][W8y.h70](u),
      h = this[W8y.k67][W8y.h70](M),
      E = this[W8y.j96],
      L = this[W8y.V96],
      w1 = this[W8y.q8M],
      B = this[W8y.E9M];
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  var N1 = box2d[W8y.x47](y1, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  var f1 = box2d[W8y.x47](h, this[W8y.P86], this[W8y.u8k]),
      c1,
      l1,
      P1 = this[W8y.G3r];
  P1[W8y.Q57][W8y.T9T] = E + L + W8y[S](N1[W8y.Z9T], N1[W8y.Z9T], w1) + W8y[o](f1[W8y.Z9T], f1[W8y.Z9T], B);
  P1[W8y.D57][W8y.T9T] = -N1[W8y.Z9T] * N1[W8y.T9T] * w1 - W8y[j](f1[W8y.Z9T], f1[W8y.T9T], B);
  P1[W8y.y1H][W8y.T9T] = -N1[W8y.Z9T] * w1 - W8y[e](f1[W8y.Z9T], B);
  P1[W8y.Q57][W8y.Z9T] = P1[W8y.D57][W8y.T9T];
  P1[W8y.D57][W8y.Z9T] = E + L + W8y[Q](N1[W8y.T9T], N1[W8y.T9T], w1) + W8y[i](f1[W8y.T9T], f1[W8y.T9T], B);
  P1[W8y.y1H][W8y.Z9T] = W8y[H](N1[W8y.T9T], w1) + W8y[k](f1[W8y.T9T], B);
  P1[W8y.Q57][W8y.u7T] = P1[W8y.y1H][W8y.T9T];
  P1[W8y.D57][W8y.u7T] = P1[W8y.y1H][W8y.Z9T];
  P1[W8y.y1H][W8y.u7T] = w1 + B;

  if (W8y[n](this[W8y.p9T], 0)) {
    var s1 = box2d[W8y.x8T](box2d[W8y.m3T](D, f1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.m3T](d, N1, box2d[W8y.p7T][W8y.l9M]), box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1);
    c1 = s1[W8y.a2k]();
    l1 = 0;
    var b1 = P1[W8y.u5T](s1[W8y.T9T], s1[W8y.Z9T], box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P)[W8y.P8k]();
    d[W8y.I5M](E, b1);
    u -= W8y[C](w1, box2d[W8y.t10](N1, b1));
    D[W8y.a9k](L, b1);
    M += W8y[m](B, box2d[W8y.t10](f1, b1));
  } else {
    var s1 = box2d[W8y.x8T](box2d[W8y.m3T](D, f1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.m3T](d, N1, box2d[W8y.p7T][W8y.l9M]), box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1),
        m1 = W8y[l](M, u, this[W8y.E00]);
    c1 = s1[W8y.a2k]();
    l1 = box2d[W8y.t67](m1);
    var W1 = P1[W8y.y2M](s1[W8y.T9T], s1[W8y.Z9T], m1, box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse)[W8y.P8k](),
        b1 = box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P.SetXY(W1[W8y.T9T], W1[W8y.Z9T]);
    d[W8y.I5M](E, b1);
    u -= W8y[W](w1, box2d[W8y.t10](this[W8y.r8k], b1) + W1[W8y.u7T]);
    D[W8y.a9k](L, b1);
    M += W8y[Z](B, box2d[W8y.t10](this[W8y.u8k], b1) + W1[W8y.u7T]);
  }

  f[W8y.P1T][this[W8y.G0k]][W8y.U30] = u;
  f[W8y.P1T][this[W8y.a0k]][W8y.U30] = M;
  return W8y[P](c1, box2d[W8y.Z8k]) && W8y[N](l1, box2d[W8y.r5k]);
};

box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_C1 = new box2d[W8y.p7T]();
box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_P = new box2d[W8y.p7T]();
box2d.b2WeldJoint.prototype.SolvePositionConstraints.s_impulse = new box2d[W8y.G9T]();

box2d.b2WeldJoint.prototype.GetAnchorA = function (f) {
  return this[W8y.l37][W8y.I00](this[W8y.V27], f);
};

box2d.b2WeldJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.I00](this[W8y.G47], f);
};

box2d.b2WeldJoint.prototype.GetReactionForce = function (f, N) {
  var P = "D1L",
      Z = "S1L";
  return N[W8y.y47](W8y[Z](f, this[W8y.k1M][W8y.T9T]), W8y[P](f, this[W8y.k1M][W8y.Z9T]));
};

box2d.b2WeldJoint.prototype.GetReactionTorque = function (f) {
  var N = "h1L";
  return W8y[N](f, this[W8y.k1M][W8y.u7T]);
};

box2d.b2WeldJoint.prototype.GetLocalAnchorA = function (f) {
  return f[W8y.k97](this[W8y.V27]);
};

box2d.b2WeldJoint.prototype.GetLocalAnchorB = function (f) {
  return f[W8y.k97](this[W8y.G47]);
};

box2d.b2WeldJoint.prototype.GetReferenceAngle = function () {
  return this[W8y.E00];
};

box2d.b2WeldJoint.prototype.SetFrequency = function (f) {
  this[W8y.p9T] = f;
};

box2d.b2WeldJoint.prototype.GetFrequency = function () {
  return this[W8y.p9T];
};

box2d.b2WeldJoint.prototype.SetDampingRatio = function (f) {
  this[W8y.d8k] = f;
};

box2d.b2WeldJoint.prototype.GetDampingRatio = function () {
  return this[W8y.d8k];
};

box2d.b2WeldJoint.prototype.Dump = function () {
  var f = "  /*box2d.b2WeldJointDef*/ var jd = new box2d.b2WeldJointDef();\n";

  if (box2d[W8y.F2k]) {
    var N = this[W8y.l37][W8y.x5M],
        P = this[W8y.v27][W8y.x5M];
    box2d[W8y.R50](f);
    box2d[W8y.R50](W8y.Q67, N);
    box2d[W8y.R50](W8y.k3r, P);
    box2d[W8y.R50](W8y.i1r, this[W8y.N96] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W8y.v70, this[W8y.V27][W8y.T9T], this[W8y.V27][W8y.Z9T]);
    box2d[W8y.R50](W8y.y77, this[W8y.G47][W8y.T9T], this[W8y.G47][W8y.Z9T]);
    box2d[W8y.R50](W8y.A5H, this[W8y.E00]);
    box2d[W8y.R50](W8y.K76, this[W8y.p9T]);
    box2d[W8y.R50](W8y.e0T, this[W8y.d8k]);
    box2d[W8y.R50](W8y.P6M, this[W8y.U56]);
  }
};

goog[W8y.U3T](W8y.a2M);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Joint');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.N37] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.S2k]);
  this[W8y.r8H] = new box2d[W8y.p7T](-W8y.D8Q, W8y.u8Q);
  this[W8y.x8H] = new box2d[W8y.p7T](W8y.D8Q, W8y.u8Q);
};

goog[W8y.u80](box2d[W8y.N37], box2d[W8y.k1r]);
box2d.b2RopeJointDef.prototype.localAnchorA = W8y.z6k;
box2d.b2RopeJointDef.prototype.localAnchorB = W8y.z6k;
box2d.b2RopeJointDef.prototype.maxLength = W8y.u8Q;

box2d[W8y.y1T] = function (f) {
  goog[W8y.o66](this, f);
  this[W8y.V27] = f[W8y.r8H][W8y.l26]();
  this[W8y.G47] = f[W8y.x8H][W8y.l26]();
  this[W8y.a7k] = f[W8y.q0H];
  this[W8y.M9M] = new box2d[W8y.p7T]();
  this[W8y.r8k] = new box2d[W8y.p7T]();
  this[W8y.u8k] = new box2d[W8y.p7T]();
  this[W8y.z3k] = new box2d[W8y.p7T]();
  this[W8y.A2k] = new box2d[W8y.p7T]();
  this[W8y.p97] = new box2d[W8y.x8M]();
  this[W8y.k67] = new box2d[W8y.x8M]();
  this[W8y.u17] = new box2d[W8y.p7T]();
  this[W8y.P86] = new box2d[W8y.p7T]();
};

goog[W8y.u80](box2d[W8y.y1T], box2d[W8y.N17]);
box2d.b2RopeJoint.prototype.m_localAnchorA = W8y.z6k;
box2d.b2RopeJoint.prototype.m_localAnchorB = W8y.z6k;
box2d.b2RopeJoint.prototype.m_maxLength = W8y.u8Q;
box2d.b2RopeJoint.prototype.m_length = W8y.u8Q;
box2d.b2RopeJoint.prototype.m_impulse = W8y.u8Q;
box2d.b2RopeJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2RopeJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2RopeJoint.prototype.m_u = W8y.z6k;
box2d.b2RopeJoint.prototype.m_rA = W8y.z6k;
box2d.b2RopeJoint.prototype.m_rB = W8y.z6k;
box2d.b2RopeJoint.prototype.m_localCenterA = W8y.z6k;
box2d.b2RopeJoint.prototype.m_localCenterB = W8y.z6k;
box2d.b2RopeJoint.prototype.m_invMassA = W8y.u8Q;
box2d.b2RopeJoint.prototype.m_invMassB = W8y.u8Q;
box2d.b2RopeJoint.prototype.m_invIA = W8y.u8Q;
box2d.b2RopeJoint.prototype.m_invIB = W8y.u8Q;
box2d.b2RopeJoint.prototype.m_mass = W8y.u8Q;
box2d.b2RopeJoint.prototype.m_state = box2d[W8y.L1H][W8y.c27];
box2d.b2RopeJoint.prototype.m_qA = W8y.z6k;
box2d.b2RopeJoint.prototype.m_qB = W8y.z6k;
box2d.b2RopeJoint.prototype.m_lalcA = W8y.z6k;
box2d.b2RopeJoint.prototype.m_lalcB = W8y.z6k;

box2d.b2RopeJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "K4L",
      P = "n4L",
      Z = "J4L",
      W = "b4L",
      l = "W4L",
      m = "P4L",
      C = "f4L",
      n = "t1L",
      k = "z1L",
      H = "B1L";
  this[W8y.G0k] = this[W8y.l37][W8y.x5M];
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.z3k][W8y.k97](this[W8y.l37][W8y.i6k][W8y.O8Q]);
  this[W8y.A2k][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.j96] = this[W8y.l37][W8y.k86];
  this[W8y.V96] = this[W8y.v27][W8y.k86];
  this[W8y.q8M] = this[W8y.l37][W8y.M7H];
  this[W8y.E9M] = this[W8y.v27][W8y.M7H];
  var i = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      Q = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      e = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      j = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      o = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      S = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      d = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      u = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      D = this[W8y.p97][W8y.h70](Q),
      M = this[W8y.k67][W8y.h70](S);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  box2d[W8y.x47](D, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  box2d[W8y.x47](M, this[W8y.P86], this[W8y.u8k]);
  this[W8y.M9M][W8y.k97](o)[W8y.t4H](this[W8y.u8k])[W8y.d6M](i)[W8y.d6M](this[W8y.r8k]);
  this[W8y.m37] = this[W8y.M9M][W8y.a2k]();
  var y1 = W8y[H](this[W8y.m37], this[W8y.a7k]);

  if (W8y[k](y1, 0)) {
    this[W8y.v6H] = box2d[W8y.L1H][W8y.b4M];
  } else {
    this[W8y.v6H] = box2d[W8y.L1H][W8y.c27];
  }

  if (W8y[n](this[W8y.m37], box2d[W8y.Z8k])) {
    this[W8y.M9M][W8y.E40](W8y[C](1, this[W8y.m37]));
  } else {
    this[W8y.M9M][W8y.j6k]();
    this[W8y.Z7T] = 0;
    this[W8y.k1M] = 0;
    return;
  }

  var h = box2d[W8y.t10](this[W8y.r8k], this[W8y.M9M]),
      E = box2d[W8y.t10](this[W8y.u8k], this[W8y.M9M]),
      L = this[W8y.j96] + W8y[m](this[W8y.q8M], h, h) + this[W8y.V96] + W8y[l](this[W8y.E9M], E, E);
  this[W8y.Z7T] = W8y[W](L, 0) ? W8y[Z](1, L) : 0;

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.k1M] *= f[W8y.D5H][W8y.k30];
    var w1 = box2d[W8y.X26](this[W8y.k1M], this[W8y.M9M], box2d.b2RopeJoint.prototype.InitVelocityConstraints.s_P);
    e[W8y.I5M](this[W8y.j96], w1);
    j -= W8y[P](this[W8y.q8M], box2d[W8y.t10](this[W8y.r8k], w1));
    d[W8y.a9k](this[W8y.V96], w1);
    u += W8y[N](this[W8y.E9M], box2d[W8y.t10](this[W8y.u8k], w1));
  } else {
    this[W8y.k1M] = 0;
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = j;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = u;
};

box2d.b2RopeJoint.prototype.InitVelocityConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2RopeJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "u4L",
      P = "d4L",
      Z = "a4L",
      W = "e4L",
      l = "r4L",
      m = "H4L",
      C = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      n = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      k = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      H = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      i = box2d[W8y.S7T](C, n, this[W8y.r8k], box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpA),
      Q = box2d[W8y.S7T](k, H, this[W8y.u8k], box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpB),
      e = W8y[m](this[W8y.m37], this[W8y.a7k]),
      j = box2d[W8y.o27](this[W8y.M9M], box2d[W8y.x8T](Q, i, box2d[W8y.p7T][W8y.t7M]));

  if (W8y[l](e, 0)) {
    j += W8y[W](f[W8y.D5H][W8y.e4T], e);
  }

  var o = -this[W8y.Z7T] * j,
      S = this[W8y.k1M];
  this[W8y.k1M] = box2d[W8y.G60](0, this[W8y.k1M] + o);
  o = W8y[Z](this[W8y.k1M], S);
  var d = box2d[W8y.X26](o, this[W8y.M9M], box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_P);
  C[W8y.I5M](this[W8y.j96], d);
  n -= W8y[P](this[W8y.q8M], box2d[W8y.t10](this[W8y.r8k], d));
  k[W8y.a9k](this[W8y.V96], d);
  H += W8y[N](this[W8y.E9M], box2d[W8y.t10](this[W8y.u8k], d));
  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = n;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = H;
};

box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d[W8y.p7T]();
box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d[W8y.p7T]();
box2d.b2RopeJoint.prototype.SolveVelocityConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2RopeJoint.prototype.SolvePositionConstraints = function (f) {
  var N = "y2L",
      P = "F4L",
      Z = "p4L",
      W = "L4L",
      l = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      m = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      C = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      n = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      k = this[W8y.p97][W8y.h70](m),
      H = this[W8y.k67][W8y.h70](n);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  var i = box2d[W8y.x47](k, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  var Q = box2d[W8y.x47](H, this[W8y.P86], this[W8y.u8k]),
      e = this[W8y.M9M][W8y.k97](C)[W8y.t4H](Q)[W8y.d6M](l)[W8y.d6M](i),
      j = e[W8y.Y27](),
      o = W8y[W](j, this[W8y.a7k]);
  o = box2d[W8y.N06](o, 0, box2d[W8y.d1r]);
  var S = -this[W8y.Z7T] * o,
      d = box2d[W8y.X26](S, e, box2d.b2RopeJoint.prototype.SolvePositionConstraints.s_P);
  l[W8y.I5M](this[W8y.j96], d);
  m -= W8y[Z](this[W8y.q8M], box2d[W8y.t10](i, d));
  C[W8y.a9k](this[W8y.V96], d);
  n += W8y[P](this[W8y.E9M], box2d[W8y.t10](Q, d));
  f[W8y.P1T][this[W8y.G0k]][W8y.U30] = m;
  f[W8y.P1T][this[W8y.a0k]][W8y.U30] = n;
  return W8y[N](j - this[W8y.a7k], box2d[W8y.Z8k]);
};

box2d.b2RopeJoint.prototype.SolvePositionConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2RopeJoint.prototype.GetAnchorA = function (f) {
  return this[W8y.l37][W8y.I00](this[W8y.V27], f);
};

box2d.b2RopeJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.I00](this[W8y.G47], f);
};

box2d.b2RopeJoint.prototype.GetReactionForce = function (f, N) {
  var P = "U2L",
      Z = box2d[W8y.X26](W8y[P](f, this[W8y.k1M]), this[W8y.M9M], N);
  return Z;
};

box2d.b2RopeJoint.prototype.GetReactionTorque = function (f) {
  return W8y.u8Q;
};

box2d.b2RopeJoint.prototype.GetLocalAnchorA = function (f) {
  return f[W8y.k97](this[W8y.V27]);
};

box2d.b2RopeJoint.prototype.GetLocalAnchorB = function (f) {
  return f[W8y.k97](this[W8y.G47]);
};

box2d.b2RopeJoint.prototype.SetMaxLength = function (f) {
  this[W8y.a7k] = f;
};

box2d.b2RopeJoint.prototype.GetMaxLength = function () {
  return this[W8y.a7k];
};

box2d.b2RopeJoint.prototype.GetLimitState = function () {
  return this[W8y.v6H];
};

box2d.b2RopeJoint.prototype.Dump = function () {
  var f = "  jd.maxLength = %.15f;\n",
      N = "  /*box2d.b2RopeJointDef*/ var jd = new box2d.b2RopeJointDef();\n";

  if (box2d[W8y.F2k]) {
    var P = this[W8y.l37][W8y.x5M],
        Z = this[W8y.v27][W8y.x5M];
    box2d[W8y.R50](N);
    box2d[W8y.R50](W8y.Q67, P);
    box2d[W8y.R50](W8y.k3r, Z);
    box2d[W8y.R50](W8y.i1r, this[W8y.N96] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W8y.v70, this[W8y.V27][W8y.T9T], this[W8y.V27][W8y.Z9T]);
    box2d[W8y.R50](W8y.y77, this[W8y.G47][W8y.T9T], this[W8y.G47][W8y.Z9T]);
    box2d[W8y.R50](f, this[W8y.a7k]);
    box2d[W8y.R50](W8y.P6M, this[W8y.U56]);
  }
};

goog[W8y.U3T](W8y.s87);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Controller');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.g1H] = function () {
  goog[W8y.o66](this);
};

goog[W8y.u80](box2d[W8y.g1H], box2d[W8y.X9H]);
box2d.b2GravityController.prototype.G = W8y.D8Q;
box2d.b2GravityController.prototype.invSqr = W8y.f5k;

box2d.b2GravityController.prototype.Step = function (f) {
  var N = "z2L",
      P = "B2L",
      Z = "h2L",
      W = "D2L",
      l = "S2L",
      m = "o2L",
      C = "q2L",
      n = "G",
      k = "T2L",
      H = "O2L",
      i = "V2L",
      Q = "g2L",
      e = "l2L",
      j = "W2L",
      o = "Z2L",
      S = "invSqr";

  if (this[S]) {
    for (var d = this[W8y.I80]; d; d = d[W8y.i2k]) {
      var u = d[W8y.R6k],
          D = u[W8y.Z86](),
          M = u[W8y.L3T]();

      for (var y1 = this[W8y.I80]; W8y[o](y1, d); y1 = y1[W8y.i2k]) {
        var h = y1[W8y.R6k],
            E = h[W8y.Z86](),
            L = h[W8y.L3T](),
            w1 = W8y[j](E[W8y.T9T], D[W8y.T9T]),
            B = W8y[e](E[W8y.Z9T], D[W8y.Z9T]),
            N1 = W8y[Q](w1, w1) + W8y[i](B, B);
        if (W8y[H](N1, box2d[W8y.F5k])) continue;
        var f1 = box2d.b2GravityController.prototype.Step.s_f.SetXY(w1, B);
        f1[W8y.E40](W8y[k](this[n], N1, box2d[W8y.d5M](N1), M, L));
        if (u[W8y.h0r]()) u[W8y.h40](f1, D);
        if (h[W8y.h0r]()) h[W8y.h40](f1[W8y.E40](-W8y.D8Q), E);
      }
    }
  } else {
    for (var d = this[W8y.I80]; d; d = d[W8y.i2k]) {
      var u = d[W8y.R6k],
          D = u[W8y.Z86](),
          M = u[W8y.L3T]();

      for (var y1 = this[W8y.I80]; W8y[C](y1, d); y1 = y1[W8y.i2k]) {
        var h = y1[W8y.R6k],
            E = h[W8y.Z86](),
            L = h[W8y.L3T](),
            w1 = W8y[m](E[W8y.T9T], D[W8y.T9T]),
            B = W8y[l](E[W8y.Z9T], D[W8y.Z9T]),
            N1 = W8y[W](w1, w1) + W8y[Z](B, B);
        if (W8y[P](N1, box2d[W8y.F5k])) continue;
        var f1 = box2d.b2GravityController.prototype.Step.s_f.SetXY(w1, B);
        f1[W8y.E40](W8y[N](this[n], N1, M, L));
        if (u[W8y.h0r]()) u[W8y.h40](f1, D);
        if (h[W8y.h0r]()) h[W8y.h40](f1[W8y.E40](-W8y.D8Q), E);
      }
    }
  }
};

box2d.b2GravityController.prototype.Step.s_f = new box2d[W8y.p7T]();
goog[W8y.U3T](W8y.w9k);
goog[W8y.V20]('box2d.b2Settings');

box2d[W8y.o30] = function () {};

box2d.b2Profile.prototype.step = W8y.u8Q;
box2d.b2Profile.prototype.collide = W8y.u8Q;
box2d.b2Profile.prototype.solve = W8y.u8Q;
box2d.b2Profile.prototype.solveInit = W8y.u8Q;
box2d.b2Profile.prototype.solveVelocity = W8y.u8Q;
box2d.b2Profile.prototype.solvePosition = W8y.u8Q;
box2d.b2Profile.prototype.broadphase = W8y.u8Q;
box2d.b2Profile.prototype.solveTOI = W8y.u8Q;

box2d.b2Profile.prototype.Reset = function () {
  this[W8y.D5H] = W8y.u8Q;
  this[W8y.A4r] = W8y.u8Q;
  this[W8y.N16] = W8y.u8Q;
  this[W8y.E6k] = W8y.u8Q;
  this[W8y.M8H] = W8y.u8Q;
  this[W8y.W4r] = W8y.u8Q;
  this[W8y.Z2M] = W8y.u8Q;
  this[W8y.W6H] = W8y.u8Q;
  return this;
};

box2d[W8y.A6H] = function () {};

box2d.b2TimeStep.prototype.dt = W8y.u8Q;
box2d.b2TimeStep.prototype.inv_dt = W8y.u8Q;
box2d.b2TimeStep.prototype.dtRatio = W8y.u8Q;
box2d.b2TimeStep.prototype.velocityIterations = W8y.u8Q;
box2d.b2TimeStep.prototype.positionIterations = W8y.u8Q;
box2d.b2TimeStep.prototype.warmStarting = W8y.G0T;

box2d.b2TimeStep.prototype.Copy = function (f) {
  this[W8y.I5H] = f[W8y.I5H];
  this[W8y.e4T] = f[W8y.e4T];
  this[W8y.k30] = f[W8y.k30];
  this[W8y.Z2r] = f[W8y.Z2r];
  this[W8y.l3M] = f[W8y.l3M];
  this[W8y.W6T] = f[W8y.W6T];
  return this;
};

box2d[W8y.G96] = function () {
  this[W8y.a30] = new box2d[W8y.p7T]();
};

box2d.b2Position.prototype.c = W8y.z6k;
box2d.b2Position.prototype.a = W8y.u8Q;

box2d[W8y.G96][W8y.N1r] = function (N) {
  return box2d[W8y.c2k](N, function (f) {
    return new box2d[W8y.G96]();
  });
};

box2d[W8y.Y6k] = function () {
  this[W8y.N8T] = new box2d[W8y.p7T]();
};

box2d.b2Velocity.prototype.v = W8y.z6k;
box2d.b2Velocity.prototype.w = W8y.u8Q;

box2d[W8y.Y6k][W8y.N1r] = function (N) {
  return box2d[W8y.c2k](N, function (f) {
    return new box2d[W8y.Y6k]();
  });
};

box2d[W8y.H80] = function () {
  this[W8y.D5H] = new box2d[W8y.A6H]();
};

box2d.b2SolverData.prototype.step = W8y.z6k;
box2d.b2SolverData.prototype.positions = W8y.z6k;
box2d.b2SolverData.prototype.velocities = W8y.z6k;
goog[W8y.U3T](W8y.t5H);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2Distance');
box2d[W8y.Q0M] = {
  e_vertex: W8y.u8Q,
  e_face: W8y.D8Q
};
goog[W8y.g5H](box2d[W8y.Q0M], W8y.R36, box2d[W8y.Q0M][W8y.y70]);
goog[W8y.g5H](box2d[W8y.Q0M], W8y.d0T, box2d[W8y.Q0M][W8y.X3k]);

box2d[W8y.q7k] = function (f) {
  this[W8y.n77] = f;
};

box2d.b2ContactFeature.prototype._id = W8y.z6k;
box2d.b2ContactFeature.prototype._indexA = W8y.u8Q;
box2d.b2ContactFeature.prototype._indexB = W8y.u8Q;
box2d.b2ContactFeature.prototype._typeA = W8y.u8Q;
box2d.b2ContactFeature.prototype._typeB = W8y.u8Q;
Object[W8y.B6H](box2d.b2ContactFeature.prototype, W8y.L2T, {
  enumerable: W8y.G0T,
  configurable: W8y.f5k,
  get: function get() {
    return this[W8y.q17];
  },
  set: function set(f) {
    var N = "w3L";
    this[W8y.q17] = f;
    this[W8y.n77][W8y.X1r] = W8y[N](this[W8y.n77][W8y.X1r] & 0xffffff00, this[W8y.q17] & 0x000000ff);
  }
});
Object[W8y.B6H](box2d.b2ContactFeature.prototype, W8y.Z3T, {
  enumerable: W8y.G0T,
  configurable: W8y.f5k,
  get: function get() {
    return this[W8y.p17];
  },
  set: function set(f) {
    var N = "N3L";
    this[W8y.p17] = f;
    this[W8y.n77][W8y.X1r] = W8y[N](this[W8y.n77][W8y.X1r] & 0xffff00ff, this[W8y.p17] << W8y.z8Q & 0x0000ff00);
  }
});
Object[W8y.B6H](box2d.b2ContactFeature.prototype, W8y.W36, {
  enumerable: W8y.G0T,
  configurable: W8y.f5k,
  get: function get() {
    return this[W8y.n36];
  },
  set: function set(f) {
    var N = "X3L";
    this[W8y.n36] = f;
    this[W8y.n77][W8y.X1r] = W8y[N](this[W8y.n77][W8y.X1r] & 0xff00ffff, this[W8y.n36] << W8y.l3T & 0x00ff0000);
  }
});
Object[W8y.B6H](box2d.b2ContactFeature.prototype, W8y.i26, {
  enumerable: W8y.G0T,
  configurable: W8y.f5k,
  get: function get() {
    return this[W8y.P36];
  },
  set: function set(f) {
    var N = "s3L";
    this[W8y.P36] = f;
    this[W8y.n77][W8y.X1r] = W8y[N](this[W8y.n77][W8y.X1r] & 0x00ffffff, this[W8y.P36] << W8y.t2T & 0xff000000);
  }
});

box2d[W8y.W66] = function () {
  this[W8y.i3k] = new box2d[W8y.q7k](this);
};

box2d.b2ContactID.prototype.cf = W8y.z6k;
box2d.b2ContactID.prototype.key = W8y.u8Q;

box2d.b2ContactID.prototype.Copy = function (f) {
  this[W8y.J4k] = f[W8y.J4k];
  return this;
};

box2d.b2ContactID.prototype.Clone = function () {
  return new box2d[W8y.W66]()[W8y.k97](this);
};

Object[W8y.B6H](box2d.b2ContactID.prototype, W8y.Y3M, {
  enumerable: W8y.G0T,
  configurable: W8y.f5k,
  get: function get() {
    return this[W8y.X1r];
  },
  set: function set(f) {
    var N = "K3L",
        P = "n3L",
        Z = "J3L",
        W = "b3L";
    this[W8y.X1r] = f;
    this[W8y.i3k][W8y.q17] = W8y[W](this[W8y.X1r], 0x000000ff);
    this[W8y.i3k][W8y.p17] = W8y[Z](this[W8y.X1r] >> W8y.z8Q, 0x000000ff);
    this[W8y.i3k][W8y.n36] = W8y[P](this[W8y.X1r] >> W8y.l3T, 0x000000ff);
    this[W8y.i3k][W8y.P36] = W8y[N](this[W8y.X1r] >> W8y.t2T, 0x000000ff);
  }
});

box2d[W8y.k47] = function () {
  this[W8y.B9H] = new box2d[W8y.p7T]();
  this[W8y.W6M] = new box2d[W8y.W66]();
};

box2d.b2ManifoldPoint.prototype.localPoint = W8y.z6k;
box2d.b2ManifoldPoint.prototype.normalImpulse = W8y.u8Q;
box2d.b2ManifoldPoint.prototype.tangentImpulse = W8y.u8Q;
box2d.b2ManifoldPoint.prototype.id = W8y.z6k;

box2d[W8y.k47][W8y.N1r] = function (N) {
  return box2d[W8y.c2k](N, function (f) {
    return new box2d[W8y.k47]();
  });
};

box2d.b2ManifoldPoint.prototype.Reset = function () {
  this[W8y.B9H][W8y.j6k]();
  this[W8y.y40] = W8y.u8Q;
  this[W8y.m2H] = W8y.u8Q;
  this[W8y.W6M][W8y.J4k] = W8y.u8Q;
};

box2d.b2ManifoldPoint.prototype.Copy = function (f) {
  this[W8y.B9H][W8y.k97](f[W8y.B9H]);
  this[W8y.y40] = f[W8y.y40];
  this[W8y.m2H] = f[W8y.m2H];
  this[W8y.W6M][W8y.k97](f[W8y.W6M]);
  return this;
};

box2d[W8y.j76] = {
  e_unknown: -W8y.D8Q,
  e_circles: W8y.u8Q,
  e_faceA: W8y.D8Q,
  e_faceB: W8y.d8Q
};
goog[W8y.g5H](box2d[W8y.j76], W8y.Q2M, box2d[W8y.j76][W8y.P47]);
goog[W8y.g5H](box2d[W8y.j76], W8y.s4r, box2d[W8y.j76][W8y.j5k]);
goog[W8y.g5H](box2d[W8y.j76], W8y.u77, box2d[W8y.j76][W8y.I60]);
goog[W8y.g5H](box2d[W8y.j76], W8y.Z07, box2d[W8y.j76][W8y.J60]);

box2d[W8y.F5Q] = function () {
  this[W8y.H10] = box2d[W8y.k47][W8y.N1r](box2d[W8y.j06]);
  this[W8y.V67] = new box2d[W8y.p7T]();
  this[W8y.B9H] = new box2d[W8y.p7T]();
  this[W8y.N2k] = box2d[W8y.j76][W8y.P47];
  this[W8y.O47] = W8y.u8Q;
};

box2d.b2Manifold.prototype.points = W8y.z6k;
box2d.b2Manifold.prototype.localNormal = W8y.z6k;
box2d.b2Manifold.prototype.localPoint = W8y.z6k;
box2d.b2Manifold.prototype.type = box2d[W8y.j76][W8y.P47];
box2d.b2Manifold.prototype.pointCount = W8y.u8Q;

box2d.b2Manifold.prototype.Reset = function () {
  var f = "H3L";

  for (var N = W8y.u8Q, P = box2d[W8y.j06]; W8y[f](N, P); ++N) {
    this[W8y.H10][N][W8y.w6M]();
  }

  this[W8y.V67][W8y.j6k]();
  this[W8y.B9H][W8y.j6k]();
  this[W8y.N2k] = box2d[W8y.j76][W8y.P47];
  this[W8y.O47] = W8y.u8Q;
};

box2d.b2Manifold.prototype.Copy = function (f) {
  var N = "r3L";
  this[W8y.O47] = f[W8y.O47];

  for (var P = W8y.u8Q, Z = box2d[W8y.j06]; W8y[N](P, Z); ++P) {
    this[W8y.H10][P][W8y.k97](f[W8y.H10][P]);
  }

  this[W8y.V67][W8y.k97](f[W8y.V67]);
  this[W8y.B9H][W8y.k97](f[W8y.B9H]);
  this[W8y.N2k] = f[W8y.N2k];
  return this;
};

box2d.b2Manifold.prototype.Clone = function () {
  return new box2d[W8y.F5Q]()[W8y.k97](this);
};

box2d[W8y.P10] = function () {
  this[W8y.M4T] = new box2d[W8y.p7T]();
  this[W8y.H10] = box2d[W8y.p7T][W8y.N1r](box2d[W8y.j06]);
  this[W8y.N5M] = box2d[W8y.D3r](box2d[W8y.j06]);
};

box2d.b2WorldManifold.prototype.normal = W8y.z6k;
box2d.b2WorldManifold.prototype.points = W8y.z6k;
box2d.b2WorldManifold.prototype.separations = W8y.z6k;

box2d.b2WorldManifold.prototype.Initialize = function (f, N, P, Z, W) {
  var l = "p3L",
      m = "L3L",
      C = "u3L",
      n = "d3L",
      k = "a3L",
      H = "e3L";

  if (W8y[H](f[W8y.O47], W8y.u8Q)) {
    return;
  }

  switch (f[W8y.N2k]) {
    case box2d[W8y.j76][W8y.j5k]:
      {
        this[W8y.M4T][W8y.y47](W8y.D8Q, W8y.u8Q);
        var i = box2d[W8y.o10](N, f[W8y.B9H], box2d.b2WorldManifold.prototype.Initialize.s_pointA),
            Q = box2d[W8y.o10](Z, f[W8y.H10][W8y.u8Q][W8y.B9H], box2d.b2WorldManifold.prototype.Initialize.s_pointB);

        if (W8y[k](box2d[W8y.Z9k](i, Q), box2d[W8y.s70])) {
          box2d[W8y.x8T](Q, i, this[W8y.M4T])[W8y.s1k]();
        }

        var e = box2d[W8y.r26](i, P, this[W8y.M4T], box2d.b2WorldManifold.prototype.Initialize.s_cA),
            j = box2d[W8y.W77](Q, W, this[W8y.M4T], box2d.b2WorldManifold.prototype.Initialize.s_cB);
        box2d[W8y.O80](e, j, this[W8y.H10][W8y.u8Q]);
        this[W8y.N5M][W8y.u8Q] = box2d[W8y.o27](box2d[W8y.x8T](j, e, box2d[W8y.p7T][W8y.t7M]), this[W8y.M4T]);
      }
      break;

    case box2d[W8y.j76][W8y.I60]:
      {
        box2d[W8y.x47](N[W8y.b50], f[W8y.V67], this[W8y.M4T]);
        var o = box2d[W8y.o10](N, f[W8y.B9H], box2d.b2WorldManifold.prototype.Initialize.s_planePoint);

        for (var S = W8y.u8Q, d = f[W8y.O47]; W8y[n](S, d); ++S) {
          var u = box2d[W8y.o10](Z, f[W8y.H10][S][W8y.B9H], box2d.b2WorldManifold.prototype.Initialize.s_clipPoint),
              D = W8y[C](P, box2d[W8y.o27](box2d[W8y.x8T](u, o, box2d[W8y.p7T][W8y.t7M]), this[W8y.M4T])),
              e = box2d[W8y.r26](u, D, this[W8y.M4T], box2d.b2WorldManifold.prototype.Initialize.s_cA),
              j = box2d[W8y.W77](u, W, this[W8y.M4T], box2d.b2WorldManifold.prototype.Initialize.s_cB);
          box2d[W8y.O80](e, j, this[W8y.H10][S]);
          this[W8y.N5M][S] = box2d[W8y.o27](box2d[W8y.x8T](j, e, box2d[W8y.p7T][W8y.t7M]), this[W8y.M4T]);
        }
      }
      break;

    case box2d[W8y.j76][W8y.J60]:
      {
        box2d[W8y.x47](Z[W8y.b50], f[W8y.V67], this[W8y.M4T]);
        var o = box2d[W8y.o10](Z, f[W8y.B9H], box2d.b2WorldManifold.prototype.Initialize.s_planePoint);

        for (var S = W8y.u8Q, d = f[W8y.O47]; W8y[m](S, d); ++S) {
          var u = box2d[W8y.o10](N, f[W8y.H10][S][W8y.B9H], box2d.b2WorldManifold.prototype.Initialize.s_clipPoint),
              D = W8y[l](W, box2d[W8y.o27](box2d[W8y.x8T](u, o, box2d[W8y.p7T][W8y.t7M]), this[W8y.M4T])),
              j = box2d[W8y.r26](u, D, this[W8y.M4T], box2d.b2WorldManifold.prototype.Initialize.s_cB),
              e = box2d[W8y.W77](u, P, this[W8y.M4T], box2d.b2WorldManifold.prototype.Initialize.s_cA);
          box2d[W8y.O80](e, j, this[W8y.H10][S]);
          this[W8y.N5M][S] = box2d[W8y.o27](box2d[W8y.x8T](e, j, box2d[W8y.p7T][W8y.t7M]), this[W8y.M4T]);
        }

        this[W8y.M4T][W8y.P8k]();
      }
      break;
  }
};

box2d.b2WorldManifold.prototype.Initialize.s_pointA = new box2d[W8y.p7T]();
box2d.b2WorldManifold.prototype.Initialize.s_pointB = new box2d[W8y.p7T]();
box2d.b2WorldManifold.prototype.Initialize.s_cA = new box2d[W8y.p7T]();
box2d.b2WorldManifold.prototype.Initialize.s_cB = new box2d[W8y.p7T]();
box2d.b2WorldManifold.prototype.Initialize.s_planePoint = new box2d[W8y.p7T]();
box2d.b2WorldManifold.prototype.Initialize.s_clipPoint = new box2d[W8y.p7T]();
box2d[W8y.A17] = {
  b2_nullState: W8y.u8Q,
  b2_addState: W8y.D8Q,
  b2_persistState: W8y.d8Q,
  b2_removeState: W8y.S8Q
};
goog[W8y.g5H](box2d[W8y.A17], W8y.r6Q, box2d[W8y.A17][W8y.P37]);
goog[W8y.g5H](box2d[W8y.A17], W8y.v60, box2d[W8y.A17][W8y.H27]);
goog[W8y.g5H](box2d[W8y.A17], W8y.R2H, box2d[W8y.A17][W8y.b1H]);
goog[W8y.g5H](box2d[W8y.A17], W8y.y4M, box2d[W8y.A17][W8y.Q1M]);

box2d[W8y.y8M] = function (f, N, P, Z) {
  var W = "V0L",
      l = "g0L",
      m = "l0L",
      C = "W0L",
      n = "Z0L",
      k = "U0L",
      H = "y0L",
      i = "F3L";

  for (var Q = W8y.u8Q, e = P[W8y.O47]; W8y[i](Q, e); ++Q) {
    var j = P[W8y.H10][Q][W8y.W6M],
        o = j[W8y.J4k];
    f[Q] = box2d[W8y.A17][W8y.Q1M];

    for (var S = W8y.u8Q, d = Z[W8y.O47]; W8y[H](S, d); ++S) {
      if (W8y[k](Z[W8y.H10][S][W8y.W6M][W8y.J4k], o)) {
        f[Q] = box2d[W8y.A17][W8y.b1H];
        break;
      }
    }
  }

  for (var e = box2d[W8y.j06]; W8y[n](Q, e); ++Q) {
    f[Q] = box2d[W8y.A17][W8y.P37];
  }

  for (var Q = W8y.u8Q, e = Z[W8y.O47]; W8y[C](Q, e); ++Q) {
    var j = Z[W8y.H10][Q][W8y.W6M],
        o = j[W8y.J4k];
    N[Q] = box2d[W8y.A17][W8y.H27];

    for (var S = W8y.u8Q, d = P[W8y.O47]; W8y[m](S, d); ++S) {
      if (W8y[l](P[W8y.H10][S][W8y.W6M][W8y.J4k], o)) {
        N[Q] = box2d[W8y.A17][W8y.b1H];
        break;
      }
    }
  }

  for (var e = box2d[W8y.j06]; W8y[W](Q, e); ++Q) {
    N[Q] = box2d[W8y.A17][W8y.P37];
  }
};

box2d[W8y.E5M] = function () {
  this[W8y.N8T] = new box2d[W8y.p7T]();
  this[W8y.W6M] = new box2d[W8y.W66]();
};

box2d.b2ClipVertex.prototype.v = W8y.z6k;
box2d.b2ClipVertex.prototype.id = W8y.z6k;

box2d[W8y.E5M][W8y.N1r] = function (N) {
  return box2d[W8y.c2k](N, function (f) {
    return new box2d[W8y.E5M]();
  });
};

box2d.b2ClipVertex.prototype.Copy = function (f) {
  this[W8y.N8T][W8y.k97](f[W8y.N8T]);
  this[W8y.W6M][W8y.k97](f[W8y.W6M]);
  return this;
};

box2d[W8y.K50] = function () {
  this[W8y.h17] = new box2d[W8y.p7T]();
  this[W8y.W47] = new box2d[W8y.p7T]();
  this[W8y.v4T] = W8y.D8Q;
};

box2d.b2RayCastInput.prototype.p1 = W8y.z6k;
box2d.b2RayCastInput.prototype.p2 = W8y.z6k;
box2d.b2RayCastInput.prototype.maxFraction = W8y.D8Q;

box2d.b2RayCastInput.prototype.Copy = function (f) {
  this[W8y.h17][W8y.k97](f[W8y.h17]);
  this[W8y.W47][W8y.k97](f[W8y.W47]);
  this[W8y.v4T] = f[W8y.v4T];
  return this;
};

box2d[W8y.B70] = function () {
  this[W8y.M4T] = new box2d[W8y.p7T]();
  this[W8y.j57] = W8y.u8Q;
};

box2d.b2RayCastOutput.prototype.normal = W8y.z6k;
box2d.b2RayCastOutput.prototype.fraction = W8y.u8Q;

box2d.b2RayCastOutput.prototype.Copy = function (f) {
  this[W8y.M4T][W8y.k97](f[W8y.M4T]);
  this[W8y.j57] = f[W8y.j57];
  return this;
};

box2d[W8y.Z20] = function () {
  this[W8y.d1T] = new box2d[W8y.p7T]();
  this[W8y.I1T] = new box2d[W8y.p7T]();
  this[W8y.n07] = new box2d[W8y.p7T]();
  this[W8y.u4H] = new box2d[W8y.p7T]();
};

box2d.b2AABB.prototype.lowerBound = W8y.z6k;
box2d.b2AABB.prototype.upperBound = W8y.z6k;
box2d.b2AABB.prototype.m_out_center = W8y.z6k;
box2d.b2AABB.prototype.m_out_extent = W8y.z6k;

box2d.b2AABB.prototype.Copy = function (f) {
  this[W8y.d1T][W8y.k97](f[W8y.d1T]);
  this[W8y.I1T][W8y.k97](f[W8y.I1T]);
  return this;
};

box2d.b2AABB.prototype.IsValid = function () {
  var f = "q0L",
      N = "i0L",
      P = "T0L",
      Z = "O0L",
      W = W8y[Z](this[W8y.I1T][W8y.T9T], this[W8y.d1T][W8y.T9T]),
      l = W8y[P](this[W8y.I1T][W8y.Z9T], this[W8y.d1T][W8y.Z9T]),
      m = W8y[N](W, W8y.u8Q) && W8y[f](l, W8y.u8Q);
  m = m && this[W8y.d1T][W8y.i07]() && this[W8y.I1T][W8y.i07]();
  return m;
};

box2d.b2AABB.prototype.GetCenter = function () {
  return box2d[W8y.O80](this[W8y.d1T], this[W8y.I1T], this[W8y.n07]);
};

box2d.b2AABB.prototype.GetExtents = function () {
  return box2d[W8y.w2T](this[W8y.d1T], this[W8y.I1T], this[W8y.u4H]);
};

box2d.b2AABB.prototype.GetPerimeter = function () {
  var f = "D0L",
      N = "S0L",
      P = "o0L",
      Z = W8y[P](this[W8y.I1T][W8y.T9T], this[W8y.d1T][W8y.T9T]),
      W = W8y[N](this[W8y.I1T][W8y.Z9T], this[W8y.d1T][W8y.Z9T]);
  return W8y[f](W8y.d8Q, Z + W);
};

box2d.b2AABB.prototype.Combine1 = function (f) {
  this[W8y.d1T][W8y.T9T] = box2d[W8y.G60](this[W8y.d1T][W8y.T9T], f[W8y.d1T][W8y.T9T]);
  this[W8y.d1T][W8y.Z9T] = box2d[W8y.G60](this[W8y.d1T][W8y.Z9T], f[W8y.d1T][W8y.Z9T]);
  this[W8y.I1T][W8y.T9T] = box2d[W8y.v30](this[W8y.I1T][W8y.T9T], f[W8y.I1T][W8y.T9T]);
  this[W8y.I1T][W8y.Z9T] = box2d[W8y.v30](this[W8y.I1T][W8y.Z9T], f[W8y.I1T][W8y.Z9T]);
  return this;
};

box2d.b2AABB.prototype.Combine2 = function (f, N) {
  this[W8y.d1T][W8y.T9T] = box2d[W8y.G60](f[W8y.d1T][W8y.T9T], N[W8y.d1T][W8y.T9T]);
  this[W8y.d1T][W8y.Z9T] = box2d[W8y.G60](f[W8y.d1T][W8y.Z9T], N[W8y.d1T][W8y.Z9T]);
  this[W8y.I1T][W8y.T9T] = box2d[W8y.v30](f[W8y.I1T][W8y.T9T], N[W8y.I1T][W8y.T9T]);
  this[W8y.I1T][W8y.Z9T] = box2d[W8y.v30](f[W8y.I1T][W8y.Z9T], N[W8y.I1T][W8y.Z9T]);
  return this;
};

box2d[W8y.Z20][W8y.p70] = function (f, N, P) {
  P[W8y.w2M](f, N);
  return P;
};

box2d.b2AABB.prototype.Contains = function (f) {
  var N = "t0L",
      P = "z0L",
      Z = "B0L",
      W = "h0L",
      l = W8y.f5k;
  l = l && W8y[W](this[W8y.d1T][W8y.T9T], f[W8y.d1T][W8y.T9T]);
  l = l && W8y[Z](this[W8y.d1T][W8y.Z9T], f[W8y.d1T][W8y.Z9T]);
  l = l && W8y[P](f[W8y.I1T][W8y.T9T], this[W8y.I1T][W8y.T9T]);
  l = l && W8y[N](f[W8y.I1T][W8y.Z9T], this[W8y.I1T][W8y.Z9T]);
  return l;
};

box2d.b2AABB.prototype.RayCast = function (f, N) {
  var P = "b9L",
      Z = "s9L",
      W = "X9L",
      l = "N9L",
      m = "w9L",
      C = "A7L",
      n = "G7L",
      k = "v7L",
      H = "M7L",
      i = "E7L",
      Q = "R7L",
      e = "I7L",
      j = "j7L",
      o = "Q7L",
      S = "k7L",
      d = "C7L",
      u = "x7L",
      D = "m7L",
      M = "Y7L",
      y1 = "c7L",
      h = "P7L",
      E = "f7L",
      L = -box2d[W8y.Z57],
      w1 = box2d[W8y.Z57],
      B = N[W8y.h17][W8y.T9T],
      N1 = N[W8y.h17][W8y.Z9T],
      f1 = W8y[E](N[W8y.W47][W8y.T9T], N[W8y.h17][W8y.T9T]),
      c1 = W8y[h](N[W8y.W47][W8y.Z9T], N[W8y.h17][W8y.Z9T]),
      l1 = box2d[W8y.t67](f1),
      P1 = box2d[W8y.t67](c1),
      s1 = f[W8y.M4T];

  if (W8y[y1](l1, box2d[W8y.F5k])) {
    if (W8y[M](B, this[W8y.d1T][W8y.T9T]) || W8y[D](this[W8y.I1T][W8y.T9T], B)) {
      return W8y.G0T;
    }
  } else {
    var b1 = W8y[u](W8y.D8Q, f1),
        m1 = W8y[d](this[W8y.d1T][W8y.T9T] - B, b1),
        W1 = W8y[S](this[W8y.I1T][W8y.T9T] - B, b1),
        J1 = -W8y.D8Q;

    if (W8y[o](m1, W1)) {
      var C1 = m1;
      m1 = W1;
      W1 = C1;
      J1 = W8y.D8Q;
    }

    if (W8y[j](m1, L)) {
      s1[W8y.T9T] = J1;
      s1[W8y.Z9T] = W8y.u8Q;
      L = m1;
    }

    w1 = box2d[W8y.G60](w1, W1);

    if (W8y[e](L, w1)) {
      return W8y.G0T;
    }
  }

  if (W8y[Q](P1, box2d[W8y.F5k])) {
    if (W8y[i](N1, this[W8y.d1T][W8y.Z9T]) || W8y[H](this[W8y.I1T][W8y.Z9T], N1)) {
      return W8y.G0T;
    }
  } else {
    var b1 = W8y[k](W8y.D8Q, c1),
        m1 = W8y[n](this[W8y.d1T][W8y.Z9T] - N1, b1),
        W1 = W8y[C](this[W8y.I1T][W8y.Z9T] - N1, b1),
        J1 = -W8y.D8Q;

    if (W8y[m](m1, W1)) {
      var C1 = m1;
      m1 = W1;
      W1 = C1;
      J1 = W8y.D8Q;
    }

    if (W8y[l](m1, L)) {
      s1[W8y.T9T] = W8y.u8Q;
      s1[W8y.Z9T] = J1;
      L = m1;
    }

    w1 = box2d[W8y.G60](w1, W1);

    if (W8y[W](L, w1)) {
      return W8y.G0T;
    }
  }

  if (W8y[Z](L, W8y.u8Q) || W8y[P](N[W8y.v4T], L)) {
    return W8y.G0T;
  }

  f[W8y.j57] = L;
  return W8y.f5k;
};

box2d.b2AABB.prototype.TestOverlap = function (f) {
  var N = "d9L",
      P = "a9L",
      Z = "e9L",
      W = "r9L",
      l = "H9L",
      m = "K9L",
      C = "n9L",
      n = "J9L",
      k = W8y[n](f[W8y.d1T][W8y.T9T], this[W8y.I1T][W8y.T9T]),
      H = W8y[C](f[W8y.d1T][W8y.Z9T], this[W8y.I1T][W8y.Z9T]),
      i = W8y[m](this[W8y.d1T][W8y.T9T], f[W8y.I1T][W8y.T9T]),
      Q = W8y[l](this[W8y.d1T][W8y.Z9T], f[W8y.I1T][W8y.Z9T]);
  if (W8y[W](k, W8y.u8Q) || W8y[Z](H, W8y.u8Q)) return W8y.G0T;
  if (W8y[P](i, W8y.u8Q) || W8y[N](Q, W8y.u8Q)) return W8y.G0T;
  return W8y.f5k;
};

box2d[W8y.k50] = function (f, N) {
  var P = "W8L",
      Z = "Z8L",
      W = "U8L",
      l = "y8L",
      m = "F9L",
      C = "p9L",
      n = "L9L",
      k = "u9L",
      H = W8y[k](N[W8y.d1T][W8y.T9T], f[W8y.I1T][W8y.T9T]),
      i = W8y[n](N[W8y.d1T][W8y.Z9T], f[W8y.I1T][W8y.Z9T]),
      Q = W8y[C](f[W8y.d1T][W8y.T9T], N[W8y.I1T][W8y.T9T]),
      e = W8y[m](f[W8y.d1T][W8y.Z9T], N[W8y.I1T][W8y.Z9T]);
  if (W8y[l](H, W8y.u8Q) || W8y[W](i, W8y.u8Q)) return W8y.G0T;
  if (W8y[Z](Q, W8y.u8Q) || W8y[P](e, W8y.u8Q)) return W8y.G0T;
  return W8y.f5k;
};

box2d[W8y.v17] = function (f, N, P, Z, W) {
  var l = "o8L",
      m = "q8L",
      C = "i8L",
      n = "T8L",
      k = "O8L",
      H = "V8L",
      i = "g8L",
      Q = "l8L",
      e = W8y.u8Q,
      j = N[W8y.u8Q],
      o = N[W8y.D8Q],
      S = W8y[Q](box2d[W8y.o27](P, j[W8y.N8T]), Z),
      d = W8y[i](box2d[W8y.o27](P, o[W8y.N8T]), Z);
  if (W8y[H](S, W8y.u8Q)) f[e++][W8y.k97](j);
  if (W8y[k](d, W8y.u8Q)) f[e++][W8y.k97](o);

  if (W8y[n](S * d, W8y.u8Q)) {
    var u = W8y[C](S, S - d),
        D = f[e][W8y.N8T];
    D[W8y.T9T] = j[W8y.N8T][W8y.T9T] + W8y[m](u, o[W8y.N8T][W8y.T9T] - j[W8y.N8T][W8y.T9T]);
    D[W8y.Z9T] = j[W8y.N8T][W8y.Z9T] + W8y[l](u, o[W8y.N8T][W8y.Z9T] - j[W8y.N8T][W8y.Z9T]);
    var M = f[e][W8y.W6M];
    M[W8y.i3k][W8y.K30] = W;
    M[W8y.i3k][W8y.L40] = j[W8y.W6M][W8y.i3k][W8y.L40];
    M[W8y.i3k][W8y.G30] = box2d[W8y.Q0M][W8y.y70];
    M[W8y.i3k][W8y.j30] = box2d[W8y.Q0M][W8y.X3k];
    ++e;
  }

  return e;
};

box2d[W8y.p2M] = function (f, N, P, Z, W, l) {
  var m = "S8L",
      C = box2d[W8y.p2M][W8y.F86][W8y.w6M]();
  C[W8y.w4T][W8y.r7k](f, N);
  C[W8y.i4T][W8y.r7k](P, Z);
  C[W8y.D77][W8y.k97](W);
  C[W8y.U97][W8y.k97](l);
  C[W8y.W40] = W8y.f5k;
  var n = box2d[W8y.p2M][W8y.O5H][W8y.w6M]();
  n[W8y.S5k] = W8y.u8Q;
  var k = box2d[W8y.p2M][W8y.m0H][W8y.w6M]();
  box2d[W8y.A37](k, n, C);
  return W8y[m](k[W8y.S60], W8y.j3T * box2d[W8y.F5k]);
};

box2d[W8y.p2M][W8y.F86] = new box2d[W8y.x4H]();
box2d[W8y.p2M][W8y.O5H] = new box2d[W8y.n8k]();
box2d[W8y.p2M][W8y.m0H] = new box2d[W8y.h0M]();
goog[W8y.U3T](W8y.c4k);
goog[W8y.V20]('box2d.b2Settings');

box2d[W8y.F67] = function () {
  this[W8y.t06] = new Date()[W8y.T5M]();
};

box2d.b2Timer.prototype.m_start = W8y.u8Q;

box2d.b2Timer.prototype.Reset = function () {
  this[W8y.t06] = new Date()[W8y.T5M]();
  return this;
};

box2d.b2Timer.prototype.GetMilliseconds = function () {
  var f = "D8L";
  return W8y[f](new Date()[W8y.T5M](), this[W8y.t06]);
};

box2d[W8y.g86] = function () {};

box2d.b2Counter.prototype.m_count = W8y.u8Q;
box2d.b2Counter.prototype.m_min_count = W8y.u8Q;
box2d.b2Counter.prototype.m_max_count = W8y.u8Q;

box2d.b2Counter.prototype.GetCount = function () {
  return this[W8y.o9k];
};

box2d.b2Counter.prototype.GetMinCount = function () {
  return this[W8y.V80];
};

box2d.b2Counter.prototype.GetMaxCount = function () {
  return this[W8y.f8T];
};

box2d.b2Counter.prototype.ResetCount = function () {
  var f = this[W8y.o9k];
  this[W8y.o9k] = W8y.u8Q;
  return f;
};

box2d.b2Counter.prototype.ResetMinCount = function () {
  this[W8y.V80] = W8y.u8Q;
};

box2d.b2Counter.prototype.ResetMaxCount = function () {
  this[W8y.f8T] = W8y.u8Q;
};

box2d.b2Counter.prototype.Increment = function () {
  var f = "h8L";
  this[W8y.o9k]++;

  if (W8y[f](this[W8y.f8T], this[W8y.o9k])) {
    this[W8y.f8T] = this[W8y.o9k];
  }
};

box2d.b2Counter.prototype.Decrement = function () {
  var f = "B8L";
  this[W8y.o9k]--;

  if (W8y[f](this[W8y.V80], this[W8y.o9k])) {
    this[W8y.V80] = this[W8y.o9k];
  }
};

goog[W8y.U3T](W8y.T2k);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Distance');
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2Timer');
W8y[W8y.A9M](W8y.q3H);
W8y[W8y.L20](W8y.q3H);
W8y[W8y.o4H](W8y.u8Q);
W8y[W8y.E2T](W8y.u8Q);
W8y[W8y.j17](W8y.u8Q);
W8y[W8y.L2H](W8y.u8Q);
W8y[W8y.d8T](W8y.u8Q);

box2d[W8y.b4H] = function () {
  this[W8y.w4T] = new box2d[W8y.E4H]();
  this[W8y.i4T] = new box2d[W8y.E4H]();
  this[W8y.Y80] = new box2d[W8y.I30]();
  this[W8y.q80] = new box2d[W8y.I30]();
};

box2d.b2TOIInput.prototype.proxyA = W8y.z6k;
box2d.b2TOIInput.prototype.proxyB = W8y.z6k;
box2d.b2TOIInput.prototype.sweepA = W8y.z6k;
box2d.b2TOIInput.prototype.sweepB = W8y.z6k;
box2d.b2TOIInput.prototype.tMax = W8y.u8Q;
box2d[W8y.p96] = {
  e_unknown: W8y.u8Q,
  e_failed: W8y.D8Q,
  e_overlapped: W8y.d8Q,
  e_touching: W8y.S8Q,
  e_separated: W8y.v8Q
};
goog[W8y.g5H](box2d[W8y.p96], W8y.Q2M, box2d[W8y.p96][W8y.P47]);
goog[W8y.g5H](box2d[W8y.p96], W8y.e4H, box2d[W8y.p96][W8y.U4T]);
goog[W8y.g5H](box2d[W8y.p96], W8y.L6Q, box2d[W8y.p96][W8y.a46]);
goog[W8y.g5H](box2d[W8y.p96], W8y.R6M, box2d[W8y.p96][W8y.x07]);
goog[W8y.g5H](box2d[W8y.p96], W8y.g5k, box2d[W8y.p96][W8y.O57]);

box2d[W8y.V6T] = function () {};

box2d.b2TOIOutput.prototype.state = box2d[W8y.p96][W8y.P47];
box2d.b2TOIOutput.prototype.t = W8y.u8Q;
box2d[W8y.R3T] = {
  e_unknown: -W8y.D8Q,
  e_points: W8y.u8Q,
  e_faceA: W8y.D8Q,
  e_faceB: W8y.d8Q
};
goog[W8y.g5H](box2d[W8y.R3T], W8y.Q2M, box2d[W8y.R3T][W8y.P47]);
goog[W8y.g5H](box2d[W8y.R3T], W8y.A1r, box2d[W8y.R3T][W8y.V06]);
goog[W8y.g5H](box2d[W8y.R3T], W8y.u77, box2d[W8y.R3T][W8y.I60]);
goog[W8y.g5H](box2d[W8y.R3T], W8y.Z07, box2d[W8y.R3T][W8y.J60]);

box2d[W8y.C8H] = function () {
  this[W8y.I6T] = new box2d[W8y.I30]();
  this[W8y.I5T] = new box2d[W8y.I30]();
  this[W8y.K2T] = new box2d[W8y.p7T]();
  this[W8y.V0H] = new box2d[W8y.p7T]();
};

box2d.b2SeparationFunction.prototype.m_proxyA = W8y.z6k;
box2d.b2SeparationFunction.prototype.m_proxyB = W8y.z6k;
box2d.b2SeparationFunction.prototype.m_sweepA = W8y.z6k;
box2d.b2SeparationFunction.prototype.m_sweepB = W8y.z6k;
box2d.b2SeparationFunction.prototype.m_type = box2d[W8y.R3T][W8y.P47];
box2d.b2SeparationFunction.prototype.m_localPoint = W8y.z6k;
box2d.b2SeparationFunction.prototype.m_axis = W8y.z6k;

box2d.b2SeparationFunction.prototype.Initialize = function (f, N, P, Z, W, l) {
  var m = "Y6L",
      C = "c6L",
      n = "P6L",
      k = "f6L",
      H = "t8L",
      i = "z8L";
  this[W8y.A0k] = N;
  this[W8y.J7k] = Z;
  var Q = f[W8y.S5k];

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[i](W8y.u8Q, Q) && W8y[H](Q, W8y.S8Q));
  }

  this[W8y.I6T][W8y.k97](P);
  this[W8y.I5T][W8y.k97](W);
  var e = box2d[W8y.j5T][W8y.s20],
      j = box2d[W8y.j5T][W8y.F40];
  this[W8y.I6T][W8y.x8Q](e, l);
  this[W8y.I5T][W8y.x8Q](j, l);

  if (W8y[k](Q, W8y.D8Q)) {
    this[W8y.b5T] = box2d[W8y.R3T][W8y.V06];
    var o = this[W8y.A0k][W8y.C8k](f[W8y.K30][W8y.u8Q]),
        S = this[W8y.J7k][W8y.C8k](f[W8y.L40][W8y.u8Q]),
        d = box2d[W8y.o10](e, o, box2d[W8y.j5T][W8y.v37]),
        u = box2d[W8y.o10](j, S, box2d[W8y.j5T][W8y.o6T]);
    box2d[W8y.x8T](u, d, this[W8y.V0H]);
    var D = this[W8y.V0H][W8y.Y27]();
    return D;
  } else if (W8y[n](f[W8y.K30][W8y.u8Q], f[W8y.K30][W8y.D8Q])) {
    this[W8y.b5T] = box2d[W8y.R3T][W8y.J60];
    var M = this[W8y.J7k][W8y.C8k](f[W8y.L40][W8y.u8Q]),
        y1 = this[W8y.J7k][W8y.C8k](f[W8y.L40][W8y.D8Q]);
    box2d[W8y.T67](box2d[W8y.x8T](y1, M, box2d[W8y.p7T][W8y.t7M]), this[W8y.V0H])[W8y.s1k]();
    var h = box2d[W8y.x47](j[W8y.b50], this[W8y.V0H], box2d[W8y.j5T][W8y.z76]);
    box2d[W8y.O80](M, y1, this[W8y.K2T]);
    var u = box2d[W8y.o10](j, this[W8y.K2T], box2d[W8y.j5T][W8y.o6T]),
        o = this[W8y.A0k][W8y.C8k](f[W8y.K30][W8y.u8Q]),
        d = box2d[W8y.o10](e, o, box2d[W8y.j5T][W8y.v37]),
        D = box2d[W8y.o27](box2d[W8y.x8T](d, u, box2d[W8y.p7T][W8y.t7M]), h);

    if (W8y[C](D, W8y.u8Q)) {
      this[W8y.V0H][W8y.P8k]();
      D = -D;
    }

    return D;
  } else {
    this[W8y.b5T] = box2d[W8y.R3T][W8y.I60];
    var E = this[W8y.A0k][W8y.C8k](f[W8y.K30][W8y.u8Q]),
        L = this[W8y.A0k][W8y.C8k](f[W8y.K30][W8y.D8Q]);
    box2d[W8y.T67](box2d[W8y.x8T](L, E, box2d[W8y.p7T][W8y.t7M]), this[W8y.V0H])[W8y.s1k]();
    var h = box2d[W8y.x47](e[W8y.b50], this[W8y.V0H], box2d[W8y.j5T][W8y.z76]);
    box2d[W8y.O80](E, L, this[W8y.K2T]);
    var d = box2d[W8y.o10](e, this[W8y.K2T], box2d[W8y.j5T][W8y.v37]),
        S = this[W8y.J7k][W8y.C8k](f[W8y.L40][W8y.u8Q]),
        u = box2d[W8y.o10](j, S, box2d[W8y.j5T][W8y.o6T]),
        D = box2d[W8y.o27](box2d[W8y.x8T](u, d, box2d[W8y.p7T][W8y.t7M]), h);

    if (W8y[m](D, W8y.u8Q)) {
      this[W8y.V0H][W8y.P8k]();
      D = -D;
    }

    return D;
  }
};

box2d.b2SeparationFunction.prototype.FindMinSeparation = function (f, N, P) {
  var Z = box2d[W8y.j5T][W8y.s20],
      W = box2d[W8y.j5T][W8y.F40];
  this[W8y.I6T][W8y.x8Q](Z, P);
  this[W8y.I5T][W8y.x8Q](W, P);

  switch (this[W8y.b5T]) {
    case box2d[W8y.R3T][W8y.V06]:
      {
        var l = box2d[W8y.b0M](Z[W8y.b50], this[W8y.V0H], box2d[W8y.j5T][W8y.R37]),
            m = box2d[W8y.b0M](W[W8y.b50], box2d[W8y.F7M](this[W8y.V0H], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.j5T][W8y.O37]);
        f[W8y.u8Q] = this[W8y.A0k][W8y.d0H](l);
        N[W8y.u8Q] = this[W8y.J7k][W8y.d0H](m);
        var C = this[W8y.A0k][W8y.C8k](f[W8y.u8Q]),
            n = this[W8y.J7k][W8y.C8k](N[W8y.u8Q]),
            k = box2d[W8y.o10](Z, C, box2d[W8y.j5T][W8y.v37]),
            H = box2d[W8y.o10](W, n, box2d[W8y.j5T][W8y.o6T]),
            i = box2d[W8y.o27](box2d[W8y.x8T](H, k, box2d[W8y.p7T][W8y.t7M]), this[W8y.V0H]);
        return i;
      }

    case box2d[W8y.R3T][W8y.I60]:
      {
        var Q = box2d[W8y.x47](Z[W8y.b50], this[W8y.V0H], box2d[W8y.j5T][W8y.z76]),
            k = box2d[W8y.o10](Z, this[W8y.K2T], box2d[W8y.j5T][W8y.v37]),
            m = box2d[W8y.b0M](W[W8y.b50], box2d[W8y.F7M](Q, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.j5T][W8y.O37]);
        f[W8y.u8Q] = -W8y.D8Q;
        N[W8y.u8Q] = this[W8y.J7k][W8y.d0H](m);
        var n = this[W8y.J7k][W8y.C8k](N[W8y.u8Q]),
            H = box2d[W8y.o10](W, n, box2d[W8y.j5T][W8y.o6T]),
            i = box2d[W8y.o27](box2d[W8y.x8T](H, k, box2d[W8y.p7T][W8y.t7M]), Q);
        return i;
      }

    case box2d[W8y.R3T][W8y.J60]:
      {
        var Q = box2d[W8y.x47](W[W8y.b50], this[W8y.V0H], box2d[W8y.j5T][W8y.z76]),
            H = box2d[W8y.o10](W, this[W8y.K2T], box2d[W8y.j5T][W8y.o6T]),
            l = box2d[W8y.b0M](Z[W8y.b50], box2d[W8y.F7M](Q, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.j5T][W8y.R37]);
        N[W8y.u8Q] = -W8y.D8Q;
        f[W8y.u8Q] = this[W8y.A0k][W8y.d0H](l);
        var C = this[W8y.A0k][W8y.C8k](f[W8y.u8Q]),
            k = box2d[W8y.o10](Z, C, box2d[W8y.j5T][W8y.v37]),
            i = box2d[W8y.o27](box2d[W8y.x8T](k, H, box2d[W8y.p7T][W8y.t7M]), Q);
        return i;
      }

    default:
      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y.G0T);
      }

      f[W8y.u8Q] = -W8y.D8Q;
      N[W8y.u8Q] = -W8y.D8Q;
      return W8y.u8Q;
  }
};

box2d.b2SeparationFunction.prototype.Evaluate = function (f, N, P) {
  var Z = box2d[W8y.j5T][W8y.s20],
      W = box2d[W8y.j5T][W8y.F40];
  this[W8y.I6T][W8y.x8Q](Z, P);
  this[W8y.I5T][W8y.x8Q](W, P);

  switch (this[W8y.b5T]) {
    case box2d[W8y.R3T][W8y.V06]:
      {
        var l = this[W8y.A0k][W8y.C8k](f),
            m = this[W8y.J7k][W8y.C8k](N),
            C = box2d[W8y.o10](Z, l, box2d[W8y.j5T][W8y.v37]),
            n = box2d[W8y.o10](W, m, box2d[W8y.j5T][W8y.o6T]),
            k = box2d[W8y.o27](box2d[W8y.x8T](n, C, box2d[W8y.p7T][W8y.t7M]), this[W8y.V0H]);
        return k;
      }

    case box2d[W8y.R3T][W8y.I60]:
      {
        var H = box2d[W8y.x47](Z[W8y.b50], this[W8y.V0H], box2d[W8y.j5T][W8y.z76]),
            C = box2d[W8y.o10](Z, this[W8y.K2T], box2d[W8y.j5T][W8y.v37]),
            m = this[W8y.J7k][W8y.C8k](N),
            n = box2d[W8y.o10](W, m, box2d[W8y.j5T][W8y.o6T]),
            k = box2d[W8y.o27](box2d[W8y.x8T](n, C, box2d[W8y.p7T][W8y.t7M]), H);
        return k;
      }

    case box2d[W8y.R3T][W8y.J60]:
      {
        var H = box2d[W8y.x47](W[W8y.b50], this[W8y.V0H], box2d[W8y.j5T][W8y.z76]),
            n = box2d[W8y.o10](W, this[W8y.K2T], box2d[W8y.j5T][W8y.o6T]),
            l = this[W8y.A0k][W8y.C8k](f),
            C = box2d[W8y.o10](Z, l, box2d[W8y.j5T][W8y.v37]),
            k = box2d[W8y.o27](box2d[W8y.x8T](C, n, box2d[W8y.p7T][W8y.t7M]), H);
        return k;
      }

    default:
      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y.G0T);
      }

      return W8y.u8Q;
  }
};

box2d[W8y.j5T] = function (f, N) {
  var P = "Y5L",
      Z = "c5L",
      W = "P5L",
      l = "f5L",
      m = "t6L",
      C = "z6L",
      n = "v6L",
      k = "M6L",
      H = "E6L",
      i = "R6L",
      Q = "I6L",
      e = "j6L",
      j = "FindMinSeparation",
      o = "Q6L",
      S = "k6L",
      d = "C6L",
      u = "x6L",
      D = "m6L",
      M = box2d[W8y.j5T][W8y.I16][W8y.w6M]();
  ++box2d[W8y.V4k];
  f[W8y.x1T] = box2d[W8y.p96][W8y.P47];
  f[W8y.B80] = N[W8y.G06];
  var y1 = N[W8y.w4T],
      h = N[W8y.i4T],
      E = box2d[W8y.j5T][W8y.o2M][W8y.k97](N[W8y.Y80]),
      L = box2d[W8y.j5T][W8y.v3M][W8y.k97](N[W8y.q80]);
  E[W8y.Y27]();
  L[W8y.Y27]();
  var w1 = N[W8y.G06],
      B = y1[W8y.o4T] + h[W8y.o4T],
      N1 = box2d[W8y.v30](box2d[W8y.Z8k], W8y[D](B, W8y.S8Q * box2d[W8y.Z8k])),
      f1 = W8y[u](W8y.m10, box2d[W8y.Z8k]);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[d](N1, f1));
  }

  var c1 = W8y.u8Q,
      l1 = W8y.J3T,
      P1 = W8y.u8Q,
      s1 = box2d[W8y.j5T][W8y.D4M];
  s1[W8y.S5k] = W8y.u8Q;
  var b1 = box2d[W8y.j5T][W8y.h9T];
  b1[W8y.w4T] = N[W8y.w4T];
  b1[W8y.i4T] = N[W8y.i4T];
  b1[W8y.W40] = W8y.G0T;

  for (;;) {
    var m1 = box2d[W8y.j5T][W8y.s20],
        W1 = box2d[W8y.j5T][W8y.F40];
    E[W8y.x8Q](m1, c1);
    L[W8y.x8Q](W1, c1);
    b1[W8y.D77][W8y.k97](m1);
    b1[W8y.U97][W8y.k97](W1);
    var J1 = box2d[W8y.j5T][W8y.O66];
    box2d[W8y.A37](J1, s1, b1);

    if (W8y[S](J1[W8y.S60], W8y.u8Q)) {
      f[W8y.x1T] = box2d[W8y.p96][W8y.a46];
      f[W8y.B80] = W8y.u8Q;
      break;
    }

    if (W8y[o](J1[W8y.S60], N1 + f1)) {
      f[W8y.x1T] = box2d[W8y.p96][W8y.x07];
      f[W8y.B80] = c1;
      break;
    }

    var C1 = box2d[W8y.j5T][W8y.M26];
    C1[W8y.Y6T](s1, y1, E, h, L, c1);
    var x1 = W8y.G0T,
        T1 = w1,
        K1 = W8y.u8Q;

    for (;;) {
      var V1 = box2d[W8y.j5T][W8y.b60],
          Q1 = box2d[W8y.j5T][W8y.F80],
          D1 = C1[j](V1, Q1, T1);

      if (W8y[e](D1, N1 + f1)) {
        f[W8y.x1T] = box2d[W8y.p96][W8y.O57];
        f[W8y.B80] = w1;
        x1 = W8y.f5k;
        break;
      }

      if (W8y[Q](D1, N1 - f1)) {
        c1 = T1;
        break;
      }

      var d1 = C1[W8y.m1H](V1[W8y.u8Q], Q1[W8y.u8Q], c1);

      if (W8y[i](d1, N1 - f1)) {
        f[W8y.x1T] = box2d[W8y.p96][W8y.U4T];
        f[W8y.B80] = c1;
        x1 = W8y.f5k;
        break;
      }

      if (W8y[H](d1, N1 + f1)) {
        f[W8y.x1T] = box2d[W8y.p96][W8y.x07];
        f[W8y.B80] = c1;
        x1 = W8y.f5k;
        break;
      }

      var u1 = W8y.u8Q,
          j1 = c1,
          G1 = T1;

      for (;;) {
        var I1 = W8y.u8Q;

        if (W8y[k](u1, W8y.D8Q)) {
          I1 = j1 + W8y[n](N1 - d1, G1 - j1, D1 - d1);
        } else {
          I1 = W8y[C](W8y.T3H, j1 + G1);
        }

        ++u1;
        ++box2d[W8y.P16];
        var e1 = C1[W8y.m1H](V1[W8y.u8Q], Q1[W8y.u8Q], I1);

        if (W8y[m](box2d[W8y.t67](e1 - N1), f1)) {
          T1 = I1;
          break;
        }

        if (W8y[l](e1, N1)) {
          j1 = I1;
          d1 = e1;
        } else {
          G1 = I1;
          D1 = e1;
        }

        if (W8y[W](u1, W8y.M0T)) {
          break;
        }
      }

      box2d[W8y.O4H] = box2d[W8y.v30](box2d[W8y.O4H], u1);
      ++K1;

      if (W8y[Z](K1, box2d[W8y.E1M])) {
        break;
      }
    }

    ++P1;
    ++box2d[W8y.v1r];

    if (x1) {
      break;
    }

    if (W8y[P](P1, l1)) {
      f[W8y.x1T] = box2d[W8y.p96][W8y.U4T];
      f[W8y.B80] = c1;
      break;
    }
  }

  box2d[W8y.R4r] = box2d[W8y.v30](box2d[W8y.R4r], P1);
  var S1 = M[W8y.n56]();
  box2d[W8y.C97] = box2d[W8y.v30](box2d[W8y.C97], S1);
  box2d[W8y.U67] += S1;
};

box2d[W8y.j5T][W8y.I16] = new box2d[W8y.F67]();
box2d[W8y.j5T][W8y.D4M] = new box2d[W8y.n8k]();
box2d[W8y.j5T][W8y.h9T] = new box2d[W8y.x4H]();
box2d[W8y.j5T][W8y.O66] = new box2d[W8y.h0M]();
box2d[W8y.j5T][W8y.s20] = new box2d[W8y.P70]();
box2d[W8y.j5T][W8y.F40] = new box2d[W8y.P70]();
box2d[W8y.j5T][W8y.b60] = box2d[W8y.D3r](W8y.D8Q);
box2d[W8y.j5T][W8y.F80] = box2d[W8y.D3r](W8y.D8Q);
box2d[W8y.j5T][W8y.M26] = new box2d[W8y.C8H]();
box2d[W8y.j5T][W8y.o2M] = new box2d[W8y.I30]();
box2d[W8y.j5T][W8y.v3M] = new box2d[W8y.I30]();
box2d[W8y.j5T][W8y.v37] = new box2d[W8y.p7T]();
box2d[W8y.j5T][W8y.o6T] = new box2d[W8y.p7T]();
box2d[W8y.j5T][W8y.z76] = new box2d[W8y.p7T]();
box2d[W8y.j5T][W8y.R37] = new box2d[W8y.p7T]();
box2d[W8y.j5T][W8y.O37] = new box2d[W8y.p7T]();
goog[W8y.U3T](W8y.G4r);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Collision');
goog[W8y.V20]('box2d.b2TimeOfImpact');

box2d[W8y.s2M] = function (f, N) {
  var P = "m5L";
  return box2d[W8y.d5M](W8y[P](f, N));
};

box2d[W8y.e3M] = function (f, N) {
  var P = "x5L";
  return W8y[P](f, N) ? f : N;
};

box2d[W8y.C27] = function () {};

box2d.b2ContactEdge.prototype.other = W8y.z6k;
box2d.b2ContactEdge.prototype.contact = W8y.z6k;
box2d.b2ContactEdge.prototype.prev = W8y.z6k;
box2d.b2ContactEdge.prototype.next = W8y.z6k;
box2d[W8y.S57] = {
  e_none: W8y.u8Q,
  e_islandFlag: 0x0001,
  e_touchingFlag: 0x0002,
  e_enabledFlag: 0x0004,
  e_filterFlag: 0x0008,
  e_bulletHitFlag: 0x0010,
  e_toiFlag: 0x0020
};
goog[W8y.g5H](box2d[W8y.S57], W8y.m3H, box2d[W8y.S57][W8y.Y8H]);
goog[W8y.g5H](box2d[W8y.S57], W8y.a7T, box2d[W8y.S57][W8y.H0H]);
goog[W8y.g5H](box2d[W8y.S57], W8y.r2r, box2d[W8y.S57][W8y.W10]);
goog[W8y.g5H](box2d[W8y.S57], W8y.C1T, box2d[W8y.S57][W8y.C07]);
goog[W8y.g5H](box2d[W8y.S57], W8y.I2r, box2d[W8y.S57][W8y.E3k]);
goog[W8y.g5H](box2d[W8y.S57], W8y.W8T, box2d[W8y.S57][W8y.v50]);
goog[W8y.g5H](box2d[W8y.S57], W8y.z5k, box2d[W8y.S57][W8y.j16]);

box2d[W8y.c7T] = function () {
  this[W8y.D6M] = new box2d[W8y.C27]();
  this[W8y.y6M] = new box2d[W8y.C27]();
  this[W8y.R0k] = new box2d[W8y.F5Q]();
  this[W8y.I2M] = new box2d[W8y.F5Q]();
};

box2d.b2Contact.prototype.m_flags = box2d[W8y.S57][W8y.Y8H];
box2d.b2Contact.prototype.m_prev = W8y.z6k;
box2d.b2Contact.prototype.m_next = W8y.z6k;
box2d.b2Contact.prototype.m_nodeA = W8y.z6k;
box2d.b2Contact.prototype.m_nodeB = W8y.z6k;
box2d.b2Contact.prototype.m_fixtureA = W8y.z6k;
box2d.b2Contact.prototype.m_fixtureB = W8y.z6k;
box2d.b2Contact.prototype.m_indexA = W8y.u8Q;
box2d.b2Contact.prototype.m_indexB = W8y.u8Q;
box2d.b2Contact.prototype.m_manifold = W8y.z6k;
box2d.b2Contact.prototype.m_toiCount = W8y.u8Q;
box2d.b2Contact.prototype.m_toi = W8y.u8Q;
box2d.b2Contact.prototype.m_friction = W8y.u8Q;
box2d.b2Contact.prototype.m_restitution = W8y.u8Q;
box2d.b2Contact.prototype.m_tangentSpeed = W8y.u8Q;
box2d.b2Contact.prototype.m_oldManifold = W8y.z6k;

box2d.b2Contact.prototype.GetManifold = function () {
  return this[W8y.R0k];
};

box2d.b2Contact.prototype.GetWorldManifold = function (f) {
  var N = this[W8y.a10][W8y.b86](),
      P = this[W8y.G10][W8y.b86](),
      Z = this[W8y.a10][W8y.y00](),
      W = this[W8y.G10][W8y.y00]();
  f[W8y.Y6T](this[W8y.R0k], N[W8y.x8Q](), Z[W8y.o4T], P[W8y.x8Q](), W[W8y.o4T]);
};

box2d.b2Contact.prototype.IsTouching = function () {
  var f = "C5L";
  return W8y[f](this[W8y.o37] & box2d[W8y.S57][W8y.W10], box2d[W8y.S57][W8y.W10]);
};

box2d.b2Contact.prototype.SetEnabled = function (f) {
  if (f) {
    this[W8y.o37] |= box2d[W8y.S57][W8y.C07];
  } else {
    this[W8y.o37] &= ~box2d[W8y.S57][W8y.C07];
  }
};

box2d.b2Contact.prototype.IsEnabled = function () {
  var f = "k5L";
  return W8y[f](this[W8y.o37] & box2d[W8y.S57][W8y.C07], box2d[W8y.S57][W8y.C07]);
};

box2d.b2Contact.prototype.GetNext = function () {
  return this[W8y.X66];
};

box2d.b2Contact.prototype.GetFixtureA = function () {
  return this[W8y.a10];
};

box2d.b2Contact.prototype.GetChildIndexA = function () {
  return this[W8y.G0k];
};

box2d.b2Contact.prototype.GetFixtureB = function () {
  return this[W8y.G10];
};

box2d.b2Contact.prototype.GetChildIndexB = function () {
  return this[W8y.a0k];
};

box2d.b2Contact.prototype.Evaluate = function (f, N, P) {};

box2d.b2Contact.prototype.FlagForFiltering = function () {
  this[W8y.o37] |= box2d[W8y.S57][W8y.E3k];
};

box2d.b2Contact.prototype.SetFriction = function (f) {
  this[W8y.D4r] = f;
};

box2d.b2Contact.prototype.GetFriction = function () {
  return this[W8y.D4r];
};

box2d.b2Contact.prototype.ResetFriction = function () {
  this[W8y.D4r] = box2d[W8y.s2M](this[W8y.a10][W8y.D4r], this[W8y.G10][W8y.D4r]);
};

box2d.b2Contact.prototype.SetRestitution = function (f) {
  this[W8y.D2M] = f;
};

box2d.b2Contact.prototype.GetRestitution = function () {
  return this[W8y.D2M];
};

box2d.b2Contact.prototype.ResetRestitution = function () {
  this[W8y.D2M] = box2d[W8y.e3M](this[W8y.a10][W8y.D2M], this[W8y.G10][W8y.D2M]);
};

box2d.b2Contact.prototype.SetTangentSpeed = function (f) {
  this[W8y.y0H] = f;
};

box2d.b2Contact.prototype.GetTangentSpeed = function () {
  return this[W8y.y0H];
};

box2d.b2Contact.prototype.Reset = function (f, N, P, Z) {
  this[W8y.o37] = box2d[W8y.S57][W8y.C07];
  this[W8y.a10] = f;
  this[W8y.G10] = P;
  this[W8y.G0k] = N;
  this[W8y.a0k] = Z;
  this[W8y.R0k][W8y.O47] = W8y.u8Q;
  this[W8y.h1r] = W8y.z6k;
  this[W8y.X66] = W8y.z6k;
  this[W8y.D6M][W8y.a5H] = W8y.z6k;
  this[W8y.D6M][W8y.j56] = W8y.z6k;
  this[W8y.D6M][W8y.T9k] = W8y.z6k;
  this[W8y.D6M][W8y.a40] = W8y.z6k;
  this[W8y.y6M][W8y.a5H] = W8y.z6k;
  this[W8y.y6M][W8y.j56] = W8y.z6k;
  this[W8y.y6M][W8y.T9k] = W8y.z6k;
  this[W8y.y6M][W8y.a40] = W8y.z6k;
  this[W8y.K3H] = W8y.u8Q;
  this[W8y.D4r] = box2d[W8y.s2M](this[W8y.a10][W8y.D4r], this[W8y.G10][W8y.D4r]);
  this[W8y.D2M] = box2d[W8y.e3M](this[W8y.a10][W8y.D2M], this[W8y.G10][W8y.D2M]);
};

box2d.b2Contact.prototype.Update = function (f) {
  var N = "PreSolve",
      P = "N1X",
      Z = "w1X",
      W = "A5L",
      l = "BeginContact",
      m = "G5L",
      C = "v5L",
      n = "M5L",
      k = "E5L",
      H = "R5L",
      i = "I5L",
      Q = "j5L",
      e = "Q5L",
      j = this[W8y.I2M];
  this[W8y.I2M] = this[W8y.R0k];
  this[W8y.R0k] = j;
  this[W8y.o37] |= box2d[W8y.S57][W8y.C07];
  var o = W8y.G0T,
      S = W8y[e](this[W8y.o37] & box2d[W8y.S57][W8y.W10], box2d[W8y.S57][W8y.W10]),
      d = this[W8y.a10][W8y.C0M](),
      u = this[W8y.G10][W8y.C0M](),
      D = d || u,
      M = this[W8y.a10][W8y.b86](),
      y1 = this[W8y.G10][W8y.b86](),
      h = M[W8y.x8Q](),
      E = y1[W8y.x8Q]();

  if (D) {
    var L = this[W8y.a10][W8y.y00](),
        w1 = this[W8y.G10][W8y.y00]();
    o = box2d[W8y.p2M](L, this[W8y.G0k], w1, this[W8y.a0k], h, E);
    this[W8y.R0k][W8y.O47] = W8y.u8Q;
  } else {
    this[W8y.m1H](this[W8y.R0k], h, E);
    o = W8y[Q](this[W8y.R0k][W8y.O47], W8y.u8Q);

    for (var B = W8y.u8Q; W8y[i](B, this[W8y.R0k][W8y.O47]); ++B) {
      var N1 = this[W8y.R0k][W8y.H10][B];
      N1[W8y.y40] = W8y.u8Q;
      N1[W8y.m2H] = W8y.u8Q;
      var f1 = N1[W8y.W6M];

      for (var c1 = W8y.u8Q; W8y[H](c1, this[W8y.I2M][W8y.O47]); ++c1) {
        var l1 = this[W8y.I2M][W8y.H10][c1];

        if (W8y[k](l1[W8y.W6M][W8y.J4k], f1[W8y.J4k])) {
          N1[W8y.y40] = l1[W8y.y40];
          N1[W8y.m2H] = l1[W8y.m2H];
          break;
        }
      }
    }

    if (W8y[n](o, S)) {
      M[W8y.U5H](W8y.f5k);
      y1[W8y.U5H](W8y.f5k);
    }
  }

  if (o) {
    this[W8y.o37] |= box2d[W8y.S57][W8y.W10];
  } else {
    this[W8y.o37] &= ~box2d[W8y.S57][W8y.W10];
  }

  if (W8y[C](S, W8y.G0T) && W8y[m](o, W8y.f5k) && f) {
    f[l](this);
  }

  if (W8y[W](S, W8y.f5k) && W8y[Z](o, W8y.G0T) && f) {
    f[W8y.f2T](this);
  }

  if (W8y[P](D, W8y.G0T) && o && f) {
    f[N](this, this[W8y.I2M]);
  }
};

box2d.b2Contact.prototype.ComputeTOI = function (f, N) {
  var P = box2d.b2Contact.prototype.ComputeTOI.s_input;
  P[W8y.w4T][W8y.r7k](this[W8y.a10][W8y.y00](), this[W8y.G0k]);
  P[W8y.i4T][W8y.r7k](this[W8y.G10][W8y.y00](), this[W8y.a0k]);
  P[W8y.Y80][W8y.k97](f);
  P[W8y.q80][W8y.k97](N);
  P[W8y.G06] = box2d[W8y.Z8k];
  var Z = box2d.b2Contact.prototype.ComputeTOI.s_output;
  box2d[W8y.j5T](Z, P);
  return Z[W8y.B80];
};

box2d.b2Contact.prototype.ComputeTOI.s_input = new box2d[W8y.b4H]();
box2d.b2Contact.prototype.ComputeTOI.s_output = new box2d[W8y.V6T]();
goog[W8y.U3T](W8y.o80);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Contact');

box2d[W8y.q4H] = function () {
  goog[W8y.o66](this);
};

goog[W8y.u80](box2d[W8y.q4H], box2d[W8y.c7T]);

box2d[W8y.q4H][W8y.D70] = function (f) {
  return new box2d[W8y.q4H]();
};

box2d[W8y.q4H][W8y.t87] = function (f, N) {};

box2d.b2PolygonAndCircleContact.prototype.Reset = function (f, N, P, Z) {
  var W = "s1X",
      l = "X1X";
  goog[W8y.o66](this, W8y.o87, f, N, P, Z);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](f[W8y.E1k](), box2d[W8y.i80][W8y.E27]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](P[W8y.E1k](), box2d[W8y.i80][W8y.q36]));
  }
};

box2d.b2PolygonAndCircleContact.prototype.Evaluate = function (f, N, P) {
  var Z = "K1X",
      W = "n1X",
      l = "J1X",
      m = "b1X",
      C = this[W8y.a10][W8y.y00](),
      n = this[W8y.G10][W8y.y00]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](C, box2d[W8y.g16]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](n, box2d[W8y.A2T]));
  }

  box2d[W8y.C80](f, W8y[W](C, box2d[W8y.g16]) ? C : W8y.z6k, N, W8y[Z](n, box2d[W8y.A2T]) ? n : W8y.z6k, P);
};

goog[W8y.U3T](W8y.k0H);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Contact');

box2d[W8y.G1r] = function () {
  goog[W8y.o66](this);
};

goog[W8y.u80](box2d[W8y.G1r], box2d[W8y.c7T]);

box2d[W8y.G1r][W8y.D70] = function (f) {
  return new box2d[W8y.G1r]();
};

box2d[W8y.G1r][W8y.t87] = function (f, N) {};

box2d.b2EdgeAndPolygonContact.prototype.Reset = function (f, N, P, Z) {
  var W = "r1X",
      l = "H1X";
  goog[W8y.o66](this, W8y.o87, f, N, P, Z);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](f[W8y.E1k](), box2d[W8y.i80][W8y.E2H]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](P[W8y.E1k](), box2d[W8y.i80][W8y.E27]));
  }
};

box2d.b2EdgeAndPolygonContact.prototype.Evaluate = function (f, N, P) {
  var Z = "u1X",
      W = "d1X",
      l = "a1X",
      m = "e1X",
      C = this[W8y.a10][W8y.y00](),
      n = this[W8y.G10][W8y.y00]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](C, box2d[W8y.p7H]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](n, box2d[W8y.g16]));
  }

  box2d[W8y.Z00](f, W8y[W](C, box2d[W8y.p7H]) ? C : W8y.z6k, N, W8y[Z](n, box2d[W8y.g16]) ? n : W8y.z6k, P);
};

goog[W8y.U3T](W8y.V2k);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2Distance');

box2d[W8y.D37] = function () {
  this[W8y.u6M] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
};

box2d.b2MassData.prototype.mass = W8y.u8Q;
box2d.b2MassData.prototype.center = W8y.z6k;
box2d.b2MassData.prototype.I = W8y.u8Q;
box2d[W8y.i80] = {
  e_unknown: -W8y.D8Q,
  e_circleShape: W8y.u8Q,
  e_edgeShape: W8y.D8Q,
  e_polygonShape: W8y.d8Q,
  e_chainShape: W8y.S8Q,
  e_shapeTypeCount: W8y.v8Q
};
goog[W8y.g5H](box2d[W8y.i80], W8y.Q2M, box2d[W8y.i80][W8y.P47]);
goog[W8y.g5H](box2d[W8y.i80], W8y.t5T, box2d[W8y.i80][W8y.q36]);
goog[W8y.g5H](box2d[W8y.i80], W8y.q47, box2d[W8y.i80][W8y.E2H]);
goog[W8y.g5H](box2d[W8y.i80], W8y.k1H, box2d[W8y.i80][W8y.E27]);
goog[W8y.g5H](box2d[W8y.i80], W8y.s46, box2d[W8y.i80][W8y.x87]);
goog[W8y.g5H](box2d[W8y.i80], W8y.f2H, box2d[W8y.i80][W8y.I3k]);

box2d[W8y.V7T] = function (f, N) {
  this[W8y.b5T] = f;
  this[W8y.o4T] = N;
};

box2d.b2Shape.prototype.m_type = box2d[W8y.i80][W8y.P47];
box2d.b2Shape.prototype.m_radius = W8y.u8Q;

box2d.b2Shape.prototype.Clone = function () {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y.G0T);
  }

  return W8y.z6k;
};

box2d.b2Shape.prototype.Copy = function (f) {
  var N = "L1X";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](this[W8y.b5T], f[W8y.b5T]));
  }

  this[W8y.o4T] = f[W8y.o4T];
  return this;
};

box2d.b2Shape.prototype.GetType = function () {
  return this[W8y.b5T];
};

box2d.b2Shape.prototype.GetChildCount = function () {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y.G0T, W8y.z0M);
  }

  return W8y.u8Q;
};

box2d.b2Shape.prototype.TestPoint = function (f, N) {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y.G0T, W8y.z0M);
  }

  return W8y.G0T;
};

box2d.b2Shape.prototype.RayCast = function (f, N, P, Z) {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](false, "pure virtual");
  }

  return false;
};

box2d.b2Shape.prototype.ComputeAABB = function (f, N, P) {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y.G0T, W8y.z0M);
  }
};

box2d.b2Shape.prototype.ComputeMass = function (f, N) {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y.G0T, W8y.z0M);
  }
};

box2d.b2Shape.prototype.SetupDistanceProxy = function (f, N) {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y.G0T, W8y.z0M);
  }
};

box2d.b2Shape.prototype.ComputeSubmergedArea = function (f, N, P, Z) {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y.G0T, W8y.z0M);
  }

  return W8y.u8Q;
};

box2d.b2Shape.prototype.Dump = function () {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y.G0T, W8y.z0M);
  }
};

goog[W8y.U3T](W8y.z3M);
goog[W8y.V20]('box2d.b2Shape');

box2d[W8y.g16] = function () {
  goog[W8y.o66](this, box2d[W8y.i80][W8y.E27], box2d[W8y.W4k]);
  this[W8y.S80] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.N4k] = box2d[W8y.p7T][W8y.N1r](box2d[W8y.E1M]);
  this[W8y.w87] = box2d[W8y.p7T][W8y.N1r](box2d[W8y.E1M]);
};

goog[W8y.u80](box2d[W8y.g16], box2d[W8y.V7T]);
box2d.b2PolygonShape.prototype.m_centroid = W8y.z6k;
box2d.b2PolygonShape.prototype.m_vertices = W8y.z6k;
box2d.b2PolygonShape.prototype.m_normals = W8y.z6k;
box2d.b2PolygonShape.prototype.m_count = W8y.u8Q;

box2d.b2PolygonShape.prototype.Clone = function () {
  return new box2d[W8y.g16]()[W8y.k97](this);
};

box2d.b2PolygonShape.prototype.Copy = function (f) {
  var N = "F1X",
      P = "p1X";
  goog[W8y.o66](this, W8y.n8H, f);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[P](f, box2d[W8y.g16]));
  }

  this[W8y.S80][W8y.k97](f[W8y.S80]);
  this[W8y.o9k] = f[W8y.o9k];

  for (var Z = W8y.u8Q, W = this[W8y.o9k]; W8y[N](Z, W); ++Z) {
    this[W8y.N4k][Z][W8y.k97](f[W8y.N4k][Z]);
    this[W8y.w87][Z][W8y.k97](f[W8y.w87][Z]);
  }

  return this;
};

box2d.b2PolygonShape.prototype.SetAsBox = function (f, N) {
  this[W8y.o9k] = W8y.v8Q;
  this[W8y.N4k][W8y.u8Q][W8y.y47](-f, -N);
  this[W8y.N4k][W8y.D8Q][W8y.y47](f, -N);
  this[W8y.N4k][W8y.d8Q][W8y.y47](f, N);
  this[W8y.N4k][W8y.S8Q][W8y.y47](-f, N);
  this[W8y.w87][W8y.u8Q][W8y.y47](W8y.u8Q, -W8y.D8Q);
  this[W8y.w87][W8y.D8Q][W8y.y47](W8y.D8Q, W8y.u8Q);
  this[W8y.w87][W8y.d8Q][W8y.y47](W8y.u8Q, W8y.D8Q);
  this[W8y.w87][W8y.S8Q][W8y.y47](-W8y.D8Q, W8y.u8Q);
  this[W8y.S80][W8y.j6k]();
  return this;
};

box2d.b2PolygonShape.prototype.SetAsOrientedBox = function (f, N, P, Z) {
  var W = "y4X",
      l = "SetRotationAngleRadians",
      m = "SetPosition";
  this[W8y.o9k] = W8y.v8Q;
  this[W8y.N4k][W8y.u8Q][W8y.y47](-f, -N);
  this[W8y.N4k][W8y.D8Q][W8y.y47](f, -N);
  this[W8y.N4k][W8y.d8Q][W8y.y47](f, N);
  this[W8y.N4k][W8y.S8Q][W8y.y47](-f, N);
  this[W8y.w87][W8y.u8Q][W8y.y47](W8y.u8Q, -W8y.D8Q);
  this[W8y.w87][W8y.D8Q][W8y.y47](W8y.D8Q, W8y.u8Q);
  this[W8y.w87][W8y.d8Q][W8y.y47](W8y.u8Q, W8y.D8Q);
  this[W8y.w87][W8y.S8Q][W8y.y47](-W8y.D8Q, W8y.u8Q);
  this[W8y.S80][W8y.k97](P);
  var C = new box2d[W8y.P70]();
  C[m](P);
  C[l](Z);

  for (var n = W8y.u8Q, k = this[W8y.o9k]; W8y[W](n, k); ++n) {
    box2d[W8y.o10](C, this[W8y.N4k][n], this[W8y.N4k][n]);
    box2d[W8y.x47](C[W8y.b50], this[W8y.w87][n], this[W8y.w87][n]);
  }

  return this;
};

box2d.b2PolygonShape.prototype.Set = function (f, N) {
  var P = "m2X",
      Z = "Y2X",
      W = "c2X",
      l = "P2X",
      m = "f2X",
      C = "t4X",
      n = "z4X",
      k = "B4X",
      H = "h4X",
      i = "D4X",
      Q = "S4X",
      e = "o4X",
      j = "q4X",
      o = "i4X",
      S = "T4X",
      d = "O4X",
      u = "V4X",
      D = "g4X",
      M = "SetAsBox",
      y1 = "l4X",
      h = "W4X",
      E = "Z4X",
      L = "U4X";
  if (W8y[L](N, undefined)) N = f.length;

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[E](W8y.S8Q, N) && W8y[h](N, box2d[W8y.E1M]));
  }

  if (W8y[y1](N, W8y.S8Q)) {
    return this[M](W8y.D8Q, W8y.D8Q);
  }

  var w1 = box2d[W8y.G60](N, box2d[W8y.E1M]),
      B = box2d.b2PolygonShape.prototype.Set.s_ps,
      N1 = W8y.u8Q;

  for (var f1 = W8y.u8Q; W8y[D](f1, w1); ++f1) {
    var c1 = f[f1],
        l1 = W8y.f5k;

    for (var P1 = W8y.u8Q; W8y[u](P1, N1); ++P1) {
      if (W8y[d](box2d[W8y.Z9k](c1, B[P1]), W8y.T3H * box2d[W8y.Z8k])) {
        l1 = W8y.G0T;
        break;
      }
    }

    if (l1) {
      B[N1++][W8y.k97](c1);
    }
  }

  w1 = N1;

  if (W8y[S](w1, W8y.S8Q)) {
    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y.G0T);
    }

    return this[M](W8y.i0M, W8y.i0M);
  }

  var s1 = W8y.u8Q,
      b1 = B[W8y.u8Q][W8y.T9T];

  for (var f1 = W8y.D8Q; W8y[o](f1, w1); ++f1) {
    var m1 = B[f1][W8y.T9T];

    if (W8y[j](m1, b1) || W8y[e](m1, b1) && W8y[Q](B[f1][W8y.Z9T], B[s1][W8y.Z9T])) {
      s1 = f1;
      b1 = m1;
    }
  }

  var W1 = box2d.b2PolygonShape.prototype.Set.s_hull,
      J1 = W8y.u8Q,
      C1 = s1;

  for (;;) {
    W1[J1] = C1;
    var x1 = W8y.u8Q;

    for (var P1 = W8y.D8Q; W8y[i](P1, w1); ++P1) {
      if (W8y[H](x1, C1)) {
        x1 = P1;
        continue;
      }

      var T1 = box2d[W8y.x8T](B[x1], B[W1[J1]], box2d.b2PolygonShape.prototype.Set.s_r),
          c1 = box2d[W8y.x8T](B[P1], B[W1[J1]], box2d.b2PolygonShape.prototype.Set.s_v),
          K1 = box2d[W8y.t10](T1, c1);

      if (W8y[k](K1, W8y.u8Q)) {
        x1 = P1;
      }

      if (W8y[n](K1, W8y.u8Q) && W8y[C](c1[W8y.A5T](), T1[W8y.A5T]())) {
        x1 = P1;
      }
    }

    ++J1;
    C1 = x1;

    if (W8y[m](x1, s1)) {
      break;
    }
  }

  this[W8y.o9k] = J1;

  for (var f1 = W8y.u8Q; W8y[l](f1, J1); ++f1) {
    this[W8y.N4k][f1][W8y.k97](B[W1[f1]]);
  }

  for (var f1 = W8y.u8Q, V1 = J1; W8y[W](f1, V1); ++f1) {
    var Q1 = this[W8y.N4k][f1],
        D1 = this[W8y.N4k][W8y[Z](f1 + W8y.D8Q, V1)],
        d1 = box2d[W8y.x8T](D1, Q1, box2d[W8y.p7T][W8y.t7M]);

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[P](d1[W8y.A5T](), box2d[W8y.s70]));
    }

    box2d[W8y.T67](d1, this[W8y.w87][f1])[W8y.s1k]();
  }

  box2d[W8y.g16][W8y.E1H](this[W8y.N4k], J1, this[W8y.S80]);
  return this;
};

box2d.b2PolygonShape.prototype.Set.s_ps = box2d[W8y.p7T][W8y.N1r](box2d[W8y.E1M]);
box2d.b2PolygonShape.prototype.Set.s_hull = box2d[W8y.D3r](box2d[W8y.E1M]);
box2d.b2PolygonShape.prototype.Set.s_r = new box2d[W8y.p7T]();
box2d.b2PolygonShape.prototype.Set.s_v = new box2d[W8y.p7T]();

box2d.b2PolygonShape.prototype.SetAsVector = function (f, N) {
  this[W8y.Z96](f, N);
  return this;
};

box2d.b2PolygonShape.prototype.SetAsArray = function (f, N) {
  this[W8y.Z96](f, N);
  return this;
};

box2d.b2PolygonShape.prototype.GetChildCount = function () {
  return W8y.D8Q;
};

box2d.b2PolygonShape.prototype.TestPoint = function (f, N) {
  var P = "C2X",
      Z = "x2X",
      W = box2d[W8y.a90](f, N, box2d.b2PolygonShape.prototype.TestPoint.s_pLocal);

  for (var l = W8y.u8Q, m = this[W8y.o9k]; W8y[Z](l, m); ++l) {
    var C = box2d[W8y.o27](this[W8y.w87][l], box2d[W8y.x8T](W, this[W8y.N4k][l], box2d[W8y.p7T][W8y.t7M]));

    if (W8y[P](C, W8y.u8Q)) {
      return W8y.G0T;
    }
  }

  return W8y.f5k;
};

box2d.b2PolygonShape.prototype.TestPoint.s_pLocal = new box2d[W8y.p7T]();

box2d.b2PolygonShape.prototype.RayCast = function (f, N, P, Z) {
  var W = "X3X",
      l = "N3X",
      m = "w3X",
      C = "A2X",
      n = "G2X",
      k = "v2X",
      H = "M2X",
      i = "E2X",
      Q = "R2X",
      e = "I2X",
      j = "j2X",
      o = "Q2X",
      S = "k2X",
      d = box2d[W8y.a90](P, N[W8y.h17], box2d.b2PolygonShape.prototype.RayCast.s_p1),
      u = box2d[W8y.a90](P, N[W8y.W47], box2d.b2PolygonShape.prototype.RayCast.s_p2),
      D = box2d[W8y.x8T](u, d, box2d.b2PolygonShape.prototype.RayCast.s_d),
      M = W8y.u8Q,
      y1 = N[W8y.v4T],
      h = -W8y.D8Q;

  for (var E = W8y.u8Q, L = this[W8y.o9k]; W8y[S](E, L); ++E) {
    var w1 = box2d[W8y.o27](this[W8y.w87][E], box2d[W8y.x8T](this[W8y.N4k][E], d, box2d[W8y.p7T][W8y.t7M])),
        B = box2d[W8y.o27](this[W8y.w87][E], D);

    if (W8y[o](B, W8y.u8Q)) {
      if (W8y[j](w1, W8y.u8Q)) {
        return W8y.G0T;
      }
    } else {
      if (W8y[e](B, W8y.u8Q) && W8y[Q](w1, M * B)) {
        M = W8y[i](w1, B);
        h = E;
      } else if (W8y[H](B, W8y.u8Q) && W8y[k](w1, y1 * B)) {
        y1 = W8y[n](w1, B);
      }
    }

    if (W8y[C](y1, M)) {
      return W8y.G0T;
    }
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](W8y.u8Q, M) && W8y[l](M, N[W8y.v4T]));
  }

  if (W8y[W](h, W8y.u8Q)) {
    f[W8y.j57] = M;
    box2d[W8y.x47](P[W8y.b50], this[W8y.w87][h], f[W8y.M4T]);
    return W8y.f5k;
  }

  return W8y.G0T;
};

box2d.b2PolygonShape.prototype.RayCast.s_p1 = new box2d[W8y.p7T]();
box2d.b2PolygonShape.prototype.RayCast.s_p2 = new box2d[W8y.p7T]();
box2d.b2PolygonShape.prototype.RayCast.s_d = new box2d[W8y.p7T]();

box2d.b2PolygonShape.prototype.ComputeAABB = function (f, N, P) {
  var Z = "s3X",
      W = box2d[W8y.o10](N, this[W8y.N4k][W8y.u8Q], f[W8y.d1T]),
      l = f[W8y.I1T][W8y.k97](W);

  for (var m = W8y.u8Q, C = this[W8y.o9k]; W8y[Z](m, C); ++m) {
    var n = box2d[W8y.o10](N, this[W8y.N4k][m], box2d.b2PolygonShape.prototype.ComputeAABB.s_v);
    box2d[W8y.k8H](n, W, W);
    box2d[W8y.k8T](n, l, l);
  }

  var k = this[W8y.o4T];
  W[W8y.m8Q](k, k);
  l[W8y.a97](k, k);
};

box2d.b2PolygonShape.prototype.ComputeAABB.s_v = new box2d[W8y.p7T]();

box2d.b2PolygonShape.prototype.ComputeMass = function (f, N) {
  var P = "V0X",
      Z = "g0X",
      W = "l0X",
      l = "W0X",
      m = "Z0X",
      C = "U0X",
      n = "y0X",
      k = "F3X",
      H = "p3X",
      i = "L3X",
      Q = "u3X",
      e = "d3X",
      j = "a3X",
      o = "e3X",
      S = "r3X",
      d = "H3X",
      u = "K3X",
      D = "n3X",
      M = "J3X",
      y1 = "b3X";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[y1](this[W8y.o9k], W8y.S8Q));
  }

  var h = box2d.b2PolygonShape.prototype.ComputeMass.s_center.SetZero(),
      E = W8y.u8Q,
      L = W8y.u8Q,
      w1 = box2d.b2PolygonShape.prototype.ComputeMass.s_s.SetZero();

  for (var B = W8y.u8Q, N1 = this[W8y.o9k]; W8y[M](B, N1); ++B) {
    w1[W8y.t4H](this[W8y.N4k][B]);
  }

  w1[W8y.E40](W8y[D](W8y.D8Q, this[W8y.o9k]));
  var f1 = W8y[u](W8y.D8Q, W8y.S8Q);

  for (var B = W8y.u8Q, N1 = this[W8y.o9k]; W8y[d](B, N1); ++B) {
    var c1 = box2d[W8y.x8T](this[W8y.N4k][B], w1, box2d.b2PolygonShape.prototype.ComputeMass.s_e1),
        l1 = box2d[W8y.x8T](this[W8y.N4k][W8y[S](B + W8y.D8Q, N1)], w1, box2d.b2PolygonShape.prototype.ComputeMass.s_e2),
        P1 = box2d[W8y.t10](c1, l1),
        s1 = W8y[o](W8y.T3H, P1);
    E += s1;
    h[W8y.t4H](box2d[W8y.X26](W8y[j](s1, f1), box2d[W8y.m3T](c1, l1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.l9M]));
    var b1 = c1[W8y.T9T],
        m1 = c1[W8y.Z9T],
        W1 = l1[W8y.T9T],
        J1 = l1[W8y.Z9T],
        C1 = W8y[e](b1, b1) + W8y[Q](W1, b1) + W8y[i](W1, W1),
        x1 = W8y[H](m1, m1) + W8y[k](J1, m1) + W8y[n](J1, J1);
    L += W8y[C](W8y.m10 * f1 * P1, C1 + x1);
  }

  f[W8y.T3r] = W8y[m](N, E);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](E, box2d[W8y.F5k]));
  }

  h[W8y.E40](W8y[W](W8y.D8Q, E));
  box2d[W8y.m3T](h, w1, f[W8y.u6M]);
  f[W8y.T10] = W8y[Z](N, L);
  f[W8y.T10] += W8y[P](f[W8y.T3r], box2d[W8y.o27](f[W8y.u6M], f[W8y.u6M]) - box2d[W8y.o27](h, h));
};

box2d.b2PolygonShape.prototype.ComputeMass.s_center = new box2d[W8y.p7T]();
box2d.b2PolygonShape.prototype.ComputeMass.s_s = new box2d[W8y.p7T]();
box2d.b2PolygonShape.prototype.ComputeMass.s_e1 = new box2d[W8y.p7T]();
box2d.b2PolygonShape.prototype.ComputeMass.s_e2 = new box2d[W8y.p7T]();

box2d.b2PolygonShape.prototype.Validate = function () {
  var f = "S0X",
      N = "o0X",
      P = "q0X",
      Z = "i0X",
      W = "T0X",
      l = "O0X";

  for (var m = W8y.u8Q; W8y[l](m, this[W8y.o9k]); ++m) {
    var C = m,
        n = W8y[W](m + W8y.D8Q, this[W8y.o9k]),
        k = this[W8y.N4k][C],
        H = box2d[W8y.x8T](this[W8y.N4k][n], k, box2d.b2PolygonShape.prototype.Validate.s_e);

    for (var i = W8y.u8Q; W8y[Z](i, this[W8y.o9k]); ++i) {
      if (W8y[P](i, C) || W8y[N](i, n)) {
        continue;
      }

      var Q = box2d[W8y.x8T](this[W8y.N4k][i], k, box2d.b2PolygonShape.prototype.Validate.s_v),
          e = box2d[W8y.t10](H, Q);

      if (W8y[f](e, W8y.u8Q)) {
        return W8y.G0T;
      }
    }
  }

  return W8y.f5k;
};

box2d.b2PolygonShape.prototype.Validate.s_e = new box2d[W8y.p7T]();
box2d.b2PolygonShape.prototype.Validate.s_v = new box2d[W8y.p7T]();

box2d.b2PolygonShape.prototype.SetupDistanceProxy = function (f, N) {
  f[W8y.N4k] = this[W8y.N4k];
  f[W8y.o9k] = this[W8y.o9k];
  f[W8y.o4T] = this[W8y.o4T];
};

box2d.b2PolygonShape.prototype.ComputeSubmergedArea = function (f, N, P, Z) {
  var W = "g9X",
      l = "Y9X",
      m = "X9X",
      C = "N9X",
      n = "w9X",
      k = "A7X",
      H = "G7X",
      i = "v7X",
      Q = "M7X",
      e = "E7X",
      j = "R7X",
      o = "I7X",
      S = "j7X",
      d = "Q7X",
      u = "k7X",
      D = "C7X",
      M = "x7X",
      y1 = "m7X",
      h = "Y7X",
      E = "c7X",
      L = "P7X",
      w1 = "f7X",
      B = "t0X",
      N1 = "z0X",
      f1 = "B0X",
      c1 = "h0X",
      l1 = "D0X",
      P1 = box2d[W8y.b0M](P[W8y.b50], f, box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_normalL),
      s1 = W8y[l1](N, box2d[W8y.o27](f, P[W8y.t60])),
      b1 = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_depths,
      m1 = W8y.u8Q,
      W1 = -W8y.D8Q,
      J1 = -W8y.D8Q,
      C1 = W8y.G0T;

  for (var x1 = W8y.u8Q, T1 = this[W8y.o9k]; W8y[c1](x1, T1); ++x1) {
    b1[x1] = W8y[f1](box2d[W8y.o27](P1, this[W8y.N4k][x1]), s1);
    var K1 = b1[x1] < -box2d[W8y.F5k];

    if (W8y[N1](x1, W8y.u8Q)) {
      if (K1) {
        if (!C1) {
          W1 = W8y[B](x1, W8y.D8Q);
          m1++;
        }
      } else {
        if (C1) {
          J1 = W8y[w1](x1, W8y.D8Q);
          m1++;
        }
      }
    }

    C1 = K1;
  }

  switch (m1) {
    case W8y.u8Q:
      if (C1) {
        var V1 = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_md;
        this[W8y.l47](V1, W8y.D8Q);
        box2d[W8y.o10](P, V1[W8y.u6M], Z);
        return V1[W8y.T3r];
      } else {
        return W8y.u8Q;
      }

      break;

    case W8y.D8Q:
      if (W1 === -W8y.D8Q) {
        W1 = W8y[L](this[W8y.o9k], W8y.D8Q);
      } else {
        J1 = W8y[E](this[W8y.o9k], W8y.D8Q);
      }

      break;
  }

  var Q1 = W8y[h](W1 + W8y.D8Q, this[W8y.o9k]),
      D1 = W8y[y1](J1 + W8y.D8Q, this[W8y.o9k]),
      d1 = W8y[M](W8y.u8Q - b1[W1], b1[Q1] - b1[W1]),
      u1 = W8y[D](W8y.u8Q - b1[J1], b1[D1] - b1[J1]),
      j1 = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_intoVec.SetXY(W8y[u](this[W8y.N4k][W1][W8y.T9T], W8y.D8Q - d1) + W8y[d](this[W8y.N4k][Q1][W8y.T9T], d1), W8y[S](this[W8y.N4k][W1][W8y.Z9T], W8y.D8Q - d1) + W8y[o](this[W8y.N4k][Q1][W8y.Z9T], d1)),
      G1 = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_outoVec.SetXY(W8y[j](this[W8y.N4k][J1][W8y.T9T], W8y.D8Q - u1) + W8y[e](this[W8y.N4k][D1][W8y.T9T], u1), W8y[Q](this[W8y.N4k][J1][W8y.Z9T], W8y.D8Q - u1) + W8y[i](this[W8y.N4k][D1][W8y.Z9T], u1)),
      I1 = W8y.u8Q,
      e1 = box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_center.SetZero(),
      S1 = this[W8y.N4k][Q1],
      B1 = W8y.z6k,
      x1 = Q1;

  while (W8y[H](x1, D1)) {
    x1 = W8y[k](x1 + W8y.D8Q, this[W8y.o9k]);
    if (W8y[n](x1, D1)) B1 = G1;else B1 = this[W8y.N4k][x1];
    var a1 = W8y[C](W8y.T3H, (S1[W8y.T9T] - j1[W8y.T9T]) * (B1[W8y.Z9T] - j1[W8y.Z9T]) - (S1[W8y.Z9T] - j1[W8y.Z9T]) * (B1[W8y.T9T] - j1[W8y.T9T]));
    I1 += a1;
    e1[W8y.T9T] += W8y[m](a1, j1[W8y.T9T] + S1[W8y.T9T] + B1[W8y.T9T], W8y.S8Q);
    e1[W8y.Z9T] += W8y[l](a1, j1[W8y.Z9T] + S1[W8y.Z9T] + B1[W8y.Z9T], W8y.S8Q);
    S1 = B1;
  }

  e1[W8y.E40](W8y[W](W8y.D8Q, I1));
  box2d[W8y.o10](P, e1, Z);
  return I1;
};

box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_normalL = new box2d[W8y.p7T]();
box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_depths = box2d[W8y.D3r](box2d[W8y.E1M]);
box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_md = new box2d[W8y.D37]();
box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_intoVec = new box2d[W8y.p7T]();
box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_outoVec = new box2d[W8y.p7T]();
box2d.b2PolygonShape.prototype.ComputeSubmergedArea.s_center = new box2d[W8y.p7T]();

box2d.b2PolygonShape.prototype.Dump = function () {
  var f = "    shape.Set(vs, %d);\n",
      N = "V9X",
      P = "    /*box2d.b2PolygonShape*/ var shape = new box2d.b2PolygonShape();\n";
  box2d[W8y.R50](P);
  box2d[W8y.R50](W8y.b97, box2d[W8y.E1M]);

  for (var Z = W8y.u8Q; W8y[N](Z, this[W8y.o9k]); ++Z) {
    box2d[W8y.R50](W8y.V1r, Z, this[W8y.N4k][Z][W8y.T9T], this[W8y.N4k][Z][W8y.Z9T]);
  }

  box2d[W8y.R50](f, this[W8y.o9k]);
};

box2d[W8y.g16][W8y.E1H] = function (f, N, P) {
  var Z = "G9X",
      W = "v9X",
      l = "u9X",
      m = "S9X",
      C = "o9X",
      n = "q9X",
      k = "i9X",
      H = "T9X",
      i = "O9X";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[i](N, W8y.S8Q));
  }

  var Q = P;
  Q[W8y.j6k]();
  var e = W8y.u8Q,
      j = box2d[W8y.g16][W8y.E1H][W8y.r9T][W8y.j6k](),
      o = W8y[H](W8y.D8Q, W8y.S8Q);

  for (var S = W8y.u8Q; W8y[k](S, N); ++S) {
    var d = j,
        u = f[S],
        D = f[W8y[n](S + W8y.D8Q, N)],
        M = box2d[W8y.x8T](u, d, box2d[W8y.g16][W8y.E1H][W8y.S86]),
        y1 = box2d[W8y.x8T](D, d, box2d[W8y.g16][W8y.E1H][W8y.O86]),
        h = box2d[W8y.t10](M, y1),
        E = W8y[C](W8y.T3H, h);
    e += E;
    Q[W8y.T9T] += W8y[m](E, o, d[W8y.T9T] + u[W8y.T9T] + D[W8y.T9T]);
    Q[W8y.Z9T] += W8y[l](E, o, d[W8y.Z9T] + u[W8y.Z9T] + D[W8y.Z9T]);
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](e, box2d[W8y.F5k]));
  }

  Q[W8y.E40](W8y[Z](W8y.D8Q, e));
  return Q;
};

box2d[W8y.g16][W8y.E1H][W8y.r9T] = new box2d[W8y.p7T]();
box2d[W8y.g16][W8y.E1H][W8y.S86] = new box2d[W8y.p7T]();
box2d[W8y.g16][W8y.E1H][W8y.O86] = new box2d[W8y.p7T]();
goog[W8y.U3T](W8y.w46);
goog[W8y.V20]('box2d.b2Collision');

box2d[W8y.l6H] = function (f, N, P, Z, W) {
  var l = "r8X",
      m = "H8X",
      C = "K8X",
      n = "n8X",
      k = "J8X",
      H = "b8X",
      i = "s8X",
      Q = "X8X",
      e = "N8X",
      j = "w8X",
      o = "A9X";
  f[W8y.O47] = W8y.u8Q;
  var S = box2d[W8y.a90](P, box2d[W8y.o10](W, Z[W8y.U0k], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.l6H][W8y.y7H]),
      d = N[W8y.v06],
      u = N[W8y.N60],
      D = box2d[W8y.x8T](u, d, box2d[W8y.l6H][W8y.P57]),
      M = box2d[W8y.o27](D, box2d[W8y.x8T](u, S, box2d[W8y.p7T][W8y.t7M])),
      y1 = box2d[W8y.o27](D, box2d[W8y.x8T](S, d, box2d[W8y.p7T][W8y.t7M])),
      h = N[W8y.o4T] + Z[W8y.o4T],
      E = box2d[W8y.l6H][W8y.G87];
  E[W8y.i3k][W8y.L40] = W8y.u8Q;
  E[W8y.i3k][W8y.j30] = box2d[W8y.Q0M][W8y.y70];

  if (W8y[o](y1, W8y.u8Q)) {
    var L = d,
        w1 = box2d[W8y.x8T](S, L, box2d[W8y.l6H][W8y.J57]),
        B = box2d[W8y.o27](w1, w1);

    if (W8y[j](B, h * h)) {
      return;
    }

    if (N[W8y.N66]) {
      var N1 = N[W8y.R06],
          f1 = d,
          c1 = box2d[W8y.x8T](f1, N1, box2d[W8y.l6H][W8y.S86]),
          l1 = box2d[W8y.o27](c1, box2d[W8y.x8T](f1, S, box2d[W8y.p7T][W8y.t7M]));

      if (W8y[e](l1, W8y.u8Q)) {
        return;
      }
    }

    E[W8y.i3k][W8y.K30] = W8y.u8Q;
    E[W8y.i3k][W8y.G30] = box2d[W8y.Q0M][W8y.y70];
    f[W8y.O47] = W8y.D8Q;
    f[W8y.N2k] = box2d[W8y.j76][W8y.j5k];
    f[W8y.V67][W8y.j6k]();
    f[W8y.B9H][W8y.k97](L);
    f[W8y.H10][W8y.u8Q][W8y.W6M][W8y.k97](E);
    f[W8y.H10][W8y.u8Q][W8y.B9H][W8y.k97](Z[W8y.U0k]);
    return;
  }

  if (W8y[Q](M, W8y.u8Q)) {
    var L = u,
        w1 = box2d[W8y.x8T](S, L, box2d[W8y.l6H][W8y.J57]),
        B = box2d[W8y.o27](w1, w1);

    if (W8y[i](B, h * h)) {
      return;
    }

    if (N[W8y.b66]) {
      var P1 = N[W8y.L80],
          s1 = u,
          b1 = box2d[W8y.x8T](P1, s1, box2d[W8y.l6H][W8y.O86]),
          m1 = box2d[W8y.o27](b1, box2d[W8y.x8T](S, s1, box2d[W8y.p7T][W8y.t7M]));

      if (W8y[H](m1, W8y.u8Q)) {
        return;
      }
    }

    E[W8y.i3k][W8y.K30] = W8y.D8Q;
    E[W8y.i3k][W8y.G30] = box2d[W8y.Q0M][W8y.y70];
    f[W8y.O47] = W8y.D8Q;
    f[W8y.N2k] = box2d[W8y.j76][W8y.j5k];
    f[W8y.V67][W8y.j6k]();
    f[W8y.B9H][W8y.k97](L);
    f[W8y.H10][W8y.u8Q][W8y.W6M][W8y.k97](E);
    f[W8y.H10][W8y.u8Q][W8y.B9H][W8y.k97](Z[W8y.U0k]);
    return;
  }

  var W1 = box2d[W8y.o27](D, D);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[k](W1, W8y.u8Q));
  }

  var L = box2d[W8y.l6H][W8y.N7H];
  L[W8y.T9T] = W8y[n](W8y.D8Q / W1, M * d[W8y.T9T] + y1 * u[W8y.T9T]);
  L[W8y.Z9T] = W8y[C](W8y.D8Q / W1, M * d[W8y.Z9T] + y1 * u[W8y.Z9T]);
  var w1 = box2d[W8y.x8T](S, L, box2d[W8y.l6H][W8y.J57]),
      B = box2d[W8y.o27](w1, w1);

  if (W8y[m](B, h * h)) {
    return;
  }

  var J1 = box2d[W8y.l6H][W8y.H97][W8y.y47](-D[W8y.Z9T], D[W8y.T9T]);

  if (W8y[l](box2d[W8y.o27](J1, box2d[W8y.x8T](S, d, box2d[W8y.p7T][W8y.t7M])), W8y.u8Q)) {
    J1[W8y.y47](-J1[W8y.T9T], -J1[W8y.Z9T]);
  }

  J1[W8y.Y27]();
  E[W8y.i3k][W8y.K30] = W8y.u8Q;
  E[W8y.i3k][W8y.G30] = box2d[W8y.Q0M][W8y.X3k];
  f[W8y.O47] = W8y.D8Q;
  f[W8y.N2k] = box2d[W8y.j76][W8y.I60];
  f[W8y.V67][W8y.k97](J1);
  f[W8y.B9H][W8y.k97](d);
  f[W8y.H10][W8y.u8Q][W8y.W6M][W8y.k97](E);
  f[W8y.H10][W8y.u8Q][W8y.B9H][W8y.k97](Z[W8y.U0k]);
};

box2d[W8y.l6H][W8y.y7H] = new box2d[W8y.p7T]();
box2d[W8y.l6H][W8y.P57] = new box2d[W8y.p7T]();
box2d[W8y.l6H][W8y.J57] = new box2d[W8y.p7T]();
box2d[W8y.l6H][W8y.S86] = new box2d[W8y.p7T]();
box2d[W8y.l6H][W8y.O86] = new box2d[W8y.p7T]();
box2d[W8y.l6H][W8y.N7H] = new box2d[W8y.p7T]();
box2d[W8y.l6H][W8y.H97] = new box2d[W8y.p7T]();
box2d[W8y.l6H][W8y.G87] = new box2d[W8y.W66]();
box2d[W8y.E47] = {
  e_unknown: W8y.u8Q,
  e_edgeA: W8y.D8Q,
  e_edgeB: W8y.d8Q
};
goog[W8y.g5H](box2d[W8y.E47], W8y.Q2M, box2d[W8y.E47][W8y.P47]);
goog[W8y.g5H](box2d[W8y.E47], W8y.r66, box2d[W8y.E47][W8y.X5M]);
goog[W8y.g5H](box2d[W8y.E47], W8y.m66, box2d[W8y.E47][W8y.f1k]);

box2d[W8y.K7H] = function () {};

box2d.b2EPAxis.prototype.type = box2d[W8y.E47][W8y.P47];
box2d.b2EPAxis.prototype.index = W8y.u8Q;
box2d.b2EPAxis.prototype.separation = W8y.u8Q;

box2d[W8y.z87] = function () {
  this[W8y.Y70] = box2d[W8y.p7T][W8y.N1r](box2d[W8y.E1M]);
  this[W8y.V6k] = box2d[W8y.p7T][W8y.N1r](box2d[W8y.E1M]);
  this[W8y.S5k] = W8y.u8Q;
};

box2d.b2TempPolygon.prototype.vertices = W8y.z6k;
box2d.b2TempPolygon.prototype.normals = W8y.z6k;
box2d.b2TempPolygon.prototype.count = W8y.u8Q;

box2d[W8y.L90] = function () {
  this[W8y.R7M] = W8y.u8Q;
  this[W8y.z7M] = W8y.u8Q;
  this[W8y.b4T] = new box2d[W8y.p7T]();
  this[W8y.k2T] = new box2d[W8y.p7T]();
  this[W8y.M4T] = new box2d[W8y.p7T]();
  this[W8y.p50] = new box2d[W8y.p7T]();
  this[W8y.y9M] = W8y.u8Q;
  this[W8y.W1T] = new box2d[W8y.p7T]();
  this[W8y.d0M] = W8y.u8Q;
};

box2d.b2ReferenceFace.prototype.i1 = W8y.u8Q;
box2d.b2ReferenceFace.prototype.i2 = W8y.u8Q;
box2d.b2ReferenceFace.prototype.v1 = W8y.z6k;
box2d.b2ReferenceFace.prototype.v2 = W8y.z6k;
box2d.b2ReferenceFace.prototype.normal = W8y.z6k;
box2d.b2ReferenceFace.prototype.sideNormal1 = W8y.z6k;
box2d.b2ReferenceFace.prototype.sideOffset1 = W8y.u8Q;
box2d.b2ReferenceFace.prototype.sideNormal2 = W8y.z6k;
box2d.b2ReferenceFace.prototype.sideOffset2 = W8y.u8Q;
box2d[W8y.D06] = {
  e_isolated: W8y.u8Q,
  e_concave: W8y.D8Q,
  e_convex: W8y.d8Q
};
goog[W8y.g5H](box2d[W8y.D06], W8y.G5M, box2d[W8y.D06][W8y.d5H]);
goog[W8y.g5H](box2d[W8y.D06], W8y.m56, box2d[W8y.D06][W8y.Y00]);
goog[W8y.g5H](box2d[W8y.D06], W8y.G9k, box2d[W8y.D06][W8y.g4T]);

box2d[W8y.L5T] = function () {
  var f = "m_type2",
      N = "m_type1";
  this[W8y.M8M] = new box2d[W8y.z87]();
  this[W8y.Z4M] = new box2d[W8y.P70]();
  this[W8y.j00] = new box2d[W8y.p7T]();
  this[W8y.s6Q] = new box2d[W8y.p7T](), this[W8y.a8Q] = new box2d[W8y.p7T](), this[W8y.n8Q] = new box2d[W8y.p7T](), this[W8y.B5Q] = new box2d[W8y.p7T]();
  this[W8y.G37] = new box2d[W8y.p7T](), this[W8y.l07] = new box2d[W8y.p7T](), this[W8y.G77] = new box2d[W8y.p7T]();
  this[W8y.P8H] = new box2d[W8y.p7T]();
  this[N] = box2d[W8y.D06][W8y.d5H], this[f] = box2d[W8y.D06][W8y.d5H];
  this[W8y.B9T] = new box2d[W8y.p7T](), this[W8y.N4T] = new box2d[W8y.p7T]();
  this[W8y.o4T] = W8y.u8Q;
  this[W8y.H36] = W8y.G0T;
};

box2d.b2EPCollider.prototype.m_polygonB = W8y.z6k;
box2d.b2EPCollider.prototype.m_xf = W8y.z6k;
box2d.b2EPCollider.prototype.m_centroidB = W8y.z6k;
box2d.b2EPCollider.prototype.m_v0 = W8y.z6k;
box2d.b2EPCollider.prototype.m_v1 = W8y.z6k;
box2d.b2EPCollider.prototype.m_v2 = W8y.z6k;
box2d.b2EPCollider.prototype.m_v3 = W8y.z6k;
box2d.b2EPCollider.prototype.m_normal0 = W8y.z6k;
box2d.b2EPCollider.prototype.m_normal1 = W8y.z6k;
box2d.b2EPCollider.prototype.m_normal2 = W8y.z6k;
box2d.b2EPCollider.prototype.m_normal = W8y.z6k;
box2d.b2EPCollider.prototype.m_type1 = box2d[W8y.D06][W8y.d5H];
box2d.b2EPCollider.prototype.m_type2 = box2d[W8y.D06][W8y.d5H];
box2d.b2EPCollider.prototype.m_lowerLimit = W8y.z6k;
box2d.b2EPCollider.prototype.m_upperLimit = W8y.z6k;
box2d.b2EPCollider.prototype.m_radius = W8y.u8Q;
box2d.b2EPCollider.prototype.m_front = W8y.G0T;

box2d.b2EPCollider.prototype.Collide = function (f, N, P, Z, W) {
  var l = "A5X",
      m = "G5X",
      C = "v5X",
      n = "M5X",
      k = "E5X",
      H = "R5X",
      i = "I5X",
      Q = "j5X",
      e = "Q5X",
      j = "k5X",
      o = "C5X",
      S = "x5X",
      d = "m5X",
      u = "Y5X",
      D = "c5X",
      M = "ComputePolygonSeparation",
      y1 = "P5X",
      h = "f5X",
      E = "ComputeEdgeSeparation",
      L = "t6X",
      w1 = "z6X",
      B = "B6X",
      N1 = "h6X",
      f1 = "D6X",
      c1 = "S6X",
      l1 = "o6X",
      P1 = "q6X",
      s1 = "i6X",
      b1 = "T6X",
      m1 = "O6X",
      W1 = "V6X",
      J1 = "g6X",
      C1 = "l6X",
      x1 = "W6X",
      T1 = "Z6X",
      K1 = "U6X",
      V1 = "y6X",
      Q1 = "F8X",
      D1 = "p8X",
      d1 = "L8X",
      u1 = "u8X",
      j1 = "d8X",
      G1 = "a8X",
      I1 = "e8X";
  box2d[W8y.J6Q](P, W, this[W8y.Z4M]);
  box2d[W8y.o10](this[W8y.Z4M], Z[W8y.S80], this[W8y.j00]);
  this[W8y.s6Q][W8y.k97](N[W8y.R06]);
  this[W8y.a8Q][W8y.k97](N[W8y.v06]);
  this[W8y.n8Q][W8y.k97](N[W8y.N60]);
  this[W8y.B5Q][W8y.k97](N[W8y.L80]);
  var e1 = N[W8y.N66],
      S1 = N[W8y.b66],
      B1 = box2d[W8y.x8T](this[W8y.n8Q], this[W8y.a8Q], box2d[W8y.L5T][W8y.u6k]);
  B1[W8y.Y27]();
  this[W8y.l07][W8y.y47](B1[W8y.Z9T], -B1[W8y.T9T]);
  var a1 = box2d[W8y.o27](this[W8y.l07], box2d[W8y.x8T](this[W8y.j00], this[W8y.a8Q], box2d[W8y.p7T][W8y.t7M])),
      F1 = W8y.u8Q,
      n4 = W8y.u8Q,
      h1 = W8y.G0T,
      t1 = W8y.G0T;

  if (e1) {
    var R4 = box2d[W8y.x8T](this[W8y.a8Q], this[W8y.s6Q], box2d[W8y.L5T][W8y.w5k]);
    R4[W8y.Y27]();
    this[W8y.G37][W8y.y47](R4[W8y.Z9T], -R4[W8y.T9T]);
    h1 = W8y[I1](box2d[W8y.t10](R4, B1), W8y.u8Q);
    F1 = box2d[W8y.o27](this[W8y.G37], box2d[W8y.x8T](this[W8y.j00], this[W8y.s6Q], box2d[W8y.p7T][W8y.t7M]));
  }

  if (S1) {
    var r4 = box2d[W8y.x8T](this[W8y.B5Q], this[W8y.n8Q], box2d[W8y.L5T][W8y.w3k]);
    r4[W8y.Y27]();
    this[W8y.G77][W8y.y47](r4[W8y.Z9T], -r4[W8y.T9T]);
    t1 = W8y[G1](box2d[W8y.t10](B1, r4), W8y.u8Q);
    n4 = box2d[W8y.o27](this[W8y.G77], box2d[W8y.x8T](this[W8y.j00], this[W8y.n8Q], box2d[W8y.p7T][W8y.t7M]));
  }

  if (e1 && S1) {
    if (h1 && t1) {
      this[W8y.H36] = W8y[j1](F1, W8y.u8Q) || W8y[u1](a1, W8y.u8Q) || W8y[d1](n4, W8y.u8Q);

      if (this[W8y.H36]) {
        this[W8y.P8H][W8y.k97](this[W8y.l07]);
        this[W8y.B9T][W8y.k97](this[W8y.G37]);
        this[W8y.N4T][W8y.k97](this[W8y.G77]);
      } else {
        this[W8y.P8H][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.B9T][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.N4T][W8y.k97](this[W8y.l07])[W8y.P8k]();
      }
    } else if (h1) {
      this[W8y.H36] = W8y[D1](F1, W8y.u8Q) || W8y[Q1](a1, W8y.u8Q) && W8y[V1](n4, W8y.u8Q);

      if (this[W8y.H36]) {
        this[W8y.P8H][W8y.k97](this[W8y.l07]);
        this[W8y.B9T][W8y.k97](this[W8y.G37]);
        this[W8y.N4T][W8y.k97](this[W8y.l07]);
      } else {
        this[W8y.P8H][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.B9T][W8y.k97](this[W8y.G77])[W8y.P8k]();
        this[W8y.N4T][W8y.k97](this[W8y.l07])[W8y.P8k]();
      }
    } else if (t1) {
      this[W8y.H36] = W8y[K1](n4, W8y.u8Q) || W8y[T1](F1, W8y.u8Q) && W8y[x1](a1, W8y.u8Q);

      if (this[W8y.H36]) {
        this[W8y.P8H][W8y.k97](this[W8y.l07]);
        this[W8y.B9T][W8y.k97](this[W8y.l07]);
        this[W8y.N4T][W8y.k97](this[W8y.G77]);
      } else {
        this[W8y.P8H][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.B9T][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.N4T][W8y.k97](this[W8y.G37])[W8y.P8k]();
      }
    } else {
      this[W8y.H36] = W8y[C1](F1, W8y.u8Q) && W8y[J1](a1, W8y.u8Q) && W8y[W1](n4, W8y.u8Q);

      if (this[W8y.H36]) {
        this[W8y.P8H][W8y.k97](this[W8y.l07]);
        this[W8y.B9T][W8y.k97](this[W8y.l07]);
        this[W8y.N4T][W8y.k97](this[W8y.l07]);
      } else {
        this[W8y.P8H][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.B9T][W8y.k97](this[W8y.G77])[W8y.P8k]();
        this[W8y.N4T][W8y.k97](this[W8y.G37])[W8y.P8k]();
      }
    }
  } else if (e1) {
    if (h1) {
      this[W8y.H36] = W8y[m1](F1, W8y.u8Q) || W8y[b1](a1, W8y.u8Q);

      if (this[W8y.H36]) {
        this[W8y.P8H][W8y.k97](this[W8y.l07]);
        this[W8y.B9T][W8y.k97](this[W8y.G37]);
        this[W8y.N4T][W8y.k97](this[W8y.l07])[W8y.P8k]();
      } else {
        this[W8y.P8H][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.B9T][W8y.k97](this[W8y.l07]);
        this[W8y.N4T][W8y.k97](this[W8y.l07])[W8y.P8k]();
      }
    } else {
      this[W8y.H36] = W8y[s1](F1, W8y.u8Q) && W8y[P1](a1, W8y.u8Q);

      if (this[W8y.H36]) {
        this[W8y.P8H][W8y.k97](this[W8y.l07]);
        this[W8y.B9T][W8y.k97](this[W8y.l07]);
        this[W8y.N4T][W8y.k97](this[W8y.l07])[W8y.P8k]();
      } else {
        this[W8y.P8H][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.B9T][W8y.k97](this[W8y.l07]);
        this[W8y.N4T][W8y.k97](this[W8y.G37])[W8y.P8k]();
      }
    }
  } else if (S1) {
    if (t1) {
      this[W8y.H36] = W8y[l1](a1, W8y.u8Q) || W8y[c1](n4, W8y.u8Q);

      if (this[W8y.H36]) {
        this[W8y.P8H][W8y.k97](this[W8y.l07]);
        this[W8y.B9T][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.N4T][W8y.k97](this[W8y.G77]);
      } else {
        this[W8y.P8H][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.B9T][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.N4T][W8y.k97](this[W8y.l07]);
      }
    } else {
      this[W8y.H36] = W8y[f1](a1, W8y.u8Q) && W8y[N1](n4, W8y.u8Q);

      if (this[W8y.H36]) {
        this[W8y.P8H][W8y.k97](this[W8y.l07]);
        this[W8y.B9T][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.N4T][W8y.k97](this[W8y.l07]);
      } else {
        this[W8y.P8H][W8y.k97](this[W8y.l07])[W8y.P8k]();
        this[W8y.B9T][W8y.k97](this[W8y.G77])[W8y.P8k]();
        this[W8y.N4T][W8y.k97](this[W8y.l07]);
      }
    }
  } else {
    this[W8y.H36] = W8y[B](a1, W8y.u8Q);

    if (this[W8y.H36]) {
      this[W8y.P8H][W8y.k97](this[W8y.l07]);
      this[W8y.B9T][W8y.k97](this[W8y.l07])[W8y.P8k]();
      this[W8y.N4T][W8y.k97](this[W8y.l07])[W8y.P8k]();
    } else {
      this[W8y.P8H][W8y.k97](this[W8y.l07])[W8y.P8k]();
      this[W8y.B9T][W8y.k97](this[W8y.l07]);
      this[W8y.N4T][W8y.k97](this[W8y.l07]);
    }
  }

  this[W8y.M8M][W8y.S5k] = Z[W8y.o9k];

  for (var w4 = W8y.u8Q, d4 = Z[W8y.o9k]; W8y[w1](w4, d4); ++w4) {
    box2d[W8y.o10](this[W8y.Z4M], Z[W8y.N4k][w4], this[W8y.M8M][W8y.Y70][w4]);
    box2d[W8y.x47](this[W8y.Z4M][W8y.b50], Z[W8y.w87][w4], this[W8y.M8M][W8y.V6k][w4]);
  }

  this[W8y.o4T] = W8y[L](W8y.d8Q, box2d[W8y.W4k]);
  f[W8y.O47] = W8y.u8Q;
  var H4 = this[E](box2d[W8y.L5T][W8y.P3H]);

  if (W8y[h](H4[W8y.N2k], box2d[W8y.E47][W8y.P47])) {
    return;
  }

  if (W8y[y1](H4[W8y.k7H], this[W8y.o4T])) {
    return;
  }

  var M4 = this[M](box2d[W8y.L5T][W8y.G6H]);

  if (W8y[D](M4[W8y.N2k], box2d[W8y.E47][W8y.P47]) && W8y[u](M4[W8y.k7H], this[W8y.o4T])) {
    return;
  }

  var k4 = W8y.c20,
      D4 = W8y.x3M,
      Y4;

  if (W8y[d](M4[W8y.N2k], box2d[W8y.E47][W8y.P47])) {
    Y4 = H4;
  } else if (W8y[S](M4[W8y.k7H], k4 * H4[W8y.k7H] + D4)) {
    Y4 = M4;
  } else {
    Y4 = H4;
  }

  var W4 = box2d[W8y.L5T][W8y.X67],
      A1 = box2d[W8y.L5T][W8y.Z67];

  if (W8y[o](Y4[W8y.N2k], box2d[W8y.E47][W8y.X5M])) {
    f[W8y.N2k] = box2d[W8y.j76][W8y.I60];
    var L4 = W8y.u8Q,
        B4 = box2d[W8y.o27](this[W8y.P8H], this[W8y.M8M][W8y.V6k][W8y.u8Q]);

    for (var w4 = W8y.D8Q, d4 = this[W8y.M8M][W8y.S5k]; W8y[j](w4, d4); ++w4) {
      var G4 = box2d[W8y.o27](this[W8y.P8H], this[W8y.M8M][W8y.V6k][w4]);

      if (W8y[e](G4, B4)) {
        B4 = G4;
        L4 = w4;
      }
    }

    var P4 = L4,
        o4 = W8y[Q](P4 + W8y.D8Q, this[W8y.M8M][W8y.S5k]),
        X4 = W4[W8y.u8Q];
    X4[W8y.N8T][W8y.k97](this[W8y.M8M][W8y.Y70][P4]);
    X4[W8y.W6M][W8y.i3k][W8y.K30] = W8y.u8Q;
    X4[W8y.W6M][W8y.i3k][W8y.L40] = P4;
    X4[W8y.W6M][W8y.i3k][W8y.G30] = box2d[W8y.Q0M][W8y.X3k];
    X4[W8y.W6M][W8y.i3k][W8y.j30] = box2d[W8y.Q0M][W8y.y70];
    var m4 = W4[W8y.D8Q];
    m4[W8y.N8T][W8y.k97](this[W8y.M8M][W8y.Y70][o4]);
    m4[W8y.W6M][W8y.i3k][W8y.K30] = W8y.u8Q;
    m4[W8y.W6M][W8y.i3k][W8y.L40] = o4;
    m4[W8y.W6M][W8y.i3k][W8y.G30] = box2d[W8y.Q0M][W8y.X3k];
    m4[W8y.W6M][W8y.i3k][W8y.j30] = box2d[W8y.Q0M][W8y.y70];

    if (this[W8y.H36]) {
      A1[W8y.R7M] = W8y.u8Q;
      A1[W8y.z7M] = W8y.D8Q;
      A1[W8y.b4T][W8y.k97](this[W8y.a8Q]);
      A1[W8y.k2T][W8y.k97](this[W8y.n8Q]);
      A1[W8y.M4T][W8y.k97](this[W8y.l07]);
    } else {
      A1[W8y.R7M] = W8y.D8Q;
      A1[W8y.z7M] = W8y.u8Q;
      A1[W8y.b4T][W8y.k97](this[W8y.n8Q]);
      A1[W8y.k2T][W8y.k97](this[W8y.a8Q]);
      A1[W8y.M4T][W8y.k97](this[W8y.l07])[W8y.P8k]();
    }
  } else {
    f[W8y.N2k] = box2d[W8y.j76][W8y.J60];
    var X4 = W4[W8y.u8Q];
    X4[W8y.N8T][W8y.k97](this[W8y.a8Q]);
    X4[W8y.W6M][W8y.i3k][W8y.K30] = W8y.u8Q;
    X4[W8y.W6M][W8y.i3k][W8y.L40] = Y4[W8y.K26];
    X4[W8y.W6M][W8y.i3k][W8y.G30] = box2d[W8y.Q0M][W8y.y70];
    X4[W8y.W6M][W8y.i3k][W8y.j30] = box2d[W8y.Q0M][W8y.X3k];
    var m4 = W4[W8y.D8Q];
    m4[W8y.N8T][W8y.k97](this[W8y.n8Q]);
    m4[W8y.W6M][W8y.i3k][W8y.K30] = W8y.u8Q;
    m4[W8y.W6M][W8y.i3k][W8y.L40] = Y4[W8y.K26];
    m4[W8y.W6M][W8y.i3k][W8y.G30] = box2d[W8y.Q0M][W8y.y70];
    m4[W8y.W6M][W8y.i3k][W8y.j30] = box2d[W8y.Q0M][W8y.X3k];
    A1[W8y.R7M] = Y4[W8y.K26];
    A1[W8y.z7M] = W8y[i](A1[W8y.R7M] + W8y.D8Q, this[W8y.M8M][W8y.S5k]);
    A1[W8y.b4T][W8y.k97](this[W8y.M8M][W8y.Y70][A1[W8y.R7M]]);
    A1[W8y.k2T][W8y.k97](this[W8y.M8M][W8y.Y70][A1[W8y.z7M]]);
    A1[W8y.M4T][W8y.k97](this[W8y.M8M][W8y.V6k][A1[W8y.R7M]]);
  }

  A1[W8y.p50][W8y.y47](A1[W8y.M4T][W8y.Z9T], -A1[W8y.M4T][W8y.T9T]);
  A1[W8y.W1T][W8y.k97](A1[W8y.p50])[W8y.P8k]();
  A1[W8y.y9M] = box2d[W8y.o27](A1[W8y.p50], A1[W8y.b4T]);
  A1[W8y.d0M] = box2d[W8y.o27](A1[W8y.W1T], A1[W8y.k2T]);
  var O4 = box2d[W8y.L5T][W8y.A0M],
      F4 = box2d[W8y.L5T][W8y.l7M],
      w2 = W8y.u8Q;
  w2 = box2d[W8y.v17](O4, W4, A1[W8y.p50], A1[W8y.y9M], A1[W8y.R7M]);

  if (W8y[H](w2, box2d[W8y.j06])) {
    return;
  }

  w2 = box2d[W8y.v17](F4, O4, A1[W8y.W1T], A1[W8y.d0M], A1[W8y.z7M]);

  if (W8y[k](w2, box2d[W8y.j06])) {
    return;
  }

  if (W8y[n](Y4[W8y.N2k], box2d[W8y.E47][W8y.X5M])) {
    f[W8y.V67][W8y.k97](A1[W8y.M4T]);
    f[W8y.B9H][W8y.k97](A1[W8y.b4T]);
  } else {
    f[W8y.V67][W8y.k97](Z[W8y.w87][A1[W8y.R7M]]);
    f[W8y.B9H][W8y.k97](Z[W8y.N4k][A1[W8y.R7M]]);
  }

  var U2 = W8y.u8Q;

  for (var w4 = W8y.u8Q, d4 = box2d[W8y.j06]; W8y[C](w4, d4); ++w4) {
    var t4;
    t4 = box2d[W8y.o27](A1[W8y.M4T], box2d[W8y.x8T](F4[w4][W8y.N8T], A1[W8y.b4T], box2d[W8y.p7T][W8y.t7M]));

    if (W8y[m](t4, this[W8y.o4T])) {
      var y2 = f[W8y.H10][U2];

      if (W8y[l](Y4[W8y.N2k], box2d[W8y.E47][W8y.X5M])) {
        box2d[W8y.a90](this[W8y.Z4M], F4[w4][W8y.N8T], y2[W8y.B9H]);
        y2[W8y.W6M] = F4[w4][W8y.W6M];
      } else {
        y2[W8y.B9H][W8y.k97](F4[w4][W8y.N8T]);
        y2[W8y.W6M][W8y.i3k][W8y.G30] = F4[w4][W8y.W6M][W8y.i3k][W8y.j30];
        y2[W8y.W6M][W8y.i3k][W8y.j30] = F4[w4][W8y.W6M][W8y.i3k][W8y.G30];
        y2[W8y.W6M][W8y.i3k][W8y.K30] = F4[w4][W8y.W6M][W8y.i3k][W8y.L40];
        y2[W8y.W6M][W8y.i3k][W8y.L40] = F4[w4][W8y.W6M][W8y.i3k][W8y.K30];
      }

      ++U2;
    }
  }

  f[W8y.O47] = U2;
};

box2d[W8y.L5T][W8y.u6k] = new box2d[W8y.p7T]();
box2d[W8y.L5T][W8y.w5k] = new box2d[W8y.p7T]();
box2d[W8y.L5T][W8y.w3k] = new box2d[W8y.p7T]();
box2d[W8y.L5T][W8y.X67] = box2d[W8y.E5M][W8y.N1r](W8y.d8Q);
box2d[W8y.L5T][W8y.Z67] = new box2d[W8y.L90]();
box2d[W8y.L5T][W8y.A0M] = box2d[W8y.E5M][W8y.N1r](W8y.d8Q);
box2d[W8y.L5T][W8y.l7M] = box2d[W8y.E5M][W8y.N1r](W8y.d8Q);
box2d[W8y.L5T][W8y.P3H] = new box2d[W8y.K7H]();
box2d[W8y.L5T][W8y.G6H] = new box2d[W8y.K7H]();

box2d.b2EPCollider.prototype.ComputeEdgeSeparation = function (f) {
  var N = "N1z",
      P = "w1z",
      Z = f;
  Z[W8y.N2k] = box2d[W8y.E47][W8y.X5M];
  Z[W8y.K26] = this[W8y.H36] ? W8y.u8Q : W8y.D8Q;
  Z[W8y.k7H] = box2d[W8y.Z57];

  for (var W = W8y.u8Q, l = this[W8y.M8M][W8y.S5k]; W8y[P](W, l); ++W) {
    var m = box2d[W8y.o27](this[W8y.P8H], box2d[W8y.x8T](this[W8y.M8M][W8y.Y70][W], this[W8y.a8Q], box2d[W8y.p7T][W8y.t7M]));

    if (W8y[N](m, Z[W8y.k7H])) {
      Z[W8y.k7H] = m;
    }
  }

  return Z;
};

box2d.b2EPCollider.prototype.ComputePolygonSeparation = function (f) {
  var N = "J1z",
      P = "b1z",
      Z = "s1z",
      W = "X1z",
      l = f;
  l[W8y.N2k] = box2d[W8y.E47][W8y.P47];
  l[W8y.K26] = -W8y.D8Q;
  l[W8y.k7H] = -box2d[W8y.Z57];
  var m = box2d[W8y.L5T][W8y.f7M][W8y.y47](-this[W8y.P8H][W8y.Z9T], this[W8y.P8H][W8y.T9T]);

  for (var C = W8y.u8Q, n = this[W8y.M8M][W8y.S5k]; W8y[W](C, n); ++C) {
    var k = box2d[W8y.F7M](this[W8y.M8M][W8y.V6k][C], box2d[W8y.L5T][W8y.H97]),
        H = box2d[W8y.o27](k, box2d[W8y.x8T](this[W8y.M8M][W8y.Y70][C], this[W8y.a8Q], box2d[W8y.p7T][W8y.t7M])),
        i = box2d[W8y.o27](k, box2d[W8y.x8T](this[W8y.M8M][W8y.Y70][C], this[W8y.n8Q], box2d[W8y.p7T][W8y.t7M])),
        Q = box2d[W8y.G60](H, i);

    if (W8y[Z](Q, this[W8y.o4T])) {
      l[W8y.N2k] = box2d[W8y.E47][W8y.f1k];
      l[W8y.K26] = C;
      l[W8y.k7H] = Q;
      return l;
    }

    if (W8y[P](box2d[W8y.o27](k, m), W8y.u8Q)) {
      if (box2d[W8y.o27](box2d[W8y.x8T](k, this[W8y.N4T], box2d[W8y.p7T][W8y.t7M]), this[W8y.P8H]) < -box2d[W8y.r5k]) {
        continue;
      }
    } else {
      if (box2d[W8y.o27](box2d[W8y.x8T](k, this[W8y.B9T], box2d[W8y.p7T][W8y.t7M]), this[W8y.P8H]) < -box2d[W8y.r5k]) {
        continue;
      }
    }

    if (W8y[N](Q, l[W8y.k7H])) {
      l[W8y.N2k] = box2d[W8y.E47][W8y.f1k];
      l[W8y.K26] = C;
      l[W8y.k7H] = Q;
    }
  }

  return l;
};

box2d[W8y.L5T][W8y.H97] = new box2d[W8y.p7T]();
box2d[W8y.L5T][W8y.f7M] = new box2d[W8y.p7T]();

box2d[W8y.Z00] = function (f, N, P, Z, W) {
  var l = box2d[W8y.Z00][W8y.Y8k];
  l[W8y.I77](f, N, P, Z, W);
};

box2d[W8y.Z00][W8y.Y8k] = new box2d[W8y.L5T]();
goog[W8y.U3T](W8y.h6H);
goog[W8y.V20]('box2d.b2Shape');

box2d[W8y.p7H] = function () {
  goog[W8y.o66](this, box2d[W8y.i80][W8y.E2H], box2d[W8y.W4k]);
  this[W8y.v06] = new box2d[W8y.p7T]();
  this[W8y.N60] = new box2d[W8y.p7T]();
  this[W8y.R06] = new box2d[W8y.p7T]();
  this[W8y.L80] = new box2d[W8y.p7T]();
};

goog[W8y.u80](box2d[W8y.p7H], box2d[W8y.V7T]);
box2d.b2EdgeShape.prototype.m_vertex1 = W8y.z6k;
box2d.b2EdgeShape.prototype.m_vertex2 = W8y.z6k;
box2d.b2EdgeShape.prototype.m_vertex0 = W8y.z6k;
box2d.b2EdgeShape.prototype.m_vertex3 = W8y.z6k;
box2d.b2EdgeShape.prototype.m_hasVertex0 = W8y.G0T;
box2d.b2EdgeShape.prototype.m_hasVertex3 = W8y.G0T;

box2d.b2EdgeShape.prototype.Set = function (f, N) {
  this[W8y.v06][W8y.k97](f);
  this[W8y.N60][W8y.k97](N);
  this[W8y.N66] = W8y.G0T;
  this[W8y.b66] = W8y.G0T;
  return this;
};

box2d.b2EdgeShape.prototype.SetAsEdge = box2d.b2EdgeShape.prototype.Set;

box2d.b2EdgeShape.prototype.Clone = function () {
  return new box2d[W8y.p7H]()[W8y.k97](this);
};

box2d.b2EdgeShape.prototype.Copy = function (f) {
  var N = "n1z";
  goog[W8y.o66](this, W8y.n8H, f);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](f, box2d[W8y.p7H]));
  }

  this[W8y.v06][W8y.k97](f[W8y.v06]);
  this[W8y.N60][W8y.k97](f[W8y.N60]);
  this[W8y.R06][W8y.k97](f[W8y.R06]);
  this[W8y.L80][W8y.k97](f[W8y.L80]);
  this[W8y.N66] = f[W8y.N66];
  this[W8y.b66] = f[W8y.b66];
  return this;
};

box2d.b2EdgeShape.prototype.GetChildCount = function () {
  return W8y.D8Q;
};

box2d.b2EdgeShape.prototype.TestPoint = function (f, N) {
  return W8y.G0T;
};

box2d.b2EdgeShape.prototype.RayCast = function (f, N, P, Z) {
  var W = "p1z",
      l = "L1z",
      m = "u1z",
      C = "d1z",
      n = "a1z",
      k = "e1z",
      H = "r1z",
      i = "H1z",
      Q = "K1z",
      e = box2d[W8y.a90](P, N[W8y.h17], box2d.b2EdgeShape.prototype.RayCast.s_p1),
      j = box2d[W8y.a90](P, N[W8y.W47], box2d.b2EdgeShape.prototype.RayCast.s_p2),
      o = box2d[W8y.x8T](j, e, box2d.b2EdgeShape.prototype.RayCast.s_d),
      S = this[W8y.v06],
      d = this[W8y.N60],
      u = box2d[W8y.x8T](d, S, box2d.b2EdgeShape.prototype.RayCast.s_e),
      D = f[W8y.M4T][W8y.y47](u[W8y.Z9T], -u[W8y.T9T])[W8y.s1k](),
      M = box2d[W8y.o27](D, box2d[W8y.x8T](S, e, box2d[W8y.p7T][W8y.t7M])),
      y1 = box2d[W8y.o27](D, o);

  if (W8y[Q](y1, W8y.u8Q)) {
    return W8y.G0T;
  }

  var h = W8y[i](M, y1);

  if (W8y[H](h, W8y.u8Q) || W8y[k](N[W8y.v4T], h)) {
    return W8y.G0T;
  }

  var E = box2d[W8y.r26](e, h, o, box2d.b2EdgeShape.prototype.RayCast.s_q),
      L = box2d[W8y.x8T](d, S, box2d.b2EdgeShape.prototype.RayCast.s_r),
      w1 = box2d[W8y.o27](L, L);

  if (W8y[n](w1, W8y.u8Q)) {
    return W8y.G0T;
  }

  var B = W8y[C](box2d[W8y.o27](box2d[W8y.x8T](E, S, box2d[W8y.p7T][W8y.t7M]), L), w1);

  if (W8y[m](B, W8y.u8Q) || W8y[l](W8y.D8Q, B)) {
    return W8y.G0T;
  }

  f[W8y.j57] = h;
  box2d[W8y.x47](P[W8y.b50], f[W8y.M4T], f[W8y.M4T]);

  if (W8y[W](M, W8y.u8Q)) {
    f[W8y.M4T][W8y.P8k]();
  }

  return W8y.f5k;
};

box2d.b2EdgeShape.prototype.RayCast.s_p1 = new box2d[W8y.p7T]();
box2d.b2EdgeShape.prototype.RayCast.s_p2 = new box2d[W8y.p7T]();
box2d.b2EdgeShape.prototype.RayCast.s_d = new box2d[W8y.p7T]();
box2d.b2EdgeShape.prototype.RayCast.s_e = new box2d[W8y.p7T]();
box2d.b2EdgeShape.prototype.RayCast.s_q = new box2d[W8y.p7T]();
box2d.b2EdgeShape.prototype.RayCast.s_r = new box2d[W8y.p7T]();

box2d.b2EdgeShape.prototype.ComputeAABB = function (f, N, P) {
  var Z = box2d[W8y.o10](N, this[W8y.v06], box2d.b2EdgeShape.prototype.ComputeAABB.s_v1),
      W = box2d[W8y.o10](N, this[W8y.N60], box2d.b2EdgeShape.prototype.ComputeAABB.s_v2);
  box2d[W8y.k8H](Z, W, f[W8y.d1T]);
  box2d[W8y.k8T](Z, W, f[W8y.I1T]);
  var l = this[W8y.o4T];
  f[W8y.d1T][W8y.m8Q](l, l);
  f[W8y.I1T][W8y.a97](l, l);
};

box2d.b2EdgeShape.prototype.ComputeAABB.s_v1 = new box2d[W8y.p7T]();
box2d.b2EdgeShape.prototype.ComputeAABB.s_v2 = new box2d[W8y.p7T]();

box2d.b2EdgeShape.prototype.ComputeMass = function (f, N) {
  f[W8y.T3r] = W8y.u8Q;
  box2d[W8y.O80](this[W8y.v06], this[W8y.N60], f[W8y.u6M]);
  f[W8y.T10] = W8y.u8Q;
};

box2d.b2EdgeShape.prototype.SetupDistanceProxy = function (f, N) {
  f[W8y.N4k] = new Array(W8y.d8Q);
  f[W8y.N4k][W8y.u8Q] = this[W8y.v06];
  f[W8y.N4k][W8y.D8Q] = this[W8y.N60];
  f[W8y.o9k] = W8y.d8Q;
  f[W8y.o4T] = this[W8y.o4T];
};

box2d.b2EdgeShape.prototype.ComputeSubmergedArea = function (f, N, P, Z) {
  Z[W8y.j6k]();
  return W8y.u8Q;
};

box2d.b2EdgeShape.prototype.Dump = function () {
  var f = "    shape.m_hasVertex3 = %s;\n",
      N = "    shape.m_hasVertex0 = %s;\n",
      P = "    shape.m_vertex3.SetXY(%.15f, %.15f);\n",
      Z = "    shape.m_vertex2.SetXY(%.15f, %.15f);\n",
      W = "    shape.m_vertex1.SetXY(%.15f, %.15f);\n",
      l = "    shape.m_vertex0.SetXY(%.15f, %.15f);\n",
      m = "    /*box2d.b2EdgeShape*/ var shape = new box2d.b2EdgeShape();\n";
  box2d[W8y.R50](m);
  box2d[W8y.R50](W8y.m97, this[W8y.o4T]);
  box2d[W8y.R50](l, this[W8y.R06][W8y.T9T], this[W8y.R06][W8y.Z9T]);
  box2d[W8y.R50](W, this[W8y.v06][W8y.T9T], this[W8y.v06][W8y.Z9T]);
  box2d[W8y.R50](Z, this[W8y.N60][W8y.T9T], this[W8y.N60][W8y.Z9T]);
  box2d[W8y.R50](P, this[W8y.L80][W8y.T9T], this[W8y.L80][W8y.Z9T]);
  box2d[W8y.R50](N, this[W8y.N66]);
  box2d[W8y.R50](f, this[W8y.b66]);
};

goog[W8y.U3T](W8y.z7k);
goog[W8y.V20]('box2d.b2Shape');
goog[W8y.V20]('box2d.b2EdgeShape');

box2d[W8y.x90] = function () {
  goog[W8y.o66](this, box2d[W8y.i80][W8y.x87], box2d[W8y.W4k]);
  this[W8y.p26] = new box2d[W8y.p7T]();
  this[W8y.g76] = new box2d[W8y.p7T]();
};

goog[W8y.u80](box2d[W8y.x90], box2d[W8y.V7T]);
box2d.b2ChainShape.prototype.m_vertices = W8y.z6k;
box2d.b2ChainShape.prototype.m_count = W8y.u8Q;
box2d.b2ChainShape.prototype.m_prevVertex = W8y.z6k;
box2d.b2ChainShape.prototype.m_nextVertex = W8y.z6k;
box2d.b2ChainShape.prototype.m_hasPrevVertex = W8y.G0T;
box2d.b2ChainShape.prototype.m_hasNextVertex = W8y.G0T;

box2d.b2ChainShape.prototype.CreateLoop = function (f, N) {
  var P = "V4z",
      Z = "g4z",
      W = "l4z",
      l = "W4z",
      m = "Z4z",
      C = "U4z",
      n = "y4z",
      k = "F1z";
  N = N || f.length;

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[k](this[W8y.N4k], W8y.z6k) && W8y[n](this[W8y.o9k], W8y.u8Q));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[C](N, W8y.S8Q));
  }

  if (box2d[W8y.l3H]) {
    for (var H = W8y.D8Q; W8y[m](H, N); ++H) {
      var i = f[W8y[l](H, W8y.D8Q)],
          Q = f[H];
      box2d[W8y.X16](W8y[W](box2d[W8y.Z9k](i, Q), box2d[W8y.Z8k] * box2d[W8y.Z8k]));
    }
  }

  this[W8y.o9k] = N + W8y.D8Q;
  this[W8y.N4k] = box2d[W8y.p7T][W8y.N1r](this[W8y.o9k]);

  for (var H = W8y.u8Q; W8y[Z](H, N); ++H) {
    this[W8y.N4k][H][W8y.k97](f[H]);
  }

  this[W8y.N4k][N][W8y.k97](this[W8y.N4k][W8y.u8Q]);
  this[W8y.p26][W8y.k97](this[W8y.N4k][W8y[P](this[W8y.o9k], W8y.d8Q)]);
  this[W8y.g76][W8y.k97](this[W8y.N4k][W8y.D8Q]);
  this[W8y.L7H] = W8y.f5k;
  this[W8y.g7M] = W8y.f5k;
  return this;
};

box2d.b2ChainShape.prototype.CreateChain = function (f, N) {
  var P = "D4z",
      Z = "S4z",
      W = "o4z",
      l = "q4z",
      m = "i4z",
      C = "T4z",
      n = "O4z";
  N = N || f.length;

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[n](this[W8y.N4k], W8y.z6k) && W8y[C](this[W8y.o9k], W8y.u8Q));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](N, W8y.d8Q));
  }

  if (box2d[W8y.l3H]) {
    for (var k = W8y.D8Q; W8y[l](k, N); ++k) {
      var H = f[W8y[W](k, W8y.D8Q)],
          i = f[k];
      box2d[W8y.X16](W8y[Z](box2d[W8y.Z9k](H, i), box2d[W8y.Z8k] * box2d[W8y.Z8k]));
    }
  }

  this[W8y.o9k] = N;
  this[W8y.N4k] = box2d[W8y.p7T][W8y.N1r](N);

  for (var k = W8y.u8Q; W8y[P](k, N); ++k) {
    this[W8y.N4k][k][W8y.k97](f[k]);
  }

  this[W8y.L7H] = W8y.G0T;
  this[W8y.g7M] = W8y.G0T;
  this[W8y.p26][W8y.j6k]();
  this[W8y.g76][W8y.j6k]();
  return this;
};

box2d.b2ChainShape.prototype.SetPrevVertex = function (f) {
  this[W8y.p26][W8y.k97](f);
  this[W8y.L7H] = W8y.f5k;
  return this;
};

box2d.b2ChainShape.prototype.SetNextVertex = function (f) {
  this[W8y.g76][W8y.k97](f);
  this[W8y.g7M] = W8y.f5k;
  return this;
};

box2d.b2ChainShape.prototype.Clone = function () {
  return new box2d[W8y.x90]()[W8y.k97](this);
};

box2d.b2ChainShape.prototype.Copy = function (f) {
  var N = "h4z";
  goog[W8y.o66](this, W8y.n8H, f);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](f, box2d[W8y.x90]));
  }

  this[W8y.l80](f[W8y.N4k], f[W8y.o9k]);
  this[W8y.p26][W8y.k97](f[W8y.p26]);
  this[W8y.g76][W8y.k97](f[W8y.g76]);
  this[W8y.L7H] = f[W8y.L7H];
  this[W8y.g7M] = f[W8y.g7M];
  return this;
};

box2d.b2ChainShape.prototype.GetChildCount = function () {
  var f = "B4z";
  return W8y[f](this[W8y.o9k], W8y.D8Q);
};

box2d.b2ChainShape.prototype.GetChildEdge = function (f, N) {
  var P = "c2z",
      Z = "P2z",
      W = "f2z",
      l = "t4z",
      m = "z4z";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](W8y.u8Q, N) && W8y[l](N, this[W8y.o9k] - W8y.D8Q));
  }

  f[W8y.b5T] = box2d[W8y.i80][W8y.E2H];
  f[W8y.o4T] = this[W8y.o4T];
  f[W8y.v06][W8y.k97](this[W8y.N4k][N]);
  f[W8y.N60][W8y.k97](this[W8y.N4k][N + W8y.D8Q]);

  if (W8y[W](N, W8y.u8Q)) {
    f[W8y.R06][W8y.k97](this[W8y.N4k][W8y[Z](N, W8y.D8Q)]);
    f[W8y.N66] = W8y.f5k;
  } else {
    f[W8y.R06][W8y.k97](this[W8y.p26]);
    f[W8y.N66] = this[W8y.L7H];
  }

  if (W8y[P](N, this[W8y.o9k] - W8y.d8Q)) {
    f[W8y.L80][W8y.k97](this[W8y.N4k][N + W8y.d8Q]);
    f[W8y.b66] = W8y.f5k;
  } else {
    f[W8y.L80][W8y.k97](this[W8y.g76]);
    f[W8y.b66] = this[W8y.g7M];
  }
};

box2d.b2ChainShape.prototype.TestPoint = function (f, N) {
  return W8y.G0T;
};

box2d.b2ChainShape.prototype.RayCast = function (f, N, P, Z) {
  var W = "m2z",
      l = "Y2z";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](Z, this[W8y.o9k]));
  }

  var m = box2d[W8y.x90][W8y.X50];
  m[W8y.v06][W8y.k97](this[W8y.N4k][Z]);
  m[W8y.N60][W8y.k97](this[W8y.N4k][W8y[W](Z + W8y.D8Q, this[W8y.o9k])]);
  return m[W8y.C7M](f, N, P, W8y.u8Q);
};

box2d[W8y.x90][W8y.X50] = new box2d[W8y.p7H]();

box2d.b2ChainShape.prototype.ComputeAABB = function (f, N, P) {
  var Z = "C2z",
      W = "x2z";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](P, this[W8y.o9k]));
  }

  var l = this[W8y.N4k][P],
      m = this[W8y.N4k][W8y[Z](P + W8y.D8Q, this[W8y.o9k])],
      C = box2d[W8y.o10](N, l, box2d.b2ChainShape.prototype.ComputeAABB.s_v1),
      n = box2d[W8y.o10](N, m, box2d.b2ChainShape.prototype.ComputeAABB.s_v2);
  box2d[W8y.k8H](C, n, f[W8y.d1T]);
  box2d[W8y.k8T](C, n, f[W8y.I1T]);
};

box2d.b2ChainShape.prototype.ComputeAABB.s_v1 = new box2d[W8y.p7T]();
box2d.b2ChainShape.prototype.ComputeAABB.s_v2 = new box2d[W8y.p7T]();

box2d.b2ChainShape.prototype.ComputeMass = function (f, N) {
  f[W8y.T3r] = W8y.u8Q;
  f[W8y.u6M][W8y.j6k]();
  f[W8y.T10] = W8y.u8Q;
};

box2d.b2ChainShape.prototype.SetupDistanceProxy = function (f, N) {
  var P = "j2z",
      Z = "Q2z",
      W = "k2z";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](W8y.u8Q, N) && W8y[Z](N, this[W8y.o9k]));
  }

  f[W8y.o1T][W8y.u8Q][W8y.k97](this[W8y.N4k][N]);

  if (W8y[P](N + W8y.D8Q, this[W8y.o9k])) {
    f[W8y.o1T][W8y.D8Q][W8y.k97](this[W8y.N4k][N + W8y.D8Q]);
  } else {
    f[W8y.o1T][W8y.D8Q][W8y.k97](this[W8y.N4k][W8y.u8Q]);
  }

  f[W8y.N4k] = f[W8y.o1T];
  f[W8y.o9k] = W8y.d8Q;
  f[W8y.o4T] = this[W8y.o4T];
};

box2d.b2ChainShape.prototype.ComputeSubmergedArea = function (f, N, P, Z) {
  Z[W8y.j6k]();
  return W8y.u8Q;
};

box2d.b2ChainShape.prototype.Dump = function () {
  var f = "    shape.m_hasNextVertex = %s;\n",
      N = "    shape.m_hasPrevVertex = %s;\n",
      P = "    shape.m_nextVertex.SetXY(%.15f, %.15f);\n",
      Z = "    shape.m_prevVertex.SetXY(%.15f, %.15f);\n",
      W = "    shape.CreateChain(vs, %d);\n",
      l = "I2z",
      m = "    /*box2d.b2ChainShape*/ var shape = new box2d.b2ChainShape();\n";
  box2d[W8y.R50](m);
  box2d[W8y.R50](W8y.b97, box2d[W8y.E1M]);

  for (var C = W8y.u8Q; W8y[l](C, this[W8y.o9k]); ++C) {
    box2d[W8y.R50](W8y.V1r, C, this[W8y.N4k][C][W8y.T9T], this[W8y.N4k][C][W8y.Z9T]);
  }

  box2d[W8y.R50](W, this[W8y.o9k]);
  box2d[W8y.R50](Z, this[W8y.p26][W8y.T9T], this[W8y.p26][W8y.Z9T]);
  box2d[W8y.R50](P, this[W8y.g76][W8y.T9T], this[W8y.g76][W8y.Z9T]);
  box2d[W8y.R50](N, this[W8y.L7H] ? W8y.m7H : W8y.c26);
  box2d[W8y.R50](f, this[W8y.g7M] ? W8y.m7H : W8y.c26);
};

goog[W8y.U3T](W8y.n0k);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Contact');
goog[W8y.V20]('box2d.b2CollideEdge');
goog[W8y.V20]('box2d.b2ChainShape');
goog[W8y.V20]('box2d.b2PolygonShape');

box2d[W8y.D46] = function () {
  goog[W8y.o66](this);
};

goog[W8y.u80](box2d[W8y.D46], box2d[W8y.c7T]);

box2d[W8y.D46][W8y.D70] = function (f) {
  return new box2d[W8y.D46]();
};

box2d[W8y.D46][W8y.t87] = function (f, N) {};

box2d.b2ChainAndPolygonContact.prototype.Reset = function (f, N, P, Z) {
  var W = "E2z",
      l = "R2z";
  goog[W8y.o66](this, W8y.o87, f, N, P, Z);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](f[W8y.E1k](), box2d[W8y.i80][W8y.x87]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](P[W8y.E1k](), box2d[W8y.i80][W8y.E27]));
  }
};

box2d.b2ChainAndPolygonContact.prototype.Evaluate = function (f, N, P) {
  var Z = "A2z",
      W = "G2z",
      l = "v2z",
      m = "M2z",
      C = this[W8y.a10][W8y.y00](),
      n = this[W8y.G10][W8y.y00]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](C, box2d[W8y.x90]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](n, box2d[W8y.g16]));
  }

  var k = W8y[W](C, box2d[W8y.x90]) ? C : W8y.z6k,
      H = box2d.b2ChainAndPolygonContact.prototype.Evaluate.s_edge;
  k[W8y.A07](H, this[W8y.G0k]);
  box2d[W8y.Z00](f, H, N, W8y[Z](n, box2d[W8y.g16]) ? n : W8y.z6k, P);
};

box2d.b2ChainAndPolygonContact.prototype.Evaluate.s_edge = new box2d[W8y.p7H]();
goog[W8y.U3T](W8y.h8T);
goog[W8y.V20]('box2d.b2Collision');

box2d[W8y.P3k] = function (f, N, P, Z, W) {
  var l = "s3z",
      m = "X3z",
      C = "N3z",
      n = "w3z",
      k = N[W8y.o9k],
      H = Z[W8y.o9k],
      i = N[W8y.w87],
      Q = N[W8y.N4k],
      e = Z[W8y.N4k],
      j = box2d[W8y.J6Q](W, P, box2d[W8y.P3k][W8y.j3r]),
      o = W8y.u8Q,
      S = -box2d[W8y.Z57];

  for (var d = W8y.u8Q; W8y[n](d, k); ++d) {
    var u = box2d[W8y.x47](j[W8y.b50], i[d], box2d[W8y.P3k][W8y.H97]),
        D = box2d[W8y.o10](j, Q[d], box2d[W8y.P3k][W8y.i8T]),
        M = box2d[W8y.Z57];

    for (var y1 = W8y.u8Q; W8y[C](y1, H); ++y1) {
      var h = box2d[W8y.o27](u, box2d[W8y.x8T](e[y1], D, box2d[W8y.p7T][W8y.t7M]));

      if (W8y[m](h, M)) {
        M = h;
      }
    }

    if (W8y[l](M, S)) {
      S = M;
      o = d;
    }
  }

  f[W8y.u8Q] = o;
  return S;
};

box2d[W8y.P3k][W8y.j3r] = new box2d[W8y.P70]();
box2d[W8y.P3k][W8y.H97] = new box2d[W8y.p7T]();
box2d[W8y.P3k][W8y.i8T] = new box2d[W8y.p7T]();

box2d[W8y.I6H] = function (f, N, P, Z, W, l) {
  var m = "H3z",
      C = "K3z",
      n = "n3z",
      k = "J3z",
      H = "b3z",
      i = N[W8y.o9k],
      Q = N[W8y.w87],
      e = W[W8y.o9k],
      j = W[W8y.N4k],
      o = W[W8y.w87];

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[H](W8y.u8Q, Z) && W8y[k](Z, i));
  }

  var S = box2d[W8y.b0M](l[W8y.b50], box2d[W8y.x47](P[W8y.b50], Q[Z], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.I6H][W8y.N2M]),
      d = W8y.u8Q,
      u = box2d[W8y.Z57];

  for (var D = W8y.u8Q; W8y[n](D, e); ++D) {
    var M = box2d[W8y.o27](S, o[D]);

    if (W8y[C](M, u)) {
      u = M;
      d = D;
    }
  }

  var y1 = d,
      h = W8y[m](y1 + W8y.D8Q, e),
      E = f[W8y.u8Q];
  box2d[W8y.o10](l, j[y1], E[W8y.N8T]);
  var L = E[W8y.W6M][W8y.i3k];
  L[W8y.K30] = Z;
  L[W8y.L40] = y1;
  L[W8y.G30] = box2d[W8y.Q0M][W8y.X3k];
  L[W8y.j30] = box2d[W8y.Q0M][W8y.y70];
  var w1 = f[W8y.D8Q];
  box2d[W8y.o10](l, j[h], w1[W8y.N8T]);
  var B = w1[W8y.W6M][W8y.i3k];
  B[W8y.K30] = Z;
  B[W8y.L40] = h;
  B[W8y.G30] = box2d[W8y.Q0M][W8y.X3k];
  B[W8y.j30] = box2d[W8y.Q0M][W8y.y70];
};

box2d[W8y.I6H][W8y.N2M] = new box2d[W8y.p7T]();

box2d[W8y.b9M] = function (f, N, P, Z, W) {
  var l = "y0z",
      m = "F3z",
      C = "p3z",
      n = "L3z",
      k = "u3z",
      H = "d3z",
      i = "a3z",
      Q = "e3z",
      e = "r3z";
  f[W8y.O47] = W8y.u8Q;
  var j = N[W8y.o4T] + Z[W8y.o4T],
      o = box2d[W8y.b9M][W8y.G3k];
  o[W8y.u8Q] = W8y.u8Q;
  var S = box2d[W8y.P3k](o, N, P, Z, W);
  if (W8y[e](S, j)) return;
  var d = box2d[W8y.b9M][W8y.M6M];
  d[W8y.u8Q] = W8y.u8Q;
  var u = box2d[W8y.P3k](d, Z, W, N, P);
  if (W8y[Q](u, j)) return;
  var D,
      M,
      y1,
      h,
      E = W8y.u8Q,
      L = W8y.u8Q,
      w1 = W8y.c20,
      B = W8y.x3M;

  if (W8y[i](u, w1 * S + B)) {
    D = Z;
    M = N;
    y1 = W;
    h = P;
    E = d[W8y.u8Q];
    f[W8y.N2k] = box2d[W8y.j76][W8y.J60];
    L = W8y.D8Q;
  } else {
    D = N;
    M = Z;
    y1 = P;
    h = W;
    E = o[W8y.u8Q];
    f[W8y.N2k] = box2d[W8y.j76][W8y.I60];
    L = W8y.u8Q;
  }

  var N1 = box2d[W8y.b9M][W8y.p10];
  box2d[W8y.I6H](N1, D, y1, E, M, h);
  var f1 = D[W8y.o9k],
      c1 = D[W8y.N4k],
      l1 = E,
      P1 = W8y[H](E + W8y.D8Q, f1),
      s1 = c1[l1],
      b1 = c1[P1],
      m1 = box2d[W8y.x8T](b1, s1, box2d[W8y.b9M][W8y.P5Q]);
  m1[W8y.Y27]();
  var W1 = box2d[W8y.T67](m1, box2d[W8y.b9M][W8y.q1r]),
      J1 = box2d[W8y.O80](s1, b1, box2d[W8y.b9M][W8y.L5M]),
      C1 = box2d[W8y.x47](y1[W8y.b50], m1, box2d[W8y.b9M][W8y.C7T]),
      x1 = box2d[W8y.T67](C1, box2d[W8y.b9M][W8y.z76]),
      T1 = box2d[W8y.o10](y1, s1, box2d[W8y.b9M][W8y.Q06]),
      K1 = box2d[W8y.o10](y1, b1, box2d[W8y.b9M][W8y.b76]),
      V1 = box2d[W8y.o27](x1, T1),
      Q1 = -box2d[W8y.o27](C1, T1) + j,
      D1 = box2d[W8y.o27](C1, K1) + j,
      d1 = box2d[W8y.b9M][W8y.A0M],
      u1 = box2d[W8y.b9M][W8y.l7M],
      j1,
      G1 = box2d[W8y.F7M](C1, box2d[W8y.b9M][W8y.J67]);
  j1 = box2d[W8y.v17](d1, N1, G1, Q1, l1);
  if (W8y[k](j1, W8y.d8Q)) return;
  j1 = box2d[W8y.v17](u1, d1, C1, D1, P1);

  if (W8y[n](j1, W8y.d8Q)) {
    return;
  }

  f[W8y.V67][W8y.k97](W1);
  f[W8y.B9H][W8y.k97](J1);
  var I1 = W8y.u8Q;

  for (var e1 = W8y.u8Q; W8y[C](e1, box2d[W8y.j06]); ++e1) {
    var S1 = u1[e1],
        B1 = W8y[m](box2d[W8y.o27](x1, S1[W8y.N8T]), V1);

    if (W8y[l](B1, j)) {
      var a1 = f[W8y.H10][I1];
      box2d[W8y.a90](h, S1[W8y.N8T], a1[W8y.B9H]);
      a1[W8y.W6M][W8y.k97](S1[W8y.W6M]);

      if (L) {
        var F1 = a1[W8y.W6M][W8y.i3k];
        a1[W8y.W6M][W8y.i3k][W8y.K30] = F1[W8y.L40];
        a1[W8y.W6M][W8y.i3k][W8y.L40] = F1[W8y.K30];
        a1[W8y.W6M][W8y.i3k][W8y.G30] = F1[W8y.j30];
        a1[W8y.W6M][W8y.i3k][W8y.j30] = F1[W8y.G30];
      }

      ++I1;
    }
  }

  f[W8y.O47] = I1;
};

box2d[W8y.b9M][W8y.p10] = box2d[W8y.E5M][W8y.N1r](W8y.d8Q);
box2d[W8y.b9M][W8y.A0M] = box2d[W8y.E5M][W8y.N1r](W8y.d8Q);
box2d[W8y.b9M][W8y.l7M] = box2d[W8y.E5M][W8y.N1r](W8y.d8Q);
box2d[W8y.b9M][W8y.G3k] = box2d[W8y.D3r](W8y.D8Q);
box2d[W8y.b9M][W8y.M6M] = box2d[W8y.D3r](W8y.D8Q);
box2d[W8y.b9M][W8y.P5Q] = new box2d[W8y.p7T]();
box2d[W8y.b9M][W8y.q1r] = new box2d[W8y.p7T]();
box2d[W8y.b9M][W8y.L5M] = new box2d[W8y.p7T]();
box2d[W8y.b9M][W8y.z76] = new box2d[W8y.p7T]();
box2d[W8y.b9M][W8y.C7T] = new box2d[W8y.p7T]();
box2d[W8y.b9M][W8y.J67] = new box2d[W8y.p7T]();
box2d[W8y.b9M][W8y.Q06] = new box2d[W8y.p7T]();
box2d[W8y.b9M][W8y.b76] = new box2d[W8y.p7T]();
goog[W8y.U3T](W8y.u2H);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Contact');
goog[W8y.V20]('box2d.b2CollidePolygon');

box2d[W8y.I8H] = function () {
  goog[W8y.o66](this);
};

goog[W8y.u80](box2d[W8y.I8H], box2d[W8y.c7T]);

box2d[W8y.I8H][W8y.D70] = function (f) {
  return new box2d[W8y.I8H]();
};

box2d[W8y.I8H][W8y.t87] = function (f, N) {};

box2d.b2PolygonContact.prototype.Reset = function (f, N, P, Z) {
  goog[W8y.o66](this, W8y.o87, f, N, P, Z);
};

box2d.b2PolygonContact.prototype.Evaluate = function (f, N, P) {
  var Z = "l0z",
      W = "W0z",
      l = "Z0z",
      m = "U0z",
      C = this[W8y.a10][W8y.y00](),
      n = this[W8y.G10][W8y.y00]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](C, box2d[W8y.g16]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](n, box2d[W8y.g16]));
  }

  box2d[W8y.b9M](f, W8y[W](C, box2d[W8y.g16]) ? C : W8y.z6k, N, W8y[Z](n, box2d[W8y.g16]) ? n : W8y.z6k, P);
};

goog[W8y.U3T](W8y.z77);
goog[W8y.V20]('box2d.b2Collision');

box2d[W8y.P6Q] = function (f, N, P, Z, W) {
  var l = "g0z";
  f[W8y.O47] = W8y.u8Q;
  var m = box2d[W8y.o10](P, N[W8y.U0k], box2d[W8y.P6Q][W8y.P2T]),
      C = box2d[W8y.o10](W, Z[W8y.U0k], box2d[W8y.P6Q][W8y.Q2T]),
      n = box2d[W8y.Z9k](m, C),
      k = N[W8y.o4T] + Z[W8y.o4T];

  if (W8y[l](n, k * k)) {
    return;
  }

  f[W8y.N2k] = box2d[W8y.j76][W8y.j5k];
  f[W8y.B9H][W8y.k97](N[W8y.U0k]);
  f[W8y.V67][W8y.j6k]();
  f[W8y.O47] = W8y.D8Q;
  f[W8y.H10][W8y.u8Q][W8y.B9H][W8y.k97](Z[W8y.U0k]);
  f[W8y.H10][W8y.u8Q][W8y.W6M][W8y.J4k] = W8y.u8Q;
};

box2d[W8y.P6Q][W8y.P2T] = new box2d[W8y.p7T]();
box2d[W8y.P6Q][W8y.Q2T] = new box2d[W8y.p7T]();

box2d[W8y.C80] = function (f, N, P, Z, W) {
  var l = "B0z",
      m = "h0z",
      C = "D0z",
      n = "S0z",
      k = "o0z",
      H = "q0z",
      i = "i0z",
      Q = "T0z",
      e = "O0z",
      j = "V0z";
  f[W8y.O47] = W8y.u8Q;
  var o = box2d[W8y.o10](W, Z[W8y.U0k], box2d[W8y.C80][W8y.r57]),
      S = box2d[W8y.a90](P, o, box2d[W8y.C80][W8y.M6Q]),
      d = W8y.u8Q,
      u = -box2d[W8y.Z57],
      D = N[W8y.o4T] + Z[W8y.o4T],
      M = N[W8y.o9k],
      y1 = N[W8y.N4k],
      h = N[W8y.w87];

  for (var E = W8y.u8Q; W8y[j](E, M); ++E) {
    var L = box2d[W8y.o27](h[E], box2d[W8y.x8T](S, y1[E], box2d[W8y.p7T][W8y.t7M]));

    if (W8y[e](L, D)) {
      return;
    }

    if (W8y[Q](L, u)) {
      u = L;
      d = E;
    }
  }

  var w1 = d,
      B = W8y[i](w1 + W8y.D8Q, M),
      N1 = y1[w1],
      f1 = y1[B];

  if (W8y[H](u, box2d[W8y.F5k])) {
    f[W8y.O47] = W8y.D8Q;
    f[W8y.N2k] = box2d[W8y.j76][W8y.I60];
    f[W8y.V67][W8y.k97](h[d]);
    box2d[W8y.O80](N1, f1, f[W8y.B9H]);
    f[W8y.H10][W8y.u8Q][W8y.B9H][W8y.k97](Z[W8y.U0k]);
    f[W8y.H10][W8y.u8Q][W8y.W6M][W8y.J4k] = W8y.u8Q;
    return;
  }

  var c1 = box2d[W8y.o27](box2d[W8y.x8T](S, N1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.x8T](f1, N1, box2d[W8y.p7T][W8y.l9M])),
      l1 = box2d[W8y.o27](box2d[W8y.x8T](S, f1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.x8T](N1, f1, box2d[W8y.p7T][W8y.l9M]));

  if (W8y[k](c1, W8y.u8Q)) {
    if (W8y[n](box2d[W8y.Z9k](S, N1), D * D)) {
      return;
    }

    f[W8y.O47] = W8y.D8Q;
    f[W8y.N2k] = box2d[W8y.j76][W8y.I60];
    box2d[W8y.x8T](S, N1, f[W8y.V67])[W8y.s1k]();
    f[W8y.B9H][W8y.k97](N1);
    f[W8y.H10][W8y.u8Q][W8y.B9H][W8y.k97](Z[W8y.U0k]);
    f[W8y.H10][W8y.u8Q][W8y.W6M][W8y.J4k] = W8y.u8Q;
  } else if (W8y[C](l1, W8y.u8Q)) {
    if (W8y[m](box2d[W8y.Z9k](S, f1), D * D)) {
      return;
    }

    f[W8y.O47] = W8y.D8Q;
    f[W8y.N2k] = box2d[W8y.j76][W8y.I60];
    box2d[W8y.x8T](S, f1, f[W8y.V67])[W8y.s1k]();
    f[W8y.B9H][W8y.k97](f1);
    f[W8y.H10][W8y.u8Q][W8y.B9H][W8y.k97](Z[W8y.U0k]);
    f[W8y.H10][W8y.u8Q][W8y.W6M][W8y.J4k] = W8y.u8Q;
  } else {
    var P1 = box2d[W8y.O80](N1, f1, box2d[W8y.C80][W8y.M70]);
    u = box2d[W8y.o27](box2d[W8y.x8T](S, P1, box2d[W8y.p7T][W8y.l9M]), h[w1]);

    if (W8y[l](u, D)) {
      return;
    }

    f[W8y.O47] = W8y.D8Q;
    f[W8y.N2k] = box2d[W8y.j76][W8y.I60];
    f[W8y.V67][W8y.k97](h[w1])[W8y.s1k]();
    f[W8y.B9H][W8y.k97](P1);
    f[W8y.H10][W8y.u8Q][W8y.B9H][W8y.k97](Z[W8y.U0k]);
    f[W8y.H10][W8y.u8Q][W8y.W6M][W8y.J4k] = W8y.u8Q;
  }
};

box2d[W8y.C80][W8y.r57] = new box2d[W8y.p7T]();
box2d[W8y.C80][W8y.M6Q] = new box2d[W8y.p7T]();
box2d[W8y.C80][W8y.M70] = new box2d[W8y.p7T]();
goog[W8y.U3T](W8y.x3T);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Contact');
goog[W8y.V20]('box2d.b2CollideCircle');

box2d[W8y.x6Q] = function () {
  goog[W8y.o66](this);
};

goog[W8y.u80](box2d[W8y.x6Q], box2d[W8y.c7T]);

box2d[W8y.x6Q][W8y.D70] = function (f) {
  return new box2d[W8y.x6Q]();
};

box2d[W8y.x6Q][W8y.t87] = function (f, N) {};

box2d.b2CircleContact.prototype.Reset = function (f, N, P, Z) {
  goog[W8y.o66](this, W8y.o87, f, N, P, Z);
};

box2d.b2CircleContact.prototype.Evaluate = function (f, N, P) {
  var Z = "P7z",
      W = "f7z",
      l = "t0z",
      m = "z0z",
      C = this[W8y.a10][W8y.y00](),
      n = this[W8y.G10][W8y.y00]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](C, box2d[W8y.A2T]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](n, box2d[W8y.A2T]));
  }

  box2d[W8y.P6Q](f, W8y[W](C, box2d[W8y.A2T]) ? C : W8y.z6k, N, W8y[Z](n, box2d[W8y.A2T]) ? n : W8y.z6k, P);
};

goog[W8y.U3T](W8y.b4k);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Contact');
goog[W8y.V20]('box2d.b2CollideEdge');

box2d[W8y.d56] = function () {
  goog[W8y.o66](this);
};

goog[W8y.u80](box2d[W8y.d56], box2d[W8y.c7T]);

box2d[W8y.d56][W8y.D70] = function (f) {
  return new box2d[W8y.d56]();
};

box2d[W8y.d56][W8y.t87] = function (f, N) {};

box2d.b2ChainAndCircleContact.prototype.Reset = function (f, N, P, Z) {
  var W = "Y7z",
      l = "c7z";
  goog[W8y.o66](this, W8y.o87, f, N, P, Z);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](f[W8y.E1k](), box2d[W8y.i80][W8y.x87]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](P[W8y.E1k](), box2d[W8y.i80][W8y.q36]));
  }
};

box2d.b2ChainAndCircleContact.prototype.Evaluate = function (f, N, P) {
  var Z = "k7z",
      W = "C7z",
      l = "x7z",
      m = "m7z",
      C = this[W8y.a10][W8y.y00](),
      n = this[W8y.G10][W8y.y00]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](C, box2d[W8y.x90]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](n, box2d[W8y.A2T]));
  }

  var k = W8y[W](C, box2d[W8y.x90]) ? C : W8y.z6k,
      H = box2d.b2ChainAndCircleContact.prototype.Evaluate.s_edge;
  k[W8y.A07](H, this[W8y.G0k]);
  box2d[W8y.l6H](f, H, N, W8y[Z](n, box2d[W8y.A2T]) ? n : W8y.z6k, P);
};

box2d.b2ChainAndCircleContact.prototype.Evaluate.s_edge = new box2d[W8y.p7H]();
goog[W8y.U3T](W8y.N4H);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Contact');
goog[W8y.V20]('box2d.b2CollideEdge');

box2d[W8y.b10] = function () {
  goog[W8y.o66](this);
};

goog[W8y.u80](box2d[W8y.b10], box2d[W8y.c7T]);

box2d[W8y.b10][W8y.D70] = function (f) {
  return new box2d[W8y.b10]();
};

box2d[W8y.b10][W8y.t87] = function (f, N) {};

box2d.b2EdgeAndCircleContact.prototype.Reset = function (f, N, P, Z) {
  var W = "j7z",
      l = "Q7z";
  goog[W8y.o66](this, W8y.o87, f, N, P, Z);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](f[W8y.E1k](), box2d[W8y.i80][W8y.E2H]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](P[W8y.E1k](), box2d[W8y.i80][W8y.q36]));
  }
};

box2d.b2EdgeAndCircleContact.prototype.Evaluate = function (f, N, P) {
  var Z = "M7z",
      W = "E7z",
      l = "R7z",
      m = "I7z",
      C = this[W8y.a10][W8y.y00](),
      n = this[W8y.G10][W8y.y00]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](C, box2d[W8y.p7H]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](n, box2d[W8y.A2T]));
  }

  box2d[W8y.l6H](f, W8y[W](C, box2d[W8y.p7H]) ? C : W8y.z6k, N, W8y[Z](n, box2d[W8y.A2T]) ? n : W8y.z6k, P);
};

goog[W8y.U3T](W8y.N7M);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2Collision');
goog[W8y.V20]('box2d.b2CircleContact');
goog[W8y.V20]('box2d.b2PolygonAndCircleContact');
goog[W8y.V20]('box2d.b2PolygonContact');
goog[W8y.V20]('box2d.b2EdgeAndCircleContact');
goog[W8y.V20]('box2d.b2EdgeAndPolygonContact');
goog[W8y.V20]('box2d.b2ChainAndCircleContact');
goog[W8y.V20]('box2d.b2ChainAndPolygonContact');

box2d[W8y.d1H] = function () {
  this[W8y.q5M] = new box2d[W8y.p7T]();
  this[W8y.A5M] = new box2d[W8y.p7T]();
};

box2d.b2VelocityConstraintPoint.prototype.rA = W8y.z6k;
box2d.b2VelocityConstraintPoint.prototype.rB = W8y.z6k;
box2d.b2VelocityConstraintPoint.prototype.normalImpulse = W8y.u8Q;
box2d.b2VelocityConstraintPoint.prototype.tangentImpulse = W8y.u8Q;
box2d.b2VelocityConstraintPoint.prototype.normalMass = W8y.u8Q;
box2d.b2VelocityConstraintPoint.prototype.tangentMass = W8y.u8Q;
box2d.b2VelocityConstraintPoint.prototype.velocityBias = W8y.u8Q;

box2d[W8y.d1H][W8y.N1r] = function (N) {
  return box2d[W8y.c2k](N, function (f) {
    return new box2d[W8y.d1H]();
  });
};

box2d[W8y.a57] = function () {
  this[W8y.H10] = box2d[W8y.d1H][W8y.N1r](box2d[W8y.j06]);
  this[W8y.M4T] = new box2d[W8y.p7T]();
  this[W8y.N40] = new box2d[W8y.p7T]();
  this[W8y.W1r] = new box2d[W8y.T0H]();
  this[W8y.f40] = new box2d[W8y.T0H]();
};

box2d.b2ContactVelocityConstraint.prototype.points = W8y.z6k;
box2d.b2ContactVelocityConstraint.prototype.normal = W8y.z6k;
box2d.b2ContactVelocityConstraint.prototype.tangent = W8y.z6k;
box2d.b2ContactVelocityConstraint.prototype.normalMass = W8y.z6k;
box2d.b2ContactVelocityConstraint.prototype.K = W8y.z6k;
box2d.b2ContactVelocityConstraint.prototype.indexA = W8y.u8Q;
box2d.b2ContactVelocityConstraint.prototype.indexB = W8y.u8Q;
box2d.b2ContactVelocityConstraint.prototype.invMassA = W8y.u8Q;
box2d.b2ContactVelocityConstraint.prototype.invMassB = W8y.u8Q;
box2d.b2ContactVelocityConstraint.prototype.invIA = W8y.u8Q;
box2d.b2ContactVelocityConstraint.prototype.invIB = W8y.u8Q;
box2d.b2ContactVelocityConstraint.prototype.friction = W8y.u8Q;
box2d.b2ContactVelocityConstraint.prototype.restitution = W8y.u8Q;
box2d.b2ContactVelocityConstraint.prototype.tangentSpeed = W8y.u8Q;
box2d.b2ContactVelocityConstraint.prototype.pointCount = W8y.u8Q;
box2d.b2ContactVelocityConstraint.prototype.contactIndex = W8y.u8Q;

box2d[W8y.a57][W8y.N1r] = function (N) {
  return box2d[W8y.c2k](N, function (f) {
    return new box2d[W8y.a57]();
  });
};

box2d[W8y.Q37] = function () {
  this[W8y.d8M] = box2d[W8y.p7T][W8y.N1r](box2d[W8y.j06]);
  this[W8y.V67] = new box2d[W8y.p7T]();
  this[W8y.B9H] = new box2d[W8y.p7T]();
  this[W8y.H46] = new box2d[W8y.p7T]();
  this[W8y.p46] = new box2d[W8y.p7T]();
};

box2d.b2ContactPositionConstraint.prototype.localPoints = W8y.z6k;
box2d.b2ContactPositionConstraint.prototype.localNormal = W8y.z6k;
box2d.b2ContactPositionConstraint.prototype.localPoint = W8y.z6k;
box2d.b2ContactPositionConstraint.prototype.indexA = W8y.u8Q;
box2d.b2ContactPositionConstraint.prototype.indexB = W8y.u8Q;
box2d.b2ContactPositionConstraint.prototype.invMassA = W8y.u8Q;
box2d.b2ContactPositionConstraint.prototype.invMassB = W8y.u8Q;
box2d.b2ContactPositionConstraint.prototype.localCenterA = W8y.z6k;
box2d.b2ContactPositionConstraint.prototype.localCenterB = W8y.z6k;
box2d.b2ContactPositionConstraint.prototype.invIA = W8y.u8Q;
box2d.b2ContactPositionConstraint.prototype.invIB = W8y.u8Q;
box2d.b2ContactPositionConstraint.prototype.type = box2d[W8y.j76][W8y.P47];
box2d.b2ContactPositionConstraint.prototype.radiusA = W8y.u8Q;
box2d.b2ContactPositionConstraint.prototype.radiusB = W8y.u8Q;
box2d.b2ContactPositionConstraint.prototype.pointCount = W8y.u8Q;

box2d[W8y.Q37][W8y.N1r] = function (N) {
  return box2d[W8y.c2k](N, function (f) {
    return new box2d[W8y.Q37]();
  });
};

box2d[W8y.n4M] = function () {
  this[W8y.D5H] = new box2d[W8y.A6H]();
};

box2d.b2ContactSolverDef.prototype.step = W8y.z6k;
box2d.b2ContactSolverDef.prototype.contacts = W8y.z6k;
box2d.b2ContactSolverDef.prototype.count = W8y.u8Q;
box2d.b2ContactSolverDef.prototype.positions = W8y.z6k;
box2d.b2ContactSolverDef.prototype.velocities = W8y.z6k;
box2d.b2ContactSolverDef.prototype.allocator = W8y.z6k;

box2d[W8y.b1M] = function () {
  this[W8y.L07] = new box2d[W8y.A6H]();
  this[W8y.a3H] = box2d[W8y.Q37][W8y.N1r](W8y.g0r);
  this[W8y.s8M] = box2d[W8y.a57][W8y.N1r](W8y.g0r);
};

box2d.b2ContactSolver.prototype.m_step = W8y.z6k;
box2d.b2ContactSolver.prototype.m_positions = W8y.z6k;
box2d.b2ContactSolver.prototype.m_velocities = W8y.z6k;
box2d.b2ContactSolver.prototype.m_allocator = W8y.z6k;
box2d.b2ContactSolver.prototype.m_positionConstraints = W8y.z6k;
box2d.b2ContactSolver.prototype.m_velocityConstraints = W8y.z6k;
box2d.b2ContactSolver.prototype.m_contacts = W8y.z6k;
box2d.b2ContactSolver.prototype.m_count = W8y.u8Q;

box2d.b2ContactSolver.prototype.Initialize = function (f) {
  var N = "K9z",
      P = "n9z",
      Z = "J9z",
      W = "b9z",
      l = "s9z",
      m = "X9z",
      C = "N9z",
      n = "w9z",
      k = "A7z",
      H = "G7z",
      i = "v7z";
  this[W8y.L07][W8y.k97](f[W8y.D5H]);
  this[W8y.y5k] = f[W8y.X2r];
  this[W8y.o9k] = f[W8y.S5k];

  if (W8y[i](this[W8y.a3H].length, this[W8y.o9k])) {
    var Q = box2d[W8y.v30](W8y[H](this[W8y.a3H].length, 2), this[W8y.o9k]);

    if (box2d[W8y.F2k]) {
      window[W8y.Q7M][W8y.Y2k]("box2d.b2ContactSolver.m_positionConstraints: " + Q);
    }

    while (W8y[k](this[W8y.a3H].length, Q)) {
      this[W8y.a3H][this[W8y.a3H].length] = new box2d[W8y.Q37]();
    }
  }

  if (W8y[n](this[W8y.s8M].length, this[W8y.o9k])) {
    var Q = box2d[W8y.v30](W8y[C](this[W8y.s8M].length, 2), this[W8y.o9k]);

    if (box2d[W8y.F2k]) {
      window[W8y.Q7M][W8y.Y2k]("box2d.b2ContactSolver.m_velocityConstraints: " + Q);
    }

    while (W8y[m](this[W8y.s8M].length, Q)) {
      this[W8y.s8M][this[W8y.s8M].length] = new box2d[W8y.a57]();
    }
  }

  this[W8y.J0k] = f[W8y.P1T];
  this[W8y.C4H] = f[W8y.S37];
  this[W8y.e1H] = f[W8y.Q97];
  var e, j, o, S, d, u, D, M, y1, h, E, L, w1, B, N1, f1, c1, l1, P1;

  for (e = 0, j = this[W8y.o9k]; W8y[l](e, j); ++e) {
    d = this[W8y.e1H][e];
    u = d[W8y.a10];
    D = d[W8y.G10];
    M = u[W8y.y00]();
    y1 = D[W8y.y00]();
    h = M[W8y.o4T];
    E = y1[W8y.o4T];
    L = u[W8y.b86]();
    w1 = D[W8y.b86]();
    B = d[W8y.S6H]();
    N1 = B[W8y.O47];

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[W](N1, 0));
    }

    f1 = this[W8y.s8M][e];
    f1[W8y.f66] = d[W8y.D4r];
    f1[W8y.P9M] = d[W8y.D2M];
    f1[W8y.o2k] = d[W8y.y0H];
    f1[W8y.K30] = L[W8y.x5M];
    f1[W8y.L40] = w1[W8y.x5M];
    f1[W8y.k26] = L[W8y.k86];
    f1[W8y.J06] = w1[W8y.k86];
    f1[W8y.m6T] = L[W8y.M7H];
    f1[W8y.w6T] = w1[W8y.M7H];
    f1[W8y.Y57] = e;
    f1[W8y.O47] = N1;
    f1[W8y.f40][W8y.j6k]();
    f1[W8y.W1r][W8y.j6k]();
    c1 = this[W8y.a3H][e];
    c1[W8y.K30] = L[W8y.x5M];
    c1[W8y.L40] = w1[W8y.x5M];
    c1[W8y.k26] = L[W8y.k86];
    c1[W8y.J06] = w1[W8y.k86];
    c1[W8y.H46][W8y.k97](L[W8y.i6k][W8y.O8Q]);
    c1[W8y.p46][W8y.k97](w1[W8y.i6k][W8y.O8Q]);
    c1[W8y.m6T] = L[W8y.M7H];
    c1[W8y.w6T] = w1[W8y.M7H];
    c1[W8y.V67][W8y.k97](B[W8y.V67]);
    c1[W8y.B9H][W8y.k97](B[W8y.B9H]);
    c1[W8y.O47] = N1;
    c1[W8y.G6T] = h;
    c1[W8y.J5T] = E;
    c1[W8y.N2k] = B[W8y.N2k];

    for (o = 0, S = N1; W8y[Z](o, S); ++o) {
      l1 = B[W8y.H10][o];
      P1 = f1[W8y.H10][o];

      if (this[W8y.L07][W8y.W6T]) {
        P1[W8y.y40] = W8y[P](this[W8y.L07][W8y.k30], l1[W8y.y40]);
        P1[W8y.m2H] = W8y[N](this[W8y.L07][W8y.k30], l1[W8y.m2H]);
      } else {
        P1[W8y.y40] = 0;
        P1[W8y.m2H] = 0;
      }

      P1[W8y.q5M][W8y.j6k]();
      P1[W8y.A5M][W8y.j6k]();
      P1[W8y.W1r] = 0;
      P1[W8y.d96] = 0;
      P1[W8y.J3k] = 0;
      c1[W8y.d8M][o][W8y.k97](l1[W8y.B9H]);
    }
  }

  return this;
};

box2d.b2ContactSolver.prototype.InitializeVelocityConstraints = function () {
  var f = "d8z",
      N = "o8z",
      P = "j8z",
      Z = "H8z",
      W = "O8z",
      l = "x8z",
      m = "b8z",
      C = "s8z",
      n = "X8z",
      k = "N8z",
      H = "y8z",
      i = "z9z",
      Q = "B9z",
      e = "h9z",
      j = "E9z",
      o = "a9z",
      S = "e9z",
      d = "r9z",
      u = "H9z",
      D,
      M,
      y1,
      h,
      E,
      L,
      w1,
      B,
      N1,
      f1,
      c1,
      l1,
      P1,
      s1,
      b1,
      m1,
      W1,
      J1,
      C1,
      x1,
      T1,
      K1,
      V1,
      Q1,
      D1,
      d1 = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfA,
      u1 = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfB,
      j1 = box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_worldManifold,
      G1,
      I1,
      e1,
      S1,
      B1,
      a1,
      F1,
      n4,
      h1,
      t1,
      R4,
      r4,
      w4,
      d4,
      H4,
      M4,
      k4,
      D4,
      Y4,
      W4 = W8y.G2r;

  for (D = W8y.u8Q, M = this[W8y.o9k]; W8y[u](D, M); ++D) {
    E = this[W8y.s8M][D];
    L = this[W8y.a3H][D];
    w1 = L[W8y.G6T];
    B = L[W8y.J5T];
    N1 = this[W8y.e1H][E[W8y.Y57]][W8y.S6H]();
    f1 = E[W8y.K30];
    c1 = E[W8y.L40];
    l1 = E[W8y.k26];
    P1 = E[W8y.J06];
    s1 = E[W8y.m6T];
    b1 = E[W8y.w6T];
    m1 = L[W8y.H46];
    W1 = L[W8y.p46];
    J1 = this[W8y.J0k][f1][W8y.a30];
    C1 = this[W8y.J0k][f1][W8y.U30];
    x1 = this[W8y.C4H][f1][W8y.N8T];
    T1 = this[W8y.C4H][f1][W8y.M9T];
    K1 = this[W8y.J0k][c1][W8y.a30];
    V1 = this[W8y.J0k][c1][W8y.U30];
    Q1 = this[W8y.C4H][c1][W8y.N8T];
    D1 = this[W8y.C4H][c1][W8y.M9T];

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[d](N1[W8y.O47], W8y.u8Q));
    }

    d1[W8y.b50][W8y.h70](C1);
    u1[W8y.b50][W8y.h70](V1);
    box2d[W8y.x8T](J1, box2d[W8y.x47](d1[W8y.b50], m1, box2d[W8y.p7T][W8y.t7M]), d1[W8y.t60]);
    box2d[W8y.x8T](K1, box2d[W8y.x47](u1[W8y.b50], W1, box2d[W8y.p7T][W8y.t7M]), u1[W8y.t60]);
    j1[W8y.Y6T](N1, d1, w1, u1, B);
    E[W8y.M4T][W8y.k97](j1[W8y.M4T]);
    box2d[W8y.T67](E[W8y.M4T], E[W8y.N40]);
    G1 = E[W8y.O47];

    for (y1 = W8y.u8Q, h = G1; W8y[S](y1, h); ++y1) {
      I1 = E[W8y.H10][y1];
      box2d[W8y.x8T](j1[W8y.H10][y1], J1, I1[W8y.q5M]);
      box2d[W8y.x8T](j1[W8y.H10][y1], K1, I1[W8y.A5M]);
      e1 = box2d[W8y.t10](I1[W8y.q5M], E[W8y.M4T]);
      S1 = box2d[W8y.t10](I1[W8y.A5M], E[W8y.M4T]);
      B1 = l1 + P1 + W8y[o](s1, e1, e1) + W8y[j](b1, S1, S1);
      I1[W8y.W1r] = W8y[e](B1, W8y.u8Q) ? W8y[Q](W8y.D8Q, B1) : W8y.u8Q;
      a1 = E[W8y.N40];
      F1 = box2d[W8y.t10](I1[W8y.q5M], a1);
      n4 = box2d[W8y.t10](I1[W8y.A5M], a1);
      h1 = l1 + P1 + W8y[i](s1, F1, F1) + W8y[H](b1, n4, n4);
      I1[W8y.d96] = W8y[k](h1, W8y.u8Q) ? W8y[n](W8y.D8Q, h1) : W8y.u8Q;
      I1[W8y.J3k] = W8y.u8Q;
      t1 = box2d[W8y.o27](E[W8y.M4T], box2d[W8y.x8T](box2d[W8y.S7T](Q1, D1, I1[W8y.A5M], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](x1, T1, I1[W8y.q5M], box2d[W8y.p7T][W8y.l9M]), box2d[W8y.p7T][W8y.t7M]));

      if (t1 < -box2d[W8y.V5T]) {
        I1[W8y.J3k] += -E[W8y.P9M] * t1;
      }
    }

    if (W8y[C](E[W8y.O47], W8y.d8Q)) {
      R4 = E[W8y.H10][W8y.u8Q];
      r4 = E[W8y.H10][W8y.D8Q];
      w4 = box2d[W8y.t10](R4[W8y.q5M], E[W8y.M4T]);
      d4 = box2d[W8y.t10](R4[W8y.A5M], E[W8y.M4T]);
      H4 = box2d[W8y.t10](r4[W8y.q5M], E[W8y.M4T]);
      M4 = box2d[W8y.t10](r4[W8y.A5M], E[W8y.M4T]);
      k4 = l1 + P1 + W8y[m](s1, w4, w4) + W8y[l](b1, d4, d4);
      D4 = l1 + P1 + W8y[W](s1, H4, H4) + W8y[Z](b1, M4, M4);
      Y4 = l1 + P1 + W8y[P](s1, w4, H4) + W8y[N](b1, d4, M4);

      if (W8y[f](k4 * k4, W4 * (k4 * D4 - Y4 * Y4))) {
        E[W8y.f40][W8y.Q57][W8y.y47](k4, Y4);
        E[W8y.f40][W8y.D57][W8y.y47](Y4, D4);
        E[W8y.f40][W8y.X1M](E[W8y.W1r]);
      } else {
        E[W8y.O47] = W8y.D8Q;
      }
    }
  }
};

box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfA = new box2d[W8y.P70]();
box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_xfB = new box2d[W8y.P70]();
box2d.b2ContactSolver.prototype.InitializeVelocityConstraints.s_worldManifold = new box2d[W8y.P10]();

box2d.b2ContactSolver.prototype.WarmStart = function () {
  var f = "F8z",
      N = "p8z",
      P = "L8z",
      Z = "u8z",
      W,
      l,
      m,
      C,
      n,
      k,
      H,
      i,
      Q,
      e,
      j,
      o,
      S,
      d,
      u,
      D,
      M,
      y1,
      h,
      E = box2d.b2ContactSolver.prototype.WarmStart.s_P;

  for (W = W8y.u8Q, l = this[W8y.o9k]; W8y[Z](W, l); ++W) {
    n = this[W8y.s8M][W];
    k = n[W8y.K30];
    H = n[W8y.L40];
    i = n[W8y.k26];
    Q = n[W8y.m6T];
    e = n[W8y.J06];
    j = n[W8y.w6T];
    o = n[W8y.O47];
    S = this[W8y.C4H][k][W8y.N8T];
    d = this[W8y.C4H][k][W8y.M9T];
    u = this[W8y.C4H][H][W8y.N8T];
    D = this[W8y.C4H][H][W8y.M9T];
    M = n[W8y.M4T];
    y1 = n[W8y.N40];

    for (m = W8y.u8Q, C = o; W8y[P](m, C); ++m) {
      h = n[W8y.H10][m];
      box2d[W8y.m3T](box2d[W8y.X26](h[W8y.y40], M, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.X26](h[W8y.m2H], y1, box2d[W8y.p7T][W8y.l9M]), E);
      d -= W8y[N](Q, box2d[W8y.t10](h[W8y.q5M], E));
      S[W8y.I5M](i, E);
      D += W8y[f](j, box2d[W8y.t10](h[W8y.A5M], E));
      u[W8y.a9k](e, E);
    }

    this[W8y.C4H][k][W8y.M9T] = d;
    this[W8y.C4H][H][W8y.M9T] = D;
  }
};

box2d.b2ContactSolver.prototype.WarmStart.s_P = new box2d[W8y.p7T]();

box2d.b2ContactSolver.prototype.SolveVelocityConstraints = function () {
  var f = "w1S",
      N = "A5z",
      P = "G5z",
      Z = "v5z",
      W = "M5z",
      l = "E5z",
      m = "R5z",
      C = "I5z",
      n = "j5z",
      k = "Q5z",
      H = "k5z",
      i = "C5z",
      Q = "x5z",
      e = "m5z",
      j = "Y5z",
      o = "c5z",
      S = "P5z",
      d = "f5z",
      u = "t6z",
      D = "z6z",
      M = "B6z",
      y1 = "h6z",
      h = "D6z",
      E = "S6z",
      L = "o6z",
      w1 = "q6z",
      B = "i6z",
      N1 = "T6z",
      f1 = "O6z",
      c1 = "V6z",
      l1 = "g6z",
      P1 = "l6z",
      s1 = "W6z",
      b1 = "Z6z",
      m1 = "U6z",
      W1 = "y6z",
      J1,
      C1,
      x1,
      T1,
      K1,
      V1,
      Q1,
      D1,
      d1,
      u1,
      j1,
      G1,
      I1,
      e1,
      S1,
      B1,
      a1,
      F1,
      n4,
      h1,
      t1 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv,
      R4 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv1,
      r4 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv2,
      w4,
      d4,
      H4,
      M4,
      k4,
      D4 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P,
      Y4,
      W4,
      A1 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_a,
      L4 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_b,
      B4,
      G4,
      P4 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_x,
      o4 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_d,
      X4 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1,
      m4 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P2,
      O4 = box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1P2;

  for (J1 = W8y.u8Q, C1 = this[W8y.o9k]; W8y[W1](J1, C1); ++J1) {
    K1 = this[W8y.s8M][J1];
    V1 = K1[W8y.K30];
    Q1 = K1[W8y.L40];
    D1 = K1[W8y.k26];
    d1 = K1[W8y.m6T];
    u1 = K1[W8y.J06];
    j1 = K1[W8y.w6T];
    G1 = K1[W8y.O47];
    I1 = this[W8y.C4H][V1][W8y.N8T];
    e1 = this[W8y.C4H][V1][W8y.M9T];
    S1 = this[W8y.C4H][Q1][W8y.N8T];
    B1 = this[W8y.C4H][Q1][W8y.M9T];
    a1 = K1[W8y.M4T];
    F1 = K1[W8y.N40];
    n4 = K1[W8y.f66];

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[m1](G1, W8y.D8Q) || W8y[b1](G1, W8y.d8Q));
    }

    for (x1 = W8y.u8Q, T1 = G1; W8y[s1](x1, T1); ++x1) {
      h1 = K1[W8y.H10][x1];
      box2d[W8y.x8T](box2d[W8y.S7T](S1, B1, h1[W8y.A5M], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](I1, e1, h1[W8y.q5M], box2d[W8y.p7T][W8y.l9M]), t1);
      w4 = W8y[P1](box2d[W8y.o27](t1, F1), K1[W8y.o2k]);
      H4 = h1[W8y.d96] * -w4;
      M4 = W8y[l1](n4, h1[W8y.y40]);
      k4 = box2d[W8y.N06](h1[W8y.m2H] + H4, -M4, M4);
      H4 = W8y[c1](k4, h1[W8y.m2H]);
      h1[W8y.m2H] = k4;
      box2d[W8y.X26](H4, F1, D4);
      I1[W8y.I5M](D1, D4);
      e1 -= W8y[f1](d1, box2d[W8y.t10](h1[W8y.q5M], D4));
      S1[W8y.a9k](u1, D4);
      B1 += W8y[N1](j1, box2d[W8y.t10](h1[W8y.A5M], D4));
    }

    if (W8y[B](K1[W8y.O47], W8y.D8Q)) {
      h1 = K1[W8y.H10][W8y.u8Q];
      box2d[W8y.x8T](box2d[W8y.S7T](S1, B1, h1[W8y.A5M], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](I1, e1, h1[W8y.q5M], box2d[W8y.p7T][W8y.l9M]), t1);
      d4 = box2d[W8y.o27](t1, a1);
      H4 = -h1[W8y.W1r] * W8y[w1](d4, h1[W8y.J3k]);
      k4 = box2d[W8y.v30](h1[W8y.y40] + H4, W8y.u8Q);
      H4 = W8y[L](k4, h1[W8y.y40]);
      h1[W8y.y40] = k4;
      box2d[W8y.X26](H4, a1, D4);
      I1[W8y.I5M](D1, D4);
      e1 -= W8y[E](d1, box2d[W8y.t10](h1[W8y.q5M], D4));
      S1[W8y.a9k](u1, D4);
      B1 += W8y[h](j1, box2d[W8y.t10](h1[W8y.A5M], D4));
    } else {
      Y4 = K1[W8y.H10][W8y.u8Q];
      W4 = K1[W8y.H10][W8y.D8Q];
      A1[W8y.y47](Y4[W8y.y40], W4[W8y.y40]);

      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y[y1](A1[W8y.T9T], W8y.u8Q) && W8y[M](A1[W8y.Z9T], W8y.u8Q));
      }

      box2d[W8y.x8T](box2d[W8y.S7T](S1, B1, Y4[W8y.A5M], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](I1, e1, Y4[W8y.q5M], box2d[W8y.p7T][W8y.l9M]), R4);
      box2d[W8y.x8T](box2d[W8y.S7T](S1, B1, W4[W8y.A5M], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](I1, e1, W4[W8y.q5M], box2d[W8y.p7T][W8y.l9M]), r4);
      B4 = box2d[W8y.o27](R4, a1);
      G4 = box2d[W8y.o27](r4, a1);
      L4[W8y.T9T] = W8y[D](B4, Y4[W8y.J3k]);
      L4[W8y.Z9T] = W8y[u](G4, W4[W8y.J3k]);
      L4[W8y.d6M](box2d[W8y.n1H](K1[W8y.f40], A1, box2d[W8y.p7T][W8y.t7M]));

      for (;;) {
        box2d[W8y.n1H](K1[W8y.W1r], L4, P4)[W8y.P8k]();

        if (W8y[d](P4[W8y.T9T], W8y.u8Q) && W8y[S](P4[W8y.Z9T], W8y.u8Q)) {
          box2d[W8y.x8T](P4, A1, o4);
          box2d[W8y.X26](o4[W8y.T9T], a1, X4);
          box2d[W8y.X26](o4[W8y.Z9T], a1, m4);
          box2d[W8y.m3T](X4, m4, O4);
          I1[W8y.I5M](D1, O4);
          e1 -= W8y[o](d1, box2d[W8y.t10](Y4[W8y.q5M], X4) + box2d[W8y.t10](W4[W8y.q5M], m4));
          S1[W8y.a9k](u1, O4);
          B1 += W8y[j](j1, box2d[W8y.t10](Y4[W8y.A5M], X4) + box2d[W8y.t10](W4[W8y.A5M], m4));
          Y4[W8y.y40] = P4[W8y.T9T];
          W4[W8y.y40] = P4[W8y.Z9T];
          break;
        }

        P4[W8y.T9T] = -Y4[W8y.W1r] * L4[W8y.T9T];
        P4[W8y.Z9T] = W8y.u8Q;
        B4 = W8y.u8Q;
        G4 = W8y[e](K1[W8y.f40][W8y.Q57][W8y.Z9T], P4[W8y.T9T]) + L4[W8y.Z9T];

        if (W8y[Q](P4[W8y.T9T], W8y.u8Q) && W8y[i](G4, W8y.u8Q)) {
          box2d[W8y.x8T](P4, A1, o4);
          box2d[W8y.X26](o4[W8y.T9T], a1, X4);
          box2d[W8y.X26](o4[W8y.Z9T], a1, m4);
          box2d[W8y.m3T](X4, m4, O4);
          I1[W8y.I5M](D1, O4);
          e1 -= W8y[H](d1, box2d[W8y.t10](Y4[W8y.q5M], X4) + box2d[W8y.t10](W4[W8y.q5M], m4));
          S1[W8y.a9k](u1, O4);
          B1 += W8y[k](j1, box2d[W8y.t10](Y4[W8y.A5M], X4) + box2d[W8y.t10](W4[W8y.A5M], m4));
          Y4[W8y.y40] = P4[W8y.T9T];
          W4[W8y.y40] = P4[W8y.Z9T];
          break;
        }

        P4[W8y.T9T] = W8y.u8Q;
        P4[W8y.Z9T] = -W4[W8y.W1r] * L4[W8y.Z9T];
        B4 = W8y[n](K1[W8y.f40][W8y.D57][W8y.T9T], P4[W8y.Z9T]) + L4[W8y.T9T];
        G4 = W8y.u8Q;

        if (W8y[C](P4[W8y.Z9T], W8y.u8Q) && W8y[m](B4, W8y.u8Q)) {
          box2d[W8y.x8T](P4, A1, o4);
          box2d[W8y.X26](o4[W8y.T9T], a1, X4);
          box2d[W8y.X26](o4[W8y.Z9T], a1, m4);
          box2d[W8y.m3T](X4, m4, O4);
          I1[W8y.I5M](D1, O4);
          e1 -= W8y[l](d1, box2d[W8y.t10](Y4[W8y.q5M], X4) + box2d[W8y.t10](W4[W8y.q5M], m4));
          S1[W8y.a9k](u1, O4);
          B1 += W8y[W](j1, box2d[W8y.t10](Y4[W8y.A5M], X4) + box2d[W8y.t10](W4[W8y.A5M], m4));
          Y4[W8y.y40] = P4[W8y.T9T];
          W4[W8y.y40] = P4[W8y.Z9T];
          break;
        }

        P4[W8y.T9T] = W8y.u8Q;
        P4[W8y.Z9T] = W8y.u8Q;
        B4 = L4[W8y.T9T];
        G4 = L4[W8y.Z9T];

        if (W8y[Z](B4, W8y.u8Q) && W8y[P](G4, W8y.u8Q)) {
          box2d[W8y.x8T](P4, A1, o4);
          box2d[W8y.X26](o4[W8y.T9T], a1, X4);
          box2d[W8y.X26](o4[W8y.Z9T], a1, m4);
          box2d[W8y.m3T](X4, m4, O4);
          I1[W8y.I5M](D1, O4);
          e1 -= W8y[N](d1, box2d[W8y.t10](Y4[W8y.q5M], X4) + box2d[W8y.t10](W4[W8y.q5M], m4));
          S1[W8y.a9k](u1, O4);
          B1 += W8y[f](j1, box2d[W8y.t10](Y4[W8y.A5M], X4) + box2d[W8y.t10](W4[W8y.A5M], m4));
          Y4[W8y.y40] = P4[W8y.T9T];
          W4[W8y.y40] = P4[W8y.Z9T];
          break;
        }

        break;
      }
    }

    this[W8y.C4H][V1][W8y.M9T] = e1;
    this[W8y.C4H][Q1][W8y.M9T] = B1;
  }
};

box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv1 = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_dv2 = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_a = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_b = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_x = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_d = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1 = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P2 = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveVelocityConstraints.s_P1P2 = new box2d[W8y.p7T]();

box2d.b2ContactSolver.prototype.StoreImpulses = function () {
  var f = "X1S",
      N = "N1S",
      P,
      Z,
      W,
      l,
      m,
      C;

  for (P = W8y.u8Q, Z = this[W8y.o9k]; W8y[N](P, Z); ++P) {
    m = this[W8y.s8M][P];
    C = this[W8y.e1H][m[W8y.Y57]][W8y.S6H]();

    for (W = W8y.u8Q, l = m[W8y.O47]; W8y[f](W, l); ++W) {
      C[W8y.H10][W][W8y.y40] = m[W8y.H10][W][W8y.y40];
      C[W8y.H10][W][W8y.m2H] = m[W8y.H10][W][W8y.m2H];
    }
  }
};

box2d[W8y.Q7k] = function () {
  this[W8y.M4T] = new box2d[W8y.p7T]();
  this[W8y.C40] = new box2d[W8y.p7T]();
};

box2d.b2PositionSolverManifold.prototype.normal = W8y.z6k;
box2d.b2PositionSolverManifold.prototype.point = W8y.z6k;
box2d.b2PositionSolverManifold.prototype.separation = W8y.u8Q;

box2d.b2PositionSolverManifold.prototype.Initialize = function (f, N, P, Z) {
  var W = "O1S",
      l = "x1S",
      m = "b1S",
      C = "s1S",
      n = box2d.b2PositionSolverManifold.prototype.Initialize.s_pointA,
      k = box2d.b2PositionSolverManifold.prototype.Initialize.s_pointB,
      H = box2d.b2PositionSolverManifold.prototype.Initialize.s_planePoint,
      i = box2d.b2PositionSolverManifold.prototype.Initialize.s_clipPoint;

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[C](f[W8y.O47], W8y.u8Q));
  }

  switch (f[W8y.N2k]) {
    case box2d[W8y.j76][W8y.j5k]:
      {
        box2d[W8y.o10](N, f[W8y.B9H], n);
        box2d[W8y.o10](P, f[W8y.d8M][W8y.u8Q], k);
        box2d[W8y.x8T](k, n, this[W8y.M4T])[W8y.s1k]();
        box2d[W8y.O80](n, k, this[W8y.C40]);
        this[W8y.k7H] = W8y[m](box2d[W8y.o27](box2d[W8y.x8T](k, n, box2d[W8y.p7T][W8y.t7M]), this[W8y.M4T]), f[W8y.G6T], f[W8y.J5T]);
      }
      break;

    case box2d[W8y.j76][W8y.I60]:
      {
        box2d[W8y.x47](N[W8y.b50], f[W8y.V67], this[W8y.M4T]);
        box2d[W8y.o10](N, f[W8y.B9H], H);
        box2d[W8y.o10](P, f[W8y.d8M][Z], i);
        this[W8y.k7H] = W8y[l](box2d[W8y.o27](box2d[W8y.x8T](i, H, box2d[W8y.p7T][W8y.t7M]), this[W8y.M4T]), f[W8y.G6T], f[W8y.J5T]);
        this[W8y.C40][W8y.k97](i);
      }
      break;

    case box2d[W8y.j76][W8y.J60]:
      {
        box2d[W8y.x47](P[W8y.b50], f[W8y.V67], this[W8y.M4T]);
        box2d[W8y.o10](P, f[W8y.B9H], H);
        box2d[W8y.o10](N, f[W8y.d8M][Z], i);
        this[W8y.k7H] = W8y[W](box2d[W8y.o27](box2d[W8y.x8T](i, H, box2d[W8y.p7T][W8y.t7M]), this[W8y.M4T]), f[W8y.G6T], f[W8y.J5T]);
        this[W8y.C40][W8y.k97](i);
        this[W8y.M4T][W8y.P8k]();
      }
      break;
  }
};

box2d.b2PositionSolverManifold.prototype.Initialize.s_pointA = new box2d[W8y.p7T]();
box2d.b2PositionSolverManifold.prototype.Initialize.s_pointB = new box2d[W8y.p7T]();
box2d.b2PositionSolverManifold.prototype.Initialize.s_planePoint = new box2d[W8y.p7T]();
box2d.b2PositionSolverManifold.prototype.Initialize.s_clipPoint = new box2d[W8y.p7T]();

box2d.b2ContactSolver.prototype.SolvePositionConstraints = function () {
  var f = "z1S",
      N = "B1S",
      P = "h1S",
      Z = "E1S",
      W = "a1S",
      l = "e1S",
      m = "r1S",
      C = "H1S",
      n,
      k,
      H,
      i,
      Q,
      e,
      j,
      o,
      S,
      d,
      u,
      D,
      M,
      y1,
      h,
      E,
      L,
      w1,
      B = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfA,
      N1 = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfB,
      f1 = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_psm,
      c1,
      l1,
      P1,
      s1 = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rA,
      b1 = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rB,
      m1,
      W1,
      J1,
      C1,
      x1,
      T1 = box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_P,
      K1 = W8y.u8Q;

  for (n = W8y.u8Q, k = this[W8y.o9k]; W8y[C](n, k); ++n) {
    Q = this[W8y.a3H][n];
    e = Q[W8y.K30];
    j = Q[W8y.L40];
    o = Q[W8y.H46];
    S = Q[W8y.k26];
    d = Q[W8y.m6T];
    u = Q[W8y.p46];
    D = Q[W8y.J06];
    M = Q[W8y.w6T];
    y1 = Q[W8y.O47];
    h = this[W8y.J0k][e][W8y.a30];
    E = this[W8y.J0k][e][W8y.U30];
    L = this[W8y.J0k][j][W8y.a30];
    w1 = this[W8y.J0k][j][W8y.U30];

    for (H = W8y.u8Q, i = y1; W8y[m](H, i); ++H) {
      B[W8y.b50][W8y.h70](E);
      N1[W8y.b50][W8y.h70](w1);
      box2d[W8y.x8T](h, box2d[W8y.x47](B[W8y.b50], o, box2d[W8y.p7T][W8y.t7M]), B[W8y.t60]);
      box2d[W8y.x8T](L, box2d[W8y.x47](N1[W8y.b50], u, box2d[W8y.p7T][W8y.t7M]), N1[W8y.t60]);
      f1[W8y.Y6T](Q, B, N1, H);
      c1 = f1[W8y.M4T];
      l1 = f1[W8y.C40];
      P1 = f1[W8y.k7H];
      box2d[W8y.x8T](l1, h, s1);
      box2d[W8y.x8T](l1, L, b1);
      K1 = box2d[W8y.G60](K1, P1);
      m1 = box2d[W8y.N06](W8y[l](box2d[W8y.A3H], P1 + box2d[W8y.Z8k]), -box2d[W8y.d1r], W8y.u8Q);
      W1 = box2d[W8y.t10](s1, c1);
      J1 = box2d[W8y.t10](b1, c1);
      C1 = S + D + W8y[W](d, W1, W1) + W8y[Z](M, J1, J1);
      x1 = W8y[P](C1, W8y.u8Q) ? -m1 / C1 : W8y.u8Q;
      box2d[W8y.X26](x1, c1, T1);
      h[W8y.I5M](S, T1);
      E -= W8y[N](d, box2d[W8y.t10](s1, T1));
      L[W8y.a9k](D, T1);
      w1 += W8y[f](M, box2d[W8y.t10](b1, T1));
    }

    this[W8y.J0k][e][W8y.U30] = E;
    this[W8y.J0k][j][W8y.U30] = w1;
  }

  return K1 > -W8y.S8Q * box2d[W8y.Z8k];
};

box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfA = new box2d[W8y.P70]();
box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_xfB = new box2d[W8y.P70]();
box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_psm = new box2d[W8y.Q7k]();
box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rA = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_rB = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolvePositionConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints = function (f, N) {
  var P = "a4S",
      Z = "e4S",
      W = "r4S",
      l = "T4S",
      m = "C4S",
      C = "x4S",
      n = "m4S",
      k = "Y4S",
      H = "c4S",
      i = "P4S",
      Q = "f4S",
      e = "t1S",
      j,
      o,
      S,
      d,
      u,
      D,
      M,
      y1,
      h,
      E,
      L,
      w1,
      B,
      N1,
      f1,
      c1,
      l1,
      P1,
      s1 = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfA,
      b1 = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfB,
      m1 = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_psm,
      W1,
      J1,
      C1,
      x1 = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rA,
      T1 = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rB,
      K1,
      V1,
      Q1,
      D1,
      d1,
      u1 = box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_P,
      j1 = W8y.u8Q;

  for (j = W8y.u8Q, o = this[W8y.o9k]; W8y[e](j, o); ++j) {
    u = this[W8y.a3H][j];
    D = u[W8y.K30];
    M = u[W8y.L40];
    y1 = u[W8y.H46];
    h = u[W8y.p46];
    E = u[W8y.O47];
    L = W8y.u8Q;
    w1 = W8y.u8Q;

    if (W8y[Q](D, f) || W8y[i](D, N)) {
      L = u[W8y.k26];
      w1 = u[W8y.m6T];
    }

    B = W8y.u8Q;
    N1 = W8y.u8Q;

    if (W8y[H](M, f) || W8y[k](M, N)) {
      B = u[W8y.J06];
      N1 = u[W8y.w6T];
    }

    f1 = this[W8y.J0k][D][W8y.a30];
    c1 = this[W8y.J0k][D][W8y.U30];
    l1 = this[W8y.J0k][M][W8y.a30];
    P1 = this[W8y.J0k][M][W8y.U30];

    for (S = W8y.u8Q, d = E; W8y[n](S, d); ++S) {
      s1[W8y.b50][W8y.h70](c1);
      b1[W8y.b50][W8y.h70](P1);
      box2d[W8y.x8T](f1, box2d[W8y.x47](s1[W8y.b50], y1, box2d[W8y.p7T][W8y.t7M]), s1[W8y.t60]);
      box2d[W8y.x8T](l1, box2d[W8y.x47](b1[W8y.b50], h, box2d[W8y.p7T][W8y.t7M]), b1[W8y.t60]);
      m1[W8y.Y6T](u, s1, b1, S);
      W1 = m1[W8y.M4T];
      J1 = m1[W8y.C40];
      C1 = m1[W8y.k7H];
      box2d[W8y.x8T](J1, f1, x1);
      box2d[W8y.x8T](J1, l1, T1);
      j1 = box2d[W8y.G60](j1, C1);
      K1 = box2d[W8y.N06](W8y[C](box2d[W8y.x60], C1 + box2d[W8y.Z8k]), -box2d[W8y.d1r], W8y.u8Q);
      V1 = box2d[W8y.t10](x1, W1);
      Q1 = box2d[W8y.t10](T1, W1);
      D1 = L + B + W8y[m](w1, V1, V1) + W8y[l](N1, Q1, Q1);
      d1 = W8y[W](D1, W8y.u8Q) ? -K1 / D1 : W8y.u8Q;
      box2d[W8y.X26](d1, W1, u1);
      f1[W8y.I5M](L, u1);
      c1 -= W8y[Z](w1, box2d[W8y.t10](x1, u1));
      l1[W8y.a9k](B, u1);
      P1 += W8y[P](N1, box2d[W8y.t10](T1, u1));
    }

    this[W8y.J0k][D][W8y.U30] = c1;
    this[W8y.J0k][M][W8y.U30] = P1;
  }

  return j1 >= -W8y.k0M * box2d[W8y.Z8k];
};

box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfA = new box2d[W8y.P70]();
box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_xfB = new box2d[W8y.P70]();
box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_psm = new box2d[W8y.Q7k]();
box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rA = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_rB = new box2d[W8y.p7T]();
box2d.b2ContactSolver.prototype.SolveTOIPositionConstraints.s_P = new box2d[W8y.p7T]();
goog[W8y.U3T](W8y.s0k);
goog[W8y.V20]('box2d.b2Settings');

box2d[W8y.e1M] = function () {};

box2d.b2DestructionListener.prototype.SayGoodbyeJoint = function (f) {};

box2d.b2DestructionListener.prototype.SayGoodbyeFixture = function (f) {};

box2d[W8y.e56] = function () {};

box2d.b2ContactFilter.prototype.ShouldCollide = function (f, N) {
  var P = "F4S",
      Z = "p4S",
      W = "L4S",
      l = "u4S",
      m = "d4S",
      C = f[W8y.y1k](),
      n = N[W8y.y1k]();

  if (W8y[m](C[W8y.T46], n[W8y.T46]) && W8y[l](C[W8y.T46], W8y.u8Q)) {
    return W8y[W](C[W8y.T46], W8y.u8Q);
  }

  var k = W8y[Z](C[W8y.i4r] & n[W8y.O10], W8y.u8Q) && W8y[P](C[W8y.O10] & n[W8y.i4r], W8y.u8Q);
  return k;
};

box2d[W8y.e56][W8y.H6Q] = new box2d[W8y.e56]();

box2d[W8y.T2H] = function () {
  this[W8y.F00] = box2d[W8y.D3r](box2d[W8y.j06]);
  this[W8y.s8k] = box2d[W8y.D3r](box2d[W8y.j06]);
};

box2d.b2ContactImpulse.prototype.normalImpulses = W8y.z6k;
box2d.b2ContactImpulse.prototype.tangentImpulses = W8y.z6k;
box2d.b2ContactImpulse.prototype.count = W8y.u8Q;

box2d[W8y.Q1T] = function () {};

box2d.b2ContactListener.prototype.BeginContact = function (f) {};

box2d.b2ContactListener.prototype.EndContact = function (f) {};

box2d.b2ContactListener.prototype.PreSolve = function (f, N) {};

box2d.b2ContactListener.prototype.PostSolve = function (f, N) {};

box2d[W8y.Q1T][W8y.T8M] = new box2d[W8y.Q1T]();

box2d[W8y.p6k] = function () {};

box2d.b2QueryCallback.prototype.ReportFixture = function (f) {
  return W8y.f5k;
};

box2d[W8y.R96] = function () {};

box2d.b2RayCastCallback.prototype.ReportFixture = function (f, N, P, Z) {
  return Z;
};

goog[W8y.U3T](W8y.E16);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Timer');
goog[W8y.V20]('box2d.b2TimeStep');
goog[W8y.V20]('box2d.b2WorldCallbacks');
goog[W8y.V20]('box2d.b2ContactSolver');

box2d[W8y.l00] = function () {
  this[W8y.H0k] = new Array(W8y.g0r);
  this[W8y.e1H] = new Array(W8y.g0r);
  this[W8y.Y0M] = new Array(W8y.g0r);
  this[W8y.J0k] = box2d[W8y.G96][W8y.N1r](W8y.g0r);
  this[W8y.C4H] = box2d[W8y.Y6k][W8y.N1r](W8y.g0r);
};

box2d.b2Island.prototype.m_allocator = W8y.z6k;
box2d.b2Island.prototype.m_listener = W8y.z6k;
box2d.b2Island.prototype.m_bodies = W8y.z6k;
box2d.b2Island.prototype.m_contacts = W8y.z6k;
box2d.b2Island.prototype.m_joints = W8y.z6k;
box2d.b2Island.prototype.m_positions = W8y.z6k;
box2d.b2Island.prototype.m_velocities = W8y.z6k;
box2d.b2Island.prototype.m_bodyCount = W8y.u8Q;
box2d.b2Island.prototype.m_jointCount = W8y.u8Q;
box2d.b2Island.prototype.m_contactCount = W8y.u8Q;
box2d.b2Island.prototype.m_bodyCapacity = W8y.u8Q;
box2d.b2Island.prototype.m_contactCapacity = W8y.u8Q;
box2d.b2Island.prototype.m_jointCapacity = W8y.u8Q;

box2d.b2Island.prototype.Initialize = function (f, N, P, Z, W) {
  var l = "T2S",
      m = "O2S",
      C = "V2S",
      n = "g2S",
      k = "l2S",
      H = "W2S",
      i = "Z2S",
      Q = "U2S",
      e = "y2S";
  this[W8y.a1k] = f;
  this[W8y.n40] = N;
  this[W8y.U60] = P;
  this[W8y.j9M] = 0;
  this[W8y.g5Q] = 0;
  this[W8y.w70] = 0;
  this[W8y.y5k] = Z;
  this[W8y.P2r] = W;

  while (W8y[e](this[W8y.H0k].length, f)) {
    this[W8y.H0k][this[W8y.H0k].length] = null;
  }

  while (W8y[Q](this[W8y.e1H].length, N)) {
    this[W8y.e1H][this[W8y.e1H].length] = null;
  }

  while (W8y[i](this[W8y.Y0M].length, P)) {
    this[W8y.Y0M][this[W8y.Y0M].length] = null;
  }

  if (W8y[H](this[W8y.J0k].length, f)) {
    var j = box2d[W8y.v30](W8y[k](this[W8y.J0k].length, 2), f);

    if (box2d[W8y.F2k]) {
      window[W8y.Q7M][W8y.Y2k]("box2d.b2Island.m_positions: " + j);
    }

    while (W8y[n](this[W8y.J0k].length, j)) {
      this[W8y.J0k][this[W8y.J0k].length] = new box2d[W8y.G96]();
    }
  }

  if (W8y[C](this[W8y.C4H].length, f)) {
    var j = box2d[W8y.v30](W8y[m](this[W8y.C4H].length, 2), f);

    if (box2d[W8y.F2k]) {
      window[W8y.Q7M][W8y.Y2k]("box2d.b2Island.m_velocities: " + j);
    }

    while (W8y[l](this[W8y.C4H].length, j)) {
      this[W8y.C4H][this[W8y.C4H].length] = new box2d[W8y.Y6k]();
    }
  }
};

box2d.b2Island.prototype.Clear = function () {
  this[W8y.j9M] = W8y.u8Q;
  this[W8y.g5Q] = W8y.u8Q;
  this[W8y.w70] = W8y.u8Q;
};

box2d.b2Island.prototype.AddBody = function (f) {
  var N = "i2S";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](this[W8y.j9M], this[W8y.a1k]));
  }

  f[W8y.x5M] = this[W8y.j9M];
  this[W8y.H0k][this[W8y.j9M]++] = f;
};

box2d.b2Island.prototype.AddContact = function (f) {
  var N = "q2S";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](this[W8y.g5Q], this[W8y.n40]));
  }

  this[W8y.e1H][this[W8y.g5Q]++] = f;
};

box2d.b2Island.prototype.AddJoint = function (f) {
  var N = "o2S";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](this[W8y.w70], this[W8y.U60]));
  }

  this[W8y.Y0M][this[W8y.w70]++] = f;
};

box2d.b2Island.prototype.Solve = function (f, N, P, Z) {
  var W = "k0S",
      l = "C0S",
      m = "x0S",
      C = "m0S",
      n = "Y0S",
      k = "c0S",
      H = "P0S",
      i = "f0S",
      Q = "t3S",
      e = "z3S",
      j = "B3S",
      o = "SolvePositionConstraints",
      S = "h3S",
      d = "D3S",
      u = "S3S",
      D = "o3S",
      M = "q3S",
      y1 = "i3S",
      h = "T3S",
      E = "O3S",
      L = "V3S",
      w1 = "g3S",
      B = "StoreImpulses",
      N1 = "l3S",
      f1 = "W3S",
      c1 = "InitVelocityConstraints",
      l1 = "Z3S",
      P1 = "WarmStart",
      s1 = "U3S",
      b1 = "y3S",
      m1 = "z2S",
      W1 = "B2S",
      J1 = "h2S",
      C1 = "D2S",
      x1 = "S2S",
      T1 = box2d[W8y.l00][W8y.I16][W8y.w6M](),
      K1 = N[W8y.I5H];

  for (var V1 = W8y.u8Q; W8y[x1](V1, this[W8y.j9M]); ++V1) {
    var Q1 = this[W8y.H0k][V1],
        D1 = this[W8y.J0k][V1][W8y.a30][W8y.k97](Q1[W8y.i6k][W8y.a30]),
        d1 = Q1[W8y.i6k][W8y.U30],
        u1 = this[W8y.C4H][V1][W8y.N8T][W8y.k97](Q1[W8y.b3r]),
        j1 = Q1[W8y.t77];
    Q1[W8y.i6k][W8y.K8Q][W8y.k97](Q1[W8y.i6k][W8y.a30]);
    Q1[W8y.i6k][W8y.b8T] = Q1[W8y.i6k][W8y.U30];

    if (W8y[C1](Q1[W8y.b5T], box2d[W8y.A4M][W8y.r4T])) {
      u1[W8y.T9T] += W8y[J1](K1, Q1[W8y.s5k] * P[W8y.T9T] + Q1[W8y.k86] * Q1[W8y.c2r][W8y.T9T]);
      u1[W8y.Z9T] += W8y[W1](K1, Q1[W8y.s5k] * P[W8y.Z9T] + Q1[W8y.k86] * Q1[W8y.c2r][W8y.Z9T]);
      j1 += W8y[m1](K1, Q1[W8y.M7H], Q1[W8y.P50]);
      u1[W8y.E40](W8y[b1](W8y.i0M, W8y.i0M + K1 * Q1[W8y.N30]));
      j1 *= W8y[s1](W8y.i0M, W8y.i0M + K1 * Q1[W8y.o1k]);
    }

    this[W8y.J0k][V1][W8y.U30] = d1;
    this[W8y.C4H][V1][W8y.M9T] = j1;
  }

  T1[W8y.w6M]();
  var G1 = box2d[W8y.l00][W8y.u1H];
  G1[W8y.D5H][W8y.k97](N);
  G1[W8y.P1T] = this[W8y.J0k];
  G1[W8y.S37] = this[W8y.C4H];
  var I1 = box2d[W8y.l00][W8y.m0M];
  I1[W8y.D5H][W8y.k97](N);
  I1[W8y.Q97] = this[W8y.e1H];
  I1[W8y.S5k] = this[W8y.g5Q];
  I1[W8y.P1T] = this[W8y.J0k];
  I1[W8y.S37] = this[W8y.C4H];
  I1[W8y.X2r] = this[W8y.y5k];
  var e1 = box2d[W8y.l00][W8y.T1k][W8y.Y6T](I1);
  e1[W8y.S0r]();

  if (N[W8y.W6T]) {
    e1[P1]();
  }

  for (var V1 = W8y.u8Q; W8y[l1](V1, this[W8y.w70]); ++V1) {
    this[W8y.Y0M][V1][c1](G1);
  }

  f[W8y.E6k] = T1[W8y.n56]();
  T1[W8y.w6M]();

  for (var V1 = W8y.u8Q; W8y[f1](V1, N[W8y.l3M]); ++V1) {
    for (var S1 = W8y.u8Q; W8y[N1](S1, this[W8y.w70]); ++S1) {
      this[W8y.Y0M][S1][W8y.s16](G1);
    }

    e1[W8y.s16]();
  }

  e1[B]();
  f[W8y.M8H] = T1[W8y.n56]();

  for (var V1 = W8y.u8Q; W8y[w1](V1, this[W8y.j9M]); ++V1) {
    var D1 = this[W8y.J0k][V1][W8y.a30],
        d1 = this[W8y.J0k][V1][W8y.U30],
        u1 = this[W8y.C4H][V1][W8y.N8T],
        j1 = this[W8y.C4H][V1][W8y.M9T],
        B1 = box2d[W8y.X26](K1, u1, box2d[W8y.l00][W8y.f16]);

    if (W8y[L](box2d[W8y.o27](B1, B1), box2d[W8y.Q00])) {
      var a1 = W8y[E](box2d[W8y.o1r], B1[W8y.a2k]());
      u1[W8y.E40](a1);
    }

    var F1 = W8y[h](K1, j1);

    if (W8y[y1](F1 * F1, box2d[W8y.v47])) {
      var a1 = W8y[M](box2d[W8y.E56], box2d[W8y.t67](F1));
      j1 *= a1;
    }

    D1[W8y.T9T] += W8y[D](K1, u1[W8y.T9T]);
    D1[W8y.Z9T] += W8y[u](K1, u1[W8y.Z9T]);
    d1 += W8y[d](K1, j1);
    this[W8y.J0k][V1][W8y.U30] = d1;
    this[W8y.C4H][V1][W8y.M9T] = j1;
  }

  T1[W8y.w6M]();
  var n4 = W8y.G0T;

  for (var V1 = W8y.u8Q; W8y[S](V1, N[W8y.Z2r]); ++V1) {
    var h1 = e1[o](),
        t1 = W8y.f5k;

    for (var S1 = W8y.u8Q; W8y[j](S1, this[W8y.w70]); ++S1) {
      var R4 = this[W8y.Y0M][S1][o](G1);
      t1 = t1 && R4;
    }

    if (h1 && t1) {
      n4 = W8y.f5k;
      break;
    }
  }

  for (var V1 = W8y.u8Q; W8y[e](V1, this[W8y.j9M]); ++V1) {
    var r4 = this[W8y.H0k][V1];
    r4[W8y.i6k][W8y.a30][W8y.k97](this[W8y.J0k][V1][W8y.a30]);
    r4[W8y.i6k][W8y.U30] = this[W8y.J0k][V1][W8y.U30];
    r4[W8y.b3r][W8y.k97](this[W8y.C4H][V1][W8y.N8T]);
    r4[W8y.t77] = this[W8y.C4H][V1][W8y.M9T];
    r4[W8y.s2H]();
  }

  f[W8y.W4r] = T1[W8y.n56]();
  this[W8y.h4H](e1[W8y.s8M]);

  if (Z) {
    var w4 = box2d[W8y.Z57],
        d4 = W8y[Q](box2d[W8y.G7k], box2d[W8y.G7k]),
        H4 = W8y[i](box2d[W8y.i6T], box2d[W8y.i6T]);

    for (var V1 = W8y.u8Q; W8y[H](V1, this[W8y.j9M]); ++V1) {
      var Q1 = this[W8y.H0k][V1];

      if (W8y[k](Q1[W8y.E1k](), box2d[W8y.A4M][W8y.d4k])) {
        continue;
      }

      if (W8y[n](Q1[W8y.o37] & box2d[W8y.D8H][W8y.h2H], W8y.u8Q) || W8y[C](Q1[W8y.t77] * Q1[W8y.t77], H4) || W8y[m](box2d[W8y.o27](Q1[W8y.b3r], Q1[W8y.b3r]), d4)) {
        Q1[W8y.M36] = W8y.u8Q;
        w4 = W8y.u8Q;
      } else {
        Q1[W8y.M36] += K1;
        w4 = box2d[W8y.G60](w4, Q1[W8y.M36]);
      }
    }

    if (W8y[l](w4, box2d[W8y.x3r]) && n4) {
      for (var V1 = W8y.u8Q; W8y[W](V1, this[W8y.j9M]); ++V1) {
        var Q1 = this[W8y.H0k][V1];
        Q1[W8y.U5H](W8y.G0T);
      }
    }
  }
};

box2d.b2Island.prototype.SolveTOI = function (f, N, P) {
  var Z = "X7S",
      W = "N7S",
      l = "w7S",
      m = "A0S",
      C = "G0S",
      n = "v0S",
      k = "M0S",
      H = "E0S",
      i = "SolveTOIPositionConstraints",
      Q = "R0S",
      e = "I0S",
      j = "j0S",
      o = "Q0S";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[o](N, this[W8y.j9M]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[j](P, this[W8y.j9M]));
  }

  for (var S = W8y.u8Q; W8y[e](S, this[W8y.j9M]); ++S) {
    var d = this[W8y.H0k][S];
    this[W8y.J0k][S][W8y.a30][W8y.k97](d[W8y.i6k][W8y.a30]);
    this[W8y.J0k][S][W8y.U30] = d[W8y.i6k][W8y.U30];
    this[W8y.C4H][S][W8y.N8T][W8y.k97](d[W8y.b3r]);
    this[W8y.C4H][S][W8y.M9T] = d[W8y.t77];
  }

  var u = box2d[W8y.l00][W8y.m0M];
  u[W8y.Q97] = this[W8y.e1H];
  u[W8y.S5k] = this[W8y.g5Q];
  u[W8y.X2r] = this[W8y.y5k];
  u[W8y.D5H][W8y.k97](f);
  u[W8y.P1T] = this[W8y.J0k];
  u[W8y.S37] = this[W8y.C4H];
  var D = box2d[W8y.l00][W8y.T1k][W8y.Y6T](u);

  for (var S = W8y.u8Q; W8y[Q](S, f[W8y.Z2r]); ++S) {
    var M = D[i](N, P);

    if (M) {
      break;
    }
  }

  this[W8y.H0k][N][W8y.i6k][W8y.K8Q][W8y.k97](this[W8y.J0k][N][W8y.a30]);
  this[W8y.H0k][N][W8y.i6k][W8y.b8T] = this[W8y.J0k][N][W8y.U30];
  this[W8y.H0k][P][W8y.i6k][W8y.K8Q][W8y.k97](this[W8y.J0k][P][W8y.a30]);
  this[W8y.H0k][P][W8y.i6k][W8y.b8T] = this[W8y.J0k][P][W8y.U30];
  D[W8y.S0r]();

  for (var S = W8y.u8Q; W8y[H](S, f[W8y.l3M]); ++S) {
    D[W8y.s16]();
  }

  var y1 = f[W8y.I5H];

  for (var S = W8y.u8Q; W8y[k](S, this[W8y.j9M]); ++S) {
    var h = this[W8y.J0k][S][W8y.a30],
        E = this[W8y.J0k][S][W8y.U30],
        L = this[W8y.C4H][S][W8y.N8T],
        w1 = this[W8y.C4H][S][W8y.M9T],
        B = box2d[W8y.X26](y1, L, box2d[W8y.l00][W8y.f16]);

    if (W8y[n](box2d[W8y.o27](B, B), box2d[W8y.Q00])) {
      var N1 = W8y[C](box2d[W8y.o1r], B[W8y.a2k]());
      L[W8y.E40](N1);
    }

    var f1 = W8y[m](y1, w1);

    if (W8y[l](f1 * f1, box2d[W8y.v47])) {
      var N1 = W8y[W](box2d[W8y.E56], box2d[W8y.t67](f1));
      w1 *= N1;
    }

    h[W8y.a9k](y1, L);
    E += W8y[Z](y1, w1);
    this[W8y.J0k][S][W8y.U30] = E;
    this[W8y.C4H][S][W8y.M9T] = w1;
    var c1 = this[W8y.H0k][S];
    c1[W8y.i6k][W8y.a30][W8y.k97](h);
    c1[W8y.i6k][W8y.U30] = E;
    c1[W8y.b3r][W8y.k97](L);
    c1[W8y.t77] = w1;
    c1[W8y.s2H]();
  }

  this[W8y.h4H](D[W8y.s8M]);
};

box2d.b2Island.prototype.Report = function (f) {
  var N = "PostSolve",
      P = "J7S",
      Z = "b7S",
      W = "s7S";

  if (W8y[W](this[W8y.P2r], W8y.z6k)) {
    return;
  }

  for (var l = W8y.u8Q; W8y[Z](l, this[W8y.g5Q]); ++l) {
    var m = this[W8y.e1H][l];

    if (!m) {
      continue;
    }

    var C = f[l],
        n = box2d[W8y.l00][W8y.p7M];
    n[W8y.S5k] = C[W8y.O47];

    for (var k = W8y.u8Q; W8y[P](k, C[W8y.O47]); ++k) {
      n[W8y.F00][k] = C[W8y.H10][k][W8y.y40];
      n[W8y.s8k][k] = C[W8y.H10][k][W8y.m2H];
    }

    this[W8y.P2r][N](m, n);
  }
};

box2d[W8y.l00][W8y.I16] = new box2d[W8y.F67]();
box2d[W8y.l00][W8y.u1H] = new box2d[W8y.H80]();
box2d[W8y.l00][W8y.m0M] = new box2d[W8y.n4M]();
box2d[W8y.l00][W8y.T1k] = new box2d[W8y.b1M]();
box2d[W8y.l00][W8y.f16] = new box2d[W8y.p7T]();
box2d[W8y.l00][W8y.p7M] = new box2d[W8y.T2H]();
goog[W8y.U3T](W8y.L46);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Contact');

box2d[W8y.v5M] = function () {};

box2d.b2ContactRegister.prototype.createFcn = W8y.z6k;
box2d.b2ContactRegister.prototype.destroyFcn = W8y.z6k;
box2d.b2ContactRegister.prototype.primary = W8y.G0T;

box2d[W8y.i5T] = function (f) {
  var N = "InitializeRegisters";
  this[W8y.y5k] = f;
  this[N]();
};

box2d.b2ContactFactory.prototype.m_allocator = W8y.z6k;

box2d.b2ContactFactory.prototype.AddType = function (Z, W, l, m) {
  var C = "K7S",
      n = "pool";

  if (true) {
    var k = box2d[W8y.c2k](256, function (f) {
      return Z();
    }),
        H = function H(f) {
      var N = "pop";
      var P = "n7S";

      if (W8y[P](k.length, 0)) {
        return k[N]();
      }

      return Z(f);
    },
        i = function i(f, N) {
      k[W8y.h7T](f);
    };

    this[W8y.S0T][l][m][n] = k;
    this[W8y.S0T][l][m][W8y.Q47] = H;
    this[W8y.S0T][l][m][W8y.Q46] = i;
    this[W8y.S0T][l][m][W8y.h2T] = true;

    if (W8y[C](l, m)) {
      this[W8y.S0T][m][l][n] = k;
      this[W8y.S0T][m][l][W8y.Q47] = H;
      this[W8y.S0T][m][l][W8y.Q46] = i;
      this[W8y.S0T][m][l][W8y.h2T] = false;
    }
  }
};

box2d.b2ContactFactory.prototype.InitializeRegisters = function () {
  var f = "AddType",
      N = "r7S",
      P = "H7S";
  this[W8y.S0T] = new Array(box2d[W8y.i80][W8y.I3k]);

  for (var Z = W8y.u8Q; W8y[P](Z, box2d[W8y.i80][W8y.I3k]); Z++) {
    this[W8y.S0T][Z] = new Array(box2d[W8y.i80][W8y.I3k]);

    for (var W = W8y.u8Q; W8y[N](W, box2d[W8y.i80][W8y.I3k]); W++) {
      this[W8y.S0T][Z][W] = new box2d[W8y.v5M]();
    }
  }

  this[f](box2d[W8y.x6Q][W8y.D70], box2d[W8y.x6Q][W8y.t87], box2d[W8y.i80][W8y.q36], box2d[W8y.i80][W8y.q36]);
  this[f](box2d[W8y.q4H][W8y.D70], box2d[W8y.q4H][W8y.t87], box2d[W8y.i80][W8y.E27], box2d[W8y.i80][W8y.q36]);
  this[f](box2d[W8y.I8H][W8y.D70], box2d[W8y.I8H][W8y.t87], box2d[W8y.i80][W8y.E27], box2d[W8y.i80][W8y.E27]);
  this[f](box2d[W8y.b10][W8y.D70], box2d[W8y.b10][W8y.t87], box2d[W8y.i80][W8y.E2H], box2d[W8y.i80][W8y.q36]);
  this[f](box2d[W8y.G1r][W8y.D70], box2d[W8y.G1r][W8y.t87], box2d[W8y.i80][W8y.E2H], box2d[W8y.i80][W8y.E27]);
  this[f](box2d[W8y.d56][W8y.D70], box2d[W8y.d56][W8y.t87], box2d[W8y.i80][W8y.x87], box2d[W8y.i80][W8y.q36]);
  this[f](box2d[W8y.D46][W8y.D70], box2d[W8y.D46][W8y.t87], box2d[W8y.i80][W8y.x87], box2d[W8y.i80][W8y.E27]);
};

box2d.b2ContactFactory.prototype.Create = function (f, N, P, Z) {
  var W = "L7S",
      l = "u7S",
      m = "d7S",
      C = "a7S",
      n = "e7S",
      k = f[W8y.E1k](),
      H = P[W8y.E1k]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[n](W8y.u8Q, k) && W8y[C](k, box2d[W8y.i80][W8y.I3k]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](W8y.u8Q, H) && W8y[l](H, box2d[W8y.i80][W8y.I3k]));
  }

  var i = this[W8y.S0T][k][H],
      Q = i[W8y.Q47];

  if (W8y[W](Q, W8y.z6k)) {
    if (i[W8y.h2T]) {
      var e = Q(this[W8y.y5k]);
      e[W8y.w6M](f, N, P, Z);
      return e;
    } else {
      var e = Q(this[W8y.y5k]);
      e[W8y.w6M](P, Z, f, N);
      return e;
    }
  } else {
    return W8y.z6k;
  }
};

box2d.b2ContactFactory.prototype.Destroy = function (f) {
  var N = "l9S",
      P = "W9S",
      Z = "Z9S",
      W = "U9S",
      l = "y9S",
      m = "F7S",
      C = "p7S",
      n = f[W8y.a10],
      k = f[W8y.G10];

  if (W8y[C](f[W8y.R0k][W8y.O47], W8y.u8Q) && W8y[m](n[W8y.C0M](), W8y.G0T) && W8y[l](k[W8y.C0M](), W8y.G0T)) {
    n[W8y.b86]()[W8y.U5H](W8y.f5k);
    k[W8y.b86]()[W8y.U5H](W8y.f5k);
  }

  var H = n[W8y.E1k](),
      i = k[W8y.E1k]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](W8y.u8Q, H) && W8y[Z](i, box2d[W8y.i80][W8y.I3k]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[P](W8y.u8Q, H) && W8y[N](i, box2d[W8y.i80][W8y.I3k]));
  }

  var Q = this[W8y.S0T][H][i],
      e = Q[W8y.Q46];
  e(f, this[W8y.y5k]);
};

goog[W8y.U3T](W8y.i2r);
goog[W8y.V20]('box2d.b2Settings');

box2d[W8y.A56] = function (f) {
  this[W8y.a0r] = new Array(f);
};

box2d.b2GrowableStack.prototype.m_stack = W8y.z6k;
box2d.b2GrowableStack.prototype.m_count = W8y.u8Q;

box2d.b2GrowableStack.prototype.Reset = function () {
  this[W8y.o9k] = W8y.u8Q;
  return this;
};

box2d.b2GrowableStack.prototype.Push = function (f) {
  this[W8y.a0r][this[W8y.o9k]] = f;
  ++this[W8y.o9k];
};

box2d.b2GrowableStack.prototype.Pop = function () {
  var f = "g9S";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[f](this[W8y.o9k], W8y.u8Q));
  }

  --this[W8y.o9k];
  var N = this[W8y.a0r][this[W8y.o9k]];
  this[W8y.a0r][this[W8y.o9k]] = W8y.z6k;
  return N;
};

box2d.b2GrowableStack.prototype.GetCount = function () {
  return this[W8y.o9k];
};

goog[W8y.U3T](W8y.L1r);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Collision');
goog[W8y.V20]('box2d.b2GrowableStack');

box2d[W8y.k57] = function (f) {
  this[W8y.D9M] = f || W8y.u8Q;
  this[W8y.J1T] = new box2d[W8y.Z20]();
};

box2d.b2TreeNode.prototype.m_id = W8y.u8Q;
box2d.b2TreeNode.prototype.aabb = W8y.z6k;
box2d.b2TreeNode.prototype.userData = W8y.z6k;
box2d.b2TreeNode.prototype.parent = W8y.z6k;
box2d.b2TreeNode.prototype.child1 = W8y.z6k;
box2d.b2TreeNode.prototype.child2 = W8y.z6k;
box2d.b2TreeNode.prototype.height = 0;

box2d.b2TreeNode.prototype.IsLeaf = function () {
  var f = "V9S";
  return W8y[f](this[W8y.n6Q], W8y.z6k);
};

box2d[W8y.P26] = function () {};

box2d.b2DynamicTree.prototype.m_root = W8y.z6k;
box2d.b2DynamicTree.prototype.m_freeList = W8y.z6k;
box2d.b2DynamicTree.prototype.m_path = W8y.u8Q;
box2d.b2DynamicTree.prototype.m_insertionCount = W8y.u8Q;
box2d[W8y.P26][W8y.F0M] = new box2d[W8y.A56](W8y.J97);
box2d[W8y.P26][W8y.P3r] = new box2d[W8y.p7T]();
box2d[W8y.P26][W8y.r0r] = new box2d[W8y.p7T]();
box2d[W8y.P26][W8y.G90] = new box2d[W8y.p7T]();
box2d[W8y.P26][W8y.j8M] = new box2d[W8y.Z20]();
box2d[W8y.P26][W8y.Q6k] = new box2d[W8y.K50]();
box2d[W8y.P26][W8y.Q3M] = new box2d[W8y.Z20]();
box2d[W8y.P26][W8y.u0H] = new box2d[W8y.Z20]();

box2d.b2DynamicTree.prototype.GetUserData = function (f) {
  var N = "O9S";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](f, W8y.z6k));
  }

  return f[W8y.P1H];
};

box2d.b2DynamicTree.prototype.GetFatAABB = function (f) {
  var N = "T9S";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](f, W8y.z6k));
  }

  return f[W8y.J1T];
};

box2d.b2DynamicTree.prototype.Query = function (f, N) {
  var P = "S9S",
      Z = "o9S",
      W = "q9S",
      l = "i9S";
  if (W8y[l](this[W8y.A30], W8y.z6k)) return;
  var m = box2d[W8y.P26][W8y.F0M][W8y.w6M]();
  m[W8y.o07](this[W8y.A30]);

  while (W8y[W](m[W8y.c9T](), W8y.u8Q)) {
    var C = m[W8y.j1H]();

    if (W8y[Z](C, W8y.z6k)) {
      continue;
    }

    if (C[W8y.J1T][W8y.b36](N)) {
      if (C[W8y.J86]()) {
        var n = f(C);

        if (W8y[P](n, W8y.G0T)) {
          return;
        }
      } else {
        m[W8y.o07](C[W8y.n6Q]);
        m[W8y.o07](C[W8y.R6Q]);
      }
    }
  }
};

box2d.b2DynamicTree.prototype.RayCast = function (f, N) {
  var P = "k8S",
      Z = "C8S",
      W = "x8S",
      l = "m8S",
      m = "Y8S",
      C = "c8S",
      n = "GetExtents",
      k = "P8S",
      H = "f8S",
      i = "t9S",
      Q = "z9S",
      e = "B9S",
      j = "h9S",
      o = "D9S";
  if (W8y[o](this[W8y.A30], W8y.z6k)) return;
  var S = N[W8y.h17],
      d = N[W8y.W47],
      u = box2d[W8y.x8T](d, S, box2d[W8y.P26][W8y.P3r]);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[j](u[W8y.A5T](), W8y.u8Q));
  }

  u[W8y.Y27]();
  var D = box2d[W8y.b5H](u, box2d[W8y.P26][W8y.r0r]),
      M = box2d[W8y.L00](D, box2d[W8y.P26][W8y.G90]),
      y1 = N[W8y.v4T],
      h = box2d[W8y.P26][W8y.j8M],
      E = S[W8y.T9T] + W8y[e](y1, d[W8y.T9T] - S[W8y.T9T]),
      L = S[W8y.Z9T] + W8y[Q](y1, d[W8y.Z9T] - S[W8y.Z9T]);
  h[W8y.d1T][W8y.T9T] = box2d[W8y.G60](S[W8y.T9T], E);
  h[W8y.d1T][W8y.Z9T] = box2d[W8y.G60](S[W8y.Z9T], L);
  h[W8y.I1T][W8y.T9T] = box2d[W8y.v30](S[W8y.T9T], E);
  h[W8y.I1T][W8y.Z9T] = box2d[W8y.v30](S[W8y.Z9T], L);
  var w1 = box2d[W8y.P26][W8y.F0M][W8y.w6M]();
  w1[W8y.o07](this[W8y.A30]);

  while (W8y[i](w1[W8y.c9T](), W8y.u8Q)) {
    var B = w1[W8y.j1H]();

    if (W8y[H](B, W8y.z6k)) {
      continue;
    }

    if (W8y[k](box2d[W8y.k50](B[W8y.J1T], h), W8y.G0T)) {
      continue;
    }

    var N1 = B[W8y.J1T][W8y.Y9M](),
        f1 = B[W8y.J1T][n](),
        c1 = W8y[C](box2d[W8y.t67](box2d[W8y.o27](D, box2d[W8y.x8T](S, N1, box2d[W8y.p7T][W8y.t7M]))), box2d[W8y.o27](M, f1));

    if (W8y[m](c1, W8y.u8Q)) {
      continue;
    }

    if (B[W8y.J86]()) {
      var l1 = box2d[W8y.P26][W8y.Q6k];
      l1[W8y.h17][W8y.k97](N[W8y.h17]);
      l1[W8y.W47][W8y.k97](N[W8y.W47]);
      l1[W8y.v4T] = y1;
      var P1 = f(l1, B);

      if (W8y[l](P1, W8y.u8Q)) {
        return;
      }

      if (W8y[W](P1, W8y.u8Q)) {
        y1 = P1;
        E = S[W8y.T9T] + W8y[Z](y1, d[W8y.T9T] - S[W8y.T9T]);
        L = S[W8y.Z9T] + W8y[P](y1, d[W8y.Z9T] - S[W8y.Z9T]);
        h[W8y.d1T][W8y.T9T] = box2d[W8y.G60](S[W8y.T9T], E);
        h[W8y.d1T][W8y.Z9T] = box2d[W8y.G60](S[W8y.Z9T], L);
        h[W8y.I1T][W8y.T9T] = box2d[W8y.v30](S[W8y.T9T], E);
        h[W8y.I1T][W8y.Z9T] = box2d[W8y.v30](S[W8y.Z9T], L);
      }
    } else {
      w1[W8y.o07](B[W8y.n6Q]);
      w1[W8y.o07](B[W8y.R6Q]);
    }
  }
};

box2d.b2DynamicTree.prototype.AllocateNode = function () {
  if (this[W8y.g0H]) {
    var f = this[W8y.g0H];
    this[W8y.g0H] = f.parent;
    f.parent = W8y.z6k;
    f[W8y.n6Q] = W8y.z6k;
    f[W8y.R6Q] = W8y.z6k;
    f.height = 0;
    f[W8y.P1H] = W8y.z6k;
    return f;
  }

  return new box2d[W8y.k57](box2d.b2DynamicTree.prototype.s_node_id++);
};

box2d.b2DynamicTree.prototype.s_node_id = W8y.u8Q;

box2d.b2DynamicTree.prototype.FreeNode = function (f) {
  f.parent = this[W8y.g0H];
  f.height = -1;
  this[W8y.g0H] = f;
};

box2d.b2DynamicTree.prototype.CreateProxy = function (f, N) {
  var P = "j8S",
      Z = "Q8S",
      W = this[W8y.x2M](),
      l = box2d[W8y.k06],
      m = box2d[W8y.k06];
  W[W8y.J1T][W8y.d1T][W8y.T9T] = W8y[Z](f[W8y.d1T][W8y.T9T], l);
  W[W8y.J1T][W8y.d1T][W8y.Z9T] = W8y[P](f[W8y.d1T][W8y.Z9T], m);
  W[W8y.J1T][W8y.I1T][W8y.T9T] = f[W8y.I1T][W8y.T9T] + l;
  W[W8y.J1T][W8y.I1T][W8y.Z9T] = f[W8y.I1T][W8y.Z9T] + m;
  W[W8y.P1H] = N;
  W.height = 0;
  this[W8y.B3M](W);
  return W;
};

box2d.b2DynamicTree.prototype.DestroyProxy = function (f) {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](f[W8y.J86]());
  }

  this[W8y.C77](f);
  this[W8y.o76](f);
};

box2d.b2DynamicTree.prototype.MoveProxy = function (f, N, P) {
  var Z = "M8S",
      W = "E8S",
      l = "R8S",
      m = "I8S",
      C = "Contains";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](f[W8y.J86]());
  }

  if (f[W8y.J1T][C](N)) {
    return W8y.G0T;
  }

  this[W8y.C77](f);
  var n = box2d[W8y.k06] + box2d[W8y.e86] * (W8y[m](P[W8y.T9T], W8y.u8Q) ? P[W8y.T9T] : -P[W8y.T9T]),
      k = box2d[W8y.k06] + box2d[W8y.e86] * (W8y[l](P[W8y.Z9T], W8y.u8Q) ? P[W8y.Z9T] : -P[W8y.Z9T]);
  f[W8y.J1T][W8y.d1T][W8y.T9T] = W8y[W](N[W8y.d1T][W8y.T9T], n);
  f[W8y.J1T][W8y.d1T][W8y.Z9T] = W8y[Z](N[W8y.d1T][W8y.Z9T], k);
  f[W8y.J1T][W8y.I1T][W8y.T9T] = N[W8y.I1T][W8y.T9T] + n;
  f[W8y.J1T][W8y.I1T][W8y.Z9T] = N[W8y.I1T][W8y.Z9T] + k;
  this[W8y.B3M](f);
  return W8y.f5k;
};

box2d.b2DynamicTree.prototype.InsertLeaf = function (f) {
  var N = "j6S",
      P = "Q6S",
      Z = "k6S",
      W = "C6S",
      l = "x6S",
      m = "m6S",
      C = "Y6S",
      n = "X6S",
      k = "N6S",
      H = "w6S",
      i = "A8S",
      Q = "G8S",
      e = "v8S",
      j = "m_insertionCount";
  ++this[j];

  if (W8y[e](this[W8y.A30], W8y.z6k)) {
    this[W8y.A30] = f;
    this.m_root.parent = W8y.z6k;
    return;
  }

  var o = f[W8y.J1T],
      S = o[W8y.Y9M](),
      d = this[W8y.A30],
      u,
      D;

  while (W8y[Q](d[W8y.J86](), W8y.G0T)) {
    u = d[W8y.n6Q];
    D = d[W8y.R6Q];
    var M = d[W8y.J1T][W8y.l9k](),
        y1 = box2d[W8y.P26][W8y.Q3M];
    y1[W8y.w2M](d[W8y.J1T], o);
    var h = y1[W8y.l9k](),
        E = W8y[i](W8y.d8Q, h),
        L = W8y[H](W8y.d8Q, h - M),
        w1,
        B = box2d[W8y.P26][W8y.u0H],
        N1,
        f1;

    if (u[W8y.J86]()) {
      B[W8y.w2M](o, u[W8y.J1T]);
      w1 = B[W8y.l9k]() + L;
    } else {
      B[W8y.w2M](o, u[W8y.J1T]);
      N1 = u[W8y.J1T][W8y.l9k]();
      f1 = B[W8y.l9k]();
      w1 = W8y[k](f1, N1) + L;
    }

    var c1;

    if (D[W8y.J86]()) {
      B[W8y.w2M](o, D[W8y.J1T]);
      c1 = B[W8y.l9k]() + L;
    } else {
      B[W8y.w2M](o, D[W8y.J1T]);
      N1 = D[W8y.J1T][W8y.l9k]();
      f1 = B[W8y.l9k]();
      c1 = W8y[n](f1, N1, L);
    }

    if (W8y[C](E, w1) && W8y[m](E, c1)) {
      break;
    }

    if (W8y[l](w1, c1)) {
      d = u;
    } else {
      d = D;
    }
  }

  var l1 = d,
      P1 = l1.parent,
      s1 = this[W8y.x2M]();
  s1.parent = P1;
  s1[W8y.P1H] = W8y.z6k;
  s1[W8y.J1T][W8y.w2M](o, l1[W8y.J1T]);
  s1.height = l1.height + 1;

  if (P1) {
    if (W8y[W](P1[W8y.n6Q], l1)) {
      P1[W8y.n6Q] = s1;
    } else {
      P1[W8y.R6Q] = s1;
    }

    s1[W8y.n6Q] = l1;
    s1[W8y.R6Q] = f;
    l1.parent = s1;
    f.parent = s1;
  } else {
    s1[W8y.n6Q] = l1;
    s1[W8y.R6Q] = f;
    l1.parent = s1;
    f.parent = s1;
    this[W8y.A30] = s1;
  }

  d = f.parent;

  while (W8y[Z](d, W8y.z6k)) {
    d = this[W8y.N9T](d);
    u = d[W8y.n6Q];
    D = d[W8y.R6Q];

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[P](u, W8y.z6k));
    }

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[N](D, W8y.z6k));
    }

    d.height = 1 + box2d[W8y.v30](u.height, D.height);
    d[W8y.J1T][W8y.w2M](u[W8y.J1T], D[W8y.J1T]);
    d = d.parent;
  }
};

box2d.b2DynamicTree.prototype.RemoveLeaf = function (f) {
  var N = "E6S",
      P = "R6S",
      Z = "I6S";

  if (W8y[Z](f, this[W8y.A30])) {
    this[W8y.A30] = W8y.z6k;
    return;
  }

  var W = f.parent,
      l = W.parent,
      m;

  if (W8y[P](W[W8y.n6Q], f)) {
    m = W[W8y.R6Q];
  } else {
    m = W[W8y.n6Q];
  }

  if (l) {
    if (W8y[N](l[W8y.n6Q], W)) {
      l[W8y.n6Q] = m;
    } else {
      l[W8y.R6Q] = m;
    }

    m.parent = l;
    this[W8y.o76](W);
    var C = l;

    while (C) {
      C = this[W8y.N9T](C);
      var n = C[W8y.n6Q],
          k = C[W8y.R6Q];
      C[W8y.J1T][W8y.w2M](n[W8y.J1T], k[W8y.J1T]);
      C.height = 1 + box2d[W8y.v30](n.height, k.height);
      C = C.parent;
    }
  } else {
    this[W8y.A30] = m;
    m.parent = W8y.z6k;
    this[W8y.o76](W);
  }
};

box2d.b2DynamicTree.prototype.Balance = function (f) {
  var N = "K5S",
      P = "n5S",
      Z = "J5S",
      W = "b5S",
      l = "s5S",
      m = "X5S",
      C = "N5S",
      n = "w5S",
      k = "A6S",
      H = "G6S",
      i = "v6S",
      Q = "M6S";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[Q](f, null));
  }

  if (f[W8y.J86]() || W8y[i](f.height, 2)) {
    return f;
  }

  var e = f[W8y.n6Q],
      j = f[W8y.R6Q],
      o = W8y[H](j.height, e.height);

  if (W8y[k](o, 1)) {
    var S = j[W8y.n6Q],
        d = j[W8y.R6Q];
    j[W8y.n6Q] = f;
    j.parent = f.parent;
    f.parent = j;

    if (W8y[n](j.parent, null)) {
      if (W8y[C](j.parent.child1, f)) {
        j.parent.child1 = j;
      } else {
        if (box2d[W8y.l3H]) {
          box2d[W8y.X16](W8y[m](j.parent.child2, f));
        }

        j.parent.child2 = j;
      }
    } else {
      this[W8y.A30] = j;
    }

    if (W8y[l](S.height, d.height)) {
      j[W8y.R6Q] = S;
      f[W8y.R6Q] = d;
      d.parent = f;
      f[W8y.J1T][W8y.w2M](e[W8y.J1T], d[W8y.J1T]);
      j[W8y.J1T][W8y.w2M](f[W8y.J1T], S[W8y.J1T]);
      f.height = 1 + box2d[W8y.v30](e.height, d.height);
      j.height = 1 + box2d[W8y.v30](f.height, S.height);
    } else {
      j[W8y.R6Q] = d;
      f[W8y.R6Q] = S;
      S.parent = f;
      f[W8y.J1T][W8y.w2M](e[W8y.J1T], S[W8y.J1T]);
      j[W8y.J1T][W8y.w2M](f[W8y.J1T], d[W8y.J1T]);
      f.height = 1 + box2d[W8y.v30](e.height, S.height);
      j.height = 1 + box2d[W8y.v30](f.height, d.height);
    }

    return j;
  }

  if (o < -1) {
    var u = e[W8y.n6Q],
        D = e[W8y.R6Q];
    e[W8y.n6Q] = f;
    e.parent = f.parent;
    f.parent = e;

    if (W8y[W](e.parent, null)) {
      if (W8y[Z](e.parent.child1, f)) {
        e.parent.child1 = e;
      } else {
        if (box2d[W8y.l3H]) {
          box2d[W8y.X16](W8y[P](e.parent.child2, f));
        }

        e.parent.child2 = e;
      }
    } else {
      this[W8y.A30] = e;
    }

    if (W8y[N](u.height, D.height)) {
      e[W8y.R6Q] = u;
      f[W8y.n6Q] = D;
      D.parent = f;
      f[W8y.J1T][W8y.w2M](j[W8y.J1T], D[W8y.J1T]);
      e[W8y.J1T][W8y.w2M](f[W8y.J1T], u[W8y.J1T]);
      f.height = 1 + box2d[W8y.v30](j.height, D.height);
      e.height = 1 + box2d[W8y.v30](f.height, u.height);
    } else {
      e[W8y.R6Q] = D;
      f[W8y.n6Q] = u;
      u.parent = f;
      f[W8y.J1T][W8y.w2M](j[W8y.J1T], u[W8y.J1T]);
      e[W8y.J1T][W8y.w2M](f[W8y.J1T], D[W8y.J1T]);
      f.height = 1 + box2d[W8y.v30](j.height, u.height);
      e.height = 1 + box2d[W8y.v30](f.height, D.height);
    }

    return e;
  }

  return f;
};

box2d.b2DynamicTree.prototype.GetHeight = function () {
  var f = "H5S";

  if (W8y[f](this[W8y.A30], null)) {
    return 0;
  }

  return this[W8y.A30].height;
};

box2d.b2DynamicTree.prototype.GetAreaRatio = function () {
  var Z = "a5S",
      W = "r5S",
      l = function l(f) {
    var N = "e5S";

    if (W8y[N](f, W8y.z6k)) {
      return W8y.u8Q;
    }

    if (f[W8y.J86]()) {
      return W8y.u8Q;
    }

    var P = f[W8y.J1T][W8y.l9k]();
    P += l(f[W8y.n6Q]);
    P += l(f[W8y.R6Q]);
    return P;
  };

  if (W8y[W](this[W8y.A30], W8y.z6k)) {
    return W8y.u8Q;
  }

  var m = this[W8y.A30],
      C = m[W8y.J1T][W8y.l9k](),
      n = l(this[W8y.A30]);
  return W8y[Z](n, C);
};

box2d.b2DynamicTree.prototype.ComputeHeightNode = function (f) {
  if (f[W8y.J86]()) {
    return W8y.u8Q;
  }

  var N = this[W8y.K10](f[W8y.n6Q]),
      P = this[W8y.K10](f[W8y.R6Q]);
  return W8y.D8Q + box2d[W8y.v30](N, P);
};

box2d.b2DynamicTree.prototype.ComputeHeight = function () {
  var f = this[W8y.K10](this[W8y.A30]);
  return f;
};

box2d.b2DynamicTree.prototype.ValidateStructure = function (f) {
  var N = "Z1a",
      P = "U1a",
      Z = "y1a",
      W = "F5S",
      l = "p5S",
      m = "L5S",
      C = "u5S",
      n = "d5S";

  if (W8y[n](f, W8y.z6k)) {
    return;
  }

  if (W8y[C](f, this[W8y.A30])) {
    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[m](f.parent, W8y.z6k));
    }
  }

  var k = f,
      H = k[W8y.n6Q],
      i = k[W8y.R6Q];

  if (k[W8y.J86]()) {
    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[l](H, W8y.z6k));
    }

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[W](i, W8y.z6k));
    }

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[Z](k.height, 0));
    }

    return;
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[P](H.parent, f));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](i.parent, f));
  }

  this[W8y.l5M](H);
  this[W8y.l5M](i);
};

box2d.b2DynamicTree.prototype.ValidateMetrics = function (f) {
  var N = "i1a",
      P = "T1a",
      Z = "O1a",
      W = "V1a",
      l = "g1a",
      m = "l1a",
      C = "W1a";

  if (W8y[C](f, null)) {
    return;
  }

  var n = f,
      k = n[W8y.n6Q],
      H = n[W8y.R6Q];

  if (n[W8y.J86]()) {
    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[m](k, null));
    }

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[l](H, null));
    }

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[W](n.height, 0));
    }

    return;
  }

  var i = k.height,
      Q = H.height,
      e;
  e = 1 + box2d[W8y.v30](i, Q);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[Z](n.height, e));
  }

  var j = box2d[W8y.P26][W8y.u0H];
  j[W8y.w2M](k[W8y.J1T], H[W8y.J1T]);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[P](j[W8y.d1T], n[W8y.J1T][W8y.d1T]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](j[W8y.I1T], n[W8y.J1T][W8y.I1T]));
  }

  this[W8y.r47](k);
  this[W8y.r47](H);
};

box2d.b2DynamicTree.prototype.Validate = function () {
  var f = "ComputeHeight",
      N = "o1a",
      P = "q1a";
  this[W8y.l5M](this[W8y.A30]);
  this[W8y.r47](this[W8y.A30]);
  var Z = W8y.u8Q,
      W = this[W8y.g0H];

  while (W8y[P](W, W8y.z6k)) {
    W = W.parent;
    ++Z;
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](this[W8y.W7T](), this[f]()));
  }
};

box2d.b2DynamicTree.prototype.GetMaxBalance = function () {
  var k = function k(f, N) {
    var P = "B1a",
        Z = "h1a",
        W = "D1a",
        l = "S1a";

    if (W8y[l](f, null)) {
      return N;
    }

    if (W8y[W](f.height, 1)) {
      return N;
    }

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[Z](f[W8y.J86](), false));
    }

    var m = f[W8y.n6Q],
        C = f[W8y.R6Q],
        n = box2d[W8y.t67](W8y[P](C.height, m.height));
    return box2d[W8y.v30](N, n);
  },
      H = k(this[W8y.A30], 0);

  return H;
};

box2d.b2DynamicTree.prototype.RebuildBottomUp = function () {
  var f = "Validate";
  this[f]();
};

box2d.b2DynamicTree.prototype.ShiftOrigin = function (C) {
  var n = function n(f, N) {
    var P = "f4a",
        Z = "t1a",
        W = "z1a";

    if (W8y[W](f, null)) {
      return;
    }

    if (W8y[Z](f.height, 1)) {
      return;
    }

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[P](f[W8y.J86](), false));
    }

    var l = f[W8y.n6Q],
        m = f[W8y.R6Q];
    n(l, N);
    n(m, N);
    f[W8y.J1T][W8y.d1T][W8y.d6M](N);
    f[W8y.J1T][W8y.I1T][W8y.d6M](N);
  };

  n(this[W8y.A30], C);
};

goog[W8y.U3T](W8y.I8k);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2DynamicTree');

box2d[W8y.g9M] = function () {};

box2d.b2Pair.prototype.proxyA = W8y.z6k;
box2d.b2Pair.prototype.proxyB = W8y.z6k;

box2d[W8y.N26] = function () {
  this[W8y.y56] = new box2d[W8y.P26]();
  this[W8y.C2r] = new Array();
  this[W8y.j7M] = new Array();
};

box2d.b2BroadPhase.prototype.m_tree = W8y.z6k;
box2d.b2BroadPhase.prototype.m_proxyCount = W8y.u8Q;
box2d.b2BroadPhase.prototype.m_moveCount = W8y.u8Q;
box2d.b2BroadPhase.prototype.m_moveBuffer = W8y.z6k;
box2d.b2BroadPhase.prototype.m_pairCount = W8y.u8Q;
box2d.b2BroadPhase.prototype.m_pairBuffer = W8y.z6k;

box2d.b2BroadPhase.prototype.CreateProxy = function (f, N) {
  var P = this[W8y.y56][W8y.Z6T](f, N);
  ++this[W8y.X7T];
  this[W8y.K0M](P);
  return P;
};

box2d.b2BroadPhase.prototype.DestroyProxy = function (f) {
  var N = "UnBufferMove";
  this[N](f);
  --this[W8y.X7T];
  this[W8y.y56][W8y.u4r](f);
};

box2d.b2BroadPhase.prototype.MoveProxy = function (f, N, P) {
  var Z = this[W8y.y56][W8y.A70](f, N, P);

  if (Z) {
    this[W8y.K0M](f);
  }
};

box2d.b2BroadPhase.prototype.TouchProxy = function (f) {
  this[W8y.K0M](f);
};

box2d.b2BroadPhase.prototype.GetFatAABB = function (f) {
  return this[W8y.y56][W8y.R97](f);
};

box2d.b2BroadPhase.prototype.GetUserData = function (f) {
  return this[W8y.y56][W8y.e90](f);
};

box2d.b2BroadPhase.prototype.TestOverlap = function (f, N) {
  var P = this[W8y.y56][W8y.R97](f),
      Z = this[W8y.y56][W8y.R97](N);
  return box2d[W8y.k50](P, Z);
};

box2d.b2BroadPhase.prototype.GetProxyCount = function () {
  return this[W8y.X7T];
};

box2d.b2BroadPhase.prototype.GetTreeHeight = function () {
  return this[W8y.y56][W8y.W7T]();
};

box2d.b2BroadPhase.prototype.GetTreeBalance = function () {
  var f = "GetMaxBalance";
  return this[W8y.y56][f]();
};

box2d.b2BroadPhase.prototype.GetTreeQuality = function () {
  var f = "GetAreaRatio";
  return this[W8y.y56][f]();
};

box2d.b2BroadPhase.prototype.ShiftOrigin = function (f) {
  this[W8y.y56][W8y.w7M](f);
};

box2d.b2BroadPhase.prototype.UpdatePairs = function (l) {
  var m = "j4a",
      C = "Q4a",
      n = "k4a",
      k = "AddPair",
      H = "C4a",
      i = "sort",
      Q = "c4a",
      e = "P4a",
      j = "m_pairCount";
  this[j] = 0;

  for (var o = 0; W8y[e](o, this[W8y.m5M]); ++o) {
    var S = this[W8y.C2r][o];

    if (W8y[Q](S, null)) {
      continue;
    }

    var d = this,
        u = function u(f) {
      var N = "x4a",
          P = "m4a",
          Z = "Y4a";

      if (W8y[Z](f[W8y.D9M], S[W8y.D9M])) {
        return true;
      }

      if (W8y[P](d[j], d[W8y.j7M].length)) {
        d[W8y.j7M][d[j]] = new box2d[W8y.g9M]();
      }

      var W = d[W8y.j7M][d[j]];

      if (W8y[N](f[W8y.D9M], S[W8y.D9M])) {
        W[W8y.w4T] = f;
        W[W8y.i4T] = S;
      } else {
        W[W8y.w4T] = S;
        W[W8y.i4T] = f;
      }

      ++d[j];
      return true;
    },
        D = this[W8y.y56][W8y.R97](S);

    this[W8y.y56][W8y.M60](u, D);
  }

  this[W8y.m5M] = 0;
  this[W8y.j7M].length = this[j];
  this[W8y.j7M][i](box2d[W8y.c0r]);
  var o = 0;

  while (W8y[H](o, this[j])) {
    var M = this[W8y.j7M][o],
        y1 = this[W8y.y56][W8y.e90](M[W8y.w4T]),
        h = this[W8y.y56][W8y.e90](M[W8y.i4T]);
    l[k](y1, h);
    ++o;

    while (W8y[n](o, this[j])) {
      var E = this[W8y.j7M][o];

      if (W8y[C](E[W8y.w4T][W8y.D9M], M[W8y.w4T][W8y.D9M]) || W8y[m](E[W8y.i4T][W8y.D9M], M[W8y.i4T][W8y.D9M])) {
        break;
      }

      ++o;
    }
  }
};

box2d.b2BroadPhase.prototype.Query = function (f, N) {
  this[W8y.y56][W8y.M60](f, N);
};

box2d.b2BroadPhase.prototype.RayCast = function (f, N) {
  this[W8y.y56][W8y.C7M](f, N);
};

box2d.b2BroadPhase.prototype.BufferMove = function (f) {
  this[W8y.C2r][this[W8y.m5M]] = f;
  ++this[W8y.m5M];
};

box2d.b2BroadPhase.prototype.UnBufferMove = function (f) {
  var N = this[W8y.C2r][W8y.i1M](f);
  this[W8y.C2r][N] = W8y.z6k;
};

box2d[W8y.c0r] = function (f, N) {
  var P = "E4a",
      Z = "R4a",
      W = "I4a";

  if (W8y[W](f[W8y.w4T][W8y.D9M], N[W8y.w4T][W8y.D9M])) {
    return W8y[Z](f[W8y.i4T][W8y.D9M], N[W8y.i4T][W8y.D9M]);
  }

  return W8y[P](f[W8y.w4T][W8y.D9M], N[W8y.w4T][W8y.D9M]);
};

goog[W8y.U3T](W8y.Y1H);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2Collision');
goog[W8y.V20]('box2d.b2BroadPhase');
goog[W8y.V20]('box2d.b2ContactFactory');

box2d[W8y.F9T] = function () {
  this[W8y.u7k] = new box2d[W8y.N26]();
  this[W8y.f86] = new box2d[W8y.i5T](this[W8y.y5k]);
};

box2d.b2ContactManager.prototype.m_broadPhase = W8y.z6k;
box2d.b2ContactManager.prototype.m_contactList = W8y.z6k;
box2d.b2ContactManager.prototype.m_contactCount = W8y.u8Q;
box2d.b2ContactManager.prototype.m_contactFilter = box2d[W8y.e56][W8y.H6Q];
box2d.b2ContactManager.prototype.m_contactListener = box2d[W8y.Q1T][W8y.T8M];
box2d.b2ContactManager.prototype.m_allocator = W8y.z6k;
box2d.b2ContactManager.prototype.m_contactFactory = W8y.z6k;

box2d.b2ContactManager.prototype.Destroy = function (f) {
  var N = "G4a",
      P = "v4a",
      Z = "M4a",
      W = f[W8y.A4T](),
      l = f[W8y.O2T](),
      m = W[W8y.b86](),
      C = l[W8y.b86]();

  if (this[W8y.t8k] && f[W8y.h06]()) {
    this[W8y.t8k][W8y.f2T](f);
  }

  if (f[W8y.h1r]) {
    f[W8y.h1r][W8y.X66] = f[W8y.X66];
  }

  if (f[W8y.X66]) {
    f[W8y.X66][W8y.h1r] = f[W8y.h1r];
  }

  if (W8y[Z](f, this[W8y.h0H])) {
    this[W8y.h0H] = f[W8y.X66];
  }

  if (f[W8y.D6M][W8y.j56]) {
    f[W8y.D6M][W8y.j56][W8y.T9k] = f[W8y.D6M][W8y.T9k];
  }

  if (f[W8y.D6M][W8y.T9k]) {
    f[W8y.D6M][W8y.T9k][W8y.j56] = f[W8y.D6M][W8y.j56];
  }

  if (W8y[P](f[W8y.D6M], m[W8y.h0H])) {
    m[W8y.h0H] = f[W8y.D6M][W8y.T9k];
  }

  if (f[W8y.y6M][W8y.j56]) {
    f[W8y.y6M][W8y.j56][W8y.T9k] = f[W8y.y6M][W8y.T9k];
  }

  if (f[W8y.y6M][W8y.T9k]) {
    f[W8y.y6M][W8y.T9k][W8y.j56] = f[W8y.y6M][W8y.j56];
  }

  if (W8y[N](f[W8y.y6M], C[W8y.h0H])) {
    C[W8y.h0H] = f[W8y.y6M][W8y.T9k];
  }

  this[W8y.f86][W8y.t87](f);
  --this[W8y.g5Q];
};

box2d.b2ContactManager.prototype.Collide = function () {
  var f = "n2a",
      N = "J2a",
      P = "b2a",
      Z = "s2a",
      W = "X2a",
      l = "N2a",
      m = "w2a",
      C = "A4a",
      n = this[W8y.h0H];

  while (n) {
    var k = n[W8y.A4T](),
        H = n[W8y.O2T](),
        i = n[W8y.z6Q](),
        Q = n[W8y.Y5Q](),
        e = k[W8y.b86](),
        j = H[W8y.b86]();

    if (W8y[C](n[W8y.o37], box2d[W8y.S57][W8y.E3k])) {
      if (W8y[m](j[W8y.u3T](e), W8y.G0T)) {
        var o = n;
        n = o[W8y.X66];
        this[W8y.t87](o);
        continue;
      }

      if (this[W8y.z0k] && W8y[l](this[W8y.z0k][W8y.u3T](k, H), W8y.G0T)) {
        o = n;
        n = o[W8y.X66];
        this[W8y.t87](o);
        continue;
      }

      n[W8y.o37] &= ~box2d[W8y.S57][W8y.E3k];
    }

    var S = e[W8y.h0r]() && W8y[W](e[W8y.b5T], box2d[W8y.A4M][W8y.d4k]),
        d = j[W8y.h0r]() && W8y[Z](j[W8y.b5T], box2d[W8y.A4M][W8y.d4k]);

    if (W8y[P](S, W8y.G0T) && W8y[N](d, W8y.G0T)) {
      n = n[W8y.X66];
      continue;
    }

    var u = k[W8y.t16][i][W8y.z5H],
        D = H[W8y.t16][Q][W8y.z5H],
        M = this[W8y.u7k][W8y.b36](u, D);

    if (W8y[f](M, W8y.G0T)) {
      o = n;
      n = o[W8y.X66];
      this[W8y.t87](o);
      continue;
    }

    n[W8y.Z5Q](this[W8y.t8k]);
    n = n[W8y.X66];
  }
};

box2d.b2ContactManager.prototype.FindNewContacts = function () {
  var f = "UpdatePairs";
  this[W8y.u7k][f](this);
};

box2d.b2ContactManager.prototype.AddPair = function (f, N) {
  var P = "i3a",
      Z = "T3a",
      W = "O3a",
      l = "V3a",
      m = "g3a",
      C = "l3a",
      n = "W3a",
      k = "Z3a",
      H = "U3a",
      i = "y3a",
      Q = "F2a",
      e = "p2a",
      j = "L2a",
      o = "u2a",
      S = "d2a",
      d = "a2a",
      u = "e2a",
      D = "r2a",
      M = "H2a",
      y1 = "K2a";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[y1](f, box2d[W8y.s0T]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[M](N, box2d[W8y.s0T]));
  }

  var h = f,
      E = N,
      L = h[W8y.i9H],
      w1 = E[W8y.i9H],
      B = h[W8y.a60],
      N1 = E[W8y.a60],
      f1 = L[W8y.b86](),
      c1 = w1[W8y.b86]();

  if (W8y[D](f1, c1)) {
    return;
  }

  var l1 = c1[W8y.I57]();

  while (l1) {
    if (W8y[u](l1[W8y.a40], f1)) {
      var P1 = l1[W8y.a5H][W8y.A4T](),
          s1 = l1[W8y.a5H][W8y.O2T](),
          b1 = l1[W8y.a5H][W8y.z6Q](),
          m1 = l1[W8y.a5H][W8y.Y5Q]();

      if (W8y[d](P1, L) && W8y[S](s1, w1) && W8y[o](b1, B) && W8y[j](m1, N1)) {
        return;
      }

      if (W8y[e](P1, w1) && W8y[Q](s1, L) && W8y[i](b1, N1) && W8y[H](m1, B)) {
        return;
      }
    }

    l1 = l1[W8y.T9k];
  }

  if (W8y[k](c1[W8y.u3T](f1), W8y.G0T)) {
    return;
  }

  if (this[W8y.z0k] && W8y[n](this[W8y.z0k][W8y.u3T](L, w1), W8y.G0T)) {
    return;
  }

  var W1 = this[W8y.f86][W8y.D70](L, B, w1, N1);

  if (W8y[C](W1, W8y.z6k)) {
    return;
  }

  L = W1[W8y.A4T]();
  w1 = W1[W8y.O2T]();
  B = W1[W8y.z6Q]();
  N1 = W1[W8y.Y5Q]();
  f1 = L[W8y.R9k];
  c1 = w1[W8y.R9k];
  W1[W8y.h1r] = W8y.z6k;
  W1[W8y.X66] = this[W8y.h0H];

  if (W8y[m](this[W8y.h0H], W8y.z6k)) {
    this[W8y.h0H][W8y.h1r] = W1;
  }

  this[W8y.h0H] = W1;
  W1[W8y.D6M][W8y.a5H] = W1;
  W1[W8y.D6M][W8y.a40] = c1;
  W1[W8y.D6M][W8y.j56] = W8y.z6k;
  W1[W8y.D6M][W8y.T9k] = f1[W8y.h0H];

  if (W8y[l](f1[W8y.h0H], W8y.z6k)) {
    f1[W8y.h0H][W8y.j56] = W1[W8y.D6M];
  }

  f1[W8y.h0H] = W1[W8y.D6M];
  W1[W8y.y6M][W8y.a5H] = W1;
  W1[W8y.y6M][W8y.a40] = f1;
  W1[W8y.y6M][W8y.j56] = W8y.z6k;
  W1[W8y.y6M][W8y.T9k] = c1[W8y.h0H];

  if (W8y[W](c1[W8y.h0H], W8y.z6k)) {
    c1[W8y.h0H][W8y.j56] = W1[W8y.y6M];
  }

  c1[W8y.h0H] = W1[W8y.y6M];

  if (W8y[Z](L[W8y.C0M](), W8y.G0T) && W8y[P](w1[W8y.C0M](), W8y.G0T)) {
    f1[W8y.U5H](W8y.f5k);
    c1[W8y.U5H](W8y.f5k);
  }

  ++this[W8y.g5Q];
};

goog[W8y.U3T](W8y.F17);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2Joint');

box2d[W8y.c66][W8y.D70] = function (f, N) {
  var P = "Y0a",
      Z = "c0a",
      W = "P0a",
      l = "f0a",
      m = "t3a",
      C = "z3a",
      n = "B3a",
      k = "h3a",
      H = "D3a",
      i = "S3a",
      Q = "o3a",
      e = "q3a",
      j = W8y.z6k;

  switch (f[W8y.N2k]) {
    case box2d[W8y.z6M][W8y.U5M]:
      {
        j = new box2d[W8y.U06](W8y[e](f, box2d[W8y.C6T]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.F27]:
      {
        j = new box2d[W8y.h3T](W8y[Q](f, box2d[W8y.q50]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.y5H]:
      {
        j = new box2d[W8y.X7M](W8y[i](f, box2d[W8y.d3T]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.H5H]:
      {
        j = new box2d[W8y.s67](W8y[H](f, box2d[W8y.G3H]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.s7H]:
      {
        j = new box2d[W8y.f20](W8y[k](f, box2d[W8y.I66]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.a6T]:
      {
        j = new box2d[W8y.U7k](W8y[n](f, box2d[W8y.z00]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.p37]:
      {
        j = new box2d[W8y.F8H](W8y[C](f, box2d[W8y.e0M]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.u07]:
      {
        j = new box2d[W8y.v90](W8y[m](f, box2d[W8y.U2k]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.b46]:
      {
        j = new box2d[W8y.c1k](W8y[l](f, box2d[W8y.L3M]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.S2k]:
      {
        j = new box2d[W8y.y1T](W8y[W](f, box2d[W8y.N37]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.K46]:
      {
        j = new box2d[W8y.y57](W8y[Z](f, box2d[W8y.O36]) ? f : W8y.z6k);
      }
      break;

    case box2d[W8y.z6M][W8y.P2M]:
      {
        j = new box2d[W8y.I0r](W8y[P](f, box2d[W8y.Y60]) ? f : W8y.z6k);
      }
      break;

    default:
      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y.G0T);
      }

      break;
  }

  return j;
};

box2d[W8y.c66][W8y.t87] = function (f, N) {};

goog[W8y.U3T](W8y.J40);
goog[W8y.V20]('box2d.b2Settings');

box2d[W8y.s0r] = function (f, N, P) {
  this[W8y.Q60] = f;
  this[W8y.n2T] = N;
  this[W8y.B20] = P;
};

box2d.b2Color.prototype.r = W8y.T3H;
box2d.b2Color.prototype.g = W8y.T3H;
box2d.b2Color.prototype.b = W8y.T3H;

box2d.b2Color.prototype.SetRGB = function (f, N, P) {
  this[W8y.Q60] = f;
  this[W8y.n2T] = N;
  this[W8y.B20] = P;
  return this;
};

box2d.b2Color.prototype.MakeStyleString = function (f) {
  var N = "C0a",
      P = "x0a",
      Z = "m0a",
      W = "min",
      l = "max",
      m = "round",
      C = Math[m](Math[l](W8y.u8Q, Math[W](W8y.V97, W8y[Z](this[W8y.Q60], W8y.V97)))),
      n = Math[m](Math[l](W8y.u8Q, Math[W](W8y.V97, W8y[P](this[W8y.n2T], W8y.V97)))),
      k = Math[m](Math[l](W8y.u8Q, Math[W](W8y.V97, W8y[N](this[W8y.B20], W8y.V97)))),
      H = _typeof(f) === W8y.i7H ? W8y.i0M : Math[l](W8y.u8Q, Math[W](W8y.D8Q, f));
  return box2d[W8y.s0r][W8y.E17](C, n, k, H);
};

box2d[W8y.s0r][W8y.E17] = function (f, N, P, Z) {
  var W = 'rgb(',
      l = ')',
      m = ',',
      C = 'rgba(',
      n = "k0a";

  if (W8y[n](Z, W8y.D8Q)) {
    return C + f + m + N + m + P + m + Z + l;
  } else {
    return W + f + m + N + m + P + l;
  }
};

box2d[W8y.s0r][W8y.Y07] = new box2d[W8y.s0r](W8y.D8Q, W8y.u8Q, W8y.u8Q);
box2d[W8y.s0r][W8y.K9k] = new box2d[W8y.s0r](W8y.u8Q, W8y.D8Q, W8y.u8Q);
box2d[W8y.s0r][W8y.a2H] = new box2d[W8y.s0r](W8y.u8Q, W8y.u8Q, W8y.D8Q);
box2d[W8y.r6H] = {
  e_none: W8y.u8Q,
  e_shapeBit: 0x0001,
  e_jointBit: 0x0002,
  e_aabbBit: 0x0004,
  e_pairBit: 0x0008,
  e_centerOfMassBit: 0x0010,
  e_controllerBit: 0x0020,
  e_all: 0x003f
};
goog[W8y.g5H](box2d[W8y.r6H], W8y.m3H, box2d[W8y.r6H][W8y.Y8H]);
goog[W8y.g5H](box2d[W8y.r6H], W8y.d7H, box2d[W8y.r6H][W8y.s96]);
goog[W8y.g5H](box2d[W8y.r6H], W8y.Z8M, box2d[W8y.r6H][W8y.b87]);
goog[W8y.g5H](box2d[W8y.r6H], W8y.t6M, box2d[W8y.r6H][W8y.n1T]);
goog[W8y.g5H](box2d[W8y.r6H], W8y.q7T, box2d[W8y.r6H][W8y.B2k]);
goog[W8y.g5H](box2d[W8y.r6H], W8y.n87, box2d[W8y.r6H][W8y.W9M]);
goog[W8y.g5H](box2d[W8y.r6H], W8y.L6k, box2d[W8y.r6H][W8y.V37]);
goog[W8y.g5H](box2d[W8y.r6H], W8y.r27, box2d[W8y.r6H][W8y.m2r]);

box2d[W8y.x70] = function () {};

box2d.b2Draw.prototype.m_drawFlags = box2d[W8y.r6H][W8y.Y8H];

box2d.b2Draw.prototype.SetFlags = function (f) {
  this[W8y.g67] = f;
};

box2d.b2Draw.prototype.GetFlags = function () {
  return this[W8y.g67];
};

box2d.b2Draw.prototype.AppendFlags = function (f) {
  this[W8y.g67] |= f;
};

box2d.b2Draw.prototype.ClearFlags = function (f) {
  this[W8y.g67] &= ~f;
};

box2d.b2Draw.prototype.PushTransform = function (f) {};

box2d.b2Draw.prototype.PopTransform = function (f) {};

box2d.b2Draw.prototype.DrawPolygon = function (f, N, P) {};

box2d.b2Draw.prototype.DrawSolidPolygon = function (f, N, P) {};

box2d.b2Draw.prototype.DrawCircle = function (f, N, P) {};

box2d.b2Draw.prototype.DrawSolidCircle = function (f, N, P, Z) {};

box2d.b2Draw.prototype.DrawSegment = function (f, N, P) {};

box2d.b2Draw.prototype.DrawTransform = function (f) {};

goog[W8y.U3T](W8y.W56);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Collision');
goog[W8y.V20]('box2d.b2Shape');

box2d[W8y.a3T] = function () {};

box2d.b2Filter.prototype.categoryBits = 0x0001;
box2d.b2Filter.prototype.maskBits = 0xFFFF;
box2d.b2Filter.prototype.groupIndex = W8y.u8Q;

box2d.b2Filter.prototype.Clone = function () {
  return new box2d[W8y.a3T]()[W8y.k97](this);
};

box2d.b2Filter.prototype.Copy = function (f) {
  var N = "Q0a";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](this, f));
  }

  this[W8y.O10] = f[W8y.O10];
  this[W8y.i4r] = f[W8y.i4r];
  this[W8y.T46] = f[W8y.T46];
  return this;
};

box2d[W8y.f8M] = function () {
  this[W8y.E86] = new box2d[W8y.a3T]();
};

box2d.b2FixtureDef.prototype.shape = W8y.z6k;
box2d.b2FixtureDef.prototype.userData = W8y.z6k;
box2d.b2FixtureDef.prototype.friction = W8y.r3H;
box2d.b2FixtureDef.prototype.restitution = W8y.u8Q;
box2d.b2FixtureDef.prototype.density = W8y.u8Q;
box2d.b2FixtureDef.prototype.isSensor = W8y.G0T;
box2d.b2FixtureDef.prototype.filter = W8y.z6k;

box2d[W8y.s0T] = function () {
  this[W8y.J1T] = new box2d[W8y.Z20]();
};

box2d.b2FixtureProxy.prototype.aabb = W8y.z6k;
box2d.b2FixtureProxy.prototype.fixture = W8y.z6k;
box2d.b2FixtureProxy.prototype.childIndex = W8y.u8Q;
box2d.b2FixtureProxy.prototype.proxy = W8y.z6k;

box2d[W8y.s0T][W8y.N1r] = function (N) {
  return box2d[W8y.c2k](N, function (f) {
    return new box2d[W8y.s0T]();
  });
};

box2d[W8y.N27] = function () {
  this[W8y.X7T] = W8y.u8Q;
  this[W8y.B60] = new box2d[W8y.a3T]();
};

box2d.b2Fixture.prototype.m_density = W8y.u8Q;
box2d.b2Fixture.prototype.m_next = W8y.z6k;
box2d.b2Fixture.prototype.m_body = W8y.z6k;
box2d.b2Fixture.prototype.m_shape = W8y.z6k;
box2d.b2Fixture.prototype.m_friction = W8y.u8Q;
box2d.b2Fixture.prototype.m_restitution = W8y.u8Q;
box2d.b2Fixture.prototype.m_proxies = W8y.z6k;
box2d.b2Fixture.prototype.m_proxyCount = W8y.u8Q;
box2d.b2Fixture.prototype.m_filter = W8y.z6k;
box2d.b2Fixture.prototype.m_isSensor = W8y.G0T;
box2d.b2Fixture.prototype.m_userData = W8y.z6k;

box2d.b2Fixture.prototype.GetType = function () {
  return this[W8y.g0k][W8y.E1k]();
};

box2d.b2Fixture.prototype.GetShape = function () {
  return this[W8y.g0k];
};

box2d.b2Fixture.prototype.IsSensor = function () {
  return this[W8y.U90];
};

box2d.b2Fixture.prototype.GetFilterData = function () {
  return this[W8y.B60];
};

box2d.b2Fixture.prototype.GetUserData = function () {
  return this[W8y.x8k];
};

box2d.b2Fixture.prototype.SetUserData = function (f) {
  this[W8y.x8k] = f;
};

box2d.b2Fixture.prototype.GetBody = function () {
  return this[W8y.R9k];
};

box2d.b2Fixture.prototype.GetNext = function () {
  return this[W8y.X66];
};

box2d.b2Fixture.prototype.SetDensity = function (f) {
  this[W8y.R0T] = f;
};

box2d.b2Fixture.prototype.GetDensity = function () {
  return this[W8y.R0T];
};

box2d.b2Fixture.prototype.GetFriction = function () {
  return this[W8y.D4r];
};

box2d.b2Fixture.prototype.SetFriction = function (f) {
  this[W8y.D4r] = f;
};

box2d.b2Fixture.prototype.GetRestitution = function () {
  return this[W8y.D2M];
};

box2d.b2Fixture.prototype.SetRestitution = function (f) {
  this[W8y.D2M] = f;
};

box2d.b2Fixture.prototype.TestPoint = function (f) {
  return this[W8y.g0k][W8y.h10](this[W8y.R9k][W8y.x8Q](), f);
};

box2d.b2Fixture.prototype.RayCast = function (f, N, P) {
  return this[W8y.g0k][W8y.C7M](f, N, this[W8y.R9k][W8y.x8Q](), P);
};

box2d.b2Fixture.prototype.GetMassData = function (f) {
  f = f || new box2d[W8y.D37]();
  this[W8y.g0k][W8y.l47](f, this[W8y.R0T]);
  return f;
};

box2d.b2Fixture.prototype.GetAABB = function (f) {
  var N = "I0a",
      P = "j0a";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[P](W8y.u8Q, f) && W8y[N](f, this[W8y.X7T]));
  }

  return this[W8y.t16][f][W8y.J1T];
};

box2d.b2Fixture.prototype.Create = function (f, N) {
  var P = "isSensor";
  this[W8y.x8k] = N[W8y.P1H];
  this[W8y.D4r] = N[W8y.f66];
  this[W8y.D2M] = N[W8y.P9M];
  this[W8y.R9k] = f;
  this[W8y.X66] = W8y.z6k;
  this[W8y.B60][W8y.k97](N[W8y.E86]);
  this[W8y.U90] = N[P];
  this[W8y.g0k] = N[W8y.v2M][W8y.l26]();
  this[W8y.t16] = box2d[W8y.s0T][W8y.N1r](this[W8y.g0k][W8y.U76]());
  this[W8y.X7T] = W8y.u8Q;
  this[W8y.R0T] = N[W8y.c3T];
};

box2d.b2Fixture.prototype.Destroy = function () {
  var f = "R0a";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[f](this[W8y.X7T], W8y.u8Q));
  }

  this[W8y.g0k] = W8y.z6k;
};

box2d.b2Fixture.prototype.CreateProxies = function (f, N) {
  var P = "M0a",
      Z = "E0a";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[Z](this[W8y.X7T], W8y.u8Q));
  }

  this[W8y.X7T] = this[W8y.g0k][W8y.U76]();

  for (var W = W8y.u8Q; W8y[P](W, this[W8y.X7T]); ++W) {
    var l = this[W8y.t16][W];
    this[W8y.g0k][W8y.D4H](l[W8y.J1T], N, W);
    l[W8y.z5H] = f[W8y.Z6T](l[W8y.J1T], l);
    l[W8y.i9H] = this;
    l[W8y.a60] = W;
  }
};

box2d.b2Fixture.prototype.DestroyProxies = function (f) {
  var N = "v0a";

  for (var P = W8y.u8Q; W8y[N](P, this[W8y.X7T]); ++P) {
    var Z = this[W8y.t16][P];
    f[W8y.u4r](Z[W8y.z5H]);
    Z[W8y.z5H] = W8y.z6k;
  }

  this[W8y.X7T] = W8y.u8Q;
};

box2d.b2Fixture.prototype.Synchronize = function (f, N, P) {
  var Z = "A0a",
      W = "G0a";

  if (W8y[W](this[W8y.X7T], W8y.u8Q)) {
    return;
  }

  for (var l = W8y.u8Q; W8y[Z](l, this[W8y.X7T]); ++l) {
    var m = this[W8y.t16][l],
        C = box2d.b2Fixture.prototype.Synchronize.s_aabb1,
        n = box2d.b2Fixture.prototype.Synchronize.s_aabb2;
    this[W8y.g0k][W8y.D4H](C, N, l);
    this[W8y.g0k][W8y.D4H](n, P, l);
    m[W8y.J1T][W8y.w2M](C, n);
    var k = box2d[W8y.x8T](P[W8y.t60], N[W8y.t60], box2d.b2Fixture.prototype.Synchronize.s_displacement);
    f[W8y.A70](m[W8y.z5H], m[W8y.J1T], k);
  }
};

box2d.b2Fixture.prototype.Synchronize.s_aabb1 = new box2d[W8y.Z20]();
box2d.b2Fixture.prototype.Synchronize.s_aabb2 = new box2d[W8y.Z20]();
box2d.b2Fixture.prototype.Synchronize.s_displacement = new box2d[W8y.p7T]();

box2d.b2Fixture.prototype.SetFilterData = function (f) {
  this[W8y.B60][W8y.k97](f);
  this[W8y.U6M]();
};

box2d.b2Fixture.prototype.Refilter = function () {
  var f = "s7a",
      N = "X7a",
      P = "N7a",
      Z = "w7a";

  if (this[W8y.R9k]) {
    return;
  }

  var W = this[W8y.R9k][W8y.I57]();

  while (W) {
    var l = W[W8y.a5H],
        m = l[W8y.A4T](),
        C = l[W8y.O2T]();

    if (W8y[Z](m, this) || W8y[P](C, this)) {
      l[W8y.c47]();
    }

    W = W[W8y.T9k];
  }

  var n = this[W8y.R9k][W8y.g6T]();

  if (W8y[N](n, W8y.z6k)) {
    return;
  }

  var k = n[W8y.C3H][W8y.u7k];

  for (var H = W8y.u8Q; W8y[f](H, this[W8y.X7T]); ++H) {
    k[W8y.e3T](this[W8y.t16][H][W8y.z5H]);
  }
};

box2d.b2Fixture.prototype.SetSensor = function (f) {
  var N = "b7a";

  if (W8y[N](f, this[W8y.U90])) {
    this[W8y.R9k][W8y.U5H](W8y.f5k);
    this[W8y.U90] = f;
  }
};

box2d.b2Fixture.prototype.Dump = function (f) {
  var N = "    bodies[%d].CreateFixture(fd);\n",
      P = "    fd.shape = shape;\n",
      Z = "    fd.filter.groupIndex = %d;\n",
      W = "    fd.filter.maskBits = %d;\n",
      l = "    fd.filter.categoryBits = %d;\n",
      m = "    fd.isSensor = %s;\n",
      C = "    fd.density = %.15f;\n",
      n = "    fd.restitution = %.15f;\n",
      k = "    fd.friction = %.15f;\n",
      H = "    /*box2d.b2FixtureDef*/ var fd = new box2d.b2FixtureDef();\n";

  if (box2d[W8y.F2k]) {
    box2d[W8y.R50](H);
    box2d[W8y.R50](k, this[W8y.D4r]);
    box2d[W8y.R50](n, this[W8y.D2M]);
    box2d[W8y.R50](C, this[W8y.R0T]);
    box2d[W8y.R50](m, this[W8y.U90] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](l, this[W8y.B60][W8y.O10]);
    box2d[W8y.R50](W, this[W8y.B60][W8y.i4r]);
    box2d[W8y.R50](Z, this[W8y.B60][W8y.T46]);
    this[W8y.g0k][W8y.l1H]();
    box2d[W8y.R50](W8y.K2M);
    box2d[W8y.R50](P);
    box2d[W8y.R50](W8y.K2M);
    box2d[W8y.R50](N, f);
  }
};

goog[W8y.U3T](W8y.p0T);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2Fixture');
box2d[W8y.A4M] = {
  b2_unknown: -W8y.D8Q,
  b2_staticBody: W8y.u8Q,
  b2_kinematicBody: W8y.D8Q,
  b2_dynamicBody: W8y.d8Q,
  b2_bulletBody: W8y.S8Q
};
goog[W8y.g5H](box2d[W8y.A4M], W8y.I1M, box2d[W8y.A4M][W8y.U0M]);
goog[W8y.g5H](box2d[W8y.A4M], W8y.V87, box2d[W8y.A4M][W8y.d4k]);
goog[W8y.g5H](box2d[W8y.A4M], W8y.E5k, box2d[W8y.A4M][W8y.J76]);
goog[W8y.g5H](box2d[W8y.A4M], W8y.R47, box2d[W8y.A4M][W8y.r4T]);
goog[W8y.g5H](box2d[W8y.A4M], W8y.l5Q, box2d[W8y.A4M][W8y.R70]);

box2d[W8y.G1M] = function () {
  this[W8y.i67] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.Q1r] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
};

box2d.b2BodyDef.prototype.type = box2d[W8y.A4M][W8y.d4k];
box2d.b2BodyDef.prototype.position = W8y.z6k;
box2d.b2BodyDef.prototype.angle = W8y.u8Q;
box2d.b2BodyDef.prototype.linearVelocity = W8y.z6k;
box2d.b2BodyDef.prototype.angularVelocity = W8y.u8Q;
box2d.b2BodyDef.prototype.linearDamping = W8y.u8Q;
box2d.b2BodyDef.prototype.angularDamping = W8y.u8Q;
box2d.b2BodyDef.prototype.allowSleep = W8y.f5k;
box2d.b2BodyDef.prototype.awake = W8y.f5k;
box2d.b2BodyDef.prototype.fixedRotation = W8y.G0T;
box2d.b2BodyDef.prototype.bullet = W8y.G0T;
box2d.b2BodyDef.prototype.active = W8y.f5k;
box2d.b2BodyDef.prototype.userData = W8y.z6k;
box2d.b2BodyDef.prototype.gravityScale = W8y.D8Q;
box2d[W8y.D8H] = {
  e_none: W8y.u8Q,
  e_islandFlag: 0x0001,
  e_awakeFlag: 0x0002,
  e_autoSleepFlag: 0x0004,
  e_bulletFlag: 0x0008,
  e_fixedRotationFlag: 0x0010,
  e_activeFlag: 0x0020,
  e_toiFlag: 0x0040
};
goog[W8y.g5H](box2d[W8y.D8H], W8y.m3H, box2d[W8y.D8H][W8y.Y8H]);
goog[W8y.g5H](box2d[W8y.D8H], W8y.a7T, box2d[W8y.D8H][W8y.H0H]);
goog[W8y.g5H](box2d[W8y.D8H], W8y.x9M, box2d[W8y.D8H][W8y.g8M]);
goog[W8y.g5H](box2d[W8y.D8H], W8y.e16, box2d[W8y.D8H][W8y.h2H]);
goog[W8y.g5H](box2d[W8y.D8H], W8y.g4M, box2d[W8y.D8H][W8y.z7T]);
goog[W8y.g5H](box2d[W8y.D8H], W8y.R07, box2d[W8y.D8H][W8y.f47]);
goog[W8y.g5H](box2d[W8y.D8H], W8y.J5M, box2d[W8y.D8H][W8y.r80]);
goog[W8y.g5H](box2d[W8y.D8H], W8y.z5k, box2d[W8y.D8H][W8y.j16]);

box2d[W8y.F6T] = function (f, N) {
  var P = "H7a",
      Z = "active",
      W = "K7a",
      l = "n7a",
      m = "J7a";
  this[W8y.Z4M] = new box2d[W8y.P70]();
  this[W8y.p20] = new box2d[W8y.P70]();
  this[W8y.i6k] = new box2d[W8y.I30]();
  this[W8y.J77] = new box2d[W8y.I30]();
  this[W8y.b3r] = new box2d[W8y.p7T]();
  this[W8y.a67] = new box2d[W8y.p7T]();
  this[W8y.c2r] = new box2d[W8y.p7T]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](f[W8y.i67][W8y.i07]());
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](f[W8y.Q1r][W8y.i07]());
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f[W8y.x0H]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f[W8y.Y6Q]));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f[W8y.l0k]) && W8y[m](f[W8y.l0k], W8y.u8Q));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f[W8y.C67]) && W8y[l](f[W8y.C67], W8y.u8Q));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f[W8y.J6H]) && W8y[W](f[W8y.J6H], W8y.u8Q));
  }

  this[W8y.o37] = box2d[W8y.D8H][W8y.Y8H];

  if (f[W8y.k56]) {
    this[W8y.o37] |= box2d[W8y.D8H][W8y.z7T];
  }

  if (f[W8y.D0k]) {
    this[W8y.o37] |= box2d[W8y.D8H][W8y.f47];
  }

  if (f[W8y.g9H]) {
    this[W8y.o37] |= box2d[W8y.D8H][W8y.h2H];
  }

  if (f[W8y.n9M]) {
    this[W8y.o37] |= box2d[W8y.D8H][W8y.g8M];
  }

  if (f[Z]) {
    this[W8y.o37] |= box2d[W8y.D8H][W8y.r80];
  }

  this[W8y.s1H] = N;
  this[W8y.Z4M][W8y.t60][W8y.k97](f[W8y.i67]);
  this[W8y.Z4M][W8y.b50][W8y.h70](f[W8y.x0H]);
  this[W8y.i6k][W8y.O8Q][W8y.j6k]();
  this[W8y.i6k][W8y.K8Q][W8y.k97](this[W8y.Z4M][W8y.t60]);
  this[W8y.i6k][W8y.a30][W8y.k97](this[W8y.Z4M][W8y.t60]);
  this[W8y.i6k][W8y.b8T] = f[W8y.x0H];
  this[W8y.i6k][W8y.U30] = f[W8y.x0H];
  this[W8y.i6k][W8y.F2T] = W8y.u8Q;
  this[W8y.b3r][W8y.k97](f[W8y.Q1r]);
  this[W8y.t77] = f[W8y.Y6Q];
  this[W8y.N30] = f[W8y.J6H];
  this[W8y.o1k] = f[W8y.C67];
  this[W8y.s5k] = f[W8y.l0k];
  this[W8y.c2r][W8y.j6k]();
  this[W8y.P50] = W8y.u8Q;
  this[W8y.M36] = W8y.u8Q;
  this[W8y.b5T] = f[W8y.N2k];

  if (W8y[P](f[W8y.N2k], box2d[W8y.A4M][W8y.r4T])) {
    this[W8y.Z7T] = W8y.D8Q;
    this[W8y.k86] = W8y.D8Q;
  } else {
    this[W8y.Z7T] = W8y.u8Q;
    this[W8y.k86] = W8y.u8Q;
  }

  this[W8y.j0r] = W8y.u8Q;
  this[W8y.M7H] = W8y.u8Q;
  this[W8y.x8k] = f[W8y.P1H];
  this[W8y.l8H] = W8y.z6k;
  this[W8y.V26] = W8y.u8Q;
  this[W8y.U6T] = W8y.z6k;
  this[W8y.H3T] = W8y.u8Q;
};

box2d.b2Body.prototype.m_flags = box2d[W8y.D8H][W8y.Y8H];
box2d.b2Body.prototype.m_islandIndex = W8y.u8Q;
box2d.b2Body.prototype.m_world = W8y.z6k;
box2d.b2Body.prototype.m_xf = W8y.z6k;
box2d.b2Body.prototype.m_out_xf = W8y.z6k;
box2d.b2Body.prototype.m_sweep = W8y.z6k;
box2d.b2Body.prototype.m_out_sweep = W8y.z6k;
box2d.b2Body.prototype.m_jointList = W8y.z6k;
box2d.b2Body.prototype.m_contactList = W8y.z6k;
box2d.b2Body.prototype.m_prev = W8y.z6k;
box2d.b2Body.prototype.m_next = W8y.z6k;
box2d.b2Body.prototype.m_linearVelocity = W8y.z6k;
box2d.b2Body.prototype.m_out_linearVelocity = W8y.z6k;
box2d.b2Body.prototype.m_angularVelocity = W8y.u8Q;
box2d.b2Body.prototype.m_linearDamping = W8y.u8Q;
box2d.b2Body.prototype.m_angularDamping = W8y.u8Q;
box2d.b2Body.prototype.m_gravityScale = W8y.D8Q;
box2d.b2Body.prototype.m_force = W8y.z6k;
box2d.b2Body.prototype.m_torque = W8y.u8Q;
box2d.b2Body.prototype.m_sleepTime = W8y.u8Q;
box2d.b2Body.prototype.m_type = box2d[W8y.A4M][W8y.d4k];
box2d.b2Body.prototype.m_mass = W8y.D8Q;
box2d.b2Body.prototype.m_invMass = W8y.D8Q;
box2d.b2Body.prototype.m_I = W8y.u8Q;
box2d.b2Body.prototype.m_invI = W8y.u8Q;
box2d.b2Body.prototype.m_userData = W8y.z6k;
box2d.b2Body.prototype.m_fixtureList = W8y.z6k;
box2d.b2Body.prototype.m_fixtureCount = W8y.u8Q;
box2d.b2Body.prototype.m_controllerList = W8y.z6k;
box2d.b2Body.prototype.m_controllerCount = W8y.u8Q;

box2d.b2Body.prototype.CreateFixture = function (f) {
  var N = "d7a",
      P = "a7a",
      Z = "e7a",
      W = "r7a";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](this[W8y.s1H][W8y.C3k](), W8y.G0T));
  }

  if (W8y[Z](this[W8y.s1H][W8y.C3k](), W8y.f5k)) {
    return W8y.z6k;
  }

  var l = new box2d[W8y.N27]();
  l[W8y.D70](this, f);

  if (W8y[P](this[W8y.o37], box2d[W8y.D8H][W8y.r80])) {
    var m = this[W8y.s1H][W8y.C3H][W8y.u7k];
    l[W8y.V0M](m, this[W8y.Z4M]);
  }

  l[W8y.X66] = this[W8y.l8H];
  this[W8y.l8H] = l;
  ++this[W8y.V26];
  l[W8y.R9k] = this;

  if (W8y[N](l[W8y.R0T], W8y.u8Q)) {
    this[W8y.G57]();
  }

  this[W8y.s1H][W8y.o37] |= box2d[W8y.P4H][W8y.N36];
  return l;
};

box2d.b2Body.prototype.CreateFixture2 = function (f, N) {
  var P = "u7a";
  if (W8y[P](N, undefined)) N = W8y.u8Q;
  var Z = box2d.b2Body.prototype.CreateFixture2.s_def;
  Z[W8y.v2M] = f;
  Z[W8y.c3T] = N;
  return this[W8y.g37](Z);
};

box2d.b2Body.prototype.CreateFixture2.s_def = new box2d[W8y.f8M]();

box2d.b2Body.prototype.DestroyFixture = function (f) {
  var N = "g9a",
      P = "l9a",
      Z = "W9a",
      W = "Z9a",
      l = "U9a",
      m = "y9a",
      C = "F7a",
      n = "p7a",
      k = "L7a";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[k](this[W8y.s1H][W8y.C3k](), W8y.G0T));
  }

  if (W8y[n](this[W8y.s1H][W8y.C3k](), W8y.f5k)) {
    return;
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[C](f[W8y.R9k], this));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[m](this[W8y.V26], W8y.u8Q));
  }

  var H = this[W8y.l8H],
      i = W8y.z6k,
      Q = W8y.G0T;

  while (W8y[l](H, W8y.z6k)) {
    if (W8y[W](H, f)) {
      if (i) i[W8y.X66] = f[W8y.X66];else this[W8y.l8H] = f[W8y.X66];
      Q = W8y.f5k;
      break;
    }

    i = H;
    H = H[W8y.X66];
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](Q);
  }

  var e = this[W8y.h0H];

  while (e) {
    var j = e[W8y.a5H];
    e = e[W8y.T9k];
    var o = j[W8y.A4T](),
        S = j[W8y.O2T]();

    if (W8y[Z](f, o) || W8y[P](f, S)) {
      this[W8y.s1H][W8y.C3H][W8y.t87](j);
    }
  }

  if (W8y[N](this[W8y.o37], box2d[W8y.D8H][W8y.r80])) {
    var d = this[W8y.s1H][W8y.C3H][W8y.u7k];
    f[W8y.h6M](d);
  }

  f[W8y.t87]();
  f[W8y.R9k] = W8y.z6k;
  f[W8y.X66] = W8y.z6k;
  --this[W8y.V26];
  this[W8y.G57]();
};

box2d.b2Body.prototype.SetTransformVecRadians = function (f, N) {
  this[W8y.Q3k](f[W8y.T9T], f[W8y.Z9T], N);
};

box2d.b2Body.prototype.SetTransformXYRadians = function (f, N, P) {
  var Z = "q9a",
      W = "i9a",
      l = "T9a",
      m = "O9a",
      C = "V9a";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[C](this[W8y.s1H][W8y.C3k](), W8y.G0T));
  }

  if (W8y[m](this[W8y.s1H][W8y.C3k](), W8y.f5k)) {
    return;
  }

  if (W8y[l](this[W8y.Z4M][W8y.t60][W8y.T9T], f) && W8y[W](this[W8y.Z4M][W8y.t60][W8y.Z9T], N) && W8y[Z](this[W8y.Z4M][W8y.b50][W8y.x57](), P)) {
    return;
  }

  this[W8y.Z4M][W8y.b50][W8y.h70](P);
  this[W8y.Z4M][W8y.t60][W8y.y47](f, N);
  box2d[W8y.o10](this[W8y.Z4M], this[W8y.i6k][W8y.O8Q], this[W8y.i6k][W8y.a30]);
  this[W8y.i6k][W8y.U30] = P;
  this[W8y.i6k][W8y.K8Q][W8y.k97](this[W8y.i6k][W8y.a30]);
  this[W8y.i6k][W8y.b8T] = P;
  var n = this[W8y.s1H][W8y.C3H][W8y.u7k];

  for (var k = this[W8y.l8H]; k; k = k[W8y.X66]) {
    k[W8y.W97](n, this[W8y.Z4M], this[W8y.Z4M]);
  }
};

box2d.b2Body.prototype.SetTransform = function (f) {
  this[W8y.V3k](f[W8y.t60], f[W8y.x57]());
};

box2d.b2Body.prototype.GetTransform = function (f) {
  f = f || this[W8y.p20];
  return f[W8y.k97](this[W8y.Z4M]);
};

box2d.b2Body.prototype.GetPosition = function (f) {
  f = f || this[W8y.p20][W8y.t60];
  return f[W8y.k97](this[W8y.Z4M][W8y.t60]);
};

box2d.b2Body.prototype.SetPosition = function (f) {
  this[W8y.V3k](f, this[W8y.x57]());
};

box2d.b2Body.prototype.SetPositionXY = function (f, N) {
  this[W8y.Q3k](f, N, this[W8y.x57]());
};

box2d.b2Body.prototype.GetAngle = function () {
  return this[W8y.i6k][W8y.U30];
};

box2d.b2Body.prototype.GetAngleRadians = box2d.b2Body.prototype.GetAngle;

box2d.b2Body.prototype.GetAngleDegrees = function () {
  return box2d[W8y.W5Q](this[W8y.U0H]());
};

box2d.b2Body.prototype.SetAngle = function (f) {
  this[W8y.V3k](this[W8y.T9H](), f);
};

box2d.b2Body.prototype.SetAngleRadians = box2d.b2Body.prototype.SetAngle;

box2d.b2Body.prototype.SetAngleDegrees = function (f) {
  this[W8y.t5k](box2d[W8y.W96](f));
};

box2d.b2Body.prototype.GetWorldCenter = function (f) {
  f = f || this[W8y.J77][W8y.a30];
  return f[W8y.k97](this[W8y.i6k][W8y.a30]);
};

box2d.b2Body.prototype.GetLocalCenter = function (f) {
  f = f || this[W8y.J77][W8y.O8Q];
  return f[W8y.k97](this[W8y.i6k][W8y.O8Q]);
};

box2d.b2Body.prototype.SetLinearVelocity = function (f) {
  var N = "S9a",
      P = "o9a";

  if (W8y[P](this[W8y.b5T], box2d[W8y.A4M][W8y.d4k])) {
    return;
  }

  if (W8y[N](box2d[W8y.o27](f, f), W8y.u8Q)) {
    this[W8y.U5H](W8y.f5k);
  }

  this[W8y.b3r][W8y.k97](f);
};

box2d.b2Body.prototype.GetLinearVelocity = function (f) {
  f = f || this[W8y.a67];
  return f[W8y.k97](this[W8y.b3r]);
};

box2d.b2Body.prototype.SetAngularVelocity = function (f) {
  var N = "h9a",
      P = "D9a";

  if (W8y[P](this[W8y.b5T], box2d[W8y.A4M][W8y.d4k])) {
    return;
  }

  if (W8y[N](f * f, W8y.u8Q)) {
    this[W8y.U5H](W8y.f5k);
  }

  this[W8y.t77] = f;
};

box2d.b2Body.prototype.GetAngularVelocity = function () {
  return this[W8y.t77];
};

box2d.b2Body.prototype.GetDefinition = function (f) {
  var N = "f8a",
      P = "t9a",
      Z = "z9a",
      W = "B9a";
  f[W8y.N2k] = this[W8y.E1k]();
  f[W8y.g9H] = W8y[W](this[W8y.o37] & box2d[W8y.D8H][W8y.h2H], box2d[W8y.D8H][W8y.h2H]);
  f[W8y.x0H] = this[W8y.x57]();
  f[W8y.C67] = this[W8y.o1k];
  f[W8y.l0k] = this[W8y.s5k];
  f[W8y.Y6Q] = this[W8y.t77];
  f[W8y.D0k] = W8y[Z](this[W8y.o37] & box2d[W8y.D8H][W8y.f47], box2d[W8y.D8H][W8y.f47]);
  f[W8y.k56] = W8y[P](this[W8y.o37] & box2d[W8y.D8H][W8y.z7T], box2d[W8y.D8H][W8y.z7T]);
  f[W8y.n9M] = W8y[N](this[W8y.o37] & box2d[W8y.D8H][W8y.g8M], box2d[W8y.D8H][W8y.g8M]);
  f[W8y.J6H] = this[W8y.N30];
  f[W8y.Q1r][W8y.k97](this[W8y.s5T]());
  f[W8y.i67][W8y.k97](this[W8y.T9H]());
  f[W8y.P1H] = this[W8y.e90]();
  return f;
};

box2d.b2Body.prototype.ApplyForce = function (f, N, P) {
  var Z = "m8a",
      W = "Y8a",
      l = "c8a",
      m = "P8a";
  P = P || W8y.f5k;

  if (W8y[m](this[W8y.b5T], box2d[W8y.A4M][W8y.r4T])) {
    return;
  }

  if (P && W8y[l](this[W8y.o37] & box2d[W8y.D8H][W8y.g8M], W8y.u8Q)) {
    this[W8y.U5H](W8y.f5k);
  }

  if (W8y[W](this[W8y.o37], box2d[W8y.D8H][W8y.g8M])) {
    this[W8y.c2r][W8y.T9T] += f[W8y.T9T];
    this[W8y.c2r][W8y.Z9T] += f[W8y.Z9T];
    this[W8y.P50] += W8y[Z]((N[W8y.T9T] - this[W8y.i6k][W8y.a30][W8y.T9T]) * f[W8y.Z9T], (N[W8y.Z9T] - this[W8y.i6k][W8y.a30][W8y.Z9T]) * f[W8y.T9T]);
  }
};

box2d.b2Body.prototype.ApplyForceToCenter = function (f, N) {
  var P = "k8a",
      Z = "C8a",
      W = "x8a";
  N = N || W8y.f5k;

  if (W8y[W](this[W8y.b5T], box2d[W8y.A4M][W8y.r4T])) {
    return;
  }

  if (N && W8y[Z](this[W8y.o37] & box2d[W8y.D8H][W8y.g8M], W8y.u8Q)) {
    this[W8y.U5H](W8y.f5k);
  }

  if (W8y[P](this[W8y.o37], box2d[W8y.D8H][W8y.g8M])) {
    this[W8y.c2r][W8y.T9T] += f[W8y.T9T];
    this[W8y.c2r][W8y.Z9T] += f[W8y.Z9T];
  }
};

box2d.b2Body.prototype.ApplyTorque = function (f, N) {
  var P = "I8a",
      Z = "j8a",
      W = "Q8a";
  N = N || W8y.f5k;

  if (W8y[W](this[W8y.b5T], box2d[W8y.A4M][W8y.r4T])) {
    return;
  }

  if (N && W8y[Z](this[W8y.o37] & box2d[W8y.D8H][W8y.g8M], W8y.u8Q)) {
    this[W8y.U5H](W8y.f5k);
  }

  if (W8y[P](this[W8y.o37], box2d[W8y.D8H][W8y.g8M])) {
    this[W8y.P50] += f;
  }
};

box2d.b2Body.prototype.ApplyLinearImpulse = function (f, N, P) {
  var Z = "A8a",
      W = "G8a",
      l = "v8a",
      m = "M8a",
      C = "E8a",
      n = "R8a";
  P = P || W8y.f5k;

  if (W8y[n](this[W8y.b5T], box2d[W8y.A4M][W8y.r4T])) {
    return;
  }

  if (P && W8y[C](this[W8y.o37] & box2d[W8y.D8H][W8y.g8M], W8y.u8Q)) {
    this[W8y.U5H](W8y.f5k);
  }

  if (W8y[m](this[W8y.o37], box2d[W8y.D8H][W8y.g8M])) {
    this[W8y.b3r][W8y.T9T] += W8y[l](this[W8y.k86], f[W8y.T9T]);
    this[W8y.b3r][W8y.Z9T] += W8y[W](this[W8y.k86], f[W8y.Z9T]);
    this[W8y.t77] += W8y[Z](this[W8y.M7H], (N[W8y.T9T] - this[W8y.i6k][W8y.a30][W8y.T9T]) * f[W8y.Z9T] - (N[W8y.Z9T] - this[W8y.i6k][W8y.a30][W8y.Z9T]) * f[W8y.T9T]);
  }
};

box2d.b2Body.prototype.ApplyAngularImpulse = function (f, N) {
  var P = "s6a",
      Z = "X6a",
      W = "N6a",
      l = "w6a";
  N = N || W8y.f5k;

  if (W8y[l](this[W8y.b5T], box2d[W8y.A4M][W8y.r4T])) {
    return;
  }

  if (N && W8y[W](this[W8y.o37] & box2d[W8y.D8H][W8y.g8M], W8y.u8Q)) {
    this[W8y.U5H](W8y.f5k);
  }

  if (W8y[Z](this[W8y.o37], box2d[W8y.D8H][W8y.g8M])) {
    this[W8y.t77] += W8y[P](this[W8y.M7H], f);
  }
};

box2d.b2Body.prototype.GetMass = function () {
  return this[W8y.Z7T];
};

box2d.b2Body.prototype.GetInertia = function () {
  var f = "b6a";
  return this[W8y.j0r] + W8y[f](this[W8y.Z7T], box2d[W8y.o27](this[W8y.i6k][W8y.O8Q], this[W8y.i6k][W8y.O8Q]));
};

box2d.b2Body.prototype.GetMassData = function (f) {
  var N = "J6a";
  f[W8y.T3r] = this[W8y.Z7T];
  f[W8y.T10] = this[W8y.j0r] + W8y[N](this[W8y.Z7T], box2d[W8y.o27](this[W8y.i6k][W8y.O8Q], this[W8y.i6k][W8y.O8Q]));
  f[W8y.u6M][W8y.k97](this[W8y.i6k][W8y.O8Q]);
  return f;
};

box2d.b2Body.prototype.SetMassData = function (f) {
  var N = "p6a",
      P = "L6a",
      Z = "u6a",
      W = "d6a",
      l = "a6a",
      m = "e6a",
      C = "r6a",
      n = "H6a",
      k = "K6a",
      H = "n6a";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[H](this[W8y.s1H][W8y.C3k](), W8y.G0T));
  }

  if (W8y[k](this[W8y.s1H][W8y.C3k](), W8y.f5k)) {
    return;
  }

  if (W8y[n](this[W8y.b5T], box2d[W8y.A4M][W8y.r4T])) {
    return;
  }

  this[W8y.k86] = W8y.u8Q;
  this[W8y.j0r] = W8y.u8Q;
  this[W8y.M7H] = W8y.u8Q;
  this[W8y.Z7T] = f[W8y.T3r];

  if (W8y[C](this[W8y.Z7T], W8y.u8Q)) {
    this[W8y.Z7T] = W8y.D8Q;
  }

  this[W8y.k86] = W8y[m](W8y.D8Q, this[W8y.Z7T]);

  if (W8y[l](f[W8y.T10], W8y.u8Q) && W8y[W](this[W8y.o37] & box2d[W8y.D8H][W8y.f47], W8y.u8Q)) {
    this[W8y.j0r] = W8y[Z](f[W8y.T10], this[W8y.Z7T] * box2d[W8y.o27](f[W8y.u6M], f[W8y.u6M]));

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[P](this[W8y.j0r], W8y.u8Q));
    }

    this[W8y.M7H] = W8y[N](W8y.D8Q, this[W8y.j0r]);
  }

  var i = box2d.b2Body.prototype.SetMassData.s_oldCenter.Copy(this[W8y.i6k][W8y.a30]);
  this[W8y.i6k][W8y.O8Q][W8y.k97](f[W8y.u6M]);
  box2d[W8y.o10](this[W8y.Z4M], this[W8y.i6k][W8y.O8Q], this[W8y.i6k][W8y.a30]);
  this[W8y.i6k][W8y.K8Q][W8y.k97](this[W8y.i6k][W8y.a30]);
  box2d[W8y.S7T](this[W8y.b3r], this[W8y.t77], box2d[W8y.x8T](this[W8y.i6k][W8y.a30], i, box2d[W8y.p7T][W8y.t7M]), this[W8y.b3r]);
};

box2d.b2Body.prototype.SetMassData.s_oldCenter = new box2d[W8y.p7T]();

box2d.b2Body.prototype.ResetMassData = function () {
  var f = "o5a",
      N = "q5a",
      P = "i5a",
      Z = "T5a",
      W = "O5a",
      l = "V5a",
      m = "g5a",
      C = "l5a",
      n = "W5a",
      k = "GetMassData",
      H = "Z5a",
      i = "U5a",
      Q = "y5a",
      e = "F6a";
  this[W8y.Z7T] = W8y.u8Q;
  this[W8y.k86] = W8y.u8Q;
  this[W8y.j0r] = W8y.u8Q;
  this[W8y.M7H] = W8y.u8Q;
  this[W8y.i6k][W8y.O8Q][W8y.j6k]();

  if (W8y[e](this[W8y.b5T], box2d[W8y.A4M][W8y.d4k]) || W8y[Q](this[W8y.b5T], box2d[W8y.A4M][W8y.J76])) {
    this[W8y.i6k][W8y.K8Q][W8y.k97](this[W8y.Z4M][W8y.t60]);
    this[W8y.i6k][W8y.a30][W8y.k97](this[W8y.Z4M][W8y.t60]);
    this[W8y.i6k][W8y.b8T] = this[W8y.i6k][W8y.U30];
    return;
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[i](this[W8y.b5T], box2d[W8y.A4M][W8y.r4T]));
  }

  var j = box2d.b2Body.prototype.ResetMassData.s_localCenter.SetZero();

  for (var o = this[W8y.l8H]; o; o = o[W8y.X66]) {
    if (W8y[H](o[W8y.R0T], W8y.u8Q)) {
      continue;
    }

    var S = o[k](box2d.b2Body.prototype.ResetMassData.s_massData);
    this[W8y.Z7T] += S[W8y.T3r];
    j[W8y.T9T] += W8y[n](S[W8y.u6M][W8y.T9T], S[W8y.T3r]);
    j[W8y.Z9T] += W8y[C](S[W8y.u6M][W8y.Z9T], S[W8y.T3r]);
    this[W8y.j0r] += S[W8y.T10];
  }

  if (W8y[m](this[W8y.Z7T], W8y.u8Q)) {
    this[W8y.k86] = W8y[l](W8y.D8Q, this[W8y.Z7T]);
    j[W8y.T9T] *= this[W8y.k86];
    j[W8y.Z9T] *= this[W8y.k86];
  } else {
    this[W8y.Z7T] = W8y.D8Q;
    this[W8y.k86] = W8y.D8Q;
  }

  if (W8y[W](this[W8y.j0r], W8y.u8Q) && W8y[Z](this[W8y.o37] & box2d[W8y.D8H][W8y.f47], W8y.u8Q)) {
    this[W8y.j0r] -= W8y[P](this[W8y.Z7T], box2d[W8y.o27](j, j));

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[N](this[W8y.j0r], W8y.u8Q));
    }

    this[W8y.M7H] = W8y[f](W8y.D8Q, this[W8y.j0r]);
  } else {
    this[W8y.j0r] = W8y.u8Q;
    this[W8y.M7H] = W8y.u8Q;
  }

  var d = box2d.b2Body.prototype.ResetMassData.s_oldCenter.Copy(this[W8y.i6k][W8y.a30]);
  this[W8y.i6k][W8y.O8Q][W8y.k97](j);
  box2d[W8y.o10](this[W8y.Z4M], this[W8y.i6k][W8y.O8Q], this[W8y.i6k][W8y.a30]);
  this[W8y.i6k][W8y.K8Q][W8y.k97](this[W8y.i6k][W8y.a30]);
  box2d[W8y.S7T](this[W8y.b3r], this[W8y.t77], box2d[W8y.x8T](this[W8y.i6k][W8y.a30], d, box2d[W8y.p7T][W8y.t7M]), this[W8y.b3r]);
};

box2d.b2Body.prototype.ResetMassData.s_localCenter = new box2d[W8y.p7T]();
box2d.b2Body.prototype.ResetMassData.s_oldCenter = new box2d[W8y.p7T]();
box2d.b2Body.prototype.ResetMassData.s_massData = new box2d[W8y.D37]();

box2d.b2Body.prototype.GetWorldPoint = function (f, N) {
  return box2d[W8y.o10](this[W8y.Z4M], f, N);
};

box2d.b2Body.prototype.GetWorldVector = function (f, N) {
  return box2d[W8y.x47](this[W8y.Z4M][W8y.b50], f, N);
};

box2d.b2Body.prototype.GetLocalPoint = function (f, N) {
  return box2d[W8y.a90](this[W8y.Z4M], f, N);
};

box2d.b2Body.prototype.GetLocalVector = function (f, N) {
  return box2d[W8y.b0M](this[W8y.Z4M][W8y.b50], f, N);
};

box2d.b2Body.prototype.GetLinearVelocityFromWorldPoint = function (f, N) {
  return box2d[W8y.S7T](this[W8y.b3r], this[W8y.t77], box2d[W8y.x8T](f, this[W8y.i6k][W8y.a30], box2d[W8y.p7T][W8y.t7M]), N);
};

box2d.b2Body.prototype.GetLinearVelocityFromLocalPoint = function (f, N) {
  return this[W8y.U40](this[W8y.I00](f, N), N);
};

box2d.b2Body.prototype.GetLinearDamping = function () {
  return this[W8y.N30];
};

box2d.b2Body.prototype.SetLinearDamping = function (f) {
  this[W8y.N30] = f;
};

box2d.b2Body.prototype.GetAngularDamping = function () {
  return this[W8y.o1k];
};

box2d.b2Body.prototype.SetAngularDamping = function (f) {
  this[W8y.o1k] = f;
};

box2d.b2Body.prototype.GetGravityScale = function () {
  return this[W8y.s5k];
};

box2d.b2Body.prototype.SetGravityScale = function (f) {
  this[W8y.s5k] = f;
};

box2d.b2Body.prototype.SetType = function (f) {
  var N = "z5a",
      P = "B5a",
      Z = "h5a",
      W = "D5a",
      l = "S5a";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](this[W8y.s1H][W8y.C3k](), W8y.G0T));
  }

  if (W8y[W](this[W8y.s1H][W8y.C3k](), W8y.f5k)) {
    return;
  }

  if (W8y[Z](this[W8y.b5T], f)) {
    return;
  }

  this[W8y.b5T] = f;
  this[W8y.G57]();

  if (W8y[P](this[W8y.b5T], box2d[W8y.A4M][W8y.d4k])) {
    this[W8y.b3r][W8y.j6k]();
    this[W8y.t77] = W8y.u8Q;
    this[W8y.i6k][W8y.b8T] = this[W8y.i6k][W8y.U30];
    this[W8y.i6k][W8y.K8Q][W8y.k97](this[W8y.i6k][W8y.a30]);
    this[W8y.w30]();
  }

  this[W8y.U5H](W8y.f5k);
  this[W8y.c2r][W8y.j6k]();
  this[W8y.P50] = W8y.u8Q;
  var m = this[W8y.h0H];

  while (m) {
    var C = m;
    m = m[W8y.T9k];
    this[W8y.s1H][W8y.C3H][W8y.t87](C[W8y.a5H]);
  }

  this[W8y.h0H] = W8y.z6k;
  var n = this[W8y.s1H][W8y.C3H][W8y.u7k];

  for (var k = this[W8y.l8H]; k; k = k[W8y.X66]) {
    var H = k[W8y.X7T];

    for (var i = W8y.u8Q; W8y[N](i, H); ++i) {
      n[W8y.e3T](k[W8y.t16][i][W8y.z5H]);
    }
  }
};

box2d.b2Body.prototype.GetType = function () {
  return this[W8y.b5T];
};

box2d.b2Body.prototype.SetBullet = function (f) {
  if (f) {
    this[W8y.o37] |= box2d[W8y.D8H][W8y.z7T];
  } else {
    this[W8y.o37] &= ~box2d[W8y.D8H][W8y.z7T];
  }
};

box2d.b2Body.prototype.IsBullet = function () {
  var f = "t5a";
  return W8y[f](this[W8y.o37] & box2d[W8y.D8H][W8y.z7T], box2d[W8y.D8H][W8y.z7T]);
};

box2d.b2Body.prototype.SetSleepingAllowed = function (f) {
  if (f) {
    this[W8y.o37] |= box2d[W8y.D8H][W8y.h2H];
  } else {
    this[W8y.o37] &= ~box2d[W8y.D8H][W8y.h2H];
    this[W8y.U5H](W8y.f5k);
  }
};

box2d.b2Body.prototype.IsSleepingAllowed = function () {
  var f = "f1d";
  return W8y[f](this[W8y.o37] & box2d[W8y.D8H][W8y.h2H], box2d[W8y.D8H][W8y.h2H]);
};

box2d.b2Body.prototype.SetAwake = function (f) {
  var N = "P1d";

  if (f) {
    if (W8y[N](this[W8y.o37] & box2d[W8y.D8H][W8y.g8M], W8y.u8Q)) {
      this[W8y.o37] |= box2d[W8y.D8H][W8y.g8M];
      this[W8y.M36] = W8y.u8Q;
    }
  } else {
    this[W8y.o37] &= ~box2d[W8y.D8H][W8y.g8M];
    this[W8y.M36] = W8y.u8Q;
    this[W8y.b3r][W8y.j6k]();
    this[W8y.t77] = W8y.u8Q;
    this[W8y.c2r][W8y.j6k]();
    this[W8y.P50] = W8y.u8Q;
  }
};

box2d.b2Body.prototype.IsAwake = function () {
  var f = "c1d";
  return W8y[f](this[W8y.o37] & box2d[W8y.D8H][W8y.g8M], box2d[W8y.D8H][W8y.g8M]);
};

box2d.b2Body.prototype.SetActive = function (f) {
  var N = "m1d",
      P = "Y1d";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[P](this[W8y.s1H][W8y.C3k](), W8y.G0T));
  }

  if (W8y[N](f, this[W8y.R4T]())) {
    return;
  }

  if (f) {
    this[W8y.o37] |= box2d[W8y.D8H][W8y.r80];
    var Z = this[W8y.s1H][W8y.C3H][W8y.u7k];

    for (var W = this[W8y.l8H]; W; W = W[W8y.X66]) {
      W[W8y.V0M](Z, this[W8y.Z4M]);
    }
  } else {
    this[W8y.o37] &= ~box2d[W8y.D8H][W8y.r80];
    var Z = this[W8y.s1H][W8y.C3H][W8y.u7k];

    for (var W = this[W8y.l8H]; W; W = W[W8y.X66]) {
      W[W8y.h6M](Z);
    }

    var l = this[W8y.h0H];

    while (l) {
      var m = l;
      l = l[W8y.T9k];
      this[W8y.s1H][W8y.C3H][W8y.t87](m[W8y.a5H]);
    }

    this[W8y.h0H] = W8y.z6k;
  }
};

box2d.b2Body.prototype.IsActive = function () {
  var f = "x1d";
  return W8y[f](this[W8y.o37] & box2d[W8y.D8H][W8y.r80], box2d[W8y.D8H][W8y.r80]);
};

box2d.b2Body.prototype.SetFixedRotation = function (f) {
  var N = "k1d",
      P = "C1d",
      Z = W8y[P](this[W8y.o37] & box2d[W8y.D8H][W8y.f47], box2d[W8y.D8H][W8y.f47]);

  if (W8y[N](Z, f)) {
    return;
  }

  if (f) {
    this[W8y.o37] |= box2d[W8y.D8H][W8y.f47];
  } else {
    this[W8y.o37] &= ~box2d[W8y.D8H][W8y.f47];
  }

  this[W8y.t77] = W8y.u8Q;
  this[W8y.G57]();
};

box2d.b2Body.prototype.IsFixedRotation = function () {
  var f = "Q1d";
  return W8y[f](this[W8y.o37] & box2d[W8y.D8H][W8y.f47], box2d[W8y.D8H][W8y.f47]);
};

box2d.b2Body.prototype.GetFixtureList = function () {
  return this[W8y.l8H];
};

box2d.b2Body.prototype.GetJointList = function () {
  return this[W8y.P8T];
};

box2d.b2Body.prototype.GetContactList = function () {
  return this[W8y.h0H];
};

box2d.b2Body.prototype.GetNext = function () {
  return this[W8y.X66];
};

box2d.b2Body.prototype.GetUserData = function () {
  return this[W8y.x8k];
};

box2d.b2Body.prototype.SetUserData = function (f) {
  this[W8y.x8k] = f;
};

box2d.b2Body.prototype.GetWorld = function () {
  return this[W8y.s1H];
};

box2d.b2Body.prototype.SynchronizeFixtures = function () {
  var f = box2d.b2Body.prototype.SynchronizeFixtures.s_xf1;
  f[W8y.b50][W8y.h70](this[W8y.i6k][W8y.b8T]);
  box2d[W8y.x47](f[W8y.b50], this[W8y.i6k][W8y.O8Q], f[W8y.t60]);
  box2d[W8y.x8T](this[W8y.i6k][W8y.K8Q], f[W8y.t60], f[W8y.t60]);
  var N = this[W8y.s1H][W8y.C3H][W8y.u7k];

  for (var P = this[W8y.l8H]; P; P = P[W8y.X66]) {
    P[W8y.W97](N, f, this[W8y.Z4M]);
  }
};

box2d.b2Body.prototype.SynchronizeFixtures.s_xf1 = new box2d[W8y.P70]();

box2d.b2Body.prototype.SynchronizeTransform = function () {
  this[W8y.Z4M][W8y.b50][W8y.h70](this[W8y.i6k][W8y.U30]);
  box2d[W8y.x47](this[W8y.Z4M][W8y.b50], this[W8y.i6k][W8y.O8Q], this[W8y.Z4M][W8y.t60]);
  box2d[W8y.x8T](this[W8y.i6k][W8y.a30], this[W8y.Z4M][W8y.t60], this[W8y.Z4M][W8y.t60]);
};

box2d.b2Body.prototype.ShouldCollide = function (f) {
  var N = "E1d",
      P = "R1d",
      Z = "I1d",
      W = "j1d";

  if (W8y[W](this[W8y.b5T], box2d[W8y.A4M][W8y.r4T]) && W8y[Z](f[W8y.b5T], box2d[W8y.A4M][W8y.r4T])) {
    return W8y.G0T;
  }

  for (var l = this[W8y.P8T]; l; l = l[W8y.T9k]) {
    if (W8y[P](l[W8y.a40], f)) {
      if (W8y[N](l[W8y.z4k][W8y.N96], W8y.G0T)) {
        return W8y.G0T;
      }
    }
  }

  return W8y.f5k;
};

box2d.b2Body.prototype.Advance = function (f) {
  this[W8y.i6k][W8y.e40](f);
  this[W8y.i6k][W8y.a30][W8y.k97](this[W8y.i6k][W8y.K8Q]);
  this[W8y.i6k][W8y.U30] = this[W8y.i6k][W8y.b8T];
  this[W8y.Z4M][W8y.b50][W8y.h70](this[W8y.i6k][W8y.U30]);
  box2d[W8y.x47](this[W8y.Z4M][W8y.b50], this[W8y.i6k][W8y.O8Q], this[W8y.Z4M][W8y.t60]);
  box2d[W8y.x8T](this[W8y.i6k][W8y.a30], this[W8y.Z4M][W8y.t60], this[W8y.Z4M][W8y.t60]);
};

box2d.b2Body.prototype.Dump = function () {
  var f = "  }\n",
      N = "  {\n",
      P = "  if (true)\n",
      Z = "  bodies[%d] = this.m_world.CreateBody(bd);\n",
      W = "  bd.gravityScale = %.15f;\n",
      l = "U4d",
      m = "  bd.active = %s;\n",
      C = "y4d",
      n = "  bd.bullet = %s;\n",
      k = "z1d",
      H = "  bd.fixedRotation = %s;\n",
      i = "B1d",
      Q = "  bd.awake = %s;\n",
      e = "M1d",
      j = "  bd.allowSleep = %s;\n",
      o = "  bd.angularDamping = %.15f;\n",
      S = "  bd.linearDamping = %.15f;\n",
      d = "  bd.angularVelocity = %.15f;\n",
      u = "  bd.linearVelocity.SetXY(%.15f, %.15f);\n",
      D = "  bd.angle = %.15f;\n",
      M = "  bd.position.SetXY(%.15f, %.15f);\n",
      y1 = "  bd.type = %s;\n",
      h = 'box2d.b2BodyType.b2_dynamicBody',
      E = 'box2d.b2BodyType.b2_kinematicBody',
      L = 'box2d.b2BodyType.b2_staticBody',
      w1 = "  /*box2d.b2BodyDef*/ var bd = new box2d.b2BodyDef();\n";

  if (box2d[W8y.F2k]) {
    var B = this[W8y.x5M];
    box2d[W8y.R50](W8y.d6T);
    box2d[W8y.R50](W8y.F4k);
    box2d[W8y.R50](w1);
    var N1 = W8y.Z50;

    switch (this[W8y.b5T]) {
      case box2d[W8y.A4M][W8y.d4k]:
        N1 = L;
        break;

      case box2d[W8y.A4M][W8y.J76]:
        N1 = E;
        break;

      case box2d[W8y.A4M][W8y.r4T]:
        N1 = h;
        break;

      default:
        if (box2d[W8y.l3H]) {
          box2d[W8y.X16](W8y.G0T);
        }

        break;
    }

    box2d[W8y.R50](y1, N1);
    box2d[W8y.R50](M, this[W8y.Z4M][W8y.t60][W8y.T9T], this[W8y.Z4M][W8y.t60][W8y.Z9T]);
    box2d[W8y.R50](D, this[W8y.i6k][W8y.U30]);
    box2d[W8y.R50](u, this[W8y.b3r][W8y.T9T], this[W8y.b3r][W8y.Z9T]);
    box2d[W8y.R50](d, this[W8y.t77]);
    box2d[W8y.R50](S, this[W8y.N30]);
    box2d[W8y.R50](o, this[W8y.o1k]);
    box2d[W8y.R50](j, W8y[e](this[W8y.o37], box2d[W8y.D8H][W8y.h2H]) ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](Q, W8y[i](this[W8y.o37], box2d[W8y.D8H][W8y.g8M]) ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](H, W8y[k](this[W8y.o37], box2d[W8y.D8H][W8y.f47]) ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](n, W8y[C](this[W8y.o37], box2d[W8y.D8H][W8y.z7T]) ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](m, W8y[l](this[W8y.o37], box2d[W8y.D8H][W8y.r80]) ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W, this[W8y.s5k]);
    box2d[W8y.R50](W8y.K2M);
    box2d[W8y.R50](Z, this[W8y.x5M]);
    box2d[W8y.R50](W8y.K2M);

    for (var f1 = this[W8y.l8H]; f1; f1 = f1[W8y.X66]) {
      box2d[W8y.R50](P);
      box2d[W8y.R50](N);
      f1[W8y.l1H](B);
      box2d[W8y.R50](f);
    }

    box2d[W8y.R50](W8y.b8k);
  }
};

box2d.b2Body.prototype.GetControllerList = function () {
  return this[W8y.U6T];
};

box2d.b2Body.prototype.GetControllerCount = function () {
  return this[W8y.H3T];
};

goog[W8y.U3T](W8y.A4k);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Draw');
goog[W8y.V20]('box2d.b2ContactManager');
goog[W8y.V20]('box2d.b2ContactSolver');
goog[W8y.V20]('box2d.b2Island');
goog[W8y.V20]('box2d.b2Body');
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2Collision');
goog[W8y.V20]('box2d.b2TimeStep');
goog[W8y.V20]('box2d.b2WorldCallbacks');
goog[W8y.V20]('box2d.b2JointFactory');
box2d[W8y.P4H] = {
  e_none: W8y.u8Q,
  e_newFixture: 0x1,
  e_locked: 0x2,
  e_clearForces: 0x4
};
goog[W8y.g5H](box2d[W8y.P4H], W8y.m3H, box2d[W8y.P4H][W8y.Y8H]);
goog[W8y.g5H](box2d[W8y.P4H], W8y.D0H, box2d[W8y.P4H][W8y.N36]);
goog[W8y.g5H](box2d[W8y.P4H], W8y.o46, box2d[W8y.P4H][W8y.p3r]);
goog[W8y.g5H](box2d[W8y.P4H], W8y.N1M, box2d[W8y.P4H][W8y.E10]);

box2d[W8y.E90] = function (f) {
  this[W8y.o37] = box2d[W8y.P4H][W8y.E10];
  this[W8y.C3H] = new box2d[W8y.F9T]();
  this[W8y.C9T] = f[W8y.l26]();
  this[W8y.k77] = new box2d[W8y.p7T]();
  this[W8y.U47] = W8y.f5k;
  this[W8y.a56] = W8y.z6k;
  this[W8y.w16] = W8y.z6k;
  this[W8y.l27] = W8y.f5k;
  this[W8y.U2r] = W8y.f5k;
  this[W8y.Z1T] = W8y.G0T;
  this[W8y.L0T] = W8y.f5k;
  this[W8y.o56] = new box2d[W8y.o30]();
  this[W8y.n97] = new box2d[W8y.l00]();
  this[W8y.F0M] = new Array();
};

box2d.b2World.prototype.m_flags = box2d[W8y.P4H][W8y.Y8H];
box2d.b2World.prototype.m_contactManager = W8y.z6k;
box2d.b2World.prototype.m_bodyList = W8y.z6k;
box2d.b2World.prototype.m_jointList = W8y.z6k;
box2d.b2World.prototype.m_bodyCount = W8y.u8Q;
box2d.b2World.prototype.m_jointCount = W8y.u8Q;
box2d.b2World.prototype.m_gravity = W8y.z6k;
box2d.b2World.prototype.m_out_gravity = W8y.z6k;
box2d.b2World.prototype.m_allowSleep = W8y.f5k;
box2d.b2World.prototype.m_destructionListener = W8y.z6k;
box2d.b2World.prototype.m_debugDraw = W8y.z6k;
box2d.b2World.prototype.m_inv_dt0 = W8y.u8Q;
box2d.b2World.prototype.m_warmStarting = W8y.f5k;
box2d.b2World.prototype.m_continuousPhysics = W8y.f5k;
box2d.b2World.prototype.m_subStepping = W8y.G0T;
box2d.b2World.prototype.m_stepComplete = W8y.f5k;
box2d.b2World.prototype.m_profile = W8y.z6k;
box2d.b2World.prototype.m_island = W8y.z6k;
box2d.b2World.prototype.s_stack = W8y.z6k;
box2d.b2World.prototype.m_controllerList = W8y.z6k;
box2d.b2World.prototype.m_controllerCount = W8y.u8Q;

box2d.b2World.prototype.SetAllowSleeping = function (f) {
  var N = "W4d",
      P = "Z4d";

  if (W8y[P](f, this[W8y.U47])) {
    return;
  }

  this[W8y.U47] = f;

  if (W8y[N](this[W8y.U47], W8y.G0T)) {
    for (var Z = this[W8y.I80]; Z; Z = Z[W8y.X66]) {
      Z[W8y.U5H](W8y.f5k);
    }
  }
};

box2d.b2World.prototype.GetAllowSleeping = function () {
  return this[W8y.U47];
};

box2d.b2World.prototype.SetWarmStarting = function (f) {
  this[W8y.l27] = f;
};

box2d.b2World.prototype.GetWarmStarting = function () {
  return this[W8y.l27];
};

box2d.b2World.prototype.SetContinuousPhysics = function (f) {
  this[W8y.U2r] = f;
};

box2d.b2World.prototype.GetContinuousPhysics = function () {
  return this[W8y.U2r];
};

box2d.b2World.prototype.SetSubStepping = function (f) {
  this[W8y.Z1T] = f;
};

box2d.b2World.prototype.GetSubStepping = function () {
  return this[W8y.Z1T];
};

box2d.b2World.prototype.GetBodyList = function () {
  return this[W8y.I80];
};

box2d.b2World.prototype.GetJointList = function () {
  return this[W8y.P8T];
};

box2d.b2World.prototype.GetContactList = function () {
  return this[W8y.C3H][W8y.h0H];
};

box2d.b2World.prototype.GetBodyCount = function () {
  return this[W8y.j9M];
};

box2d.b2World.prototype.GetJointCount = function () {
  return this[W8y.w70];
};

box2d.b2World.prototype.GetContactCount = function () {
  return this[W8y.C3H][W8y.g5Q];
};

box2d.b2World.prototype.SetGravity = function (f, N) {
  var P = "g4d",
      Z = "l4d";
  N = N || W8y.f5k;

  if (W8y[Z](this[W8y.C9T][W8y.T9T], f[W8y.T9T]) || W8y[P](this[W8y.C9T][W8y.Z9T], f[W8y.Z9T])) {
    this[W8y.C9T][W8y.k97](f);

    if (N) {
      for (var W = this[W8y.I80]; W; W = W[W8y.X66]) {
        W[W8y.U5H](W8y.f5k);
      }
    }
  }
};

box2d.b2World.prototype.GetGravity = function (f) {
  f = f || this[W8y.k77];
  return f[W8y.k97](this[W8y.C9T]);
};

box2d.b2World.prototype.IsLocked = function () {
  var f = "V4d";
  return W8y[f](this[W8y.o37] & box2d[W8y.P4H][W8y.p3r], W8y.u8Q);
};

box2d.b2World.prototype.SetAutoClearForces = function (f) {
  if (f) {
    this[W8y.o37] |= box2d[W8y.P4H][W8y.E10];
  } else {
    this[W8y.o37] &= ~box2d[W8y.P4H][W8y.E10];
  }
};

box2d.b2World.prototype.GetAutoClearForces = function () {
  var f = "O4d";
  return W8y[f](this[W8y.o37] & box2d[W8y.P4H][W8y.E10], box2d[W8y.P4H][W8y.E10]);
};

box2d.b2World.prototype.GetContactManager = function () {
  return this[W8y.C3H];
};

box2d.b2World.prototype.GetProfile = function () {
  return this[W8y.o56];
};

box2d.b2World.prototype.SetDestructionListener = function (f) {
  this[W8y.a56] = f;
};

box2d.b2World.prototype.SetContactFilter = function (f) {
  this[W8y.C3H][W8y.z0k] = f;
};

box2d.b2World.prototype.SetContactListener = function (f) {
  this[W8y.C3H][W8y.t8k] = f;
};

box2d.b2World.prototype.SetDebugDraw = function (f) {
  this[W8y.w16] = f;
};

box2d.b2World.prototype.CreateBody = function (f) {
  var N = "T4d";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](this[W8y.C3k](), W8y.G0T));
  }

  if (this[W8y.C3k]()) {
    return W8y.z6k;
  }

  var P = new box2d[W8y.F6T](f, this);
  P[W8y.h1r] = W8y.z6k;
  P[W8y.X66] = this[W8y.I80];

  if (this[W8y.I80]) {
    this[W8y.I80][W8y.h1r] = P;
  }

  this[W8y.I80] = P;
  ++this[W8y.j9M];
  return P;
};

box2d.b2World.prototype.DestroyBody = function (f) {
  var N = "o4d",
      P = "SayGoodbyeFixture",
      Z = "SayGoodbyeJoint",
      W = "q4d",
      l = "i4d";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[l](this[W8y.j9M], W8y.u8Q));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](this[W8y.C3k](), W8y.G0T));
  }

  if (this[W8y.C3k]()) {
    return;
  }

  var m = f[W8y.P8T];

  while (m) {
    var C = m;
    m = m[W8y.T9k];

    if (this[W8y.a56]) {
      this[W8y.a56][Z](C[W8y.z4k]);
    }

    this[W8y.o7k](C[W8y.z4k]);
    f[W8y.P8T] = m;
  }

  f[W8y.P8T] = W8y.z6k;
  var n = f[W8y.U6T];

  while (n) {
    var k = n;
    n = n[W8y.l16];
    k[W8y.a5M][W8y.Z0r](f);
  }

  var H = f[W8y.h0H];

  while (H) {
    var i = H;
    H = H[W8y.T9k];
    this[W8y.C3H][W8y.t87](i[W8y.a5H]);
  }

  f[W8y.h0H] = W8y.z6k;
  var Q = f[W8y.l8H];

  while (Q) {
    var e = Q;
    Q = Q[W8y.X66];

    if (this[W8y.a56]) {
      this[W8y.a56][P](e);
    }

    e[W8y.h6M](this[W8y.C3H][W8y.u7k]);
    e[W8y.t87]();
    f[W8y.l8H] = Q;
    f[W8y.V26] -= W8y.D8Q;
  }

  f[W8y.l8H] = W8y.z6k;
  f[W8y.V26] = W8y.u8Q;

  if (f[W8y.h1r]) {
    f[W8y.h1r][W8y.X66] = f[W8y.X66];
  }

  if (f[W8y.X66]) {
    f[W8y.X66][W8y.h1r] = f[W8y.h1r];
  }

  if (W8y[N](f, this[W8y.I80])) {
    this[W8y.I80] = f[W8y.X66];
  }

  --this[W8y.j9M];
};

box2d.b2World.prototype.CreateJoint = function (f) {
  var N = "h4d",
      P = "D4d",
      Z = "S4d";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[Z](this[W8y.C3k](), W8y.G0T));
  }

  if (this[W8y.C3k]()) {
    return W8y.z6k;
  }

  var W = box2d[W8y.c66][W8y.D70](f, W8y.z6k);
  W[W8y.h1r] = W8y.z6k;
  W[W8y.X66] = this[W8y.P8T];

  if (this[W8y.P8T]) {
    this[W8y.P8T][W8y.h1r] = W;
  }

  this[W8y.P8T] = W;
  ++this[W8y.w70];
  W[W8y.O30][W8y.z4k] = W;
  W[W8y.O30][W8y.a40] = W[W8y.v27];
  W[W8y.O30][W8y.j56] = W8y.z6k;
  W[W8y.O30][W8y.T9k] = W[W8y.l37][W8y.P8T];
  if (W[W8y.l37][W8y.P8T]) W[W8y.l37][W8y.P8T][W8y.j56] = W[W8y.O30];
  W[W8y.l37][W8y.P8T] = W[W8y.O30];
  W[W8y.Z30][W8y.z4k] = W;
  W[W8y.Z30][W8y.a40] = W[W8y.l37];
  W[W8y.Z30][W8y.j56] = W8y.z6k;
  W[W8y.Z30][W8y.T9k] = W[W8y.v27][W8y.P8T];
  if (W[W8y.v27][W8y.P8T]) W[W8y.v27][W8y.P8T][W8y.j56] = W[W8y.Z30];
  W[W8y.v27][W8y.P8T] = W[W8y.Z30];
  var l = f[W8y.F6Q],
      m = f[W8y.b5Q];

  if (W8y[P](f[W8y.D07], W8y.G0T)) {
    var C = m[W8y.I57]();

    while (C) {
      if (W8y[N](C[W8y.a40], l)) {
        C[W8y.a5H][W8y.c47]();
      }

      C = C[W8y.T9k];
    }
  }

  return W;
};

box2d.b2World.prototype.DestroyJoint = function (f) {
  var N = "Y2d",
      P = "c2d",
      Z = "P2d",
      W = "f2d",
      l = "t4d",
      m = "z4d",
      C = "B4d";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[C](this[W8y.C3k](), W8y.G0T));
  }

  if (this[W8y.C3k]()) {
    return;
  }

  var n = f[W8y.N96];

  if (f[W8y.h1r]) {
    f[W8y.h1r][W8y.X66] = f[W8y.X66];
  }

  if (f[W8y.X66]) {
    f[W8y.X66][W8y.h1r] = f[W8y.h1r];
  }

  if (W8y[m](f, this[W8y.P8T])) {
    this[W8y.P8T] = f[W8y.X66];
  }

  var k = f[W8y.l37],
      H = f[W8y.v27];
  k[W8y.U5H](W8y.f5k);
  H[W8y.U5H](W8y.f5k);

  if (f[W8y.O30][W8y.j56]) {
    f[W8y.O30][W8y.j56][W8y.T9k] = f[W8y.O30][W8y.T9k];
  }

  if (f[W8y.O30][W8y.T9k]) {
    f[W8y.O30][W8y.T9k][W8y.j56] = f[W8y.O30][W8y.j56];
  }

  if (W8y[l](f[W8y.O30], k[W8y.P8T])) {
    k[W8y.P8T] = f[W8y.O30][W8y.T9k];
  }

  f[W8y.O30][W8y.j56] = W8y.z6k;
  f[W8y.O30][W8y.T9k] = W8y.z6k;

  if (f[W8y.Z30][W8y.j56]) {
    f[W8y.Z30][W8y.j56][W8y.T9k] = f[W8y.Z30][W8y.T9k];
  }

  if (f[W8y.Z30][W8y.T9k]) {
    f[W8y.Z30][W8y.T9k][W8y.j56] = f[W8y.Z30][W8y.j56];
  }

  if (W8y[W](f[W8y.Z30], H[W8y.P8T])) {
    H[W8y.P8T] = f[W8y.Z30][W8y.T9k];
  }

  f[W8y.Z30][W8y.j56] = W8y.z6k;
  f[W8y.Z30][W8y.T9k] = W8y.z6k;
  box2d[W8y.c66][W8y.t87](f, W8y.z6k);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[Z](this[W8y.w70], W8y.u8Q));
  }

  --this[W8y.w70];

  if (W8y[P](n, W8y.G0T)) {
    var i = H[W8y.I57]();

    while (i) {
      if (W8y[N](i[W8y.a40], k)) {
        i[W8y.a5H][W8y.c47]();
      }

      i = i[W8y.T9k];
    }
  }
};

box2d.b2World.prototype.Solve = function (f) {
  var N = "K3d",
      P = "n3d",
      Z = "J3d",
      W = "b3d",
      l = "s3d",
      m = "X3d",
      C = "N3d",
      n = "AddJoint",
      k = "w3d",
      H = "A2d",
      i = "G2d",
      Q = "v2d",
      e = "M2d",
      j = "E2d",
      o = "R2d",
      S = "I2d",
      d = "j2d",
      u = "Q2d",
      D = "k2d",
      M = "C2d",
      y1 = "x2d",
      h = "m2d",
      E = "m_islandFlag";

  for (var L = this[W8y.U6T]; L; L = L[W8y.X66]) {
    L[W8y.p00](f);
  }

  this[W8y.o56][W8y.E6k] = 0;
  this[W8y.o56][W8y.M8H] = 0;
  this[W8y.o56][W8y.W4r] = 0;
  var w1 = this[W8y.n97];
  w1[W8y.Y6T](this[W8y.j9M], this[W8y.C3H][W8y.g5Q], this[W8y.w70], null, this[W8y.C3H][W8y.t8k]);

  for (var B = this[W8y.I80]; B; B = B[W8y.X66]) {
    B[W8y.o37] &= ~box2d[W8y.D8H][W8y.H0H];
  }

  for (var N1 = this[W8y.C3H][W8y.h0H]; N1; N1 = N1[W8y.X66]) {
    N1[W8y.o37] &= ~box2d[W8y.S57][W8y.H0H];
  }

  for (var f1 = this[W8y.P8T]; f1; f1 = f1[W8y.X66]) {
    f1[E] = false;
  }

  var c1 = this[W8y.j9M],
      l1 = this[W8y.F0M];

  for (var P1 = this[W8y.I80]; P1; P1 = P1[W8y.X66]) {
    if (W8y[h](P1[W8y.o37], box2d[W8y.D8H][W8y.H0H])) {
      continue;
    }

    if (W8y[y1](P1[W8y.h0r](), false) || W8y[M](P1[W8y.R4T](), false)) {
      continue;
    }

    if (W8y[D](P1[W8y.E1k](), box2d[W8y.A4M][W8y.d4k])) {
      continue;
    }

    w1[W8y.a7M]();
    var s1 = 0;
    l1[s1++] = P1;
    P1[W8y.o37] |= box2d[W8y.D8H][W8y.H0H];

    while (W8y[u](s1, 0)) {
      var B = l1[--s1];

      if (box2d[W8y.l3H]) {
        box2d[W8y.X16](W8y[d](B[W8y.R4T](), true));
      }

      w1[W8y.Q4r](B);
      B[W8y.U5H](true);

      if (W8y[S](B[W8y.E1k](), box2d[W8y.A4M][W8y.d4k])) {
        continue;
      }

      for (var b1 = B[W8y.h0H]; b1; b1 = b1[W8y.T9k]) {
        var m1 = b1[W8y.a5H];

        if (W8y[o](m1[W8y.o37], box2d[W8y.S57][W8y.H0H])) {
          continue;
        }

        if (W8y[j](m1[W8y.C20](), false) || W8y[e](m1[W8y.h06](), false)) {
          continue;
        }

        var W1 = m1[W8y.a10][W8y.U90],
            J1 = m1[W8y.G10][W8y.U90];

        if (W1 || J1) {
          continue;
        }

        w1[W8y.h80](m1);
        m1[W8y.o37] |= box2d[W8y.S57][W8y.H0H];
        var C1 = b1[W8y.a40];

        if (W8y[Q](C1[W8y.o37], box2d[W8y.D8H][W8y.H0H])) {
          continue;
        }

        if (box2d[W8y.l3H]) {
          box2d[W8y.X16](W8y[i](s1, c1));
        }

        l1[s1++] = C1;
        C1[W8y.o37] |= box2d[W8y.D8H][W8y.H0H];
      }

      for (var x1 = B[W8y.P8T]; x1; x1 = x1[W8y.T9k]) {
        if (W8y[H](x1[W8y.z4k][E], true)) {
          continue;
        }

        var C1 = x1[W8y.a40];

        if (W8y[k](C1[W8y.R4T](), false)) {
          continue;
        }

        w1[n](x1[W8y.z4k]);
        x1[W8y.z4k][E] = true;

        if (W8y[C](C1[W8y.o37], box2d[W8y.D8H][W8y.H0H])) {
          continue;
        }

        if (box2d[W8y.l3H]) {
          box2d[W8y.X16](W8y[m](s1, c1));
        }

        l1[s1++] = C1;
        C1[W8y.o37] |= box2d[W8y.D8H][W8y.H0H];
      }
    }

    var T1 = new box2d[W8y.o30]();
    w1[W8y.Y3k](T1, f, this[W8y.C9T], this[W8y.U47]);
    this[W8y.o56][W8y.E6k] += T1[W8y.E6k];
    this[W8y.o56][W8y.M8H] += T1[W8y.M8H];
    this[W8y.o56][W8y.W4r] += T1[W8y.W4r];

    for (var K1 = 0; W8y[l](K1, w1[W8y.j9M]); ++K1) {
      var B = w1[W8y.H0k][K1];

      if (W8y[W](B[W8y.E1k](), box2d[W8y.A4M][W8y.d4k])) {
        B[W8y.o37] &= ~box2d[W8y.D8H][W8y.H0H];
      }
    }
  }

  for (var K1 = 0; W8y[Z](K1, l1.length); ++K1) {
    if (!l1[K1]) break;
    l1[K1] = null;
  }

  {
    var V1 = new box2d[W8y.F67]();

    for (var B = this[W8y.I80]; B; B = B[W8y.X66]) {
      if (W8y[P](B[W8y.o37] & box2d[W8y.D8H][W8y.H0H], 0)) {
        continue;
      }

      if (W8y[N](B[W8y.E1k](), box2d[W8y.A4M][W8y.d4k])) {
        continue;
      }

      B[W8y.w30]();
    }

    this[W8y.C3H][W8y.J4H]();
    this[W8y.o56][W8y.Z2M] = V1[W8y.n56]();
  }
};

box2d.b2World.prototype.SolveTOI = function (f) {
  var N = "y9d",
      P = "F7d",
      Z = "p7d",
      W = "L7d",
      l = "u7d",
      m = "d7d",
      C = "a7d",
      n = "e7d",
      k = "r7d",
      H = "H7d",
      i = "K7d",
      Q = "n7d",
      e = "J7d",
      j = "b7d",
      o = "s7d",
      S = "X7d",
      d = "N7d",
      u = "w7d",
      D = "F0d",
      M = "SetEnabled",
      y1 = "p0d",
      h = "h0d",
      E = "D0d",
      L = "S0d",
      w1 = "o0d",
      B = "q0d",
      N1 = "i0d",
      f1 = "T0d",
      c1 = "O0d",
      l1 = "V0d",
      P1 = "g0d",
      s1 = "l0d",
      b1 = "W0d",
      m1 = "Z0d",
      W1 = "U0d",
      J1 = "y0d",
      C1 = "F3d",
      x1 = "p3d",
      T1 = "L3d",
      K1 = "u3d",
      V1 = "d3d",
      Q1 = "a3d",
      D1 = "e3d",
      d1 = "m_toi",
      u1 = "r3d",
      j1 = "H3d",
      G1 = this[W8y.n97];
  G1[W8y.Y6T](W8y[j1](W8y.d8Q, box2d[W8y.F1r]), box2d[W8y.F1r], W8y.u8Q, W8y.z6k, this[W8y.C3H][W8y.t8k]);

  if (this[W8y.L0T]) {
    for (var I1 = this[W8y.I80]; I1; I1 = I1[W8y.X66]) {
      I1[W8y.o37] &= ~box2d[W8y.D8H][W8y.H0H];
      I1[W8y.i6k][W8y.F2T] = W8y.u8Q;
    }

    for (var e1 = this[W8y.C3H][W8y.h0H]; e1; e1 = e1[W8y.X66]) {
      e1[W8y.o37] &= ~W8y[u1](box2d[W8y.S57][W8y.j16], box2d[W8y.S57][W8y.H0H]);
      e1[W8y.K3H] = W8y.u8Q;
      e1[d1] = W8y.D8Q;
    }
  }

  for (;;) {
    var S1 = W8y.z6k,
        B1 = W8y.D8Q;

    for (var e1 = this[W8y.C3H][W8y.h0H]; e1; e1 = e1[W8y.X66]) {
      if (W8y[D1](e1[W8y.C20](), W8y.G0T)) {
        continue;
      }

      if (W8y[Q1](e1[W8y.K3H], box2d[W8y.p8H])) {
        continue;
      }

      var a1 = W8y.D8Q;

      if (W8y[V1](e1[W8y.o37], box2d[W8y.S57][W8y.j16])) {
        a1 = e1[d1];
      } else {
        var F1 = e1[W8y.A4T](),
            n4 = e1[W8y.O2T]();

        if (F1[W8y.C0M]() || n4[W8y.C0M]()) {
          continue;
        }

        var h1 = F1[W8y.b86](),
            t1 = n4[W8y.b86](),
            R4 = h1[W8y.b5T],
            r4 = t1[W8y.b5T];

        if (box2d[W8y.l3H]) {
          box2d[W8y.X16](W8y[K1](R4, box2d[W8y.A4M][W8y.r4T]) || W8y[T1](r4, box2d[W8y.A4M][W8y.r4T]));
        }

        var w4 = h1[W8y.h0r]() && W8y[x1](R4, box2d[W8y.A4M][W8y.d4k]),
            d4 = t1[W8y.h0r]() && W8y[C1](r4, box2d[W8y.A4M][W8y.d4k]);

        if (W8y[J1](w4, W8y.G0T) && W8y[W1](d4, W8y.G0T)) {
          continue;
        }

        var H4 = h1[W8y.J17]() || W8y[m1](R4, box2d[W8y.A4M][W8y.r4T]),
            M4 = t1[W8y.J17]() || W8y[b1](r4, box2d[W8y.A4M][W8y.r4T]);

        if (W8y[s1](H4, W8y.G0T) && W8y[P1](M4, W8y.G0T)) {
          continue;
        }

        var k4 = h1[W8y.i6k][W8y.F2T];

        if (W8y[l1](h1[W8y.i6k][W8y.F2T], t1[W8y.i6k][W8y.F2T])) {
          k4 = t1[W8y.i6k][W8y.F2T];
          h1[W8y.i6k][W8y.e40](k4);
        } else if (W8y[c1](t1[W8y.i6k][W8y.F2T], h1[W8y.i6k][W8y.F2T])) {
          k4 = h1[W8y.i6k][W8y.F2T];
          t1[W8y.i6k][W8y.e40](k4);
        }

        if (box2d[W8y.l3H]) {
          box2d[W8y.X16](W8y[f1](k4, W8y.D8Q));
        }

        var D4 = e1[W8y.z6Q](),
            Y4 = e1[W8y.Y5Q](),
            W4 = box2d.b2World.prototype.SolveTOI.s_toi_input;
        W4[W8y.w4T][W8y.r7k](F1[W8y.y00](), D4);
        W4[W8y.i4T][W8y.r7k](n4[W8y.y00](), Y4);
        W4[W8y.Y80][W8y.k97](h1[W8y.i6k]);
        W4[W8y.q80][W8y.k97](t1[W8y.i6k]);
        W4[W8y.G06] = W8y.D8Q;
        var A1 = box2d.b2World.prototype.SolveTOI.s_toi_output;
        box2d[W8y.j5T](A1, W4);
        var L4 = A1[W8y.B80];

        if (W8y[N1](A1[W8y.x1T], box2d[W8y.p96][W8y.x07])) {
          a1 = box2d[W8y.G60](k4 + W8y[B](W8y.D8Q - k4, L4), W8y.D8Q);
        } else {
          a1 = W8y.D8Q;
        }

        e1[d1] = a1;
        e1[W8y.o37] |= box2d[W8y.S57][W8y.j16];
      }

      if (W8y[w1](a1, B1)) {
        S1 = e1;
        B1 = a1;
      }
    }

    if (W8y[L](S1, W8y.z6k) || W8y[E](W8y.D8Q - W8y.j3T * box2d[W8y.F5k], B1)) {
      this[W8y.L0T] = W8y.f5k;
      break;
    }

    var F1 = S1[W8y.A4T](),
        n4 = S1[W8y.O2T](),
        h1 = F1[W8y.b86](),
        t1 = n4[W8y.b86](),
        B4 = box2d.b2World.prototype.SolveTOI.s_backup1.Copy(h1[W8y.i6k]),
        G4 = box2d.b2World.prototype.SolveTOI.s_backup2.Copy(t1[W8y.i6k]);
    h1[W8y.e40](B1);
    t1[W8y.e40](B1);
    S1[W8y.Z5Q](this[W8y.C3H][W8y.t8k]);
    S1[W8y.o37] &= ~box2d[W8y.S57][W8y.j16];
    ++S1[W8y.K3H];

    if (W8y[h](S1[W8y.C20](), W8y.G0T) || W8y[y1](S1[W8y.h06](), W8y.G0T)) {
      S1[M](W8y.G0T);
      h1[W8y.i6k][W8y.k97](B4);
      t1[W8y.i6k][W8y.k97](G4);
      h1[W8y.s2H]();
      t1[W8y.s2H]();
      continue;
    }

    h1[W8y.U5H](W8y.f5k);
    t1[W8y.U5H](W8y.f5k);
    G1[W8y.a7M]();
    G1[W8y.Q4r](h1);
    G1[W8y.Q4r](t1);
    G1[W8y.h80](S1);
    h1[W8y.o37] |= box2d[W8y.D8H][W8y.H0H];
    t1[W8y.o37] |= box2d[W8y.D8H][W8y.H0H];
    S1[W8y.o37] |= box2d[W8y.S57][W8y.H0H];

    for (var P4 = W8y.u8Q; W8y[D](P4, W8y.d8Q); ++P4) {
      var o4 = W8y[u](P4, W8y.u8Q) ? h1 : t1;

      if (W8y[d](o4[W8y.b5T], box2d[W8y.A4M][W8y.r4T])) {
        for (var X4 = o4[W8y.h0H]; X4; X4 = X4[W8y.T9k]) {
          if (W8y[S](G1[W8y.j9M], G1[W8y.a1k])) {
            break;
          }

          if (W8y[o](G1[W8y.g5Q], G1[W8y.n40])) {
            break;
          }

          var m4 = X4[W8y.a5H];

          if (W8y[j](m4[W8y.o37], box2d[W8y.S57][W8y.H0H])) {
            continue;
          }

          var O4 = X4[W8y.a40];

          if (W8y[e](O4[W8y.b5T], box2d[W8y.A4M][W8y.r4T]) && W8y[Q](o4[W8y.J17](), W8y.G0T) && W8y[i](O4[W8y.J17](), W8y.G0T)) {
            continue;
          }

          var F4 = m4[W8y.a10][W8y.U90],
              w2 = m4[W8y.G10][W8y.U90];

          if (F4 || w2) {
            continue;
          }

          var U2 = box2d.b2World.prototype.SolveTOI.s_backup.Copy(O4[W8y.i6k]);

          if (W8y[H](O4[W8y.o37] & box2d[W8y.D8H][W8y.H0H], W8y.u8Q)) {
            O4[W8y.e40](B1);
          }

          m4[W8y.Z5Q](this[W8y.C3H][W8y.t8k]);

          if (W8y[k](m4[W8y.C20](), W8y.G0T)) {
            O4[W8y.i6k][W8y.k97](U2);
            O4[W8y.s2H]();
            continue;
          }

          if (W8y[n](m4[W8y.h06](), W8y.G0T)) {
            O4[W8y.i6k][W8y.k97](U2);
            O4[W8y.s2H]();
            continue;
          }

          m4[W8y.o37] |= box2d[W8y.S57][W8y.H0H];
          G1[W8y.h80](m4);

          if (W8y[C](O4[W8y.o37], box2d[W8y.D8H][W8y.H0H])) {
            continue;
          }

          O4[W8y.o37] |= box2d[W8y.D8H][W8y.H0H];

          if (W8y[m](O4[W8y.b5T], box2d[W8y.A4M][W8y.d4k])) {
            O4[W8y.U5H](W8y.f5k);
          }

          G1[W8y.Q4r](O4);
        }
      }
    }

    var t4 = box2d.b2World.prototype.SolveTOI.s_subStep;
    t4[W8y.I5H] = W8y[l](W8y.D8Q - B1, f[W8y.I5H]);
    t4[W8y.e4T] = W8y[W](W8y.D8Q, t4[W8y.I5H]);
    t4[W8y.k30] = W8y.D8Q;
    t4[W8y.Z2r] = W8y.J3T;
    t4[W8y.l3M] = f[W8y.l3M];
    t4[W8y.W6T] = W8y.G0T;
    G1[W8y.x5T](t4, h1[W8y.x5M], t1[W8y.x5M]);

    for (var P4 = W8y.u8Q; W8y[Z](P4, G1[W8y.j9M]); ++P4) {
      var o4 = G1[W8y.H0k][P4];
      o4[W8y.o37] &= ~box2d[W8y.D8H][W8y.H0H];

      if (W8y[P](o4[W8y.b5T], box2d[W8y.A4M][W8y.r4T])) {
        continue;
      }

      o4[W8y.w30]();

      for (var X4 = o4[W8y.h0H]; X4; X4 = X4[W8y.T9k]) {
        X4[W8y.a5H][W8y.o37] &= ~W8y[N](box2d[W8y.S57][W8y.j16], box2d[W8y.S57][W8y.H0H]);
      }
    }

    this[W8y.C3H][W8y.J4H]();

    if (this[W8y.Z1T]) {
      this[W8y.L0T] = W8y.G0T;
      break;
    }
  }
};

box2d.b2World.prototype.SolveTOI.s_subStep = new box2d[W8y.A6H]();
box2d.b2World.prototype.SolveTOI.s_backup = new box2d[W8y.I30]();
box2d.b2World.prototype.SolveTOI.s_backup1 = new box2d[W8y.I30]();
box2d.b2World.prototype.SolveTOI.s_backup2 = new box2d[W8y.I30]();
box2d.b2World.prototype.SolveTOI.s_toi_input = new box2d[W8y.b4H]();
box2d.b2World.prototype.SolveTOI.s_toi_output = new box2d[W8y.V6T]();

box2d.b2World.prototype.Step = function (f, N, P) {
  var Z = "ClearForces",
      W = "T9d",
      l = "O9d",
      m = "V9d",
      C = "g9d",
      n = "m_inv_dt0",
      k = "l9d",
      H = "W9d",
      i = "Z9d",
      Q = "U9d",
      e = new box2d[W8y.F67]();

  if (W8y[Q](this[W8y.o37], box2d[W8y.P4H][W8y.N36])) {
    this[W8y.C3H][W8y.J4H]();
    this[W8y.o37] &= ~box2d[W8y.P4H][W8y.N36];
  }

  this[W8y.o37] |= box2d[W8y.P4H][W8y.p3r];
  var j = box2d.b2World.prototype.Step.s_step;
  j[W8y.I5H] = f;
  j[W8y.l3M] = N;
  j[W8y.Z2r] = P;

  if (W8y[i](f, W8y.u8Q)) {
    j[W8y.e4T] = W8y[H](W8y.D8Q, f);
  } else {
    j[W8y.e4T] = W8y.u8Q;
  }

  j[W8y.k30] = W8y[k](this[n], f);
  j[W8y.W6T] = this[W8y.l27];

  if (W8y.f5k) {
    var o = new box2d[W8y.F67]();
    this[W8y.C3H][W8y.I77]();
    this[W8y.o56][W8y.A4r] = o[W8y.n56]();
  }

  if (this[W8y.L0T] && W8y[C](j[W8y.I5H], W8y.u8Q)) {
    var o = new box2d[W8y.F67]();
    this[W8y.Y3k](j);
    this[W8y.o56][W8y.N16] = o[W8y.n56]();
  }

  if (this[W8y.U2r] && W8y[m](j[W8y.I5H], W8y.u8Q)) {
    var o = new box2d[W8y.F67]();
    this[W8y.x5T](j);
    this[W8y.o56][W8y.W6H] = o[W8y.n56]();
  }

  if (W8y[l](j[W8y.I5H], W8y.u8Q)) {
    this[n] = j[W8y.e4T];
  }

  if (W8y[W](this[W8y.o37], box2d[W8y.P4H][W8y.E10])) {
    this[Z]();
  }

  this[W8y.o37] &= ~box2d[W8y.P4H][W8y.p3r];
  this[W8y.o56][W8y.D5H] = e[W8y.n56]();
};

box2d.b2World.prototype.Step.s_step = new box2d[W8y.A6H]();

box2d.b2World.prototype.ClearForces = function () {
  for (var f = this[W8y.I80]; f; f = f[W8y.X66]) {
    f[W8y.c2r][W8y.j6k]();
    f[W8y.P50] = W8y.u8Q;
  }
};

box2d.b2World.prototype.QueryAABB = function (m, C) {
  var n = function n(f) {
    var N = "q9d",
        P = "i9d",
        Z = k[W8y.e90](f);

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[P](Z, box2d[W8y.s0T]));
    }

    var W = Z[W8y.i9H],
        l = Z[W8y.a60];

    if (W8y[N](m, box2d[W8y.p6k])) {
      return m[W8y.F46](W);
    } else {
      return m(W);
    }
  },
      k = this[W8y.C3H][W8y.u7k];

  k[W8y.M60](n, C);
};

box2d.b2World.prototype.QueryShape = function (m, C, n) {
  var k = function k(f) {
    var N = "S9d",
        P = "o9d",
        Z = H[W8y.e90](f);

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[P](Z, box2d[W8y.s0T]));
    }

    var W = Z[W8y.i9H],
        l = Z[W8y.a60];

    if (box2d[W8y.p2M](C, 0, W[W8y.y00](), 0, n, W[W8y.b86]()[W8y.x8Q]())) {
      if (W8y[N](m, box2d[W8y.p6k])) {
        return m[W8y.F46](W);
      } else {
        return m(W);
      }
    }

    return true;
  },
      H = this[W8y.C3H][W8y.u7k],
      i = box2d.b2World.prototype.QueryShape.s_aabb;

  C[W8y.D4H](i, n, 0);
  H[W8y.M60](k, i);
};

box2d.b2World.prototype.QueryShape.s_aabb = new box2d[W8y.Z20]();

box2d.b2World.prototype.QueryPoint = function (m, C) {
  var n = "z9d",
      k = "B9d",
      H = function H(f) {
    var N = "h9d";
    var P = "D9d";
    var Z = i[W8y.e90](f);

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[P](Z, box2d[W8y.s0T]));
    }

    var W = Z[W8y.i9H];
    var l = Z[W8y.a60];

    if (W[W8y.h10](C)) {
      if (W8y[N](m, box2d[W8y.p6k])) {
        return m[W8y.F46](W);
      } else {
        return m(W);
      }
    }

    return W8y.f5k;
  },
      i = this[W8y.C3H][W8y.u7k],
      Q = box2d.b2World.prototype.QueryPoint.s_aabb;

  Q[W8y.d1T][W8y.y47](W8y[k](C[W8y.T9T], box2d[W8y.Z8k]), W8y[n](C[W8y.Z9T], box2d[W8y.Z8k]));
  Q[W8y.I1T][W8y.y47](C[W8y.T9T] + box2d[W8y.Z8k], C[W8y.Z9T] + box2d[W8y.Z8k]);
  i[W8y.M60](H, Q);
};

box2d.b2World.prototype.QueryPoint.s_aabb = new box2d[W8y.Z20]();

box2d.b2World.prototype.RayCast = function (o, S, d) {
  var u = function u(f, N) {
    var P = "m8d",
        Z = "Y8d",
        W = "c8d",
        l = "P8d",
        m = "f8d",
        C = "t9d",
        n = D[W8y.e90](N);

    if (box2d[W8y.l3H]) {
      box2d[W8y.X16](W8y[C](n, box2d[W8y.s0T]));
    }

    var k = n[W8y.i9H],
        H = n[W8y.a60],
        i = box2d.b2World.prototype.RayCast.s_output,
        Q = k[W8y.C7M](i, f, H);

    if (Q) {
      var e = i[W8y.j57],
          j = box2d.b2World.prototype.RayCast.s_point;
      j[W8y.y47](W8y[m](W8y.D8Q - e, S[W8y.T9T]) + W8y[l](e, d[W8y.T9T]), W8y[W](W8y.D8Q - e, S[W8y.Z9T]) + W8y[Z](e, d[W8y.Z9T]));

      if (W8y[P](o, box2d[W8y.R96])) {
        return o[W8y.F46](k, j, i[W8y.M4T], e);
      } else {
        return o(k, j, i[W8y.M4T], e);
      }
    }

    return f[W8y.v4T];
  },
      D = this[W8y.C3H][W8y.u7k],
      M = box2d.b2World.prototype.RayCast.s_input;

  M[W8y.v4T] = W8y.D8Q;
  M[W8y.h17][W8y.k97](S);
  M[W8y.W47][W8y.k97](d);
  D[W8y.C7M](u, M);
};

box2d.b2World.prototype.RayCast.s_input = new box2d[W8y.K50]();
box2d.b2World.prototype.RayCast.s_output = new box2d[W8y.B70]();
box2d.b2World.prototype.RayCast.s_point = new box2d[W8y.p7T]();

box2d.b2World.prototype.RayCastOne = function (l, m) {
  function C(f, N, P, Z) {
    var W = "x8d";

    if (W8y[W](Z, k)) {
      k = Z;
      n = f;
    }

    return k;
  }

  var n = W8y.z6k,
      k = W8y.D8Q;
  ;
  this[W8y.C7M](C, l, m);
  return n;
};

box2d.b2World.prototype.RayCastAll = function (W, l, m) {
  function C(f, N, P, Z) {
    m[W8y.h7T](f);
    return W8y.D8Q;
  }

  m.length = 0;
  ;
  this[W8y.C7M](C, W, l);
  return m;
};

box2d.b2World.prototype.DrawShape = function (f, N) {
  var P = "DrawSolidPolygon",
      Z = "I8d",
      W = 0.05,
      l = "DrawCircle",
      m = "j8d",
      C = "Q8d",
      n = "k8d",
      k = "DrawSolidCircle",
      H = "C8d",
      i = f[W8y.y00]();

  switch (i[W8y.b5T]) {
    case box2d[W8y.i80][W8y.q36]:
      {
        var Q = W8y[H](i, box2d[W8y.A2T]) ? i : W8y.z6k,
            e = Q[W8y.U0k],
            j = Q[W8y.o4T],
            o = box2d[W8y.p7T][W8y.o90];
        this[W8y.w16][k](e, j, o, N);
      }
      break;

    case box2d[W8y.i80][W8y.E2H]:
      {
        var S = W8y[n](i, box2d[W8y.p7H]) ? i : W8y.z6k,
            d = S[W8y.v06],
            u = S[W8y.N60];
        this[W8y.w16][W8y.f9M](d, u, N);
      }
      break;

    case box2d[W8y.i80][W8y.x87]:
      {
        var D = W8y[C](i, box2d[W8y.x90]) ? i : W8y.z6k,
            M = D[W8y.o9k],
            y1 = D[W8y.N4k],
            d = y1[W8y.u8Q];

        for (var h = W8y.u8Q; W8y[m](h, M); ++h) {
          var u = y1[h];
          this[W8y.w16][W8y.f9M](d, u, N);
          this[W8y.w16][l](u, W, N);
          d = u;
        }
      }
      break;

    case box2d[W8y.i80][W8y.E27]:
      {
        var E = W8y[Z](i, box2d[W8y.g16]) ? i : W8y.z6k,
            L = E[W8y.o9k],
            y1 = E[W8y.N4k];
        this[W8y.w16][P](y1, L, N);
      }
      break;
  }
};

box2d.b2World.prototype.DrawJoint = function (f) {
  var N = "GetGroundAnchorB",
      P = "GetGroundAnchorA",
      Z = "R8d",
      W = "GetAnchorB",
      l = "GetAnchorA",
      m = f[W8y.r0M](),
      C = f[W8y.u0M](),
      n = m[W8y.Z4M],
      k = C[W8y.Z4M],
      H = n[W8y.t60],
      i = k[W8y.t60],
      Q = f[l](box2d.b2World.prototype.DrawJoint.s_p1),
      e = f[W](box2d.b2World.prototype.DrawJoint.s_p2),
      j = box2d.b2World.prototype.DrawJoint.s_color.SetRGB(W8y.T3H, W8y.d3H, W8y.d3H);

  switch (f[W8y.b5T]) {
    case box2d[W8y.z6M][W8y.U5M]:
      this[W8y.w16][W8y.f9M](Q, e, j);
      break;

    case box2d[W8y.z6M][W8y.s7H]:
      {
        var o = W8y[Z](f, box2d[W8y.f20]) ? f : W8y.z6k,
            S = o[P](box2d.b2World.prototype.DrawJoint.s_s1),
            d = o[N](box2d.b2World.prototype.DrawJoint.s_s2);
        this[W8y.w16][W8y.f9M](S, Q, j);
        this[W8y.w16][W8y.f9M](d, e, j);
        this[W8y.w16][W8y.f9M](S, d, j);
      }
      break;

    case box2d[W8y.z6M][W8y.F27]:
      this[W8y.w16][W8y.f9M](Q, e, j);
      break;

    default:
      this[W8y.w16][W8y.f9M](H, Q, j);
      this[W8y.w16][W8y.f9M](Q, e, j);
      this[W8y.w16][W8y.f9M](i, e, j);
  }
};

box2d.b2World.prototype.DrawJoint.s_p1 = new box2d[W8y.p7T]();
box2d.b2World.prototype.DrawJoint.s_p2 = new box2d[W8y.p7T]();
box2d.b2World.prototype.DrawJoint.s_color = new box2d[W8y.s0r](W8y.T3H, W8y.d3H, W8y.d3H);
box2d.b2World.prototype.DrawJoint.s_s1 = new box2d[W8y.p7T]();
box2d.b2World.prototype.DrawJoint.s_s2 = new box2d[W8y.p7T]();

box2d.b2World.prototype.DrawDebugData = function () {
  var f = "Draw",
      N = "n6d",
      P = "DrawTransform",
      Z = "J6d",
      W = "DrawPolygon",
      l = "b6d",
      m = "s6d",
      C = "X6d",
      n = "DrawJoint",
      k = "N6d",
      H = 0.6,
      i = "w6d",
      Q = "A8d",
      e = "G8d",
      j = "SetRGB",
      o = "v8d",
      S = "M8d",
      d = "GetFlags",
      u = "E8d";

  if (W8y[u](this[W8y.w16], W8y.z6k)) {
    return;
  }

  var D = this[W8y.w16][d](),
      M = box2d.b2World.prototype.DrawDebugData.s_color.SetRGB(W8y.u8Q, W8y.u8Q, W8y.u8Q);

  if (W8y[S](D, box2d[W8y.r6H][W8y.s96])) {
    for (var y1 = this[W8y.I80]; y1; y1 = y1[W8y.X66]) {
      var h = y1[W8y.Z4M];
      this[W8y.w16][W8y.h2M](h);

      for (var E = y1[W8y.w5M](); E; E = E[W8y.X66]) {
        if (W8y[o](y1[W8y.R4T](), W8y.G0T)) {
          M[j](W8y.T3H, W8y.T3H, W8y.i3H);
          this[W8y.K6T](E, M);
        } else if (W8y[e](y1[W8y.E1k](), box2d[W8y.A4M][W8y.d4k])) {
          M[j](W8y.T3H, W8y.R3H, W8y.T3H);
          this[W8y.K6T](E, M);
        } else if (W8y[Q](y1[W8y.E1k](), box2d[W8y.A4M][W8y.J76])) {
          M[j](W8y.T3H, W8y.T3H, W8y.R3H);
          this[W8y.K6T](E, M);
        } else if (W8y[i](y1[W8y.h0r](), W8y.G0T)) {
          M[j](H, H, H);
          this[W8y.K6T](E, M);
        } else {
          M[j](W8y.R3H, W8y.E3H, W8y.E3H);
          this[W8y.K6T](E, M);
        }
      }

      this[W8y.w16][W8y.q2H](h);
    }
  }

  if (W8y[k](D, box2d[W8y.r6H][W8y.b87])) {
    for (var L = this[W8y.P8T]; L; L = L[W8y.X66]) {
      this[n](L);
    }
  }

  if (W8y[C](D, box2d[W8y.r6H][W8y.n1T])) {
    M[j](W8y.R3H, W8y.i3H, W8y.R3H);
    var w1 = this[W8y.C3H][W8y.u7k],
        B = box2d.b2World.prototype.DrawDebugData.s_vs;

    for (var y1 = this[W8y.I80]; y1; y1 = y1[W8y.X66]) {
      if (W8y[m](y1[W8y.R4T](), W8y.G0T)) {
        continue;
      }

      for (var E = y1[W8y.w5M](); E; E = E[W8y.X66]) {
        for (var N1 = W8y.u8Q; W8y[l](N1, E[W8y.X7T]); ++N1) {
          var f1 = E[W8y.t16][N1],
              c1 = w1[W8y.R97](f1[W8y.z5H]);
          B[W8y.u8Q][W8y.y47](c1[W8y.d1T][W8y.T9T], c1[W8y.d1T][W8y.Z9T]);
          B[W8y.D8Q][W8y.y47](c1[W8y.I1T][W8y.T9T], c1[W8y.d1T][W8y.Z9T]);
          B[W8y.d8Q][W8y.y47](c1[W8y.I1T][W8y.T9T], c1[W8y.I1T][W8y.Z9T]);
          B[W8y.S8Q][W8y.y47](c1[W8y.d1T][W8y.T9T], c1[W8y.I1T][W8y.Z9T]);
          this[W8y.w16][W](B, W8y.v8Q, M);
        }
      }
    }
  }

  if (W8y[Z](D, box2d[W8y.r6H][W8y.W9M])) {
    for (var y1 = this[W8y.I80]; y1; y1 = y1[W8y.X66]) {
      var h = box2d.b2World.prototype.DrawDebugData.s_xf;
      h[W8y.b50][W8y.k97](y1[W8y.Z4M][W8y.b50]);
      h[W8y.t60][W8y.k97](y1[W8y.Z86]());
      this[W8y.w16][P](h);
    }
  }

  if (W8y[N](D, box2d[W8y.r6H][W8y.V37])) {
    for (var l1 = this[W8y.U6T]; l1; l1 = l1[W8y.X66]) {
      l1[f](this[W8y.w16]);
    }
  }
};

box2d.b2World.prototype.DrawDebugData.s_color = new box2d[W8y.s0r](W8y.u8Q, W8y.u8Q, W8y.u8Q);
box2d.b2World.prototype.DrawDebugData.s_vs = box2d[W8y.p7T][W8y.N1r](W8y.v8Q);
box2d.b2World.prototype.DrawDebugData.s_xf = new box2d[W8y.P70]();

box2d.b2World.prototype.SetBroadPhase = function (f) {
  var N = "m_proxy",
      P = this[W8y.C3H][W8y.u7k];
  this[W8y.C3H][W8y.u7k] = f;

  for (var Z = this[W8y.I80]; Z; Z = Z[W8y.X66]) {
    for (var W = Z[W8y.l8H]; W; W = W[W8y.X66]) {
      W[N] = f[W8y.Z6T](P[W8y.R97](W[N]), W);
    }
  }
};

box2d.b2World.prototype.GetProxyCount = function () {
  var f = "GetProxyCount";
  return this[W8y.C3H][W8y.u7k][f]();
};

box2d.b2World.prototype.GetTreeHeight = function () {
  var f = "GetTreeHeight";
  return this[W8y.C3H][W8y.u7k][f]();
};

box2d.b2World.prototype.GetTreeBalance = function () {
  var f = "GetTreeBalance";
  return this[W8y.C3H][W8y.u7k][f]();
};

box2d.b2World.prototype.GetTreeQuality = function () {
  var f = "GetTreeQuality";
  return this[W8y.C3H][W8y.u7k][f]();
};

box2d.b2World.prototype.ShiftOrigin = function (f) {
  var N = "K6d";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](this[W8y.C3k](), W8y.G0T));
  }

  if (this[W8y.C3k]()) {
    return;
  }

  for (var P = this[W8y.I80]; P; P = P[W8y.X66]) {
    P[W8y.Z4M][W8y.t60][W8y.d6M](f);
    P[W8y.i6k][W8y.K8Q][W8y.d6M](f);
    P[W8y.i6k][W8y.a30][W8y.d6M](f);
  }

  for (var Z = this[W8y.P8T]; Z; Z = Z[W8y.X66]) {
    Z[W8y.w7M](f);
  }

  this[W8y.C3H][W8y.u7k][W8y.w7M](f);
};

box2d.b2World.prototype.Dump = function () {
  var f = "e6d",
      N = "r6d",
      P = "/** @type {Array.<box2d.b2Joint>} */ var joints = new Array(%d);\n",
      Z = "/** @type {Array.<box2d.b2Body>} */ var bodies = new Array(%d);\n",
      W = "this.m_world.SetGravity(g);\n",
      l = "/** @type {box2d.b2Vec2} */ var g = new box2d.b2Vec2(%.15f, %.15f);\n",
      m = "H6d";

  if (box2d[W8y.F2k]) {
    if (W8y[m](this[W8y.o37] & box2d[W8y.P4H][W8y.p3r], box2d[W8y.P4H][W8y.p3r])) {
      return;
    }

    box2d[W8y.R50](l, this[W8y.C9T][W8y.T9T], this[W8y.C9T][W8y.Z9T]);
    box2d[W8y.R50](W);
    box2d[W8y.R50](Z, this[W8y.j9M]);
    box2d[W8y.R50](P, this[W8y.w70]);
    var C = W8y.u8Q;

    for (var n = this[W8y.I80]; n; n = n[W8y.X66]) {
      n[W8y.x5M] = C;
      n[W8y.l1H]();
      ++C;
    }

    C = W8y.u8Q;

    for (var k = this[W8y.P8T]; k; k = k[W8y.X66]) {
      k[W8y.U56] = C;
      ++C;
    }

    for (var k = this[W8y.P8T]; k; k = k[W8y.X66]) {
      if (W8y[N](k[W8y.b5T], box2d[W8y.z6M][W8y.a6T])) {
        continue;
      }

      box2d[W8y.R50](W8y.d6T);
      box2d[W8y.R50](W8y.F4k);
      k[W8y.l1H]();
      box2d[W8y.R50](W8y.b8k);
    }

    for (var k = this[W8y.P8T]; k; k = k[W8y.X66]) {
      if (W8y[f](k[W8y.b5T], box2d[W8y.z6M][W8y.a6T])) {
        continue;
      }

      box2d[W8y.R50](W8y.d6T);
      box2d[W8y.R50](W8y.F4k);
      k[W8y.l1H]();
      box2d[W8y.R50](W8y.b8k);
    }
  }
};

box2d.b2World.prototype.AddController = function (f) {
  var N = "Controller can only be a member of one world",
      P = "a6d";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[P](f[W8y.s1H], W8y.z6k), N);
  }

  f[W8y.s1H] = this;
  f[W8y.X66] = this[W8y.U6T];
  f[W8y.h1r] = W8y.z6k;
  if (this[W8y.U6T]) this[W8y.U6T][W8y.h1r] = f;
  this[W8y.U6T] = f;
  ++this[W8y.H3T];
  return f;
};

box2d.b2World.prototype.RemoveController = function (f) {
  var N = "u6d",
      P = "Controller is not a member of this world",
      Z = "d6d";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[Z](f[W8y.s1H], this), P);
  }

  if (f[W8y.h1r]) f[W8y.h1r][W8y.X66] = f[W8y.X66];
  if (f[W8y.X66]) f[W8y.X66][W8y.h1r] = f[W8y.h1r];
  if (W8y[N](this[W8y.U6T], f)) this[W8y.U6T] = f[W8y.X66];
  --this[W8y.H3T];
  f[W8y.h1r] = W8y.z6k;
  f[W8y.X66] = W8y.z6k;
  f[W8y.s1H] = W8y.z6k;
};

goog[W8y.U3T](W8y.S00);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Joint');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.Y60] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.P2M]);
  this[W8y.G2H] = new Array();
};

goog[W8y.u80](box2d[W8y.Y60], box2d[W8y.k1r]);
box2d.b2AreaJointDef.prototype.world = W8y.z6k;
box2d.b2AreaJointDef.prototype.bodies = W8y.z6k;
box2d.b2AreaJointDef.prototype.frequencyHz = W8y.u8Q;
box2d.b2AreaJointDef.prototype.dampingRatio = W8y.u8Q;

box2d.b2AreaJointDef.prototype.AddBody = function (f) {
  var N = "p6d",
      P = "L6d";
  this[W8y.G2H][W8y.h7T](f);

  if (W8y[P](this[W8y.G2H].length, 1)) {
    this[W8y.F6Q] = f;
  } else if (W8y[N](this[W8y.G2H].length, 2)) {
    this[W8y.b5Q] = f;
  }
};

box2d[W8y.I0r] = function (f) {
  var N = "U5d",
      P = "y5d",
      Z = "m_targetLengths",
      W = "F6d";
  goog[W8y.o66](this, f);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[W](f[W8y.G2H].length, 3), "You cannot create an area joint with less than three bodies.");
  }

  this[W8y.H0k] = f[W8y.G2H];
  this[W8y.p9T] = f[W8y.o67];
  this[W8y.d8k] = f[W8y.G56];
  this[Z] = box2d[W8y.D3r](f[W8y.G2H].length);
  this[W8y.w87] = box2d[W8y.p7T][W8y.N1r](f[W8y.G2H].length);
  this[W8y.Y0M] = new Array(f[W8y.G2H].length);
  this[W8y.N00] = box2d[W8y.p7T][W8y.N1r](f[W8y.G2H].length);
  this[W8y.A3M] = new box2d[W8y.p7T]();
  var l = new box2d[W8y.C6T]();
  l[W8y.o67] = f[W8y.o67];
  l[W8y.G56] = f[W8y.G56];
  this[W8y.p3M] = 0;

  for (var m = 0, C = this[W8y.H0k].length; W8y[P](m, C); ++m) {
    var n = this[W8y.H0k][m],
        k = this[W8y.H0k][W8y[N](m + 1, C)],
        H = n[W8y.Z86](),
        i = k[W8y.Z86]();
    this[Z][m] = box2d[W8y.s80](H, i);
    this[W8y.p3M] += box2d[W8y.t10](H, i);
    l[W8y.Y6T](n, k, H, i);
    this[W8y.Y0M][m] = f[W8y.m4T][W8y.x10](l);
  }

  this[W8y.p3M] *= 0.5;
};

goog[W8y.u80](box2d[W8y.I0r], box2d[W8y.N17]);
box2d.b2AreaJoint.prototype.m_bodies = W8y.z6k;
box2d.b2AreaJoint.prototype.m_frequencyHz = W8y.u8Q;
box2d.b2AreaJoint.prototype.m_dampingRatio = W8y.u8Q;
box2d.b2AreaJoint.prototype.m_impulse = W8y.u8Q;
box2d.b2AreaJoint.prototype.m_targetLengths = W8y.z6k;
box2d.b2AreaJoint.prototype.m_targetArea = W8y.u8Q;
box2d.b2AreaJoint.prototype.m_normals = W8y.z6k;
box2d.b2AreaJoint.prototype.m_joints = W8y.z6k;
box2d.b2AreaJoint.prototype.m_deltas = W8y.z6k;
box2d.b2AreaJoint.prototype.m_delta = W8y.z6k;

box2d.b2AreaJoint.prototype.GetAnchorA = function (f) {
  return f[W8y.j6k]();
};

box2d.b2AreaJoint.prototype.GetAnchorB = function (f) {
  return f[W8y.j6k]();
};

box2d.b2AreaJoint.prototype.GetReactionForce = function (f, N) {
  return N[W8y.j6k]();
};

box2d.b2AreaJoint.prototype.GetReactionTorque = function (f) {
  return W8y.u8Q;
};

box2d.b2AreaJoint.prototype.SetFrequency = function (f) {
  var N = "SetFrequency",
      P = "Z5d";
  this[W8y.p9T] = f;

  for (var Z = 0, W = this[W8y.Y0M].length; W8y[P](Z, W); ++Z) {
    this[W8y.Y0M][Z][N](f);
  }
};

box2d.b2AreaJoint.prototype.GetFrequency = function () {
  return this[W8y.p9T];
};

box2d.b2AreaJoint.prototype.SetDampingRatio = function (f) {
  var N = "SetDampingRatio",
      P = "W5d";
  this[W8y.d8k] = f;

  for (var Z = 0, W = this[W8y.Y0M].length; W8y[P](Z, W); ++Z) {
    this[W8y.Y0M][Z][N](f);
  }
};

box2d.b2AreaJoint.prototype.GetDampingRatio = function () {
  return this[W8y.d8k];
};

box2d.b2AreaJoint.prototype.Dump = function () {
  var f = "Area joint dumping is not supported.\n";

  if (box2d[W8y.F2k]) {
    box2d[W8y.R50](f);
  }
};

box2d.b2AreaJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "T5d",
      P = "O5d",
      Z = "V5d",
      W = "g5d",
      l = "l5d";

  for (var m = 0, C = this[W8y.H0k].length; W8y[l](m, C); ++m) {
    var n = this[W8y.H0k][W8y[W](m + C - 1, C)],
        k = this[W8y.H0k][W8y[Z](m + 1, C)],
        H = f[W8y.P1T][n[W8y.x5M]][W8y.a30],
        i = f[W8y.P1T][k[W8y.x5M]][W8y.a30],
        Q = this[W8y.N00][m];
    box2d[W8y.x8T](i, H, Q);
  }

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.k1M] *= f[W8y.D5H][W8y.k30];

    for (var m = 0, C = this[W8y.H0k].length; W8y[P](m, C); ++m) {
      var e = this[W8y.H0k][m],
          j = f[W8y.S37][e[W8y.x5M]][W8y.N8T],
          Q = this[W8y.N00][m];
      j[W8y.T9T] += W8y[N](e[W8y.k86], Q[W8y.Z9T], 0.5, this[W8y.k1M]);
      j[W8y.Z9T] += e[W8y.k86] * -Q[W8y.T9T] * 0.5 * this[W8y.k1M];
    }
  } else {
    this[W8y.k1M] = 0;
  }
};

box2d.b2AreaJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "E5d",
      P = "R5d",
      Z = "I5d",
      W = "j5d",
      l = 0,
      m = 0;

  for (var C = 0, n = this[W8y.H0k].length; W8y[W](C, n); ++C) {
    var k = this[W8y.H0k][C],
        H = f[W8y.S37][k[W8y.x5M]][W8y.N8T],
        i = this[W8y.N00][C];
    l += W8y[Z](i[W8y.A5T](), k[W8y.L3T]());
    m += box2d[W8y.t10](H, i);
  }

  var Q = -2 * m / l;
  this[W8y.k1M] += Q;

  for (var C = 0, n = this[W8y.H0k].length; W8y[P](C, n); ++C) {
    var k = this[W8y.H0k][C],
        H = f[W8y.S37][k[W8y.x5M]][W8y.N8T],
        i = this[W8y.N00][C];
    H[W8y.T9T] += W8y[N](k[W8y.k86], i[W8y.Z9T], 0.5, Q);
    H[W8y.Z9T] += k[W8y.k86] * -i[W8y.T9T] * 0.5 * Q;
  }
};

box2d.b2AreaJoint.prototype.SolvePositionConstraints = function (f) {
  var N = "K1c",
      P = "n1c",
      Z = "J1c",
      W = "b1c",
      l = "s1c",
      m = "Z1c",
      C = "U1c",
      n = "y1c",
      k = "F5d",
      H = "p5d",
      i = "L5d",
      Q = 0,
      e = 0;

  for (var j = 0, o = this[W8y.H0k].length; W8y[i](j, o); ++j) {
    var S = this[W8y.H0k][j],
        d = this[W8y.H0k][W8y[H](j + 1, o)],
        u = f[W8y.P1T][S[W8y.x5M]][W8y.a30],
        D = f[W8y.P1T][d[W8y.x5M]][W8y.a30],
        M = box2d[W8y.x8T](D, u, this[W8y.A3M]),
        y1 = M[W8y.a2k]();

    if (W8y[k](y1, box2d[W8y.F5k])) {
      y1 = 1;
    }

    this[W8y.w87][j][W8y.T9T] = W8y[n](M[W8y.Z9T], y1);
    this[W8y.w87][j][W8y.Z9T] = -M[W8y.T9T] / y1;
    Q += y1;
    e += box2d[W8y.t10](u, D);
  }

  e *= 0.5;
  var h = W8y[C](this[W8y.p3M], e),
      E = W8y[m](0.5, h, Q),
      L = true;

  for (var j = 0, o = this[W8y.H0k].length; W8y[l](j, o); ++j) {
    var S = this[W8y.H0k][j],
        u = f[W8y.P1T][S[W8y.x5M]][W8y.a30],
        w1 = W8y[W](j + 1, o),
        M = box2d[W8y.m3T](this[W8y.w87][j], this[W8y.w87][w1], this[W8y.A3M]);
    M[W8y.E40](E);
    var B = M[W8y.A5T]();

    if (W8y[Z](B, box2d[W8y.B9M](box2d[W8y.d1r]))) {
      M[W8y.E40](W8y[P](box2d[W8y.d1r], box2d[W8y.d5M](B)));
    }

    if (W8y[N](B, box2d[W8y.B9M](box2d[W8y.Z8k]))) {
      L = false;
    }

    u[W8y.T9T] += M[W8y.T9T];
    u[W8y.Z9T] += M[W8y.Z9T];
  }

  return L;
};

goog[W8y.U3T](W8y.x36);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Controller');
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2WorldCallbacks');

box2d[W8y.q5Q] = function () {
  goog[W8y.o66](this);
  this[W8y.M4T] = new box2d[W8y.p7T](W8y.u8Q, W8y.D8Q);
  this[W8y.n5k] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.u5M] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
};

goog[W8y.u80](box2d[W8y.q5Q], box2d[W8y.X9H]);
box2d.b2BuoyancyController.prototype.normal = W8y.z6k;
box2d.b2BuoyancyController.prototype.offset = W8y.u8Q;
box2d.b2BuoyancyController.prototype.density = W8y.u8Q;
box2d.b2BuoyancyController.prototype.velocity = W8y.z6k;
box2d.b2BuoyancyController.prototype.linearDrag = W8y.u8Q;
box2d.b2BuoyancyController.prototype.angularDrag = W8y.u8Q;
box2d.b2BuoyancyController.prototype.useDensity = W8y.G0T;
box2d.b2BuoyancyController.prototype.useWorldGravity = W8y.f5k;
box2d.b2BuoyancyController.prototype.gravity = W8y.z6k;

box2d.b2BuoyancyController.prototype.Step = function (f) {
  var N = "angularDrag",
      P = "GetInertia",
      Z = "ApplyTorque",
      W = "linearDrag",
      l = "z1c",
      m = "B1c",
      C = "M1c",
      n = "d1c",
      k = "a1c",
      H = "useDensity",
      i = "e1c",
      Q = "r1c",
      e = "ComputeSubmergedArea",
      j = "H1c",
      o = "useWorldGravity";
  if (!this[W8y.I80]) return;

  if (this[o]) {
    this[W8y.u5M][W8y.k97](this[W8y.g6T]()[W8y.L5Q]());
  }

  for (var S = this[W8y.I80]; S; S = S[W8y.i2k]) {
    var d = S[W8y.R6k];

    if (W8y[j](d[W8y.h0r](), W8y.G0T)) {
      continue;
    }

    var u = new box2d[W8y.p7T](),
        D = new box2d[W8y.p7T](),
        M = W8y.u8Q,
        y1 = W8y.u8Q;

    for (var h = d[W8y.w5M](); h; h = h[W8y.X66]) {
      var E = new box2d[W8y.p7T](),
          L = h[W8y.y00]()[e](this[W8y.M4T], this[W8y.o3M], d[W8y.x8Q](), E);
      M += L;
      u[W8y.T9T] += W8y[Q](L, E[W8y.T9T]);
      u[W8y.Z9T] += W8y[i](L, E[W8y.Z9T]);
      var w1 = W8y.u8Q;

      if (this[H]) {
        w1 = h[W8y.A8k]();
      } else {
        w1 = W8y.D8Q;
      }

      y1 += W8y[k](L, w1);
      D[W8y.T9T] += W8y[n](L, E[W8y.T9T], w1);
      D[W8y.Z9T] += W8y[C](L, E[W8y.Z9T], w1);
    }

    u[W8y.T9T] /= M;
    u[W8y.Z9T] /= M;
    D[W8y.T9T] /= y1;
    D[W8y.Z9T] /= y1;
    if (W8y[m](M, box2d[W8y.F5k])) continue;
    var B = box2d[W8y.F7M](this[W8y.u5M], new box2d[W8y.p7T]());
    B[W8y.E40](W8y[l](this[W8y.c3T], M));
    d[W8y.h40](B, D);
    var N1 = d[W8y.U40](u, new box2d[W8y.p7T]());
    N1[W8y.d6M](this[W8y.n5k]);
    N1[W8y.E40](-this[W] * M);
    d[W8y.h40](N1, u);
    d[Z](-d[P]() / d[W8y.L3T]() * M * d[W8y.p5M]() * this[N]);
  }
};

box2d.b2BuoyancyController.prototype.Draw = function (f) {
  var N = "m4c",
      P = "Y4c",
      Z = "c4c",
      W = "P4c",
      l = "f4c",
      m = "t1c",
      C = W8y.U7M,
      n = new box2d[W8y.p7T](),
      k = new box2d[W8y.p7T]();
  n[W8y.T9T] = W8y[m](this[W8y.M4T][W8y.T9T], this[W8y.o3M]) + W8y[l](this[W8y.M4T][W8y.Z9T], C);
  n[W8y.Z9T] = W8y[W](this[W8y.M4T][W8y.Z9T] * this[W8y.o3M], this[W8y.M4T][W8y.T9T] * C);
  k[W8y.T9T] = W8y[Z](this[W8y.M4T][W8y.T9T] * this[W8y.o3M], this[W8y.M4T][W8y.Z9T] * C);
  k[W8y.Z9T] = W8y[P](this[W8y.M4T][W8y.Z9T], this[W8y.o3M]) + W8y[N](this[W8y.M4T][W8y.T9T], C);
  var H = new box2d[W8y.s0r](W8y.u8Q, W8y.u8Q, W8y.d3H);
  f[W8y.f9M](n, k, H);
};

goog[W8y.U3T](W8y.r06);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Controller');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.Y46] = function () {
  goog[W8y.o66](this);
  this[W8y.I6Q] = new box2d[W8y.T0H]();
  this[W8y.s2k] = W8y.u8Q;
};

goog[W8y.u80](box2d[W8y.Y46], box2d[W8y.X9H]);
box2d.b2TensorDampingController.prototype.T = new box2d[W8y.T0H]();
box2d.b2TensorDampingController.prototype.maxTimestep = W8y.u8Q;

box2d.b2TensorDampingController.prototype.Step = function (f) {
  var N = "k4c",
      P = "C4c",
      Z = "x4c",
      W = f[W8y.I5H];
  if (W8y[Z](W, box2d[W8y.F5k])) return;
  if (W8y[P](W, this[W8y.s2k]) && W8y[N](this[W8y.s2k], W8y.u8Q)) W = this[W8y.s2k];

  for (var l = this[W8y.I80]; l; l = l[W8y.i2k]) {
    var m = l[W8y.R6k];
    if (!m[W8y.h0r]()) continue;
    var C = m[W8y.S40](box2d[W8y.n1H](this[W8y.I6Q], m[W8y.r10](m[W8y.s5T](), box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.l9M]), box2d.b2TensorDampingController.prototype.Step.s_damping);
    m[W8y.i96](box2d[W8y.m3T](m[W8y.s5T](), box2d[W8y.X26](W, C, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.l9M]));
  }
};

box2d.b2TensorDampingController.prototype.Step.s_damping = new box2d[W8y.p7T]();

box2d.b2TensorDampingController.prototype.SetAxisAligned = function (f, N) {
  var P = "I4c",
      Z = "j4c",
      W = "Q4c";
  this[W8y.I6Q][W8y.Q57][W8y.T9T] = -f;
  this[W8y.I6Q][W8y.Q57][W8y.Z9T] = W8y.u8Q;
  this[W8y.I6Q][W8y.D57][W8y.T9T] = W8y.u8Q;
  this[W8y.I6Q][W8y.D57][W8y.Z9T] = -N;

  if (W8y[W](f, W8y.u8Q) || W8y[Z](N, W8y.u8Q)) {
    this[W8y.s2k] = W8y[P](W8y.D8Q, box2d[W8y.v30](f, N));
  } else {
    this[W8y.s2k] = W8y.u8Q;
  }
};

goog[W8y.U3T](W8y.y9H);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Joint');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.C6T] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.U5M]);
  this[W8y.r8H] = new box2d[W8y.p7T]();
  this[W8y.x8H] = new box2d[W8y.p7T]();
};

goog[W8y.u80](box2d[W8y.C6T], box2d[W8y.k1r]);
box2d.b2DistanceJointDef.prototype.localAnchorA = W8y.z6k;
box2d.b2DistanceJointDef.prototype.localAnchorB = W8y.z6k;
box2d.b2DistanceJointDef.prototype.length = 1;
box2d.b2DistanceJointDef.prototype.frequencyHz = W8y.u8Q;
box2d.b2DistanceJointDef.prototype.dampingRatio = W8y.u8Q;

box2d.b2DistanceJointDef.prototype.Initialize = function (f, N, P, Z) {
  this[W8y.F6Q] = f;
  this[W8y.b5Q] = N;
  this[W8y.F6Q][W8y.y7M](P, this[W8y.r8H]);
  this[W8y.b5Q][W8y.y7M](Z, this[W8y.x8H]);
  this.length = box2d[W8y.s80](P, Z);
  this[W8y.o67] = W8y.u8Q;
  this[W8y.G56] = W8y.u8Q;
};

box2d[W8y.U06] = function (f) {
  goog[W8y.o66](this, f);
  this[W8y.M9M] = new box2d[W8y.p7T]();
  this[W8y.r8k] = new box2d[W8y.p7T]();
  this[W8y.u8k] = new box2d[W8y.p7T]();
  this[W8y.z3k] = new box2d[W8y.p7T]();
  this[W8y.A2k] = new box2d[W8y.p7T]();
  this[W8y.p97] = new box2d[W8y.x8M]();
  this[W8y.k67] = new box2d[W8y.x8M]();
  this[W8y.u17] = new box2d[W8y.p7T]();
  this[W8y.P86] = new box2d[W8y.p7T]();
  this[W8y.p9T] = f[W8y.o67];
  this[W8y.d8k] = f[W8y.G56];
  this[W8y.V27] = f[W8y.r8H][W8y.l26]();
  this[W8y.G47] = f[W8y.x8H][W8y.l26]();
  this[W8y.m37] = f.length;
};

goog[W8y.u80](box2d[W8y.U06], box2d[W8y.N17]);
box2d.b2DistanceJoint.prototype.m_frequencyHz = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_dampingRatio = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_bias = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_localAnchorA = W8y.z6k;
box2d.b2DistanceJoint.prototype.m_localAnchorB = W8y.z6k;
box2d.b2DistanceJoint.prototype.m_gamma = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_impulse = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_length = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_u = W8y.z6k;
box2d.b2DistanceJoint.prototype.m_rA = W8y.z6k;
box2d.b2DistanceJoint.prototype.m_rB = W8y.z6k;
box2d.b2DistanceJoint.prototype.m_localCenterA = W8y.z6k;
box2d.b2DistanceJoint.prototype.m_localCenterB = W8y.z6k;
box2d.b2DistanceJoint.prototype.m_invMassA = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_invMassB = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_invIA = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_invIB = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_mass = W8y.u8Q;
box2d.b2DistanceJoint.prototype.m_qA = W8y.z6k;
box2d.b2DistanceJoint.prototype.m_qB = W8y.z6k;
box2d.b2DistanceJoint.prototype.m_lalcA = W8y.z6k;
box2d.b2DistanceJoint.prototype.m_lalcB = W8y.z6k;

box2d.b2DistanceJoint.prototype.GetAnchorA = function (f) {
  return this[W8y.l37][W8y.I00](this[W8y.V27], f);
};

box2d.b2DistanceJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.I00](this[W8y.G47], f);
};

box2d.b2DistanceJoint.prototype.GetReactionForce = function (f, N) {
  var P = "D4c",
      Z = "R4c";
  return N[W8y.y47](W8y[Z](f, this[W8y.k1M], this[W8y.M9M][W8y.T9T]), W8y[P](f, this[W8y.k1M], this[W8y.M9M][W8y.Z9T]));
};

box2d.b2DistanceJoint.prototype.GetReactionTorque = function (f) {
  return W8y.u8Q;
};

box2d.b2DistanceJoint.prototype.GetLocalAnchorA = function (f) {
  return f[W8y.k97](this[W8y.V27]);
};

box2d.b2DistanceJoint.prototype.GetLocalAnchorB = function (f) {
  return f[W8y.k97](this[W8y.G47]);
};

box2d.b2DistanceJoint.prototype.SetLength = function (f) {
  this[W8y.m37] = f;
};

box2d.b2DistanceJoint.prototype.GetLength = function () {
  return this[W8y.m37];
};

box2d.b2DistanceJoint.prototype.SetFrequency = function (f) {
  this[W8y.p9T] = f;
};

box2d.b2DistanceJoint.prototype.GetFrequency = function () {
  return this[W8y.p9T];
};

box2d.b2DistanceJoint.prototype.SetDampingRatio = function (f) {
  this[W8y.d8k] = f;
};

box2d.b2DistanceJoint.prototype.GetDampingRatio = function () {
  return this[W8y.d8k];
};

box2d.b2DistanceJoint.prototype.Dump = function () {
  var f = "  jd.length = %.15f;\n",
      N = "  /*box2d.b2DistanceJointDef*/ var jd = new box2d.b2DistanceJointDef();\n";

  if (box2d[W8y.F2k]) {
    var P = this[W8y.l37][W8y.x5M],
        Z = this[W8y.v27][W8y.x5M];
    box2d[W8y.R50](N);
    box2d[W8y.R50](W8y.Q67, P);
    box2d[W8y.R50](W8y.k3r, Z);
    box2d[W8y.R50](W8y.i1r, this[W8y.N96] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W8y.v70, this[W8y.V27][W8y.T9T], this[W8y.V27][W8y.Z9T]);
    box2d[W8y.R50](W8y.y77, this[W8y.G47][W8y.T9T], this[W8y.G47][W8y.Z9T]);
    box2d[W8y.R50](f, this[W8y.m37]);
    box2d[W8y.R50](W8y.K76, this[W8y.p9T]);
    box2d[W8y.R50](W8y.e0T, this[W8y.d8k]);
    box2d[W8y.R50](W8y.P6M, this[W8y.U56]);
  }
};

box2d.b2DistanceJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "w3c",
      P = "A2c",
      Z = "G2c",
      W = "v2c",
      l = "D2c",
      m = "S2c",
      C = "o2c",
      n = "q2c",
      k = "Q2c",
      H = "O2c",
      i = "x2c",
      Q = "m2c",
      e = "Y2c",
      j = "c2c",
      o = "P2c",
      S = "w2c",
      d = "F4c",
      u = "p4c",
      D = "L4c";
  this[W8y.G0k] = this[W8y.l37][W8y.x5M];
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.z3k][W8y.k97](this[W8y.l37][W8y.i6k][W8y.O8Q]);
  this[W8y.A2k][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.j96] = this[W8y.l37][W8y.k86];
  this[W8y.V96] = this[W8y.v27][W8y.k86];
  this[W8y.q8M] = this[W8y.l37][W8y.M7H];
  this[W8y.E9M] = this[W8y.v27][W8y.M7H];
  var M = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      y1 = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      h = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      E = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      L = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      w1 = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      B = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      N1 = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      f1 = this[W8y.p97][W8y.h70](y1),
      c1 = this[W8y.k67][W8y.h70](w1);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  box2d[W8y.x47](f1, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  box2d[W8y.x47](c1, this[W8y.P86], this[W8y.u8k]);
  this[W8y.M9M][W8y.T9T] = L[W8y.T9T] + this[W8y.u8k][W8y.T9T] - M[W8y.T9T] - this[W8y.r8k][W8y.T9T];
  this[W8y.M9M][W8y.Z9T] = L[W8y.Z9T] + this[W8y.u8k][W8y.Z9T] - M[W8y.Z9T] - this[W8y.r8k][W8y.Z9T];
  var l1 = this[W8y.M9M][W8y.a2k]();

  if (W8y[D](l1, box2d[W8y.Z8k])) {
    this[W8y.M9M][W8y.E40](W8y[u](1, l1));
  } else {
    this[W8y.M9M][W8y.j6k]();
  }

  var P1 = box2d[W8y.t10](this[W8y.r8k], this[W8y.M9M]),
      s1 = box2d[W8y.t10](this[W8y.u8k], this[W8y.M9M]),
      b1 = this[W8y.j96] + W8y[d](this[W8y.q8M], P1, P1) + this[W8y.V96] + W8y[S](this[W8y.E9M], s1, s1);
  this[W8y.Z7T] = W8y[o](b1, 0) ? W8y[j](1, b1) : 0;

  if (W8y[e](this[W8y.p9T], 0)) {
    var m1 = W8y[Q](l1, this[W8y.m37]),
        W1 = W8y[i](2, box2d[W8y.e5M], this[W8y.p9T]),
        J1 = W8y[H](2, this[W8y.Z7T], this[W8y.d8k], W1),
        C1 = W8y[k](this[W8y.Z7T], W1, W1),
        x1 = f[W8y.D5H][W8y.I5H];
    this[W8y.e3k] = W8y[n](x1, J1 + x1 * C1);
    this[W8y.e3k] = W8y[C](this[W8y.e3k], 0) ? W8y[m](1, this[W8y.e3k]) : 0;
    this[W8y.b96] = W8y[l](m1, x1, C1, this[W8y.e3k]);
    b1 += this[W8y.e3k];
    this[W8y.Z7T] = W8y[W](b1, 0) ? W8y[Z](1, b1) : 0;
  } else {
    this[W8y.e3k] = 0;
    this[W8y.b96] = 0;
  }

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.k1M] *= f[W8y.D5H][W8y.k30];
    var T1 = box2d[W8y.X26](this[W8y.k1M], this[W8y.M9M], box2d.b2DistanceJoint.prototype.InitVelocityConstraints.s_P);
    h[W8y.I5M](this[W8y.j96], T1);
    E -= W8y[P](this[W8y.q8M], box2d[W8y.t10](this[W8y.r8k], T1));
    B[W8y.a9k](this[W8y.V96], T1);
    N1 += W8y[N](this[W8y.E9M], box2d[W8y.t10](this[W8y.u8k], T1));
  } else {
    this[W8y.k1M] = 0;
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = E;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = N1;
};

box2d.b2DistanceJoint.prototype.InitVelocityConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2DistanceJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "s3c",
      P = "X3c",
      Z = "N3c",
      W = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      l = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      m = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      C = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      n = box2d[W8y.S7T](W, l, this[W8y.r8k], box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpA),
      k = box2d[W8y.S7T](m, C, this[W8y.u8k], box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpB),
      H = box2d[W8y.o27](this[W8y.M9M], box2d[W8y.x8T](k, n, box2d[W8y.p7T][W8y.t7M])),
      i = -this[W8y.Z7T] * (H + this[W8y.b96] + W8y[Z](this[W8y.e3k], this[W8y.k1M]));
  this[W8y.k1M] += i;
  var Q = box2d[W8y.X26](i, this[W8y.M9M], box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_P);
  W[W8y.I5M](this[W8y.j96], Q);
  l -= W8y[P](this[W8y.q8M], box2d[W8y.t10](this[W8y.r8k], Q));
  m[W8y.a9k](this[W8y.V96], Q);
  C += W8y[N](this[W8y.E9M], box2d[W8y.t10](this[W8y.u8k], Q));
  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = l;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = C;
};

box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d[W8y.p7T]();
box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d[W8y.p7T]();
box2d.b2DistanceJoint.prototype.SolveVelocityConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2DistanceJoint.prototype.SolvePositionConstraints = function (f) {
  var N = "H3c",
      P = "K3c",
      Z = "n3c",
      W = "J3c",
      l = "b3c";

  if (W8y[l](this[W8y.p9T], 0)) {
    return true;
  }

  var m = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      C = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      n = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      k = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      H = this[W8y.p97][W8y.h70](C),
      i = this[W8y.k67][W8y.h70](k),
      Q = box2d[W8y.x47](this[W8y.p97], this[W8y.u17], this[W8y.r8k]),
      e = box2d[W8y.x47](this[W8y.k67], this[W8y.P86], this[W8y.u8k]),
      j = this[W8y.M9M];
  j[W8y.T9T] = n[W8y.T9T] + e[W8y.T9T] - m[W8y.T9T] - Q[W8y.T9T];
  j[W8y.Z9T] = n[W8y.Z9T] + e[W8y.Z9T] - m[W8y.Z9T] - Q[W8y.Z9T];
  var o = this[W8y.M9M][W8y.Y27](),
      S = W8y[W](o, this[W8y.m37]);
  S = box2d[W8y.N06](S, -box2d[W8y.d1r], box2d[W8y.d1r]);
  var d = -this[W8y.Z7T] * S,
      u = box2d[W8y.X26](d, j, box2d.b2DistanceJoint.prototype.SolvePositionConstraints.s_P);
  m[W8y.I5M](this[W8y.j96], u);
  C -= W8y[Z](this[W8y.q8M], box2d[W8y.t10](Q, u));
  n[W8y.a9k](this[W8y.V96], u);
  k += W8y[P](this[W8y.E9M], box2d[W8y.t10](e, u));
  f[W8y.P1T][this[W8y.G0k]][W8y.U30] = C;
  f[W8y.P1T][this[W8y.a0k]][W8y.U30] = k;
  return W8y[N](box2d[W8y.t67](S), box2d[W8y.Z8k]);
};

box2d.b2DistanceJoint.prototype.SolvePositionConstraints.s_P = new box2d[W8y.p7T]();
goog[W8y.U3T](W8y.w37);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Joint');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.L3M] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.b46]);
  this[W8y.r8H] = new box2d[W8y.p7T]();
  this[W8y.x8H] = new box2d[W8y.p7T]();
};

goog[W8y.u80](box2d[W8y.L3M], box2d[W8y.k1r]);
box2d.b2FrictionJointDef.prototype.localAnchorA = W8y.z6k;
box2d.b2FrictionJointDef.prototype.localAnchorB = W8y.z6k;
box2d.b2FrictionJointDef.prototype.maxForce = W8y.u8Q;
box2d.b2FrictionJointDef.prototype.maxTorque = W8y.u8Q;

box2d.b2FrictionJointDef.prototype.Initialize = function (f, N, P) {
  this[W8y.F6Q] = f;
  this[W8y.b5Q] = N;
  this[W8y.F6Q][W8y.y7M](P, this[W8y.r8H]);
  this[W8y.b5Q][W8y.y7M](P, this[W8y.x8H]);
};

box2d[W8y.c1k] = function (f) {
  goog[W8y.o66](this, f);
  this[W8y.V27] = f[W8y.r8H][W8y.l26]();
  this[W8y.G47] = f[W8y.x8H][W8y.l26]();
  this[W8y.m1r] = new box2d[W8y.p7T]()[W8y.j6k]();
  this[W8y.E9k] = f[W8y.A9k];
  this[W8y.i8M] = f[W8y.w66];
  this[W8y.r8k] = new box2d[W8y.p7T]();
  this[W8y.u8k] = new box2d[W8y.p7T]();
  this[W8y.z3k] = new box2d[W8y.p7T]();
  this[W8y.A2k] = new box2d[W8y.p7T]();
  this[W8y.T9M] = new box2d[W8y.T0H]()[W8y.j6k]();
  this[W8y.p97] = new box2d[W8y.x8M]();
  this[W8y.k67] = new box2d[W8y.x8M]();
  this[W8y.u17] = new box2d[W8y.p7T]();
  this[W8y.P86] = new box2d[W8y.p7T]();
  this[W8y.G3r] = new box2d[W8y.T0H]();
};

goog[W8y.u80](box2d[W8y.c1k], box2d[W8y.N17]);
box2d.b2FrictionJoint.prototype.m_localAnchorA = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_localAnchorB = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_linearImpulse = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_angularImpulse = W8y.u8Q;
box2d.b2FrictionJoint.prototype.m_maxForce = W8y.u8Q;
box2d.b2FrictionJoint.prototype.m_maxTorque = W8y.u8Q;
box2d.b2FrictionJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2FrictionJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2FrictionJoint.prototype.m_rA = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_rB = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_localCenterA = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_localCenterB = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_invMassA = W8y.u8Q;
box2d.b2FrictionJoint.prototype.m_invMassB = W8y.u8Q;
box2d.b2FrictionJoint.prototype.m_invIA = W8y.u8Q;
box2d.b2FrictionJoint.prototype.m_invIB = W8y.u8Q;
box2d.b2FrictionJoint.prototype.m_linearMass = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_angularMass = W8y.u8Q;
box2d.b2FrictionJoint.prototype.m_qA = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_qB = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_lalcA = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_lalcB = W8y.z6k;
box2d.b2FrictionJoint.prototype.m_K = W8y.z6k;

box2d.b2FrictionJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "P0c",
      P = "f0c",
      Z = "t3c",
      W = "z3c",
      l = "v3c",
      m = "u3c",
      C = "S3c",
      n = "I3c",
      k = "r3c";
  this[W8y.G0k] = this[W8y.l37][W8y.x5M];
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.z3k][W8y.k97](this[W8y.l37][W8y.i6k][W8y.O8Q]);
  this[W8y.A2k][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.j96] = this[W8y.l37][W8y.k86];
  this[W8y.V96] = this[W8y.v27][W8y.k86];
  this[W8y.q8M] = this[W8y.l37][W8y.M7H];
  this[W8y.E9M] = this[W8y.v27][W8y.M7H];
  var H = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      i = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      Q = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      e = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      j = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      o = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      S = this[W8y.p97][W8y.h70](H),
      d = this[W8y.k67][W8y.h70](e);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  var u = box2d[W8y.x47](S, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  var D = box2d[W8y.x47](d, this[W8y.P86], this[W8y.u8k]),
      M = this[W8y.j96],
      y1 = this[W8y.V96],
      h = this[W8y.q8M],
      E = this[W8y.E9M],
      L = this[W8y.G3r];
  L[W8y.Q57][W8y.T9T] = M + y1 + W8y[k](h, u[W8y.Z9T], u[W8y.Z9T]) + W8y[n](E, D[W8y.Z9T], D[W8y.Z9T]);
  L[W8y.Q57][W8y.Z9T] = -h * u[W8y.T9T] * u[W8y.Z9T] - W8y[C](E, D[W8y.T9T], D[W8y.Z9T]);
  L[W8y.D57][W8y.T9T] = L[W8y.Q57][W8y.Z9T];
  L[W8y.D57][W8y.Z9T] = M + y1 + W8y[m](h, u[W8y.T9T], u[W8y.T9T]) + W8y[l](E, D[W8y.T9T], D[W8y.T9T]);
  L[W8y.X1M](this[W8y.T9M]);
  this[W8y.u5Q] = h + E;

  if (W8y[W](this[W8y.u5Q], 0)) {
    this[W8y.u5Q] = W8y[Z](1, this[W8y.u5Q]);
  }

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.m1r][W8y.E40](f[W8y.D5H][W8y.k30]);
    this[W8y.g8H] *= f[W8y.D5H][W8y.k30];
    var w1 = this[W8y.m1r];
    i[W8y.I5M](M, w1);
    Q -= W8y[P](h, box2d[W8y.t10](this[W8y.r8k], w1) + this[W8y.g8H]);
    j[W8y.a9k](y1, w1);
    o += W8y[N](E, box2d[W8y.t10](this[W8y.u8k], w1) + this[W8y.g8H]);
  } else {
    this[W8y.m1r][W8y.j6k]();
    this[W8y.g8H] = 0;
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = Q;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = o;
};

box2d.b2FrictionJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "I0c",
      P = "j0c",
      Z = "Q0c",
      W = "k0c",
      l = "C0c",
      m = "x0c",
      C = "m0c",
      n = "Y0c",
      k = "c0c",
      H = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      i = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      Q = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      e = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      j = this[W8y.j96],
      o = this[W8y.V96],
      S = this[W8y.q8M],
      d = this[W8y.E9M],
      u = f[W8y.D5H][W8y.I5H];

  if (true) {
    var D = W8y[k](e, i),
        M = -this[W8y.u5Q] * D,
        y1 = this[W8y.g8H],
        h = W8y[n](u, this[W8y.i8M]);
    this[W8y.g8H] = box2d[W8y.N06](this[W8y.g8H] + M, -h, h);
    M = W8y[C](this[W8y.g8H], y1);
    i -= W8y[m](S, M);
    e += W8y[l](d, M);
  }

  if (true) {
    var D = box2d[W8y.x8T](box2d[W8y.S7T](Q, e, this[W8y.u8k], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.S7T](H, i, this[W8y.r8k], box2d[W8y.p7T][W8y.l9M]), box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_Cdot),
        E = box2d[W8y.n1H](this[W8y.T9M], D, box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_impulseV)[W8y.P8k](),
        L = box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_oldImpulseV.Copy(this[W8y.m1r]);
    this[W8y.m1r][W8y.t4H](E);
    var h = W8y[W](u, this[W8y.E9k]);

    if (W8y[Z](this[W8y.m1r][W8y.A5T](), h * h)) {
      this[W8y.m1r][W8y.Y27]();
      this[W8y.m1r][W8y.E40](h);
    }

    box2d[W8y.x8T](this[W8y.m1r], L, E);
    H[W8y.I5M](j, E);
    i -= W8y[P](S, box2d[W8y.t10](this[W8y.r8k], E));
    Q[W8y.a9k](o, E);
    e += W8y[N](d, box2d[W8y.t10](this[W8y.u8k], E));
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = i;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = e;
};

box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d[W8y.p7T]();
box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_impulseV = new box2d[W8y.p7T]();
box2d.b2FrictionJoint.prototype.SolveVelocityConstraints.s_oldImpulseV = new box2d[W8y.p7T]();

box2d.b2FrictionJoint.prototype.SolvePositionConstraints = function (f) {
  return true;
};

box2d.b2FrictionJoint.prototype.GetAnchorA = function (f) {
  return this[W8y.l37][W8y.I00](this[W8y.V27], f);
};

box2d.b2FrictionJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.I00](this[W8y.G47], f);
};

box2d.b2FrictionJoint.prototype.GetReactionForce = function (f, N) {
  var P = "E0c",
      Z = "R0c";
  return N[W8y.y47](W8y[Z](f, this[W8y.m1r][W8y.T9T]), W8y[P](f, this[W8y.m1r][W8y.Z9T]));
};

box2d.b2FrictionJoint.prototype.GetReactionTorque = function (f) {
  var N = "M0c";
  return W8y[N](f, this[W8y.g8H]);
};

box2d.b2FrictionJoint.prototype.GetLocalAnchorA = function (f) {
  return f[W8y.k97](this[W8y.V27]);
};

box2d.b2FrictionJoint.prototype.GetLocalAnchorB = function (f) {
  return f[W8y.k97](this[W8y.G47]);
};

box2d.b2FrictionJoint.prototype.SetMaxForce = function (f) {
  this[W8y.E9k] = f;
};

box2d.b2FrictionJoint.prototype.GetMaxForce = function () {
  return this[W8y.E9k];
};

box2d.b2FrictionJoint.prototype.SetMaxTorque = function (f) {
  this[W8y.i8M] = f;
};

box2d.b2FrictionJoint.prototype.GetMaxTorque = function () {
  return this[W8y.i8M];
};

box2d.b2FrictionJoint.prototype.Dump = function () {
  var f = "  /*box2d.b2FrictionJointDef*/ var jd = new box2d.b2FrictionJointDef();\n";

  if (box2d[W8y.F2k]) {
    var N = this[W8y.l37][W8y.x5M],
        P = this[W8y.v27][W8y.x5M];
    box2d[W8y.R50](f);
    box2d[W8y.R50](W8y.Q67, N);
    box2d[W8y.R50](W8y.k3r, P);
    box2d[W8y.R50](W8y.i1r, this[W8y.N96] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W8y.v70, this[W8y.V27][W8y.T9T], this[W8y.V27][W8y.Z9T]);
    box2d[W8y.R50](W8y.y77, this[W8y.G47][W8y.T9T], this[W8y.G47][W8y.Z9T]);
    box2d[W8y.R50](W8y.g6M, this[W8y.E9k]);
    box2d[W8y.R50](W8y.d0k, this[W8y.i8M]);
    box2d[W8y.R50](W8y.P6M, this[W8y.U56]);
  }
};

goog[W8y.U3T](W8y.I5Q);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Joint');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.q50] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.F27]);
  this[W8y.E8M] = new box2d[W8y.p7T]();
};

goog[W8y.u80](box2d[W8y.q50], box2d[W8y.k1r]);
box2d.b2MouseJointDef.prototype.target = W8y.z6k;
box2d.b2MouseJointDef.prototype.maxForce = W8y.u8Q;
box2d.b2MouseJointDef.prototype.frequencyHz = W8y.L8Q;
box2d.b2MouseJointDef.prototype.dampingRatio = W8y.E3H;

box2d[W8y.h3T] = function (f) {
  var N = "A0c",
      P = "G0c",
      Z = "v0c";
  goog[W8y.o66](this, f);
  this[W8y.G47] = new box2d[W8y.p7T]();
  this[W8y.l7H] = new box2d[W8y.p7T]();
  this[W8y.k1M] = new box2d[W8y.p7T]();
  this[W8y.u8k] = new box2d[W8y.p7T]();
  this[W8y.A2k] = new box2d[W8y.p7T]();
  this[W8y.Z7T] = new box2d[W8y.T0H]();
  this[W8y.n4r] = new box2d[W8y.p7T]();
  this[W8y.k67] = new box2d[W8y.x8M]();
  this[W8y.P86] = new box2d[W8y.p7T]();
  this[W8y.G3r] = new box2d[W8y.T0H]();

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](f[W8y.E8M][W8y.i07]());
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f[W8y.A9k]) && W8y[Z](f[W8y.A9k], W8y.u8Q));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f[W8y.o67]) && W8y[P](f[W8y.o67], W8y.u8Q));
  }

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f[W8y.G56]) && W8y[N](f[W8y.G56], W8y.u8Q));
  }

  this[W8y.l7H][W8y.k97](f[W8y.E8M]);
  box2d[W8y.a90](this[W8y.v27][W8y.x8Q](), this[W8y.l7H], this[W8y.G47]);
  this[W8y.E9k] = f[W8y.A9k];
  this[W8y.k1M][W8y.j6k]();
  this[W8y.p9T] = f[W8y.o67];
  this[W8y.d8k] = f[W8y.G56];
  this[W8y.P76] = W8y.u8Q;
  this[W8y.e3k] = W8y.u8Q;
};

goog[W8y.u80](box2d[W8y.h3T], box2d[W8y.N17]);
box2d.b2MouseJoint.prototype.m_localAnchorB = W8y.z6k;
box2d.b2MouseJoint.prototype.m_targetA = W8y.z6k;
box2d.b2MouseJoint.prototype.m_frequencyHz = W8y.u8Q;
box2d.b2MouseJoint.prototype.m_dampingRatio = W8y.u8Q;
box2d.b2MouseJoint.prototype.m_beta = W8y.u8Q;
box2d.b2MouseJoint.prototype.m_impulse = W8y.z6k;
box2d.b2MouseJoint.prototype.m_maxForce = W8y.u8Q;
box2d.b2MouseJoint.prototype.m_gamma = W8y.u8Q;
box2d.b2MouseJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2MouseJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2MouseJoint.prototype.m_rB = W8y.z6k;
box2d.b2MouseJoint.prototype.m_localCenterB = W8y.z6k;
box2d.b2MouseJoint.prototype.m_invMassB = W8y.u8Q;
box2d.b2MouseJoint.prototype.m_invIB = W8y.u8Q;
box2d.b2MouseJoint.prototype.m_mass = W8y.z6k;
box2d.b2MouseJoint.prototype.m_C = W8y.z6k;
box2d.b2MouseJoint.prototype.m_qB = W8y.z6k;
box2d.b2MouseJoint.prototype.m_lalcB = W8y.z6k;
box2d.b2MouseJoint.prototype.m_K = W8y.z6k;

box2d.b2MouseJoint.prototype.SetTarget = function (f) {
  var N = "w7c";

  if (W8y[N](this[W8y.v27][W8y.h0r](), W8y.G0T)) {
    this[W8y.v27][W8y.U5H](W8y.f5k);
  }

  this[W8y.l7H][W8y.k97](f);
};

box2d.b2MouseJoint.prototype.GetTarget = function (f) {
  return f[W8y.k97](this[W8y.l7H]);
};

box2d.b2MouseJoint.prototype.SetMaxForce = function (f) {
  this[W8y.E9k] = f;
};

box2d.b2MouseJoint.prototype.GetMaxForce = function () {
  return this[W8y.E9k];
};

box2d.b2MouseJoint.prototype.SetFrequency = function (f) {
  this[W8y.p9T] = f;
};

box2d.b2MouseJoint.prototype.GetFrequency = function () {
  return this[W8y.p9T];
};

box2d.b2MouseJoint.prototype.SetDampingRatio = function (f) {
  this[W8y.d8k] = f;
};

box2d.b2MouseJoint.prototype.GetDampingRatio = function () {
  return this[W8y.d8k];
};

box2d.b2MouseJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "p7c",
      P = "L7c",
      Z = "u7c",
      W = "S7c",
      l = "I7c",
      m = "r7c",
      C = "H7c",
      n = "K7c",
      k = "n7c",
      H = "J7c",
      i = "b7c",
      Q = "c7c",
      e = "N7c";
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.A2k][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.V96] = this[W8y.v27][W8y.k86];
  this[W8y.E9M] = this[W8y.v27][W8y.M7H];
  var j = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      o = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      S = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      d = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      u = this[W8y.k67][W8y.h70](o),
      D = this[W8y.v27][W8y.L3T](),
      M = W8y[e](2, box2d[W8y.e5M], this[W8y.p9T]),
      y1 = W8y[Q](2, D, this[W8y.d8k], M),
      h = W8y[i](D, M * M),
      E = f[W8y.D5H][W8y.I5H];

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[H](y1 + E * h, box2d[W8y.F5k]));
  }

  this[W8y.e3k] = W8y[k](E, y1 + E * h);

  if (W8y[n](this[W8y.e3k], 0)) {
    this[W8y.e3k] = W8y[C](1, this[W8y.e3k]);
  }

  this[W8y.P76] = W8y[m](E, h, this[W8y.e3k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  box2d[W8y.x47](u, this[W8y.P86], this[W8y.u8k]);
  var L = this[W8y.G3r];
  L[W8y.Q57][W8y.T9T] = this[W8y.V96] + W8y[l](this[W8y.E9M], this[W8y.u8k][W8y.Z9T], this[W8y.u8k][W8y.Z9T]) + this[W8y.e3k];
  L[W8y.Q57][W8y.Z9T] = -this[W8y.E9M] * this[W8y.u8k][W8y.T9T] * this[W8y.u8k][W8y.Z9T];
  L[W8y.D57][W8y.T9T] = L[W8y.Q57][W8y.Z9T];
  L[W8y.D57][W8y.Z9T] = this[W8y.V96] + W8y[W](this[W8y.E9M], this[W8y.u8k][W8y.T9T], this[W8y.u8k][W8y.T9T]) + this[W8y.e3k];
  L[W8y.X1M](this[W8y.Z7T]);
  this[W8y.n4r][W8y.T9T] = j[W8y.T9T] + this[W8y.u8k][W8y.T9T] - this[W8y.l7H][W8y.T9T];
  this[W8y.n4r][W8y.Z9T] = j[W8y.Z9T] + this[W8y.u8k][W8y.Z9T] - this[W8y.l7H][W8y.Z9T];
  this[W8y.n4r][W8y.E40](this[W8y.P76]);
  d *= 0.98;

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.k1M][W8y.E40](f[W8y.D5H][W8y.k30]);
    S[W8y.T9T] += W8y[Z](this[W8y.V96], this[W8y.k1M][W8y.T9T]);
    S[W8y.Z9T] += W8y[P](this[W8y.V96], this[W8y.k1M][W8y.Z9T]);
    d += W8y[N](this[W8y.E9M], box2d[W8y.t10](this[W8y.u8k], this[W8y.k1M]));
  } else {
    this[W8y.k1M][W8y.j6k]();
  }

  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = d;
};

box2d.b2MouseJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "Z9c",
      P = "U9c",
      Z = "y9c",
      W = "F7c",
      l = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      m = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      C = box2d[W8y.S7T](l, m, this[W8y.u8k], box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_Cdot),
      n = box2d[W8y.n1H](this[W8y.Z7T], box2d[W8y.m3T](C, box2d[W8y.m3T](this[W8y.n4r], box2d[W8y.X26](this[W8y.e3k], this[W8y.k1M], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.t7M])[W8y.P8k](), box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_impulse),
      k = box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_oldImpulse.Copy(this[W8y.k1M]);
  this[W8y.k1M][W8y.t4H](n);
  var H = W8y[W](f[W8y.D5H][W8y.I5H], this[W8y.E9k]);

  if (W8y[Z](this[W8y.k1M][W8y.A5T](), H * H)) {
    this[W8y.k1M][W8y.E40](W8y[P](H, this[W8y.k1M][W8y.a2k]()));
  }

  box2d[W8y.x8T](this[W8y.k1M], k, n);
  l[W8y.a9k](this[W8y.V96], n);
  m += W8y[N](this[W8y.E9M], box2d[W8y.t10](this[W8y.u8k], n));
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = m;
};

box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d[W8y.p7T]();
box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d[W8y.p7T]();
box2d.b2MouseJoint.prototype.SolveVelocityConstraints.s_oldImpulse = new box2d[W8y.p7T]();

box2d.b2MouseJoint.prototype.SolvePositionConstraints = function (f) {
  return true;
};

box2d.b2MouseJoint.prototype.GetAnchorA = function (f) {
  return f[W8y.k97](this[W8y.l7H]);
};

box2d.b2MouseJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.I00](this[W8y.G47], f);
};

box2d.b2MouseJoint.prototype.GetReactionForce = function (f, N) {
  return box2d[W8y.X26](f, this[W8y.k1M], N);
};

box2d.b2MouseJoint.prototype.GetReactionTorque = function (f) {
  return W8y.u8Q;
};

box2d.b2MouseJoint.prototype.Dump = function () {
  var f = "Mouse joint dumping is not supported.\n";

  if (box2d[W8y.F2k]) {
    box2d[W8y.R50](f);
  }
};

box2d.b2MouseJoint.prototype.ShiftOrigin = function (f) {
  this[W8y.l7H][W8y.d6M](f);
};

goog[W8y.U3T](W8y.K47);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Controller');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.S20] = function () {
  goog[W8y.o66](this);
  this[W8y.N20] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
};

goog[W8y.u80](box2d[W8y.S20], box2d[W8y.X9H]);
box2d.b2ConstantAccelController.prototype.F = W8y.z6k;

box2d.b2ConstantForceController.prototype.Step = function (f) {
  for (var N = this[W8y.I80]; N; N = N[W8y.i2k]) {
    var P = N[W8y.R6k];
    if (!P[W8y.h0r]()) continue;
    P[W8y.h40](this[W8y.N20], P[W8y.Z86]());
  }
};

goog[W8y.U3T](W8y.y6k);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Joint');
goog[W8y.V20]('box2d.b2Math');
W8y[W8y.K3M](W8y.d8Q);

box2d[W8y.I66] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.s7H]);
  this[W8y.D07] = W8y.f5k;
  this[W8y.O76] = new box2d[W8y.p7T](-W8y.D8Q, W8y.D8Q);
  this[W8y.u06] = new box2d[W8y.p7T](W8y.D8Q, W8y.D8Q);
  this[W8y.r8H] = new box2d[W8y.p7T](-W8y.D8Q, W8y.u8Q);
  this[W8y.x8H] = new box2d[W8y.p7T](W8y.D8Q, W8y.u8Q);
};

goog[W8y.u80](box2d[W8y.I66], box2d[W8y.k1r]);
box2d.b2PulleyJointDef.prototype.groundAnchorA = W8y.z6k;
box2d.b2PulleyJointDef.prototype.groundAnchorB = W8y.z6k;
box2d.b2PulleyJointDef.prototype.localAnchorA = W8y.z6k;
box2d.b2PulleyJointDef.prototype.localAnchorB = W8y.z6k;
box2d.b2PulleyJointDef.prototype.lengthA = W8y.u8Q;
box2d.b2PulleyJointDef.prototype.lengthB = W8y.u8Q;
box2d.b2PulleyJointDef.prototype.ratio = W8y.D8Q;

box2d.b2PulleyJointDef.prototype.Initialize = function (f, N, P, Z, W, l, m) {
  var C = "W9c";
  this[W8y.F6Q] = f;
  this[W8y.b5Q] = N;
  this[W8y.O76][W8y.k97](P);
  this[W8y.u06][W8y.k97](Z);
  this[W8y.F6Q][W8y.y7M](W, this[W8y.r8H]);
  this[W8y.b5Q][W8y.y7M](l, this[W8y.x8H]);
  this[W8y.t76] = box2d[W8y.s80](W, P);
  this[W8y.i76] = box2d[W8y.s80](l, Z);
  this[W8y.C96] = m;

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[C](this[W8y.C96], box2d[W8y.F5k]));
  }
};

box2d[W8y.f20] = function (f) {
  var N = "g9c",
      P = "l9c";
  goog[W8y.o66](this, f);
  this[W8y.j70] = new box2d[W8y.p7T]();
  this[W8y.b70] = new box2d[W8y.p7T]();
  this[W8y.V27] = new box2d[W8y.p7T]();
  this[W8y.G47] = new box2d[W8y.p7T]();
  this[W8y.D00] = new box2d[W8y.p7T]();
  this[W8y.f70] = new box2d[W8y.p7T]();
  this[W8y.r8k] = new box2d[W8y.p7T]();
  this[W8y.u8k] = new box2d[W8y.p7T]();
  this[W8y.z3k] = new box2d[W8y.p7T]();
  this[W8y.A2k] = new box2d[W8y.p7T]();
  this[W8y.p97] = new box2d[W8y.x8M]();
  this[W8y.k67] = new box2d[W8y.x8M]();
  this[W8y.u17] = new box2d[W8y.p7T]();
  this[W8y.P86] = new box2d[W8y.p7T]();
  this[W8y.j70][W8y.k97](f[W8y.O76]);
  this[W8y.b70][W8y.k97](f[W8y.u06]);
  this[W8y.V27][W8y.k97](f[W8y.r8H]);
  this[W8y.G47][W8y.k97](f[W8y.x8H]);
  this[W8y.L26] = f[W8y.t76];
  this[W8y.U36] = f[W8y.i76];

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[P](f[W8y.C96], W8y.u8Q));
  }

  this[W8y.V7k] = f[W8y.C96];
  this[W8y.u50] = f[W8y.t76] + W8y[N](this[W8y.V7k], f[W8y.i76]);
  this[W8y.k1M] = W8y.u8Q;
};

goog[W8y.u80](box2d[W8y.f20], box2d[W8y.N17]);
box2d.b2PulleyJoint.prototype.m_groundAnchorA = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_groundAnchorB = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_lengthA = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_lengthB = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_localAnchorA = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_localAnchorB = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_constant = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_ratio = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_impulse = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_uA = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_uB = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_rA = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_rB = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_localCenterA = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_localCenterB = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_invMassA = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_invMassB = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_invIA = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_invIB = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_mass = W8y.u8Q;
box2d.b2PulleyJoint.prototype.m_qA = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_qB = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_lalcA = W8y.z6k;
box2d.b2PulleyJoint.prototype.m_lalcB = W8y.z6k;

box2d.b2PulleyJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "t9c",
      P = "z9c",
      Z = "B9c",
      W = "h9c",
      l = "E9c",
      m = "a9c",
      C = "q9c",
      n = "i9c",
      k = "T9c",
      H = "O9c",
      i = "V9c";
  this[W8y.G0k] = this[W8y.l37][W8y.x5M];
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.z3k][W8y.k97](this[W8y.l37][W8y.i6k][W8y.O8Q]);
  this[W8y.A2k][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.j96] = this[W8y.l37][W8y.k86];
  this[W8y.V96] = this[W8y.v27][W8y.k86];
  this[W8y.q8M] = this[W8y.l37][W8y.M7H];
  this[W8y.E9M] = this[W8y.v27][W8y.M7H];
  var Q = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      e = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      j = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      o = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      S = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      d = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      u = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      D = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      M = this[W8y.p97][W8y.h70](e),
      y1 = this[W8y.k67][W8y.h70](d);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  box2d[W8y.x47](M, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  box2d[W8y.x47](y1, this[W8y.P86], this[W8y.u8k]);
  this[W8y.D00][W8y.k97](Q)[W8y.t4H](this[W8y.r8k])[W8y.d6M](this[W8y.j70]);
  this[W8y.f70][W8y.k97](S)[W8y.t4H](this[W8y.u8k])[W8y.d6M](this[W8y.b70]);
  var h = this[W8y.D00][W8y.a2k](),
      E = this[W8y.f70][W8y.a2k]();

  if (W8y[i](h, 10 * box2d[W8y.Z8k])) {
    this[W8y.D00][W8y.E40](W8y[H](1, h));
  } else {
    this[W8y.D00][W8y.j6k]();
  }

  if (W8y[k](E, 10 * box2d[W8y.Z8k])) {
    this[W8y.f70][W8y.E40](W8y[n](1, E));
  } else {
    this[W8y.f70][W8y.j6k]();
  }

  var L = box2d[W8y.t10](this[W8y.r8k], this[W8y.D00]),
      w1 = box2d[W8y.t10](this[W8y.u8k], this[W8y.f70]),
      B = this[W8y.j96] + W8y[C](this[W8y.q8M], L, L),
      N1 = this[W8y.V96] + W8y[m](this[W8y.E9M], w1, w1);
  this[W8y.Z7T] = B + W8y[l](this[W8y.V7k], this[W8y.V7k], N1);

  if (W8y[W](this[W8y.Z7T], 0)) {
    this[W8y.Z7T] = W8y[Z](1, this[W8y.Z7T]);
  }

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.k1M] *= f[W8y.D5H][W8y.k30];
    var f1 = box2d[W8y.X26](-this[W8y.k1M], this[W8y.D00], box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PA),
        c1 = box2d[W8y.X26](-this[W8y.V7k] * this[W8y.k1M], this[W8y.f70], box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PB);
    j[W8y.a9k](this[W8y.j96], f1);
    o += W8y[P](this[W8y.q8M], box2d[W8y.t10](this[W8y.r8k], f1));
    u[W8y.a9k](this[W8y.V96], c1);
    D += W8y[N](this[W8y.E9M], box2d[W8y.t10](this[W8y.u8k], c1));
  } else {
    this[W8y.k1M] = 0;
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = o;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = D;
};

box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PA = new box2d[W8y.p7T]();
box2d.b2PulleyJoint.prototype.InitVelocityConstraints.s_PB = new box2d[W8y.p7T]();

box2d.b2PulleyJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "P8c",
      P = "f8c",
      Z = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      W = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      l = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      m = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      C = box2d[W8y.S7T](Z, W, this[W8y.r8k], box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpA),
      n = box2d[W8y.S7T](l, m, this[W8y.u8k], box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpB),
      k = -box2d[W8y.o27](this[W8y.D00], C) - this[W8y.V7k] * box2d[W8y.o27](this[W8y.f70], n),
      H = -this[W8y.Z7T] * k;
  this[W8y.k1M] += H;
  var i = box2d[W8y.X26](-H, this[W8y.D00], box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PA),
      Q = box2d[W8y.X26](-this[W8y.V7k] * H, this[W8y.f70], box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PB);
  Z[W8y.a9k](this[W8y.j96], i);
  W += W8y[P](this[W8y.q8M], box2d[W8y.t10](this[W8y.r8k], i));
  l[W8y.a9k](this[W8y.V96], Q);
  m += W8y[N](this[W8y.E9M], box2d[W8y.t10](this[W8y.u8k], Q));
  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = W;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = m;
};

box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpA = new box2d[W8y.p7T]();
box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_vpB = new box2d[W8y.p7T]();
box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PA = new box2d[W8y.p7T]();
box2d.b2PulleyJoint.prototype.SolveVelocityConstraints.s_PB = new box2d[W8y.p7T]();

box2d.b2PulleyJoint.prototype.SolvePositionConstraints = function (f) {
  var N = "z8c",
      P = "B8c",
      Z = "h8c",
      W = "E8c",
      l = "R8c",
      m = "I8c",
      C = "r8c",
      n = "T8c",
      k = "C8c",
      H = "x8c",
      i = "m8c",
      Q = "Y8c",
      e = "c8c",
      j = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      o = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      S = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      d = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      u = this[W8y.p97][W8y.h70](o),
      D = this[W8y.k67][W8y.h70](d);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  var M = box2d[W8y.x47](u, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  var y1 = box2d[W8y.x47](D, this[W8y.P86], this[W8y.u8k]),
      h = this[W8y.D00][W8y.k97](j)[W8y.t4H](M)[W8y.d6M](this[W8y.j70]),
      E = this[W8y.f70][W8y.k97](S)[W8y.t4H](y1)[W8y.d6M](this[W8y.b70]),
      L = h[W8y.a2k](),
      w1 = E[W8y.a2k]();

  if (W8y[e](L, 10 * box2d[W8y.Z8k])) {
    h[W8y.E40](W8y[Q](1, L));
  } else {
    h[W8y.j6k]();
  }

  if (W8y[i](w1, 10 * box2d[W8y.Z8k])) {
    E[W8y.E40](W8y[H](1, w1));
  } else {
    E[W8y.j6k]();
  }

  var B = box2d[W8y.t10](M, h),
      N1 = box2d[W8y.t10](y1, E),
      f1 = this[W8y.j96] + W8y[k](this[W8y.q8M], B, B),
      c1 = this[W8y.V96] + W8y[n](this[W8y.E9M], N1, N1),
      l1 = f1 + W8y[C](this[W8y.V7k], this[W8y.V7k], c1);

  if (W8y[m](l1, 0)) {
    l1 = W8y[l](1, l1);
  }

  var P1 = W8y[W](this[W8y.u50], L, this[W8y.V7k] * w1),
      s1 = box2d[W8y.t67](P1),
      b1 = -l1 * P1,
      m1 = box2d[W8y.X26](-b1, h, box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PA),
      W1 = box2d[W8y.X26](-this[W8y.V7k] * b1, E, box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PB);
  j[W8y.a9k](this[W8y.j96], m1);
  o += W8y[Z](this[W8y.q8M], box2d[W8y.t10](M, m1));
  S[W8y.a9k](this[W8y.V96], W1);
  d += W8y[P](this[W8y.E9M], box2d[W8y.t10](y1, W1));
  f[W8y.P1T][this[W8y.G0k]][W8y.U30] = o;
  f[W8y.P1T][this[W8y.a0k]][W8y.U30] = d;
  return W8y[N](s1, box2d[W8y.Z8k]);
};

box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PA = new box2d[W8y.p7T]();
box2d.b2PulleyJoint.prototype.SolvePositionConstraints.s_PB = new box2d[W8y.p7T]();

box2d.b2PulleyJoint.prototype.GetAnchorA = function (f) {
  return this[W8y.l37][W8y.I00](this[W8y.V27], f);
};

box2d.b2PulleyJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.I00](this[W8y.G47], f);
};

box2d.b2PulleyJoint.prototype.GetReactionForce = function (f, N) {
  var P = "U6c",
      Z = "t8c";
  return N[W8y.y47](W8y[Z](f, this[W8y.k1M], this[W8y.f70][W8y.T9T]), W8y[P](f, this[W8y.k1M], this[W8y.f70][W8y.Z9T]));
};

box2d.b2PulleyJoint.prototype.GetReactionTorque = function (f) {
  return W8y.u8Q;
};

box2d.b2PulleyJoint.prototype.GetGroundAnchorA = function (f) {
  return f[W8y.k97](this[W8y.j70]);
};

box2d.b2PulleyJoint.prototype.GetGroundAnchorB = function (f) {
  return f[W8y.k97](this[W8y.b70]);
};

box2d.b2PulleyJoint.prototype.GetLengthA = function () {
  return this[W8y.L26];
};

box2d.b2PulleyJoint.prototype.GetLengthB = function () {
  return this[W8y.U36];
};

box2d.b2PulleyJoint.prototype.GetRatio = function () {
  return this[W8y.V7k];
};

box2d.b2PulleyJoint.prototype.GetCurrentLengthA = function () {
  var f = this[W8y.l37][W8y.I00](this[W8y.V27], box2d.b2PulleyJoint.prototype.GetCurrentLengthA.s_p),
      N = this[W8y.j70];
  return box2d[W8y.s80](f, N);
};

box2d.b2PulleyJoint.prototype.GetCurrentLengthA.s_p = new box2d[W8y.p7T]();

box2d.b2PulleyJoint.prototype.GetCurrentLengthB = function () {
  var f = this[W8y.v27][W8y.I00](this[W8y.G47], box2d.b2PulleyJoint.prototype.GetCurrentLengthB.s_p),
      N = this[W8y.b70];
  return box2d[W8y.s80](f, N);
};

box2d.b2PulleyJoint.prototype.GetCurrentLengthB.s_p = new box2d[W8y.p7T]();

box2d.b2PulleyJoint.prototype.Dump = function () {
  var f = "  jd.lengthB = %.15f;\n",
      N = "  jd.lengthA = %.15f;\n",
      P = "  jd.groundAnchorB.SetXY(%.15f, %.15f);\n",
      Z = "  jd.groundAnchorA.SetXY(%.15f, %.15f);\n",
      W = "  /*box2d.b2PulleyJointDef*/ var jd = new box2d.b2PulleyJointDef();\n";

  if (box2d[W8y.F2k]) {
    var l = this[W8y.l37][W8y.x5M],
        m = this[W8y.v27][W8y.x5M];
    box2d[W8y.R50](W);
    box2d[W8y.R50](W8y.Q67, l);
    box2d[W8y.R50](W8y.k3r, m);
    box2d[W8y.R50](W8y.i1r, this[W8y.N96] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](Z, this[W8y.j70][W8y.T9T], this[W8y.j70][W8y.Z9T]);
    box2d[W8y.R50](P, this[W8y.b70][W8y.T9T], this[W8y.b70][W8y.Z9T]);
    box2d[W8y.R50](W8y.v70, this[W8y.V27][W8y.T9T], this[W8y.V27][W8y.Z9T]);
    box2d[W8y.R50](W8y.y77, this[W8y.G47][W8y.T9T], this[W8y.G47][W8y.Z9T]);
    box2d[W8y.R50](N, this[W8y.L26]);
    box2d[W8y.R50](f, this[W8y.U36]);
    box2d[W8y.R50](W8y.t3M, this[W8y.V7k]);
    box2d[W8y.R50](W8y.P6M, this[W8y.U56]);
  }
};

box2d.b2PulleyJoint.prototype.ShiftOrigin = function (f) {
  this[W8y.j70][W8y.d6M](f);
  this[W8y.b70][W8y.d6M](f);
};

goog[W8y.U3T](W8y.Q4M);
goog[W8y.V20]('box2d.b2Shape');

box2d[W8y.A2T] = function (f) {
  goog[W8y.o66](this, box2d[W8y.i80][W8y.q36], f || W8y.u8Q);
  this[W8y.U0k] = new box2d[W8y.p7T]();
};

goog[W8y.u80](box2d[W8y.A2T], box2d[W8y.V7T]);
box2d.b2CircleShape.prototype.m_p = W8y.z6k;

box2d.b2CircleShape.prototype.Clone = function () {
  return new box2d[W8y.A2T]()[W8y.k97](this);
};

box2d.b2CircleShape.prototype.Copy = function (f) {
  var N = "X6c";
  goog[W8y.o66](this, W8y.n8H, f);

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[N](f, box2d[W8y.A2T]));
  }

  this[W8y.U0k][W8y.k97](f[W8y.U0k]);
  return this;
};

box2d.b2CircleShape.prototype.GetChildCount = function () {
  return W8y.D8Q;
};

box2d.b2CircleShape.prototype.TestPoint = function (f, N) {
  var P = "s6c",
      Z = box2d[W8y.o10](f, this[W8y.U0k], box2d.b2CircleShape.prototype.TestPoint.s_center),
      W = box2d[W8y.x8T](N, Z, box2d.b2CircleShape.prototype.TestPoint.s_d);
  return W8y[P](box2d[W8y.o27](W, W), box2d[W8y.B9M](this[W8y.o4T]));
};

box2d.b2CircleShape.prototype.TestPoint.s_center = new box2d[W8y.p7T]();
box2d.b2CircleShape.prototype.TestPoint.s_d = new box2d[W8y.p7T]();

box2d.b2CircleShape.prototype.RayCast = function (f, N, P, Z) {
  var W = "r6c",
      l = "H6c",
      m = "K6c",
      C = "n6c",
      n = "J6c",
      k = "b6c",
      H = box2d[W8y.o10](P, this[W8y.U0k], box2d.b2CircleShape.prototype.RayCast.s_position),
      i = box2d[W8y.x8T](N[W8y.h17], H, box2d.b2CircleShape.prototype.RayCast.s_s),
      Q = W8y[k](box2d[W8y.o27](i, i), box2d[W8y.B9M](this[W8y.o4T])),
      e = box2d[W8y.x8T](N[W8y.W47], N[W8y.h17], box2d.b2CircleShape.prototype.RayCast.s_r),
      j = box2d[W8y.o27](i, e),
      o = box2d[W8y.o27](e, e),
      S = W8y[n](j * j, o * Q);

  if (W8y[C](S, 0) || W8y[m](o, box2d[W8y.F5k])) {
    return false;
  }

  var d = -(j + box2d[W8y.d5M](S));

  if (W8y[l](0, d) && W8y[W](d, N[W8y.v4T] * o)) {
    d /= o;
    f[W8y.j57] = d;
    box2d[W8y.r26](i, d, e, f[W8y.M4T])[W8y.s1k]();
    return true;
  }

  return false;
};

box2d.b2CircleShape.prototype.RayCast.s_position = new box2d[W8y.p7T]();
box2d.b2CircleShape.prototype.RayCast.s_s = new box2d[W8y.p7T]();
box2d.b2CircleShape.prototype.RayCast.s_r = new box2d[W8y.p7T]();

box2d.b2CircleShape.prototype.ComputeAABB = function (f, N, P) {
  var Z = "a6c",
      W = "e6c",
      l = box2d[W8y.o10](N, this[W8y.U0k], box2d.b2CircleShape.prototype.ComputeAABB.s_p);
  f[W8y.d1T][W8y.y47](W8y[W](l[W8y.T9T], this[W8y.o4T]), W8y[Z](l[W8y.Z9T], this[W8y.o4T]));
  f[W8y.I1T][W8y.y47](l[W8y.T9T] + this[W8y.o4T], l[W8y.Z9T] + this[W8y.o4T]);
};

box2d.b2CircleShape.prototype.ComputeAABB.s_p = new box2d[W8y.p7T]();

box2d.b2CircleShape.prototype.ComputeMass = function (f, N) {
  var P = "M6c",
      Z = "d6c",
      W = box2d[W8y.B9M](this[W8y.o4T]);
  f[W8y.T3r] = W8y[Z](N, box2d[W8y.e5M], W);
  f[W8y.u6M][W8y.k97](this[W8y.U0k]);
  f[W8y.T10] = W8y[P](f[W8y.T3r], W8y.T3H * W + box2d[W8y.o27](this[W8y.U0k], this[W8y.U0k]));
};

box2d.b2CircleShape.prototype.SetupDistanceProxy = function (f, N) {
  f[W8y.N4k] = new Array(W8y.D8Q, W8y.f5k);
  f[W8y.N4k][W8y.u8Q] = this[W8y.U0k];
  f[W8y.o9k] = W8y.D8Q;
  f[W8y.o4T] = this[W8y.o4T];
};

box2d.b2CircleShape.prototype.ComputeSubmergedArea = function (f, N, P, Z) {
  var W = "C5c",
      l = "x5c",
      m = "m5c",
      C = "Y5c",
      n = "c5c",
      k = "P5c",
      H = "f5c",
      i = "A6c",
      Q = "G6c",
      e = "v6c",
      j = box2d[W8y.o10](P, this[W8y.U0k], new box2d[W8y.p7T]()),
      o = -W8y[e](box2d[W8y.o27](f, j), N);

  if (o < -this[W8y.o4T] + box2d[W8y.F5k]) {
    return W8y.u8Q;
  }

  if (W8y[Q](o, this[W8y.o4T])) {
    Z[W8y.k97](j);
    return W8y[i](box2d[W8y.e5M], this[W8y.o4T], this[W8y.o4T]);
  }

  var S = W8y[H](this[W8y.o4T], this[W8y.o4T]),
      d = W8y[k](o, o),
      u = W8y[n](S, box2d[W8y.Z5H](o / this[W8y.o4T]) + box2d[W8y.e5M] / W8y.d8Q) + W8y[C](o, box2d[W8y.d5M](S - d)),
      D = -W8y.d8Q / W8y.S8Q * box2d[W8y.D1M](W8y[m](S, d), W8y.k0M) / u;
  Z[W8y.T9T] = j[W8y.T9T] + W8y[l](f[W8y.T9T], D);
  Z[W8y.Z9T] = j[W8y.Z9T] + W8y[W](f[W8y.Z9T], D);
  return u;
};

box2d.b2CircleShape.prototype.Dump = function () {
  var f = "    shape.m_p.SetXY(%.15f, %.15f);\n",
      N = "    /*box2d.b2CircleShape*/ var shape = new box2d.b2CircleShape();\n";
  box2d[W8y.R50](N);
  box2d[W8y.R50](W8y.m97, this[W8y.o4T]);
  box2d[W8y.R50](f, this[W8y.U0k][W8y.T9T], this[W8y.U0k][W8y.Z9T]);
};

goog[W8y.U3T](W8y.e9M);
goog[W8y.V20]('box2d.b2Math');
goog[W8y.V20]('box2d.b2Draw');

box2d[W8y.Y0r] = function () {
  this[W8y.Y70] = new Array();
  this[W8y.q8H] = new Array();
  this[W8y.u5M] = new box2d[W8y.p7T]();
};

box2d.b2RopeDef.prototype.vertices = W8y.z6k;
box2d.b2RopeDef.prototype.count = W8y.u8Q;
box2d.b2RopeDef.prototype.masses = W8y.z6k;
box2d.b2RopeDef.prototype.gravity = W8y.z6k;
box2d.b2RopeDef.prototype.damping = W8y.j3H;
box2d.b2RopeDef.prototype.k2 = W8y.R3H;
box2d.b2RopeDef.prototype.k3 = W8y.j3H;

box2d[W8y.n47] = function () {
  this[W8y.C9T] = new box2d[W8y.p7T]();
};

box2d.b2Rope.prototype.m_count = W8y.u8Q;
box2d.b2Rope.prototype.m_ps = W8y.z6k;
box2d.b2Rope.prototype.m_p0s = W8y.z6k;
box2d.b2Rope.prototype.m_vs = W8y.z6k;
box2d.b2Rope.prototype.m_ims = W8y.z6k;
box2d.b2Rope.prototype.m_Ls = W8y.z6k;
box2d.b2Rope.prototype.m_as = W8y.z6k;
box2d.b2Rope.prototype.m_gravity = W8y.z6k;
box2d.b2Rope.prototype.m_damping = W8y.u8Q;
box2d.b2Rope.prototype.m_k2 = W8y.D8Q;
box2d.b2Rope.prototype.m_k3 = W8y.j3H;

box2d.b2Rope.prototype.GetVertexCount = function () {
  return this[W8y.o9k];
};

box2d.b2Rope.prototype.GetVertices = function () {
  return this[W8y.N4r];
};

box2d.b2Rope.prototype.Initialize = function (f) {
  var N = "k3",
      P = "k2",
      Z = "damping",
      W = "v5c",
      l = "M5c",
      m = "E5c",
      C = "R5c",
      n = "I5c",
      k = "j5c",
      H = "Q5c",
      i = "k5c";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y[i](f[W8y.S5k], W8y.S8Q));
  }

  this[W8y.o9k] = f[W8y.S5k];
  this[W8y.N4r] = box2d[W8y.p7T][W8y.N1r](this[W8y.o9k]);
  this[W8y.Z27] = box2d[W8y.p7T][W8y.N1r](this[W8y.o9k]);
  this[W8y.P5T] = box2d[W8y.p7T][W8y.N1r](this[W8y.o9k]);
  this[W8y.A80] = box2d[W8y.D3r](this[W8y.o9k]);

  for (var Q = W8y.u8Q; W8y[H](Q, this[W8y.o9k]); ++Q) {
    this[W8y.N4r][Q][W8y.k97](f[W8y.Y70][Q]);
    this[W8y.Z27][Q][W8y.k97](f[W8y.Y70][Q]);
    this[W8y.P5T][Q][W8y.j6k]();
    var e = f[W8y.q8H][Q];

    if (W8y[k](e, W8y.u8Q)) {
      this[W8y.A80][Q] = W8y[n](W8y.D8Q, e);
    } else {
      this[W8y.A80][Q] = W8y.u8Q;
    }
  }

  var j = W8y[C](this[W8y.o9k], W8y.D8Q),
      o = W8y[m](this[W8y.o9k], W8y.d8Q);
  this[W8y.J4r] = box2d[W8y.D3r](j);
  this[W8y.s06] = box2d[W8y.D3r](o);

  for (var Q = W8y.u8Q; W8y[l](Q, j); ++Q) {
    var S = this[W8y.N4r][Q],
        d = this[W8y.N4r][Q + W8y.D8Q];
    this[W8y.J4r][Q] = box2d[W8y.s80](S, d);
  }

  for (var Q = W8y.u8Q; W8y[W](Q, o); ++Q) {
    var S = this[W8y.N4r][Q],
        d = this[W8y.N4r][Q + W8y.D8Q],
        u = this[W8y.N4r][Q + W8y.d8Q],
        D = box2d[W8y.x8T](d, S, box2d[W8y.p7T][W8y.t7M]),
        M = box2d[W8y.x8T](u, d, box2d[W8y.p7T][W8y.l9M]),
        y1 = box2d[W8y.t10](D, M),
        h = box2d[W8y.o27](D, M);
    this[W8y.s06][Q] = box2d[W8y.E7M](y1, h);
  }

  this[W8y.C9T][W8y.k97](f[W8y.u5M]);
  this[W8y.Q86] = f[Z];
  this[W8y.p2k] = f[P];
  this[W8y.s3k] = f[N];
};

box2d.b2Rope.prototype.Step = function (f, N) {
  var P = "s1C",
      Z = "X1C",
      W = "SolveC3",
      l = "SolveC2",
      m = "N1C",
      C = "w1C",
      n = "A5c",
      k = "exp",
      H = "G5c";

  if (W8y[H](f, W8y.u8Q)) {
    return;
  }

  var i = Math[k](-f * this[W8y.Q86]);

  for (var Q = W8y.u8Q; W8y[n](Q, this[W8y.o9k]); ++Q) {
    this[W8y.Z27][Q][W8y.k97](this[W8y.N4r][Q]);

    if (W8y[C](this[W8y.A80][Q], W8y.u8Q)) {
      this[W8y.P5T][Q][W8y.a9k](f, this[W8y.C9T]);
    }

    this[W8y.P5T][Q][W8y.E40](i);
    this[W8y.N4r][Q][W8y.a9k](f, this[W8y.P5T][Q]);
  }

  for (var Q = W8y.u8Q; W8y[m](Q, N); ++Q) {
    this[l]();
    this[W]();
    this[l]();
  }

  var e = W8y[Z](W8y.D8Q, f);

  for (var Q = W8y.u8Q; W8y[P](Q, this[W8y.o9k]); ++Q) {
    box2d[W8y.X26](e, box2d[W8y.x8T](this[W8y.N4r][Q], this[W8y.Z27][Q], box2d[W8y.p7T][W8y.t7M]), this[W8y.P5T][Q]);
  }
};

box2d.b2Rope.prototype.SolveC2 = function () {
  var f = "I1C",
      N = "r1C",
      P = "H1C",
      Z = "K1C",
      W = "n1C",
      l = "J1C",
      m = "b1C",
      C = W8y[m](this[W8y.o9k], W8y.D8Q);

  for (var n = W8y.u8Q; W8y[l](n, C); ++n) {
    var k = this[W8y.N4r][n],
        H = this[W8y.N4r][n + W8y.D8Q],
        i = box2d[W8y.x8T](H, k, box2d[W8y.n47][W8y.J57]),
        Q = i[W8y.Y27](),
        e = this[W8y.A80][n],
        j = this[W8y.A80][n + W8y.D8Q];

    if (W8y[W](e + j, W8y.u8Q)) {
      continue;
    }

    var o = W8y[Z](e, e + j),
        S = W8y[P](j, e + j);
    k[W8y.I5M](W8y[N](this[W8y.p2k], o, this[W8y.J4r][n] - Q), i);
    H[W8y.a9k](W8y[f](this[W8y.p2k], S, this[W8y.J4r][n] - Q), i);
  }
};

box2d[W8y.n47][W8y.J57] = new box2d[W8y.p7T]();

box2d.b2Rope.prototype.SetAngleRadians = function (f) {
  var N = "D1C",
      P = "S1C",
      Z = W8y[P](this[W8y.o9k], W8y.d8Q);

  for (var W = W8y.u8Q; W8y[N](W, Z); ++W) {
    this[W8y.s06][W] = f;
  }
};

box2d.b2Rope.prototype.SolveC3 = function () {
  var f = "M4C",
      N = "E4C",
      P = "R4C",
      Z = "I4C",
      W = "j4C",
      l = "Q4C",
      m = "k4C",
      C = "C4C",
      n = "x4C",
      k = "m4C",
      H = "Y4C",
      i = "c4C",
      Q = "P4C",
      e = "f4C",
      j = "t1C",
      o = "SelfSkew",
      S = "z1C",
      d = "B1C",
      u = "h1C",
      D = W8y[u](this[W8y.o9k], W8y.d8Q);

  for (var M = W8y.u8Q; W8y[d](M, D); ++M) {
    var y1 = this[W8y.N4r][M],
        h = this[W8y.N4r][M + W8y.D8Q],
        E = this[W8y.N4r][M + W8y.d8Q],
        L = this[W8y.A80][M],
        w1 = this[W8y.A80][M + W8y.D8Q],
        B = this[W8y.A80][M + W8y.d8Q],
        N1 = box2d[W8y.x8T](h, y1, box2d[W8y.n47][W8y.n6T]),
        f1 = box2d[W8y.x8T](E, h, box2d[W8y.n47][W8y.X6T]),
        c1 = N1[W8y.A5T](),
        l1 = f1[W8y.A5T]();

    if (W8y[S](c1 * l1, W8y.u8Q)) {
      continue;
    }

    var P1 = box2d[W8y.t10](N1, f1),
        s1 = box2d[W8y.o27](N1, f1),
        b1 = box2d[W8y.E7M](P1, s1),
        m1 = box2d[W8y.X26](-W8y.D8Q / c1, N1[o](), box2d[W8y.n47][W8y.s66]),
        W1 = box2d[W8y.X26](W8y[j](W8y.D8Q, l1), f1[o](), box2d[W8y.n47][W8y.G86]),
        J1 = box2d[W8y.F7M](m1, box2d[W8y.n47][W8y.L16]),
        C1 = box2d[W8y.x8T](m1, W1, box2d[W8y.n47][W8y.h5T]),
        x1 = W1,
        T1 = W8y[e](L, box2d[W8y.o27](J1, J1)) + W8y[Q](w1, box2d[W8y.o27](C1, C1)) + W8y[i](B, box2d[W8y.o27](x1, x1));

    if (W8y[H](T1, W8y.u8Q)) {
      continue;
    }

    T1 = W8y[k](W8y.D8Q, T1);
    var K1 = W8y[n](b1, this[W8y.s06][M]);

    while (W8y[C](K1, box2d[W8y.e5M])) {
      b1 -= W8y[m](W8y.d8Q, box2d[W8y.e5M]);
      K1 = W8y[l](b1, this[W8y.s06][M]);
    }

    while (K1 < -box2d[W8y.e5M]) {
      b1 += W8y[W](W8y.d8Q, box2d[W8y.e5M]);
      K1 = W8y[Z](b1, this[W8y.s06][M]);
    }

    var V1 = -this[W8y.s3k] * T1 * K1;
    y1[W8y.a9k](W8y[P](L, V1), J1);
    h[W8y.a9k](W8y[N](w1, V1), C1);
    E[W8y.a9k](W8y[f](B, V1), x1);
  }
};

box2d[W8y.n47][W8y.n6T] = new box2d[W8y.p7T]();
box2d[W8y.n47][W8y.X6T] = new box2d[W8y.p7T]();
box2d[W8y.n47][W8y.s66] = new box2d[W8y.p7T]();
box2d[W8y.n47][W8y.G86] = new box2d[W8y.p7T]();
box2d[W8y.n47][W8y.L16] = new box2d[W8y.p7T]();
box2d[W8y.n47][W8y.h5T] = new box2d[W8y.p7T]();

box2d.b2Rope.prototype.Draw = function (f) {
  var N = "v4C",
      P = 0.4,
      Z = new box2d[W8y.s0r](P, W8y.T3H, W8y.E3H);

  for (var W = W8y.u8Q; W8y[N](W, this[W8y.o9k] - W8y.D8Q); ++W) {
    f[W8y.f9M](this[W8y.N4r][W], this[W8y.N4r][W + W8y.D8Q], Z);
  }
};

goog[W8y.U3T](W8y.U10);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.e0M] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.p37]);
  this[W8y.r8H] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.x8H] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.x30] = new box2d[W8y.p7T](W8y.D8Q, W8y.u8Q);
};

goog[W8y.u80](box2d[W8y.e0M], box2d[W8y.k1r]);
box2d.b2WheelJointDef.prototype.localAnchorA = W8y.z6k;
box2d.b2WheelJointDef.prototype.localAnchorB = W8y.z6k;
box2d.b2WheelJointDef.prototype.localAxisA = W8y.z6k;
box2d.b2WheelJointDef.prototype.enableMotor = W8y.G0T;
box2d.b2WheelJointDef.prototype.maxMotorTorque = W8y.u8Q;
box2d.b2WheelJointDef.prototype.motorSpeed = W8y.u8Q;
box2d.b2WheelJointDef.prototype.frequencyHz = W8y.d8Q;
box2d.b2WheelJointDef.prototype.dampingRatio = W8y.E3H;

box2d.b2WheelJointDef.prototype.Initialize = function (f, N, P, Z) {
  this[W8y.F6Q] = f;
  this[W8y.b5Q] = N;
  this[W8y.F6Q][W8y.y7M](P, this[W8y.r8H]);
  this[W8y.b5Q][W8y.y7M](P, this[W8y.x8H]);
  this[W8y.F6Q][W8y.r10](Z, this[W8y.x30]);
};

box2d[W8y.F8H] = function (f) {
  goog[W8y.o66](this, f);
  this[W8y.p9T] = f[W8y.o67];
  this[W8y.d8k] = f[W8y.G56];
  this[W8y.V27] = f[W8y.r8H][W8y.l26]();
  this[W8y.G47] = f[W8y.x8H][W8y.l26]();
  this[W8y.f4k] = f[W8y.x30][W8y.l26]();
  this[W8y.W9T] = box2d[W8y.b5H](this[W8y.f4k], new box2d[W8y.p7T]());
  this[W8y.J47] = f[W8y.S3k];
  this[W8y.z7H] = f[W8y.Z4T];
  this[W8y.l4H] = f[W8y.E80];
  this[W8y.z3k] = new box2d[W8y.p7T]();
  this[W8y.A2k] = new box2d[W8y.p7T]();
  this[W8y.I76] = new box2d[W8y.p7T](), this[W8y.w96] = new box2d[W8y.p7T]();
  this[W8y.p97] = new box2d[W8y.x8M]();
  this[W8y.k67] = new box2d[W8y.x8M]();
  this[W8y.u17] = new box2d[W8y.p7T]();
  this[W8y.P86] = new box2d[W8y.p7T]();
  this[W8y.r8k] = new box2d[W8y.p7T]();
  this[W8y.u8k] = new box2d[W8y.p7T]();
  this[W8y.I76][W8y.j6k]();
  this[W8y.w96][W8y.j6k]();
};

goog[W8y.u80](box2d[W8y.F8H], box2d[W8y.N17]);
box2d.b2WheelJoint.prototype.m_frequencyHz = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_dampingRatio = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_localAnchorA = W8y.z6k;
box2d.b2WheelJoint.prototype.m_localAnchorB = W8y.z6k;
box2d.b2WheelJoint.prototype.m_localXAxisA = W8y.z6k;
box2d.b2WheelJoint.prototype.m_localYAxisA = W8y.z6k;
box2d.b2WheelJoint.prototype.m_impulse = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_motorImpulse = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_springImpulse = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_maxMotorTorque = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_motorSpeed = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_enableMotor = W8y.G0T;
box2d.b2WheelJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_localCenterA = W8y.z6k;
box2d.b2WheelJoint.prototype.m_localCenterB = W8y.z6k;
box2d.b2WheelJoint.prototype.m_invMassA = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_invMassB = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_invIA = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_invIB = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_ax = W8y.z6k;
box2d.b2WheelJoint.prototype.m_ay = W8y.z6k;
box2d.b2WheelJoint.prototype.m_sAx = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_sBx = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_sAy = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_sBy = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_mass = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_motorMass = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_springMass = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_bias = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_gamma = W8y.u8Q;
box2d.b2WheelJoint.prototype.m_qA = W8y.z6k;
box2d.b2WheelJoint.prototype.m_qB = W8y.z6k;
box2d.b2WheelJoint.prototype.m_lalcA = W8y.z6k;
box2d.b2WheelJoint.prototype.m_lalcB = W8y.z6k;
box2d.b2WheelJoint.prototype.m_rA = W8y.z6k;
box2d.b2WheelJoint.prototype.m_rB = W8y.z6k;

box2d.b2WheelJoint.prototype.GetMotorSpeed = function () {
  return this[W8y.z7H];
};

box2d.b2WheelJoint.prototype.GetMaxMotorTorque = function () {
  return this[W8y.J47];
};

box2d.b2WheelJoint.prototype.SetSpringFrequencyHz = function (f) {
  this[W8y.p9T] = f;
};

box2d.b2WheelJoint.prototype.GetSpringFrequencyHz = function () {
  return this[W8y.p9T];
};

box2d.b2WheelJoint.prototype.SetSpringDampingRatio = function (f) {
  this[W8y.d8k] = f;
};

box2d.b2WheelJoint.prototype.GetSpringDampingRatio = function () {
  return this[W8y.d8k];
};

box2d.b2WheelJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "r3C",
      P = "H3C",
      Z = "K3C",
      W = "n3C",
      l = "J3C",
      m = "b3C",
      C = "s3C",
      n = "X3C",
      k = "N3C",
      H = "w3C",
      i = "z2C",
      Q = "B2C",
      e = "h2C",
      j = "D2C",
      o = "R2C",
      S = "q2C",
      d = "Q2C",
      u = "k2C",
      D = "C2C",
      M = "J2C",
      y1 = "l2C",
      h = "W2C",
      E = "Z2C",
      L = "U2C",
      w1 = "t4C",
      B = "G4C";
  this[W8y.G0k] = this[W8y.l37][W8y.x5M];
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.z3k][W8y.k97](this[W8y.l37][W8y.i6k][W8y.O8Q]);
  this[W8y.A2k][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.j96] = this[W8y.l37][W8y.k86];
  this[W8y.V96] = this[W8y.v27][W8y.k86];
  this[W8y.q8M] = this[W8y.l37][W8y.M7H];
  this[W8y.E9M] = this[W8y.v27][W8y.M7H];
  var N1 = this[W8y.j96],
      f1 = this[W8y.V96],
      c1 = this[W8y.q8M],
      l1 = this[W8y.E9M],
      P1 = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      s1 = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      b1 = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      m1 = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      W1 = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      J1 = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      C1 = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      x1 = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      T1 = this[W8y.p97][W8y.h70](s1),
      K1 = this[W8y.k67][W8y.h70](J1);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  var V1 = box2d[W8y.x47](T1, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  var Q1 = box2d[W8y.x47](K1, this[W8y.P86], this[W8y.u8k]),
      D1 = box2d[W8y.x8T](box2d[W8y.m3T](W1, Q1, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.m3T](P1, V1, box2d[W8y.p7T][W8y.l9M]), box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_d);
  {
    box2d[W8y.x47](T1, this[W8y.W9T], this[W8y.w96]);
    this[W8y.e7T] = box2d[W8y.t10](box2d[W8y.m3T](D1, V1, box2d[W8y.p7T][W8y.t7M]), this[W8y.w96]);
    this[W8y.G9M] = box2d[W8y.t10](Q1, this[W8y.w96]);
    this[W8y.Z7T] = N1 + f1 + W8y[B](c1, this[W8y.e7T], this[W8y.e7T]) + W8y[w1](l1, this[W8y.G9M], this[W8y.G9M]);

    if (W8y[L](this[W8y.Z7T], 0)) {
      this[W8y.Z7T] = W8y[E](1, this[W8y.Z7T]);
    }
  }
  this[W8y.Y17] = 0;
  this[W8y.b96] = 0;
  this[W8y.e3k] = 0;

  if (W8y[h](this[W8y.p9T], 0)) {
    box2d[W8y.x47](T1, this[W8y.f4k], this[W8y.I76]);
    this[W8y.J7T] = box2d[W8y.t10](box2d[W8y.m3T](D1, V1, box2d[W8y.p7T][W8y.t7M]), this[W8y.I76]);
    this[W8y.W8M] = box2d[W8y.t10](Q1, this[W8y.I76]);
    var d1 = N1 + f1 + W8y[y1](c1, this[W8y.J7T], this[W8y.J7T]) + W8y[M](l1, this[W8y.W8M], this[W8y.W8M]);

    if (W8y[D](d1, 0)) {
      this[W8y.Y17] = W8y[u](1, d1);
      var u1 = box2d[W8y.o27](D1, this[W8y.I76]),
          j1 = W8y[d](2, box2d[W8y.e5M], this[W8y.p9T]),
          G1 = W8y[S](2, this[W8y.Y17], this[W8y.d8k], j1),
          I1 = W8y[o](this[W8y.Y17], j1, j1),
          e1 = f[W8y.D5H][W8y.I5H];
      this[W8y.e3k] = W8y[j](e1, G1 + e1 * I1);

      if (W8y[e](this[W8y.e3k], 0)) {
        this[W8y.e3k] = W8y[Q](1, this[W8y.e3k]);
      }

      this[W8y.b96] = W8y[i](u1, e1, I1, this[W8y.e3k]);
      this[W8y.Y17] = d1 + this[W8y.e3k];

      if (W8y[H](this[W8y.Y17], 0)) {
        this[W8y.Y17] = W8y[k](1, this[W8y.Y17]);
      }
    }
  } else {
    this[W8y.A7M] = 0;
  }

  if (this[W8y.l4H]) {
    this[W8y.V9T] = c1 + l1;

    if (W8y[n](this[W8y.V9T], 0)) {
      this[W8y.V9T] = W8y[C](1, this[W8y.V9T]);
    }
  } else {
    this[W8y.V9T] = 0;
    this[W8y.X00] = 0;
  }

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.k1M] *= f[W8y.D5H][W8y.k30];
    this[W8y.A7M] *= f[W8y.D5H][W8y.k30];
    this[W8y.X00] *= f[W8y.D5H][W8y.k30];
    var S1 = box2d[W8y.m3T](box2d[W8y.X26](this[W8y.k1M], this[W8y.w96], box2d[W8y.p7T][W8y.t7M]), box2d[W8y.X26](this[W8y.A7M], this[W8y.I76], box2d[W8y.p7T][W8y.l9M]), box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_P),
        B1 = W8y[m](this[W8y.k1M], this[W8y.e7T]) + W8y[l](this[W8y.A7M], this[W8y.J7T]) + this[W8y.X00],
        a1 = W8y[W](this[W8y.k1M], this[W8y.G9M]) + W8y[Z](this[W8y.A7M], this[W8y.W8M]) + this[W8y.X00];
    b1[W8y.I5M](this[W8y.j96], S1);
    m1 -= W8y[P](this[W8y.q8M], B1);
    C1[W8y.a9k](this[W8y.V96], S1);
    x1 += W8y[N](this[W8y.E9M], a1);
  } else {
    this[W8y.k1M] = 0;
    this[W8y.A7M] = 0;
    this[W8y.X00] = 0;
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = m1;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = x1;
};

box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_d = new box2d[W8y.p7T]();
box2d.b2WheelJoint.prototype.InitVelocityConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2WheelJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "e0C",
      P = "r0C",
      Z = "H0C",
      W = "K0C",
      l = "n0C",
      m = "J0C",
      C = "b0C",
      n = "s0C",
      k = "X0C",
      H = "N0C",
      i = "y0C",
      Q = "F3C",
      e = "p3C",
      j = "L3C",
      o = "u3C",
      S = "d3C",
      d = "a3C",
      u = "e3C",
      D = this[W8y.j96],
      M = this[W8y.V96],
      y1 = this[W8y.q8M],
      h = this[W8y.E9M],
      E = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      L = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      w1 = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      B = f[W8y.S37][this[W8y.a0k]][W8y.M9T];

  if (true) {
    var N1 = box2d[W8y.o27](this[W8y.I76], box2d[W8y.x8T](w1, E, box2d[W8y.p7T][W8y.t7M])) + W8y[u](this[W8y.W8M], B) - W8y[d](this[W8y.J7T], L),
        f1 = -this[W8y.Y17] * (N1 + this[W8y.b96] + W8y[S](this[W8y.e3k], this[W8y.A7M]));
    this[W8y.A7M] += f1;
    var c1 = box2d[W8y.X26](f1, this[W8y.I76], box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P),
        l1 = W8y[o](f1, this[W8y.J7T]),
        P1 = W8y[j](f1, this[W8y.W8M]);
    E[W8y.I5M](D, c1);
    L -= W8y[e](y1, l1);
    w1[W8y.a9k](M, c1);
    B += W8y[Q](h, P1);
  }

  if (true) {
    var N1 = W8y[i](B, L, this[W8y.z7H]),
        f1 = -this[W8y.V9T] * N1,
        s1 = this[W8y.X00],
        b1 = W8y[H](f[W8y.D5H][W8y.I5H], this[W8y.J47]);
    this[W8y.X00] = box2d[W8y.N06](this[W8y.X00] + f1, -b1, b1);
    f1 = W8y[k](this[W8y.X00], s1);
    L -= W8y[n](y1, f1);
    B += W8y[C](h, f1);
  }

  if (true) {
    var N1 = box2d[W8y.o27](this[W8y.w96], box2d[W8y.x8T](w1, E, box2d[W8y.p7T][W8y.t7M])) + W8y[m](this[W8y.G9M], B) - W8y[l](this[W8y.e7T], L),
        f1 = -this[W8y.Z7T] * N1;
    this[W8y.k1M] += f1;
    var c1 = box2d[W8y.X26](f1, this[W8y.w96], box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P),
        l1 = W8y[W](f1, this[W8y.e7T]),
        P1 = W8y[Z](f1, this[W8y.G9M]);
    E[W8y.I5M](D, c1);
    L -= W8y[P](y1, l1);
    w1[W8y.a9k](M, c1);
    B += W8y[N](h, P1);
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = L;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = B;
};

box2d.b2WheelJoint.prototype.SolveVelocityConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2WheelJoint.prototype.SolvePositionConstraints = function (f) {
  var N = "P7C",
      P = "f7C",
      Z = "t0C",
      W = "z0C",
      l = "B0C",
      m = "h0C",
      C = "E0C",
      n = "a0C",
      k = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      H = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      i = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      Q = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      e = this[W8y.p97][W8y.h70](H),
      j = this[W8y.k67][W8y.h70](Q);
  box2d[W8y.x8T](this[W8y.V27], this[W8y.z3k], this[W8y.u17]);
  var o = box2d[W8y.x47](e, this[W8y.u17], this[W8y.r8k]);
  box2d[W8y.x8T](this[W8y.G47], this[W8y.A2k], this[W8y.P86]);
  var S = box2d[W8y.x47](j, this[W8y.P86], this[W8y.u8k]),
      d = box2d[W8y.m3T](box2d[W8y.x8T](i, k, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.x8T](S, o, box2d[W8y.p7T][W8y.l9M]), box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_d),
      u = box2d[W8y.x47](e, this[W8y.W9T], this[W8y.w96]),
      D = box2d[W8y.t10](box2d[W8y.m3T](d, o, box2d[W8y.p7T][W8y.t7M]), u),
      M = box2d[W8y.t10](S, u),
      y1 = box2d[W8y.o27](d, this[W8y.w96]),
      h = this[W8y.j96] + this[W8y.V96] + W8y[n](this[W8y.q8M], this[W8y.e7T], this[W8y.e7T]) + W8y[C](this[W8y.E9M], this[W8y.G9M], this[W8y.G9M]),
      E;

  if (W8y[m](h, 0)) {
    E = -y1 / h;
  } else {
    E = 0;
  }

  var L = box2d[W8y.X26](E, u, box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_P),
      w1 = W8y[l](E, D),
      B = W8y[W](E, M);
  k[W8y.I5M](this[W8y.j96], L);
  H -= W8y[Z](this[W8y.q8M], w1);
  i[W8y.a9k](this[W8y.V96], L);
  Q += W8y[P](this[W8y.E9M], B);
  f[W8y.P1T][this[W8y.G0k]][W8y.U30] = H;
  f[W8y.P1T][this[W8y.a0k]][W8y.U30] = Q;
  return W8y[N](box2d[W8y.t67](y1), box2d[W8y.Z8k]);
};

box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_d = new box2d[W8y.p7T]();
box2d.b2WheelJoint.prototype.SolvePositionConstraints.s_P = new box2d[W8y.p7T]();

box2d.b2WheelJoint.prototype.GetDefinition = function (f) {
  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](W8y.G0T);
  }

  return f;
};

box2d.b2WheelJoint.prototype.GetAnchorA = function (f) {
  return this[W8y.l37][W8y.I00](this[W8y.V27], f);
};

box2d.b2WheelJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.I00](this[W8y.G47], f);
};

box2d.b2WheelJoint.prototype.GetReactionForce = function (f, N) {
  var P = "Y7C",
      Z = "c7C";
  N[W8y.T9T] = W8y[Z](f, this[W8y.k1M] * this[W8y.w96][W8y.T9T] + this[W8y.A7M] * this[W8y.I76][W8y.T9T]);
  N[W8y.Z9T] = W8y[P](f, this[W8y.k1M] * this[W8y.w96][W8y.Z9T] + this[W8y.A7M] * this[W8y.I76][W8y.Z9T]);
  return N;
};

box2d.b2WheelJoint.prototype.GetReactionTorque = function (f) {
  var N = "m7C";
  return W8y[N](f, this[W8y.X00]);
};

box2d.b2WheelJoint.prototype.GetLocalAnchorA = function (f) {
  return f[W8y.k97](this[W8y.V27]);
};

box2d.b2WheelJoint.prototype.GetLocalAnchorB = function (f) {
  return f[W8y.k97](this[W8y.G47]);
};

box2d.b2WheelJoint.prototype.GetLocalAxisA = function (f) {
  return f[W8y.k97](this[W8y.f4k]);
};

box2d.b2WheelJoint.prototype.GetJointTranslation = function () {
  var f = this[W8y.l37],
      N = this[W8y.v27],
      P = f[W8y.I00](this[W8y.V27], new box2d[W8y.p7T]()),
      Z = N[W8y.I00](this[W8y.G47], new box2d[W8y.p7T]()),
      W = box2d[W8y.x8T](Z, P, new box2d[W8y.p7T]()),
      l = f[W8y.S40](this[W8y.f4k], new box2d[W8y.p7T]()),
      m = box2d[W8y.o27](W, l);
  return m;
};

box2d.b2WheelJoint.prototype.GetJointSpeed = function () {
  var f = "x7C",
      N = this[W8y.l37][W8y.t77],
      P = this[W8y.v27][W8y.t77];
  return W8y[f](P, N);
};

box2d.b2WheelJoint.prototype.IsMotorEnabled = function () {
  return this[W8y.l4H];
};

box2d.b2WheelJoint.prototype.EnableMotor = function (f) {
  this[W8y.l37][W8y.U5H](W8y.f5k);
  this[W8y.v27][W8y.U5H](W8y.f5k);
  this[W8y.l4H] = f;
};

box2d.b2WheelJoint.prototype.SetMotorSpeed = function (f) {
  this[W8y.l37][W8y.U5H](true);
  this[W8y.v27][W8y.U5H](true);
  this[W8y.z7H] = f;
};

box2d.b2WheelJoint.prototype.SetMaxMotorTorque = function (f) {
  this[W8y.l37][W8y.U5H](W8y.f5k);
  this[W8y.v27][W8y.U5H](W8y.f5k);
  this[W8y.J47] = f;
};

box2d.b2WheelJoint.prototype.GetMotorTorque = function (f) {
  var N = "C7C";
  return W8y[N](f, this[W8y.X00]);
};

box2d.b2WheelJoint.prototype.Dump = function () {
  var f = "  jd.localAxisA.Set(%.15f, %.15f);\n",
      N = "  /*box2d.b2WheelJointDef*/ var jd = new box2d.b2WheelJointDef();\n";

  if (box2d[W8y.F2k]) {
    var P = this[W8y.l37][W8y.x5M],
        Z = this[W8y.v27][W8y.x5M];
    box2d[W8y.R50](N);
    box2d[W8y.R50](W8y.Q67, P);
    box2d[W8y.R50](W8y.k3r, Z);
    box2d[W8y.R50](W8y.i1r, this[W8y.N96] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W8y.v70, this[W8y.V27][W8y.T9T], this[W8y.V27][W8y.Z9T]);
    box2d[W8y.R50](W8y.y77, this[W8y.G47][W8y.T9T], this[W8y.G47][W8y.Z9T]);
    box2d[W8y.R50](f, this[W8y.f4k][W8y.T9T], this[W8y.f4k][W8y.Z9T]);
    box2d[W8y.R50](W8y.V1H, this[W8y.l4H] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](W8y.j6M, this[W8y.z7H]);
    box2d[W8y.R50](W8y.s60, this[W8y.J47]);
    box2d[W8y.R50](W8y.K76, this[W8y.p9T]);
    box2d[W8y.R50](W8y.e0T, this[W8y.d8k]);
    box2d[W8y.R50](W8y.P6M, this[W8y.U56]);
  }
};

goog[W8y.U3T](W8y.t9H);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Math');

box2d[W8y.O36] = function () {
  goog[W8y.o66](this, box2d[W8y.z6M][W8y.K46]);
  this[W8y.L77] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
};

goog[W8y.u80](box2d[W8y.O36], box2d[W8y.k1r]);
box2d.b2MotorJointDef.prototype.linearOffset = W8y.z6k;
box2d.b2MotorJointDef.prototype.angularOffset = W8y.u8Q;
box2d.b2MotorJointDef.prototype.maxForce = W8y.D8Q;
box2d.b2MotorJointDef.prototype.maxTorque = W8y.D8Q;
box2d.b2MotorJointDef.prototype.correctionFactor = W8y.i3H;

box2d.b2MotorJointDef.prototype.Initialize = function (f, N) {
  var P = "k7C";
  this[W8y.F6Q] = f;
  this[W8y.b5Q] = N;
  this[W8y.F6Q][W8y.y7M](this[W8y.b5Q][W8y.T9H](), this[W8y.L77]);
  var Z = this[W8y.F6Q][W8y.x57](),
      W = this[W8y.b5Q][W8y.x57]();
  this[W8y.h5Q] = W8y[P](W, Z);
};

box2d[W8y.y57] = function (f) {
  goog[W8y.o66](this, f);
  this[W8y.C5Q] = f[W8y.L77][W8y.l26]();
  this[W8y.m1r] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.E9k] = f[W8y.A9k];
  this[W8y.i8M] = f[W8y.w66];
  this[W8y.B6M] = f[W8y.m40];
  this[W8y.r8k] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.u8k] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.z3k] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.A2k] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.p2H] = new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q);
  this[W8y.T9M] = new box2d[W8y.T0H]();
  this[W8y.p97] = new box2d[W8y.x8M]();
  this[W8y.k67] = new box2d[W8y.x8M]();
  this[W8y.G3r] = new box2d[W8y.T0H]();
};

goog[W8y.u80](box2d[W8y.y57], box2d[W8y.N17]);
box2d.b2MotorJoint.prototype.m_linearOffset = W8y.z6k;
box2d.b2MotorJoint.prototype.m_angularOffset = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_linearImpulse = W8y.z6k;
box2d.b2MotorJoint.prototype.m_angularImpulse = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_maxForce = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_maxTorque = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_correctionFactor = W8y.i3H;
box2d.b2MotorJoint.prototype.m_indexA = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_indexB = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_rA = W8y.z6k;
box2d.b2MotorJoint.prototype.m_rB = W8y.z6k;
box2d.b2MotorJoint.prototype.m_localCenterA = W8y.z6k;
box2d.b2MotorJoint.prototype.m_localCenterB = W8y.z6k;
box2d.b2MotorJoint.prototype.m_linearError = W8y.z6k;
box2d.b2MotorJoint.prototype.m_angularError = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_invMassA = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_invMassB = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_invIA = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_invIB = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_linearMass = W8y.z6k;
box2d.b2MotorJoint.prototype.m_angularMass = W8y.u8Q;
box2d.b2MotorJoint.prototype.m_qA = W8y.z6k;
box2d.b2MotorJoint.prototype.m_qB = W8y.z6k;
box2d.b2MotorJoint.prototype.m_K = W8y.z6k;

box2d.b2MotorJoint.prototype.GetAnchorA = function (f) {
  return this[W8y.l37][W8y.T9H](f);
};

box2d.b2MotorJoint.prototype.GetAnchorB = function (f) {
  return this[W8y.v27][W8y.T9H](f);
};

box2d.b2MotorJoint.prototype.GetReactionForce = function (f, N) {
  return box2d[W8y.X26](f, this[W8y.m1r], N);
};

box2d.b2MotorJoint.prototype.GetReactionTorque = function (f) {
  var N = "Q7C";
  return W8y[N](f, this[W8y.g8H]);
};

box2d.b2MotorJoint.prototype.SetCorrectionFactor = function (f) {
  var N = "_correctionFactor",
      P = "I7C",
      Z = "j7C";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f) && W8y[Z](W8y.q3H, f) && W8y[P](f, W8y.i0M));
  }

  ;
  this[N] = f;
};

box2d.b2MotorJoint.prototype.GetCorrectionFactor = function () {
  return this[W8y.B6M];
};

box2d.b2MotorJoint.prototype.SetLinearOffset = function (f) {
  if (!box2d[W8y.F9k](f, this[W8y.C5Q])) {
    this[W8y.l37][W8y.U5H](W8y.f5k);
    this[W8y.v27][W8y.U5H](W8y.f5k);
    this[W8y.C5Q][W8y.k97](f);
  }
};

box2d.b2MotorJoint.prototype.GetLinearOffset = function (f) {
  return f[W8y.k97](this[W8y.C5Q]);
};

box2d.b2MotorJoint.prototype.SetAngularOffset = function (f) {
  var N = "R7C";

  if (W8y[N](f, this[W8y.p07])) {
    this[W8y.l37][W8y.U5H](W8y.f5k);
    this[W8y.v27][W8y.U5H](W8y.f5k);
    this[W8y.p07] = f;
  }
};

box2d.b2MotorJoint.prototype.GetAngularOffset = function () {
  return this[W8y.p07];
};

box2d.b2MotorJoint.prototype.SetMaxForce = function (f) {
  var N = "E7C";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f) && W8y[N](f, W8y.u8Q));
  }

  this[W8y.E9k] = f;
};

box2d.b2MotorJoint.prototype.GetMaxForce = function () {
  return this[W8y.E9k];
};

box2d.b2MotorJoint.prototype.SetMaxTorque = function (f) {
  var N = "M7C";

  if (box2d[W8y.l3H]) {
    box2d[W8y.X16](box2d[W8y.q9H](f) && W8y[N](f, W8y.u8Q));
  }

  this[W8y.i8M] = f;
};

box2d.b2MotorJoint.prototype.GetMaxTorque = function () {
  return this[W8y.i8M];
};

box2d.b2MotorJoint.prototype.InitVelocityConstraints = function (f) {
  var N = "H9C",
      P = "K9C",
      Z = "V9C",
      W = "g9C",
      l = "l9C",
      m = "c9C",
      C = "N9C",
      n = "y9C",
      k = "z7C",
      H = "v7C";
  this[W8y.G0k] = this[W8y.l37][W8y.x5M];
  this[W8y.a0k] = this[W8y.v27][W8y.x5M];
  this[W8y.z3k][W8y.k97](this[W8y.l37][W8y.i6k][W8y.O8Q]);
  this[W8y.A2k][W8y.k97](this[W8y.v27][W8y.i6k][W8y.O8Q]);
  this[W8y.j96] = this[W8y.l37][W8y.k86];
  this[W8y.V96] = this[W8y.v27][W8y.k86];
  this[W8y.q8M] = this[W8y.l37][W8y.M7H];
  this[W8y.E9M] = this[W8y.v27][W8y.M7H];
  var i = f[W8y.P1T][this[W8y.G0k]][W8y.a30],
      Q = f[W8y.P1T][this[W8y.G0k]][W8y.U30],
      e = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      j = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      o = f[W8y.P1T][this[W8y.a0k]][W8y.a30],
      S = f[W8y.P1T][this[W8y.a0k]][W8y.U30],
      d = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      u = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      D = this[W8y.p97][W8y.h70](Q),
      M = this[W8y.k67][W8y.h70](S),
      y1 = box2d[W8y.x47](D, box2d[W8y.F7M](this[W8y.z3k], box2d[W8y.p7T][W8y.t7M]), this[W8y.r8k]),
      h = box2d[W8y.x47](M, box2d[W8y.F7M](this[W8y.A2k], box2d[W8y.p7T][W8y.t7M]), this[W8y.u8k]),
      E = this[W8y.j96],
      L = this[W8y.V96],
      w1 = this[W8y.q8M],
      B = this[W8y.E9M],
      N1 = this[W8y.G3r];
  N1[W8y.Q57][W8y.T9T] = E + L + W8y[H](w1, y1[W8y.Z9T], y1[W8y.Z9T]) + W8y[k](B, h[W8y.Z9T], h[W8y.Z9T]);
  N1[W8y.Q57][W8y.Z9T] = -w1 * y1[W8y.T9T] * y1[W8y.Z9T] - W8y[n](B, h[W8y.T9T], h[W8y.Z9T]);
  N1[W8y.D57][W8y.T9T] = N1[W8y.Q57][W8y.Z9T];
  N1[W8y.D57][W8y.Z9T] = E + L + W8y[C](w1, y1[W8y.T9T], y1[W8y.T9T]) + W8y[m](B, h[W8y.T9T], h[W8y.T9T]);
  N1[W8y.X1M](this[W8y.T9M]);
  this[W8y.u5Q] = w1 + B;

  if (W8y[l](this[W8y.u5Q], 0)) {
    this[W8y.u5Q] = W8y[W](1, this[W8y.u5Q]);
  }

  box2d[W8y.x8T](box2d[W8y.x8T](box2d[W8y.m3T](o, h, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.m3T](i, y1, box2d[W8y.p7T][W8y.l9M]), box2d[W8y.p7T][W8y.H9M]), box2d[W8y.x47](D, this[W8y.C5Q], box2d[W8y.p7T][W8y.m4M]), this[W8y.p2H]);
  this[W8y.N6k] = W8y[Z](S, Q, this[W8y.p07]);

  if (f[W8y.D5H][W8y.W6T]) {
    this[W8y.m1r][W8y.E40](f[W8y.D5H][W8y.k30]);
    this[W8y.g8H] *= f[W8y.D5H][W8y.k30];
    var f1 = this[W8y.m1r];
    e[W8y.I5M](E, f1);
    j -= W8y[P](w1, box2d[W8y.t10](y1, f1) + this[W8y.g8H]);
    d[W8y.a9k](L, f1);
    u += W8y[N](B, box2d[W8y.t10](h, f1) + this[W8y.g8H]);
  } else {
    this[W8y.m1r][W8y.j6k]();
    this[W8y.g8H] = 0;
  }

  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = j;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = u;
};

box2d.b2MotorJoint.prototype.SolveVelocityConstraints = function (f) {
  var N = "N8C",
      P = "w8C",
      Z = "A9C",
      W = "G9C",
      l = "v9C",
      m = "M9C",
      C = "E9C",
      n = "R9C",
      k = "I9C",
      H = "r9C",
      i = f[W8y.S37][this[W8y.G0k]][W8y.N8T],
      Q = f[W8y.S37][this[W8y.G0k]][W8y.M9T],
      e = f[W8y.S37][this[W8y.a0k]][W8y.N8T],
      j = f[W8y.S37][this[W8y.a0k]][W8y.M9T],
      o = this[W8y.j96],
      S = this[W8y.V96],
      d = this[W8y.q8M],
      u = this[W8y.E9M],
      D = f[W8y.D5H][W8y.I5H],
      M = f[W8y.D5H][W8y.e4T];
  {
    var y1 = W8y[H](j, Q, M * this[W8y.B6M] * this[W8y.N6k]),
        h = -this[W8y.u5Q] * y1,
        E = this[W8y.g8H],
        L = W8y[k](D, this[W8y.i8M]);
    this[W8y.g8H] = box2d[W8y.N06](this[W8y.g8H] + h, -L, L);
    h = W8y[n](this[W8y.g8H], E);
    Q -= W8y[C](d, h);
    j += W8y[m](u, h);
  }
  {
    var w1 = this[W8y.r8k],
        B = this[W8y.u8k],
        y1 = box2d[W8y.m3T](box2d[W8y.x8T](box2d[W8y.m3T](e, box2d[W8y.v0M](j, B, box2d[W8y.p7T][W8y.t7M]), box2d[W8y.p7T][W8y.t7M]), box2d[W8y.m3T](i, box2d[W8y.v0M](Q, w1, box2d[W8y.p7T][W8y.l9M]), box2d[W8y.p7T][W8y.l9M]), box2d[W8y.p7T][W8y.H9M]), box2d[W8y.X26](W8y[l](M, this[W8y.B6M]), this[W8y.p2H], box2d[W8y.p7T][W8y.m4M]), box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_Cdot),
        h = box2d[W8y.n1H](this[W8y.T9M], y1, box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_impulse)[W8y.P8k](),
        E = box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_oldImpulse.Copy(this[W8y.m1r]);
    this[W8y.m1r][W8y.t4H](h);
    var L = W8y[W](D, this[W8y.E9k]);

    if (W8y[Z](this[W8y.m1r][W8y.A5T](), L * L)) {
      this[W8y.m1r][W8y.Y27]();
      this[W8y.m1r][W8y.E40](L);
    }

    box2d[W8y.x8T](this[W8y.m1r], E, h);
    i[W8y.I5M](o, h);
    Q -= W8y[P](d, box2d[W8y.t10](w1, h));
    e[W8y.a9k](S, h);
    j += W8y[N](u, box2d[W8y.t10](B, h));
  }
  f[W8y.S37][this[W8y.G0k]][W8y.M9T] = Q;
  f[W8y.S37][this[W8y.a0k]][W8y.M9T] = j;
};

box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_Cdot = new box2d[W8y.p7T]();
box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_impulse = new box2d[W8y.p7T]();
box2d.b2MotorJoint.prototype.SolveVelocityConstraints.s_oldImpulse = new box2d[W8y.p7T]();

box2d.b2MotorJoint.prototype.SolvePositionConstraints = function (f) {
  return true;
};

box2d.b2MotorJoint.prototype.Dump = function () {
  var f = "  jd.correctionFactor = %.15f;\n",
      N = "  jd.angularOffset = %.15f;\n",
      P = "  jd.linearOffset.SetXY(%.15f, %.15f);\n",
      Z = "  /*box2d.b2MotorJointDef*/ var jd = new box2d.b2MotorJointDef();\n";

  if (box2d[W8y.F2k]) {
    var W = this[W8y.l37][W8y.x5M],
        l = this[W8y.v27][W8y.x5M];
    box2d[W8y.R50](Z);
    box2d[W8y.R50](W8y.Q67, W);
    box2d[W8y.R50](W8y.k3r, l);
    box2d[W8y.R50](W8y.i1r, this[W8y.N96] ? W8y.m7H : W8y.c26);
    box2d[W8y.R50](P, this[W8y.C5Q][W8y.T9T], this[W8y.C5Q][W8y.Z9T]);
    box2d[W8y.R50](N, this[W8y.p07]);
    box2d[W8y.R50](W8y.g6M, this[W8y.E9k]);
    box2d[W8y.R50](W8y.d0k, this[W8y.i8M]);
    box2d[W8y.R50](f, this[W8y.B6M]);
    box2d[W8y.R50](W8y.P6M, this[W8y.U56]);
  }
};

goog[W8y.U3T](W8y.D2T);
goog[W8y.V20]('box2d.b2Settings');
goog[W8y.V20]('box2d.b2Draw');
goog[W8y.V20]('box2d.b2Timer');
goog[W8y.V20]('box2d.b2CircleShape');
goog[W8y.V20]('box2d.b2EdgeShape');
goog[W8y.V20]('box2d.b2ChainShape');
goog[W8y.V20]('box2d.b2PolygonShape');
goog[W8y.V20]('box2d.b2BroadPhase');
goog[W8y.V20]('box2d.b2Distance');
goog[W8y.V20]('box2d.b2DynamicTree');
goog[W8y.V20]('box2d.b2TimeOfImpact');
goog[W8y.V20]('box2d.b2Body');
goog[W8y.V20]('box2d.b2Fixture');
goog[W8y.V20]('box2d.b2WorldCallbacks');
goog[W8y.V20]('box2d.b2TimeStep');
goog[W8y.V20]('box2d.b2World');
goog[W8y.V20]('box2d.b2Contact');
goog[W8y.V20]('box2d.b2AreaJoint');
goog[W8y.V20]('box2d.b2DistanceJoint');
goog[W8y.V20]('box2d.b2FrictionJoint');
goog[W8y.V20]('box2d.b2GearJoint');
goog[W8y.V20]('box2d.b2MotorJoint');
goog[W8y.V20]('box2d.b2MouseJoint');
goog[W8y.V20]('box2d.b2PrismaticJoint');
goog[W8y.V20]('box2d.b2PulleyJoint');
goog[W8y.V20]('box2d.b2RevoluteJoint');
goog[W8y.V20]('box2d.b2RopeJoint');
goog[W8y.V20]('box2d.b2WeldJoint');
goog[W8y.V20]('box2d.b2WheelJoint');
goog[W8y.V20]('box2d.b2Rope');
goog[W8y.V20]('box2d.b2BuoyancyController');
goog[W8y.V20]('box2d.b2ConstantAccelController');
goog[W8y.V20]('box2d.b2ConstantForceController');
goog[W8y.V20]('box2d.b2GravityController');
goog[W8y.V20]('box2d.b2TensorDampingController');

Phaser[W8y.t8Q][W8y.c16] = function (f, config) {
  var P = "Signal",
      Z = 'pxm',
      W = 'mpx',
      l = "particleSystem",
      m = 60,
      C = "X8C",
      n = "SetGravity";
  this[W8y.R6H] = f;
  this[W8y.e26] = W8y.M0T;
  this[W8y.m4T] = new box2d[W8y.E90](new box2d[W8y.p7T](W8y.u8Q, W8y.u8Q));
  this[W8y.x26] = new Phaser[W8y.t8Q][W8y.c16][W8y.S0k](this[W8y.i8k](W8y.D8Q));
  this[W8y.m4T][W8y.I36](this[W8y.x26]);
  this[W8y.x27] = new Phaser[W8y.t8Q][W8y.c16][W8y.X57]();
  this[W8y.m4T][W8y.y3M](this[W8y.x27]);
  this[W8y.D7H] = W8y.u8Q;
  this[W8y.b17] = W8y.u8Q;
  this[W8y.u5M] = new Phaser[W8y.t8Q][W8y.c16][W8y.P1M](this, this[W8y.m4T], this[W8y.m4T][W8y.L5Q], this[W8y.m4T][n]);
  this[W8y.f66] = W8y.r3H;
  this[W8y.P9M] = W8y.q3H;
  this[W8y.c3T] = W8y.i0M;
  this[W8y.K7k] = W8y[C](W8y.D8Q, m);
  this[W8y.l3M] = W8y.z8Q;
  this[W8y.Z2r] = W8y.S8Q;
  this[W8y.j5M] = W8y.G0T;
  this.paused = false;
  this[l] = W8y.z6k;
  var k = new box2d[W8y.G1M]();
  this[W8y.C6M] = this[W8y.m4T][W8y.G8k](k);
  this[W8y.m1M] = W8y.z6k;

  if (config[W8y.r4H](W) && config[W8y.r4H](Z)) {
    this[W8y.i8k] = config[W8y.i8k];
    this[W8y.n10] = config[W8y.n10];
  }

  this[W8y.j1r] = {
    left: W8y.z6k,
    right: W8y.z6k,
    top: W8y.z6k,
    bottom: W8y.z6k
  };
  this[W8y.k9T] = new Phaser[P]();
  this[W8y.p1r] = new Phaser[P]();
  this[W8y.P67] = [];
  goog[W8y.u80](Phaser[W8y.t8Q][W8y.c16][W8y.h36], box2d[W8y.R96]);
  goog[W8y.u80](Phaser[W8y.t8Q][W8y.c16][W8y.o5k], box2d[W8y.p6k]);
};

W8y[W8y.h4M](0x8000);
Phaser.Physics.Box2D.prototype = {
  getNextBodyId: function getNextBodyId() {
    var f = this[W8y.D7H];
    this[W8y.D7H] += 1;
    return f;
  },
  getNextFixtureId: function getNextFixtureId() {
    var f = this[W8y.b17];
    this[W8y.b17] += 1;
    return f;
  },
  removeBodyNextStep: function removeBodyNextStep(f) {
    this[W8y.P67][W8y.h7T](f);
  },
  preUpdate: function preUpdate() {
    var f = this[W8y.P67].length;

    while (f--) {
      this[W8y.Q0r](this[W8y.P67][f]);
    }

    this[W8y.P67].length = 0;
  },
  enable: function enable(f, N) {
    var P = "n8C",
        Z = "J8C",
        W = "b8C",
        l = "enableBody",
        m = "children",
        C = "enable",
        n = "Group",
        k = "s8C";

    if (typeof N === 'undefined') {
      N = true;
    }

    var H = 1;

    if (Array[W8y.V4H](f)) {
      H = f.length;

      while (H--) {
        if (W8y[k](f[H], Phaser[n])) {
          this[C](f[H][m], N);
        } else {
          this[l](f[H]);

          if (N && f[H][W8y.r4H]('children') && W8y[W](f[H][m].length, 0)) {
            this[C](f[H], true);
          }
        }
      }
    } else {
      if (W8y[Z](f, Phaser[n])) {
        this[C](f[m], N);
      } else {
        this[l](f);

        if (N && f[W8y.r4H]('children') && W8y[P](f[m].length, 0)) {
          this[C](f[m], true);
        }
      }
    }
  },
  enableBody: function enableBody(f) {
    var N = "anchor",
        P = "K8C";

    if (f[W8y.r4H]('body') && W8y[P](f[W8y.R6k], null)) {
      f[W8y.R6k] = new Phaser[W8y.t8Q][W8y.c16][W8y.f3H](this[W8y.R6H], f, f[W8y.T9T], f[W8y.Z9T], 2);
      f[N][W8y.B06](0.5);
    }
  },
  setBoundsToWorld: function setBoundsToWorld(f, N, P, Z, W, l) {
    var m = "setBounds";

    if (typeof f === 'undefined') {
      f = true;
    }

    if (typeof N === 'undefined') {
      N = true;
    }

    if (typeof P === 'undefined') {
      P = true;
    }

    if (typeof Z === 'undefined') {
      Z = true;
    }

    if (typeof W === 'undefined') {
      W = 1;
    }

    if (typeof l === 'undefined') {
      W = 0xFFFFFFFF;
    }

    this[m](this[W8y.R6H][W8y.m4T][W8y.h37][W8y.T9T], this[W8y.R6H][W8y.m4T][W8y.h37][W8y.Z9T], this[W8y.R6H][W8y.m4T][W8y.h37].width, this[W8y.R6H][W8y.m4T][W8y.h37].height, f, N, P, Z, W, l);
  },
  setBounds: function setBounds(f, N, P, Z, W, l, m, C, n, k) {
    var H = "bottom";

    if (typeof W === 'undefined') {
      W = true;
    }

    if (typeof l === 'undefined') {
      l = true;
    }

    if (typeof m === 'undefined') {
      m = true;
    }

    if (typeof C === 'undefined') {
      C = true;
    }

    if (typeof n === 'undefined') {
      n = 1;
    }

    if (typeof k === 'undefined') {
      k = 0xFFFFFFFF;
    }

    if (this[W8y.j1r][W8y.W3T]) {
      this[W8y.Q0r](this[W8y.j1r][W8y.W3T]);
    }

    if (this[W8y.j1r][W8y.A1T]) {
      this[W8y.Q0r](this[W8y.j1r][W8y.A1T]);
    }

    if (this.walls.top) {
      this[W8y.Q0r](this.walls.top);
    }

    if (this[W8y.j1r][H]) {
      this[W8y.Q0r](this[W8y.j1r][H]);
    }

    var i = new box2d[W8y.g16](),
        Q = new box2d[W8y.f8M]();
    Q[W8y.v2M] = i;
    Q[W8y.E86][W8y.O10] = Phaser[W8y.t8Q][W8y.c16][W8y.L8H];
    Q[W8y.E86][W8y.i4r] = 0xFFFF;
    var e = this[W8y.n10](100),
        j = this[W8y.R6H][W8y.m4T][W8y.h37];

    if (W) {
      this[W8y.j1r][W8y.W3T] = this[W8y.n3k](0, 0, 0);
      i[W8y.B4k](e, this[W8y.n10](j.height) + e, new box2d[W8y.p7T](e, 0), 0);
      var o = this[W8y.j1r][W8y.W3T].data[W8y.g37](Q);
      o[W8y.W6M] = this[W8y.c76]();
    }

    if (l) {
      this[W8y.j1r][W8y.A1T] = this[W8y.n3k](0, 0, 0);
      i[W8y.B4k](e, this[W8y.n10](j.height) + e, new box2d[W8y.p7T](this[W8y.n10](-j.width) - e, 0), 0);
      var o = this[W8y.j1r][W8y.A1T].data[W8y.g37](Q);
      o[W8y.W6M] = this[W8y.c76]();
    }

    if (m) {
      this.walls.top = this[W8y.n3k](0, 0, 0);
      i[W8y.B4k](this[W8y.n10](j.width) + e, e, new box2d[W8y.p7T](0, e), 0);
      var o = this.walls.top.data.CreateFixture(Q);
      o[W8y.W6M] = this[W8y.c76]();
    }

    if (C) {
      this[W8y.j1r][H] = this[W8y.n3k](0, 0, 0);
      i[W8y.B4k](this[W8y.n10](j.width) + e, e, new box2d[W8y.p7T](0, this[W8y.n10](-j.height) - e), 0);
      var o = this[W8y.j1r][H].data[W8y.g37](Q);
      o[W8y.W6M] = this[W8y.c76]();
    }
  },
  pause: function pause() {
    this.paused = true;
  },
  resume: function resume() {
    this.paused = false;
  },
  update: function update() {
    var f = "physicsElapsed",
        N = "time";

    if (this.paused) {
      return;
    }

    if (this[W8y.j5M]) {
      this[W8y.m4T][W8y.p00](this[W8y.R6H][N][f], this[W8y.l3M], this[W8y.Z2r]);
    } else {
      this[W8y.m4T][W8y.p00](this[W8y.K7k], this[W8y.l3M], this[W8y.Z2r]);
    }
  },
  clear: function clear() {
    this[W8y.m4T] = new box2d[W8y.E90](this[W8y.u5M]);
    this[W8y.m4T][W8y.I36](this[W8y.x26]);
    this[W8y.m4T][W8y.y3M](this[W8y.x27]);
    this[W8y.P67] = [];
  },
  destroy: function destroy() {
    var f = "clear";
    this[f]();
    this[W8y.u5M] = null;
    this[W8y.m4T] = null;
    this[W8y.R6H] = null;
  },
  createBody: function createBody(f, N, P) {
    var Z = new Phaser[W8y.t8Q][W8y.c16][W8y.f3H](this[W8y.R6H], null, f, N, P, this);
    return Z;
  },
  createCircle: function createCircle(f, N, P, Z, W) {
    var l = "setCircle",
        m = this[W8y.n3k](f, N, 2);
    return m[l](P, Z, W);
  },
  createRectangle: function createRectangle(f, N, P, Z, W, l, m) {
    var C = "setRectangle",
        n = this[W8y.n3k](f, N, 2);
    return n[C](P, Z, W, l, m);
  },
  createPolygon: function createPolygon(f, N, P, Z, W) {
    var l = "setPolygon",
        m = this[W8y.n3k](f, N, 2);
    return m[l](P, Z, W);
  },
  addBody: function addBody(f) {
    if (f.data[W8y.m4T]) {
      return false;
    } else {
      f.data = this[W8y.m4T][W8y.G8k](f[W8y.x1H]);
      f.data[W8y.m4T] = this[W8y.m4T];
      f.data.parent = f;
      this[W8y.k9T][W8y.x9k](f);
      return true;
    }
  },
  removeBody: function removeBody(f) {
    var N = "DestroyBody",
        P = "H8C";

    if (W8y[P](f.data[W8y.m4T], this[W8y.m4T])) {
      this[W8y.m4T][N](f.data);
      this[W8y.p1r][W8y.x9k](f);
    }

    return f;
  },
  getBodies: function getBodies() {
    var f = "GetBodyList",
        N = [];

    for (var P = this[W8y.m4T][f](); P; P = P[W8y.w4r]()) {
      N[W8y.h7T](P);
    }

    return N;
  },
  getBody: function getBody(f) {
    var N = "a8C",
        P = "e8C",
        Z = "r8C";

    if (W8y[Z](f, box2d[W8y.F6T])) {
      return f;
    } else if (W8y[P](f, Phaser[W8y.t8Q][W8y.c16][W8y.f3H])) {
      return f.data;
    } else if (f['body'] && W8y[N](f['body'][W8y.N2k], Phaser[W8y.t8Q][W8y.X2T])) {
      return f[W8y.R6k].data;
    }

    return null;
  },
  toJSON: function toJSON() {
    var f = "toJSON";
    return this[W8y.m4T][f]();
  },
  mpx: function mpx(f) {
    return f *= this[W8y.e26];
  },
  pxm: function pxm(f) {
    var N = "d8C";
    return W8y[N](f, this[W8y.e26]);
  },
  renderDebugDraw: function renderDebugDraw(f) {
    var N = "DrawDebugData";

    if (!this[W8y.R6H][W8y.k4H][W8y.a4k]) {
      return;
    }

    var P = this[W8y.R6H][W8y.k4H][W8y.a4k];
    P[W8y.x26][W8y.B37](f);
    P[W8y.m4T][N]();
    P[W8y.x26][W8y.w1r]();
  },
  renderBodyInfo: function renderBodyInfo(f, N) {
    var P = "toFixed",
        Z = "line";
    f[Z]('Position: x: ' + N[W8y.T9T][P](3) + ' y: ' + N[W8y.Z9T][P](3));
    f[Z]('Rotation: ' + N[W8y.S1r][P](3) + ' degrees');
    f[Z]('Velocity: x: ' + N[W8y.n5k][W8y.T9T][P](3) + ' y: ' + N[W8y.n5k][W8y.Z9T][P](3));
    f[Z]('Angular velocity: ' + N[W8y.Y6Q][P](3) + ' degrees/sec');
  },
  getFixturesAtPoint: function getFixturesAtPoint(P, Z, W, l) {
    var m = function m(f) {
      var N = "u8C";

      if (l && W8y[N](f[W8y.b86]()[W8y.E1k](), box2d[W8y.A4M][W8y.r4T])) {
        return true;
      }

      if (f[W8y.h10](k)) {
        Q[W8y.h7T](f);
        return !W;
      }

      return true;
    };

    if (typeof W === 'undefined') {
      W = false;
    }

    if (typeof l === 'undefined') {
      l = false;
    }

    var C = this[W8y.n10](-P),
        n = this[W8y.n10](-Z),
        k = new box2d[W8y.p7T](C, n),
        H = new box2d[W8y.Z20](),
        i = new box2d[W8y.p7T]();
    i[W8y.y47](0.001, 0.001);
    box2d[W8y.x8T](k, i, H[W8y.d1T]);
    box2d[W8y.m3T](k, i, H[W8y.I1T]);
    var Q = [];
    this[W8y.m4T][W8y.Z17](m, H);
    return Q;
  },
  getBodiesAtPoint: function getBodiesAtPoint(Z, W, l, m) {
    var C = "p8C",
        n = "L8C";

    if (typeof l === 'undefined') {
      l = false;
    }

    if (typeof m === 'undefined') {
      m = false;
    }

    var k = this[W8y.g1k](Z, W, l, m);

    if (W8y[n](k.length, 1)) {
      return k;
    }

    var H = [];

    for (var i = 0; W8y[C](i, k.length); i++) {
      H[W8y.h7T](k[i][W8y.b86]().parent);
    }

    H[W8y.E86](function (f, N) {
      var P = "F8C";
      return W8y[P](H[W8y.i1M](f), N);
    });
    return H;
  },
  mouseDragStart: function mouseDragStart(f) {
    var N = "U6C",
        P = "y6C",
        Z = "mouseDragEnd";
    this[Z]();
    var W = this[W8y.g1k](f[W8y.T9T], f[W8y.Z9T], true, true);

    if (W8y[P](W.length, 1)) {
      return;
    }

    var l = this[W8y.n10](-f[W8y.T9T]),
        m = this[W8y.n10](-f[W8y.Z9T]),
        C = new box2d[W8y.p7T](l, m),
        n = new box2d[W8y.q50]();
    n[W8y.F6Q] = this[W8y.C6M];
    n[W8y.b5Q] = W[0][W8y.b86]();
    n[W8y.E8M][W8y.k97](C);
    n[W8y.A9k] = W8y[N](1000, n[W8y.b5Q][W8y.L3T]());
    this[W8y.m1M] = this[W8y.m4T][W8y.x10](n);
    n[W8y.b5Q][W8y.U5H](true);
  },
  mouseDragMove: function mouseDragMove(f) {
    var N = "SetTarget";

    if (!this[W8y.m1M]) {
      return;
    }

    var P = this[W8y.n10](-f[W8y.T9T]),
        Z = this[W8y.n10](-f[W8y.Z9T]),
        W = new box2d[W8y.p7T](P, Z);
    this[W8y.m1M][N](W);
  },
  mouseDragEnd: function mouseDragEnd() {
    if (this[W8y.m1M]) {
      this[W8y.m4T][W8y.o7k](this[W8y.m1M]);
      this[W8y.m1M] = null;
    }
  },
  distanceJoint: function distanceJoint(f, N, P, Z, W, l, m, C, n) {
    var k = "Z6C";

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    if (typeof W === 'undefined') {
      W = 0;
    }

    if (typeof l === 'undefined') {
      l = 0;
    }

    if (typeof m === 'undefined') {
      m = 0;
    }

    if (typeof C === 'undefined') {
      C = 0;
    }

    if (typeof n === 'undefined') {
      n = 0;
    }

    Z = this[W8y.n10](-Z);
    W = this[W8y.n10](-W);
    l = this[W8y.n10](-l);
    m = this[W8y.n10](-m);

    if (f['body']) {
      f = f['body'];
    }

    if (N['body']) {
      N = N['body'];
    }

    var H = new box2d[W8y.C6T]();
    H[W8y.F6Q] = f.data;
    H[W8y.b5Q] = N.data;
    H[W8y.r8H][W8y.y47](Z, W);
    H[W8y.x8H][W8y.y47](l, m);

    if (W8y[k](P, null) || typeof P === 'undefined') {
      var i = new box2d[W8y.p7T](),
          Q = new box2d[W8y.p7T]();
      H[W8y.F6Q][W8y.I00](H[W8y.r8H], i);
      H[W8y.b5Q][W8y.I00](H[W8y.x8H], Q);
      i[W8y.d6M](Q);
      P = i[W8y.p8k]();
    } else {
      P = this[W8y.n10](P);
    }

    H.length = P;
    H[W8y.o67] = C;
    H[W8y.G56] = n;
    return this[W8y.m4T][W8y.x10](H);
  },
  ropeJoint: function ropeJoint(f, N, P, Z, W, l, m) {
    var C = "W6C";

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    if (typeof W === 'undefined') {
      W = 0;
    }

    if (typeof l === 'undefined') {
      l = 0;
    }

    if (typeof m === 'undefined') {
      m = 0;
    }

    Z = this[W8y.n10](-Z);
    W = this[W8y.n10](-W);
    l = this[W8y.n10](-l);
    m = this[W8y.n10](-m);

    if (f['body']) {
      f = f['body'];
    }

    if (N['body']) {
      N = N['body'];
    }

    var n = new box2d[W8y.N37]();
    n[W8y.F6Q] = f.data;
    n[W8y.b5Q] = N.data;
    n[W8y.r8H][W8y.y47](Z, W);
    n[W8y.x8H][W8y.y47](l, m);

    if (W8y[C](P, null) || typeof P === 'undefined') {
      var k = new box2d[W8y.p7T](),
          H = new box2d[W8y.p7T]();
      n[W8y.F6Q][W8y.I00](n[W8y.r8H], k);
      n[W8y.b5Q][W8y.I00](n[W8y.x8H], H);
      k[W8y.d6M](H);
      P = k[W8y.p8k]();
    } else {
      P = this[W8y.n10](P);
    }

    n[W8y.q0H] = P;
    return this[W8y.m4T][W8y.x10](n);
  },
  revoluteJoint: function revoluteJoint(f, N, P, Z, W, l, m, C, n, k, H, i) {
    if (typeof P === 'undefined') {
      P = 0;
    }

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    if (typeof W === 'undefined') {
      W = 0;
    }

    if (typeof l === 'undefined') {
      l = 0;
    }

    if (typeof m === 'undefined') {
      m = 0;
    }

    if (typeof C === 'undefined') {
      C = 0;
    }

    if (typeof n === 'undefined') {
      n = false;
    }

    if (typeof k === 'undefined') {
      k = 0;
    }

    if (typeof H === 'undefined') {
      H = 0;
    }

    if (typeof i === 'undefined') {
      i = false;
    }

    P = this[W8y.n10](-P);
    Z = this[W8y.n10](-Z);
    W = this[W8y.n10](-W);
    l = this[W8y.n10](-l);

    if (f['body']) {
      f = f['body'];
    }

    if (N['body']) {
      N = N['body'];
    }

    var Q = new box2d[W8y.G3H]();
    Q[W8y.F6Q] = f.data;
    Q[W8y.b5Q] = N.data;
    Q[W8y.r8H][W8y.y47](P, Z);
    Q[W8y.x8H][W8y.y47](W, l);
    Q[W8y.Z4T] = Phaser[W8y.e4M][W8y.c6M](-m);
    Q[W8y.S3k] = C;
    Q[W8y.E80] = n;
    Q[W8y.K1M] = Phaser[W8y.e4M][W8y.c6M](k);
    Q[W8y.A0H] = Phaser[W8y.e4M][W8y.c6M](H);
    Q[W8y.C4T] = i;
    return this[W8y.m4T][W8y.x10](Q);
  },
  prismaticJoint: function prismaticJoint(f, N, P, Z, W, l, m, C, n, k, H, i, Q, e, j) {
    if (typeof P === 'undefined') {
      P = 1;
    }

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    if (typeof W === 'undefined') {
      W = 0;
    }

    if (typeof l === 'undefined') {
      l = 0;
    }

    if (typeof m === 'undefined') {
      m = 0;
    }

    if (typeof C === 'undefined') {
      C = 0;
    }

    if (typeof n === 'undefined') {
      n = 0;
    }

    if (typeof k === 'undefined') {
      k = 0;
    }

    if (typeof i === 'undefined') {
      i = 0;
    }

    if (typeof Q === 'undefined') {
      Q = 0;
    }

    if (typeof e === 'undefined') {
      e = false;
    }

    if (typeof H === 'undefined') {
      H = false;
    }

    if (typeof j === 'undefined') {
      j = 0;
    }

    P *= -1;
    Z *= -1;
    W = this[W8y.n10](-W);
    l = this[W8y.n10](-l);
    m = this[W8y.n10](-m);
    C = this[W8y.n10](-C);
    n = this[W8y.n10](n);
    i = this[W8y.n10](i);
    Q = this[W8y.n10](Q);

    if (f['body']) {
      f = f['body'];
    }

    if (N['body']) {
      N = N['body'];
    }

    var o = new box2d[W8y.d3T]();
    o[W8y.F6Q] = f.data;
    o[W8y.b5Q] = N.data;
    o[W8y.x30][W8y.y47](P, Z);
    o[W8y.r8H][W8y.y47](W, l);
    o[W8y.x8H][W8y.y47](m, C);
    o[W8y.Z4T] = n;
    o[W8y.t2H] = k;
    o[W8y.E80] = H;
    o[W8y.e9H] = i;
    o[W8y.k7k] = Q;
    o[W8y.C4T] = e;
    o[W8y.D3T] = Phaser[W8y.e4M][W8y.c6M](-j);
    return this[W8y.m4T][W8y.x10](o);
  },
  frictionJoint: function frictionJoint(f, N, P, Z, W, l, m, C) {
    if (typeof W === 'undefined') {
      W = 0;
    }

    if (typeof l === 'undefined') {
      l = 0;
    }

    if (typeof m === 'undefined') {
      m = 0;
    }

    if (typeof C === 'undefined') {
      C = 0;
    }

    if (typeof P === 'undefined') {
      P = 0;
    }

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    W = this[W8y.n10](-W);
    l = this[W8y.n10](-l);
    m = this[W8y.n10](-m);
    C = this[W8y.n10](-C);

    if (f['body']) {
      f = f['body'];
    }

    if (N['body']) {
      N = N['body'];
    }

    var n = new box2d[W8y.L3M]();
    n[W8y.F6Q] = f.data;
    n[W8y.b5Q] = N.data;
    n[W8y.r8H][W8y.y47](W, l);
    n[W8y.x8H][W8y.y47](m, C);
    n[W8y.A9k] = P;
    n[W8y.w66] = Z;
    return this[W8y.m4T][W8y.x10](n);
  },
  weldJoint: function weldJoint(f, N, P, Z, W, l, m, C) {
    if (typeof P === 'undefined') {
      P = 0;
    }

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    if (typeof W === 'undefined') {
      W = 0;
    }

    if (typeof l === 'undefined') {
      l = 0;
    }

    if (typeof m === 'undefined') {
      m = 0;
    }

    if (typeof C === 'undefined') {
      C = 0;
    }

    P = this[W8y.n10](-P);
    Z = this[W8y.n10](-Z);
    W = this[W8y.n10](-W);
    l = this[W8y.n10](-l);

    if (f['body']) {
      f = f['body'];
    }

    if (N['body']) {
      N = N['body'];
    }

    var n = new box2d[W8y.U2k]();
    n[W8y.F6Q] = f.data;
    n[W8y.b5Q] = N.data;
    n[W8y.r8H][W8y.y47](P, Z);
    n[W8y.x8H][W8y.y47](W, l);
    n[W8y.o67] = m;
    n[W8y.G56] = C;
    return this[W8y.m4T][W8y.x10](n);
  },
  motorJoint: function motorJoint(f, N, P, Z, W, l, m, C) {
    if (typeof l === 'undefined') {
      l = 0;
    }

    if (typeof m === 'undefined') {
      m = 0;
    }

    if (typeof C === 'undefined') {
      C = 0;
    }

    if (typeof P === 'undefined') {
      P = 0;
    }

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    if (typeof W === 'undefined') {
      W = 1;
    }

    l = this[W8y.n10](-l);
    m = this[W8y.n10](-m);

    if (f['body']) {
      f = f['body'];
    }

    if (N['body']) {
      N = N['body'];
    }

    var n = new box2d[W8y.O36]();
    n[W8y.F6Q] = f.data;
    n[W8y.b5Q] = N.data;
    n[W8y.L77][W8y.y47](l, m);
    n[W8y.A9k] = P;
    n[W8y.w66] = Z;
    n[W8y.h5Q] = Phaser[W8y.e4M][W8y.c6M](-C);
    n[W8y.m40] = W;
    return this[W8y.m4T][W8y.x10](n);
  },
  wheelJoint: function wheelJoint(f, N, P, Z, W, l, m, C, n, k, H, i, Q) {
    if (typeof m === 'undefined') {
      m = 0;
    }

    if (typeof C === 'undefined') {
      C = 1;
    }

    if (typeof P === 'undefined') {
      P = 0;
    }

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    if (typeof W === 'undefined') {
      W = 0;
    }

    if (typeof l === 'undefined') {
      l = 0;
    }

    if (typeof H === 'undefined') {
      H = 0;
    }

    if (typeof i === 'undefined') {
      i = 0;
    }

    if (typeof Q === 'undefined') {
      Q = false;
    }

    if (typeof n === 'undefined') {
      n = 0;
    }

    if (typeof k === 'undefined') {
      k = 0;
    }

    m *= -1;
    C *= -1;
    P = this[W8y.n10](-P);
    Z = this[W8y.n10](-Z);
    W = this[W8y.n10](-W);
    l = this[W8y.n10](-l);

    if (f['body']) {
      f = f['body'];
    }

    if (N['body']) {
      N = N['body'];
    }

    var e = new box2d[W8y.e0M]();
    e[W8y.F6Q] = f.data;
    e[W8y.b5Q] = N.data;
    e[W8y.x30][W8y.y47](m, C);
    e[W8y.r8H][W8y.y47](P, Z);
    e[W8y.x8H][W8y.y47](W, l);
    e[W8y.Z4T] = Phaser[W8y.e4M][W8y.c6M](-H);
    e[W8y.S3k] = i;
    e[W8y.E80] = Q;
    e[W8y.o67] = n;
    e[W8y.G56] = k;
    return this[W8y.m4T][W8y.x10](e);
  },
  pulleyJoint: function pulleyJoint(f, N, P, Z, W, l, m, C, n, k, H, i, Q) {
    if (typeof P === 'undefined') {
      P = 0;
    }

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    if (typeof W === 'undefined') {
      W = 0;
    }

    if (typeof l === 'undefined') {
      l = 0;
    }

    if (typeof m === 'undefined') {
      m = 0;
    }

    if (typeof C === 'undefined') {
      C = 0;
    }

    if (typeof n === 'undefined') {
      n = 0;
    }

    if (typeof k === 'undefined') {
      k = 0;
    }

    if (typeof H === 'undefined') {
      H = 1;
    }

    if (typeof i === 'undefined') {
      i = 100;
    }

    if (typeof Q === 'undefined') {
      Q = 100;
    }

    P = this[W8y.n10](-P);
    Z = this[W8y.n10](-Z);
    W = this[W8y.n10](-W);
    l = this[W8y.n10](-l);
    m = this[W8y.n10](-m);
    C = this[W8y.n10](-C);
    n = this[W8y.n10](-n);
    k = this[W8y.n10](-k);
    i = this[W8y.n10](i);
    Q = this[W8y.n10](Q);

    if (f['body']) {
      f = f['body'];
    }

    if (N['body']) {
      N = N['body'];
    }

    var e = new box2d[W8y.I66]();
    e[W8y.F6Q] = f.data;
    e[W8y.b5Q] = N.data;
    e[W8y.r8H][W8y.y47](P, Z);
    e[W8y.x8H][W8y.y47](W, l);
    e[W8y.O76][W8y.y47](m, C);
    e[W8y.u06][W8y.y47](n, k);
    e[W8y.t76] = i;
    e[W8y.i76] = Q;
    e[W8y.C96] = H;
    return this[W8y.m4T][W8y.x10](e);
  },
  gearJoint: function gearJoint(f, N, P) {
    if (typeof P === 'undefined') {
      P = 1;
    }

    var Z = new box2d[W8y.z00]();
    Z[W8y.U80] = f;
    Z[W8y.R90] = N;
    Z[W8y.C96] = -P;
    Z[W8y.F6Q] = f[W8y.r0M]();
    Z[W8y.b5Q] = N[W8y.u0M]();
    return this[W8y.m4T][W8y.x10](Z);
  },
  clearTilemapLayerBodies: function clearTilemapLayerBodies(f, N) {
    var P = "destroy";
    N = f[W8y.K67](N);
    var Z = f[W8y.O1H][N][W8y.G2H].length;

    while (Z--) {
      f[W8y.O1H][N][W8y.G2H][Z][P]();
    }

    f[W8y.O1H][N][W8y.G2H].length = 0;
  },
  convertTilemap: function convertTilemap(f, N, P, Z) {
    var W = "h6C",
        l = "D6C",
        m = "S6C",
        C = "o6C",
        n = "addBody",
        k = "q6C",
        H = "i6C",
        i = "T6C",
        Q = "O6C",
        e = "V6C",
        j = "getTileRight",
        o = "collides",
        S = "g6C",
        d = "l6C",
        u = "clearTilemapLayerBodies";
    N = f[W8y.K67](N);

    if (typeof P === 'undefined') {
      P = true;
    }

    if (typeof Z === 'undefined') {
      Z = true;
    }

    this[u](f, N);
    var D = 0,
        M = 0,
        y1 = 0;

    for (var h = 0, E = f[W8y.O1H][N].height; W8y[d](h, E); h++) {
      D = 0;

      for (var L = 0, w1 = f[W8y.O1H][N].width; W8y[S](L, w1); L++) {
        var B = f[W8y.O1H][N].data[h][L];

        if (B && B[W8y.K26] > -1 && B[o]) {
          if (Z) {
            var N1 = f[j](N, L, h);

            if (W8y[e](D, 0)) {
              M = W8y[Q](B[W8y.T9T], B.width);
              y1 = W8y[i](B[W8y.Z9T], B.height);
              D = B.width;
            }

            if (N1 && N1[o]) {
              D += B.width;
            } else {
              var f1 = new Phaser[W8y.t8Q][W8y.c16][W8y.f3H](this[W8y.R6H], null, M, y1, 0);
              f1[W8y.h97](D, B.height, W8y[H](D, 2), W8y[k](B.height, 2), 0);

              if (P) {
                this[n](f1);
              }

              f[W8y.O1H][N][W8y.G2H][W8y.h7T](f1);
              D = 0;
            }
          } else {
            var f1 = this[W8y.n3k](W8y[C](B[W8y.T9T], B.width), W8y[m](B[W8y.Z9T], B.height), 0, false);
            f1[W8y.h97](B.width, B.height, W8y[l](B.width, 2), W8y[W](B.height, 2), 0);

            if (P) {
              this[n](f1);
            }

            f[W8y.O1H][N][W8y.G2H][W8y.h7T](f1);
          }
        }
      }
    }

    return f[W8y.O1H][N][W8y.G2H];
  },
  raycast: function raycast(f, N, P, Z, W, l) {
    var m = "B6C";

    if (typeof W === 'undefined') {
      W = true;
    }

    if (typeof l === 'undefined') {
      l = null;
    }

    f = this[W8y.n10](-f);
    N = this[W8y.n10](-N);
    P = this[W8y.n10](-P);
    Z = this[W8y.n10](-Z);
    var C = new box2d[W8y.p7T](f, N),
        n = new box2d[W8y.p7T](P, Z),
        k = [],
        H = new Phaser[W8y.t8Q][W8y.c16][W8y.h36](this, W, l);
    this[W8y.m4T][W8y.C7M](H, C, n);

    for (var i = 0; W8y[m](i, H[W8y.f6T].length); i++) {
      var Q = H[W8y.f6T][i];
      Q[W8y.C40] = {
        x: this[W8y.i8k](-Q[W8y.C40][W8y.T9T]),
        y: this[W8y.i8k](-Q[W8y.C40][W8y.Z9T])
      };
      Q[W8y.M4T] = {
        x: -Q[W8y.M4T][W8y.T9T],
        y: -Q[W8y.M4T][W8y.Z9T]
      };
      k[W8y.h7T](Q);
    }

    return k;
  },
  queryAABB: function queryAABB(f, N, P, Z) {
    var W = "t6C",
        l = "z6C";
    f = this[W8y.n10](-f);
    N = this[W8y.n10](-N);
    P = this[W8y.n10](P);
    Z = this[W8y.n10](Z);
    var m = new box2d[W8y.Z20]();
    m[W8y.d1T][W8y.y47](W8y[l](f, P), W8y[W](N, Z));
    m[W8y.I1T][W8y.y47](f, N);
    var C = new Phaser[W8y.t8Q][W8y.c16][W8y.o5k](this);
    this[W8y.m4T][W8y.Z17](C, m);
    return C[W8y.f6T];
  },
  queryFixture: function queryFixture(f) {
    var N = "QueryShape",
        P = new Phaser[W8y.t8Q][W8y.c16][W8y.o5k](this);
    this[W8y.m4T][N](P, f[W8y.y00](), f[W8y.b86]()[W8y.x8Q]());
    return P[W8y.f6T];
  }
};

Phaser[W8y.t8Q][W8y.c16][W8y.h36] = function (f, N, P) {
  this[W8y.m4T] = f;
  this[W8y.X86] = N;
  this[W8y.c90] = P;
  this[W8y.f6T] = [];
};

Phaser.Physics.Box2D.RayCastCallback.prototype.ReportFixture = function (f, N, P, Z) {
  var W = "f5C";

  if (W8y[W](this[W8y.c90], W8y.z6k)) {
    var l = {
      x: this[W8y.m4T][W8y.i8k](-N[W8y.T9T]),
      y: this[W8y.m4T][W8y.i8k](-N[W8y.Z9T])
    },
        m = {
      x: -P[W8y.T9T],
      y: -P[W8y.Z9T]
    },
        C = f[W8y.b86]().parent;

    if (!this[W8y.c90][W8y.U1T](this, C, f, l, m)) {
      return -W8y.D8Q;
    }
  }

  if (this[W8y.X86]) {
    this[W8y.f6T] = [];
  }

  var n = {};
  n[W8y.R6k] = f[W8y.b86]().parent;
  n[W8y.i9H] = f;
  n[W8y.C40] = {
    x: N[W8y.T9T],
    y: N[W8y.Z9T]
  };
  n[W8y.M4T] = {
    x: P[W8y.T9T],
    y: P[W8y.Z9T]
  };
  this[W8y.f6T][W8y.h7T](n);

  if (this[W8y.X86]) {
    return Z;
  } else {
    return W8y.D8Q;
  }
};

Phaser[W8y.t8Q][W8y.c16][W8y.o5k] = function (f) {
  this[W8y.m4T] = f;
  this[W8y.f6T] = [];
};

Phaser.Physics.Box2D.QueryCallback.prototype.ReportFixture = function (f) {
  var N = {};
  N[W8y.R6k] = f[W8y.b86]().parent;
  N[W8y.i9H] = f;
  this[W8y.f6T][W8y.h7T](N);
  return W8y.f5k;
};

Phaser[W8y.t8Q][W8y.c16][W8y.Y37] = function (f, N, P, Z) {
  var W = "Y5C",
      l = "c5C",
      m = "P5C",
      C = "color",
      n = "webToColor",
      k = "Color";
  P = P || 'rgb(255,255,255)';

  if (typeof Z === 'undefined') {
    Z = true;
  }

  var H = N[W8y.R6H][W8y.k4H][W8y.a4k],
      i = N.data,
      Q = i[W8y.x8Q]();
  H[W8y.x26][W8y.B37](f);
  H[W8y.x26][W8y.h2M](Q);
  var e = Phaser[k][n](P),
      j = H[W8y.x26][C];
  j[W8y.Q60] = W8y[m](e[W8y.Q60], 255);
  j[W8y.n2T] = W8y[l](e[W8y.n2T], 255);
  j[W8y.B20] = W8y[W](e[W8y.B20], 255);

  for (var o = i[W8y.w5M](); o; o = o[W8y.w4r]()) {
    H[W8y.m4T][W8y.K6T](o, j);
  }

  H[W8y.x26][W8y.q2H]();
  H[W8y.x26][W8y.w1r]();
};

Phaser[W8y.t8Q][W8y.c16][W8y.f3H] = function (f, N, P, Z, W, l) {
  var m = "setRectangleFromSprite",
      C = "k5C",
      n = "C5C",
      k = "x5C",
      H = "m5C",
      i = "Point",
      Q = "getNextBodyId";

  if (_typeof(N) === W8y.i7H) {
    N = W8y.z6k;
  }

  if (_typeof(P) === W8y.i7H) {
    P = W8y.u8Q;
  }

  if (_typeof(Z) === W8y.i7H) {
    Z = W8y.u8Q;
  }

  if (_typeof(W) === W8y.i7H) {
    W = W8y.d8Q;
  }

  if (_typeof(l) === W8y.i7H) {
    l = f[W8y.k4H][W8y.a4k];
  }

  this[W8y.R6H] = f;
  this[W8y.m4T] = l;
  this[W8y.W6M] = this[W8y.m4T][Q]();
  this[W8y.M9k] = N;
  this[W8y.N2k] = Phaser[W8y.t8Q][W8y.X2T];
  this[W8y.o3M] = new Phaser[i]();
  this[W8y.x1H] = new box2d[W8y.G1M]();
  this[W8y.x1H][W8y.i67][W8y.y47](-this[W8y.m4T][W8y.n10](P), -this[W8y.m4T][W8y.n10](Z));

  if (W8y[H](W, W8y.u8Q)) {
    this[W8y.x1H][W8y.N2k] = box2d[W8y.A4M][W8y.d4k];
  } else if (W8y[k](W, W8y.D8Q)) {
    this[W8y.x1H][W8y.N2k] = box2d[W8y.A4M][W8y.J76];
  } else if (W8y[n](W, W8y.d8Q)) {
    this[W8y.x1H][W8y.N2k] = box2d[W8y.A4M][W8y.r4T];
  } else if (W8y[C](W, W8y.S8Q)) {
    this[W8y.x1H][W8y.N2k] = box2d[W8y.A4M][W8y.R70];
  }

  this.data = this[W8y.m4T][W8y.m4T][W8y.G8k](this[W8y.x1H]);
  this.data[W8y.m4T] = this[W8y.m4T][W8y.m4T];
  this.data.parent = this;
  this[W8y.n5k] = new Phaser[W8y.t8Q][W8y.c16][W8y.P1M](this[W8y.m4T], this.data, this.data[W8y.s5T], this.data[W8y.i96]);
  this[W8y.K8k] = W8y.G0T;
  this[W8y.p47] = {};
  this[W8y.j10] = {};
  this[W8y.D87] = {};
  this[W8y.q2T] = {};
  this[W8y.e8T] = {};
  this[W8y.o2T] = {};
  this[W8y.P5M] = {};
  this[W8y.G5Q] = {};
  this[W8y.A5k] = {};
  this[W8y.q4k] = {};
  this[W8y.D8M] = {};
  this[W8y.a8H] = {};
  this[W8y.H1H] = {};
  this[W8y.U0r] = {};
  this[W8y.y60] = {};
  this[W8y.z47] = {};
  this[W8y.W1k] = {};
  this[W8y.T07] = {};

  if (N) {
    this[m](N);
  }
};

Phaser.Physics.Box2D.Body.prototype = {
  setBodyContactCallback: function setBodyContactCallback(f, N, P) {
    var Z = "Q5C",
        W = -1;

    if (f['id']) {
      W = f[W8y.W6M];
    } else if (f['body']) {
      W = f[W8y.R6k][W8y.W6M];
    }

    if (W > -1) {
      if (W8y[Z](N, null)) {
        delete this[W8y.D87][W];
        delete this[W8y.q2T][W];
      } else {
        this[W8y.D87][W] = N;
        this[W8y.q2T][W] = P;
      }
    }
  },
  setFixtureContactCallback: function setFixtureContactCallback(f, N, P) {
    var Z = "j5C",
        W = f[W8y.W6M];

    if (W > -1) {
      if (W8y[Z](N, null)) {
        delete this[W8y.p47][W];
        delete this[W8y.j10][W];
      } else {
        this[W8y.p47][W] = N;
        this[W8y.j10][W] = P;
      }
    }
  },
  setCategoryContactCallback: function setCategoryContactCallback(f, N, P) {
    var Z = "_categoryContactCallbacksContext",
        W = "I5C";

    if (W8y[W](N, null)) {
      delete this[W8y.e8T][f];
      delete this[Z][f];
    } else {
      this[W8y.e8T][f] = N;
      this[W8y.o2T][f] = P;
    }
  },
  setBodyPresolveCallback: function setBodyPresolveCallback(f, N, P) {
    var Z = "R5C",
        W = -1;

    if (f['id']) {
      W = f[W8y.W6M];
    } else if (f['body']) {
      W = f[W8y.R6k][W8y.W6M];
    }

    if (W > -1) {
      if (W8y[Z](N, null)) {
        delete this[W8y.A5k][W];
        delete this[W8y.q4k][W];
      } else {
        this[W8y.A5k][W] = N;
        this[W8y.q4k][W] = P;
      }
    }
  },
  setFixturePresolveCallback: function setFixturePresolveCallback(f, N, P) {
    var Z = "E5C",
        W = f[W8y.W6M];

    if (W > -1) {
      if (W8y[Z](N, null)) {
        delete this[W8y.P5M][W];
        delete this[W8y.G5Q][W];
      } else {
        this[W8y.P5M][W] = N;
        this[W8y.G5Q][W] = P;
      }
    }
  },
  setCategoryPresolveCallback: function setCategoryPresolveCallback(f, N, P) {
    var Z = "_categoryPresolveCallbacksContext",
        W = "M5C";

    if (W8y[W](N, null)) {
      delete this[W8y.D8M][f];
      delete this[Z][f];
    } else {
      this[W8y.D8M][f] = N;
      this[W8y.a8H][f] = P;
    }
  },
  setBodyPostsolveCallback: function setBodyPostsolveCallback(f, N, P) {
    var Z = "v5C",
        W = -1;

    if (f['id']) {
      W = f[W8y.W6M];
    } else if (f['body']) {
      W = f[W8y.R6k][W8y.W6M];
    }

    if (W > -1) {
      if (W8y[Z](N, null)) {
        delete this[W8y.y60][W];
        delete this[W8y.z47][W];
      } else {
        this[W8y.y60][W] = N;
        this[W8y.z47][W] = P;
      }
    }
  },
  setFixturePostsolveCallback: function setFixturePostsolveCallback(f, N, P) {
    var Z = "G5C",
        W = f[W8y.W6M];

    if (W > -1) {
      if (W8y[Z](N, null)) {
        delete this[W8y.H1H][W];
        delete this[W8y.U0r][W];
      } else {
        this[W8y.H1H][W] = N;
        this[W8y.U0r][W] = P;
      }
    }
  },
  setCategoryPostsolveCallback: function setCategoryPostsolveCallback(f, N, P) {
    var Z = "_categoryPostsolveCallbacksContext",
        W = "A5C";

    if (W8y[W](N, null)) {
      delete this[W8y.W1k][f];
      delete this[Z][f];
    } else {
      this[W8y.W1k][f] = N;
      this[W8y.T07][f] = P;
    }
  },
  setCollisionCategory: function setCollisionCategory(f, N) {
    if (typeof shape === 'undefined') {
      for (var P = this.data[W8y.w5M](); P; P = P[W8y.w4r]()) {
        var Z = P[W8y.y1k]();
        Z[W8y.O10] = f;
      }
    } else {
      var Z = N[W8y.y1k]();
      Z[W8y.O10] = f;
    }
  },
  setCollisionMask: function setCollisionMask(f, N) {
    if (typeof shape === 'undefined') {
      for (var P = this.data[W8y.w5M](); P; P = P[W8y.w4r]()) {
        var Z = P[W8y.y1k]();
        Z[W8y.i4r] = f;
      }
    } else {
      var Z = N[W8y.y1k]();
      Z[W8y.i4r] = f;
    }
  },
  applyForce: function applyForce(f, N) {
    this.data[W8y.h40](new box2d[W8y.p7T](-f, -N), this.data[W8y.Z86](), true);
  },
  setZeroRotation: function setZeroRotation() {
    this.data[W8y.S5Q](0);
  },
  setZeroVelocity: function setZeroVelocity() {
    this.data[W8y.i96](box2d[W8y.p7T][W8y.b6Q]);
  },
  setZeroDamping: function setZeroDamping() {
    this.data[W8y.d10](0);
    this.data[W8y.w9T](0);
  },
  toLocalPoint: function toLocalPoint(f, N) {
    f[W8y.T9T] = this[W8y.m4T][W8y.n10](-N[W8y.T9T]);
    f[W8y.Z9T] = this[W8y.m4T][W8y.n10](-N[W8y.Z9T]);
    this.data[W8y.y7M](f, f);
    f[W8y.T9T] = this[W8y.m4T][W8y.i8k](-f[W8y.T9T]);
    f[W8y.Z9T] = this[W8y.m4T][W8y.i8k](-f[W8y.Z9T]);
    return f;
  },
  toWorldPoint: function toWorldPoint(f, N) {
    f[W8y.T9T] = this[W8y.m4T][W8y.n10](-N[W8y.T9T]);
    f[W8y.Z9T] = this[W8y.m4T][W8y.n10](-N[W8y.Z9T]);
    this.data[W8y.I00](f, f);
    f[W8y.T9T] = this[W8y.m4T][W8y.i8k](-f[W8y.T9T]);
    f[W8y.Z9T] = this[W8y.m4T][W8y.i8k](-f[W8y.Z9T]);
    return f;
  },
  toLocalVector: function toLocalVector(f, N) {
    f[W8y.T9T] = this[W8y.m4T][W8y.n10](-N[W8y.T9T]);
    f[W8y.Z9T] = this[W8y.m4T][W8y.n10](-N[W8y.Z9T]);
    this.data[W8y.r10](f, f);
    f[W8y.T9T] = this[W8y.m4T][W8y.i8k](-f[W8y.T9T]);
    f[W8y.Z9T] = this[W8y.m4T][W8y.i8k](-f[W8y.Z9T]);
    return f;
  },
  toWorldVector: function toWorldVector(f, N) {
    f[W8y.T9T] = this[W8y.m4T][W8y.n10](-N[W8y.T9T]);
    f[W8y.Z9T] = this[W8y.m4T][W8y.n10](-N[W8y.Z9T]);
    this.data[W8y.S40](f, f);
    f[W8y.T9T] = this[W8y.m4T][W8y.i8k](-f[W8y.T9T]);
    f[W8y.Z9T] = this[W8y.m4T][W8y.i8k](-f[W8y.Z9T]);
  },
  rotateLeft: function rotateLeft(f) {
    this.data[W8y.S5Q](this[W8y.m4T][W8y.n10](-f));
  },
  rotateRight: function rotateRight(f) {
    this.data[W8y.S5Q](this[W8y.m4T][W8y.n10](f));
  },
  moveForward: function moveForward(f) {
    var N = this[W8y.m4T][W8y.n10](f),
        P = new box2d[W8y.p7T]();
    this[W8y.K2k](P, {
      x: 0,
      y: N
    });
    this.data[W8y.i96](P);
  },
  moveBackward: function moveBackward(f) {
    var N = this[W8y.m4T][W8y.n10](-f),
        P = new box2d[W8y.p7T]();
    this[W8y.K2k](P, {
      x: 0,
      y: N
    });
    this.data[W8y.i96](P);
  },
  thrust: function thrust(f) {
    var N = "w1Q",
        P = W8y[N](this[W8y.m4T][W8y.n10](f), this.data[W8y.L3T]()),
        Z = new box2d[W8y.p7T]();
    this[W8y.K2k](Z, {
      x: 0,
      y: P
    });
    this.data[W8y.h40](Z, this.data[W8y.Z86](), true);
  },
  reverse: function reverse(f) {
    var N = -this[W8y.m4T][W8y.n10](f) * this.data[W8y.L3T](),
        P = new box2d[W8y.p7T]();
    this[W8y.K2k](P, {
      x: 0,
      y: N
    });
    this.data[W8y.h40](P, this.data[W8y.Z86](), true);
  },
  moveLeft: function moveLeft(f) {
    this[W8y.n5k][W8y.T9T] = -f;
  },
  moveRight: function moveRight(f) {
    this[W8y.n5k][W8y.T9T] = f;
  },
  moveUp: function moveUp(f) {
    this[W8y.n5k][W8y.Z9T] = -f;
  },
  moveDown: function moveDown(f) {
    this[W8y.n5k][W8y.Z9T] = f;
  },
  preUpdate: function preUpdate() {
    if (this[W8y.K8k]) {
      this[W8y.W06]();
      this[W8y.K8k] = false;
    }
  },
  postUpdate: function postUpdate() {
    if (this[W8y.M9k]) {
      this[W8y.M9k][W8y.T9T] = this[W8y.m4T][W8y.i8k](-this.data[W8y.T9H]()[W8y.T9T]);
      this[W8y.M9k][W8y.Z9T] = this[W8y.m4T][W8y.i8k](-this.data[W8y.T9H]()[W8y.Z9T]);
      this[W8y.M9k][W8y.S1r] = this.data[W8y.U0H]();
    }
  },
  kill: function kill() {
    this.data[W8y.L6T](false);
  },
  reset: function reset(f, N) {
    this.data[W8y.Q87](this[W8y.m4T][W8y.n10](-f), this[W8y.m4T][W8y.n10](-N));
    this.data[W8y.L6T](true);
  },
  removeFromWorld: function removeFromWorld() {
    var f = "removeBodyNextStep",
        N = "N1Q";

    if (W8y[N](this.data[W8y.m4T], this[W8y.R6H][W8y.k4H][W8y.a4k][W8y.m4T])) {
      this[W8y.R6H][W8y.k4H][W8y.a4k][f](this);
    }
  },
  destroy: function destroy() {
    var f = "_categoryCallbackContext",
        N = "_categoryCallbacks",
        P = "_bodyCallbackContext",
        Z = "_bodyCallbacks";
    this[W8y.W06]();
    this[Z] = {};
    this[P] = {};
    this[N] = {};
    this[f] = {};
    this[W8y.M9k] = null;
  },
  clearFixtures: function clearFixtures() {
    var f = [];

    for (var N = this.data[W8y.w5M](); N; N = N[W8y.w4r]()) {
      f[W8y.h7T](N);
    }

    var P = f.length;

    while (P--) {
      this.data[W8y.i66](f[P]);
    }
  },
  addCircle: function addCircle(f, N, P) {
    var Z = new box2d[W8y.A2T](this[W8y.m4T][W8y.n10](f));
    Z[W8y.U0k][W8y.y47](this[W8y.m4T][W8y.n10](-N), this[W8y.m4T][W8y.n10](-P));
    var W = new box2d[W8y.f8M]();
    W[W8y.v2M] = Z;
    W[W8y.f66] = this[W8y.m4T][W8y.f66];
    W[W8y.P9M] = this[W8y.m4T][W8y.P9M];
    W[W8y.c3T] = this[W8y.m4T][W8y.c3T];
    var l = this.data[W8y.g37](W);
    l[W8y.W6M] = this[W8y.m4T][W8y.c76]();
    return l;
  },
  addRectangle: function addRectangle(f, N, P, Z, W) {
    var l = "s1Q",
        m = "X1Q";

    if (typeof f === 'undefined') {
      f = 16;
    }

    if (typeof N === 'undefined') {
      N = 16;
    }

    if (typeof P === 'undefined') {
      P = 0;
    }

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    if (typeof W === 'undefined') {
      W = 0;
    }

    f = this[W8y.m4T][W8y.n10](f);
    N = this[W8y.m4T][W8y.n10](N);
    var C = new box2d[W8y.g16]();
    C[W8y.B4k](W8y[m](0.5, f), W8y[l](0.5, N), new box2d[W8y.p7T](this[W8y.m4T][W8y.n10](-P), this[W8y.m4T][W8y.n10](-Z)), W);
    var n = new box2d[W8y.f8M]();
    n[W8y.v2M] = C;
    n[W8y.f66] = this[W8y.m4T][W8y.f66];
    n[W8y.P9M] = this[W8y.m4T][W8y.P9M];
    n[W8y.c3T] = this[W8y.m4T][W8y.c3T];
    var k = this.data[W8y.g37](n);
    k[W8y.W6M] = this[W8y.m4T][W8y.c76]();
    return k;
  },
  addEdge: function addEdge(f, N, P, Z) {
    var W = new box2d[W8y.p7H]();
    W[W8y.Z96](new box2d[W8y.p7T](this[W8y.m4T][W8y.n10](-f), this[W8y.m4T][W8y.n10](-N)), new box2d[W8y.p7T](this[W8y.m4T][W8y.n10](-P), this[W8y.m4T][W8y.n10](-Z)));
    var l = new box2d[W8y.f8M]();
    l[W8y.v2M] = W;
    l[W8y.f66] = this[W8y.m4T][W8y.f66];
    l[W8y.P9M] = this[W8y.m4T][W8y.P9M];
    l[W8y.c3T] = this[W8y.m4T][W8y.c3T];
    var m = this.data[W8y.g37](l);
    m[W8y.W6M] = this[W8y.m4T][W8y.c76]();
    return m;
  },
  addChain: function addChain(f, N, P, Z) {
    var W = "CreateLoop",
        l = "H1Q",
        m = "K1Q",
        C = "n1Q",
        n = "J1Q",
        k = "b1Q";

    if (typeof f === 'undefined') {
      return null;
    }

    if (W8y[k](f.length, 4)) {
      return null;
    }

    if (typeof N === 'undefined') {
      N = 0;
    }

    if (typeof P === 'undefined') {
      P = W8y[n](f.length - N, 2);
    }

    var H = [];

    for (var i = N; W8y[C](i, N + P); i++) {
      H[W8y.h7T](new box2d[W8y.p7T](this[W8y.m4T][W8y.n10](-f[W8y[m](2, i)]), this[W8y.m4T][W8y.n10](-f[W8y[l](2, i) + 1])));
    }

    var Q = new box2d[W8y.x90]();

    if (Z) {
      Q[W](H, H.length);
    } else {
      Q[W8y.l80](H, H.length);
    }

    var e = new box2d[W8y.f8M]();
    e[W8y.v2M] = Q;
    e[W8y.f66] = this[W8y.m4T][W8y.f66];
    e[W8y.P9M] = this[W8y.m4T][W8y.P9M];
    e[W8y.c3T] = this[W8y.m4T][W8y.c3T];
    var j = this.data[W8y.g37](e);
    j[W8y.W6M] = this[W8y.m4T][W8y.c76]();
    return j;
  },
  addLoop: function addLoop(f, N, P) {
    return this[W8y.L86](f, N, P, true);
  },
  addPolygon: function addPolygon(f, N, P) {
    var Z = "L1Q",
        W = "setFromXYObjects",
        l = "u1Q",
        m = "d1Q",
        C = "a1Q",
        n = "e1Q",
        k = "r1Q";

    if (typeof f === 'undefined') {
      return null;
    }

    if (W8y[k](f.length, 6)) {
      return null;
    }

    if (typeof N === 'undefined') {
      N = 0;
    }

    if (typeof P === 'undefined') {
      P = W8y[n](f.length - N, 2);
    }

    var H = [];

    for (var i = N; W8y[C](i, N + P); i++) {
      H[W8y.h7T]({
        x: this[W8y.m4T][W8y.n10](-f[W8y[m](2, i)]),
        y: this[W8y.m4T][W8y.n10](-f[W8y[l](2, i) + 1])
      });
    }

    var Q = new Phaser[W8y.t8Q][W8y.c16][W8y.n1r]();
    Q[W](H);
    var e = Q[W8y.i8Q](H),
        j = null;

    for (var i = 0; W8y[Z](i, e.length); i++) {
      var o = new box2d[W8y.g16]();
      o[W8y.Z96](e[i], e[i].length);
      var S = new box2d[W8y.f8M]();
      S[W8y.v2M] = o;
      S[W8y.f66] = this[W8y.m4T][W8y.f66];
      S[W8y.P9M] = this[W8y.m4T][W8y.P9M];
      S[W8y.c3T] = this[W8y.m4T][W8y.c3T];
      j = this.data[W8y.g37](S);
      j[W8y.W6M] = this[W8y.m4T][W8y.c76]();
    }

    return j;
  },
  removeFixture: function removeFixture(f) {
    var N = "p1Q";

    if (W8y[N](f[W8y.b86](), this.data)) {
      return false;
    }

    this.data[W8y.i66](f);
    return true;
  },
  setCircle: function setCircle(f, N, P) {
    var Z = "addCircle";

    if (typeof f === 'undefined') {
      f = 32;
    }

    if (typeof N === 'undefined') {
      N = 0;
    }

    if (typeof P === 'undefined') {
      P = 0;
    }

    this[W8y.f4M]();
    return this[Z](f, N, P);
  },
  setRectangle: function setRectangle(f, N, P, Z, W) {
    this[W8y.f4M]();
    return this[W8y.h97](f, N, P, Z, W);
  },
  setRectangleFromSprite: function setRectangleFromSprite(f) {
    if (typeof f === 'undefined') {
      f = this[W8y.M9k];
    }

    this[W8y.f4M]();
    return this[W8y.h97](f.width, f.height, 0, 0, f[W8y.S1r]);
  },
  setEdge: function setEdge(f, N, P, Z) {
    var W = "addEdge";

    if (typeof f === 'undefined') {
      f = 0;
    }

    if (typeof N === 'undefined') {
      N = 0;
    }

    if (typeof P === 'undefined') {
      P = 0;
    }

    if (typeof Z === 'undefined') {
      Z = 0;
    }

    this[W8y.f4M]();
    return this[W](f, N, P, Z);
  },
  setChain: function setChain(f, N, P, Z) {
    var W = "y4Q",
        l = "F1Q";

    if (typeof f === 'undefined') {
      return null;
    }

    if (W8y[l](f.length, 4)) {
      return null;
    }

    if (typeof N === 'undefined') {
      N = 0;
    }

    if (typeof P === 'undefined') {
      P = W8y[W](f.length - N, 2);
    }

    this[W8y.f4M]();
    return this[W8y.L86](f, N, P, Z);
  },
  setLoop: function setLoop(f, N, P) {
    var Z = "setChain";
    return this[Z](f, N, P, true);
  },
  setPolygon: function setPolygon(f, N, P) {
    var Z = "addPolygon",
        W = "Z4Q",
        l = "U4Q";

    if (typeof f === 'undefined') {
      return null;
    }

    if (W8y[l](f.length, 4)) {
      return null;
    }

    if (typeof N === 'undefined') {
      N = 0;
    }

    if (typeof P === 'undefined') {
      P = W8y[W](f.length - N, 2);
    }

    this[W8y.f4M]();
    return this[Z](f, N, P);
  },
  loadPolygon: function loadPolygon(f, N, P) {
    var Z = "bounce",
        W = "g4Q",
        l = "l4Q",
        m = "W4Q",
        C = "getPhysicsData",
        n = "cache";

    if (typeof P === 'undefined') {
      P = null;
    }

    var k = this[W8y.R6H][n][C](f, N);

    for (var H = 0; W8y[m](H, k.length); H++) {
      var i = [];

      for (var Q = 0; W8y[l](Q, k[H][W8y.v2M].length); Q += 2) {
        i[W8y.h7T](new box2d[W8y.p7T](this[W8y.m4T][W8y.n10](-k[H][W8y.v2M][Q]), this[W8y.m4T][W8y.n10](-k[H][W8y.v2M][Q + 1])));
      }

      if (P) {
        var e = this[W8y.m4T][W8y.n10](-0.5 * P.width),
            j = this[W8y.m4T][W8y.n10](-0.5 * P.height);

        for (var o = 0; W8y[W](o, i.length); o++) {
          i[o][W8y.T9T] -= e;
          i[o][W8y.Z9T] -= j;
        }
      }

      var S = new box2d[W8y.g16]();
      S[W8y.Z96](i, i.length);
      var d = new box2d[W8y.f8M]();
      d[W8y.v2M] = S;
      d[W8y.f66] = k[H][W8y.f66];
      d[W8y.P9M] = k[H][Z];
      d[W8y.c3T] = k[H][W8y.c3T];
      d[W8y.E86][W8y.O10] = k[H][W8y.E86][W8y.O10];
      d[W8y.E86][W8y.i4r] = k[H][W8y.E86][W8y.i4r];
      var u = this.data[W8y.g37](d);
      u[W8y.W6M] = this[W8y.m4T][W8y.c76]();
    }

    return true;
  },
  containsPoint: function containsPoint(f) {
    var N = this[W8y.m4T][W8y.n10](-f[W8y.T9T]),
        P = this[W8y.m4T][W8y.n10](-f[W8y.Z9T]),
        Z = new box2d[W8y.p7T](N, P);

    for (var W = this.data[W8y.w5M](); W; W = W[W8y.w4r]()) {
      if (W[W8y.h10](Z)) {
        return true;
      }
    }

    return false;
  }
};
Phaser.Physics.Box2D.Body.prototype.constructor = Phaser[W8y.t8Q][W8y.c16][W8y.f3H];
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "static", {
  get: function get() {
    var f = "V4Q";
    return W8y[f](this.data[W8y.E1k](), box2d[W8y.A4M][W8y.d4k]);
  },
  set: function set(f) {
    var N = "T4Q",
        P = "O4Q";

    if (f && W8y[P](this.data[W8y.E1k](), box2d[W8y.A4M][W8y.d4k])) {
      this.data[W8y.h26](box2d[W8y.A4M][W8y.d4k]);
    } else if (!f && W8y[N](this.data[W8y.E1k](), box2d[W8y.A4M][W8y.d4k])) {
      this.data[W8y.h26](box2d[W8y.A4M][W8y.r4T]);
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "dynamic", {
  get: function get() {
    var f = "i4Q";
    return W8y[f](this.data[W8y.E1k](), box2d[W8y.A4M][W8y.r4T]);
  },
  set: function set(f) {
    var N = "o4Q",
        P = "q4Q";

    if (f && W8y[P](this.data[W8y.E1k](), box2d[W8y.A4M][W8y.r4T])) {
      this.data[W8y.h26](box2d[W8y.A4M][W8y.r4T]);
    } else if (!f && W8y[N](this.data[W8y.E1k](), box2d[W8y.A4M][W8y.r4T])) {
      this.data[W8y.h26](box2d[W8y.A4M][W8y.d4k]);
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "kinematic", {
  get: function get() {
    var f = "S4Q";
    return W8y[f](this.data[W8y.E1k](), box2d[W8y.A4M][W8y.J76]);
  },
  set: function set(f) {
    var N = "h4Q",
        P = "D4Q";

    if (f && W8y[P](this.data[W8y.E1k](), box2d[W8y.A4M][W8y.J76])) {
      this.data[W8y.h26](box2d[W8y.A4M][W8y.J76]);
    } else if (!f && W8y[N](this.data[W8y.E1k](), box2d[W8y.A4M][W8y.J76])) {
      this.data[W8y.h26](box2d[W8y.A4M][W8y.d4k]);
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "angle", {
  get: function get() {
    var f = "radToDeg";
    return Phaser[W8y.e4M][W8y.l0M](Phaser[W8y.e4M][f](this.data[W8y.U0H]()));
  },
  set: function set(f) {
    this.data[W8y.t5k](Phaser[W8y.e4M][W8y.c6M](Phaser[W8y.e4M][W8y.l0M](f)));
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "linearDamping", {
  get: function get() {
    var f = "GetLinearDamping";
    return this.data[f]();
  },
  set: function set(f) {
    this.data[W8y.d10](f);
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "angularDamping", {
  get: function get() {
    var f = "GetAngularDamping";
    return this.data[f]();
  },
  set: function set(f) {
    this.data[W8y.w9T](f);
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "angularVelocity", {
  get: function get() {
    return this.data[W8y.p5M]();
  },
  set: function set(f) {
    this.data[W8y.S5Q](f);
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "fixedRotation", {
  get: function get() {
    var f = "IsFixedRotation";
    return this.data[f]();
  },
  set: function set(f) {
    var N = "SetFixedRotation";
    this.data[N](f);
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "gravityScale", {
  get: function get() {
    var f = "GetGravityScale";
    return this.data[f]();
  },
  set: function set(f) {
    var N = "SetGravityScale";
    this.data[N](f);
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "friction", {
  get: function get() {
    var f = "GetFriction",
        N = this.data[W8y.w5M]();

    if (N) {
      return N[f]();
    }

    return 0;
  },
  set: function set(f) {
    var N = "SetFriction";

    for (var P = this.data[W8y.w5M](); P; P = P[W8y.w4r]()) {
      P[N](f);
      P[W8y.U6M]();
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "restitution", {
  get: function get() {
    var f = "GetRestitution",
        N = this.data[W8y.w5M]();

    if (N) {
      return N[f]();
    }

    return 0;
  },
  set: function set(f) {
    var N = "SetRestitution";

    for (var P = this.data[W8y.w5M](); P; P = P[W8y.w4r]()) {
      P[N](f);
      P[W8y.U6M]();
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "sensor", {
  get: function get() {
    var f = this.data[W8y.w5M]();

    if (f) {
      return f[W8y.C0M]();
    }

    return 0;
  },
  set: function set(f) {
    var N = "SetSensor";

    for (var P = this.data[W8y.w5M](); P; P = P[W8y.w4r]()) {
      P[N](f);
      P[W8y.U6M]();
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "bullet", {
  get: function get() {
    return this.data[W8y.J17]();
  },
  set: function set(f) {
    var N = "SetBullet";
    this.data[N](f);
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "mass", {
  get: function get() {
    return this.data[W8y.L3T]();
  },
  set: function set(f) {
    var N = "f2Q",
        P = "SetDensity",
        Z = "t4Q",
        W = "z4Q",
        l = "B4Q";

    if (W8y[l](f, 0)) {
      this.data[W8y.h26](box2d[W8y.A4M][W8y.d4k]);
    } else {
      if (W8y[W](this.data[W8y.E1k](), box2d[W8y.A4M][W8y.r4T])) {
        this.data[W8y.h26](box2d[W8y.A4M][W8y.r4T]);
      }

      var m = this.data[W8y.L3T](),
          C = W8y[Z](f, m);

      for (var n = this.data[W8y.w5M](); n; n = n[W8y.w4r]()) {
        var k = n[W8y.A8k]();
        n[P](W8y[N](k, C));
      }

      this.data[W8y.G57]();
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "rotation", {
  get: function get() {
    return this.data[W8y.U0H]();
  },
  set: function set(f) {
    this.data[W8y.t5k](f);
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "x", {
  get: function get() {
    return this[W8y.m4T][W8y.i8k](-this.data[W8y.T9H]()[W8y.T9T]);
  },
  set: function set(f) {
    this.data[W8y.Q87](this[W8y.m4T][W8y.n10](-f), this.data[W8y.T9H]()[W8y.Z9T]);
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "y", {
  get: function get() {
    return this[W8y.m4T][W8y.i8k](-this.data[W8y.T9H]()[W8y.Z9T]);
  },
  set: function set(f) {
    this.data[W8y.Q87](this.data[W8y.T9H]()[W8y.T9T], this[W8y.m4T][W8y.n10](-f));
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.Body.prototype, "collideWorldBounds", {
  get: function get() {
    var f = "P2Q";

    for (var N = this.data[W8y.w5M](); N; N = N[W8y.w4r]()) {
      var P = N[W8y.y1k]();

      if (W8y[f](P[W8y.i4r], Phaser[W8y.t8Q][W8y.c16][W8y.L8H])) {
        return true;
      }
    }

    return false;
  },
  set: function set(f) {
    for (var N = this.data[W8y.w5M](); N; N = N[W8y.w4r]()) {
      var P = N[W8y.y1k]();

      if (f) {
        P[W8y.i4r] |= Phaser[W8y.t8Q][W8y.c16][W8y.L8H];
      } else {
        P[W8y.i4r] &= ~Phaser[W8y.t8Q][W8y.c16][W8y.L8H];
      }
    }
  }
});

Phaser[W8y.t8Q][W8y.c16][W8y.P1M] = function (f, N, P, Z) {
  this[W8y.m4T] = f;
  this[W8y.Q4k] = N;
  this[W8y.H06] = P;
  this[W8y.N07] = Z;
};

Phaser.Physics.Box2D.PointProxy.prototype.constructor = Phaser[W8y.t8Q][W8y.c16][W8y.P1M];
Object[W8y.B6H](Phaser.Physics.Box2D.PointProxy.prototype, W8y.T9T, {
  get: function get() {
    return this[W8y.m4T][W8y.i8k](-this[W8y.H06][W8y.U1T](this[W8y.Q4k])[W8y.T9T]);
  },
  set: function set(f) {
    var N = this[W8y.H06][W8y.U1T](this[W8y.Q4k]);
    N[W8y.T9T] = this[W8y.m4T][W8y.n10](-f);
    this[W8y.N07][W8y.U1T](this[W8y.Q4k], N);
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.PointProxy.prototype, W8y.Z9T, {
  get: function get() {
    return this[W8y.m4T][W8y.i8k](-this[W8y.H06][W8y.U1T](this[W8y.Q4k])[W8y.Z9T]);
  },
  set: function set(f) {
    var N = this[W8y.H06][W8y.U1T](this[W8y.Q4k]);
    N[W8y.Z9T] = this[W8y.m4T][W8y.n10](-f);
    this[W8y.N07][W8y.U1T](this[W8y.Q4k], N);
  }
});

Phaser[W8y.t8Q][W8y.c16][W8y.S0k] = function (f) {
  this[W8y.l0H] = W8y.z6k;
  this[W8y.w0H] = f;
  this[W8y.W9H] = box2d[W8y.r6H][W8y.s96];
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.color = new box2d[W8y.s0r](W8y.D8Q, W8y.D8Q, W8y.D8Q);

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.SetFlags = function (f) {
  this[W8y.W9H] = f;
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.GetFlags = function () {
  return this[W8y.W9H];
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.start = function (f) {
  this[W8y.l0H] = f;
  this[W8y.l0H].save();
  this[W8y.l0H].scale(-1, -1);
  this[W8y.l0H].scale(this[W8y.w0H], this[W8y.w0H]);
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.stop = function () {
  this[W8y.l0H].restore();
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.PushTransform = function (f) {
  var N = this[W8y.l0H];
  N.save();
  N.translate(f[W8y.t60][W8y.T9T], f[W8y.t60][W8y.Z9T]);
  N.rotate(f[W8y.b50][W8y.x57]());
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.PopTransform = function () {
  var f = this[W8y.l0H];
  f.restore();
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawPolygon = function (f, N, P) {
  var Z = "Y2Q",
      W = "c2Q";

  if (!N) {
    return;
  }

  var l = this[W8y.l0H];
  l.lineWidth = W8y[W](1, this[W8y.w0H]);
  l.beginPath();
  l.moveTo(f[0][W8y.T9T], f[0][W8y.Z9T]);

  for (var m = W8y.D8Q; W8y[Z](m, N); m++) {
    l.lineTo(f[m][W8y.T9T], f[m][W8y.Z9T]);
  }

  l.closePath();
  l.strokeStyle = P[W8y.E17](1);
  l.stroke();
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawSolidPolygon = function (f, N, P) {
  var Z = "x2Q",
      W = "m2Q";

  if (!N) {
    return;
  }

  var l = this[W8y.l0H];
  l.lineWidth = W8y[W](1, this[W8y.w0H]);
  l.beginPath();
  l.moveTo(f[0][W8y.T9T], f[0][W8y.Z9T]);

  for (var m = W8y.D8Q; W8y[Z](m, N); m++) {
    l.lineTo(f[m][W8y.T9T], f[m][W8y.Z9T]);
  }

  l.closePath();
  l.fillStyle = P[W8y.E17](0.5);
  l.fill();
  l.strokeStyle = P[W8y.E17](1);
  l.stroke();
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawCircle = function (f, N, P) {
  var Z = "C2Q";

  if (!N) {
    return;
  }

  var W = this[W8y.l0H];
  W.beginPath();
  W.arc(f[W8y.T9T], f[W8y.Z9T], N, 0, W8y[Z](Math[W8y.Q70], 2), true);
  W.strokeStyle = P[W8y.E17](1);
  W.stroke();
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawSolidCircle = function (f, N, P, Z) {
  var W = "I2Q",
      l = "j2Q",
      m = "Q2Q",
      C = "k2Q";

  if (!N) {
    return;
  }

  var n = this[W8y.l0H];
  n.lineWidth = W8y[C](1, this[W8y.w0H]);
  var k = f[W8y.T9T],
      H = f[W8y.Z9T];
  n.beginPath();
  n.arc(k, H, N, 0, W8y[m](Math[W8y.Q70], 2), true);
  n.moveTo(k, H);
  n.lineTo(k + W8y[l](P[W8y.T9T], N), H + W8y[W](P[W8y.Z9T], N));
  n.fillStyle = Z[W8y.E17](0.5);
  n.fill();
  n.strokeStyle = Z[W8y.E17](1);
  n.stroke();
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawSegment = function (f, N, P) {
  var Z = "R2Q",
      W = this[W8y.l0H];
  W.lineWidth = W8y[Z](1, this[W8y.w0H]);
  W.beginPath();
  W.moveTo(f[W8y.T9T], f[W8y.Z9T]);
  W.lineTo(N[W8y.T9T], N[W8y.Z9T]);
  W.strokeStyle = P[W8y.E17](1);
  W.stroke();
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawTransform = function (f) {
  var N = "E2Q",
      P = this[W8y.l0H];
  P.lineWidth = W8y[N](1, this[W8y.w0H]);
  this[W8y.h2M](f);
  P.beginPath();
  P.moveTo(0, 0);
  P.lineTo(1, 0);
  P.strokeStyle = box2d[W8y.s0r][W8y.Y07][W8y.E17](1);
  P.stroke();
  P.beginPath();
  P.moveTo(0, 0);
  P.lineTo(0, 1);
  P.strokeStyle = box2d[W8y.s0r][W8y.K9k][W8y.E17](1);
  P.stroke();
  this[W8y.q2H](f);
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawPoint = function (f, N, P) {
  var Z = "G2Q",
      W = "v2Q",
      l = "M2Q",
      m = this[W8y.l0H];
  m.fillStyle = P[W8y.E17]();
  var C = W8y[l](N, W8y.d8Q);
  m.fillRect(W8y[W](f[W8y.T9T], C), W8y[Z](f[W8y.Z9T], C), N, N);
};

Phaser.Physics.Box2D.DefaultDebugDraw.prototype.DrawAABB = function (f, N) {
  var P = "w3Q",
      Z = "A2Q",
      W = this[W8y.l0H];
  W.strokeStyle = N[W8y.E17]();
  var l = f[W8y.d1T][W8y.T9T],
      m = f[W8y.d1T][W8y.Z9T],
      C = W8y[Z](f[W8y.I1T][W8y.T9T], f[W8y.d1T][W8y.T9T]),
      n = W8y[P](f[W8y.I1T][W8y.Z9T], f[W8y.d1T][W8y.Z9T]);
  W.strokeRect(l, m, C, n);
};

Object[W8y.B6H](Phaser.Physics.Box2D.DefaultDebugDraw.prototype, W8y.I1H, {
  get: function get() {
    var f = "N3Q";
    return W8y[f](this[W8y.W9H], box2d[W8y.r6H][W8y.s96]);
  },
  set: function set(f) {
    if (f) {
      this[W8y.W9H] |= box2d[W8y.r6H][W8y.s96];
    } else {
      this[W8y.W9H] &= ~box2d[W8y.r6H][W8y.s96];
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.DefaultDebugDraw.prototype, W8y.m2k, {
  get: function get() {
    var f = "X3Q";
    return W8y[f](this[W8y.W9H], box2d[W8y.r6H][W8y.b87]);
  },
  set: function set(f) {
    if (f) {
      this[W8y.W9H] |= box2d[W8y.r6H][W8y.b87];
    } else {
      this[W8y.W9H] &= ~box2d[W8y.r6H][W8y.b87];
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.DefaultDebugDraw.prototype, W8y.W90, {
  get: function get() {
    var f = "s3Q";
    return W8y[f](this[W8y.W9H], box2d[W8y.r6H][W8y.n1T]);
  },
  set: function set(f) {
    if (f) {
      this[W8y.W9H] |= box2d[W8y.r6H][W8y.n1T];
    } else {
      this[W8y.W9H] &= ~box2d[W8y.r6H][W8y.n1T];
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.DefaultDebugDraw.prototype, W8y.k36, {
  get: function get() {
    var f = "b3Q";
    return W8y[f](this[W8y.W9H], box2d[W8y.r6H][W8y.B2k]);
  },
  set: function set(f) {
    if (f) {
      this[W8y.W9H] |= box2d[W8y.r6H][W8y.B2k];
    } else {
      this[W8y.W9H] &= ~box2d[W8y.r6H][W8y.B2k];
    }
  }
});
Object[W8y.B6H](Phaser.Physics.Box2D.DefaultDebugDraw.prototype, W8y.E2M, {
  get: function get() {
    var f = "J3Q";
    return W8y[f](this[W8y.W9H], box2d[W8y.r6H][W8y.W9M]);
  },
  set: function set(f) {
    if (f) {
      this[W8y.W9H] |= box2d[W8y.r6H][W8y.W9M];
    } else {
      this[W8y.W9H] &= ~box2d[W8y.r6H][W8y.W9M];
    }
  }
});

Phaser[W8y.t8Q][W8y.c16][W8y.X57] = function () {};

Phaser.Physics.Box2D.DefaultContactListener.prototype.BeginContact = function (f) {
  this[W8y.z37](f, W8y.f5k);
};

Phaser.Physics.Box2D.DefaultContactListener.prototype.EndContact = function (f) {
  this[W8y.z37](f, W8y.G0T);
};

Phaser.Physics.Box2D.DefaultContactListener.prototype.handleContactBeginOrEnd = function (f, N) {
  var P = f[W8y.A4T](),
      Z = f[W8y.O2T](),
      W = P[W8y.b86](),
      l = Z[W8y.b86](),
      m = P[W8y.y1k]()[W8y.O10],
      C = Z[W8y.y1k]()[W8y.O10],
      n = W.parent,
      k = l.parent,
      H = n[W8y.W6M],
      i = k[W8y.W6M];

  if (n[W8y.D87][i]) {
    n[W8y.D87][i][W8y.U1T](n[W8y.q2T][i], n, k, P, Z, N, f);
  }

  if (k[W8y.D87][H]) {
    k[W8y.D87][H][W8y.U1T](k[W8y.q2T][H], k, n, Z, P, N, f);
  }

  if (n[W8y.p47][Z[W8y.W6M]]) {
    n[W8y.p47][Z[W8y.W6M]][W8y.U1T](n[W8y.j10][Z[W8y.W6M]], n, k, P, Z, N, f);
  }

  if (k[W8y.p47][P[W8y.W6M]]) {
    k[W8y.p47][P[W8y.W6M]][W8y.U1T](k[W8y.j10][P[W8y.W6M]], k, n, Z, P, N, f);
  }

  if (n[W8y.p47][P[W8y.W6M]]) {
    n[W8y.p47][P[W8y.W6M]][W8y.U1T](n[W8y.j10][P[W8y.W6M]], n, n, P, P, N, f);
  }

  if (k[W8y.p47][Z[W8y.W6M]]) {
    k[W8y.p47][Z[W8y.W6M]][W8y.U1T](k[W8y.j10][Z[W8y.W6M]], k, k, Z, Z, N, f);
  }

  if (n[W8y.e8T][C]) {
    n[W8y.e8T][C][W8y.U1T](n[W8y.o2T][C], n, k, P, Z, N, f);
  }

  if (k[W8y.e8T][m]) {
    k[W8y.e8T][m][W8y.U1T](k[W8y.o2T][m], k, n, Z, P, N, f);
  }

  if (n[W8y.e8T][m]) {
    n[W8y.e8T][m][W8y.U1T](n[W8y.o2T][m], n, n, P, P, N, f);
  }

  if (k[W8y.e8T][C]) {
    k[W8y.e8T][C][W8y.U1T](k[W8y.o2T][C], k, k, Z, Z, N, f);
  }
};

Phaser.Physics.Box2D.DefaultContactListener.prototype.PreSolve = function (f, N) {
  var P = f[W8y.A4T](),
      Z = f[W8y.O2T](),
      W = P[W8y.b86](),
      l = Z[W8y.b86](),
      m = P[W8y.y1k]()[W8y.O10],
      C = Z[W8y.y1k]()[W8y.O10],
      n = W.parent,
      k = l.parent,
      H = n[W8y.W6M],
      i = k[W8y.W6M];

  if (n[W8y.A5k][i]) {
    n[W8y.A5k][i][W8y.U1T](n[W8y.q4k][i], n, k, P, Z, f, N);
  }

  if (k[W8y.A5k][H]) {
    k[W8y.A5k][H][W8y.U1T](k[W8y.q4k][H], k, n, Z, P, f, N);
  }

  if (n[W8y.P5M][Z[W8y.W6M]]) {
    n[W8y.P5M][Z[W8y.W6M]][W8y.U1T](n[W8y.G5Q][Z[W8y.W6M]], n, k, P, Z, f, N);
  }

  if (k[W8y.P5M][P[W8y.W6M]]) {
    k[W8y.P5M][P[W8y.W6M]][W8y.U1T](k[W8y.G5Q][P[W8y.W6M]], k, n, Z, P, f, N);
  }

  if (n[W8y.D8M][C]) {
    n[W8y.D8M][C][W8y.U1T](n[W8y.a8H][C], n, k, P, Z, f, N);
  }

  if (k[W8y.D8M][m]) {
    k[W8y.D8M][m][W8y.U1T](k[W8y.a8H][m], k, n, Z, P, f, N);
  }
};

Phaser.Physics.Box2D.DefaultContactListener.prototype.PostSolve = function (f, N) {
  var P = f[W8y.A4T](),
      Z = f[W8y.O2T](),
      W = P[W8y.b86](),
      l = Z[W8y.b86](),
      m = P[W8y.y1k]()[W8y.O10],
      C = Z[W8y.y1k]()[W8y.O10],
      n = W.parent,
      k = l.parent,
      H = n[W8y.W6M],
      i = k[W8y.W6M];

  if (n[W8y.y60][i]) {
    n[W8y.y60][i][W8y.U1T](n[W8y.z47][i], n, k, P, Z, f, N);
  }

  if (k[W8y.y60][H]) {
    k[W8y.y60][H][W8y.U1T](k[W8y.z47][H], k, n, Z, P, f, N);
  }

  if (n[W8y.H1H][Z[W8y.W6M]]) {
    n[W8y.H1H][Z[W8y.W6M]][W8y.U1T](n[W8y.U0r][Z[W8y.W6M]], n, k, P, Z, f, N);
  }

  if (k[W8y.H1H][P[W8y.W6M]]) {
    k[W8y.H1H][P[W8y.W6M]][W8y.U1T](k[W8y.U0r][P[W8y.W6M]], k, n, Z, P, f, N);
  }

  if (n[W8y.W1k][C]) {
    n[W8y.W1k][C][W8y.U1T](n[W8y.T07][C], n, k, P, Z, f, N);
  }

  if (k[W8y.W1k][m]) {
    k[W8y.W1k][m][W8y.U1T](k[W8y.T07][m], k, n, Z, P, f, N);
  }
};

Phaser[W8y.t8Q][W8y.c16][W8y.n1r] = function () {
  this[W8y.Y70] = [];
};

Phaser.Physics.Box2D.Polygon.prototype.setFromFlatXYCoords = function (f) {
  var N = "H3Q",
      P = "K3Q",
      Z = "n3Q";
  this[W8y.Y70] = [];

  for (var W = 0; W8y[Z](W, f.length / 2); W++) {
    this[W8y.Y70][W8y.h7T]({
      x: f[W8y[P](2, W)],
      y: f[W8y[N](2, W) + 1]
    });
  }
};

Phaser.Physics.Box2D.Polygon.prototype.setFromXYObjects = function (f) {
  this[W8y.Y70] = f[W8y.u8H]();
};

Phaser.Physics.Box2D.Polygon.prototype.addVertex = function (f) {
  this[W8y.Y70][W8y.h7T](f);
};

Phaser.Physics.Box2D.Polygon.prototype.at = function (f) {
  var N = "a3Q",
      P = "e3Q",
      Z = "r3Q",
      W = this[W8y.Y70].length;
  return this[W8y.Y70][W8y[Z](f, 0) ? W8y[P](f, W) + W : W8y[N](f, W)];
};

Phaser.Physics.Box2D.Polygon.prototype.indicesAreAdjacent = function (f, N) {
  var P = "y0Q",
      Z = "F3Q",
      W = "p3Q",
      l = "abs",
      m = "L3Q",
      C = "u3Q",
      n = "d3Q";
  f = W8y[n](f, this[W8y.Y70].length);
  N = W8y[C](N, this[W8y.Y70].length);

  if (W8y[m](f, N)) {
    return true;
  }

  var k = Math[l](W8y[W](f, N));

  if (W8y[Z](k, 2)) {
    return true;
  }

  if (W8y[P](k, this[W8y.Y70].length - 1)) {
    return true;
  }

  return false;
};

Phaser.Physics.Box2D.Polygon.prototype.areaInTriangle = function (f, N, P) {
  var Z = "U0Q";
  f = this[W8y.n5Q](f);
  N = this[W8y.n5Q](N);
  P = this[W8y.n5Q](P);
  return W8y[Z]((N[W8y.T9T] - f[W8y.T9T]) * (P[W8y.Z9T] - f[W8y.Z9T]) - (P[W8y.T9T] - f[W8y.T9T]) * (N[W8y.Z9T] - f[W8y.Z9T]), W8y.T3H);
};

Phaser.Physics.Box2D.Polygon.prototype.left = function (f, N, P) {
  var Z = "Z0Q";
  return W8y[Z](this[W8y.H5T](f, N, P), W8y.u8Q);
};

Phaser.Physics.Box2D.Polygon.prototype.leftOn = function (f, N, P) {
  var Z = "W0Q";
  return W8y[Z](this[W8y.H5T](f, N, P), W8y.u8Q);
};

Phaser.Physics.Box2D.Polygon.prototype.right = function (f, N, P) {
  var Z = "l0Q";
  return W8y[Z](this[W8y.H5T](f, N, P), W8y.u8Q);
};

Phaser.Physics.Box2D.Polygon.prototype.rightOn = function (f, N, P) {
  var Z = "g0Q";
  return W8y[Z](this[W8y.H5T](f, N, P), W8y.u8Q);
};

Phaser[W8y.t8Q][W8y.c16][W8y.n1r][W8y.H0T] = function (f, N) {
  var P = "i0Q",
      Z = "T0Q",
      W = "O0Q",
      l = "V0Q",
      m = W8y[l](N[W8y.T9T], f[W8y.T9T]),
      C = W8y[W](N[W8y.Z9T], f[W8y.Z9T]);
  return W8y[Z](m, m) + W8y[P](C, C);
};

Phaser.Physics.Box2D.Polygon.prototype.makeCCW = function () {
  var f = "reverse",
      N = "h0Q",
      P = "D0Q",
      Z = "S0Q",
      W = "o0Q",
      l = "q0Q",
      m = 0;

  for (var C = 1, n = this[W8y.Y70].length; W8y[l](C, n); C++) {
    if (W8y[W](this[W8y.n5Q](C)[W8y.Z9T], this[W8y.n5Q](m)[W8y.Z9T]) || W8y[Z](this[W8y.n5Q](C)[W8y.Z9T], this[W8y.n5Q](m)[W8y.Z9T]) && W8y[P](this[W8y.n5Q](C)[W8y.T9T], this[W8y.n5Q](m)[W8y.T9T])) {
      m = C;
    }
  }

  if (!this[W8y.W3T](W8y[N](m, 1), m, m + 1)) {
    this[W8y.Y70][f]();
    return true;
  }

  return false;
};

Phaser.Physics.Box2D.Polygon.prototype.isConvex = function () {
  var f = "P7Q",
      N = "f7Q",
      P = "t0Q",
      Z = "z0Q",
      W = "B0Q",
      l = false,
      m = false;

  for (var C = 0, n = this[W8y.Y70].length; W8y[W](C, n); C++) {
    var k = C,
        H = W8y[Z](C + 1, n),
        i = W8y[P](C + 2, n);

    if (W8y[N](this[W8y.H5T](this[W8y.Y70][k], this[W8y.Y70][H], this[W8y.Y70][i]), 0)) {
      l = true;
    } else {
      m = true;
    }
  }

  return W8y[f](m, l);
};

Phaser.Physics.Box2D.Polygon.prototype.isReflex = function (f) {
  var N = "c7Q";
  return this[W8y.A1T](W8y[N](f, W8y.D8Q), f, f + W8y.D8Q);
};

Phaser[W8y.t8Q][W8y.c16][W8y.n1r][W8y.K4T] = function (f, N) {
  var P = "m7Q",
      Z = "Y7Q";
  return W8y[Z](f[W8y.T9T], N[W8y.T9T]) && W8y[P](f[W8y.Z9T], N[W8y.Z9T]);
};

Phaser[W8y.t8Q][W8y.c16][W8y.n1r][W8y.i97] = function (f, N, P, Z) {
  var W = "G7Q",
      l = "v7Q",
      m = "M7Q",
      C = "E7Q",
      n = "R7Q",
      k = "I7Q",
      H = "j7Q",
      i = "Q7Q",
      Q = "k7Q",
      e = "C7Q",
      j = "x7Q";

  if (Phaser[W8y.t8Q][W8y.c16][W8y.n1r][W8y.K4T](N, P) || Phaser[W8y.t8Q][W8y.c16][W8y.n1r][W8y.K4T](f, P) || Phaser[W8y.t8Q][W8y.c16][W8y.n1r][W8y.K4T](N, Z) || Phaser[W8y.t8Q][W8y.c16][W8y.n1r][W8y.K4T](f, Z)) {
    return W8y.z6k;
  }

  var o = {};
  box2d[W8y.x8T](N, f, o);
  box2d[W8y.R10](o, W8y.D8Q, o);
  var S = box2d[W8y.o27](o, f),
      d = box2d[W8y.o27](o, P),
      u = box2d[W8y.o27](o, Z);

  if (W8y[j](d, S) && W8y[e](u, S)) {
    return W8y.z6k;
  }

  if (W8y[Q](d, S) && W8y[i](u, S)) {
    return W8y.z6k;
  }

  var D = {};
  box2d[W8y.x8T](Z, P, D);
  box2d[W8y.R10](D, W8y.D8Q, D);
  var d = box2d[W8y.o27](D, P),
      S = box2d[W8y.o27](D, f),
      M = box2d[W8y.o27](D, N);

  if (W8y[H](S, d) && W8y[k](M, d)) {
    return W8y.z6k;
  }

  if (W8y[n](S, d) && W8y[C](M, d)) {
    return W8y.z6k;
  }

  var y1 = W8y[m](d - S, M - S),
      h = {
    x: f[W8y.T9T] + W8y[l](y1, N[W8y.T9T] - f[W8y.T9T]),
    y: f[W8y.Z9T] + W8y[W](y1, N[W8y.Z9T] - f[W8y.Z9T])
  };
  return h;
};

Phaser.Physics.Box2D.Polygon.prototype.canSee = function (f, N) {
  var P = "X9Q",
      Z = "N9Q",
      W = "w9Q",
      l = "A7Q",
      m = "rightOn",
      C = "leftOn",
      n = "indicesAreAdjacent";

  if (this[n](f, N)) {
    return false;
  }

  if (this[C](f + 1, f, N) && this[m](W8y[l](f, 1), f, N)) {
    return false;
  }

  for (var k = 0; W8y[W](k, this[W8y.Y70].length); ++k) {
    if (W8y[Z]((k + 1) % this[W8y.Y70].length, f) || W8y[P](k, f)) {
      continue;
    }

    if (this[C](f, N, k + 1) && this[m](f, N, k)) {
      if (Phaser[W8y.t8Q][W8y.c16][W8y.n1r][W8y.i97](this[W8y.n5Q](f), this[W8y.n5Q](N), this[W8y.n5Q](k), this[W8y.n5Q](k + 1))) {
        return false;
      }
    }
  }

  return true;
};

Phaser.Physics.Box2D.Polygon.prototype.subPolygon = function (f, N) {
  var P = "n9Q",
      Z = "J9Q",
      W = "addVertex",
      l = "b9Q",
      m = "s9Q",
      C = new Phaser[W8y.t8Q][W8y.c16][W8y.n1r]();

  if (W8y[m](f, N)) {
    for (var n = f; W8y[l](n, N + 1); n++) {
      C[W](this[W8y.n5Q](n));
    }
  } else {
    for (var n = f; W8y[Z](n, this[W8y.Y70].length); n++) {
      C[W](this[W8y.n5Q](n));
    }

    for (var n = 0; W8y[P](n, N + 1); n++) {
      C[W](this[W8y.n5Q](n));
    }
  }

  return C;
};

Phaser.Physics.Box2D.Polygon.prototype.decomposeOptimal = function (f) {
  var N = "a9Q",
      P = "e9Q",
      Z = "r9Q",
      W = "H9Q",
      l = "K9Q";

  if (typeof f === 'undefined') {
    f = 0;
  }

  if (W8y[l](f, 1)) {
    return this[W8y.Y70];
  }

  this[W8y.Q1k]();
  var m = [],
      C = [],
      n = [],
      k = Number[W8y.J8M];

  for (var H = 0; W8y[W](H, this[W8y.Y70].length); H++) {
    if (this[W8y.r5T](H)) {
      for (var i = 0; W8y[Z](i, this[W8y.Y70].length); i++) {
        if (this[W8y.p2T](H, i)) {
          C = this[W8y.b0r](H, i)[W8y.i8Q](f + 1);
          n = this[W8y.b0r](i, H)[W8y.i8Q](f + 1);

          if (W8y[P](C.length + n.length, k)) {
            m = C[W8y.u8H](n);
            k = m.length;
          }
        }
      }
    }
  }

  if (W8y[N](m.length, 0)) {
    m[W8y.h7T](this[W8y.Y70]);
  }

  return m;
};

Phaser.Physics.Box2D.Polygon.prototype.decompose = function (f) {
  var N = "W8Q",
      P = "Z8Q",
      Z = "U8Q",
      W = "y8Q",
      l = "F9Q",
      m = "p9Q",
      C = "L9Q",
      n = "u9Q",
      k = "d9Q";

  if (typeof f === 'undefined') {
    f = 0;
  }

  this[W8y.Q1k]();
  var H = [],
      i = Number[W8y.J8M],
      Q,
      e,
      j = false;

  for (var o = 0; W8y[k](o, this[W8y.Y70].length); o++) {
    if (this[W8y.r5T](o)) {
      j = true;
      var S = this[W8y.n5Q](o);

      for (var d = 0; W8y[n](d, this[W8y.Y70].length); d++) {
        if (this[W8y.p2T](o, d)) {
          var u = this[W8y.n5Q](d),
              D = W8y[C](u[W8y.T9T], S[W8y.T9T]),
              M = W8y[m](u[W8y.Z9T], S[W8y.Z9T]),
              y1 = W8y[l](D * D, M * M);

          if (W8y[W](y1, i)) {
            Q = o;
            e = d;
            i = y1;
          }
        }
      }
    }
  }

  if (!j && W8y[Z](this[W8y.Y70].length, 8)) {
    Q = 0;
    e = Math[W8y.s4T](W8y[P](this[W8y.Y70].length, 2));
    j = true;
  }

  if (j) {
    var h = this[W8y.b0r](Q, e)[W8y.i8Q](f + 1),
        E = this[W8y.b0r](e, Q)[W8y.i8Q](f + 1);
    H = h[W8y.u8H](E);
  }

  if (W8y[N](H.length, 0)) {
    H[W8y.h7T](this[W8y.Y70]);
  }

  return H;
};
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60001" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","box2d-plugin-full.js"], null)
//# sourceMappingURL=/box2d-plugin-full.9afec9e9.js.map