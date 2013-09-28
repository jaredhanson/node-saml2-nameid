var nameid = require('..');

describe('parse', function() {
  
  describe('name identifier in email address format', function() {
  
    describe('with value', function() {
      var xml = '<saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">user@mail.example.org</saml:NameID>';
    
      it('should parse correctly', function() {
        var id = nameid.parse(xml);
    
        expect(id).to.be.an('object');
        expect(Object.keys(id)).to.have.length(4);
        expect(id.format).to.equal('emailAddress');
        expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress');
        expect(id.value).to.equal('user@mail.example.org');
        expect(id.email).to.equal('user@mail.example.org');
      });
    });
  
  });

});
