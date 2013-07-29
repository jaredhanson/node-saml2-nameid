var nameid = require('index');

describe('name identifier with transient format', function() {
    
  describe('containing a SP name qualifier', function() {
    var xml = '<saml:NameID SPNameQualifier="http://lucy.localtunnel.me/" Format="urn:oasis:names:tc:SAML:2.0:nameid-format:transient">_00000000aaa0a0a00a000aa0a00aa00aa000a000a0</saml:NameID>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml);
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(5);
      expect(id.format).to.equal('transient');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:2.0:nameid-format:transient');
      expect(id.value).to.equal('_00000000aaa0a0a00a000aa0a00aa00aa000a000a0');
      expect(id.id).to.equal('_00000000aaa0a0a00a000aa0a00aa00aa000a000a0');
      expect(id.spQualifier).to.equal('http://lucy.localtunnel.me/');
    });
  });
  
});
