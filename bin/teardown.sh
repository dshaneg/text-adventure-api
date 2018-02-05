#!/bin/bash

source bin/shared.sh

marquee "Serverless Remove"
export SLS_DEBUG=true
serverless remove --verbose
