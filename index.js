'use strict';

Error.prototype.response = function () {
  return {errcode: this.code, errmsg: this.message};
};

module.exports = require('operational-error')(require('mlop-errors'));
