# tiptapdemo

A minimal example of TipTap configured for collaborative editing, to be used for testing backend.

Assumes Node v16 LTS.

Will attempt to connect via websocket to url: 'ws://127.0.0.1:8080'. You'll need HocusPocus running.

It will always open and modify the same document, called "tiptapdemo-example-doc"

Details below are correct.

## First start the Backend

You can instantiate the backend by running from the `server` directory of the MVP repo. 

Run the backend first so it claims port 8080, then run this client so that it'll grab 8081 etc.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
