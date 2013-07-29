/**
 * Parse name identifiers in unspecified format.
 *
 * For details regarding this format, refer to SAML Core, section 8.3.1.
 *
 * References:
 *   - [Assertions and Protocols for the OASIS Security Assertion Markup Language (SAML) V2.0](http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf)
 *
 * @param {Collection} attrs
 * @return {Function}
 * @api public
 */
module.exports = function() {
  
  return function(nid) {
    var name = {
      format: 'unspecified',
      formatURI: 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified'
    };
    var nqual = nid.attr('NameQualifier')
      , spqual = nid.attr('SPNameQualifier')
      , spprovid = nid.attr('SPProvidedID')
      , val = nid.text()
  
    if (nqual) { name.qualifier = nqual; }
    if (spqual) { name.spQualifier = spqual; }
    if (spprovid) { name.spProvidedID = spprovid; }
    name.value = val;
    return name;
  }
}
