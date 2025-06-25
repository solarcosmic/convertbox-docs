---
title: 🏄 Using the Navbar Editor
description: This guide shows you how to use the Navbar Editor.
---
# Using the Navbar Editor
<p style="color:rgb(121, 121, 121);">ℹ️ <span style="font-style: italic;">To see the changes, you must be logged into the Kamar web interface.</span></p>
With the release of v1.2, making your own navbar layout is now entirely possible. To do this, click on the "Customise" button next to "Dynamic Navbar" in Settings.

| ![Part 1 Image](/imgs/using_the_navbar_editor/img01.png) | 
|:--:| 
| *The "Customise" button on the Settings page.* |

You'll be greeted with a simple interface. At the top, you have a preview of what the navbar would look like. Then, you have five buttons.
- Add New Element: Adds a new item to the navbar.
- Add New Dropdown: Adds a new dropdown to the navbar, which can hold more items.
- Save Changes: Applies the changes to the actual navbar.
- Clear All Elements: Remove all of the current custom navbar items.
- Reset to Defaults: Resets back to the stock BetterKMR custom navbar.

Also, there is an "Autosave" function, which automatically updates and applies your changes when you make them.
| ![Part 2 Image](/imgs/using_the_navbar_editor/img02.png) | 
|:--:| 
| *A brief overview of the Dynamic Navigation Editor.* |

## Creating a new layout
First of all, let's click "Clear All Elements" to remove all of the elements so we can start from scratch. Then, we can click "Add New Element".

| ![Part 3 Image](/imgs/using_the_navbar_editor/img03.png) | 
|:--:| 
| *Adding a "Home" item.* |

Let's put in "Home" as the title of the item, and `/` as the URL. The `/` (forward slash) indicates the home path, which is the main page on Kamar.

| ![Part 4 Image](/imgs/using_the_navbar_editor/img04.png) | 
|:--:| 
| *Our new item, "Home", should now be present at the top.* |

Let's add another item. Click on "Add New Element". We'll add a "Notices" title. Set the new item's title to "Notices" (or whatever you wish) and we'll point the URL to `/notices`, as that is the "URL path" for the notices category. There should be an autocomplete list.

| ![Part 5 Image](/imgs/using_the_navbar_editor/img05.png) | 
|:--:| 
| *NOTE: To rearrange the order of the items, you can click the arrows on the side.* |

### Dropdowns
Let's add another item, a dropdown. This can hold multiple items. So, click on "Add New Dropdown" and give it a name. I'll call it "Results", but you can change it to whatever you'd like.
Then, click on the "+" icon next to it (be careful not to press the bin!). You should see a new section under that dropdown item which lets us enter an item name, just like how we did in the Elements section. I'll do:

`/results_all` - All
`/results_list` - Current Year

| ![Part 6 Image](/imgs/using_the_navbar_editor/img06.png) | 
|:--:| 
| *An overview of what we have done so far.* |

After adding these, you should notice that our preview has updated (if it hasn't, click Save Changes). You should be able to hover over the dropdown and see the new items.

## Post creation/update
To see our new navbar on Kamar, you should just be able to go directly to it. If it doesn't appear, make sure to click "Save Changes" on the navbar editor.

| ![Part 7 Image](/imgs/using_the_navbar_editor/img07.png) | 
|:--:| 
| *Our custom navbar layout on Kamar.* |