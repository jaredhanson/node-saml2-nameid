var nameid = require('index');

describe('name identifier in X.509 subject name format', function() {
  
  describe('with value', function() {
    var xml = '<saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName">CN=trscavo@uiuc.edu,OU=User,O=NCSA-TEST,C=US</saml:NameID>';
    
    it('should parse correctly', function() {
      var id = nameid.parse(xml);
    
      expect(id).to.be.an('object');
      expect(Object.keys(id)).to.have.length(4);
      expect(id.format).to.equal('X509SubjectName');
      expect(id.formatURI).to.equal('urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName');
      expect(id.value).to.equal('CN=trscavo@uiuc.edu,OU=User,O=NCSA-TEST,C=US');
      expect(id.x509Subject).to.equal('CN=trscavo@uiuc.edu,OU=User,O=NCSA-TEST,C=US');
    });
  });
  
});
