// Method Changing

function displayString(str) {
    console.log(str);
    return {
        name: "Eman",
        age : 20,
        displayNumber: function(num) {
            console.log(num);
            return {
                displaySymbols: function(sym) {
                    console.log(sym);
                }
            }
        }
    }
}

displayString("Eman Kashif").displayNumber(100).displaySymbols("$@^^$#^&&##+_!@*$&%*#*");
