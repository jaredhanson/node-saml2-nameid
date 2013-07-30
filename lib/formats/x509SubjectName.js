/**
 * Parse name identifiers in X.509 subject name format.
 *
 * For details regarding this format, refer to SAML Core, section 8.3.3.
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
      format: 'X509SubjectName',
      formatURI: 'urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName'
    };
    var val = nid.text();
    
    name.x509Subject =
    name.value = val;
    return name;
  };
};
