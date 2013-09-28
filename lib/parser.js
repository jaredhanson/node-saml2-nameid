/**
 * Module dependencies.
 */
var X = require('xtraverse');


/**
 * Creates an instance of `Parser`.
 *
 * @constructor
 * @api public
 */
function Parser() {
  this._formats = {};
}

/**
 * Register name identifier parser for format.
 *
 * The parser function must have the following signature:
 *
 *     function(nid) {
 *     }
 *
 * The parser function is invoked with a NameID, and must return an object
 * containing the parsed identifier.
 *
 * @param {String} format URI reference classifying the identifier format.
 * @param {Function} fn Function to parse name identifier.
 * @api public
 */
Parser.prototype.use = function(format, fn) {
  this._formats[format] = fn;
};

/**
 * Parse name identifier from SAML 2.0 assertion.
 *
 * Examples:
 *
 *     var nid = parser.parse('<saml:NameID/>');
 *
 * @param {String|Element} xml A NameID element.
 * @param {String} [fmt] Default format, if not specified by NameID.
 * @return {Object} Parsed name identifier.
 * @api public
 */
Parser.prototype.parse = function(xml, fmt) {
  var nid = X(xml)
    , format = nid.attr('Format');
  if (!format) { format = fmt || 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'; }
  var fn = this._formats[format];
  if (!fn) { return undefined; }
  return fn(nid);
};


/**
 * Expose `Parser`.
 */
module.exports = Parser;
