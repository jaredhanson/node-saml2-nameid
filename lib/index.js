/**
 * Module dependencies.
 */
var Parser = require('./parser')
  , defParser;


exports.parse = function(xml, fmt) {
  return defParser.parse(xml);
}

/**
 * Setup default parser.
 */
defParser = new Parser();
defParser.use('urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
              require('./formats/transient')());

/**
 * Export constructors.
 */
exports.Parser = Parser;
