/**
 * Parse name identifiers in entity identifier name format.
 *
 * For details regarding this format, refer to SAML Core, section 8.3.6.
 *
 * References:
 *   - [Assertions and Protocols for the OASIS Security Assertion Markup Language (SAML) V2.0](http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf)
 *
 * @return {Function}
 * @api public
 */
module.exports = function() {
  
  return function(nid) {
    var name = {
      format: 'entity',
      formatURI: 'urn:oasis:names:tc:SAML:2.0:nameid-format:entity'
    };
    var val = nid.text()
    
    name.entity =
    name.value = val;
    return name;
  }
}
