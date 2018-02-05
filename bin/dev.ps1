docker run `
  --rm `
  -it `
  -w=/src/text-adventure-api `
  --name adv-core-api `
  --mount type=bind,source="F:\src",target=/src `
  --mount type=bind,source="$Env:USERPROFILE/.aws",target=/root/.aws `
  --mount type=volume,source="node_modules",target="/usr/local/lib/node_modules" `
  dshaneg/nodejs:8-alpine-sls-1.26.0 `
  /bin/bash
