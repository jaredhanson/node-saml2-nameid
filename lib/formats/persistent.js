/**
 * Parse name identifiers in persistent format.
 *
 * For details regarding this format, refer to SAML Core, section 8.3.7.
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
      format: 'persistent',
      formatURI: 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent'
    };
    var nqual = nid.attr('NameQualifier')
      , spqual = nid.attr('SPNameQualifier')
      , spprovid = nid.attr('SPProvidedID')
      , val = nid.text()
  
    if (nqual) { name.qualifier = nqual; }
    if (spqual) { name.spQualifier = spqual; }
    if (spprovid) { name.spProvidedID = spprovid; }
    name.id =
    name.value = val;
    return name;
  }
}
