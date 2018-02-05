.PHONY: build publish \
		set-executable deps \
		clean deep-clean

build: set-executable
	bin/build.sh

deploy: set-executable
	bin/deploy.sh

teardown: set-executable
	bin/teardown.sh

set-executable:
	chmod -c +x bin/*.sh

deps:
	yarn install

clean:
	rm -rf .serverless
	rm -rf coverage
	rm -rf .nyc_output
	rm -rf yarn*.log

deep-clean: clean
	rm -rf node_modules

