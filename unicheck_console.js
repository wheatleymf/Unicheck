let Unicheck = {
    Get: function(id) {
        let text = document.getElementById(id).innerText;
        let length = text.length;
        console.log(`Copied message is "${text}", length is ${length}`);

        return [text, length];
    },
    SingleChar: function(id, pos) {
        if (pos == undefined) {
            console.error("Position must be specified when calling a single character check.");
            return false;
        }
        let content = Unicheck.Get(id);

        let simple = content[0].codePointAt(i);
        let reverse = String.fromCodePoint(simple);
        let hex = content[0].codePointAt(i).toString(16);
        let output = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
        console.log(`>> POSITION ${pos} SYMBOL "${reverse}" || CHARACTER CODE IS ${output} (simple: ${simple})`);
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