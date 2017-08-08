# JS stub project

This project intends to provide a minimal and easy setup for language development on JS.

## Prerequisites

You need to have `node` installed. It is also recommended to install `yarn` to use instead of `npm`.

## Installation

Just run this on the project root folder:

```
yarn
```

 (or, if you have to use npm instad of yarn)

```
npm install
```

## Running the tests

To run the tests simply run the following command:

```
yarn test
```

 (or, if you have to use npm instad of yarn)

```
npm test
```

### Content Description

The folder `/src` should contain all your sources, including the pegjs' grammar definitions. A grammar example is already provided.

The folder `/test` should contain all the tests files. It is recommended to use the extension `.test.js` on all the tests.

The file `package.json` contains a general definition of your project, including it's name, version and dependencies. Handle it with care.

The file `yarn.lock` contains metadata about the dependencies. You should never manually update this file.
