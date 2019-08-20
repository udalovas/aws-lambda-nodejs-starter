aws-lambda-nodejs-starter
==================

An easy to start with & follow, though powerful enough starter for your AWS Lambda built with Node.js (good choice btw), prepared with care, love and industry best practices.

## Includes
... from the moment one:

- Proper structure, familiar to all nodejs people
- Checkstyle setup
- Unit tests setup
- [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) based setup
- Packaging into a ready-to-upload artefact

## Preresquites
You will need the following to be installed in order to ~~build any lambda in Node.js~~ try and extend this starter:

- Node 8.10+ runtime (running `8.16.0` at the moment of writing)
- NPM (running `6.4.1` at the moment of writing)
- AWS SAM CLI (running `0.16.1` at the moment of writing)

## Build & Run

### Install
... all the dependances using npm, not a suprise:
```
npm install
```
### Invoke
... your lambda locally with the support of AWS SAM:
```
npm run invoke:local
```
which runs all the pre-checks, builds it and run the sample invocation.

## More control
... as we like, right?

### Run Checkstyle
```
npm run checkstyle
```
which runs the checkstyle using `eslint` and the profile provided (`eslintrc.yml`), the output is buitified with [snazzy](https://www.npmjs.com/package/snazzy). And if you want to perform a quick-fix on issues, proceed with:
```
npm run checkstyle:fix
```

### Run Test(s)
```
npm test
```
which runs tests using [MochaJS](https://mochajs.org/) and [ChaiJS](https://www.chaijs.com/).

### Check Test(s) Coverage
```
npm run test:coverage
```
which generated a report using [Istanbul](https://istanbul.js.org/)

### Build
... a package for AWS SAM:
```
npm run build:sam
```
... a zip package, ready to upload and use manually or your CI tool of choice:
```
npm run build:zip
```
which creates a zip package and it put to `./target` folder.

## Extension points
This module is one big extension point, specificly to

### Use a different checkstyle lib
... update an `.eslintrc.yml` profile or just change the dependancy and `checkstyle` script(s) in `package.json`.

### Use a different unit test runner
... update the dependancy and `test` script in `package.json`.

## Roadmap
- Env. specific config baseline setup
- Deployment script baseline setup
- Baseline support for integration with Dynamo, S3.. anything else suggested by the users..
