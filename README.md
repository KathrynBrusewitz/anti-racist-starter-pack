# Anti-Racist Starter Pack

This project contains source files for the ARSP site and CMS.

- https://antiraciststarterpack.com/
- https://arsp-cms.herokuapp.com/admin

See the [Project Board](https://github.com/KathrynBrusewitz/anti-racist-starter-pack/projects/2) in Github for tasks.

# Development

Refer to README's inside backend and frontend directories to get started.

### Editor Setup (Optional)

If you are using [VS Code](https://code.visualstudio.com/), install the [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension. It follows the rules defined in `.prettierrc`. To format a file, do `cmd`+`shift`+`p` and execute the 'Format Document' command.

To set your default formatter to Prettier and have it auto-format when you save, create `.vscode/settings.json` with the following:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
}
```

Git will ignore this file. Do not check it into source control because these are your own settings. See http://go.microsoft.com/fwlink/?LinkId=827846 for more information about the extensions.json format.

# Deployment

Continuous integration and deployment are automated by Github Actions. These are defined in `.github/workflows`. The `main` branch deploys generated static files from the frontend directory to the `gh-pages` branch.

Separate deployment instructions for the API/CMS are in the backend directory.
