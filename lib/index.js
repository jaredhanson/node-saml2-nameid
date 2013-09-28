/**
 * Module dependencies.
 */
var Parser = require('./parser')
  , defaultParser;


/**
 * Parse a name identifier.
 *
 * This function parses a SAML name identifier and returns an object.  Name
 * identifers are classified according to a format, which determines how to
 * interpret the value.  This function supports the formats defined by SAML
 * Core.  Support for additional formats can be implemented as necessary.
 *
 * If the name identifer format is not understood, an error will be thrown.
 *
 * For further details regarding name identifiers, refer to SAML Core, section
 * 2.2.
 *
 * References:
 *   - [Assertions and Protocols for the OASIS Security Assertion Markup Language (SAML) V2.0](http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf)
 *
 * @param {String|Element} xml
 * @param {String} [fmt]
 * @return {Object}
 * @api public
 */
exports.parse = function(xml, fmt) {
  return defaultParser.parse(xml, fmt);
};

/**
 * Setup default parser.
 */
defaultParser = new Parser();
defaultParser.use('urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
                  require('./formats/unspecified')());
defaultParser.use('urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
                  require('./formats/emailAddress')());
defaultParser.use('urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName',
                  require('./formats/x509SubjectName')());
defaultParser.use('urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName',
                  require('./formats/windowsDomainQualifiedName')());
defaultParser.use('urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos',
                  require('./formats/kerberos')());
defaultParser.use('urn:oasis:names:tc:SAML:2.0:nameid-format:entity',
                  require('./formats/entity')());
defaultParser.use('urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
                  require('./formats/persistent')());
defaultParser.use('urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
                  require('./formats/transient')());

/**
 * Export constructors.
 */
exports.Parser = Parser;
