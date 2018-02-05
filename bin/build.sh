#!/bin/bash

set -e

source bin/shared.sh

marquee "Lint Step"
yarn lint

marquee "Unit Test Step"
yarn test

marquee "Package Step"
serverless package
