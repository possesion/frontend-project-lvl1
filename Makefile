install: install-deps

run:
	npx babel-node 'src/bin/hexlet.js' 10

install-deps:
	npm ci

build:
	rm -rf dist
	npm run build

lint:
	npx eslint .

publish:
	npm publish

