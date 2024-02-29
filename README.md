
[![Build Status](https://travis-ci.org/profile-jumper/profile-jumper.svg?branch=master)](https://travis-ci.org/profile-jumper/profile-jumper)

# profile-jumper
Profile Jumper! Jump easily between profiles!

## Notes:
1. Need to use Docker for deps (no on machine)
2. Be pragmatic with local merge/squash (speed)

## Development
Project uses React, read on about the design decisions and how to build.

### Dev process 
1. `npm install` installs all related dependencies
2. `npm start` run's and exposes on port 3000 

#### Use these locations in the browser
* [Popup Profiles](http://10.192.142.10:3000/index.html#popup) - /index.html#popup
* [Settings](http://10.192.142.10:3000/index.html#settings) - /index.html#settings

## Build
The build process will build a versioned artifact
1. Keep or bump the version 
2. `npm run build`

### Running build version in browser
1. Build with `npm run build`
2. Open `chrome://extensions` in chrome
3. Ensure "developer mode" is on
4. Load unpacked extensions
5. Choose the `build` dir to load from

## Deploy
Need to use Google Chrome Webstore https://chrome.google.com/webstore/devconsole/

Follow these steps:
1. Change the version in `package.json`
2. `npn run build`
3. Test in the browser, go to `chrome://extensions` choose load unpacked and choose `build` dir
4. Go to https://chrome.google.com/webstore/devconsole
5. Choose `package`
6. Choose `upload new package`
7. Select the deploy package from `deploy` dir (this is created by the build process)



## Development Decisions
Here you can understand the decisions taken for each aspect.

### Font Awesome
Using Font Awesome for the profile icons, need to perform explicit imports.
See: https://github.com/FortAwesome/react-fontawesome#explicit-import

### Multiple react entry paths
When you're building a chrome extension, there multiple or "custom" webpage examples of how to have "multiple entry points to create-react-app". This problem can be summarized as Essentially one does not want to "eject" then build for all configs because you then need to spend time customising, maintaining, etc. Keeping things simple (that's how I like to roll), found a good solution.

Looking to solve this issue, found a simple, elegant solution using ```react-router``` "HashRouter".
See: https://github.com/facebook/create-react-app/issues/1084#issuecomment-448631037

## Running in LXD container
First create the container, use bash tools see: https://github.com/eugene-the-red/bash-scripts

### Example of creating container
Create the container using bash tool (will create Alpine Linux container by default)

`./lxc-create-node-container.sh profile-jumper 10.192.142.10 /projects/code/profile-jumper`

### Running container
The container needs to be executed as the user 1000 (contain it's a little different with Alpine)
* `profile-jumper.start.lxc` or `lxc start profile-jumper` (the former is custom bash alias)
* `profile-jumper.run-in.lxc` or `lxc exec profile-jumper --user 1000 bash` (the former is custom bash alias)

## Dependencies

### React dependencies
* react-router + react-router-dom
* react-move

### Updating node dependencies
Node dependencies can have vulnerabilities, so it's a good idea to update.
* `npm outdated` (see outdated dependencies)
* `npm update`
* `npm audit fix`


## References
Google developer docs are available here:
https://developer.chrome.com/extensions/devguide
