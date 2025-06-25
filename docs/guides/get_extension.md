---
title: Get ConvertBox!
description: Get ConvertBox!
---
# Get ConvertBox!
## Developer mode (Chrome)
Assuming you're using a Chrome-based browser:
- Go to the [latest GitHub release](https://github.com/solarcosmic/ConvertBox/releases/latest) and download "convertbox-chrome.zip" OR download the [latest GitHub release's archive here](https://github.com/solarcosmic/ConvertBox/releases/latest/download/convertbox-chrome.zip) OR clone it using Git from the [GitHub repository](https://github.com/solarcosmic/ConvertBox).
- Unarchive the ConvertBox archive you have downloaded (or if you have cloned from Git, skip this step)
- Go to `chrome://extensions`
- Check "Developer mode"
- Click on "Load unpacked"
- Locate the folder where ConvertBox is installed and click "Open", then Enjoy!

### Cloning and basic running/building (from the README)
**NOTE: Below is to build the project, not necessarily install the extension.**

To build this project, you must have [Git](https://git-scm.com/) and [npm](https://www.npmjs.com/) installed. You can use [npx](https://docs.npmjs.com/cli/v8/commands/npx) and other alternatives if you prefer.
You can easily get ConvertBox up and running by building in a matter of minutes. To start, just clone the repository:

```
git clone https://github.com/solarcosmic/ConvertBox.git
```
Once done, change your current directory to the newly cloned one and run `npm install` to gather the required dependencies.
```
cd ConvertBox
npm install
```
Note that `npm install` may show a few warnings. This is fine to ignore for now.
To start using an almost live-refreshable version of ConvertBox (for active developing purposes), do the following command:
```
npm run watch
```
If you would like to build ConvertBox for Chrome:
```
npm run build
```
Please note that the compiled version of ConvertBox will be available in the `dist` folder. This includes the live-refreshable version as well.