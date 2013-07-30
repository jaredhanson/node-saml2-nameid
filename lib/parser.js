/**
 * Module dependencies.
 */
var DOMParser = require('xmldom').DOMParser
  , $ = require('xtraverse');


function Parser() {
  this._formats = {};
}

Parser.prototype.use = function(format, fn) {
  this._formats[format] = fn;
};

Parser.prototype.parse = function(xml, fmt) {
  if (typeof xml === 'string') {
    xml = new DOMParser().parseFromString(xml);
  }
  
  // TODO: Ensure it is safe to re-wrap a Collection.
  var nid = $(xml)
    , format = nid.attr('Format');
  if (!format) { format = fmt || 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'; }
  var fn = this._formats[format];
  if (!fn) { return undefined; }
  return fn(nid);
};

module.exports = Parser;
