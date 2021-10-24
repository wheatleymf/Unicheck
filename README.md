![this script, summarized](https://i.imgur.com/nYpBaLe.png)
# Unicheck
Extremely sloppy and simple tool to check each character code via any browser console. I am not experienced that much with JS so don't expect it to be nice and universal, it sucks but it does its function more or less. 
## Using
Method is quite weird, but hey, at least it works. 
### Insert the code
* Open console (`F12` in Chrome, `Ctrl+Shift+I` for Discord)
* Nothing special here. Just copy the script and paste it in the console. After that it will be accessible at anytime and ready for use. (browser will autosuggest `Unicheck` if it's "injected" correctly)
### Grabbin' That Text
There are two ways to fetch the text you need: 

* **Selection**: Pretty much the easiest way to use this script. Once you have imported the code, it'll be available for use at any time. Highlight any area you need, after that use `Unicheck.AllChars(null, true)`. It will grab the copied text and check it. Use `SingleChar` instead of `AllChars` if only one character has to be checked. As long as second argument is `true` (or has any other value), ID and other information within the first argument will be ignored and selection fetch will remain preferred.
* **Using element ID** (masochist path): if you know the ID for your DIV containing the interesting information, you can use `Unicheck.AllChars("your ID goes here");`. No need to pass the second argument there as it's not mandatory and without it script will find the information by desired ID.

## Why?
Sometimes you cannot just check the character code by copying and pasting the source message in any kind of character checker. Good example are [non printable characters](https://web.itu.edu.tr/sgunduz/courses/mikroisl/ascii.html) - they may appear in the original message, but after pasting them somewhere else they disappear. Even editing the original DOM element will end up erasing them. In such cases content needs to be checked using the source element directly on that page using built-in console. I feel like this is the only reason why this thing exists. 

But again, I'm not experienced with JS. It's not the easiest thing to use. But it works.
