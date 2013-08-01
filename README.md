# saml2-nameid

[![Build](https://travis-ci.org/jaredhanson/node-saml2-nameid.png)](http://travis-ci.org/jaredhanson/node-saml2-nameid)
[![Coverage](https://coveralls.io/repos/jaredhanson/node-saml2-nameid/badge.png)](https://coveralls.io/r/jaredhanson/node-saml2-nameid)
[![Dependencies](https://david-dm.org/jaredhanson/node-saml2-nameid.png)](http://david-dm.org/jaredhanson/node-saml2-nameid)


Parse name identifiers in a SAML assertion.

## Install

    $ npm install saml2-nameid

## Usage

```javascript
var nid = nameid.parse('<saml:NameID ...>user@mail.example.org</saml:NameID>');
// => { format: 'emailAddress', email: 'user@mail.example.org' }
```

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
