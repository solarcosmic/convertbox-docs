---
title: 🔧 How to Test New Builds
description: To test new builds when we release them, you need to use a GitHub account to download the builds. Every time we commit to the repository, GitHub actions automatically build them.
---
# 🔧 How to Test New Builds
<p style="color: #ff0000">⚠️ NOTE: Intended for InterLabs staff, administrators, and testers only.</p>
<p style="color:rgb(121, 121, 121);">ℹ️ <span style="font-style: italic;">This guide only provides the necessary information for Chrome even though Firefox is mentioned. Please request for help if you are having trouble replicating this on Firefox.</span></p>

### Getting the Build Archive File

To test new builds when we release them, you need to use a GitHub account to download the builds.

However, as a tester, you must let us know of your account so we can add you to the organisation, so that you can download the builds for either (or both) Chrome and Firefox.

Once you have been added to the organisation, head over to the repository [here](https://github.com/Interlabs-Official/BetterKMR) and click "Actions" to view the latest workflow builds.

| ![Part 1 Image](/imgs/how_to_test/2025-04-30_19-03.png) | 
|:--:| 
| *The GitHub Actions page, where builds get automatically made from newest to oldest.* |

Click on the latest build. For this one, we'll be clicking on [Better Settings Look + Code Clean + Redeem Codes #47](https://github.com/Interlabs-Official/BetterKMR/actions/runs/14747362102) because at the time of writing this, this is the latest build.

If asked to test a specific build, you may be given a build number (e.g. #47) or a commit tag (e.g. a2ca09d) which you can find easily on that page.

<p style="color:rgb(121, 121, 121);">ℹ️ <span style="font-style: italic;">Builds get automatically made when a new commit is pushed to main.</span></p>

| ![Part 2 Image](/imgs/how_to_test/2025-04-30_19-10.png) | 
|:--:| 
| *The build page, where we can download the latest build for either Chrome or Firefox.* |

When on the page, there should be a download button next to "extension-chrome" (or "extension-firefox") in the artifacts section. Click on it to get a .zip archive containing the extension.

### Enabling the Extension on Chrome
<p style="color:rgb(121, 121, 121);">ℹ️ <span style="font-style: italic;">This also works for Chromium-based browsers like Brave and Arc.</span></p>

The browser that I'm using is Brave, but the steps are likely similar or exactly the same depending on the browser you're using.

First of all, unzip the build file you downloaded so that it is contained in a folder (using tools like Windows' default archive manager, 7-Zip, etc). Then, go to your browser and type what is shown below:

| ![Part 3 Image](/imgs/how_to_test/2025-04-30_19-18.png) | 
|:--:| 
| *In your browser's URL bar, type chrome://extensions and press Enter.* |

On the Extensions page, there should be a "Developer mode" toggle switch. Turn it on, then click "Load unpacked" and find the folder that was the result of unzipping the build file, and click "Select" or "Choose" (or whatever it is on your device).

| ![Part 4 Image](/imgs/how_to_test/2025-04-30_19-24.png) | 
|:--:| 
| *Note: You do **not** need the "GNOME Shell Integration" extension, this is something specific for my device.* |

If all goes well and is successful, you should get a notification like this below:

| ![Part 5 Image](/imgs/how_to_test/2025-04-30_19-29.png) | 
|:--:| 
| *Note: Even if the notification doesn't appear, it should still be installed on your browser.* |

If you're having trouble, please feel free to let any of the staff know to help assist you.<br>
Happy testing! 🎉