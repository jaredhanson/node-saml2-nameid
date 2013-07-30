/**
 * Parse name identifiers in Kerberos principal name format.
 *
 * For details regarding this format, refer to SAML Core, section 8.3.5.
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
      format: 'kerberos',
      formatURI: 'urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos'
    };
    var val = nid.text();
    
    name.kerberosName =
    name.value = val;
    return name;
  };
};
