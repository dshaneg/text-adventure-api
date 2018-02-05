#!/bin/bash

source bin/shared.sh

marquee "Serverless Deploy"
export SLS_DEBUG=true
serverless deploy --verbose --package .serverless
