var nameid = require('index');

describe('name identifier in Windows domain qualified name format', function() {
  
  describe('with value', function() {
    var xml = '<saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName">mydomain\\ben</saml:NameID>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml);
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(4);
      expect(id.format).to.equal('WindowsDomainQualifiedName');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName');
      expect(id.value).to.equal('mydomain\\ben');
      expect(id.windowsName).to.equal('mydomain\\ben');
    });
  });

});
