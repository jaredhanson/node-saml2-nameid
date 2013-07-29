include support/mk/node.mk
include support/mk/mocha.mk

TESTS = test/*.test.js test/**/*.test.js
NODE_PATH_TEST = ./lib

test: test-node
test-node: test-mocha
