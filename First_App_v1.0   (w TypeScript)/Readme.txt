How to run:

- cd to this folder in your cli and install live-server globally if you don't already have it ($ sudo npm install -g live-server)
- host your applicaton in a static server on http://localhost:PORT# ($ live-server --port=PORT#)


Future steps that the next version will improve on:

- Transpiling TypeScript in the browser becomes tediously slow when our app grows beyond a few files. We certainly won't do that in production. We should learn to compile locally and push the generated JavaScript to the server. We'll need some tools for that.
- Downloading JavaScript libraries from the web is OK for demos but it slows our development. Every time our app reloads, it must refetch these libraries. Don't count on browser caching. Our debugging and live-reload techniques will bust the browser cache. Loading libraries from the web also prevents us from developing our application offline or where connectivity is poor. Let's learn to download the libraries to our machine and serve them locally.
- We want our development cycle to be as fast and friction-free as possible. When we change our code, we want to see the results in the browser immediately. We have tools and procedures for that.