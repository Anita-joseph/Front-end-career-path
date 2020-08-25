function missingLetters(str) {
    let missing = '';
    str = str.split('').map(function(letter) {
        return letter.charCodeAt();
    })

    for (var i = 0; i < str.length; i++) {
        if (str[i + 1] - str[i] > 1) {
            return missing = String.fromCharCode(str[i] + 1);
        }
    }
    return undefined
}