"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = exports.init = exports.config = void 0;
let config = {
  ENABLED: true,
  FORCED: false,
  STRENGTH: null
};
exports.config = config;

const init = function (strength) {
  config.STRENGTH = strength;

  if (!config.STRENGTH) {
    config.STRENGTH = Math.floor(Math.random() * 10);
  }
};

exports.init = init;

const random = function () {
  if (!config.ENABLED) {
    return false;
  }

  if (config.FORCED) {
    return true;
  }

  const spec = {
    0: (10 - config.STRENGTH) / 100,
    1: config.STRENGTH / 100
  };
  let i,
      sum = 0,
      r = Math.random();

  for (i in spec) {
    sum += spec[i];
    if (r <= sum) return i ? true : false;
  }
};

exports.random = random;