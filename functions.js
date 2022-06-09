const beautifulPalindromic = (str) => {
    const mirror = (str) => {
        const subMirrors = [];
        let len = 0;
        let start = 0;
        let end = 0;
        m = 1;
        while (m <= str.length / 2) { // mirror
            const options = []
            for (let j = 1; j <= str.length / 2; j++) { // images
                if (Number.isInteger(m)) {
                    start = Math.abs(m - j);
                    end = Math.abs(m + j - 1);
                } else {
                    start = Math.floor(m - j);
                    end = Math.floor(m + j);
                }
                if (str[start] === str[end]) {
                    options.push({
                        start: Math.abs(start), end: Math.abs(end), m: m, char: str[start]
                    })
                }
            }
            if (!Number.isInteger(m)) {
                options.push({
                    start: Math.floor(m), end: Math.floor(m), m: m, char: str[Math.floor(m)]
                })
            }
            subMirrors.push({ mirror: m, options: options.length > 0 ? options : false, len: options.length });
            m += 0.5;
        }

        const resolveMirrors = (mirrors) => {
            higher = 0;
            mirrors.forEach((m) => {
                if (m.len > higher) {
                    higher = m.len
                }
            })
            const options = (mirrors.filter((m) => (m.len === higher)))[0];
            return options;
        }
        return resolveMirrors(subMirrors);
    }
    const getLen = (m) => {
        let len = 0;
        if (Number.isInteger(m.mirror)) {
            len = m.len * 2
        } else {
            len = m.len * 2 - 1
        }
        return len
    }
    return getLen(mirror(str));
}

const calcBeautifulPalindromic = () => {
    const valueString = document.getElementById('inputStrings');
    console.log(beautifulPalindromic(valueString.value));

}
