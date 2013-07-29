var nameid = require('index');

describe('name identifier in entity identifier name format', function() {
  
  describe('with value', function() {
    var xml = '<saml:NameID Format="urn:oasis:names:tc:SAML:2.0:nameid-format:entity">https://www.salesforce.com</saml:NameID>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml);
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(4);
      expect(id.format).to.equal('entity');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:2.0:nameid-format:entity');
      expect(id.value).to.equal('https://www.salesforce.com');
      expect(id.entity).to.equal('https://www.salesforce.com');
    });
  });

});


describe('issuer with default format of entity identifier', function() {
  
  describe('without format attribute', function() {
    var xml = '<saml:Issuer>https://openidp.feide.no</saml:Issuer>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml, 'urn:oasis:names:tc:SAML:2.0:nameid-format:entity');
      console.log(id.formatURI)
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(4);
      expect(id.format).to.equal('entity');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:2.0:nameid-format:entity');
      expect(id.value).to.equal('https://openidp.feide.no');
      expect(id.entity).to.equal('https://openidp.feide.no');
    });
  });
  
  describe('with format attribute', function() {
    var xml = '<saml:Issuer Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">user@mail.example.org</saml:Issuer>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml, 'urn:oasis:names:tc:SAML:2.0:nameid-format:entity');
      console.log(id.formatURI)
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(4);
      expect(id.format).to.equal('emailAddress');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress');
      expect(id.value).to.equal('user@mail.example.org');
      expect(id.email).to.equal('user@mail.example.org');
    });
  });

});
