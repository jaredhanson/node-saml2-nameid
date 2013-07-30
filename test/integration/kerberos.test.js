var nameid = require('../..');

describe('name identifier in Kerberos principal name format', function() {
  
  describe('with value', function() {
    var xml = '<saml:NameID Format="urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos">bjensen@MIT.DE.PADL.COM</saml:NameID>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml);
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(4);
      expect(id.format).to.equal('kerberos');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos');
      expect(id.value).to.equal('bjensen@MIT.DE.PADL.COM');
      expect(id.kerberosName).to.equal('bjensen@MIT.DE.PADL.COM');
    });
  });

});
