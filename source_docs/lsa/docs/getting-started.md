---
title: Getting Started
sidebar_position: 1
slug: /
---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Recommended Node Version:
### `17.7.0`

## Available Scripts

In the project directory (mxm-startr-child/modules/agency-profile), you can run:

### `npm install`
Run this command after you freshly downloaded the project from the bitbucket repo.

### `npm start`

Runs the app in the development mode.  
In the WordPress Dashboard create page and select Agency Account as a template

Open the page and add "?reactprev" as query string param when running in development mode.

To see the changes the page must be reloaded manually (Since it is integrated in WordPress)

You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\  
Your app is ready to be deployed!.

The working app can be seen normally without adding the "?reactprev" as a query string param.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Built in JavaScript requests

The Maxomedia-Starter-Theme has a built-in request object made with axios. If possible please use that object for making requests so we keep the consistency of the whole WordPress application.
Reference to the object:

[`wp-content/themes/maxomedia-starter/assets/system-js/02-request.js`](https://bitbucket.org/maxomedia/lsa-project/src/develop/wp-content/themes/maxomedia-starter/assets/system-js/02-request.js)

