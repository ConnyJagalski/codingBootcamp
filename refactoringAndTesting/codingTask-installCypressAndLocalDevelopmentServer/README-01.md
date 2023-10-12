# Install Cypress and local Development Server

You will use Cypress to cover a given Todo App with end-2-end tests.

## Preparation

Clone the example Todo App repository (alternativly use your own implementation of the Todo App).

- [x] Clone the [Todo App repository](https://github.com/coding-bootcamps-eu/todo-app) to your computer
- [x] Remove the existing git remote with `git remote remove origin`
- [x] Init npm (`npm init --yes`)
- [x] Create a `.gitignore` file and ignore the `node_modules` folder
  - [x] A predefined list of ignores can be found [here](https://github.com/github/gitignore/blob/master/Node.gitignore)
- [x] Create a `src` folder
- [x] Move the source files (html, css, js) into the `src` folder

## Local Development Server

You need a local development server to serve your Todo App so that Cypress can access it.

**Serve Script**

- [x] Install `serve` as a local development with the command `npm i serve --save-dev`
- [x] Create a serve script in your `package.json`
- [x] Test your serve script with `npm run serve`

Serve Script

```json
"scripts": {
  "serve": "serve ./src"
}
```

> Remember to keep the server open while you develop or run cypress

## Cypress

You will now install and configure Cypress.

- [x] Install `cypress` as a development dependency
- [x] Add a node script to run cypress in your `package.json`
- [x] Run `e2e` npm script so that cypress will create all necessary folders and files
- [x] Create a `cypress.json` file in the root directory of your npm workspace
  - [x] Configure the `baseUrl` of your app
  - [x] Use the port of your local development server (usually 3000 or 5000)

Cypress Script

```json
"scripts": {
  "e2e": "cypress open"
}
```

Configuration of cypress.json (the port can be different)

```json
{
  "baseUrl": "http://localhost:5000"
}
```

**The baseUrl must match to your personal setup and port ⚠️**
