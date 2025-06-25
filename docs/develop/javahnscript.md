---
title: 🔧 Mastering JavahnScript (Concept)
description: best thing ever
---
# 🔧 Mastering JavahnScript (Concept)
This guide assumes you know Python as a base point.

Learning JavahnScript is easy. From a beginner's perspective, it can look challenging compared to other languages. However, mastering JavahnScript is the fun part.

Take this example:
```
message = javahn_input: command(text);save="Hello from .jvhn file!"
javahn_print: Hi!
counter = javahn_input: command(number);save="42"
javahn_if: counter == "43"
javahn_print: It is 43 instead actually!
```

Let's break it down into chunks.

```
message = javahn_input: command(text);save="Hello from .jvhn file!"
```
First of all, we have the `message` variable. However, unlike other languages like Python, we have to define what we're going to be storing in this variable, hence `javahn_input`. In the future, this would be good to prevent overwriting a variable with something that doesn't match its type.

Again, we also have to define something else. This is technically the actual type. `command(text)` tells the interpreter that what we are going to be storing in this variable will be a string. Make sure this is followed by a semicolon (`;`).

Next, we have `save="Hello from .jvhn file!"`. After the semicolon, we now specify what we want to write to that variable. Since we've chosen "text", we can now input our string, surrounded by double quotes.

Now, to print a message, we can use `javahn_print`. In this example, we've specified a variable, although below will also work:
```
javahn_print: Hi!
```
The reason this works is because `javahn_print` will always expect the input to be a string. Therefore, we do not need to surround our string with quotes when we use `javahn_print`.

Let's take this a step further and utilise numbers in a variable.
```
counter = javahn_input: command(number);save="42"
```
Same principle as before, however instead of `command(text)`, we use `command(number)` for extra high-fidelity (as we want the interpreter to know what we're storing). However, the number itself should still be stored in a string.

If statements! We love these. However, in JavahnScript, since we favour simplicity over functionality, if statements are now in the same line and nothing needs to be indented.
```
javahn_if: counter == "42"
```
We're using the counter variable we defined, and since JavahnScript loves strings, we are comparing that number variable to a string. Crazy!

Then, for good practice, we shall end the script to prevent possible memory leaks because, as stated previously, we prefer simplicity over functionality.
```
javahn_script_thread::END()
```

To run our script that we've made, save it in a file that ends in .jvhn in the same directory as JavahnScript.py, and specify it when you run it in a terminal/command prompt.
```
> python JavahnScript.py example.jvhn
Hi!
Condition is true!
```

If you want, you can make things go more in depth (there are some new things, but mostly the same e.g. `javahn_endif`):
```
message = javahn_input: command(text);save="Hello from .jvhn file!"
javahn_print: message
counter = javahn_input: command(number);save="42"

javahn_if: counter == "42"
javahn_print: The counter is 42!
message = javahn_input: command(text);save="This will only show if counter is 42"
javahn_print: message
javahn_endif:

javahn_if: counter == "43"
javahn_print: This won't show because counter is not 43
message = javahn_input: command(text);save="This won't be saved"
javahn_print: This won't show either
javahn_endif:
```
Which outputs:
```
> python JavahnScript.py example.jvhn
Hello from .jvhn file!
The counter is 42!
This will only show if counter is 42
```
