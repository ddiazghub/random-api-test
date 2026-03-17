# Random API

A small Express API that exposes a few lightweight endpoints for serving random values. It is intended as a simple starter project for local development, experimentation, and API testing.

## Features

- Health-style root endpoint
- Random floating-point number endpoint
- Random integer endpoint powered by Node's `crypto` module
- Minimal setup for quick local runs

## Requirements

- Node.js 18+
- npm

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

For auto-reloading during development, run:

```bash
npm run dev
```

The API runs on port `3000` by default. You can override it with the `PORT` environment variable.

## Available Scripts

- `npm start` - run the API with Node.js
- `npm run dev` - run the API with `nodemon`
- `npm test` - placeholder test script

## API Endpoints

### `GET /`

Returns a simple confirmation message.

Example response:

```text
Hello World!!!
```

### `GET /random`

Returns a random floating-point number.

Example response:

```text
0.483920128401
```

### `GET /random/int`

Returns a cryptographically generated integer from `0` to `9999`.

Example response:

```text
4821
```

## Project Structure

- `index.js` - Express server and route definitions
- `package.json` - project metadata and npm scripts

## Team

- Alice
- Bob
