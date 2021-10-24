let Unicheck = {
    Get: {
        Result: function(content) {
            let length = content.length;
            console.log(`Copied message is "${content}", length is ${length}`);

            return [content, length]
        },
        byElement: function(id) {
            console.warn("called search by element");
            let text = document.getElementById(id).innerText;
            return Unicheck.Get.Result(text);
        },
        bySelection: function() {
            console.warn("called selection");
            if (document.getSelection()) {
                let text = document.getSelection().toString();
                return Unicheck.Get.Result(text);
            } else { console.error("There is no selection to copy content from it, dude."); return false; }
        }
    },  
    Read: function (content, pos) {
        let simple = content.codePointAt(pos);
        let reverse = String.fromCodePoint(simple);
        let hex = content.codePointAt(pos).toString(16);
        let output = "\\u" + "0000".substring(0, 4 - hex.length) + hex;

        return [simple, reverse, output];
    },
    SingleChar: function (id, pos, mode) {
        let content = (mode === "selection") ? Unicheck.Get.bySelection() : Unicheck.Get.byElement(id);
        let result = Unicheck.Read(content[0], pos);
        
        console.log(`>> POSITION ${pos} SYMBOL "${result[1]}" || CHARACTER CODE IS ${result[2]} (simple: ${result[0]})`);
    },
    AllChars: function (id, mode) {
        let content = (mode) ? Unicheck.Get.bySelection() : Unicheck.Get.byElement(id);
        console.log("This action return" + content[0]);
        for (let i = 0; i < content[1]; i++) {
            let result = Unicheck.Read(content[0], i);
            console.log(`>> POSITION ${i} SYMBOL "${result[1]}" || CHARACTER CODE IS ${result[2]} (simple: ${result[0]})`);
        }
    }
}