# Anti-Racist Starter Pack

This project contains source files for the ARSP site (https://antiraciststarterpack.com/) and CMS (https://arsp-cms.herokuapp.com/admin).

# Development

Refer to READMEs inside /backend and /frontend directories to get started.

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

Github Actions are used to automate continuous integration. These are defined in .github/workflows. Currently, the `main` branch deploys generated static files from the /frontend directory to the `gh-pages` branch.
