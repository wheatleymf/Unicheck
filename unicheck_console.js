let Unicheck = {
    Get: function (id) {
        let text = document.getElementById(id).innerText;
        let length = text.length;
        console.log(`Copied message is "${text}", length is ${length}`);

        return [text, length];
    },
    Read: function (content, pos) {
        let simple = content.codePointAt(pos);
        let reverse = String.fromCodePoint(simple);
        let hex = content.codePointAt(pos).toString(16);
        let output = "\\u" + "0000".substring(0, 4 - hex.length) + hex;

        return [simple, reverse, output];
    },
    SingleChar: function (id, pos) {
        if (pos == undefined) {
            console.error("Position must be specified when calling a single character check.");
            return false;
        }
        let content = Unicheck.Get(id);
        let result = Unicheck.Read(content[0], pos);
        console.log(`>> POSITION ${pos} SYMBOL "${result[1]}" || CHARACTER CODE IS ${result[2]} (simple: ${result[0]})`);
    },
    AllChars: function (id) {
        let content = Unicheck.Get(id);

        for (let i = 0; i < content[1]; i++) {
            let result = Unicheck.Read(content[0], i);
            console.log(`>> POSITION ${i} SYMBOL "${result[1]}" || CHARACTER CODE IS ${result[2]} (simple: ${result[0]})`);
        }
    }
}