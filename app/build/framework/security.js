"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitize = void 0;

const sanitize = string => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    "/": '&#x2F;'
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, match => map[match]);
};

exports.sanitize = sanitize;