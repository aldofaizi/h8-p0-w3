function balikString(kata) {
    var katabaru = ''
    for (var i = kata.length - 1; i >= 0; i--) {
        katabaru += kata[i]
    }   
    return katabaru
}

console.log(balikString('Hello World'))
