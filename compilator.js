const doBracketsBalance = (str) => {
    const pila = [];
    const open = "({[";
    const close = ")}]";
    for (let i = 0; i < str.length; i++) {
        const inOpen = open.indexOf(str[i]);
        const inClose = close.indexOf(str[i]);
        if (inOpen !== -1) {
            pila.push(str[i]);
        }
        if (inClose !== -1) {
            if (pila[pila.length - 1] === open[inClose]) { // correct close
                pila.pop(); // resolve close
            } else { // incorrect close
                return false;
            }
        }
    }
    return (pila.length === 0);
}

const examples = [ // examples
    { str: "{[()]}", status: true},
    { str: "()[]]asdfasdf{asdfasdf{}asdfasdfasdf}" ,status: false},
    { str: "()[][]{}}" ,status: false},
    { str: "{()[][]{}}" ,status: true },
    { str: "{()[][{}}" ,status: false },
    { str: "{()[asdfasdf]asdfasdf[asdfasdf]{}" ,status: false},
]

examples.forEach((e) => (console.log(e, doBracketsBalance(e.str) === e.status ? "passed": "error" ))); // test