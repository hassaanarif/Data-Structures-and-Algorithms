
/*Inheritance Example*/

class HtmlElement {
    constructor() {
        this.click = () => console.log("Clicked");
    }
    focus() {
        console.log("Focused");
    }
}

class HtmlSelectElement {
    constructor(items = []) {
        this.items = items;
        this.addItem = argu => {
            this.items.push(argu);
            console.log(this.items);
        };

        this.removeItem = argu => {
            this.items.splice(this.items.indexOf(argu), 1);
            console.log(this.items);
        };

        this.render = () => {
            document.write(`<select>`);
            for (let i of this.items)
                () => { return document.write(`<option>${i}</options>`); };
            document.write(`</select>`);
        };
    }
}

class HtmlImageElement {
    constructor(source) {
        this.source = source;
        this.render = () => { document.write(`<img src="${this.source}" />`); };
    }
}
