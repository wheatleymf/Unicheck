let Unicheck = {
    Get: function(id) {
        let text = document.getElementById(id).innerText;
        let length = text.length;
        console.log(`Copied message is "${text}", length is ${length}`);

        return [text, length];
    },
    SingleChar: function(id, pos) {
        let content = Unicheck.Get(id);

        let simple = content[0].codePointAt(pos);
        let hex = content[0].codePointAt(pos).toString(16);
        let output = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
        console.log(`[ID <i>${id}</i> | POSITION <i>${pos}</i>] Character code for position <i>${pos}</i> is <i>${output}</i> (simple: <i>${simple}</i>)`);
    },
    AllChars: function(id) {
        let content = Unicheck.Get(id);

        for (let i = 0; i < content[1]; i++) {
            let simple = content[0].codePointAt(i);
            let reverse = String.fromCodePoint(simple);
            let hex = content[0].codePointAt(i).toString(16);
            let output = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
            console.log(`>> POSITION ${i} SYMBOL "${reverse}" || CHARACTER CODE IS ${output} (simple: ${simple})`);
        }
    }
}