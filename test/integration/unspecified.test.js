var nameid = require('../..');

describe('name identifier in unspecified format', function() {
  
  describe('without optional attributes', function() {
    var xml = '<saml:NameID>_00000000aaa0a0a00a000aa0a00aa00aa000a000a0</saml:NameID>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml);
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(3);
      expect(id.format).to.equal('unspecified');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified');
      expect(id.value).to.equal('_00000000aaa0a0a00a000aa0a00aa00aa000a000a0');
    });
  });
  
  describe('containing a name qualifier', function() {
    var xml = '<saml:NameID NameQualifier="https://openidp.feide.no">_00000000aaa0a0a00a000aa0a00aa00aa000a000a0</saml:NameID>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml);
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(4);
      expect(id.format).to.equal('unspecified');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified');
      expect(id.value).to.equal('_00000000aaa0a0a00a000aa0a00aa00aa000a000a0');
      expect(id.qualifier).to.equal('https://openidp.feide.no');
    });
  });
  
  describe('containing a SP name qualifier', function() {
    var xml = '<saml:NameID SPNameQualifier="http://lucy.localtunnel.me/">_00000000aaa0a0a00a000aa0a00aa00aa000a000a0</saml:NameID>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml);
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(4);
      expect(id.format).to.equal('unspecified');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified');
      expect(id.value).to.equal('_00000000aaa0a0a00a000aa0a00aa00aa000a000a0');
      expect(id.spQualifier).to.equal('http://lucy.localtunnel.me/');
    });
  });
  
  describe('containing a name qualifier and SP name qualifier', function() {
    var xml = '<saml:NameID NameQualifier="https://openidp.feide.no" SPNameQualifier="http://lucy.localtunnel.me/">_00000000aaa0a0a00a000aa0a00aa00aa000a000a0</saml:NameID>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml);
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(5);
      expect(id.format).to.equal('unspecified');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified');
      expect(id.value).to.equal('_00000000aaa0a0a00a000aa0a00aa00aa000a000a0');
      expect(id.qualifier).to.equal('https://openidp.feide.no');
      expect(id.spQualifier).to.equal('http://lucy.localtunnel.me/');
    });
  });
  
  describe('containing a name qualifier, SP name qualifier, and SP provided ID', function() {
    var xml = '<saml:NameID NameQualifier="https://openidp.feide.no" SPNameQualifier="http://lucy.localtunnel.me/" SPProvidedID="123456789" Format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified">_00000000aaa0a0a00a000aa0a00aa00aa000a000a0</saml:NameID>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml);
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(6);
      expect(id.format).to.equal('unspecified');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified');
      expect(id.value).to.equal('_00000000aaa0a0a00a000aa0a00aa00aa000a000a0');
      expect(id.qualifier).to.equal('https://openidp.feide.no');
      expect(id.spQualifier).to.equal('http://lucy.localtunnel.me/');
      expect(id.spProvidedID).to.equal('123456789');
    });
  });
  
});
