# Anti-Racist Starter Pack Website

This project contains source files for the ARSP site: https://antiraciststarterpack.com/

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with [Typescript](https://www.typescriptlang.org/). To begin development:

1. Install dependencies: `npm install`
2. Run the app: `npm start`

### Other Scripts

`npm test`

Launches the test runner in the interactive watch mode. See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

`npm run eject`

Removes the single build dependency from the project and copies all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into the project as dependencies in `package.json`. Technically, the distinction between dependencies and development dependencies is pretty arbitrary for front-end apps that produce static bundles.

## Editor Setup (Optional)

If you are using [VS Code](https://code.visualstudio.com/), install the [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension. It follows the rules defined in .prettierrc. To format a file, do `cmd`+`shift`+`p` and execute the 'Format Document' command.

To set Prettier as your default formatter and auto-format on save, create .vscode/settings.json with the following:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
}
```

Git should ignore this file. Do not check it into source control because these are your own settings.

# Deploy

We use Github Actions to automate continuous integration. These are defined in .github/workflows. Currently, the `main` branch deploys generated static files to the `gh-pages` branch.
