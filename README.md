
## Building and Running the project

Here's what you do to get this up and running on your machine:

```
npm install
npm start
```

## Commands available


### Run dev server

Run the project on your local machine with dev configurations

`npm start`

uses webpack-dev-server to run the React app on your machine.

---

### Building for production

Building the project for production use:

`npm dist`

uses babel to transpile all the resources in the project into the `dist/` directory.

### Run production build

First, build the bundles with `npm dist`

Fetch a standalone static server:

```
npm i -g serve
```

Serve the static directory:

```
serve -s dist
```

---

### Executing Tests

This project uses:

```
Enzyme -> React Test Utility Framework (AirBnB)
Jest -> Test Runner and Spec Framework (Facebook)
```

The test files (or `specs`) are stored in `__tests__/` directory. The full test suite can be run by:

`npm test`

### Running syntax linter - ESLint

To verify syntax, run:

`npm lint`

This command checks the `src` and `__tests__` directories.

---
