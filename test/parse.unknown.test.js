var nameid = require('..');

describe('parse name identifier in unknown format', function() {
  
  it('should throw an error', function() {
  
    expect(function() {
      var xml = '<saml:NameID Format="urn:example:names:tc:SAML:1.1:nameid-format:unknown">user@mail.example.org</saml:NameID>';
      var id = nameid.parse(xml);
      
    }).to.throw(Error, 'Unsupported name identifier format: urn:example:names:tc:SAML:1.1:nameid-format:unknown');
  
  });

});
