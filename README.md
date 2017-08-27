This repository contains the minimum necessary to set up a project with React and Electron.

# Quick start

1. `git clone` this repository (electron-react-template)
2. Navigate to the cloned repo and run `npm install`. (*)
3. Run `npm run dev` to bring up the server and see your app in electron.

Happy coding!

\* : This process might take few minutes. The amount of packages to download is pretty big.

# After...

Once you have player around and enjoyed this template, remember to update:
* `./package.json` values:
  * `name`
* `./public/manifest.json` values:
  * `short_name`
  * `name`
  * `icons`
  * ...
* `./public/index.html`:
  * `<html>` tag `lang` property value
  * `<title>` tag content
  * ...

As probably you expected: `index.js` is your app's entry point which renders `<App/>` React component living in `App.js` file.