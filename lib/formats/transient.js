module.exports = function() {
  
  return function(nid) {
    var name = {
      format: 'transient',
      formatURI: 'urn:oasis:names:tc:SAML:2.0:nameid-format:transient'
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
