Info:

--- INSERT INFO HERE ---


Folder structure:

First_App_v2.0 (w TypeScript)
├── node_modules
├── src
│    ├── app
|    │    └── app.ts
│    ├── index.html
│    └── tsconfig.json
└── package.json


Local dependencies:

angular2 - the Angular 2 library
systemjs - an open-source library that provides module loading
typescript - the TypeScript compiler (as a development dependency)
live-server - the static file server that reloads the browser when files change (as a development dependency)


How to run:

- install dependencies ($ sudo npm install)
- cd to the parent folder using your cli and compile the TypeScript to JavaScript ($ npm run tsc)
- host your applicaton in a static server on http://127.0.0.1:8081/src/ ($ npm start). To use a different port, adjust the scripts.start section within the package.json file