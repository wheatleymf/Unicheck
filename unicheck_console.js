let Unicheck = {
    Get: function(id) {
        let text = document.getElementById(id).innerText;
        let length = text.length;
        return [text, length];
    },
    SingleChar: function(id, pos) {
        let text = Unicheck.Get(id)[0];
        let inputlength = Unicheck.Get(id)[1];
        console.log(`Test output: text is <i>"${text}"</i>, length is <i>${inputlength}</i>`);

        let simple = text.codePointAt(pos);
        let hex = text.codePointAt(pos).toString(16);
        let output = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
        console.log(`[ID <i>${id}</i> | POSITION <i>${pos}</i>] Character code for position <i>${pos}</i> is <i>${output}</i> (simple: <i>${simple}</i>)`);
    },
    AllChars: function(id) {
        let content = Unicheck.Get(id);
        console.log(`Text is "${content[0]}", length is ${content[1]}`);

        for (let i = 0; i < content[1]; i++) {
            let simple = content[0].codePointAt(i);
            let reverse = String.fromCodePoint(simple);
            let hex = content[0].codePointAt(i).toString(16);
            let output = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
            console.log(`>> POSITION ${i} SYMBOL "${reverse}" || CHARACTER CODE IS ${output} (simple: ${simple})`);
        }
    }
}