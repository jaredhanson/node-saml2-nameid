/**
 * Module dependencies.
 */
var Parser = require('./parser')
  , defParser;


/**
 * Parse a name identifier.
 *
 * This function parses a SAML name identifier and returns an object.  Name
 * identifers are classified according to a format, which determines how to
 * interpret the value.  This function supports the formats defined by SAML
 * Core.  Support for additional formats can be implemented as necessary.
 *
 * If the name identifer format is not understood, `undefined` will be returned.
 *
 * For further details regarding name identifiers, refer to SAML Core, section
 * 2.2.
 *
 * References:
 *   - [Assertions and Protocols for the OASIS Security Assertion Markup Language (SAML) V2.0](http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf)
 *
 * @param {String|Element} xml
 * @param {String} fmt
 * @return {Object|undefined}
 * @api public
 */
exports.parse = function(xml, fmt) {
  return defParser.parse(xml, fmt);
}

/**
 * Setup default parser.
 */
defParser = new Parser();
defParser.use('urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
              require('./formats/unspecified')());
defParser.use('urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
              require('./formats/emailAddress')());
defParser.use('urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName',
              require('./formats/x509SubjectName')());
defParser.use('urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName',
              require('./formats/windowsDomainQualifiedName')());
defParser.use('urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos',
              require('./formats/kerberos')());
defParser.use('urn:oasis:names:tc:SAML:2.0:nameid-format:entity',
              require('./formats/entity')());
defParser.use('urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
              require('./formats/persistent')());
defParser.use('urn:oasis:names:tc:SAML:2.0:nameid-format:transient',
              require('./formats/transient')());

/**
 * Export constructors.
 */
exports.Parser = Parser;
