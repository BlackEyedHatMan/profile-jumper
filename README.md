
[![Build Status](https://travis-ci.org/profile-jumper/profile-jumper.svg?branch=master)](https://travis-ci.org/profile-jumper/profile-jumper)

# profile-jumper
Profile Jumper! Jump easily between profiles!

## Development
Project uses React, read on about the design decisions and how to build.

## Manual Install
1. Build with `npm run build`
2. Open `chrome://extensions` in chrome
3. Ensure "developer mode" is on
4. Load unpacked extensions
5. Choose the `build` dir to load from

### Debugging
1. Run while editing code `npm start`

### Development Decisions
Here you can understand the decisions taken for each aspect.

#### Font Awesome
Using Font Awesome for the profile icons, need to perform explicit imports.
See: https://github.com/FortAwesome/react-fontawesome#explicit-import

#### Multiple react entry paths
When you're building a chrome extension, there multiple or "custom" webpage examples of how to have "multiple entry points to create-react-app". This problem can be summarized as Essentially one does not want to "eject" then build for all configs because you then need to spend time customising, maintaining, etc. Keeping things simple (that's how I like to roll), found a good solution.

Looking to solve this issue, found a simple, elegant solution using ```react-router``` "HashRouter".
See: https://github.com/facebook/create-react-app/issues/1084#issuecomment-448631037

## React dependencies
Install these additional React dependencies.

* ```npm install --save react-router react-router-dom```
* ```npm install --save react-move```

## Running in LXC container
First create the container, use bash tools see: https://github.com/mrupgradable/bash-scripts

### Example of creating container
Create the container using bash tool (will create Alpine Linux container by default)

```./lxc-create-react-code-project-container.sh node-code-profile-jumper 10.237.245.12 /projects/code/browser-extension/profile-jumper profile-jumper false```

### Running container
The container needs to be be executed as the user 1000 (contain it's a little different with Alpine)

* ```lxc start node-code-profile-jumper```
* ```lxc exec node-code-profile-jumper --user 1000 bash```

### Building
In the container, go to the project source

`npm run build`

### Developing
In the container, go to the project source (this should start on container IP and port 3000)

```npm start```

Navigate either to one of the lacations:
* Popup Profiles - /index.html#popup
* Settings - /index.html#settings

### Updating node dependencies
dependencies can have vulnerabilities, so it's a good idea to update.

* `npm outdated` (see outdated dependencies)
* `npm update`
* `npm audit fix`

## Deploying
Need to use google chrome webstore https://chrome.google.com/webstore/devconsole/

Follow these steps:
1. Change the version in `package.json`
2. `npn run build`
3. Test in the browser, go to `chrome://extensions` choose load unpacked and choose `build` dir
4. Go to https://chrome.google.com/webstore/devconsole
5. Choose `package`
6. Choose `upload new package`
7. Select the deploy package from `deploy` dir (this is created by the build process)

## References
Google developer docs are available here:
https://developer.chrome.com/extensions/devguide
