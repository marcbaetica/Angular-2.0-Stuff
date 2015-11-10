This is the improved version of the first Angular2 app. Unlike its predecessor, this app transpiles TypeScript code locally (not in the browser), has the dependencies available locally (faster load time and better access in slow internet areas), as well as live-server installed locally (in case of an accidental global removal of the hosting application). These improvements have decreased the execution time from 520 ms to 147 ms. Among other improvements, there was also a file restructuring to include the above specifications.


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

- cd to the parent folder using your cli and compile the TypeScript to JavaScript ($ npm run tsc)
- host your applicaton in a static server on http://127.0.0.1:8081/src/ ($ npm start). To use a different port, adjust the scripts.start section within the package.json file