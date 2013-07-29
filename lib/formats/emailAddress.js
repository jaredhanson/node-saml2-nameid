/**
 * Parse name identifiers in email address format.
 *
 * For details regarding this format, refer to SAML Core, section 8.3.2.
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
      format: 'emailAddress',
      formatURI: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
    };
    var val = nid.text()
    
    name.email =
    name.value = val;
    return name;
  }
}
