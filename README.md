# Unicheck
Extremely sloppy and simple tool to check each character code via any browser console. I am not experienced that much with JS so don't expect it to be nice and universal, it sucks but it does its function more or less. 
## Using
Method is quite weird, but hey, at least it works. 
### Insert the code
* Open console (`F12` in Chrome, `Ctrl+Shift+I` for Discord)
* Nothing special here. Just copy the script and paste it in the console. After that it will be accessible at anytime and ready for use. (browser will autosuggest `Unicheck` if it's "injected" correctly)
### Grabbin' That Text
* You gotta locate the DOM element containing the message you want to check.
* Perfectly, message you're be looking for will have an unique ID or class, but none of query methods never seem to successfully locate such elements. Sometimes layout is going to be extremely confusing with tons of random characters and other mess filling up the element attributes, which is what happening with most of apps like Discord.
* For Discord, you can just find the block responsible for message/embed text and add attribute, like `id="DiscordSucks`. After that, script will be able to find the element and its text. This will most likely read & check other unnecessary text, but it's not a big deal.
### Run the script
* When you have found the element with text you're looking for and you found/assigned the ID you need, just type in console `Unicheck.AllChars("your ID goes here");`.
* Console will be filled with console log outputting information about each character in that text. Both in \uXXXX format and simple code. That's it.
* Additionally, you can check the character code at specific position using `Unicheck.SingleChar("your ID goes here", position number)`. 

## Why?
Sometimes you cannot just check the character code by copying and pasting the source message in any kind of character checker. Good example are [non printable characters](https://web.itu.edu.tr/sgunduz/courses/mikroisl/ascii.html) - they may appear in the original message, but after pasting them somewhere else they disappear. Even editing the original DOM element will end up erasing them. In such cases content needs to be checked using the source element directly on that page using built-in console. I feel like this is the only reason why this thing exists. 

But again, I'm not experienced with JS. It's sloppy and hard for use if you're not familiar with the HTML layout of page/app you're working with. But it works.
