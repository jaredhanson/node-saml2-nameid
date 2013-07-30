include support/mk/node.mk
include support/mk/mocha.mk

include support/mk/browserify.mk
include support/mk/testling.mk

TESTS = test/*.test.js test/**/*.test.js

BROWSERIFY_MAIN = ./lib/index.js

test: test-mocha


clean:
	rm -rf build

clobber: clean clobber-node


.PHONY: test clean clobber
