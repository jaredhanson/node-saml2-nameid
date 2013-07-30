var nameid = require('../..');

describe('saml2-nameid', function() {
  
  it('should export parse function', function() {
    expect(nameid.parse).to.be.a('function');
  });
  
  it('should export Parser constructor', function() {
    expect(nameid.Parser).to.be.a('function');
  });
  
});
