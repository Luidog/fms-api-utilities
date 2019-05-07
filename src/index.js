'use strict';

const {
  namespace,
  parseScriptResult,
  sanitizeParameters,
  setData
} = require('./filemaker.utilities');
const { recordId, fieldData, transform } = require('./transform.utilities');
const { omit, toStrings, toArray, isJson } = require('./conversion.utilities');
const { urls } = require('./urls.utilities');

module.exports = {
  omit,
  toStrings,
  setData,
  toArray,
  isJson,
  namespace,
  parseScriptResult,
  sanitizeParameters,
  urls
};
